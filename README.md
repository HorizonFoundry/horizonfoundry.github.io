# Horizon Foundry (v1) - Hugo + GitHub Pages

This is a Hugo static site deployed by GitHub Actions.

## Recommended GitHub Pages setup (clean URLs)

Use a **User/Org Pages** repo so the site is served from the domain root:

- Repo name: **<your-github-user-or-org>.github.io**
- Branch: **main**
- Folder: **/(root)**

This avoids the "/<repo-name>/" base-path issue and keeps absolute links (e.g., `/about/`) working.

## Deploy steps

1. Create the repo **<your-github-user-or-org>.github.io**
2. Commit/push this folder to `main`
3. GitHub repo -> **Settings -> Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Add your custom domain in the Pages settings:
   - `horizon-foundry.com`
   - Enable **Enforce HTTPS** (after the cert provisions)

## DNS (at your registrar)

Keep any existing MX/email records. Add these website records:

- Apex/root domain (`@`): add the 4 **A** records GitHub Pages uses
- `www`: add a **CNAME** to your GitHub Pages host (`<your-github-user-or-org>.github.io`)

GitHub's UI will also show the exact records it expects for verification.

## Using Codex effectively

Codex is best used as an "agent that ships small PRs":

- Ask it to make one focused improvement at a time.
- Require a diff + a quick rationale.
- Have it run a simple link check and validate HTML.

Suggested first Codex tasks:
- Add OpenGraph metadata + a social preview image placeholder
- Add a "Now" page and a minimal "Changelog"
- Add a lightweight "Essays" template for new posts
- Add a simple link-check script and run it in CI
