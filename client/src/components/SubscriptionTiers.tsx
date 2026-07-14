import Envelope from "./Envelope";

const TIERS = ["Monthly", "International", "6 Months", "12 Months"];

export default function SubscriptionTiers() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {TIERS.map((label) => (
          <a
            key={label}
            href="#waitlist"
            className="group block cursor-pointer"
          >
            <Envelope
              label={label}
              className="transition-transform group-hover:scale-105"
            />
          </a>
        ))}
      </div>
      <a
        href="#waitlist"
        className="group block cursor-pointer w-40 sm:w-48 mx-auto mt-8"
      >
        <Envelope
          label="Gift Me"
          className="transition-transform group-hover:scale-105"
        />
      </a>
    </div>
  );
}
