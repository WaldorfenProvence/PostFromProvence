export default function StripeRibbon({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="hidden lg:block h-[200px] opacity-70"
      aria-hidden="true"
      style={{
        backgroundImage: "url(/stripes-clean-horizontal.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 200px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
}
