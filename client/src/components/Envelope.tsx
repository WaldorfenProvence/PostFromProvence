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
        {/* back panel (visible as the peek/mat behind the card) */}
        <rect x="8" y="8" width="184" height="132" rx="14" fill="#9cc2de" />
        {/* card */}
        <rect x="26" y="18" width="148" height="104" rx="8" fill="#ffffff" />
        {/* pocket (front, covers the lower portion of the card) */}
        <rect x="8" y="78" width="184" height="62" rx="14" fill="#b7d4e8" />
      </svg>
      <div
        className="absolute inset-x-0 flex items-center justify-center px-6"
        style={{ top: "12%", height: "40%" }}
      >
        <span className="font-sans font-semibold text-earth-800 text-center text-sm sm:text-base leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}
