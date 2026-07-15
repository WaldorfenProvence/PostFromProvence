import PhotoCarousel from "./PhotoCarousel";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-[#6B7A4F]">
      <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-center">
        About
      </h2>
      <PhotoCarousel />
      <p className="leading-relaxed mb-4">
        We are a community of international families and friends, living
        the slow-life in Provence. We started Post From Provence because
        we wanted to share the essence of what is beautiful here; the
        passing of the seasons, the fresh produce, the slower pace and
        attention to living by the rhythm of nature.
      </p>
      <p className="leading-relaxed mb-4">
        We were brought together by our{" "}
        <a
          href="https://waldorf-en-provence-school-site.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          little school
        </a>{" "}
        and now we have formed a community of shared values and firm
        friendships raising our families together in this very special
        place.
      </p>
      <p className="leading-relaxed mb-4">
        All proceeds from our work here at Post from Provence go directly
        to supporting our independant co-operative school close to
        Aix-en-Provence. We hope you enjoy our handmade offerings drawing
        on the richness of the talents in our community. We welcome you
        along on our journey.
      </p>
      <p className="leading-relaxed">
        Questions, or want to get in touch? Email us at{" "}
        <a
          href="mailto:hello@postfromprovence.com"
          className="underline hover:opacity-70 transition-opacity"
        >
          hello@postfromprovence.com
        </a>
        .
      </p>
    </div>
  );
}
