import type { Tab } from "../App";

export default function Header({
  activeTab,
  onNavigate,
}: {
  activeTab: Tab;
  onNavigate: (tab: Tab) => void;
}) {
  // To bring back the consulting page later: add { id: "consulting", label: "Pick Our Brains" } here.
  const tabs: { id: Tab; label: string }[] = [
    { id: "shop", label: "Shop" },
    { id: "about", label: "About" },
  ];

  const joinMailing = () => {
    onNavigate("home");
    setTimeout(
      () => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-warm-50/95 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={joinMailing}
            className="font-sans font-semibold text-slate-600 hover:text-slate-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            Join our mailing!
          </button>
          <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-slate-600 text-white"
                    : "text-earth-700 hover:bg-warm-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
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
      </div>
    </header>
  );
}
