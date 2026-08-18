# Annual Subscription & One-Time Gift Products — Mothballed

**Status as of 2026-08-18:** Parked, not deleted. Live site currently offers
only two products — Pay Monthly France and Pay Monthly International —
reachable from both the region subscribe pages and the Gift page. This doc
is the full spec needed to bring the Annual (one-time, "pay once & save")
option back, exactly as it was working, whenever there's enough confidence
in ongoing volunteer help / subscriber numbers to take on the commitment of
prepaid annual orders.

**Why it was parked:** Taking a year's payment upfront creates real
pressure to keep the mail club running for a full year even if help or
subscriber numbers don't materialize. Monthly billing is much lower-risk —
if it ever needs to stop, existing subscribers are just cancelled, with no
prepaid money owed back.

---

## What existed and worked

### 1. Two standalone one-time Shopify products (self-subscribe "Annual")

These were **plain one-time-purchase products** — critically, `requires_selling_plan: false`,
no selling plan attached. This is what let them work reliably from day one,
sidestepping the recurring-subscription picker bug that affected the Monthly
products for a while.

| | France | International |
|---|---|---|
| Title | Annual Subscription - Post from Provence Mail Club inside France | Annual Subscription - Post from Provence Mail Club International |
| Handle | `annual-subscription-post-from-provence-mail-club-inside-france` | `annual-subscription-post-from-provence-mail-club-international` |
| URL | `https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-inside-france` | `https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-international` |
| Price | €100.00 | €150.00 |

**Description copy used (both, adjust "France" / "outside France" per product):**

> One payment, a full year of Post From Provence. You'll receive 11
> handcrafted editions delivered monthly to your door — we take a little
> summer break in August to rest and gather fresh inspiration, so there's no
> edition that month. Paying upfront works out to 11 months for the price of
> 10, our best value option. This is a one-time payment covering the year
> ahead — there's no automatic renewal, so you're always in control of
> whether to continue.

Pricing logic: base monthly price (€10 France / €15 International) × 10
months = the annual price. Framed to the customer as "11 months for the
price of 10" (11 real deliveries since August is skipped, priced as if only
paying for 10).

### 2. Two standalone one-time Shopify products (Gift)

Same one-time-purchase pattern, same prices, framed as a gift rather than
self-subscribe.

| | France | International |
|---|---|---|
| Title | Gift Subscription - Post from Provence Mail Club inside of the EU | Gift Subscription - Post from Provence Mail Club outside of the EU |
| Handle | `gift-subscription-post-from-provence-mail-club-inside-of-the-eu` | `gift-subscription-post-from-provence-mail-club-outside-of-the-eu` |
| URL | `https://qjndqv-1b.myshopify.com/products/gift-subscription-post-from-provence-mail-club-inside-of-the-eu` | `https://qjndqv-1b.myshopify.com/products/gift-subscription-post-from-provence-mail-club-outside-of-the-eu` |
| Price | €100.00 | €150.00 |

**Description copy used:**

> Give a full year of Post From Provence as a gift. Your recipient will
> receive 11 handcrafted editions delivered monthly to their door — we take
> a little summer break in August to rest and gather fresh inspiration, so
> there's no edition that month. This one-time gift works out to 11 months
> for the price of 10, our best value option. It's a single payment covering
> the year ahead — no renewal to remember, no ongoing commitment, just a
> year of handmade post landing on their doorstep.

**Note:** as of the last check, these products may still exist in Shopify
(unlinked from the site) rather than deleted — check there before recreating
from scratch.

### 3. Cancellation / refund policy for these products

Both the Annual and Gift one-time products are **non-refundable once
purchased** (confirmed decision) — there's nothing to "cancel" since there's
no recurring charge, but no partial refunds for stopping mid-year either.

---

## Site-side code to restore

### `client/src/components/SubscribeOptionsPage.tsx`

Add back the Annual href map and second option:

```tsx
const ANNUAL_HREF = {
  eu: "https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-inside-france",
  intl: "https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-international",
};

// in options array:
{ label: t.subscribe.twelveMonthLabel, img: "/envelope-pay-once.png", href: ANNUAL_HREF[region] },
```

Restore the grid to `grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto` (currently
`grid-cols-1 ... max-w-[220px]` for the single Monthly-only button).

### `client/src/translations.ts` — `subscribe` block

```
twelveMonthLabel: "Annual Subscription",       // FR: "Abonnement annuel"
```

Already present in the type, just re-add to the options array usage above.

The `euIntro` / `intlIntro` copy was simplified to drop the "choose how
often you'd like to be billed" line when Annual was removed — restore that
framing if bringing back the two-option choice:

> For subscribers living in France. Choose how often you'd like to be
> billed — you'll pick the exact plan on the next page.

(FR: "Pour les abonnés vivant en France. Choisissez la fréquence de
facturation souhaitée — vous choisirez le forfait exact sur la page
suivante.")

### `client/src/components/GiftPage.tsx`

Currently points at the Monthly recurring products. To restore the
dedicated one-time Gift products:

```tsx
const EU_HREF = "https://qjndqv-1b.myshopify.com/products/gift-subscription-post-from-provence-mail-club-inside-of-the-eu";
const INTL_HREF = "https://qjndqv-1b.myshopify.com/products/gift-subscription-post-from-provence-mail-club-outside-of-the-eu";
```

### `client/src/translations.ts` — `gift` block (one-time version)

```
heading: "Gift a Subscription",
intro: "Give a year of Post From Provence to someone you love — our Annual Subscription runs September to July, like the school year, with a little summer pause in August. Choose where your recipient lives so we can get the shipping right.",
euLabel: "Recipient in France",
euNote: "11 months for the price of 10",
intlLabel: "Recipient outside France",
intlNote: "11 months for the price of 10",
button: "Choose this option",
```

FR equivalents:

```
heading: "Offrir un abonnement",
intro: "Offrez une année de Post From Provence à quelqu'un que vous aimez — notre abonnement annuel se déroule de septembre à juillet, comme l'année scolaire, avec une petite pause estivale en août. Choisissez où vit votre destinataire pour que nous puissions calculer les frais d'envoi correctement.",
euLabel: "Destinataire en France",
euNote: "11 mois pour le prix de 10",
intlLabel: "Destinataire hors de France",
intlNote: "11 mois pour le prix de 10",
button: "Choisir cette option",
```

### Image assets (already in `client/public/`, untouched, safe to reuse)

- `envelope-pay-once.png` — "Pay once & Save" envelope, used for the Annual
  option tile on the subscribe pages.
- `envelope-gift.png` / `envelope-gift-home.png` — Gift Me artwork, used as
  the header image on the Gift page and the homepage tile.

No dedicated per-region artwork existed for the Gift page's two option
cards (they were plain text cards, not envelope images) — worth considering
if new art should be commissioned for those when this is restored.

---

## Restore checklist

1. Confirm the four Shopify products still exist (check admin — likely just
   unlinked, not deleted). If deleted, recreate using the exact
   titles/prices/descriptions above, as plain one-time products with **no**
   selling plan attached.
2. Restore the code changes above in `SubscribeOptionsPage.tsx`,
   `GiftPage.tsx`, and `translations.ts`.
3. Push, then verify live: click through from the homepage tiles to each
   subscribe/gift page, confirm both Monthly and Annual options show, and
   test add-to-cart on the Annual products returns `200` (not the `422`
   selling-plan error — the one-time products should never show that error
   since they never require a selling plan).
4. Re-confirm the cancellation policy text still correctly describes the
   Annual/Gift products as non-refundable one-time purchases.
