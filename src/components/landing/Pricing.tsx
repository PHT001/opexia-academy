"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/message/DUQV2FBF3TF2H1";

interface Plan {
  name: string;
  slug: string;
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
    name: "Gratuit",
    slug: "free",
    price: "0",
    oldPrice: "",
    period: "aucune carte bancaire requise",
    description: "D\u00e9couvre la plateforme sans risque",
    popular: false,
    features: [
      "Acc\u00e8s au dashboard complet",
      "Vue de tous les modules",
      "Gamification (XP, streaks)",
      "Acc\u00e8s Discord communautaire",
    ],
    notIncluded: [
      "Acc\u00e8s aux le\u00e7ons",
      "Assistant IA",
      "Visios individuelles",
    ],
    cta: "D\u00e9couvrir gratuitement",
    href: "/register",
    external: false,
  },
  {
    name: "Starter",
    slug: "starter",
    price: "47",
    oldPrice: "97",
    period: "paiement unique",
    description: "Pour d\u00e9couvrir le monde de l\u2019IA",
    popular: false,
    features: [
      "Modules 1 & 2 de la formation (7 le\u00e7ons)",
      "Atelier pratique : comparer les IA",
      "Quiz de validation",
      "Acc\u00e8s Discord communautaire",
      "Checklist de d\u00e9marrage",
    ],
    notIncluded: [
      "Modules 3 \u00e0 22 (prompting, code, vente...)",
      "Assistant IA int\u00e9gr\u00e9",
      "Visios individuelles",
    ],
    cta: "Obtenir le Starter \u2014 47\u20ac",
  },
  {
    name: "Academy",
    slug: "academy",
    price: "497",
    oldPrice: "897",
    period: "paiement en plusieurs fois possible",
    description: "La formation compl\u00e8te pour lancer ton agence IA",
    popular: true,
    features: [
      "Tout le pack Starter",
      "85 le\u00e7ons vid\u00e9o & texte",
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
    cta: "Rejoindre l\u2019Academy \u2014 497\u20ac",
  },
  {
    name: "One-to-One",
    slug: "one_to_one",
    price: "2\u00A0497",
    oldPrice: "4\u00A0997",
    period: "paiement en plusieurs fois possible",
    description: "Accompagnement premium avec nos experts",
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
      "Suivi hebdomadaire pendant 3 mois",
      "Acc\u00e8s direct WhatsApp avec Marius & Igor",
    ],
    notIncluded: [],
    cta: "Postuler via WhatsApp",
    href: WHATSAPP_LINK,
    external: true,
  },
];


function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-sm font-mono font-bold text-[#FF1744] tabular-nums">
      {mounted
        ? `${String(timeLeft.hours).padStart(2, "0")}h ${String(timeLeft.minutes).padStart(2, "0")}m ${String(timeLeft.seconds).padStart(2, "0")}s`
        : "08h 00m 00s"}
    </span>
  );
}

const TIER_PRIORITY: Record<string, number> = { free: 0, starter: 1, academy: 2, one_to_one: 3 };

export default function Pricing() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [bypassLoading, setBypassLoading] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [userTier, setUserTier] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => {
        if (!r.ok) throw new Error("not logged in");
        return r.json();
      })
      .then((d) => {
        if (d?.tier) setUserTier(d.tier);
        else setUserTier("free");
      })
      .catch(() => {
        setUserTier(null);
      });
  }, []);

  async function handleCheckout(slug: string) {
    setLoading(slug);
    try {
      // Read referral code from localStorage (set by RefCapture or register page)
      const ref = typeof window !== "undefined" ? localStorage.getItem("opexia-ref") || "" : "";

      // First try normal checkout (works if user is logged in)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: slug, ...(ref ? { ref } : {}) }),
      });

      if (res.status === 401) {
        // Not logged in — retry as guest checkout (pay first, register after)
        const guestRes = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan: slug, guest: true, ...(ref ? { ref } : {}) }),
        });
        const guestData = await guestRes.json();
        if (!guestRes.ok) {
          throw new Error(guestData.error || "Erreur lors du checkout");
        }
        window.location.href = guestData.url;
        return;
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors du checkout");
      }
      window.location.href = data.url;
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(null);
    }
  }

  async function handleBypass(tier: string) {
    setBypassLoading(tier);
    try {
      const res = await fetch("/api/dev/bypass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.ok) {
        router.push("/dashboard");
      } else {
        alert("Erreur de connexion test");
      }
    } catch {
      alert("Erreur bypass");
    } finally {
      setBypassLoading(null);
    }
  }

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
          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/20 px-5 py-2.5">
            <span className="flex items-center gap-2 text-sm text-[#FF1744] font-medium">
              <span>{"\u26A1"}</span> Offre du jour
            </span>
            <span className="w-px h-4 bg-[#FF1744]/20" />
            <CountdownTimer />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const isOneToOne = plan.slug === "one_to_one";

            return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 ${
                plan.popular
                  ? "bg-white border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                  : plan.slug === "free"
                    ? "bg-[#F8F9FA] border border-dashed border-gray-300"
                    : "bg-white border border-gray-200"
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
                <h3 className="text-lg font-bold text-[#111]">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  {plan.oldPrice && (
                    <span className="text-lg font-medium text-[#6B7280] line-through">
                      {plan.oldPrice}{"\u20AC"}
                    </span>
                  )}
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#111]">
                    {plan.price}
                  </span>
                  <span className="text-lg font-medium text-[#6B7280]">{"\u20AC"}</span>
                </div>
                {(plan.slug === "free" || plan.slug === "starter") && plan.period && (
                  <p className="text-sm text-[#6B7280] mt-1">{plan.period}</p>
                )}

                {plan.slug === "academy" && (
                  <p className="text-xs text-[#6B7280] mt-2 text-center">paiement en plusieurs fois disponible</p>
                )}
              </div>

              {(() => {
                const userLevel = userTier !== null ? (TIER_PRIORITY[userTier] ?? 0) : null;
                const planLevel = TIER_PRIORITY[plan.slug] ?? 0;
                const isCurrent = userLevel !== null && userLevel === planLevel;
                const isLower = userLevel !== null && userLevel > planLevel;

                if (isCurrent) {
                  return (
                    <div className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200">
                      Ton plan actuel
                    </div>
                  );
                }
                if (isLower) {
                  return (
                    <div className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-gray-400 bg-gray-100 border border-gray-200">
                      Inclus dans ton plan
                    </div>
                  );
                }
                if (plan.slug === "free") {
                  return (
                    <a
                      href="/register"
                      className="flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white min-h-[48px]"
                    >
                      {plan.cta}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  );
                }
                if (plan.external) {
                  return (
                    <div className="space-y-2">
                      <a
                        href={plan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-lg hover:shadow-green-200"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        {plan.cta}
                      </a>
                      <button
                        onClick={() => handleCheckout("one_to_one_test")}
                        disabled={loading === "one_to_one_test"}
                        className="flex items-center justify-center gap-2 w-full rounded-full py-2.5 text-xs font-semibold transition-all border border-gray-300 text-gray-500 hover:border-[#FF1744] hover:text-[#FF1744] disabled:opacity-60"
                      >
                        {loading === "one_to_one_test" ? "Redirection..." : "Tester le One-to-One — 800\u20AC"}
                      </button>
                    </div>
                  );
                }
                return (
                  <button
                    onClick={() => handleCheckout(plan.slug)}
                    disabled={loading === plan.slug}
                    className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-wait ${
                      plan.popular
                        ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200"
                        : "bg-[#111] text-white hover:bg-[#333]"
                    }`}
                  >
                    {loading === plan.slug ? "Redirection..." : plan.cta}
                  </button>
                );
              })()}

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
                {(() => {
                  const isExpanded = expandedCards[plan.slug];
                  const MAX = 4;
                  const allItems = [
                    ...plan.features.map(f => ({ text: f, included: true })),
                    ...plan.notIncluded.map(f => ({ text: f, included: false })),
                  ];
                  const visible = isExpanded ? allItems : allItems.slice(0, MAX);
                  const hasMore = allItems.length > MAX;

                  return (
                    <>
                      {visible.map((item) => (
                        <div key={item.text} className={`flex items-start gap-3 ${!item.included ? "opacity-40" : ""}`}>
                          <svg
                            className={`h-5 w-5 flex-shrink-0 mt-0.5 ${item.included ? "text-[#FF1744]" : "text-gray-300"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={item.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
                            />
                          </svg>
                          <span className={`text-sm ${item.included ? "text-[#111]" : "text-[#6B7280]"}`}>{item.text}</span>
                        </div>
                      ))}
                      {hasMore && (
                        <button
                          onClick={() => setExpandedCards(prev => ({ ...prev, [plan.slug]: !prev[plan.slug] }))}
                          className="flex items-center gap-1 text-sm font-medium text-[#FF1744] hover:text-[#D50000] transition-colors pt-1 py-2 min-h-[44px]"
                        >
                          {isExpanded ? "Voir moins" : `Voir tout (${allItems.length})`}
                          <svg className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Bypass test button */}
              <button
                onClick={() => handleBypass(plan.slug)}
                disabled={bypassLoading === plan.slug}
                className="mt-4 w-full py-2 rounded-lg text-xs font-medium border border-dashed border-orange-300 text-orange-500 hover:bg-orange-50 hover:border-orange-400 transition-all disabled:opacity-50"
              >
                {bypassLoading === plan.slug ? "Connexion..." : `Mode test ${plan.name}`}
              </button>
            </motion.div>
            );
          })}
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
              {"Garantie satisfait ou rembours\u00e9 \u2014 14 jours"}
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
