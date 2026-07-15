import type { ReactNode } from "react";

export default function StripedBlock({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="relative"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "url(/stripes-clean.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "379px 384px",
      }}
    >
      {children}
    </div>
  );
}
