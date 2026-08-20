import { PaletteIcon } from "./OrganicIcons";
import type { Tab } from "../App";

export default function ShopComingSoon({
  onNavigate,
}: {
  onNavigate: (tab: Tab) => void;
}) {
  const goToMailClub = () => {
    onNavigate("home");
    setTimeout(
      () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center text-[#6B7A4F]">
      <div className="flex justify-center mb-4">
        <PaletteIcon color="#cdb42d" size={40} />
      </div>
      <h2 className="text-4xl sm:text-5xl font-serif mb-4">
        Shop — Coming Soon
      </h2>
      <p className="leading-relaxed mb-8">
        We're working on a small catalog of prints and paper goods inspired
        by each month's Mail Club packet. In the meantime, think about
        joining our mailing club — we'll be documenting the creation of any
        new products there.
      </p>

      <button
        onClick={goToMailClub}
        className="bg-slate-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-500 transition-colors cursor-pointer"
      >
        Join the Mail Club
      </button>
    </div>
  );
}
