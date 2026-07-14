export default function Footer() {
  return (
    <footer className="py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <div>
            <img src="/wordmark.png" alt="Post From Provence" className="h-10 w-auto mb-3" />
            <p className="text-sm leading-relaxed text-earth-700">
              A monthly mail club sent from Provence, France.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wide font-semibold text-earth-800 mb-3">
              Connect
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="mailto:hello@postfromprovence.com"
                  className="text-earth-700 hover:text-slate-600 transition-colors"
                >
                  hello@postfromprovence.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-warm-200 pt-6 text-center text-xs text-earth-700/70">
          <p>&copy; {new Date().getFullYear()} Post From Provence.</p>
        </div>
      </div>
    </footer>
  );
}
