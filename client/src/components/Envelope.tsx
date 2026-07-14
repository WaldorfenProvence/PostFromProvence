export default function Envelope({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] ${className}`}>
      <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full">
        {/* flap arch (back layer) */}
        <path
          d="M20,88 C20,42 68,18 100,18 C132,18 180,42 180,88 Z"
          fill="#9cc2de"
        />
        {/* card (middle layer) */}
        <rect x="54" y="14" width="92" height="88" rx="6" fill="#ffffff" />
        {/* pocket (front layer) */}
        <rect x="8" y="68" width="184" height="72" rx="16" fill="#b7d4e8" />
      </svg>
      <div
        className="absolute inset-x-0 flex items-center justify-center px-4"
        style={{ top: "9%", height: "36%" }}
      >
        <span className="font-sans font-semibold text-earth-800 text-center text-sm sm:text-base leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}
