"use client";

import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: string;
  oldPrice: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
  notIncluded: string[];
  cta: string;
  href?: string;
  external?: boolean;
  limited?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "47",
    oldPrice: "97",
    period: "paiement unique",
    description: "Pour d\u00e9couvrir le monde de l\u2019IA",
    popular: false,
    features: [
      "Guide PDF complet (50+ pages)",
      "Checklist de lancement",
      "Templates de prospection",
      "Acc\u00e8s Discord communautaire",
      "Mises \u00e0 jour gratuites \u00e0 vie",
    ],
    notIncluded: [
      "Acc\u00e8s plateforme de cours",
      "Assistant IA int\u00e9gr\u00e9",
      "Visios individuelles",
    ],
    cta: "T\u00e9l\u00e9charger le Starter",
    href: "https://wa.me/33768683946?text=Salut%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20pack%20Starter%20%C3%A0%2047%E2%82%AC%20%F0%9F%91%8B",
    external: true,
  },
  {
    name: "Academy",
    price: "397",
    oldPrice: "697",
    period: "ou 3x 139\u20ac sans frais",
    description: "La formation compl\u00e8te pour lancer ton agence IA",
    popular: true,
    features: [
      "Tout le pack Starter",
      "100+ le\u00e7ons vid\u00e9o & texte",
      "Quiz & exercices pratiques",
      "Assistant IA int\u00e9gr\u00e9",
      "Plateforme compl\u00e8te",
      "Pipeline CRM int\u00e9gr\u00e9",
      "Templates IA premium",
      "G\u00e9n\u00e9rateur de projets",
      "Gamification (XP, streaks, badges)",
      "Programme de parrainage",
    ],
    notIncluded: ["Visios individuelles"],
    cta: "Rejoindre l\u2019Academy",
    href: "https://wa.me/33768683946?text=Salut%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20l'Academy%20%C3%A0%20397%E2%82%AC%20%F0%9F%91%8B",
    external: true,
  },
  {
    name: "One-to-One",
    price: "3 997",
    oldPrice: "5 997",
    period: "ou 4x 999\u20ac sans frais",
    description: "Accompagnement premium avec Marius & Igor",
    popular: false,
    limited: true,
    features: [
      "Tout le pack Academy",
      "8 visios individuelles (1h)",
      "Review de tes projets en live",
      "Support prioritaire illimit\u00e9",
      "R\u00e9seau priv\u00e9 VIP fondateurs",
      "Acc\u00e8s \u00e0 vie \u00e0 toutes les mises \u00e0 jour",
      "Audit personnalis\u00e9 de ton agence",
      "Strat\u00e9gie de lancement sur-mesure",
    ],
    notIncluded: [],
    cta: "Postuler au One-to-One",
    href: "https://wa.me/33768683946?text=Salut%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20One-to-One%20%C3%A0%203997%E2%82%AC%20%F0%9F%91%8B",
    external: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Choisis ta formule
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            {"Investis dans toi. Rentabilise d\u00e8s le premier mois."}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/20 px-4 py-2 text-sm text-[#FF1744] font-medium">
            <span>{"\u26A1"}</span> {"Tarif early-bird \u2014 expire le 31 mars 2026"}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 lg:p-10 ${
                plan.popular
                  ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#111]">{plan.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-lg font-medium text-[#6B7280] line-through">
                    {plan.oldPrice}{"\u20AC"}
                  </span>
                  <span className="text-5xl font-black tracking-tight text-[#111]">
                    {plan.price}
                  </span>
                  <span className="text-lg font-medium text-[#6B7280]">{"\u20AC"}</span>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">{plan.period}</p>
              </div>

              <a
                href={plan.href || "#"}
                target={plan.external ? "_blank" : undefined}
                rel={plan.external ? "noopener noreferrer" : undefined}
                className={`block w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200"
                    : "bg-[#111] text-white hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </a>

              {plan.limited && (
                <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                  <svg className="h-3.5 w-3.5 text-[#FF1744] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-red-700">
                    Limit&eacute; &agrave; 10 places / mois pour un accompagnement personnalis&eacute;
                  </span>
                </div>
              )}

              <div className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-[#FF1744] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-[#111]">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-40">
                    <svg
                      className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm text-[#6B7280]">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-[#6B7280]">
            <svg
              className="h-6 w-6 text-[#FF1744]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <span className="text-sm font-medium">
              {"Satisfait ou rembours\u00e9 \u2014 14 jours, sans condition"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
