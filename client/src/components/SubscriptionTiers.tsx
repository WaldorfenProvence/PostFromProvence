import type { Tab } from "../App";

const SHOP_BASE = "https://qjndqv-1b.myshopify.com/products";

const TIERS = [
  { label: "Monthly", img: "/envelope-monthly.png", href: `${SHOP_BASE}/post-from-provence-mail-club` },
  { label: "International", img: "/envelope-international.png", href: `${SHOP_BASE}/post-from-provence-mail-club-outside-of-the-eu` },
  { label: "6 Months", img: "/envelope-6months.png", href: `${SHOP_BASE}/post-from-provence-mail-club` },
  { label: "12 Months", img: "/envelope-12months.png", href: `${SHOP_BASE}/post-from-provence-mail-club` },
];

export default function SubscriptionTiers({
  onNavigate,
}: {
  onNavigate: (tab: Tab) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {TIERS.map((tier) => (
          <a
            key={tier.label}
            href={tier.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer"
          >
            <img
              src={tier.img}
              alt={tier.label}
              className="w-full h-auto transition-transform group-hover:scale-105"
            />
          </a>
        ))}
      </div>
      {/* Same width as one grid column above, at every breakpoint, so it's
          truly the same size rather than an independently-guessed value. */}
      <button
        onClick={() => onNavigate("gift")}
        className="group block cursor-pointer mx-auto mt-8 w-[calc((100%-24px)/2)] sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-96px)/4)]"
      >
        <img
          src="/envelope-gift.png"
          alt="Gift Me"
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
      </button>
    </div>
  );
}
