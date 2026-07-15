import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <div>
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-10 w-auto mb-3 mx-auto"
          />
          <p className="text-sm leading-relaxed text-earth-700">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm uppercase tracking-wide font-semibold text-earth-800 mb-3">
            {t.footer.connect}
          </h4>
          <a
            href="mailto:hello@postfromprovence.com"
            className="text-sm text-earth-700 hover:text-slate-600 transition-colors"
          >
            hello@postfromprovence.com
          </a>
        </div>
        <div className="w-full border-t border-warm-200 pt-6 text-xs text-earth-700/70">
          <p>&copy; {new Date().getFullYear()} Post From Provence.</p>
        </div>
      </div>
    </footer>
  );
}
