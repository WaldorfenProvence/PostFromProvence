const TIERS = [
  { label: "Monthly", months: 1, pricePerMonth: 15, total: 15, savePct: null },
  { label: "6 Months", months: 6, pricePerMonth: 13, total: 78, savePct: 13 },
  { label: "1 Year", months: 12, pricePerMonth: 12, total: 144, savePct: 20 },
];

export default function SubscriptionTiers() {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
        {TIERS.map((tier) => (
          <a
            key={tier.label}
            href="#waitlist"
            className="group relative block text-center cursor-pointer"
          >
            {tier.savePct && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 bg-terracotta-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                Save {tier.savePct}%
              </span>
            )}
            <img
              src="/envelope.png"
              alt={`${tier.label} — join the waitlist`}
              className="h-48 sm:h-56 w-auto mx-auto mb-4 transition-transform group-hover:scale-105"
            />
            <h4 className="font-sans font-semibold text-earth-800 mb-2">
              {tier.label}
            </h4>
            <div className="flex justify-center items-baseline gap-1 mb-1">
              <span className="text-2xl font-sans font-bold text-slate-600">
                €{tier.pricePerMonth}
              </span>
              <span className="text-earth-700 text-sm">/month</span>
            </div>
            <p className="text-xs text-earth-700/70">
              €{tier.total} billed every {tier.months}{" "}
              {tier.months === 1 ? "month" : "months"}
            </p>
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-earth-700/70 mt-8">
        Also available as a gift subscription — a beautiful, lasting present
        for someone you love.
      </p>
    </div>
  );
}
