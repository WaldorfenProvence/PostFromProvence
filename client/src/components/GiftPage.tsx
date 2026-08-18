import { useLanguage } from "../LanguageContext";

// Points at the same Monthly recurring products used on the subscribe
// pages — gifting just means billing the buyer's card monthly and
// shipping to the recipient's address, not a separate product.
const EU_HREF = "https://qjndqv-1b.myshopify.com/products/post-from-provence-mail-club";
const INTL_HREF = "https://qjndqv-1b.myshopify.com/products/post-from-provence-mail-club-outside-of-the-eu";

export default function GiftPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-[#6B7A4F]">
      <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-center">
        {t.gift.heading}
      </h2>
      <img
        src="/envelope-monthly-gift.png"
        alt={t.gift.heading}
        className="w-48 sm:w-56 h-auto mx-auto mb-8"
      />
      <p className="leading-relaxed mb-10 text-center">{t.gift.intro}</p>

      <div className="grid sm:grid-cols-2 gap-6">
        <a
          href={EU_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-white/85 rounded-2xl p-6 hover:bg-white transition-colors"
        >
          <h3 className="font-serif text-2xl mb-2">{t.gift.euLabel}</h3>
          <p className="mb-4">{t.gift.euNote}</p>
          <span className="inline-block bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors">
            {t.gift.button}
          </span>
        </a>

        <a
          href={INTL_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-white/85 rounded-2xl p-6 hover:bg-white transition-colors"
        >
          <h3 className="font-serif text-2xl mb-2">{t.gift.intlLabel}</h3>
          <p className="mb-4">{t.gift.intlNote}</p>
          <span className="inline-block bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors">
            {t.gift.button}
          </span>
        </a>
      </div>
    </div>
  );
}
