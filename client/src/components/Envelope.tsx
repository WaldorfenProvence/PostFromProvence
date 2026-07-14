export default function Envelope({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] ${className}`}>
      {/* card peeking out */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[62%] h-[70%] bg-white rounded-sm shadow-sm flex items-start justify-center pt-[12%] px-2">
        <span className="font-sans font-semibold text-earth-800 text-center text-sm sm:text-base leading-tight">
          {label}
        </span>
      </div>
      {/* envelope flap */}
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          backgroundColor: "#9fc2dc",
        }}
      />
      {/* envelope body */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-md"
        style={{
          clipPath:
            "polygon(0 0, 50% 42%, 100% 0, 100% 100%, 0 100%)",
          backgroundColor: "#b7d4e8",
        }}
      />
    </div>
  );
}
