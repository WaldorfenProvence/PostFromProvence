export default function StripeBorders() {
  return (
    <div
      className="hidden lg:block absolute inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    >
      {/* left */}
      <div
        className="absolute inset-y-0 left-0 w-40 xl:w-52 opacity-70"
        style={{
          backgroundImage: "url(/stripes.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />
      {/* right */}
      <div
        className="absolute inset-y-0 right-0 w-40 xl:w-52 opacity-70"
        style={{
          backgroundImage: "url(/stripes.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          transform: "scaleX(-1)",
        }}
      />
      {/* top */}
      <div
        className="absolute inset-x-0 top-0 h-40 xl:h-52 opacity-70"
        style={{
          backgroundImage: "url(/stripes.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />
      {/* bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 xl:h-52 opacity-70"
        style={{
          backgroundImage: "url(/stripes.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          transform: "scaleY(-1)",
        }}
      />
    </div>
  );
}
