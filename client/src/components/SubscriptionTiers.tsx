const TIERS = [
  { label: "Monthly", img: "/envelope-monthly.png" },
  { label: "International", img: "/envelope-international.png" },
  { label: "6 Months", img: "/envelope-6months.png" },
  { label: "12 Months", img: "/envelope-12months.png" },
  { label: "Gift Me", img: "/envelope-gift.png" },
];

export default function SubscriptionTiers() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
      {TIERS.map((tier) => (
        <a
          key={tier.label}
          href="#waitlist"
          className="group block cursor-pointer"
        >
          <img
            src={tier.img}
            alt={`${tier.label} — join the waitlist`}
            className="w-full h-auto transition-transform group-hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
}
