"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { WHATSAPP_PHONE, TIER_PRIORITY } from "@/lib/constants";

const TIER_LABELS: Record<string, string> = {
  free: "Gratuit", starter: "Starter", academy: "Academy", one_to_one: "One to One",
};

interface Plan {
  name: string; slug: string; price: string; oldPrice: string; period: string;
  description: string; popular: boolean; features: string[]; notIncluded: string[];
  cta: string; href?: string; external?: boolean; limited?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter", slug: "starter", price: "47", oldPrice: "97", period: "paiement unique",
    description: "Pour d\u00e9couvrir le monde de l\u2019IA", popular: false,
    features: ["Modules 1 & 2 de la formation (7 le\u00e7ons)", "Atelier pratique : comparer les IA", "Quiz de validation", "Acc\u00e8s Discord communautaire", "Checklist de d\u00e9marrage"],
    notIncluded: ["Modules 3 \u00e0 22 (prompting, code, vente...)", "Assistant IA int\u00e9gr\u00e9", "Visios individuelles"],
    cta: "Obtenir le Starter \u2014 47\u20ac",
  },
  {
    name: "Academy", slug: "academy", price: "397", oldPrice: "897", period: "paiement en plusieurs fois possible",
    description: "La formation compl\u00e8te pour lancer ton agence IA", popular: true,
    features: ["Tout le pack Starter", "86 le\u00e7ons vid\u00e9o & texte", "Quiz & exercices pratiques", "Assistant IA int\u00e9gr\u00e9", "Plateforme compl\u00e8te", "Pipeline CRM int\u00e9gr\u00e9", "Templates IA premium", "G\u00e9n\u00e9rateur de projets", "Syst\u00e8me de progression (XP, classement)", "Programme de parrainage", "1 appel coaching one-to-one offert (1h)"],
    notIncluded: ["Visios individuelles suppl\u00e9mentaires"],
    cta: "Rejoindre l\u2019Academy \u2014 397\u20ac",
  },
  {
    name: "One-to-One", slug: "one_to_one", price: "2\u00A0497", oldPrice: "4\u00A0997", period: "paiement en plusieurs fois possible",
    description: "Accompagnement premium avec nos experts", popular: false, limited: true,
    features: ["Tout le pack Academy", "8 visios individuelles (1h)", "Review de tes projets en live", "Support prioritaire illimit\u00e9", "R\u00e9seau priv\u00e9 VIP fondateurs", "Acc\u00e8s \u00e0 vie \u00e0 toutes les mises \u00e0 jour", "Audit personnalis\u00e9 de ton agence", "Strat\u00e9gie de lancement sur-mesure", "Suivi hebdomadaire pendant 3 mois", "Acc\u00e8s direct WhatsApp avec Marius & Igor"],
    notIncluded: [],
    cta: "Postuler via WhatsApp", href: WHATSAPP_PHONE, external: true,
  },
];

function DiscountCountdown({ expiresAt }: { expiresAt: string }) {
  const calculateTimeLeft = useCallback(() => {
    const diff = new Date(expiresAt).getTime() - Date.now();
    if (diff <= 0) return null;
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }, [expiresAt]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = calculateTimeLeft();
      if (!tl) { setTimeLeft(null); clearInterval(interval); }
      else setTimeLeft(tl);
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  if (!timeLeft) return null;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2">
      {[
        { value: pad(timeLeft.hours), label: "h" },
        { value: pad(timeLeft.minutes), label: "m" },
        { value: pad(timeLeft.seconds), label: "s" },
      ].map((unit) => (
        <div key={unit.label} className="flex items-center gap-1">
          <span className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white font-mono text-lg font-bold">
            {unit.value}
          </span>
          <span className="text-white/70 text-xs font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function OffresPage() {
  return (
    <Suspense fallback={null}>
      <OffresContent />
    </Suspense>
  );
}

function OffresContent() {
  const { data: session } = useSession();
  const sessionTier = session?.user?.tier || "free";
  const router = useRouter();
  const searchParams = useSearchParams();
  const codeParam = searchParams.get("code");
  const previewTier = typeof window !== "undefined" ? localStorage.getItem("admin-preview-tier") : null;
  const [userTier, setUserTier] = useState(sessionTier);
  const [loading, setLoading] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [discount, setDiscount] = useState<{
    code: string;
    percent: number;
    expiresAt: string;
  } | null>(null);

  // Sync tier from session instantly
  useEffect(() => {
    if (sessionTier && sessionTier !== "free") {
      setUserTier((prev) => prev === "free" ? sessionTier : prev);
    }
  }, [sessionTier]);

  useEffect(() => {
    fetch("/api/progress").then((r) => r.json()).then((d) => {
      if (d?.tier) setUserTier(d.tier);
      if (
        d?.discountCode &&
        d?.discountPercent &&
        d?.discountExpiresAt &&
        new Date(d.discountExpiresAt).getTime() > Date.now() &&
        (!codeParam || codeParam === d.discountCode)
      ) {
        setDiscount({
          code: d.discountCode,
          percent: d.discountPercent,
          expiresAt: d.discountExpiresAt,
        });
      }
    }).catch(() => {});
  }, [codeParam]);

  const effectiveTier = previewTier || userTier;


  const [showPaymentModal, setShowPaymentModal] = useState(false);

  async function handleCheckout(slug: string, installments?: number) {
    if (slug === "academy" && !installments) {
      setShowPaymentModal(true);
      return;
    }
    setLoading(slug);
    setShowPaymentModal(false);
    try {
      const ref = typeof window !== "undefined" ? localStorage.getItem("opexia-ref") || "" : "";
      const payload: Record<string, unknown> = { plan: slug };
      if (discount) payload.coupon = discount.code;
      if (ref) payload.ref = ref;
      if (installments) payload.installments = installments;
      const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) { router.push("/login?redirect=checkout&plan=" + slug); return; }
        throw new Error(data.error || "Erreur");
      }
      window.location.href = data.url;
    } catch (err) { alert(err instanceof Error ? err.message : "Une erreur est survenue."); }
    finally { setLoading(null); }
  }

  function getDiscountedPrice(originalPrice: string): string {
    if (!discount) return originalPrice;
    const num = parseInt(originalPrice.replace(/\s/g, "").replace(/\u00A0/g, ""), 10);
    if (isNaN(num)) return originalPrice;
    const discounted = Math.round(num * (1 - discount.percent / 100));
    return discounted.toLocaleString("fr-FR");
  }

  return (
    <div className="max-w-5xl mx-auto w-full py-6">
      {/* Discount Banner */}
      {discount && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-5 sm:p-6 text-center mb-6"
          style={{ background: "linear-gradient(135deg, #FF1744 0%, #FF6D00 100%)" }}
        >
          <p className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-1">Offre limit&eacute;e</p>
          <p className="text-white text-xl sm:text-2xl font-black mb-2">
            -{discount.percent}% sur toute la formation
          </p>
          <div className="mb-3">
            <DiscountCountdown expiresAt={discount.expiresAt} />
          </div>
          <p className="text-white/80 text-sm">
            Code : <span className="font-bold text-white">{discount.code}</span> &mdash; appliqu&eacute; automatiquement
          </p>
        </motion.div>
      )}

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden mb-10" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
        <div className="relative p-6 sm:p-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF1744]/15 blur-[60px]" />
          </div>
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-white/40 font-semibold uppercase tracking-[0.2em] mb-2">Ton offre actuelle</p>
              <span className="text-xl font-black text-white">{TIER_LABELS[effectiveTier] || "Gratuit"}</span>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-3xl font-black text-white">
                {effectiveTier === "free" ? "0\u20ac" : effectiveTier === "starter" ? "47\u20ac" : effectiveTier === "academy" ? "397\u20ac" : "2\u00A0497\u20ac"}
              </p>
              <p className="text-[10px] text-white/40">{effectiveTier === "free" ? "aucun engagement" : "paiement unique"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#111] mb-2">Choisis l&apos;offre qui te correspond</h2>
        <p className="text-sm text-gray-400">Paiement unique, acc&egrave;s &agrave; vie. Sans engagement.</p>
      </motion.div>

      {/* Cards — same style as landing page */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const isCurrent = effectiveTier === plan.slug;
          const isLower = (TIER_PRIORITY[effectiveTier] ?? 0) > (TIER_PRIORITY[plan.slug] ?? 0);

          return (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`relative rounded-2xl bg-white p-8 ${
                plan.popular
                  ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                  : isCurrent
                  ? "border-2 border-emerald-400"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && !isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">Populaire</span>
                </div>
              )}
              {isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Actif
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#111]">{plan.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  {discount && !plan.external ? (
                    <>
                      <span className="text-lg font-medium text-[#6B7280] line-through">{plan.price}{"\u20ac"}</span>
                      <span className="text-5xl font-black tracking-tight text-[#FF1744]">{getDiscountedPrice(plan.price)}</span>
                      <span className="text-lg font-medium text-[#6B7280]">{"\u20ac"}</span>
                    </>
                  ) : (
                    <>
                      {plan.oldPrice && <span className="text-lg font-medium text-[#6B7280] line-through">{plan.oldPrice}{"\u20ac"}</span>}
                      <span className="text-5xl font-black tracking-tight text-[#111]">{plan.price}</span>
                      <span className="text-lg font-medium text-[#6B7280]">{"\u20ac"}</span>
                    </>
                  )}
                </div>
                {plan.period && (
                  <p className="text-sm text-[#6B7280] mt-1">{plan.period}</p>
                )}

                {/* Installment selector for Academy & One-to-One */}
                {plan.slug === "academy" && (
                  <p className="text-xs text-[#6B7280] mt-2 text-center">ou en 2 fois : 218,35 EUR x2 (+10%)</p>
                )}
              </div>

              {/* CTA */}
              {isCurrent ? (
                <div className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200">
                  Ton plan actuel
                </div>
              ) : isLower ? (
                <div className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-gray-400 bg-gray-100 border border-gray-200">
                  Inclus dans ton plan
                </div>
              ) : plan.external ? (
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-lg hover:shadow-green-200">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    {plan.cta}
                </a>
              ) : (
                <button onClick={() => handleCheckout(plan.slug)} disabled={loading === plan.slug} className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-wait ${plan.popular ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200" : "bg-[#111] text-white hover:bg-[#333]"}`}>
                  {loading === plan.slug ? "Redirection..." : (discount ? `${plan.name} \u2014 ${getDiscountedPrice(plan.price)}\u20ac` : plan.cta)}
                </button>
              )}

              {plan.limited && (
                <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                  <svg className="h-3.5 w-3.5 text-[#FF1744] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-xs font-medium text-red-700">Limit&eacute; &agrave; 10 places / mois</span>
                </div>
              )}

              {/* Features */}
              <div className="mt-8 space-y-3">
                {(() => {
                  const isExpanded = expandedCards[plan.slug];
                  const MAX = 4;
                  const allItems = [...plan.features.map(f => ({ text: f, included: true })), ...plan.notIncluded.map(f => ({ text: f, included: false }))];
                  const visible = isExpanded ? allItems : allItems.slice(0, MAX);
                  const hasMore = allItems.length > MAX;
                  return (
                    <>
                      {visible.map((item) => (
                        <div key={item.text} className={`flex items-start gap-3 ${!item.included ? "opacity-40" : ""}`}>
                          <svg className={`h-5 w-5 flex-shrink-0 mt-0.5 ${item.included ? "text-[#FF1744]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                          </svg>
                          <span className={`text-sm ${item.included ? "text-[#111]" : "text-[#6B7280]"}`}>{item.text}</span>
                        </div>
                      ))}
                      {hasMore && (
                        <button onClick={() => setExpandedCards(prev => ({ ...prev, [plan.slug]: !prev[plan.slug] }))} className="flex items-center gap-1 text-sm font-medium text-[#FF1744] hover:text-[#D50000] transition-colors pt-1">
                          {isExpanded ? "Voir moins" : `Voir tout (${allItems.length})`}
                          <svg className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Payment choice modal for Academy */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowPaymentModal(false)}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-[#111] text-center mb-1">Comment veux-tu payer ?</h3>
            <p className="text-xs text-gray-400 text-center mb-6">Formation Academy</p>

            <div className="space-y-3">
              <button
                onClick={() => handleCheckout("academy", 1)}
                disabled={loading === "academy"}
                className="w-full p-4 rounded-xl border-2 border-[#FF1744] bg-[#FF1744]/5 hover:bg-[#FF1744]/10 transition-all text-left relative"
              >
                <span className="absolute top-3 right-3 text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded-full">Recommand&eacute;</span>
                <p className="text-sm font-bold text-[#111]">Paiement unique</p>
                <p className="text-2xl font-black text-[#111] mt-1">397 EUR</p>
                <p className="text-xs text-gray-400 mt-1">Meilleur prix — Paiement par carte</p>
              </button>

              <button
                onClick={() => handleCheckout("academy", 2)}
                disabled={loading === "academy"}
                className="w-full p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-left"
              >
                <p className="text-sm font-bold text-[#111]">En 2 fois</p>
                <p className="text-2xl font-black text-[#111] mt-1">218,35 EUR <span className="text-sm font-medium text-gray-400">x 2</span></p>
                <p className="text-xs text-gray-400 mt-1">436,70 EUR total (+10%) — 2 pr&eacute;l&egrave;vements par carte</p>
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Paiement s&eacute;curis&eacute; par Stripe
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
