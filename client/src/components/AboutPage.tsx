import PhotoCarousel from "./PhotoCarousel";
import { useLanguage } from "../LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-[#6B7A4F]">
      <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-center">
        {t.about.heading}
      </h2>
      <PhotoCarousel />
      <p className="leading-relaxed mb-4">{t.about.intro}</p>
      <p className="leading-relaxed mb-4">
        {t.about.school}{" "}
        <a
          href="https://waldorf-en-provence-school-site.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          {t.about.schoolLinkText}
        </a>{" "}
        {t.about.schoolRest}
      </p>
      <p className="leading-relaxed mb-4">{t.about.proceeds}</p>
      <p className="leading-relaxed">
        {t.about.contact}{" "}
        <a
          href="mailto:hello@postfromprovence.com"
          className="underline hover:opacity-70 transition-opacity"
        >
          hello@postfromprovence.com
        </a>
        .
      </p>
    </div>
  );
}
