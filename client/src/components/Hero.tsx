export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-4 text-3xl sm:text-5xl font-serif leading-tight text-earth-800 mb-6">
          Subscribe to
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-24 sm:h-36 w-auto inline-block"
          />
        </h1>
        <p className="text-lg text-earth-700 leading-relaxed">
          Original art, a seasonal recipe, a letter, and a story — mailed
          from Provence to your door. A slow, beautiful antidote to the
          digital flood.
        </p>
      </div>
    </section>
  );
}
