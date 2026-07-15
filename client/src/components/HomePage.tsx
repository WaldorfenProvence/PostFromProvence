import Hero from "./Hero";
import StripedBlock from "./StripedBlock";
import SubscriptionTiers from "./SubscriptionTiers";
import FAQSection from "./FAQSection";
import { useLanguage } from "../LanguageContext";
import type { Tab } from "../App";

export default function HomePage({
  onNavigate,
}: {
  onNavigate: (tab: Tab) => void;
}) {
  const { t } = useLanguage();

  return (
    <div>
      <StripedBlock>
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 space-y-20">
          {/* What's Inside */}
          <section className="bg-white/85 rounded-2xl p-6 sm:p-10 font-serif text-[#6B7A4F]">
            <h2 className="text-5xl sm:text-6xl mb-10 text-center">{t.whatsInside.heading}</h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <img
                src="/envelope-treasures.png"
                alt={t.whatsInside.envelopeAlt}
                className="w-64 sm:w-72 flex-shrink-0 h-auto"
              />
              <div className="text-lg sm:text-xl">
                <p className="mb-3">{t.whatsInside.intro}</p>
                <ul className="space-y-2">
                  {t.whatsInside.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="scroll-mt-24">
            <h2 className="text-5xl sm:text-6xl font-serif text-[#B86F4B] mb-10 text-center">
              {t.pricing.heading}
            </h2>
            <SubscriptionTiers />
          </section>
        </div>
      </StripedBlock>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Why */}
        <section className="text-center max-w-2xl mx-auto font-serif text-[#6B7A4F]">
          <h2 className="text-2xl mb-4">{t.why.heading}</h2>
          <p className="leading-relaxed">{t.why.body}</p>
        </section>

        {/* CTA — sends to the shop, which will handle actual checkout */}
        <section
          id="waitlist"
          className="max-w-lg mx-auto text-center scroll-mt-24"
        >
          <h2 className="text-3xl font-serif text-[#6B7A4F] mb-6">
            {t.waitlist.heading}
          </h2>

          <button
            onClick={() => onNavigate("shop")}
            className="bg-slate-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors cursor-pointer"
          >
            {t.waitlist.button}
          </button>
        </section>

        <FAQSection />
      </div>
    </div>
  );
}
