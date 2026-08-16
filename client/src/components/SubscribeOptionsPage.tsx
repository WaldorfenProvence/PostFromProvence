import { useLanguage } from "../LanguageContext";

const MONTHLY_HREF = {
  eu: "https://qjndqv-1b.myshopify.com/products/post-from-provence-mail-club",
  intl: "https://qjndqv-1b.myshopify.com/products/post-from-provence-mail-club-outside-of-the-eu",
};

const ANNUAL_HREF = {
  eu: "https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-inside-france",
  intl: "https://qjndqv-1b.myshopify.com/products/annual-subscription-post-from-provence-mail-club-international",
};

export default function SubscribeOptionsPage({ region }: { region: "eu" | "intl" }) {
  const { t } = useLanguage();
  const isEu = region === "eu";

  const options = [
    { label: t.subscribe.monthlyLabel, img: "/envelope-monthly.png", href: MONTHLY_HREF[region] },
    { label: t.subscribe.twelveMonthLabel, img: "/envelope-12months.png", href: ANNUAL_HREF[region] },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-[#6B7A4F]">
      <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-center">
        {isEu ? t.subscribe.euHeading : t.subscribe.intlHeading}
      </h2>
      <p className="leading-relaxed mb-10 text-center">
        {isEu ? t.subscribe.euIntro : t.subscribe.intlIntro}
      </p>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto">
        {options.map((option) => (
          <a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center"
          >
            <img
              src={option.img}
              alt={option.label}
              className="w-full h-auto transition-transform group-hover:scale-105"
            />
            <span className="inline-block mt-3 bg-slate-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-500 transition-colors">
              {t.subscribe.button}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
