# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Course notes & homework for MATH 474 Probability and Statistics (Illinois Tech). Markdown files with KaTeX/LaTeX math, rendered by the parent website repo (`andrew-chang-dewitt/resume`) as a git submodule.

No build system lives here. All rendering happens in the parent repo (`/home/andrew/dev/website/`) via `vite-plugin-static-md`. To preview changes: run `npm run dev` from the parent repo root.

## File organization

- `hw/` — current semester homework (Summer 2026)
- `hw_old_1/`, `hw_old_2/` — previous semester homework (kept for reference)
- `notes/` — lecture notes, one file per lecture/topic
- `shared/` — CSS used by the parent renderer
- `ignore/` — gitignored; holds the textbook PDF

## Markdown conventions

**Frontmatter** (notes files use full metadata; hw files often use minimal):
```yaml
---
title: "..."
description: "..."
keywords: [...]
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-28T11:25-06:00"
---
```

Homework files that render their own `# Title` heading use `meta: skipRenderTitle: true`.

**Question blocks** — wrap problem statements in a fenced div:
```markdown
:::{.question}
> problem text quoted here
:::
```

**Math** — KaTeX. Inline: `$...$`. Display: `$$...$$`. Use `\begin{align*}` for multi-line solutions. The `\space_\blacksquare` pattern marks end-of-solution (QED-style). Cross-references use `\tag{n.m}` and `\htmlClass{hljs-comment}{\textit{\{n.m\}}}` to cite earlier results.

**Inline `$...$` delimiter rules** — the renderer (`marked-katex-extension`) uses this regex, which silently fails to render (leaves raw `$...$` text on the page) if violated:
```js
/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/
```
- Char immediately **before** opening `$` must be whitespace or start-of-line — never a letter, digit, `(`, `"`, etc.
- Char immediately **after** closing `$` must be whitespace, one of `. , : ? !`, or end-of-line — **never** `;`, `)`, `]`, `-`, a letter/digit, or other punctuation.
- Semicolons are the most common trap: `$x$;` breaks. Use a comma or restructure instead: `$x$,` or rephrase to drop the semicolon.
- Closing parens are the other trap: `($x$)` breaks. Add a space before the `)`: `($x$ )`, or move the paren outside differently.
- Display math (`$$...$$`) is not affected by this rule.
- `$$...$$` blocks inside `> [!IMPORTANT]`/`> [!ASIDE]` callouts need a blank `>` line before *and* after the block — without it, the block gets swallowed into the preceding prose line and fails to tokenize as math.

**After writing or editing any KaTeX (inline `$...$` or display `$$...$$`)**, run `node scripts/check-katex.mjs <file.md>` (from this repo root) on the touched file(s) before considering the change done. It catches two failure modes: spans that never tokenize as math at all (left as raw `$`-containing text — the delimiter-adjacency bugs above), and spans that tokenize but contain invalid LaTeX that only errors when KaTeX actually renders it (e.g. a broken delimiter earlier swallows a later `$` into the same span). A "clean" result from one run isn't final proof for a file with several bugs — `marked.parse()` throws on the *first* render error and stops, hiding later ones — so re-run after each fix until it stays clean across a couple of consecutive runs. For extra confidence, spot-check the rendered page too: `curl http://localhost:5173/blog/notes/math_474/<slug>/` against the running dev server (`npm run dev` from the parent repo) and grep for stray `$` or `katex...error` in the output.

**Notes filenames** follow `MMDD-topic_slug.md` (e.g. `0128-ch_3_3_to_4-axioms_prop_unions_additions.md`).

**Hw filenames** follow `hw-NN.md` for current semester; old semesters used `hw_NN.md`.

## Textbook

Walpole, Myers & Myers — *Probability & Statistics for Engineers and Scientists*, 9th ed. Problem numbers in hw files reference this edition.
