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

**Notes filenames** follow `MMDD-topic_slug.md` (e.g. `0128-ch_3_3_to_4-axioms_prop_unions_additions.md`).

**Hw filenames** follow `hw-NN.md` for current semester; old semesters used `hw_NN.md`.

## Textbook

Walpole, Myers & Myers — *Probability & Statistics for Engineers and Scientists*, 9th ed. Problem numbers in hw files reference this edition.
