import Hero from "./Hero";
import { PaletteIcon, BowlIcon, ScrollIcon } from "./OrganicIcons";

const ICON_COLOR = "#cdb42d";

export default function HomePage({
  onNavigate,
}: {
  onNavigate: (tab: "mailclub" | "shop" | "about") => void;
}) {
  return (
    <div>
      <Hero onCta={() => onNavigate("mailclub")} />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-earth-800 mb-14 text-center">
          A Small Envelope, Full of Provence
        </h2>
        <div className="grid sm:grid-cols-3 gap-10">
          {[
            { Icon: PaletteIcon, title: "Original Art", desc: "A seasonal watercolour print, unique to that month." },
            { Icon: BowlIcon, title: "Seasonal Recipe", desc: "Something simple and nourishing from a Provençal kitchen." },
            { Icon: ScrollIcon, title: "A Story & Letter", desc: "Words to slow down with, written in French and English." },
          ].map((item) => (
            <div key={item.title} className="text-center px-4">
              <div className="flex justify-center mb-3">
                <item.Icon color={ICON_COLOR} size={32} />
              </div>
              <h3 className="font-sans font-semibold text-earth-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-earth-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("mailclub")}
            className="text-blue-600 hover:text-blue-500 font-medium underline underline-offset-4 cursor-pointer"
          >
            See what arrives each month →
          </button>
        </div>
      </section>
    </div>
  );
}
