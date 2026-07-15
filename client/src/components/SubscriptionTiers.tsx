const TIERS = [
  { label: "Monthly", img: "/envelope-monthly.png" },
  { label: "International", img: "/envelope-international.png" },
  { label: "6 Months", img: "/envelope-6months.png" },
  { label: "12 Months", img: "/envelope-12months.png" },
];

export default function SubscriptionTiers() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
      <a
        href="#waitlist"
        className="group block cursor-pointer w-40 sm:w-48 mx-auto mt-8"
      >
        <img
          src="/envelope-gift.png"
          alt="Gift Me — join the waitlist"
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
      </a>
    </div>
  );
}
