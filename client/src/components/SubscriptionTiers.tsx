import type { Tab } from "../App";
import { useLanguage } from "../LanguageContext";

export default function SubscriptionTiers({
  onNavigate,
}: {
  onNavigate: (tab: Tab) => void;
}) {
  const { t } = useLanguage();

  const REGIONS: { label: string; img: string; tab: Tab }[] = [
    { label: t.subscribe.euTileLabel, img: "/envelope-france.svg", tab: "subscribe-eu" },
    { label: t.subscribe.intlTileLabel, img: "/envelope-international.png", tab: "subscribe-intl" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-xl mx-auto">
        {REGIONS.map((region) => (
          <button
            key={region.tab}
            onClick={() => onNavigate(region.tab)}
            className="group block cursor-pointer text-center"
          >
            <img
              src={region.img}
              alt={region.label}
              className="w-full h-auto transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {/* Same width as one grid column above, at every breakpoint, so it's
          truly the same size rather than an independently-guessed value. */}
      <button
        onClick={() => onNavigate("gift")}
        className="group block cursor-pointer mx-auto mt-8 w-[calc((100%-24px)/2)] sm:w-64"
      >
        <img
          src="/envelope-gift.png"
          alt="Gift Me"
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
      </button>
    </div>
  );
}
