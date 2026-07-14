const TIERS = [
  { label: "Monthly", months: 1, pricePerMonth: 15, total: 15, savePct: null },
  { label: "6 Months", months: 6, pricePerMonth: 13, total: 78, savePct: 13 },
  { label: "1 Year", months: 12, pricePerMonth: 12, total: 144, savePct: 20 },
];

export default function SubscriptionTiers() {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-5">
        {TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`relative rounded-2xl p-6 text-center border ${
              tier.months === 12
                ? "bg-blue-50 border-blue-200"
                : "bg-warm-100 border-warm-200"
            }`}
          >
            {tier.savePct && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cdb42d] text-earth-900 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                Save {tier.savePct}%
              </span>
            )}
            <img
              src="/envelope.png"
              alt=""
              aria-hidden="true"
              className="h-16 w-auto mx-auto mb-3 mt-2"
            />
            <h4 className="font-sans font-semibold text-earth-800 mb-3">
              {tier.label}
            </h4>
            <div className="flex justify-center items-baseline gap-1 mb-1">
              <span className="text-2xl font-sans font-bold text-blue-600">
                €{tier.pricePerMonth}
              </span>
              <span className="text-earth-700 text-sm">/month</span>
            </div>
            <p className="text-xs text-earth-700/70 mb-5">
              €{tier.total} billed every {tier.months}{" "}
              {tier.months === 1 ? "month" : "months"}
            </p>
            <a
              href="#waitlist"
              className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-earth-700/70 mt-6">
        Also available as a gift subscription — a beautiful, lasting present
        for someone you love.
      </p>
    </div>
  );
}
