import { useState } from "react";

const FAQS = [
  {
    q: "When will I receive my post?",
    a: "We mail Post From Provence around the 15th of every month. Join before then and you'll get that month's post; join after, and your first post arrives the following month.",
  },
  {
    q: "How do I cancel or update my address?",
    a: "Email hello@postfromprovence.com and we'll cancel your subscription or update your details before the next mailing. Get in touch before the 15th so we can make the change in time.",
  },
  {
    q: "What if my post doesn't arrive?",
    a: "International mail can take a few weeks to arrive. If it's been a while and nothing has shown up, email us and we'll either resend your post or refund you for that month.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2 className="text-3xl font-serif text-earth-800 mb-10 text-center">
        FAQs
      </h2>
      <div className="max-w-2xl mx-auto space-y-3">
        {FAQS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.q}
              className="border border-warm-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer bg-warm-100 hover:bg-warm-200 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-600 text-white text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-sans font-semibold text-earth-800">
                    {item.q}
                  </span>
                </span>
                <span className="text-earth-700 text-lg leading-none">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <p className="px-5 py-4 text-sm text-earth-700 leading-relaxed bg-white">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
