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
        backgroundImage: "url(/stripes.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "200px auto",
      }}
    >
      {children}
    </div>
  );
}
