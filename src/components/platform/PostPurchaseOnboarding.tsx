"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  userName?: string;
  tier?: string;
  onComplete: () => void;
}

const STEPS = ["hello", "name", "goal", "contact", "profile", "discover", "ready"] as const;
type Step = (typeof STEPS)[number];

const GOALS = [
  { id: "agency", emoji: "\uD83C\uDFE2", label: "Lancer mon agence IA" },
  { id: "freelance", emoji: "\uD83D\uDCBB", label: "Vendre des services IA en freelance" },
  { id: "learn", emoji: "\uD83E\uDDE0", label: "Apprendre les outils IA" },
  { id: "revenue", emoji: "\uD83D\uDCB0", label: "G\u00e9n\u00e9rer des revenus avec l\u2019IA" },
];

const TIER_LABELS: Record<string, string> = {
  free: "Gratuit",
  starter: "Starter",
  academy: "Academy",
  one_to_one: "One-to-One",
};

const TIER_FEATURES: Record<string, { icon: string; text: string }[]> = {
  free: [
    { icon: "\uD83D\uDD0D", text: "Explorer la plateforme" },
    { icon: "\uD83D\uDCDD", text: "D\u00e9couvrir les notes" },
    { icon: "\uD83D\uDCAC", text: "Acc\u00e8s au Discord communautaire" },
  ],
  starter: [
    { icon: "\uD83D\uDCD6", text: "2 modules complets (7 le\u00e7ons)" },
    { icon: "\uD83E\uDDE0", text: "D\u00e9couverte du march\u00e9 IA" },
    { icon: "\u2705", text: "Quiz de validation" },
    { icon: "\uD83D\uDCAC", text: "Acc\u00e8s au Discord communautaire" },
  ],
  academy: [
    { icon: "\uD83D\uDE80", text: "85 le\u00e7ons en 22 modules" },
    { icon: "\uD83E\uDDE0", text: "Prompting, dev, automatisation, vente" },
    { icon: "\uD83C\uDFC6", text: "Certificats et badges" },
    { icon: "\uD83E\uDD16", text: "Assistant IA int\u00e9gr\u00e9" },
    { icon: "\uD83D\uDCAC", text: "Communaut\u00e9 Discord" },
  ],
  one_to_one: [
    { icon: "\uD83D\uDE80", text: "Tout Academy (85 le\u00e7ons)" },
    { icon: "\uD83C\uDFA5", text: "8 sessions coaching en visio" },
    { icon: "\uD83C\uDFAF", text: "Accompagnement personnalis\u00e9" },
    { icon: "\uD83D\uDCCB", text: "Review de projets d\u00e9di\u00e9e" },
    { icon: "\u26A1", text: "Support prioritaire" },
  ],
};

export default function PostPurchaseOnboarding({ userName, tier = "free", onComplete }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("hello");
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [name, setName] = useState(userName || "");
  const [goal, setGoal] = useState("");
  const [phone, setPhone] = useState("");
  const [discord, setDiscord] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const currentIndex = STEPS.indexOf(step);
  const progress = ((currentIndex) / (STEPS.length - 1)) * 100;

  // Intro animation delay
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

  async function finish() {
    setLoading(true);
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, discordUsername: discord, age, profession, goal }),
      });
      onComplete();
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, filter: "blur(4px)" }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, filter: "blur(4px)" }),
  };

  const features = TIER_FEATURES[tier] || TIER_FEATURES.free;
  const tierLabel = TIER_LABELS[tier] || "Gratuit";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)" }}
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #FF1744 0%, transparent 70%)" }} />

      {/* Progress — thin Apple-style */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />
      </motion.div>

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

      {/* Step indicator — minimal dots */}
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
              backgroundColor: i <= currentIndex ? "#FF1744" : "#E5E7EB",
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
            {/* ═══ HELLO ═══ */}
            {step === "hello" && (
              <div className="text-center">
                {/* Animated logo */}
                <motion.div
                  className="w-20 h-20 rounded-[22px] mx-auto mb-8 flex items-center justify-center shadow-xl"
                  style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <span className="text-white text-2xl font-black tracking-tight">IA</span>
                </motion.div>

                <motion.h1
                  className="text-[42px] font-bold text-[#1A1A2E] leading-[1.1] tracking-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Bienvenue.
                </motion.h1>

                <motion.p
                  className="text-[17px] text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Ton espace <span className="text-[#FF1744] font-semibold">Opex<span className="font-black">IA</span></span> {tierLabel !== "Gratuit" && <span className="font-medium text-gray-600">{tierLabel}</span>} est pr{"ê"}t.
                  <br />
                  Quelques secondes pour tout configurer.
                </motion.p>

                <motion.button
                  onClick={next}
                  className="mt-12 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold transition-all"
                  style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 100%)" }}
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 30px rgba(26,26,46,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Commencer
                </motion.button>
              </div>
            )}

            {/* ═══ NAME ═══ */}
            {step === "name" && (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Comment tu t{"'"}appelles ?
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Pour personnaliser ton exp{"é"}rience
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Ton prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  className="w-full h-[56px] px-6 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[17px] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white focus:shadow-lg focus:shadow-[#FF1744]/5 transition-all"
                />
                <button
                  onClick={next}
                  disabled={!name.trim()}
                  className="mt-8 w-full h-[56px] rounded-2xl bg-[#1A1A2E] text-white text-[17px] font-semibold hover:bg-[#2D2D4E] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                >
                  Continuer
                </button>
              </div>
            )}

            {/* ═══ GOAL ═══ */}
            {step === "goal" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Ton objectif ?
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    On adapte ton parcours en fonction
                  </p>
                </div>
                <div className="space-y-3">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all ${
                        goal === g.id
                          ? "border-[#FF1744] bg-[#FF1744]/[0.04] shadow-sm"
                          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                      }`}
                    >
                      <span className="text-2xl">{g.emoji}</span>
                      <span className={`text-[15px] font-medium ${goal === g.id ? "text-[#1A1A2E]" : "text-gray-600"}`}>
                        {g.label}
                      </span>
                      {goal === g.id && (
                        <motion.div
                          className="ml-auto w-6 h-6 rounded-full bg-[#FF1744] flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={next}
                  disabled={!goal}
                  className="mt-8 w-full h-[56px] rounded-2xl bg-[#1A1A2E] text-white text-[17px] font-semibold hover:bg-[#2D2D4E] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                >
                  Continuer
                </button>
              </div>
            )}

            {/* ═══ CONTACT ═══ */}
            {step === "contact" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Restons en contact
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Optionnel — pour la communaut{"é"} et le support
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">T{"é"}l{"é"}phone</label>
                    <input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Pseudo Discord</label>
                    <input
                      type="text"
                      placeholder="tonpseudo"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-[56px] rounded-2xl bg-[#1A1A2E] text-white text-[17px] font-semibold hover:bg-[#2D2D4E] transition-all"
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-[13px] text-gray-400 hover:text-gray-500 transition-colors">
                  Passer
                </button>
              </div>
            )}

            {/* ═══ PROFILE ═══ */}
            {step === "profile" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Parle-nous de toi
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Pour adapter ton exp{"é"}rience
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Tranche d{"'"}{"â"}ge</label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all appearance-none"
                    >
                      <option value="">S{"é"}lectionner</option>
                      <option value="16-20">16 - 20 ans</option>
                      <option value="21-25">21 - 25 ans</option>
                      <option value="26-30">26 - 30 ans</option>
                      <option value="31-35">31 - 35 ans</option>
                      <option value="36-40">36 - 40 ans</option>
                      <option value="41+">41 ans et +</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-400 mb-2 ml-1">Situation</label>
                    <input
                      type="text"
                      placeholder="Étudiant, développeur, freelance..."
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full h-[52px] px-5 rounded-2xl bg-gray-50/80 border-2 border-gray-100 text-[#1A1A2E] text-[16px] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-[56px] rounded-2xl bg-[#1A1A2E] text-white text-[17px] font-semibold hover:bg-[#2D2D4E] transition-all"
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-[13px] text-gray-400 hover:text-gray-500 transition-colors">
                  Passer
                </button>
              </div>
            )}

            {/* ═══ DISCOVER ═══ */}
            {step === "discover" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-[32px] font-bold text-[#1A1A2E] tracking-tight mb-2">
                    Ce qui t{"'"}attend
                  </h2>
                  <p className="text-[15px] text-gray-400">
                    Ton acc{"è"}s <span className="font-semibold text-gray-600">{tierLabel}</span> inclut
                  </p>
                </div>
                <div className="space-y-2">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white border border-gray-100"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-xl">{f.icon}</span>
                      <span className="text-[15px] text-gray-700 font-medium">{f.text}</span>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-[56px] rounded-2xl bg-[#1A1A2E] text-white text-[17px] font-semibold hover:bg-[#2D2D4E] transition-all"
                >
                  Continuer
                </button>
              </div>
            )}

            {/* ═══ READY ═══ */}
            {step === "ready" && (
              <div className="text-center">
                {/* Animated checkmark circle */}
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #FF1744, #FF5252)" }}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-[36px] font-bold text-[#1A1A2E] tracking-tight mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {name ? `${name}, c'est parti.` : "C'est parti."}
                </motion.h1>

                <motion.p
                  className="text-[17px] text-gray-400 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Ton espace est configur{"é"}.
                  <br />
                  L{"'"}aventure commence maintenant.
                </motion.p>

                <motion.button
                  onClick={finish}
                  disabled={loading}
                  className="mt-12 w-full h-[56px] rounded-2xl text-white text-[17px] font-semibold disabled:opacity-50 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)",
                    boxShadow: "0 8px 32px rgba(255,23,68,0.3)",
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
                      Pr{"é"}paration...
                    </span>
                  ) : (
                    "Découvrir ma plateforme"
                  )}
                </motion.button>
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
        <span className="font-bold tracking-tight">Opex<span className="text-[#FF1744]">IA</span></span>
        <span>Academy</span>
      </motion.div>
    </motion.div>
  );
}
