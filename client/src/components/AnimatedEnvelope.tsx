import { useState } from "react";
import { PaletteIcon, BowlIcon, PenIcon } from "./OrganicIcons";

const CARDS = [
  { Icon: PaletteIcon, bg: "#f0e8db", rotate: -8, x: -34, delay: 500 },
  { Icon: PenIcon, bg: "#e6ece1", rotate: 0, x: 0, delay: 620 },
  { Icon: BowlIcon, bg: "#fdfcfa", rotate: 8, x: 34, delay: 740 },
];

export default function AnimatedEnvelope() {
  const [playKey, setPlayKey] = useState(0);

  return (
    <div
      className="[perspective:1000px] mx-auto w-72 h-48 cursor-pointer select-none"
      onMouseEnter={() => setPlayKey((k) => k + 1)}
      title="Hover to watch it open again"
    >
      <div key={playKey} className="relative w-full h-full">
        {/* envelope body */}
        <div className="absolute inset-0 rounded-2xl bg-white border-2 border-blue-600 shadow-sm" />
        {/* fold seam */}
        <div
          className="absolute inset-x-4 bottom-4 top-8 border-t-2 border-blue-200 opacity-60"
          style={{ clipPath: "polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)" }}
        />

        {/* contents peeking out */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-6 w-14 h-20 rounded-md border border-warm-300 flex items-center justify-center [animation-fill-mode:both]"
            style={{
              backgroundColor: card.bg,
              marginLeft: -28 + card.x,
              transform: `rotate(${card.rotate}deg)`,
              animation: `envelope-card-rise 0.6s ease-out ${card.delay}ms both`,
              zIndex: 10,
            }}
          >
            <card.Icon color="#cdb42d" size={26} />
          </div>
        ))}

        {/* flap */}
        <div
          className="absolute inset-x-0 top-0 h-[58%] origin-top z-20 [transform-style:preserve-3d]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 68%)",
            backgroundColor: "#5d7052",
            animation: "envelope-flap-open 0.9s ease-out 0.3s both",
          }}
        />
      </div>
    </div>
  );
}
