export default function StripeBorders() {
  return (
    <div
      className="hidden lg:block absolute inset-y-0 left-0 right-0 pointer-events-none -z-10"
      aria-hidden="true"
    >
      {/* left */}
      <div
        className="absolute inset-y-0 left-0 w-44 opacity-70"
        style={{
          backgroundImage: "url(/stripes-clean.png)",
          backgroundRepeat: "repeat-y",
          backgroundSize: "379px 384px",
        }}
      />
      {/* right */}
      <div
        className="absolute inset-y-0 right-0 w-44 opacity-70"
        style={{
          backgroundImage: "url(/stripes-clean.png)",
          backgroundRepeat: "repeat-y",
          backgroundSize: "379px 384px",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
}
