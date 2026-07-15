export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-[#6B7A4F]">
      <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-center">
        About
      </h2>
      <p className="leading-relaxed mb-4">
        Post From Provence is a small, handmade mail club — each month's
        packet is put together and sent from our home in Provence.
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
