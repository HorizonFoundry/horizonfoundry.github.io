# Agent Instructions (Horizon Foundry)

This repository powers https://www.horizon-foundry.com (Hugo static site).
The goal is a durable, minimal, professional “engineering lab” platform.

---

## 1) Source of truth: Brand + tone
- `BRAND.md` is the canonical brand spec. **Do not drift.**
- If a change introduces new colors, typography, spacing rules, or visual components,
  update `BRAND.md` in the same PR.
- Tone: precise, calm, systems-oriented. Avoid hype and marketing fluff.

---

## 2) Engineering standards
### Change management
- Make small, reviewable changes (one concern per PR).
- Prefer edits that minimize churn (avoid reformatting unrelated code).
- Keep diffs clean and scoped.

### Comments & readability
- Add comments when structure is non-obvious:
  - Hugo templates: section headers describing intent and data sources.
  - CSS: organize into sections (variables, base, layout, header/nav, components).
- Comments should explain *why* the structure exists (intent), not restate the code.

### Best practices (web)
- No JS framework. Keep dependencies minimal.
- Respect system theme via `prefers-color-scheme`. No theme toggle unless requested.
- Accessibility: meaningful alt text, semantic HTML (`header`, `nav`, `main`, `footer`).
- Performance: avoid large assets; prefer optimized images.
- SEO basics: titles are correct, OG tags use correct paths when requested.

---

## 3) Repo conventions
### Hugo structure
- Content: `content/` (Markdown w/ front matter).
- Layouts: `layouts/` (templates & partials).
- Static assets: `static/` (images, icons, social preview, css).

### Naming
- Use stable, predictable filenames (kebab-case).
- Prefer `/static/images/...` and reference assets as `/images/...`.

---

## 4) Brand requirements (must follow)
- Accent color: `#B87333` (burnished copper).
- Background/text controlled via CSS variables.
- Owl mark:
  - Do not recolor, stretch, or distort.
  - Prefer circular presentation in header and icons.
- Keep visual design minimal: whitespace, deliberate hierarchy, no decorative clutter.

---

## 5) Guardrails: do not change unless explicitly asked
- DNS / nameservers / registrar settings
- `CNAME` contents
- GitHub Pages settings and domain configuration
- Repo visibility or permissions
- Large structural rewrites without approval

---

## 6) Binary assets policy
- Avoid editing binary files (`.png`, `.ico`) unless explicitly requested.
- If binary changes are required, isolate them:
  - one commit for assets
  - one commit for code/template changes

---

## 7) Verification checklist (required)
When making template/CSS/content changes:
1) Run: `hugo server`
2) Validate:
   - homepage renders
   - header/nav links work
   - essays render + tag pages list content
   - 404 page renders
3) Check light + dark mode
4) Confirm no broken asset paths (logo, favicon, OG image)

---

## 8) Documentation discipline
- If you add a new reusable component or section, update:
  - `README.md` (how to run / where content lives), or
  - `BRAND.md` (if it affects visual rules)

---

## 9) If OpenAI/Codex docs are needed
Use the OpenAI developer documentation MCP server for OpenAI/Codex/API details.

---

## 10) Task handoff protocol
- For scoped implementation work, read the relevant file in `docs/tasks/` before making changes.
- If a handoff file exists for the task, read it first and continue from current repo state.
- Do not restart a task from scratch if partial work already exists in the branch.
- Update the task handoff file before stopping with:
  - current status
  - files changed
  - commands run
  - validation results
  - remaining work / blockers
