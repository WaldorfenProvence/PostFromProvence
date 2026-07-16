type Treasure = {
  src: string;
  alt: string;
  size: number;
  orbitDelay: string;
  wiggleDelay: string;
};

const treasures: Treasure[] = [
  { src: "/treasures/sunflower.png", alt: "Sunflower", size: 60, orbitDelay: "0s", wiggleDelay: "-0.4s" },
  { src: "/treasures/fig.png", alt: "Fig", size: 46, orbitDelay: "-3.2s", wiggleDelay: "-1.1s" },
  { src: "/treasures/olive.png", alt: "Olive branch", size: 64, orbitDelay: "-6.4s", wiggleDelay: "-2.3s" },
  { src: "/treasures/letter.png", alt: "Hand-written letter", size: 56, orbitDelay: "-9.6s", wiggleDelay: "-0.8s" },
  { src: "/treasures/squirrel.png", alt: "Squirrel", size: 58, orbitDelay: "-12.8s", wiggleDelay: "-1.7s" },
];

export default function AnimatedTreasures({
  alt,
}: {
  alt: string;
}) {
  return (
    <div className="relative w-64 sm:w-72 flex-shrink-0" style={{ aspectRatio: "1 / 1" }}>
      <img
        src="/envelope-treasures.png"
        alt={alt}
        className="absolute inset-0 w-full h-auto m-auto"
      />
      {treasures.map((treasure) => (
        <div
          key={treasure.src}
          className="absolute left-1/2 top-1/2"
          style={{
            width: treasure.size,
            height: treasure.size,
            animation: `pfp-orbit 16s linear infinite`,
            animationDelay: treasure.orbitDelay,
          }}
        >
          <img
            src={treasure.src}
            alt={treasure.alt}
            className="w-full h-full object-contain"
            style={{
              animation: `pfp-wiggle 2.4s ease-in-out infinite`,
              animationDelay: treasure.wiggleDelay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
