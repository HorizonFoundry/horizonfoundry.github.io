# GA4 Handoff Note

## Status
Not started

## Branch
TBD

## Repo
- GitHub repo: `HorizonFoundry/horizonfoundry.github.io`
- Local repo path: `C:\Users\sirch\horizon-foundry-site`

## Measurement ID
`G-T78Q5ZFXR0`

## Files changed
- none yet

## Completed
- GA4 account created
- GA4 property created for Horizon Foundry
- Web data stream created
- Measurement ID obtained
- Task folders created:
  - `docs/`
  - `docs/tasks/`

## Remaining work
- update `hugo.toml` with GA4 config
- add GA privacy settings
- add production-only GA partial in `layouts/_default/baseof.html`
- add `static/js/cta-tracking.js`
- instrument targeted CTA links only
- add `docs/analytics.md`
- run validation commands
- update this handoff note with actual status/results

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
- none yet

## Validation status
- `hugo server`: not run
- `hugo --minify`: not run
- `git diff --name-only`: not run
- `git diff --stat`: not run

## Blockers
- none

## Notes for next agent
- Read `AGENTS.md` first
- Read `docs/tasks/ga4-setup.md` first
- Keep this PR analytics-only
- Do not widen scope
- Do not restart from scratch if partial work already exists
- Update this file before stopping with:
  - current status
  - branch
  - files changed
  - commands run
  - validation results
  - remaining work / blockers