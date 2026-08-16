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
  gift: {
    heading: string;
    intro: string;
    euLabel: string;
    euNote: string;
    intlLabel: string;
    intlNote: string;
    button: string;
  };
  subscribe: {
    euTileLabel: string;
    intlTileLabel: string;
    euHeading: string;
    euIntro: string;
    intlHeading: string;
    intlIntro: string;
    monthlyLabel: string;
    sixMonthLabel: string;
    twelveMonthLabel: string;
    button: string;
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
          a: "We mail Post From Provence around the 15th of every month. To receive a given month's edition, you need to sign up by the 15th of the previous month (for example, sign up by August 15th to receive September's post). For our very first edition — launching in September — anyone who signs up before then will be included; the usual deadline starts from October's edition onward.",
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
    gift: {
      heading: "Gift a Subscription",
      intro:
        "Give a year of Post From Provence to someone you love — our Annual Subscription runs September to July, like the school year, with a little summer pause in August. Choose where your recipient lives so we can get the shipping right.",
      euLabel: "Recipient in the EU",
      euNote: "11 months for the price of 10",
      intlLabel: "Recipient outside the EU",
      intlNote: "11 months for the price of 10",
      button: "Choose this option",
    },
    subscribe: {
      euTileLabel: "France",
      intlTileLabel: "International",
      euHeading: "France Subscriptions",
      euIntro: "For subscribers living in France. Choose how often you'd like to be billed — you'll pick the exact plan on the next page.",
      intlHeading: "International Subscriptions",
      intlIntro: "For subscribers living outside France. Choose how often you'd like to be billed — you'll pick the exact plan on the next page.",
      monthlyLabel: "Monthly",
      sixMonthLabel: "6 Months",
      twelveMonthLabel: "Annual Subscription",
      button: "Continue",
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
          a: "Nous envoyons Post From Provence vers le 15 de chaque mois. Pour recevoir l'édition d'un mois donné, vous devez vous inscrire avant le 15 du mois précédent (par exemple, inscrivez-vous avant le 15 août pour recevoir le courrier de septembre). Pour notre toute première édition — le lancement ayant lieu en septembre — toute personne inscrite avant cette date sera incluse ; la date limite habituelle s'appliquera à partir de l'édition d'octobre.",
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
    gift: {
      heading: "Offrir un abonnement",
      intro:
        "Offrez une année de Post From Provence à quelqu'un que vous aimez — notre abonnement annuel se déroule de septembre à juillet, comme l'année scolaire, avec une petite pause estivale en août. Choisissez où vit votre destinataire pour que nous puissions calculer les frais d'envoi correctement.",
      euLabel: "Destinataire dans l'UE",
      euNote: "11 mois pour le prix de 10",
      intlLabel: "Destinataire hors de l'UE",
      intlNote: "11 mois pour le prix de 10",
      button: "Choisir cette option",
    },
    subscribe: {
      euTileLabel: "France",
      intlTileLabel: "International",
      euHeading: "Abonnements France",
      euIntro: "Pour les abonnés vivant en France. Choisissez la fréquence de facturation souhaitée — vous choisirez le forfait exact sur la page suivante.",
      intlHeading: "Abonnements internationaux",
      intlIntro: "Pour les abonnés vivant hors de France. Choisissez la fréquence de facturation souhaitée — vous choisirez le forfait exact sur la page suivante.",
      monthlyLabel: "Mensuel",
      sixMonthLabel: "6 mois",
      twelveMonthLabel: "Abonnement annuel",
      button: "Continuer",
    },
  },
};
