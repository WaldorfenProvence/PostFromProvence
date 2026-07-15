import { useEffect, useState } from "react";

const PHOTOS = [
  { src: "/about/main_building.webp", alt: "Our home in Provence" },
  { src: "/about/garden_trees.webp", alt: "The garden" },
  { src: "/about/terrace_upper.webp", alt: "The upper terrace" },
  { src: "/about/archway_courtyard.webp", alt: "The courtyard archway" },
  { src: "/about/aerial_garden_view.webp", alt: "Aerial view of the garden" },
];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHOTOS.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mb-10">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
        {PHOTOS.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-opacity ${
              i === index ? "bg-[#6B7A4F] opacity-100" : "bg-[#6B7A4F] opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
