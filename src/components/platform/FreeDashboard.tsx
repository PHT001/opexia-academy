"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ——— Props ——— */
interface FreeDashboardProps {
  firstName: string;
}

/* ——— Animations ——— */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ——— Icons ——— */
function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
      <path d="M8 11h4" />
    </svg>
  );
}

/* ——— Progress data ——— */
interface FreeProgress {
  completedLessons: number;
  totalFreeLessons: number;
  xp: number;
  streak: number;
  nextLessonSlug: string | null;
  nextLessonTitle: string | null;
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  FreeDashboard Component                                             */
/* ══════════════════════════════════════════════════════════════════════ */

export default function FreeDashboard({ firstName }: FreeDashboardProps) {
  const [progress, setProgress] = useState<FreeProgress>({
    completedLessons: 0,
    totalFreeLessons: 8,
    xp: 0,
    streak: 0,
    nextLessonSlug: null,
    nextLessonTitle: null,
  });

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          // Find next incomplete lesson from free modules
          const modules = data.modules || [];
          let nextSlug: string | null = null;
          let nextTitle: string | null = null;
          let completedCount = 0;
          let totalFree = 0;

          for (const mod of modules) {
            const lessons = mod.lessons || [];
            for (const lesson of lessons) {
              if (mod.accessible) {
                totalFree++;
                if (lesson.status === "completed") {
                  completedCount++;
                } else if (!nextSlug) {
                  nextSlug = lesson.slug;
                  nextTitle = lesson.title;
                }
              }
            }
          }

          setProgress({
            completedLessons: data.completedLessons || completedCount,
            totalFreeLessons: totalFree || 8,
            xp: data.xp || 0,
            streak: data.streak || 0,
            nextLessonSlug: nextSlug,
            nextLessonTitle: nextTitle,
          });
        }
      })
      .catch(() => {});
  }, []);

  const progressPercent = progress.totalFreeLessons > 0
    ? Math.round((progress.completedLessons / progress.totalFreeLessons) * 100)
    : 0;
  const hasStarted = progress.completedLessons > 0;
  const hasFinishedFree = progressPercent >= 100;

  return (
    <motion.div
      className="w-full space-y-6"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* ════ HERO ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)",
        }}
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-500/8 rounded-full translate-y-1/2 blur-2xl" />

        <div className="relative z-10">
          <p className="text-[#FF1744] text-sm font-medium mb-1">
            {hasStarted ? "Content de te revoir" : "Bienvenue"}, {firstName} {"\uD83D\uDC4B"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {hasFinishedFree
              ? "Bravo, tu as termin\u00e9 le contenu gratuit\u00a0!"
              : hasStarted
              ? "Continue ta progression"
              : "Commence ta formation gratuite"}
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mb-5">
            {hasFinishedFree
              ? "Tu as vu ce que la formation propose. D\u00e9couvre nos offres pour acc\u00e9der \u00e0 tous les modules."
              : "Tu as acc\u00e8s gratuitement \u00e0 la Phase 1. D\u00e9couvre les bases de l\u2019IA et vois si la formation te correspond."}
          </p>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/60">
                {progress.completedLessons}/{progress.totalFreeLessons} le\u00e7ons gratuites
              </span>
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

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg hover:scale-[1.02] transition-transform"
              style={{
                background: "linear-gradient(135deg, #FF1744, #D50000)",
                boxShadow: "0 4px 20px rgba(255,23,68,0.3)",
              }}
            >
              {hasStarted ? (
                <>
                  <PlayIcon className="w-4 h-4" />
                  Reprendre la formation
                </>
              ) : (
                <>
                  <PlayIcon className="w-4 h-4" />
                  Commencer la Phase 1
                </>
              )}
            </Link>
            {hasFinishedFree && (
              <Link
                href="/offres"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white/80 bg-white/10 hover:bg-white/15 transition-colors"
              >
                D\u00e9couvrir nos offres
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* ════ QUICK STATS ════ */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-3" variants={stagger}>
        {[
          { label: "Le\u00e7ons", value: `${progress.completedLessons}`, sub: `/${progress.totalFreeLessons}`, color: "text-blue-500", bg: "bg-blue-50", icon: <BookIcon className="w-5 h-5" /> },
          { label: "XP gagn\u00e9s", value: `${progress.xp}`, sub: "", color: "text-amber-500", bg: "bg-amber-50", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
          { label: "Streak", value: `${progress.streak}`, sub: "j", color: "text-orange-500", bg: "bg-orange-50", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg> },
          { label: "Progression", value: `${progressPercent}`, sub: "%", color: "text-emerald-500", bg: "bg-emerald-50", icon: <CheckCircleIcon className="w-5 h-5" /> },
        ].map((s) => (
          <motion.div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center" variants={fadeUp}>
            <div className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mx-auto mb-2`}>
              {s.icon}
            </div>
            <p className="text-xl font-black text-[#111]">{s.value}<span className="text-sm font-normal text-gray-400">{s.sub}</span></p>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ════ PREMIERS PAS / CHECKLIST ════ */}
      <motion.div
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        variants={fadeUp}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#111]">Tes premiers pas</h2>
            <p className="text-xs text-gray-400">3 actions pour bien d{"\u00e9"}marrer</p>
          </div>
        </div>
        <div className="space-y-1">
          {[
            {
              done: hasStarted,
              label: "Commence ta premi\u00e8re le\u00e7on",
              desc: "D\u00e9couvre les bases de l\u2019IA pour ton business",
              href: "/lessons",
            },
            {
              done: false,
              label: "Rejoins le Discord",
              desc: "Connecte-toi avec la communaut\u00e9 OpexIA",
              href: "https://discord.gg/opexia",
              external: true,
            },
            {
              done: false,
              label: "Compl\u00e8te ton profil",
              desc: "Ajoute ta photo et tes infos",
              href: "/profile",
            },
          ].map((step, i) => (
            <Link
              key={i}
              href={step.href}
              target={step.external ? "_blank" : undefined}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step.done
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-[#FF1744]/10 text-[#FF1744]"
              }`}>
                {step.done ? (
                  <CheckCircleIcon className="w-4 h-4" />
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${step.done ? "text-gray-400 line-through" : "text-[#111]"}`}>
                  {step.label}
                </p>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </div>
              <ArrowRightIcon className="w-4 h-4 text-gray-300 group-hover:text-[#FF1744] transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ════ CE QUI T'ATTEND ════ */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#111]">Ce qui t{"\u2019"}attend ensuite</h2>
          <Link href="/lessons" className="text-xs font-semibold text-[#FF1744] hover:underline">
            Voir la formation →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { phase: 2, name: "Tes outils de travail", desc: "Prompting, IDE IA et workflow d\u00e9veloppeur", modules: 3 },
            { phase: 3, name: "Construire un site", desc: "Frontend, backend et d\u00e9ploiement", modules: 2 },
            { phase: 4, name: "Services \u00e0 vendre", desc: "Chatbots, agents vocaux, automatisations", modules: 5 },
          ].map((p) => (
            <div
              key={p.phase}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-300">
                    Phase {p.phase}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                    Premium
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#111] mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{p.desc}</p>
                <span className="text-[10px] text-gray-300">{p.modules} modules</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ════ CTA BOTTOM — only if finished free content ════ */}
      {hasFinishedFree && (
        <motion.div variants={fadeUp}>
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 shadow-lg" style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}>
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
            <div className="relative z-10 text-center max-w-lg mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Tu as termin{"\u00e9"} le contenu gratuit
              </h2>
              <p className="text-white/80 text-sm mb-6">
                D{"\u00e9"}couvre nos offres pour acc{"\u00e9"}der aux 22 modules et continuer ta progression.
              </p>
              <Link
                href="/offres"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold bg-white text-[#FF1744] hover:bg-gray-50 transition-colors shadow-lg"
              >
                D{"\u00e9"}couvrir nos offres
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
