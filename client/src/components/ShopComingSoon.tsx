import { useState } from "react";
import { PaletteIcon, LeafIcon } from "./OrganicIcons";

export default function ShopComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center text-[#6B7A4F]">
      <div className="flex justify-center mb-4">
        <PaletteIcon color="#cdb42d" size={40} />
      </div>
      <h2 className="text-4xl sm:text-5xl font-serif mb-4">
        Shop — Coming Soon
      </h2>
      <p className="leading-relaxed mb-8">
        We're working on a small catalog of prints and paper goods inspired
        by each month's Mail Club packet. Join the waitlist to hear when it
        launches.
      </p>

      {submitted ? (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-md mx-auto">
          <div className="flex justify-center mb-2">
            <LeafIcon color="#cdb42d" size={28} />
          </div>
          <p className="text-blue-700 font-medium">
            Thank you! We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-lg border border-warm-300 bg-white text-[#6B7A4F] placeholder:text-[#6B7A4F]/40 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <button
            type="submit"
            className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            Join our Waitlist
          </button>
        </form>
      )}
    </div>
  );
}
