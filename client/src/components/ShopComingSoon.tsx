import { PaletteIcon } from "./OrganicIcons";

export default function ShopComingSoon() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div className="flex justify-center mb-4">
        <PaletteIcon color="#cdb42d" size={40} />
      </div>
      <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-earth-800 mb-4">
        Shop — Coming Soon
      </h2>
      <p className="text-earth-700 leading-relaxed">
        We're working on a small catalog of prints and paper goods inspired
        by each month's Mail Club packet. Join the Mail Club to hear when it
        launches.
      </p>
    </div>
  );
}
