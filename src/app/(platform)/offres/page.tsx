"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TIERS } from "@/lib/constants";

const TIER_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  free: { label: "Gratuit", color: "text-gray-500", bg: "bg-gray-100" },
  starter: { label: "Starter", color: "text-gray-600", bg: "bg-gray-100" },
  academy: { label: "Academy", color: "text-[#FF1744]", bg: "bg-[#FF1744]/10" },
  one_to_one: { label: "Premium", color: "text-amber-700", bg: "bg-amber-50" },
};

export default function OffresPage() {
  const { data: session } = useSession();
  const isRealAdmin = session?.user?.role === "admin";
  const previewTier = typeof window !== "undefined" ? localStorage.getItem("admin-preview-tier") : null;
  const isAdmin = isRealAdmin && !previewTier;

  const [userTier, setUserTier] = useState("free");

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.tier) setUserTier(data.tier);
      })
      .catch(() => {});
  }, []);

  const effectiveTier = previewTier || userTier;
  const tierInfo = TIER_LABELS[effectiveTier] || TIER_LABELS.free;

  return (
    <div className="max-w-5xl mx-auto w-full py-4">
      {/* Current plan banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl overflow-hidden mb-8"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}
      >
        <div className="relative p-6 sm:p-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF1744]/15 blur-[60px]" />
            <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-[40px]" />
          </div>
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-white/40 font-semibold uppercase tracking-[0.2em] mb-2">Ton offre actuelle</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-white">
                  {isAdmin ? "Admin \u2014 Acc\u00e8s complet" : tierInfo.label}
                </span>
                {!isAdmin && effectiveTier !== "one_to_one" && (
                  <span className="text-[10px] font-medium text-white/50 bg-white/10 px-2.5 py-1 rounded-full">Upgrade disponible</span>
                )}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-3xl font-black text-white">
                {isAdmin ? "\u221E" : effectiveTier === "free" ? "Gratuit" : effectiveTier === "starter" ? "47\u20ac" : effectiveTier === "academy" ? "497\u20ac" : "2 497\u20ac"}
              </p>
              <p className="text-[10px] text-white/40">{effectiveTier === "free" ? "aucun engagement" : "paiement unique"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section title */}
      {!isAdmin && effectiveTier !== "one_to_one" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#111] mb-1">Choisis l&apos;offre qui te correspond</h2>
          <p className="text-sm text-gray-400">Paiement unique, acc&egrave;s &agrave; vie. Sans engagement.</p>
        </motion.div>
      )}

      {/* Plans */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {TIERS.map((tier) => {
          const isCurrent = effectiveTier === tier.id || (isAdmin && (tier.id === "academy" || tier.id === "one_to_one"));
          return (
            <div
              key={tier.id}
              className={`relative rounded-2xl bg-white p-6 sm:p-8 transition-all ${
                tier.popular
                  ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                  : isCurrent
                  ? "border-2 border-emerald-400 shadow-sm"
                  : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {tier.popular && !isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-red-200">
                    Populaire
                  </span>
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

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#111]">{tier.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">{tier.description}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight text-[#111]">
                    {tier.price.toLocaleString("fr-FR")}
                  </span>
                  <span className="text-lg font-medium text-[#6B7280]">&euro;</span>
                </div>
                <p className="text-xs text-[#6B7280] mt-1">paiement unique &middot; acc&egrave;s &agrave; vie</p>
              </div>

              {isCurrent ? (
                <div className="w-full py-3 rounded-xl text-center text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200">
                  Ton plan actuel
                </div>
              ) : (
                <a
                  href="/#pricing"
                  className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-all ${
                    tier.popular
                      ? "text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      : "bg-[#111] text-white hover:bg-[#333]"
                  }`}
                  style={tier.popular ? { background: "linear-gradient(135deg, #FF1744, #D50000)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" } : undefined}
                >
                  {tier.cta}
                </a>
              )}

              <div className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <div key={f.text} className="flex items-start gap-2.5">
                    {f.included ? (
                      <svg className="h-4 w-4 text-[#FF1744] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span className={`text-sm ${f.included ? "text-[#111]" : "text-gray-400"}`}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
