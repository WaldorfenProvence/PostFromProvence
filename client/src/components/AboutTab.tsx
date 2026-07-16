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
      className="z-30 bg-slate-600 hover:bg-slate-500 text-white font-sans font-semibold text-sm px-4 py-3 rounded-l-lg shadow-md cursor-pointer"
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: `translateY(-50%) translateX(${visible ? "0" : "100%"})`,
        transition: "transform 300ms",
      }}
    >
      About Us
    </button>
  );
}
