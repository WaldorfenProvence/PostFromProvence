export default function Envelope({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] ${className}`}>
      {/* envelope flap (back layer) */}
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          backgroundColor: "#9fc2dc",
        }}
      />
      {/* card peeking out (middle layer, in front of flap) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[62%] h-[64%] bg-white rounded-sm shadow-sm flex items-center justify-center px-2">
        <span className="font-sans font-semibold text-earth-800 text-center text-sm sm:text-base leading-tight">
          {label}
        </span>
      </div>
      {/* envelope body / pocket front (top layer) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-md"
        style={{
          clipPath: "polygon(0 0, 50% 42%, 100% 0, 100% 100%, 0 100%)",
          backgroundColor: "#b7d4e8",
        }}
      />
    </div>
  );
}
