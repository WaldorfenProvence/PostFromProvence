# Post From Provence

Phase 1: static landing site (content + look-and-feel), no e-commerce backend
wired up yet — see the plan artifact from setup for full context.

## Tech Stack

Same as `waldorf-en-provence`: Vite + React + TypeScript + Tailwind CSS,
static, deployed to Cloudflare Pages.

## Local Development

```bash
pnpm install
pnpm dev
```

## Deploy

Deploys automatically via Cloudflare Pages' Git integration — every push to
`main` on [github.com/WaldorfenProvence/PostFromProvence](https://github.com/WaldorfenProvence/PostFromProvence)
triggers a build and publishes to `postfromprovence.pages.dev`. No manual
`wrangler` step needed; Cloudflare runs `pnpm install && pnpm build` itself.

Once the `postfromprovence.com` domain is registered, attach it as a custom
domain on that Cloudflare Pages project — no code changes needed.

The `deploy:dev`/`deploy:prod` scripts in `package.json` are a manual
fallback (local `wrangler` deploy using `~/.cloudflare-school-site.env`
credentials) — not the normal path, since Git-based deploys handle it.

## What's Built So Far (Phase 1)

- Single Home page carries everything (hero, what's inside, pricing,
  waitlist, FAQ) — there's no separate Mail Club page anymore, it was
  folded in since having both felt redundant. Shop (coming-soon
  placeholder) and About remain separate pages.
- Real logo (`wordmark.png`, `stripes.png` in `client/public/`) used as
  the header/footer/heading brand mark and hero accent — extracted from
  `~/Documents/Brand Identity Waldorf en Provence (2).svg`, which is a
  flattened raster export with no live font data.
- Color palette carried over from `waldorf-en-provence`'s design tokens
  (`client/src/index.css`)
- Typeface: `Special Elite` (typewriter, used for big statement headings)
  + `Inter` (body copy and small headings) — swap `--font-serif`/
  `--font-sans` in `index.css` and the Google Fonts link in `index.html`
  if you want to try something else. Special Elite only ships one weight,
  so headings using it skip `font-semibold`.
- `AnimatedEnvelope.tsx` — a small envelope illustration in the hero
  whose flap opens and reveals three peeking contents cards on load, and
  replays on hover.
- Waitlist signup form is a local-only stub (just flips to a thank-you
  state) — not wired to any backend yet
- Consulting ("Pick Our Brains") page intentionally left out. To add it
  back: add a `"consulting"` entry to the `Tab` type in `App.tsx`, the nav
  array in `Header.tsx`, and a rendered case in `App.tsx`

## Not Yet Built (Phase 2+)

- Stripe Billing product/price + Checkout for the Mail Club subscription
- Stripe Customer Portal for self-serve cancel/refund/card updates
- Webhook → mail management system integration (confirm whether that's
  Mailchimp, or something else, before building this)
- Real product photography/video for the hero (currently a color gradient
  placeholder, no photo assets exist yet for this brand)
