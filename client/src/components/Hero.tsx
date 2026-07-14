export default function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-3 text-3xl sm:text-5xl font-serif leading-tight text-earth-800 mb-6">
          Subscribe to
          <img
            src="/wordmark.png"
            alt="Post From Provence"
            className="h-14 sm:h-20 w-auto inline-block"
          />
        </h1>
        <p className="text-lg text-earth-700 leading-relaxed mb-8">
          Original art, a seasonal recipe, a letter, and a story — mailed
          from Provence to your door. A slow, beautiful antidote to the
          digital flood.
        </p>
        <button
          onClick={onCta}
          className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Join the Mail Club
        </button>
      </div>
    </section>
  );
}
