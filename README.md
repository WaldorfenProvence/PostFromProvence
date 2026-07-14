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

## Build & Deploy

```bash
pnpm build
```

### Deploy to Cloudflare Pages (dev)

```bash
source ~/.cloudflare-test.env   # same credentials file used by waldorf-en-provence
npx wrangler pages deploy dist --project-name=postfromprovence-dev
```

This creates/updates a project at `postfromprovence-dev.pages.dev`, since the
`postfromprovence.com` domain isn't registered yet. Once you own the domain,
attach it as a custom domain on this Cloudflare Pages project — no code
changes needed.

### Deploy to production (once domain is ready)

```bash
source ~/.cloudflare-prod.env
npx wrangler pages deploy dist --project-name=postfromprovence
```

## What's Built So Far (Phase 1)

- Home, Mail Club, Shop (coming-soon placeholder), About pages
- Mail Club content ported from `waldorf-en-provence`'s `MailClubTab.tsx`
- Color palette carried over from `waldorf-en-provence`'s design tokens
  (`client/src/index.css`)
- Typeface is a placeholder (`Fraunces` + `Inter`) — swap
  `--font-serif`/`--font-sans` in `index.css` and the Google Fonts link in
  `index.html` once a final typeface is chosen
- Mail Club "waitlist" signup form is a local-only stub (just flips to a
  thank-you state) — not wired to any backend yet
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
