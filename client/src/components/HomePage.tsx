import { useState } from "react";
import Hero from "./Hero";
import {
  PaletteIcon,
  BowlIcon,
  PenIcon,
  ScrollIcon,
  LeafIcon,
  FlowerIcon,
} from "./OrganicIcons";
import SubscriptionTiers from "./SubscriptionTiers";
import FAQSection from "./FAQSection";

const ICON_COLOR = "#cdb42d";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero onCta={scrollToWaitlist} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {/* What's Inside */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-serif text-earth-800 mb-12 text-center">
            What Arrives Each Month
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: PaletteIcon,
                title: "Original Art Print",
                desc: "An original and unique watercolour wash, in the colours of the season. No two months alike.",
              },
              {
                Icon: BowlIcon,
                title: "Seasonal Recipe",
                desc: "A recipe using ingredients in season right now in Provence. Simple, nourishing, connected to the land.",
              },
              {
                Icon: PenIcon,
                title: "A Letter",
                desc: "Anecdotes from Provence life — how we're transitioning through the seasons, what's growing, what we're celebrating.",
              },
              {
                Icon: ScrollIcon,
                title: "A Story",
                desc: "A carefully chosen story that speaks to the season, the mood, the moment. Something to pin on the wall or tuck into a book.",
              },
              {
                Icon: LeafIcon,
                title: "A Seasonal Activity",
                desc: "Pressed flowers, seed packets, a hand-dipped beeswax candle, a small piece of handwork — something tactile and real.",
              },
              {
                Icon: FlowerIcon,
                title: "Updated with the Seasons",
                desc: "Each packet reflects the rhythm of the Provençal year — lavender harvest, olive pressing, winter solstice, spring planting.",
              },
            ].map((item) => (
              <div key={item.title} className="p-2">
                <div className="mb-4">
                  <item.Icon color={ICON_COLOR} size={36} />
                </div>
                <h3 className="font-sans font-semibold text-earth-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-earth-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-serif text-earth-800 mb-2 text-center">
            Choose Your Subscription
          </h2>
          <p className="text-earth-700 mb-10 text-center">
            Delivered to your door — international shipping available
          </p>
          <SubscriptionTiers />
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
      </div>
    </div>
  );
}
