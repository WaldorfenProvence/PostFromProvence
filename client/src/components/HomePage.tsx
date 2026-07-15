import { useState } from "react";
import Hero from "./Hero";
import { LeafIcon } from "./OrganicIcons";
import StripedBlock from "./StripedBlock";
import SubscriptionTiers from "./SubscriptionTiers";
import FAQSection from "./FAQSection";

const ICON_COLOR = "#cdb42d";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <StripedBlock>
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 space-y-20">
          {/* What's Inside */}
          <section className="bg-white/85 rounded-2xl p-6 sm:p-10">
            <h2 className="text-3xl font-serif text-earth-800 mb-8 text-center">
              What's Inside?
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <img
                src="/envelope-treasures.png"
                alt="5 Treasures of the Season"
                className="w-56 sm:w-64 flex-shrink-0 h-auto"
              />
              <div>
                <p className="text-earth-700 mb-3">
                  Each month, receive a handcrafted post from our home in
                  Provence — filled with:
                </p>
                <ul className="space-y-1.5 text-earth-800">
                  <li>• Original watercolour art</li>
                  <li>• Seasonal recipe</li>
                  <li>• An installment of our children's story</li>
                  <li>• A monthly surprise</li>
                  <li>• A letter from our community</li>
                  <li>• All in French and English</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-serif text-terracotta-600 mb-10 text-center">
              Choose Your Subscription…
            </h2>
            <SubscriptionTiers />
          </section>
        </div>
      </StripedBlock>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Why */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif text-earth-800 mb-4">
            Why Mail Club?
          </h2>
          <p className="text-earth-700 leading-relaxed">
            In a world of infinite scroll, there is something radical about
            receiving a physical envelope. Something handmade, seasonal, and
            finite. Each one is a small act of resistance against the
            disposable and the digital.
          </p>
        </section>

        {/* Signup Form — placeholder waitlist capture until Stripe Checkout is wired up */}
        <section
          id="waitlist"
          className="max-w-lg mx-auto text-center scroll-mt-24"
        >
          <h2 className="text-3xl font-serif text-earth-800 mb-4">
            Join the Waitlist
          </h2>
          <p className="text-earth-700 mb-6 text-sm">
            We're preparing our first packets now. Sign up to be notified
            when subscriptions open — early subscribers will receive a
            special inaugural edition.
          </p>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex justify-center mb-2">
                <LeafIcon color={ICON_COLOR} size={28} />
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
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg border border-warm-300 bg-white text-earth-800 placeholder:text-earth-700/40 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <button
                type="submit"
                className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </section>

        <FAQSection />
      </div>
    </div>
  );
}
