"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  userName?: string;
  onComplete: () => void;
}

const STEPS = ["welcome", "name", "contact", "profile", "ready"] as const;
type Step = (typeof STEPS)[number];

export default function PostPurchaseOnboarding({ userName, onComplete }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("welcome");
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(userName || "");
  const [phone, setPhone] = useState("");
  const [discord, setDiscord] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const currentIndex = STEPS.indexOf(step);
  const progress = ((currentIndex) / (STEPS.length - 1)) * 100;

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
        body: JSON.stringify({ name, phone, discordUsername: discord, age, profession }),
      });
      onComplete();
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF1744] to-[#FF5252]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Back button */}
      {currentIndex > 0 && step !== "ready" && (
        <button
          onClick={back}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Step dots */}
      <div className="absolute top-6 flex gap-2">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i <= currentIndex ? "bg-[#FF1744] scale-100" : "bg-gray-200 scale-75"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-md px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {step === "welcome" && (
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-6"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  🎉
                </motion.div>
                <h1 className="text-3xl font-bold text-[#1A1A2E] mb-3">
                  Bienvenue{name ? `, ${name}` : ""} !
                </h1>
                <p className="text-gray-500 text-base leading-relaxed">
                  Ton aventure commence maintenant.<br />
                  On a juste besoin de quelques infos pour personnaliser ton exp&eacute;rience.
                </p>
                <button
                  onClick={next}
                  className="mt-10 w-full h-14 rounded-2xl bg-[#1A1A2E] text-white text-base font-semibold hover:bg-[#2A2A40] transition-all shadow-lg"
                >
                  C&apos;est parti
                </button>
              </div>
            )}

            {step === "name" && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center">
                  Comment on t&apos;appelle ?
                </h2>
                <p className="text-gray-400 text-sm text-center mb-8">
                  Pour qu&apos;on puisse te tutoyer correctement
                </p>
                <input
                  type="text"
                  placeholder="Ton pr&eacute;nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  className="w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-gray-100 text-[#1A1A2E] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                />
                <button
                  onClick={next}
                  disabled={!name.trim()}
                  className="mt-8 w-full h-14 rounded-2xl bg-[#1A1A2E] text-white text-base font-semibold hover:bg-[#2A2A40] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  Continuer
                </button>
              </div>
            )}

            {step === "contact" && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center">
                  Tes coordonn&eacute;es
                </h2>
                <p className="text-gray-400 text-sm text-center mb-8">
                  Pour faciliter le contact et la communaut&eacute;
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">T&eacute;l&eacute;phone</label>
                    <input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-gray-100 text-[#1A1A2E] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Discord</label>
                    <input
                      type="text"
                      placeholder="tonpseudo"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-gray-100 text-[#1A1A2E] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-14 rounded-2xl bg-[#1A1A2E] text-white text-base font-semibold hover:bg-[#2A2A40] transition-all shadow-lg"
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-sm text-gray-400 hover:text-gray-500 transition-colors">
                  Passer cette &eacute;tape
                </button>
              </div>
            )}

            {step === "profile" && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center">
                  Parle-nous de toi
                </h2>
                <p className="text-gray-400 text-sm text-center mb-8">
                  Pour adapter la formation &agrave; ton profil
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">&Acirc;ge</label>
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-gray-100 text-[#1A1A2E] text-lg focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all appearance-none"
                    >
                      <option value="">S&eacute;lectionner</option>
                      <option value="16-20">16 - 20 ans</option>
                      <option value="21-25">21 - 25 ans</option>
                      <option value="26-30">26 - 30 ans</option>
                      <option value="31-35">31 - 35 ans</option>
                      <option value="36-40">36 - 40 ans</option>
                      <option value="41+">41 ans et +</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Profession / &Eacute;tudes</label>
                    <input
                      type="text"
                      placeholder="Ex: &Eacute;tudiant, D&eacute;veloppeur, Freelance..."
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border-2 border-gray-100 text-[#1A1A2E] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <button
                  onClick={next}
                  className="mt-8 w-full h-14 rounded-2xl bg-[#1A1A2E] text-white text-base font-semibold hover:bg-[#2A2A40] transition-all shadow-lg"
                >
                  Continuer
                </button>
                <button onClick={next} className="mt-3 w-full text-sm text-gray-400 hover:text-gray-500 transition-colors">
                  Passer cette &eacute;tape
                </button>
              </div>
            )}

            {step === "ready" && (
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF1744] to-[#FF5252] flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </motion.div>
                <h1 className="text-3xl font-bold text-[#1A1A2E] mb-3">
                  Tout est pr&ecirc;t !
                </h1>
                <p className="text-gray-500 text-base leading-relaxed mb-2">
                  Ton espace de formation est configur&eacute;.
                </p>
                <p className="text-gray-400 text-sm">
                  Commence ta premi&egrave;re le&ccedil;on d&egrave;s maintenant.
                </p>
                <button
                  onClick={finish}
                  disabled={loading}
                  className="mt-10 w-full h-14 rounded-2xl text-white text-base font-semibold transition-all shadow-lg disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)",
                    boxShadow: "0 4px 20px rgba(255,23,68,0.35)",
                  }}
                >
                  {loading ? "Chargement..." : "Acc\u00e9der \u00e0 ma formation"}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
