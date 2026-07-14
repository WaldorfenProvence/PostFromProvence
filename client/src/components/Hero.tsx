export default function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-warm-50 to-warm-50 py-20 sm:py-28">
      <img
        src="/stripes.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-0 right-0 h-full w-auto opacity-70"
      />
      <img
        src="/stripes.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-0 left-0 h-full w-auto opacity-70 -scale-x-100"
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-5xl sm:text-7xl font-serif font-semibold leading-tight text-earth-800 mb-6">
          A Handcrafted Post, Every Month
        </h1>
        <p className="text-lg text-earth-700 leading-relaxed mb-8">
          Original art, a seasonal recipe, a letter, and a story — mailed
          from Provence to your door. A slow, beautiful antidote to the
          digital flood.
        </p>
        <button
          onClick={onCta}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Join the Mail Club
        </button>
      </div>
    </section>
  );
}
