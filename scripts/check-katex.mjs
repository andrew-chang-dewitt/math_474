#!/usr/bin/env node
// Lex a notes/hw markdown file the same way the site renderer does and flag
// any text tokens that still contain a raw "$" — these are inline math spans
// that failed to tokenize (usually a "$" adjacent to "(", ")", ";", or at the
// start of a soft-wrapped line — see CLAUDE.md's "Inline $...$ delimiter
// rules"). Also reports a hard KaTeX parse error if one occurs (a "$" got
// swallowed and a later "$" pair became a bogus reopen, embedding a literal
// "$" inside math content).
//
// Usage: node scripts/check-katex.mjs <file.md> [file2.md ...]
// Must be run somewhere under the parent website repo so node's module
// resolution can walk up to its node_modules (marked, marked-katex-extension).

import { marked } from "marked"
import markedKatex from "marked-katex-extension"
import fs from "fs"

marked.use(markedKatex({ trust: true }))

function collectRawDollarText(tokens, out) {
  for (const t of tokens) {
    if (t.type === "text" && /\$/.test(t.raw || "")) {
      out.push(t.raw)
    }
    if (t.tokens) collectRawDollarText(t.tokens, out)
    if (t.items) collectRawDollarText(t.items, out)
  }
}

const files = process.argv.slice(2)
if (files.length === 0) {
  console.error("usage: node check-katex.mjs <file.md> [file2.md ...]")
  process.exit(1)
}

let hadIssue = false
for (const path of files) {
  const text = fs.readFileSync(path, "utf8")
  try {
    const tokens = marked.lexer(text)
    const bad = []
    collectRawDollarText(tokens, bad)
    if (bad.length) {
      hadIssue = true
      console.log(`${path}: ${bad.length} unrendered-looking fragment(s) containing $`)
      for (const b of bad) console.log("  ---", JSON.stringify(b))
    } else {
      console.log(`${path}: clean`)
    }
  } catch (e) {
    hadIssue = true
    console.log(`${path}: PARSE ERROR: ${e.message.split("\n")[0]}`)
  }
}

process.exit(hadIssue ? 1 : 0)
