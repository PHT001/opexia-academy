"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TIERS } from "@/lib/constants";

const TIER_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  starter: { label: "Starter", color: "text-gray-600", bg: "bg-gray-100" },
  academy: { label: "Academy", color: "text-[#FF1744]", bg: "bg-[#FF1744]/10" },
  one_to_one: { label: "Premium", color: "text-amber-700", bg: "bg-amber-50" },
};

const BADGES = [
  { icon: "\u{1F3AF}", name: "Premier pas", desc: "Premi\u00e8re le\u00e7on compl\u00e9t\u00e9e", unlocked: true },
  { icon: "\u{1F9E0}", name: "Fondations IA", desc: "Module 1 termin\u00e9", unlocked: false },
  { icon: "\u{1F525}", name: "Semaine de feu", desc: "7 jours de streak", unlocked: false },
  { icon: "\u26A1", name: "Mi-parcours", desc: "44 le\u00e7ons compl\u00e9t\u00e9es", unlocked: false },
  { icon: "\u{1F3C6}", name: "Quiz Master", desc: "Tous les quiz valid\u00e9s", unlocked: false },
  { icon: "\u{1F393}", name: "Dipl\u00f4me", desc: "Formation compl\u00e8te", unlocked: false },
];

type Tab = "profile" | "subscription";

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto w-full animate-pulse"><div className="h-32 bg-gray-100 rounded-2xl" /></div>}>
      <ProfileContent />
    </Suspense>
  );
}

function ProfileContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter", lessonsCompleted: 0, quizzesPassed: 0 });
  const [activeTab, setActiveTab] = useState<Tab>(
    searchParams.get("tab") === "subscription" ? "subscription" : "profile"
  );

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          setStats({
            xp: data.xp,
            streak: data.streak,
            tier: data.tier || "starter",
            lessonsCompleted: data.lessonsCompleted || 0,
            quizzesPassed: data.quizzesPassed || 0,
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (searchParams.get("tab") === "subscription") setActiveTab("subscription");
  }, [searchParams]);

  const tierInfo = TIER_LABELS[stats.tier] || TIER_LABELS.starter;
  const level = Math.floor(stats.xp / 200) + 1;
  const xpInLevel = stats.xp % 200;
  const xpProgress = (xpInLevel / 200) * 100;
  const isAdmin = session?.user?.role === "admin";

  return (
    <div className="max-w-4xl mx-auto w-full">

      {/* Header card */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="h-20 relative" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-[#FF1744]/20 blur-[50px]" />
          </div>
        </div>
        <div className="px-6 pb-5 -mt-8 relative">
          <div className="flex items-end gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-2xl font-bold text-white shadow-lg ring-4 ring-white flex-shrink-0">
              {session?.user?.name?.[0]?.toUpperCase() || "?"}
            </div>
            <div className="flex-1 pt-8">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-[#111]">{session?.user?.name || "\u00c9l\u00e8ve"}</h1>
                {isAdmin && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FF1744]/10 text-[#FF1744]">Admin</span>
                )}
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${tierInfo.bg} ${tierInfo.color}`}>
                  {isAdmin ? "Acc\u00e8s complet" : tierInfo.label}
                </span>
              </div>
              <p className="text-xs text-gray-400">{session?.user?.email}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium text-gray-400 border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
              D\u00e9connexion
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1">
        {([
          { id: "profile" as Tab, label: "Mon profil" },
          { id: "subscription" as Tab, label: "Mon abonnement" },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-white text-[#111] shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "profile" ? (
          <motion.div key="profile" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { label: "XP Total", value: stats.xp.toLocaleString(), icon: "\u26A1" },
                { label: "Streak", value: `${stats.streak}j`, icon: "\u{1F525}" },
                { label: "Le\u00e7ons", value: String(stats.lessonsCompleted), icon: "\u{1F4DA}" },
                { label: "Quiz", value: String(stats.quizzesPassed), icon: "\u2705" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
                  <p className="text-2xl mb-1">{s.icon}</p>
                  <p className="text-xl font-black text-[#111]">{s.value}</p>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Level + Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-[#111]">Niveau</h3>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="text-[10px] font-bold text-amber-700">Niv. {level}</span>
                  </div>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }} initial={{ width: 0 }} animate={{ width: `${Math.max(xpProgress, 3)}%` }} transition={{ duration: 1 }} />
                </div>
                <p className="text-[10px] text-gray-400">{xpInLevel}/200 XP pour le niveau {level + 1}</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-sm font-bold text-[#111] mb-3">Badges</h3>
                <div className="flex gap-2">
                  {BADGES.map((badge) => (
                    <div key={badge.name} className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${badge.unlocked ? "bg-amber-50 border border-amber-200" : "bg-gray-50 border border-dashed border-gray-200 grayscale opacity-30"}`} title={badge.name}>
                      {badge.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Account info */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-3.5 border-b border-gray-100">
                <h3 className="text-sm font-bold text-[#111]">Informations du compte</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  { label: "Nom", value: session?.user?.name || "\u2014" },
                  { label: "Email", value: session?.user?.email || "\u2014" },
                  { label: "Mot de passe", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" },
                  { label: "Membre depuis", value: "Mars 2026" },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-3.5 flex items-center justify-between">
                    <span className="text-xs text-gray-400 w-28">{item.label}</span>
                    <span className="text-xs text-gray-700 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="subscription" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {/* Current plan */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Ton abonnement actuel</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold px-3 py-1 rounded-lg ${tierInfo.bg} ${tierInfo.color}`}>
                      {isAdmin ? "Admin \u2014 Acc\u00e8s complet" : tierInfo.label}
                    </span>
                    {!isAdmin && stats.tier !== "one_to_one" && (
                      <span className="text-[10px] text-gray-400">Upgrade pour d\u00e9bloquer plus de contenu</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-[#111]">
                    {isAdmin ? "\u221E" : stats.tier === "starter" ? "47\u20ac" : stats.tier === "academy" ? "397\u20ac" : "3 997\u20ac"}
                  </p>
                  <p className="text-[10px] text-gray-400">paiement unique</p>
                </div>
              </div>
            </div>

            {/* Plans — même style que la landing page formation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {TIERS.map((tier) => {
                const isCurrent = stats.tier === tier.id || (isAdmin && (tier.id === "academy" || tier.id === "one_to_one"));
                return (
                  <div
                    key={tier.id}
                    className={`relative rounded-2xl bg-white p-8 ${
                      tier.popular
                        ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                        : "border border-gray-200"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                          Populaire
                        </span>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-[#111]">{tier.name}</h3>
                      <p className="text-sm text-[#6B7280] mt-1">{tier.description}</p>
                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-5xl font-black tracking-tight text-[#111]">
                          {tier.price.toLocaleString("fr-FR")}
                        </span>
                        <span className="text-lg font-medium text-[#6B7280]">&euro;</span>
                      </div>
                      <p className="text-sm text-[#6B7280] mt-1">paiement unique</p>
                    </div>

                    {isCurrent ? (
                      <div className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-gray-400 bg-gray-100 border border-gray-200">
                        Ton plan actuel
                      </div>
                    ) : (
                      <a
                        href="/formation#pricing"
                        className={`block w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all ${
                          tier.popular
                            ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200"
                            : "bg-[#111] text-white hover:bg-[#333]"
                        }`}
                      >
                        {tier.cta}
                      </a>
                    )}

                    <div className="mt-8 space-y-3">
                      {tier.features.map((f) => (
                        <div key={f.text} className="flex items-start gap-3">
                          {f.included ? (
                            <svg className="h-5 w-5 text-[#FF1744] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
