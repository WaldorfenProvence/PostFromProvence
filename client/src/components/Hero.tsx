import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-4 text-3xl sm:text-5xl font-serif leading-tight text-earth-800 mb-6">
          {t.hero.subscribeTo}
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-24 sm:h-36 w-auto inline-block"
          />
        </h1>
        <p className="text-lg text-earth-700 leading-relaxed">{t.hero.intro}</p>
      </div>
    </section>
  );
}
