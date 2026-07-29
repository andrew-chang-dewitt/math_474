#!/usr/bin/env node
// Lex + render a notes/hw markdown file the same way the site renderer does
// and flag two distinct KaTeX failure modes:
//
// 1. Tokenize failure: a "$...$" span never matches the katex-extension
//    regex at all (usually a "$" adjacent to "(", ")", ";", "'", "/", a
//    letter/digit, or preceded by a soft-wrap newline instead of a literal
//    space — see CLAUDE.md's "Inline $...$ delimiter rules") and is left as
//    raw "$"-containing text. Caught by lexing and scanning text tokens.
//
// 2. Render failure: a "$...$" span DOES match the regex, but matches too
//    much — e.g. a broken delimiter earlier lets the regex skip past it and
//    treat a *later* "$" pair as the real closer, swallowing a stray "$"
//    into the captured math source. This produces a syntactically invalid
//    LaTeX string that only blows up when katex.renderToString() actually
//    parses it — lexing alone never calls that function, so it's invisible
//    to check #1. Caught by running marked.parse() (full render), which is
//    what the live site does and what actually throws the KaTeX ParseError.
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
    // A "text" token that still has nested .tokens is just a wrapper (e.g.
    // list items store their full raw source here even when their children
    // parsed fine) — only leaf text tokens (no .tokens to recurse into)
    // represent content marked gave up trying to parse as anything else.
    if (t.type === "text" && !t.tokens && /\$/.test(t.raw || "")) {
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
  const problems = []

  try {
    const tokens = marked.lexer(text)
    const bad = []
    collectRawDollarText(tokens, bad)
    for (const b of bad) problems.push(`unrendered-looking fragment containing $: ${JSON.stringify(b)}`)
  } catch (e) {
    problems.push(`LEX ERROR: ${e.message.split("\n")[0]}`)
  }

  try {
    marked.parse(text)
  } catch (e) {
    problems.push(`RENDER ERROR (KaTeX failed on real HTML render): ${e.message.split("\n")[0]}`)
  }

  if (problems.length) {
    hadIssue = true
    console.log(`${path}: ${problems.length} issue(s)`)
    for (const p of problems) console.log("  ---", p)
  } else {
    console.log(`${path}: clean`)
  }
}

process.exit(hadIssue ? 1 : 0)
