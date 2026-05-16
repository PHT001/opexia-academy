"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  userName?: string;
  tier?: string;
  onComplete: () => void;
}

const STEPS = ["hello", "name", "contact", "profile", "ready"] as const;
type Step = (typeof STEPS)[number];

const AGE_OPTIONS = ["16-20", "21-25", "26-30", "31-35", "36-40", "41+"];

// ── Tier-specific configuration ──────────────────────────────────────
interface TierConfig {
  label: string;
  tagline: string;
  description: string;
  gradient: string;
  accentColor: string;
  accentHover: string;
  glowColor: string;
  icon: "rocket" | "crown" | "diamond";
  features: string[];
  readyTitle: string;
  readySubtitle: string;
}

const TIER_CONFIG: Record<string, TierConfig> = {
  free: {
    label: "Gratuit",
    tagline: "Decouvre la plateforme",
    description: "Explore OpexIA Academy gratuitement. Decouvre les modules, la progression XP et la communaute.",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #374151 100%)",
    accentColor: "#6B7280",
    accentHover: "#4B5563",
    glowColor: "rgba(107,114,128,0.15)",
    icon: "rocket",
    features: [
      "Acces au dashboard complet",
      "Vue de tous les modules",
      "Systeme de progression (XP)",
      "Acces Discord communautaire",
    ],
    readyTitle: "Ton espace est pret",
    readySubtitle: "Explore la plateforme et decouvre ce qui t'attend.",
  },
  starter: {
    label: "Starter",
    tagline: "Premiers pas dans l'IA",
    description: "Tu as fait le premier pas. Explore les fondamentaux de l'IA et decouvre ce qui t'attend.",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 100%)",
    accentColor: "#4F46E5",
    accentHover: "#4338CA",
    glowColor: "rgba(79,70,229,0.15)",
    icon: "rocket",
    features: [
      "Modules 1 & 2 : fondamentaux IA",
      "7 lecons video & texte",
      "Quiz de validation",
      "Acces Discord communautaire",
    ],
    readyTitle: "Pret a decouvrir l'IA",
    readySubtitle: "Tes premiers modules t'attendent. Commence par le Module 1.",
  },
  academy: {
    label: "Standard",
    tagline: "La formation complete",
    description: "Tu as acces a la formation complete. 23 modules, 111 lecons, et tout ce qu'il faut pour lancer ton agence IA.",
    gradient: "linear-gradient(135deg, #7F1D1D 0%, #DC2626 50%, #FF1744 100%)",
    accentColor: "#FF1744",
    accentHover: "#D50000",
    glowColor: "rgba(255,23,68,0.15)",
    icon: "crown",
    features: [
      "23 modules · 111 lecons",
      "Exercices a la fin de chaque module",
      "MVP review perso sous 24h",
      "Pipeline CRM & templates",
      "Programme de parrainage",
    ],
    readyTitle: "Ta formation est prete",
    readySubtitle: "23 modules t'attendent. Lance-toi par le Module 1.",
  },
  standard: {
    label: "Standard",
    tagline: "La formation complete",
    description: "Tu as acces a la formation complete. 23 modules, 111 lecons, et tout ce qu'il faut pour lancer ton agence IA.",
    gradient: "linear-gradient(135deg, #7F1D1D 0%, #DC2626 50%, #FF1744 100%)",
    accentColor: "#FF1744",
    accentHover: "#D50000",
    glowColor: "rgba(255,23,68,0.15)",
    icon: "crown",
    features: [
      "23 modules · 111 lecons",
      "Exercices a la fin de chaque module",
      "MVP review perso sous 24h",
      "Pipeline CRM & templates",
      "Programme de parrainage",
    ],
    readyTitle: "Ta formation est prete",
    readySubtitle: "23 modules t'attendent. Lance-toi par le Module 1.",
  },
  accompagnement: {
    label: "Accompagnement",
    tagline: "Accompagnement premium",
    description: "Bienvenue dans l'accompagnement. Coaching 1-on-1 hebdomadaire jusqu'a ton 1er client signe.",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #312E81 50%, #4C1D95 100%)",
    accentColor: "#8B5CF6",
    accentHover: "#7C3AED",
    glowColor: "rgba(139,92,246,0.15)",
    icon: "diamond",
    features: [
      "23 modules · 111 lecons",
      "Sessions 1-on-1 hebdomadaires avec Marius",
      "Review MVP en perso a chaque module",
      "Acces WhatsApp direct illimite",
      "Garantie 1er client signe en 90 jours",
    ],
    readyTitle: "Bienvenue dans l'accompagnement",
    readySubtitle: "On cale ta 1ere session sous 48h. En attendant, explore le Module 1.",
  },
  one_to_one: {
    label: "Accompagnement",
    tagline: "Accompagnement premium",
    description: "Bienvenue dans l'accompagnement. Coaching 1-on-1 hebdomadaire jusqu'a ton 1er client signe.",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #312E81 50%, #4C1D95 100%)",
    accentColor: "#8B5CF6",
    accentHover: "#7C3AED",
    glowColor: "rgba(139,92,246,0.15)",
    icon: "diamond",
    features: [
      "23 modules · 111 lecons",
      "Sessions 1-on-1 hebdomadaires avec Marius",
      "Review MVP en perso a chaque module",
      "Acces WhatsApp direct illimite",
      "Garantie 1er client signe en 90 jours",
    ],
    readyTitle: "Bienvenue dans l'accompagnement",
    readySubtitle: "On cale ta 1ere session sous 48h. En attendant, explore le Module 1.",
  },
};

const DEFAULT_CONFIG: TierConfig = TIER_CONFIG.academy;

function TierIcon({ type, className }: { type: TierConfig["icon"]; className?: string }) {
  if (type === "rocket") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    );
  }
  if (type === "diamond") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    );
  }
  // crown
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.27.308 6.023 6.023 0 01-2.27-.308" />
    </svg>
  );
}

export default function PostPurchaseOnboarding({ userName, tier = "free", onComplete }: Props) {
  const router = useRouter();
  const config = TIER_CONFIG[tier] || DEFAULT_CONFIG;
  const [step, setStep] = useState<Step>("hello");
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [name, setName] = useState(userName || "");
  const [phone, setPhone] = useState("");
  const [discord, setDiscord] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const currentIndex = STEPS.indexOf(step);
  const progress = ((currentIndex) / (STEPS.length - 1)) * 100;

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(t);
  }, []);

  function next() {
    const i = STEPS.indexOf(step);
    if (i < STEPS.length - 1) {
      setDirection(1);
      setStep(STEPS[i + 1]);
    }
  }

  function back() {
    const i = STEPS.indexOf(step);
    if (i > 0) {
      setDirection(-1);
      setStep(STEPS[i - 1]);
    }
  }

  const [error, setError] = useState("");

  async function finish() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, discordUsername: discord, age, profession }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      onComplete();
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Reessaie.");
      setLoading(false);
    }
  }

  async function skip() {
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || userName || "", skipped: true }),
      });
    } catch {
      // Silently fail
    }
    onComplete();
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, filter: "blur(4px)" }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, filter: "blur(4px)" }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)" }}
    >
      {/* Tier-colored ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: config.glowColor.replace("0.15", "0.25") }}
      />

      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${config.accentColor}, ${config.accentColor}88)` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />
      </motion.div>

      {/* Skip button */}
      <motion.button
        onClick={skip}
        className="absolute top-4 right-4 text-xs text-gray-400 hover:text-gray-600 transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Passer
      </motion.button>

      {/* Back button */}
      <AnimatePresence>
        {currentIndex > 0 && step !== "ready" && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={back}
            className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:shadow-md transition-all"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Step dots — tier-colored */}
      <motion.div
        className="absolute top-8 flex gap-1.5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {STEPS.map((s, i) => (
          <motion.div
            key={s}
            className="rounded-full transition-all duration-500"
            animate={{
              width: i === currentIndex ? 24 : 6,
              height: 6,
              backgroundColor: i <= currentIndex ? config.accentColor : "#E5E7EB",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait" custom={direction}>
        {showContent && (
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-[420px] px-8"
          >
            {/* ══ HELLO ══ */}
            {step === "hello" && (
              <div className="text-center">
                {/* Tier badge */}
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                  style={{ backgroundColor: config.glowColor, border: `1px solid ${config.accentColor}20` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <TierIcon type={config.icon} className="w-4 h-4" style={{ color: config.accentColor } as React.CSSProperties} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: config.accentColor }}>
                    {config.label}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-[42px] font-bold text-[#1A1A2E] leading-[1.1] tracking-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Bienvenue sur<br />
                  <span style={{ color: config.accentColor }}>Opex<span className="font-black">IA</span></span>
                </motion.h1>

                <motion.p
                  className="text-[15px] text-gray-500 leading-relaxed mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {config.tagline}
                </motion.p>

                <motion.p
                  className="text-[14px] text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {config.description}
                </motion.p>

                {/* Tier features preview */}
                <motion.div
                  className="mt-8 text-left space-y-2.5"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {config.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: config.glowColor }}
                      >
                        <svg className="w-3 h-3" style={{ color: config.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13px] text-gray-600">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.button
                  onClick={next}
                  className="mt-10 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold transition-all"
                  style={{ background: config.gradient }}
                  whileHover={{ scale: 1.01, boxShadow: `0 8px 30px ${config.glowColor}` }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Commencer
                </motion.button>
              </div>
            )}

            {/* ══ NAME ══ */}
            {step === "name" && (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Comment tu t&apos;appelles ?
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Pour personnaliser ton exp&eacute;rience
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Ton pr&#233;nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  className="w-full h-[56px] px-6 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[17px] placeholder:text-gray-300 focus:outline-none focus:bg-white focus:shadow-lg transition-all"
                  style={{ ["--tw-ring-color" as string]: config.accentColor }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = config.accentColor + "50"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                />
                <button
                  onClick={next}
                  disabled={!name.trim()}
                  className="mt-8 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  style={{ backgroundColor: config.accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = config.accentHover; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = config.accentColor; }}
                >
                  Continuer
                </button>
              </div>
            )}

            {/* ══ CONTACT ══ */}
            {step === "contact" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Restons en contact
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Pour la communaut&eacute; et le support
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">T&eacute;l&eacute;phone</label>
                    <input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:bg-white transition-all"
                      onFocus={(e) => { e.currentTarget.style.borderColor = config.accentColor + "50"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Pseudo Discord</label>
                    <input
                      type="text"
                      placeholder="tonpseudo"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:bg-white transition-all"
                      onFocus={(e) => { e.currentTarget.style.borderColor = config.accentColor + "50"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold transition-all"
                  style={{ backgroundColor: config.accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = config.accentHover; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = config.accentColor; }}
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-[13px] text-gray-400 hover:text-gray-500 transition-colors">
                  Passer
                </button>
              </div>
            )}

            {/* ══ PROFILE ══ */}
            {step === "profile" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Parle-nous de toi
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Pour adapter ton exp&eacute;rience
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Tranche d&apos;&acirc;ge</label>
                    <div className="grid grid-cols-3 gap-2">
                      {AGE_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAge(opt)}
                          className={`py-3 rounded-xl border-2 text-[14px] font-medium transition-all ${
                            age === opt
                              ? "text-[#1A1A2E]"
                              : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                          }`}
                          style={age === opt ? {
                            borderColor: config.accentColor,
                            backgroundColor: config.glowColor,
                          } : undefined}
                        >
                          {opt} ans
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Situation</label>
                    <input
                      type="text"
                      placeholder="&#201;tudiant, d&#233;veloppeur, freelance..."
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:bg-white transition-all"
                      onFocus={(e) => { e.currentTarget.style.borderColor = config.accentColor + "50"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold transition-all"
                  style={{ backgroundColor: config.accentColor }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = config.accentHover; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = config.accentColor; }}
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-[13px] text-gray-400 hover:text-gray-500 transition-colors">
                  Passer
                </button>
              </div>
            )}

            {/* ══ READY ══ */}
            {step === "ready" && (
              <div className="text-center">
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{ background: config.gradient }}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  >
                    <TierIcon type={config.icon} className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                {/* Tier badge */}
                <motion.div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4"
                  style={{ backgroundColor: config.glowColor, border: `1px solid ${config.accentColor}30` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: config.accentColor }}>
                    {config.label}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-[36px] font-bold text-[#1A1A2E] tracking-tight mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {name ? `${name}, c'est parti.` : config.readyTitle}
                </motion.h1>

                <motion.p
                  className="text-[17px] text-gray-400 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {config.readySubtitle}
                </motion.p>

                <motion.button
                  onClick={finish}
                  disabled={loading}
                  className="mt-12 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold disabled:opacity-50 transition-all"
                  style={{
                    background: config.gradient,
                    boxShadow: `0 8px 32px ${config.glowColor}`,
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      />
                      Pr&eacute;paration...
                    </span>
                  ) : (
                    "D\u00e9couvrir ma plateforme"
                  )}
                </motion.button>
                {error && (
                  <p className="mt-3 text-sm text-red-500">{error}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom branding */}
      <motion.div
        className="absolute bottom-8 flex items-center gap-1.5 text-[13px] text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-bold tracking-tight">Opex<span style={{ color: config.accentColor }}>IA</span></span>
        <span>Academy</span>
      </motion.div>
    </motion.div>
  );
}
