"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
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

/* ——— Animated Counter ——— */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => Math.round(v).toString() + suffix);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) animate(motionVal, target, { duration: 1.4, ease: "easeOut" });
  }, [isInView, target, motionVal]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

/* ——— Icons ——— */
function LockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function BotIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h3a4 4 0 0 1 4 4v1a2 2 0 0 1 0 4v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a2 2 0 0 1 0-4v-1a4 4 0 0 1 4-4h3V5.73A2 2 0 0 1 12 2z" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

function PipelineIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </svg>
  );
}

function GeneratorIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ——— Countdown Hook ——— */
function useCountdown48h() {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number } | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Get or set first visit timestamp
    const STORAGE_KEY = "opexia-free-first-visit";
    let firstVisit = localStorage.getItem(STORAGE_KEY);
    if (!firstVisit) {
      firstVisit = Date.now().toString();
      localStorage.setItem(STORAGE_KEY, firstVisit);
    }

    const endTime = parseInt(firstVisit) + 48 * 60 * 60 * 1000;

    function update() {
      const now = Date.now();
      const diff = endTime - now;
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft(null);
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ h, m, s });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeLeft, expired };
}

/* ——— Formation Data ——— */
const phases = [
  {
    phase: 1,
    name: "Le cadre",
    color: "from-blue-500 to-blue-600",
    modules: ["Bienvenue & Objectif", "D\u00e9couvrir les IA"],
  },
  {
    phase: 2,
    name: "Tes outils",
    color: "from-violet-500 to-violet-600",
    modules: ["Prompter", "IDE IA", "Git & GitHub"],
  },
  {
    phase: 3,
    name: "Construire un site",
    color: "from-emerald-500 to-emerald-600",
    modules: ["Frontend", "Backend & D\u00e9ploiement"],
  },
  {
    phase: 4,
    name: "Services \u00e0 vendre",
    color: "from-amber-500 to-amber-600",
    modules: ["Chatbots", "Agents vocaux", "Automatisations", "Leads", "Documents"],
  },
  {
    phase: 5,
    name: "Industrialiser",
    color: "from-rose-500 to-rose-600",
    modules: ["MVP", "S\u00e9curit\u00e9", "DevOps"],
  },
  {
    phase: 6,
    name: "Vendre",
    color: "from-[#FF1744] to-[#D50000]",
    modules: ["Structure", "Offre", "Prospection", "Closer", "Fid\u00e9liser"],
  },
  {
    phase: 7,
    name: "Scaler",
    color: "from-purple-600 to-purple-700",
    modules: ["Juridique", "Scaler \u00e0 10K\u20ac/mois"],
  },
];

/* ——— Feature Teasers ——— */
const features = [
  {
    icon: BotIcon,
    title: "Assistant IA",
    description: "Un assistant personnel pour t\u2019aider dans tous tes projets",
  },
  {
    icon: PipelineIcon,
    title: "Pipeline CRM",
    description: "G\u00e8re tes clients et prospects comme une vraie agence",
  },
  {
    icon: GeneratorIcon,
    title: "G\u00e9n\u00e9rateur de projets",
    description: "G\u00e9n\u00e8re des livrables complets en quelques clics",
  },
];

/* ——— Testimonials Data ——— */
const testimonials = [
  {
    quote: "J\u2019ai sign\u00e9 mon premier client \u00e0 +1200\u20ac la premi\u00e8re semaine",
    tier: "\u00c9l\u00e8ve Academy",
  },
  {
    quote: "Le CRM int\u00e9gr\u00e9 m\u2019a permis de closer 8K\u20ac de deals",
    tier: "\u00c9l\u00e8ve Academy",
  },
  {
    quote: "En 3 mois j\u2019ai mont\u00e9 mon agence \u00e0 10K\u20ac/mois de MRR",
    tier: "\u00c9l\u00e8ve One-to-One",
  },
];

/* ══════════════════════════════════════════════════════════════════════ */
/*  FreeDashboard Component                                             */
/* ══════════════════════════════════════════════════════════════════════ */

export default function FreeDashboard({ firstName }: FreeDashboardProps) {
  const { timeLeft, expired } = useCountdown48h();

  return (
    <motion.div
      className="w-full space-y-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* ════ COUNTDOWN BANNER — 48h welcome offer ════ */}
      {!expired && timeLeft && (
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #D50000 0%, #1A1A2E 60%, #0F0F1E 100%)",
          }}
          variants={fadeUp}
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF1744]/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 sm:py-3">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <span className="text-white/90 text-sm font-medium">
                Offre de bienvenue : <span className="text-white font-bold">-10% sur toutes les formules</span>
              </span>
              <div className="flex items-center gap-1.5 text-white font-mono text-sm">
                <span className="text-white/60">Expire dans :</span>
                <span className="bg-white/15 backdrop-blur rounded px-2 py-0.5 font-bold tabular-nums">
                  {String(timeLeft.h).padStart(2, "0")}h
                </span>
                <span className="bg-white/15 backdrop-blur rounded px-2 py-0.5 font-bold tabular-nums">
                  {String(timeLeft.m).padStart(2, "0")}m
                </span>
                <span className="bg-white/15 backdrop-blur rounded px-2 py-0.5 font-bold tabular-nums">
                  {String(timeLeft.s).padStart(2, "0")}s
                </span>
              </div>
            </div>
            <Link
              href="/profile?tab=subscription"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold bg-white text-[#D50000] hover:bg-gray-50 transition-colors shadow"
            >
              En profiter maintenant
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      )}

      {/* ════ SECTION 1 — Hero ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-8 sm:p-10 shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)",
        }}
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#FF1744]/5 rounded-full translate-y-1/2 blur-2xl" />

        <div className="relative z-10">
          <p className="text-[#FF1744] text-sm font-medium mb-1">
            Bienvenue, {firstName} {"\uD83D\uDC4B"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Ta plateforme est pr&ecirc;te. D&eacute;bloque ta formation.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Tu as acc&egrave;s &agrave; la plateforme, maintenant d&eacute;couvre tout ce qui t&rsquo;attend.
          </p>
        </div>
      </motion.div>

      {/* ════ PROGRESS TEASER ════ */}
      <motion.div
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
        variants={fadeUp}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-lg font-bold text-[#111]">Ta progression</h2>
          <Link
            href="/profile?tab=subscription"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white hover:opacity-90 transition-opacity shadow-sm"
          >
            D&eacute;bloquer ma formation
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#D50000]"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#111]">0<span className="text-sm font-normal text-[#6B7280]">/22</span></p>
            <p className="text-xs text-[#6B7280]">Modules compl&eacute;t&eacute;s</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#111]">0<span className="text-sm font-normal text-[#6B7280]">/85</span></p>
            <p className="text-xs text-[#6B7280]">Le&ccedil;ons termin&eacute;es</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#111]">0</p>
            <p className="text-xs text-[#6B7280]">XP gagn&eacute;s</p>
          </div>
        </div>

        <p className="text-center text-sm text-[#6B7280]">
          Commence ta formation pour voir ta progression ici
        </p>
      </motion.div>

      {/* ════ SECTION 2 — Animated Stats ════ */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        variants={stagger}
      >
        {[
          { value: 22, suffix: "", label: "Modules de formation" },
          { value: 85, suffix: "+", label: "Le\u00e7ons vid\u00e9o & texte" },
          { value: 500, suffix: "+", label: "\u00c9l\u00e8ves actifs" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            variants={fadeUp}
          >
            <p className="text-3xl sm:text-4xl font-bold text-[#111] mb-1">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-[#6B7280] text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ════ SECTION 3 — Formation Preview ════ */}
      <motion.div variants={fadeUp}>
        <h2 className="text-lg font-bold text-[#111] mb-4">
          Ce qui t&rsquo;attend dans la formation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {phases.map((p) => (
            <motion.div
              key={p.phase}
              className="group relative rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeUp}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${p.color} text-white text-xs font-bold`}
                  >
                    {p.phase}
                  </span>
                  <span className="text-xs font-semibold text-[#111] uppercase tracking-wide">
                    {p.name}
                  </span>
                </div>
                <LockIcon className="w-3.5 h-3.5 text-gray-300" />
              </div>
              <div className="space-y-1">
                {p.modules.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 text-xs text-[#6B7280]"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-gray-50">
                <span className="text-[10px] text-[#6B7280]">
                  {p.modules.length} module{p.modules.length > 1 ? "s" : ""}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════ SOCIAL PROOF — Testimonials ════ */}
      <motion.div variants={fadeUp}>
        <h2 className="text-lg font-bold text-[#111] mb-4">
          Ce que nos &eacute;l&egrave;ves accomplissent
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              variants={fadeUp}
            >
              {/* Quote icon */}
              <svg className="w-6 h-6 text-[#FF1744]/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-[#111] font-medium leading-relaxed mb-3">
                &laquo; {t.quote} &raquo;
              </p>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF1744]/10 to-[#D50000]/10 text-[#D50000] text-[10px] font-semibold px-2.5 py-1">
                {t.tier}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════ SECTION 4 — Feature Teasers ════ */}
      <motion.div variants={fadeUp}>
        <h2 className="text-lg font-bold text-[#111] mb-4">
          Outils inclus dans la plateforme
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden"
              variants={fadeUp}
            >
              {/* Blurred overlay */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900/80 text-white text-[11px] font-semibold px-3 py-1.5">
                  <LockIcon className="w-3 h-3" />
                  Bient&ocirc;t disponible
                </span>
              </div>
              <div className="relative z-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1744]/10 to-[#FF1744]/5 flex items-center justify-center mb-3 text-[#FF1744]">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#111] mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-[#6B7280]">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════ SECTION 5 — CTA Upgrade ════ */}
      <motion.div variants={fadeUp}>
        <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 shadow-lg bg-gradient-to-r from-[#FF1744] to-[#D50000]">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

          <div className="relative z-10 text-center max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Pr&ecirc;t &agrave; d&eacute;bloquer tout &ccedil;a ?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6">
              Rejoins +500 &eacute;l&egrave;ves qui lancent leur agence IA
            </p>
            <Link
              href="/profile?tab=subscription"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold bg-white text-[#FF1744] hover:bg-gray-50 transition-colors shadow-lg"
            >
              Voir les offres
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
