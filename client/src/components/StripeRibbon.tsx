export default function StripeRibbon({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="hidden lg:block h-16 xl:h-20 opacity-70"
      aria-hidden="true"
      style={{
        backgroundImage: "url(/stripes-horizontal.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
}
