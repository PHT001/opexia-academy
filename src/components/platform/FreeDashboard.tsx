"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FreeDashboardProps {
  firstName: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const CHECKLIST = [
  {
    id: "explore",
    label: "Explore la plateforme",
    desc: "Fais le tour du dashboard, des notes et des outils",
    href: "/notes",
    storageKey: "opexia-free-check-explore",
  },
  {
    id: "discord",
    label: "Rejoins le Discord",
    desc: "Connecte-toi avec la communaut\u00e9 OpexIA",
    href: "https://discord.gg/uNc2jwBsr8",
    external: true,
    storageKey: "opexia-free-check-discord",
  },
  {
    id: "profile",
    label: "Compl\u00e8te ton profil",
    desc: "Ajoute ta photo et tes infos",
    href: "/profile",
    storageKey: "opexia-free-check-profile",
  },
  {
    id: "formation",
    label: "D\u00e9couvre le programme",
    desc: "Regarde les modules et ce qui t\u2019attend",
    href: "/lessons",
    storageKey: "opexia-free-check-formation",
  },
];

export default function FreeDashboard({ firstName }: FreeDashboardProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    const state: Record<string, boolean> = {};
    CHECKLIST.forEach((item) => {
      state[item.id] = localStorage.getItem(item.storageKey) === "true";
    });
    return state;
  });

  const toggleCheck = (id: string) => {
    const item = CHECKLIST.find((c) => c.id === id);
    if (!item) return;
    const newVal = !checked[id];
    setChecked((prev) => ({ ...prev, [id]: newVal }));
    localStorage.setItem(item.storageKey, String(newVal));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CHECKLIST.length) * 100);

  return (
    <motion.div className="w-full space-y-6" initial="hidden" animate="visible" variants={stagger}>

      {/* ════ HERO ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)" }}
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative z-10">
          <p className="text-[#FF1744] text-sm font-medium mb-1">
            Bienvenue, {firstName} {"\uD83D\uDC4B"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            D{"é"}couvre ta plateforme
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mb-5">
            Tu as un acc{"è"}s gratuit pour explorer la plateforme. Fais le tour, rejoins la communaut{"é"} et d{"é"}couvre ce qui t{"'"}attend.
          </p>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/60">{completedCount}/{CHECKLIST.length} {"é"}tapes</span>
              <span className="text-xs font-bold text-[#FF1744]">{progressPercent}%</span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(progressPercent, 2)}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════ CHECKLIST ════ */}
      <motion.div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm" variants={fadeUp}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <CheckIcon className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#111]">Tes premiers pas</h2>
            <p className="text-xs text-gray-400">{completedCount === CHECKLIST.length ? "Bravo, tout est fait !" : "Coche chaque étape au fur et à mesure"}</p>
          </div>
        </div>
        <div className="space-y-1">
          {CHECKLIST.map((step) => (
            <div key={step.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
              <button
                onClick={() => toggleCheck(step.id)}
                className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  checked[step.id]
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-gray-300 hover:border-[#FF1744] text-transparent"
                }`}
              >
                <CheckIcon className="w-3.5 h-3.5" />
              </button>
              <Link
                href={step.href}
                target={step.external ? "_blank" : undefined}
                className="flex-1 min-w-0"
              >
                <p className={`text-sm font-semibold ${checked[step.id] ? "text-gray-400 line-through" : "text-[#111]"}`}>
                  {step.label}
                </p>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </Link>
              <Link href={step.href} target={step.external ? "_blank" : undefined}>
                <ArrowRightIcon className="w-4 h-4 text-gray-300 group-hover:text-[#FF1744] transition-colors flex-shrink-0" />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ════ CE QUI T'ATTEND ════ */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#111]">Ce qui t{"\u2019"}attend</h2>
          <Link href="/lessons" className="text-xs font-semibold text-[#FF1744] hover:underline">
            Voir la formation →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { phase: 1, name: "Le cadre", desc: "Bienvenue, objectifs et d\u00e9couverte de l\u2019IA", modules: 2 },
            { phase: 2, name: "Tes outils de travail", desc: "Prompting, IDE IA et workflow d\u00e9veloppeur", modules: 3 },
            { phase: 3, name: "Construire un site", desc: "Frontend, backend et d\u00e9ploiement", modules: 2 },
          ].map((p) => (
            <div key={p.phase} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">Phase {p.phase}</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                  Premium
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#111] mb-1">{p.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{p.desc}</p>
              <span className="text-[10px] text-gray-300">{p.modules} modules</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ════ CTA ════ */}
      <motion.div variants={fadeUp}>
        <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}>
          <h2 className="text-xl font-bold text-white mb-2">Pr{"ê"}t {"à"} passer {"à"} la vitesse sup{"é"}rieure ?</h2>
          <p className="text-white/70 text-sm mb-5">D{"é"}bloque tous les modules et commence ta formation.</p>
          <Link href="/offres" className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold bg-white text-[#FF1744] hover:bg-gray-50 transition-colors shadow-lg">
            D{"é"}couvrir nos offres
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
