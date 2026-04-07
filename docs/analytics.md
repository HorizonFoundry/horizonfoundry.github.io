# Analytics

## GA4 configuration

GA4 is configured in `hugo.toml` with Hugo's built-in Google Analytics service configuration:

- `[services.googleAnalytics]`
- `[privacy.googleAnalytics]`

Measurement ID:

- `G-T78Q5ZFXR0`

## Production-only loading

Analytics is loaded only in production builds from `layouts/_default/baseof.html`.

- Hugo's embedded Google Analytics template is rendered only when `hugo.IsProduction` is true.
- The CTA tracking script at `/js/cta-tracking.js` is also loaded only in production.
- This keeps analytics out of local development during `hugo server`.

## CTA event tracking

Custom CTA tracking is implemented in `static/js/cta-tracking.js`.

- Event name: `cta_click`
- Event parameters:
  - `cta_label`
  - `cta_location`
  - `cta_type`
  - `destination`

The script listens for clicks on links marked with `data-cta-track` and sends the event through `gtag`.

## Instrumented links

Only these links are instrumented:

- homepage hero primary CTA
- homepage hero secondary CTA
- homepage LinkedIn link in the "Want updates" section
- contact page LinkedIn link
- contact page email link

## Validation

Recommended validation steps:

1. Run `hugo server` and confirm the site renders without loading GA locally.
2. Run `hugo --minify` and confirm the production build succeeds.
3. Open a production build and click the instrumented links.
4. Verify `cta_click` events in GA4 Realtime or DebugView.

## Manual follow-up in GA4

Complete these manual steps in GA4 after deployment:

- create event-scoped custom dimensions for `cta_label`, `cta_location`, and `cta_type`
- keep Enhanced Measurement enabled
- set up Search Console separately if desired
