export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24">
      <h2 className="text-3xl font-serif font-semibold text-earth-800 mb-6 text-center">
        About
      </h2>
      <p className="text-earth-700 leading-relaxed mb-4">
        Post From Provence is a small, handmade mail club — each month's
        packet is put together and sent from our home in Provence.
      </p>
      <p className="text-earth-700 leading-relaxed">
        Questions, or want to get in touch? Email us at{" "}
        <a
          href="mailto:hello@postfromprovence.com"
          className="text-blue-600 hover:text-blue-500 underline"
        >
          hello@postfromprovence.com
        </a>
        .
      </p>
    </div>
  );
}
