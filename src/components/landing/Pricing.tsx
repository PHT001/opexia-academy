"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/message/DUQV2FBF3TF2H1";

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
  href: string;
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
    cta: "Obtenir le Starter \u2014 47\u20ac",
    href: "/api/checkout?plan=starter",
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
    cta: "Rejoindre l\u2019Academy \u2014 397\u20ac",
    href: "/api/checkout?plan=academy",
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
    cta: "Postuler via WhatsApp",
    href: WHATSAPP_LINK,
    external: true,
  },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-31T23:59:59");

    const update = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "j" },
    { value: timeLeft.hours, label: "h" },
    { value: timeLeft.minutes, label: "m" },
    { value: timeLeft.seconds, label: "s" },
  ];

  return (
    <div className="flex items-center gap-1.5 mt-3">
      {blocks.map((b, i) => (
        <span key={i} className="flex items-center">
          <span className="bg-[#FF1744] text-white text-xs font-bold rounded-md px-2 py-1 min-w-[32px] text-center tabular-nums">
            {String(b.value).padStart(2, "0")}
            <span className="text-white/70 text-[10px] ml-0.5">{b.label}</span>
          </span>
          {i < blocks.length - 1 && <span className="text-[#FF1744] font-bold text-xs mx-0.5">:</span>}
        </span>
      ))}
    </div>
  );
}

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
          <div className="mt-4 inline-flex flex-col items-center gap-2 rounded-2xl bg-[#FF1744]/10 border border-[#FF1744]/20 px-5 py-3">
            <span className="flex items-center gap-2 text-sm text-[#FF1744] font-medium">
              <span>{"\u26A1"}</span> {"Tarif early-bird \u2014 expire le 31 mars 2026"}
            </span>
            <CountdownTimer />
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
                href={plan.href}
                target={plan.external ? "_blank" : undefined}
                rel={plan.external ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200"
                    : plan.external
                    ? "bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-lg hover:shadow-green-200"
                    : "bg-[#111] text-white hover:bg-[#333]"
                }`}
              >
                {plan.external && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )}
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
