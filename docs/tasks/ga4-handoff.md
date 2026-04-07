# GA4 Handoff Note

## Status
Scoped implementation complete; validation partially blocked by missing local Hugo executable

## Branch
Current branch not changed

## Repo
- GitHub repo: `HorizonFoundry/horizonfoundry.github.io`
- Local repo path: `C:\Users\sirch\horizon-foundry-site`

## Measurement ID
`G-T78Q5ZFXR0`

## Files changed
- `hugo.toml`
- `layouts/_default/baseof.html`
- `layouts/index.html`
- `content/contact/_index.md`
- `static/js/cta-tracking.js`
- `docs/analytics.md`
- `docs/tasks/ga4-handoff.md`

## Completed
- GA4 account created
- GA4 property created for Horizon Foundry
- Web data stream created
- Measurement ID obtained
- Task folders created:
  - `docs/`
  - `docs/tasks/`

## Remaining work
- install or expose `hugo` on PATH, then rerun `hugo server`
- install or expose `hugo` on PATH, then rerun `hugo --minify`
- verify homepage, nav, essays, tag pages, and 404 render correctly once Hugo is available
- verify GA remains absent in local development and present in production output once Hugo is available

## Allowed files
- `hugo.toml`
- `layouts/_default/baseof.html`
- `layouts/index.html`
- `content/contact/**` or the contact template if needed
- `static/js/cta-tracking.js`
- `docs/analytics.md`
- `docs/tasks/ga4-handoff.md`

## Out of scope
- copy rewrites
- nav / IA changes
- styling changes
- binary asset changes
- DNS / nameserver / registrar changes
- GitHub Pages config changes
- unrelated cleanup

## Commands run
- `Get-Content AGENTS.md`
- `Get-Content docs/tasks/ga4-setup.md`
- `Get-Content docs/tasks/ga4-handoff.md`
- `Get-Content hugo.toml`
- `Get-Content layouts/_default/baseof.html`
- `Get-Content layouts/index.html`
- `Get-ChildItem -Recurse content\contact,layouts | Select-Object -ExpandProperty FullName`
- `Get-Content content/contact/_index.md`
- `hugo server --disableFastRender`
- `hugo --minify`
- `git diff --name-only`
- `git diff --stat`
- `where.exe hugo`
- `Get-ChildItem -Recurse -Filter hugo.exe | Select-Object -ExpandProperty FullName`
- `git status --short`
- `Get-Command hugo -All -ErrorAction SilentlyContinue | Format-List *`
- `Test-Path` checks for common Hugo install locations
- `where.exe /R C:\Users\sirch hugo.exe`
- `hugo server --disableFastRender` (rerun after handoff update)
- `hugo --minify` (rerun after handoff update)
- `git diff --name-only` (rerun after handoff update)
- `git diff --stat` (rerun after handoff update)

## Validation status
- `hugo server`: failed twice because `hugo` is not installed or not available on PATH in this environment
- `hugo --minify`: failed twice because `hugo` is not installed or not available on PATH in this environment
- `git diff --name-only`: ran successfully and reported:
  - `content/contact/_index.md`
  - `docs/tasks/ga4-handoff.md`
  - `hugo.toml`
  - `layouts/_default/baseof.html`
  - `layouts/index.html`
- `git diff --stat`: ran successfully and reported:
  - 5 tracked files changed
  - 97 insertions
  - 24 deletions
- `git status --short`: confirms additional untracked files:
  - `docs/analytics.md`
  - `static/js/cta-tracking.js`
- Hugo discovery checks did not find a usable `hugo.exe` in PATH, the repo, or the tested common install locations

## Current implementation summary
- Added GA4 service and privacy configuration to `hugo.toml`
- Added production-only embedded GA loading in `layouts/_default/baseof.html`
- Added production-only CTA tracking script include in `layouts/_default/baseof.html`
- Added `cta_click` instrumentation to the homepage hero primary CTA
- Added `cta_click` instrumentation to the homepage hero secondary CTA
- Added `cta_click` instrumentation to the homepage "Want updates" LinkedIn link
- Added `cta_click` instrumentation to the contact page email and LinkedIn links
- Added `docs/analytics.md` with setup, instrumented links, validation guidance, and GA4 follow-up steps

## Blockers
- `hugo` executable is unavailable in the current environment, so required local render/build validation could not be completed

## Notes for next agent
- Read `AGENTS.md` first
- Read `docs/tasks/ga4-setup.md` first
- Keep this PR analytics-only
- Do not widen scope
- Current work is scoped to the allowed GA4 files only
- If Hugo becomes available, rerun the required validation checklist before merging
- Update this file before stopping with:
  - current status
  - branch
  - files changed
  - commands run
  - validation results
  - remaining work / blockers
