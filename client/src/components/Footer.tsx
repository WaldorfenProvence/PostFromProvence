export default function Footer() {
  return (
    <footer className="bg-blue-600 text-warm-100 py-12 mt-16 lg:mx-40 xl:mx-52">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/wordmark.png"
              alt="Post From Provence"
              className="h-10 w-auto bg-warm-50 rounded-lg px-3 py-2 mb-3"
            />
            <p className="text-sm leading-relaxed">
              A monthly mail club sent from Provence, France.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wide font-semibold text-white mb-3">
              Connect
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="mailto:hello@postfromprovence.com"
                  className="hover:text-white transition-colors"
                >
                  hello@postfromprovence.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-earth-700 pt-6 text-center text-xs text-warm-400">
          <p>&copy; {new Date().getFullYear()} Post From Provence.</p>
        </div>
      </div>
    </footer>
  );
}
