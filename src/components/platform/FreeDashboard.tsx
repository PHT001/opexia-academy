"use client";

import React, { useState, useEffect, useCallback } from "react";
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

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function DiscountBanner() {
  const [discountData, setDiscountData] = useState<{
    discountCode: string | null;
    discountPercent: number | null;
    discountExpiresAt: string | null;
  } | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => {
        if (d?.discountExpiresAt && d?.discountCode) {
          setDiscountData({
            discountCode: d.discountCode,
            discountPercent: d.discountPercent,
            discountExpiresAt: d.discountExpiresAt,
          });
        }
      })
      .catch(() => {});
  }, []);

  const calculateTimeLeft = useCallback(() => {
    if (!discountData?.discountExpiresAt) return null;
    const diff = new Date(discountData.discountExpiresAt).getTime() - Date.now();
    if (diff <= 0) return null;
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }, [discountData]);

  useEffect(() => {
    if (!discountData?.discountExpiresAt) return;
    const update = () => {
      const tl = calculateTimeLeft();
      if (!tl) {
        setExpired(true);
        setTimeLeft(null);
      } else {
        setTimeLeft(tl);
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [discountData, calculateTimeLeft]);

  if (!discountData || expired || !timeLeft) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-5 sm:p-6 text-center"
      style={{ background: "linear-gradient(135deg, #06B6D4 0%, #FF6D00 100%)" }}
    >
      <p className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-1">Offre limit{"é"}e</p>
      <p className="text-white text-xl sm:text-2xl font-black mb-2">
        -{discountData.discountPercent}% sur toute la formation
      </p>
      <div className="flex items-center justify-center gap-2 mb-3">
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
      <p className="text-white/80 text-sm mb-3">
        Code : <span className="font-bold text-white">{discountData.discountCode}</span>
      </p>
      <Link
        href={`/offres?code=${discountData.discountCode}`}
        className="inline-flex items-center gap-2 bg-white text-[#06B6D4] font-bold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
      >
        Profiter de l{"'"}offre
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

const CHECKLIST = [
  {
    id: "module",
    label: "Commence le Module D\u00e9couverte",
    desc: "Ta premi\u00e8re le\u00e7on gratuite t\u2019attend",
    href: "/lessons",
    storageKey: "opexia-free-check-module",
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
    id: "explore",
    label: "Explore la plateforme",
    desc: "Fais le tour du dashboard, des notes et des outils",
    href: "/notes",
    storageKey: "opexia-free-check-explore",
  },
];


function OnlineCounter() {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 18) + 8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(8, Math.min(25, prev + delta));
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
        <span className="text-sm font-semibold text-[#111]">
          En ce moment : <span className="text-green-600">{count} personnes en ligne</span>
        </span>
      </div>
      <div className="text-xs text-gray-400 hidden sm:block">Mise {"\u00e0"} jour en direct</div>
    </motion.div>
  );
}

function ProgressComparison() {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-[#06B6D4]/15 bg-gradient-to-r from-[#06B6D4]/5 to-orange-50 p-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-base">
          {"\uD83C\uDFC6"}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111] leading-snug">
            Tu es dans le <span className="text-[#06B6D4]">top 40%</span> des inscrits gratuits
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Passe {"\u00e0"} l{"'"}Academy pour rejoindre le <span className="font-semibold text-[#06B6D4]">top 5%</span> et acc{"é"}l{"é"}rer ta progression
          </p>
          <Link
            href="/offres"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#06B6D4] mt-2 hover:underline"
          >
            D{"é"}couvrir l{"'"}Academy
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

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

      {/* ════ DISCOUNT BANNER ════ */}
      <DiscountBanner />

      {/* ════ HERO ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)" }}
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#06B6D4]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative z-10">
          <p className="text-[#06B6D4] text-sm font-medium mb-1">
            Bienvenue, {firstName} {"\uD83D\uDC4B"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            D{"é"}couvre la plateforme — explore ce qui t{"'"}attend !
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mb-5">
            D{"é"}couvre le game IA en 2026 avec ton premier module. Pas de carte bancaire, pas d{"'"}engagement.
          </p>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/60">{completedCount}/{CHECKLIST.length} {"é"}tapes</span>
              <span className="text-xs font-bold text-[#06B6D4]">{progressPercent}%</span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #06B6D4, #FF5252)" }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(progressPercent, 2)}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════ SOCIAL PROOF: ONLINE COUNTER + PROGRESS COMPARISON ════ */}
      <OnlineCounter />
      <ProgressComparison />

      {/* ════ START MODULE CTA ════ */}
      <motion.div variants={fadeUp}>
        <Link href="/lessons" className="block">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#06B6D4]/30 bg-gradient-to-br from-[#06B6D4]/5 to-white p-6 sm:p-8 hover:border-[#06B6D4]/60 hover:shadow-lg transition-all group cursor-pointer">
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#06B6D4]/20 group-hover:scale-105 transition-transform">
                <PlayIcon className="w-7 h-7 text-white ml-0.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-[#111] mb-1">D{"é"}couvrir la formation</h2>
                <p className="text-sm text-gray-500">22 modules, 86 le{"ç"}ons — explore ce qui t{"'"}attend</p>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-[#06B6D4] group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* ════ CHECKLIST ════ */}
      <motion.div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm" variants={fadeUp}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <CheckIcon className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#111]">Tes premiers pas</h2>
            <p className="text-xs text-gray-400">{completedCount === CHECKLIST.length ? "Bravo, tout est fait !" : "Coche chaque \u00e9tape au fur et \u00e0 mesure"}</p>
          </div>
        </div>
        <div className="space-y-1">
          {CHECKLIST.map((step) => (
            <div key={step.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors group">
              <button
                onClick={() => toggleCheck(step.id)}
                className={`flex-shrink-0 w-11 h-11 sm:w-7 sm:h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  checked[step.id]
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-gray-300 hover:border-[#06B6D4] text-transparent"
                }`}
              >
                <CheckIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
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
              <Link href={step.href} target={step.external ? "_blank" : undefined} className="p-2 -m-2 flex-shrink-0">
                <ArrowRightIcon className="w-4 h-4 text-gray-300 group-hover:text-[#06B6D4] transition-colors" />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ════ CE QUE TU DÉBLOQUES AVEC ACADEMY ════ */}
      <motion.div variants={fadeUp}>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-bold text-[#111] mb-1">Ce qui t{"\u2019"}attend avec Academy</h2>
          <p className="text-sm text-gray-400 mb-4">Passe au niveau sup{"é"}rieur quand tu es pr{"ê"}t</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "86", label: "Le\u00e7ons" },
              { value: "22", label: "Modules" },
              { value: "IA", label: "Assistant int\u00e9gr\u00e9" },
              { value: "CRM", label: "Pipeline clients" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-lg font-bold text-[#06B6D4]">{item.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="/offres"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:underline"
            >
              D{"é"}couvrir les offres
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ════ DISCORD CTA ════ */}
      <motion.div variants={fadeUp}>
        <a
          href="https://discord.gg/uNc2jwBsr8"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-[#5865F2]/20 bg-[#5865F2]/5 p-5 hover:bg-[#5865F2]/10 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5865F2] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 127.14 96.36" fill="white">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#111]">Rejoins la communaut{"é"} Discord</p>
              <p className="text-xs text-gray-400">{"É"}change avec les autres {"é"}l{"è"}ves et pose tes questions</p>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-[#5865F2] flex-shrink-0" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
