import AnimatedEnvelope from "./AnimatedEnvelope";

export default function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-warm-50 to-warm-50 py-16 sm:py-24 lg:mx-40 xl:mx-52">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <AnimatedEnvelope />
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif leading-tight text-earth-800 mb-6">
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
