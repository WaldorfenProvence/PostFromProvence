export type Lang = "en" | "fr";

export type Translations = {
  nav: { join: string; shop: string; about: string };
  hero: { subscribeTo: string; intro: string };
  whatsInside: {
    heading: string;
    intro: string;
    items: string[];
    envelopeAlt: string;
  };
  pricing: { heading: string };
  why: { heading: string; body: string };
  waitlist: {
    heading: string;
    placeholder: string;
    button: string;
    thanks: string;
  };
  faq: { heading: string; items: { q: string; a: string }[] };
  footer: { tagline: string; connect: string };
  about: {
    heading: string;
    intro: string;
    school: string;
    schoolLinkText: string;
    schoolRest: string;
    proceeds: string;
    contact: string;
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { join: "Join our mailing!", shop: "Shop", about: "About" },
    hero: {
      subscribeTo: "Subscribe to",
      intro:
        "Original art, a seasonal recipe, a story, and a glimpse into our lives— mailed from our home in Provence to your door. A slow, beautiful antidote to the digital overwhelm.",
    },
    whatsInside: {
      heading: "What's Inside?",
      intro: "Each month, receive a handcrafted post from our home in Provence — filled with:",
      items: [
        "Original watercolour art",
        "Seasonal recipe",
        "An installment of our children's story",
        "A monthly surprise",
        "A letter from our community",
        "All in French and English",
      ],
      envelopeAlt: "5 Treasures of the Season",
    },
    pricing: { heading: "Choose Your Subscription…" },
    why: {
      heading: "Why Mail Club?",
      body: "In a world of infinite scroll, there is something radical about receiving a physical envelope. Something handmade, seasonal, and finite. Each one is a small act of resistance against the disposable and the digital.",
    },
    waitlist: {
      heading: "Now Taking Subscriptions For Our Inaugural Post!",
      placeholder: "you@example.com",
      button: "Subscribe Now",
      thanks: "Thank you! We'll be in touch soon.",
    },
    faq: {
      heading: "FAQ's",
      items: [
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
      ],
    },
    footer: {
      tagline: "A monthly mail club sent from our home in Provence, France to yours.",
      connect: "Connect",
    },
    about: {
      heading: "About",
      intro:
        "We are a community of international families and friends, living the slow-life in Provence. We started Post From Provence because we wanted to share the essence of what is beautiful here; the passing of the seasons, the fresh produce, the slower pace and attention to living by the rhythm of nature.",
      school: "We were brought together by our",
      schoolLinkText: "little school",
      schoolRest:
        "and now we have formed a community of shared values and firm friendships raising our families together in this very special place.",
      proceeds:
        "All proceeds from our work here at Post from Provence go directly to supporting our independant co-operative school close to Aix-en-Provence. We hope you enjoy our handmade offerings drawing on the richness of the talents in our community. We welcome you along on our journey.",
      contact: "Questions, or want to get in touch? Email us at",
    },
  },
  fr: {
    nav: { join: "Rejoignez notre liste !", shop: "Boutique", about: "À propos" },
    hero: {
      subscribeTo: "Abonnez-vous à",
      intro:
        "Une œuvre d'art originale, une recette de saison, une histoire, et un aperçu de notre vie — envoyés de notre maison en Provence jusqu'à votre porte. Un antidote lent et beau au trop-plein numérique.",
    },
    whatsInside: {
      heading: "Que contient l'enveloppe ?",
      intro: "Chaque mois, recevez un courrier fait main depuis notre maison en Provence — avec :",
      items: [
        "Une aquarelle originale",
        "Une recette de saison",
        "Un épisode de notre histoire pour enfants",
        "Une surprise mensuelle",
        "Une lettre de notre communauté",
        "Le tout en français et en anglais",
      ],
      envelopeAlt: "5 trésors de la saison",
    },
    pricing: { heading: "Choisissez votre abonnement…" },
    why: {
      heading: "Pourquoi le Mail Club ?",
      body: "Dans un monde de défilement infini, il y a quelque chose de radical à recevoir une véritable enveloppe. Quelque chose de fait main, saisonnier et éphémère. Chacune est un petit acte de résistance face au jetable et au numérique.",
    },
    waitlist: {
      heading: "Les abonnements sont ouverts pour notre premier envoi !",
      placeholder: "vous@exemple.com",
      button: "S'abonner",
      thanks: "Merci ! Nous vous recontacterons bientôt.",
    },
    faq: {
      heading: "Questions Fréquentes",
      items: [
        {
          q: "Quand vais-je recevoir mon courrier ?",
          a: "Nous envoyons Post From Provence vers le 15 de chaque mois. Inscrivez-vous avant cette date pour recevoir le courrier du mois ; après, votre premier envoi arrivera le mois suivant.",
        },
        {
          q: "Comment annuler ou modifier mon adresse ?",
          a: "Envoyez un e-mail à hello@postfromprovence.com et nous annulerons votre abonnement ou mettrons à jour vos informations avant le prochain envoi. Contactez-nous avant le 15 pour que nous puissions faire le changement à temps.",
        },
        {
          q: "Que se passe-t-il si mon courrier n'arrive pas ?",
          a: "Le courrier international peut prendre plusieurs semaines. Si rien n'est arrivé après un certain temps, écrivez-nous : nous renverrons votre courrier ou vous rembourserons ce mois-ci.",
        },
      ],
    },
    footer: {
      tagline: "Un club postal mensuel envoyé de notre maison en Provence, France, jusqu'à la vôtre.",
      connect: "Contact",
    },
    about: {
      heading: "À propos",
      intro:
        "Nous sommes une communauté de familles et d'amis internationaux, vivant la vie lente en Provence. Nous avons créé Post From Provence parce que nous voulions partager l'essence de ce qui est beau ici ; le passage des saisons, les produits frais, le rythme plus lent et l'attention portée à vivre au rythme de la nature.",
      school: "Nous avons été réunis par notre",
      schoolLinkText: "petite école",
      schoolRest:
        "et nous avons désormais formé une communauté de valeurs partagées et d'amitiés solides, élevant nos familles ensemble dans ce lieu si particulier.",
      proceeds:
        "Tous les bénéfices de notre travail chez Post from Provence vont directement au soutien de notre école coopérative indépendante près d'Aix-en-Provence. Nous espérons que vous apprécierez nos créations artisanales qui puisent dans la richesse des talents de notre communauté. Nous vous accueillons avec plaisir dans notre aventure.",
      contact: "Des questions, ou envie de nous contacter ? Écrivez-nous à",
    },
  },
};
