import { useLanguage } from "../LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section className="font-serif text-[#B86F4B]">
      <h2 className="text-4xl mb-10 text-center">{t.faq.heading}</h2>
      <div className="max-w-3xl mx-auto">
        {t.faq.items.map((item, i) => (
          <div key={item.q}>
            <div className="border-t-2 border-[#B86F4B] mb-6" />
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
