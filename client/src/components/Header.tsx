import type { Tab } from "../App";
import { useLanguage } from "../LanguageContext";

export default function Header({
  activeTab,
  onNavigate,
}: {
  activeTab: Tab;
  onNavigate: (tab: Tab) => void;
}) {
  const { lang, setLang, t } = useLanguage();

  // To bring back the consulting page later: add { id: "consulting", label: "Pick Our Brains" } here.
  const tabs: { id: Tab; label: string }[] = [
    { id: "shop", label: t.nav.shop },
    { id: "about", label: t.nav.about },
  ];

  const joinMailing = () => {
    onNavigate("home");
    setTimeout(
      () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-warm-50/95 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/wordmark.png"
              alt="Post From Provence"
              className="h-9 sm:h-10 w-auto"
            />
          </button>
          <button
            onClick={joinMailing}
            className="font-sans font-semibold text-[#6B7A4F] hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            {t.nav.join}
          </button>
          <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-slate-600 text-white"
                    : "text-[#6B7A4F] hover:bg-warm-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("en")}
            aria-label="English"
            aria-pressed={lang === "en"}
            className={`text-4xl leading-none p-1 rounded cursor-pointer transition-opacity ${
              lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            🇬🇧
          </button>
          <button
            onClick={() => setLang("fr")}
            aria-label="Français"
            aria-pressed={lang === "fr"}
            className={`text-4xl leading-none p-1 rounded cursor-pointer transition-opacity ${
              lang === "fr" ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            🇫🇷
          </button>
        </div>
      </div>
    </header>
  );
}
