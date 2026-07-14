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

  return (
    <header className="sticky top-0 z-40 bg-warm-50/95 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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
        <nav className="flex items-center gap-1 sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-earth-700 hover:bg-warm-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
