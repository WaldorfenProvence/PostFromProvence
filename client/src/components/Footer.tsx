import { useLanguage } from "../LanguageContext";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 mt-16 text-[#6B7A4F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <div>
          <h4 className="font-sans text-sm uppercase tracking-wide font-semibold mb-3">
            {t.footer.connect}
          </h4>
          <a
            href="mailto:hello@postfromprovence.com"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            hello@postfromprovence.com
          </a>
        </div>
        <SocialIcons />
        <div>
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-10 w-auto mb-3 mx-auto"
          />
          <p className="text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div className="w-full border-t border-warm-200 pt-6 text-xs opacity-70">
          <p>&copy; {new Date().getFullYear()} Post From Provence.</p>
        </div>
      </div>
    </footer>
  );
}
