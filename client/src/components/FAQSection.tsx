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
  return (
    <section className="font-serif text-[#2B3327]">
      <h2 className="text-4xl mb-10 text-center">FAQ's</h2>
      <div className="max-w-3xl mx-auto">
        {FAQS.map((item, i) => (
          <div key={item.q}>
            <div className="border-t-2 border-[#2B3327] mb-6" />
            <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_200px_1fr] gap-x-4 sm:gap-x-8 gap-y-2 mb-6 items-start">
              <span className="text-4xl row-span-2 sm:row-span-1">
                {i + 1}
              </span>
              <p className="font-semibold">{item.q}</p>
              <p className="col-span-2 sm:col-span-1 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
