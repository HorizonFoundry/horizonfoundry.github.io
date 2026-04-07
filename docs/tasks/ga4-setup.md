# Task: GA4 setup for Horizon Foundry

## Goal
Add GA4 to Horizon Foundry using Hugo’s GA support, production-only loading, and minimal CTA tracking.

## Repo
- GitHub repo: `HorizonFoundry/horizonfoundry.github.io`
- Local repo path: `C:\Users\sirch\horizon-foundry-site`

## Measurement ID
`G-T78Q5ZFXR0`

## Read first
- `AGENTS.md`
- `BRAND.md`

## Allowed files
- `hugo.toml`
- `layouts/_default/baseof.html`
- `layouts/index.html`
- `content/contact/**` or the contact template if needed
- `static/js/cta-tracking.js`
- `docs/analytics.md`
- `docs/tasks/ga4-handoff.md`

## Out of scope
- Copy rewrites
- Navigation/IA changes
- Styling or visual design changes
- Binary asset edits
- DNS / registrar / GitHub Pages configuration
- Any unrelated cleanup

## Requirements
1. Add GA4 config to `hugo.toml` using:
   - `[services.googleAnalytics]`
   - `id = "G-T78Q5ZFXR0"`

2. Add GA privacy settings to `hugo.toml`:
   - `[privacy.googleAnalytics]`
   - `disable = false`
   - `respectDoNotTrack = true`

3. In `layouts/_default/baseof.html`, load Hugo’s embedded Google Analytics partial in production only.

4. Do not paste the raw Google gtag snippet into templates if Hugo’s embedded GA partial is available.

5. Add a minimal JS file at `static/js/cta-tracking.js` for one custom event:
   - event name: `cta_click`

6. Send these event parameters with `cta_click`:
   - `cta_label`
   - `cta_location`
   - `cta_type`
   - `destination`

7. Instrument only these links if present:
   - homepage hero primary CTA
   - homepage hero secondary CTA
   - homepage LinkedIn link in the “Want updates” section
   - contact page LinkedIn link
   - contact page email link if email is made clickable

8. Keep analytics loading out of local development.

9. Add `docs/analytics.md` documenting:
   - where GA4 is configured
   - production-only loading behavior
   - CTA event name and parameters
   - which links are instrumented
   - validation steps using GA4 Realtime / DebugView
   - follow-up manual steps in GA4:
     - create event-scoped custom dimensions for `cta_label`, `cta_location`, and `cta_type`
     - keep Enhanced Measurement enabled
     - Search Console is a separate manual setup

## Acceptance criteria
- `hugo server` works
- `hugo --minify` works
- analytics does not load in local development
- analytics loads in production
- no broken links introduced
- no design/copy/IA drift
- `docs/analytics.md` is added
- `docs/tasks/ga4-handoff.md` is updated before stopping

## Verification steps
Run and report results for:
- `hugo server`
- `hugo --minify`
- `git diff --name-only`
- `git diff --stat`

## Required output before stopping
Provide:
- current status
- files changed
- commands run
- validation results
- remaining blockers or risks

## Notes
This is an analytics-only task. Keep the PR small, reviewable, and scoped.