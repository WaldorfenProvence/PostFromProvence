import { useEffect, useState } from "react";
import { LeafIcon } from "./OrganicIcons";

// Add real photos here once available — each needs a file in
// client/public/about/ and an entry below. Empty array shows a
// "coming soon" placeholder instead of the carousel.
const PHOTOS: { src: string; alt: string }[] = [];

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (PHOTOS.length === 0) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHOTOS.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  if (PHOTOS.length === 0) {
    return (
      <div className="mb-10 aspect-[16/10] rounded-2xl bg-warm-100 border border-warm-200 flex flex-col items-center justify-center gap-2 text-[#6B7A4F]">
        <LeafIcon color="#cdb42d" size={32} />
        <p className="text-sm">Photos coming soon</p>
      </div>
    );
  }

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
