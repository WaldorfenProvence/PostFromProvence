import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-4 text-5xl sm:text-7xl font-serif leading-tight text-[#6B7A4F] mb-8">
          {t.hero.subscribeTo}
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-28 sm:h-44 w-auto inline-block"
          />
        </h1>
        <p className="text-xl sm:text-2xl text-earth-700 leading-relaxed">
          {t.hero.intro}
        </p>
      </div>
    </section>
  );
}
