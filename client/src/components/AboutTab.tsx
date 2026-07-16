import type { Tab } from "../App";

export default function AboutTab({
  visible,
  onNavigate,
}: {
  visible: boolean;
  onNavigate: (tab: Tab) => void;
}) {
  return (
    <button
      onClick={() => onNavigate("about")}
      aria-label="Go to About page"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-slate-600 hover:bg-slate-500 text-white font-sans font-semibold text-sm px-4 py-3 rounded-l-lg shadow-md cursor-pointer transition-transform duration-300 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      About Us
    </button>
  );
}
