function IconWrap({
  children,
  color,
  size = 40,
}: {
  children: React.ReactNode;
  color: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

type IconProps = { color: string; size?: number };

export function SunIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 14c-6 0-10.5 4.6-10.5 10S18 34 24 34s10.5-4.6 10.5-10S30 14 24 14z" />
      <path d="M24 6c.5 2 .5 4 0 6" />
      <path d="M24 36c.5 2 .5 4 0 6" />
      <path d="M9 24c2-.5 4-.5 6 0" />
      <path d="M33 24c2-.5 4-.5 6 0" />
      <path d="M13 13c1.5 1.3 2.7 2.7 3.5 4.3" />
      <path d="M31.5 30.7c.8 1.6 2 3 3.5 4.3" />
      <path d="M35 13c-1.5 1.3-2.7 2.7-3.5 4.3" />
      <path d="M16.5 30.7c-.8 1.6-2 3-3.5 4.3" />
    </IconWrap>
  );
}

export function LandmarkIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M8 20 24 9l16 11" />
      <path d="M10 20v16" />
      <path d="M17 20v16" />
      <path d="M24 20v16" />
      <path d="M31 20v16" />
      <path d="M38 20v16" />
      <path d="M7 40h34" />
      <path d="M9 36h30" />
    </IconWrap>
  );
}

export function GlobeIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 8c-9 4-13 24 0 32 9-4 13-24 0-32z" />
      <path d="M24 8c8.5 8 8.5 24 0 32" />
      <path d="M12 18c8-2.5 16-2.5 24 0" />
      <path d="M12 30c8 2.5 16 2.5 24 0" />
      <path d="M8 24c5.5-2 10.5-3 16-3s10.5 1 16 3" />
      <path d="M8 24c5.5 2 10.5 3 16 3s10.5-1 16-3" />
    </IconWrap>
  );
}

export function SproutIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 40V22" />
      <path d="M24 24c-2-6-8-8-13-7 0 6 4 11 13 9z" />
      <path d="M24 20c2-7 9-9 14-8 0 7-5 12-14 10z" />
    </IconWrap>
  );
}

export function HeartIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 39C13 31 6 24 6 16.5 6 10.5 10.5 6 16 6c3.4 0 6.4 1.8 8 4.6C25.6 7.8 28.6 6 32 6c5.5 0 10 4.5 10 10.5C42 24 35 31 24 39z" />
    </IconWrap>
  );
}

export function TreeIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 42V26" />
      <path d="M24 10c-7 0-11 6-11 11 0 6 5 9 11 9s11-3 11-9c0-5-4-11-11-11z" />
      <path d="M18 20c2 1.5 3.5 3.5 4 6" />
      <path d="M30 20c-2 1.5-3.5 3.5-4 6" />
    </IconWrap>
  );
}

export function HandshakeIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M6 22l8-6 6 3 4-2 8 5" />
      <path d="M6 22l4 8 6 4" />
      <path d="M42 22l-4 8-6 4" />
      <path d="M16 30l4 3 4-2 4 3 4-2" />
    </IconWrap>
  );
}

export function PaletteIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 8C13 8 6 16 6 25c0 6 4 9 8 9 2 0 3-1.5 3-3.5S15.5 27 17 27h3c5 0 8-3 8-7 0-1.5 1-2 2.5-2 6 0 9.5-4.5 9.5-9.5C40 4 33 8 24 8z" />
      <circle cx="15" cy="19" r="1.3" fill={color} />
      <circle cx="22" cy="14" r="1.3" fill={color} />
      <circle cx="30" cy="15" r="1.3" fill={color} />
    </IconWrap>
  );
}

export function BowlIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M8 24h32c0 8-7 14-16 14S8 32 8 24z" />
      <path d="M14 24c0-3 2-5 4-5" />
      <path d="M20 10c-1 2-1 4 0 6" />
      <path d="M26 8c-1 2-1 4 0 6" />
      <path d="M32 10c-1 2-1 4 0 6" />
    </IconWrap>
  );
}

export function PenIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M32 8c3 0 6 3 6 6L18 34l-8 2 2-8L32 8z" />
      <path d="M27 13l6 6" />
      <path d="M10 36l-2 6" />
    </IconWrap>
  );
}

export function ScrollIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M12 8h20a4 4 0 014 4v0a4 4 0 01-4 4H16" />
      <path d="M12 8a4 4 0 00-4 4v0a4 4 0 004 4" />
      <path d="M12 16h22v20a4 4 0 01-4 4H16a4 4 0 01-4-4z" />
      <path d="M12 40a4 4 0 01-4-4v0a4 4 0 014-4" />
      <path d="M18 24h12" />
      <path d="M18 30h12" />
    </IconWrap>
  );
}

export function LeafIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M10 38C8 22 20 8 38 8c1 16-12 30-28 30z" />
      <path d="M12 36c8-8 16-16 24-24" />
    </IconWrap>
  );
}

export function FlowerIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <circle cx="24" cy="20" r="4" />
      <path d="M24 16c-2-3-2-7 0-9 2 2 2 6 0 9z" />
      <path d="M28 22c3-1.5 6.5-1 8.5 1-2 2-5.5 2.5-8.5 1" />
      <path d="M24 24c2 3 2 7 0 9-2-2-2-6 0-9z" />
      <path d="M20 22c-3-1.5-6.5-1-8.5 1 2 2 5.5 2.5 8.5 1" />
      <path d="M24 28v14" />
    </IconWrap>
  );
}

export function HouseIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M8 22 24 9l16 13" />
      <path d="M12 20v18h24V20" />
      <path d="M20 38v-9h8v9" />
    </IconWrap>
  );
}

export function CoinIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <ellipse cx="24" cy="16" rx="14" ry="6" />
      <path d="M10 16v16c0 3.3 6.3 6 14 6s14-2.7 14-6V16" />
      <path d="M10 24c0 3.3 6.3 6 14 6s14-2.7 14-6" />
      <path d="M24 12v8" />
    </IconWrap>
  );
}

export function RulerIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M8 34 34 8l6 6-26 26z" />
      <path d="M16 20l4 4" />
      <path d="M22 14l4 4" />
      <path d="M28 8l4 4" />
    </IconWrap>
  );
}

export function HammerIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M26 14l8-6 4 4-6 8" />
      <path d="M22 18l-14 14a3 3 0 004 4l14-14" />
      <path d="M25 15l4 4" />
    </IconWrap>
  );
}

export function ClipboardIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <rect x="12" y="10" width="24" height="32" rx="2" />
      <path d="M18 10V8a2 2 0 012-2h8a2 2 0 012 2v2" />
      <path d="M17 20h14" />
      <path d="M17 27h14" />
      <path d="M17 34h9" />
    </IconWrap>
  );
}

export function TargetIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <circle cx="24" cy="24" r="15" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="2.5" fill={color} />
    </IconWrap>
  );
}

export function LockIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <rect x="11" y="22" width="26" height="18" rx="3" />
      <path d="M16 22v-6a8 8 0 0116 0v6" />
      <circle cx="24" cy="30" r="2" fill={color} />
      <path d="M24 32v4" />
    </IconWrap>
  );
}

export function ChartIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M9 41V9" />
      <path d="M9 41h32" />
      <path d="M15 34v-8" />
      <path d="M23 34V16" />
      <path d="M31 34v-14" />
    </IconWrap>
  );
}

export function FilmIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <rect x="7" y="12" width="34" height="24" rx="3" />
      <path d="M7 19h34" />
      <path d="M13 12l3 7" />
      <path d="M22 12l3 7" />
      <path d="M31 12l3 7" />
    </IconWrap>
  );
}

export function SparkleIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M24 6c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z" />
      <path d="M37 28c.6 3 1.6 4 4.6 4.6-3 .6-4 1.6-4.6 4.6-.6-3-1.6-4-4.6-4.6 3-.6 4-1.6 4.6-4.6z" />
    </IconWrap>
  );
}

export function VillageIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <path d="M4 26l8-6 6 4" />
      <path d="M8 24v14h12V24" />
      <path d="M18 20l10-8 10 8" />
      <path d="M14 38v-7h6v7" />
      <path d="M22 38V22h12v16" />
      <path d="M27 38v-8h4v8" />
    </IconWrap>
  );
}

export function MountainIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <circle cx="35" cy="12" r="4" />
      <path d="M4 38 17 18l7 9 6-7 14 18z" />
    </IconWrap>
  );
}

export function CalendarIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <rect x="8" y="12" width="32" height="28" rx="3" />
      <path d="M8 20h32" />
      <path d="M16 8v8" />
      <path d="M32 8v8" />
      <path d="M15 27h4" />
      <path d="M22 27h4" />
      <path d="M29 27h4" />
      <path d="M15 33h4" />
      <path d="M22 33h4" />
    </IconWrap>
  );
}

export function PersonIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <circle cx="24" cy="15" r="7" />
      <path d="M10 40c1-8 6-13 14-13s13 5 14 13" />
    </IconWrap>
  );
}

export function EnvelopeIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M7 14l17 13 17-13" />
    </IconWrap>
  );
}

export function KeyIcon({ color, size }: IconProps) {
  return (
    <IconWrap color={color} size={size}>
      <circle cx="16" cy="24" r="8" />
      <path d="M22 24h20" />
      <path d="M34 24v6" />
      <path d="M40 24v6" />
    </IconWrap>
  );
}
