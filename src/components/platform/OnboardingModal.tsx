"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const STORAGE_KEY_DONE = "opexia-onboarding-done";
const STORAGE_KEY_GOAL = "opexia-goal";

const goals = [
  "Lancer mon agence IA",
  "Apprendre les outils IA",
  "G\u00e9n\u00e9rer des revenus avec l\u2019IA",
] as const;

const features = [
  { icon: "\uD83D\uDCDA", label: "Le\u00e7ons" },
  { icon: "\u2705", label: "Quiz" },
  { icon: "\uD83C\uDFC6", label: "Certificats" },
] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

export default function OnboardingModal() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const totalSteps = 3;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const done = localStorage.getItem(STORAGE_KEY_DONE);
    if (!done) setVisible(true);
  }, []);

  function next() {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }

  function finish() {
    if (selectedGoal) {
      localStorage.setItem(STORAGE_KEY_GOAL, selectedGoal);
    }
    localStorage.setItem(STORAGE_KEY_DONE, "true");
    setVisible(false);
  }

  if (!visible) return null;

  const isLast = step === totalSteps - 1;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="relative min-h-[280px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <motion.div
                key="step-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 text-5xl">&#x1F680;</div>
                <h2 className="text-2xl font-bold text-[#111]">
                  Bienvenue sur OpexIA Academy&nbsp;!
                </h2>
                <p className="mt-4 text-[#111]/70 leading-relaxed">
                  Tu es sur le point de lancer ton agence IA. Voici comment
                  tirer le meilleur de ta formation.
                </p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <h2 className="text-2xl font-bold text-[#111]">
                  Comment &ccedil;a marche
                </h2>
                <p className="mt-4 text-[#111]/70 leading-relaxed">
                  Suis les modules dans l&rsquo;ordre, compl&egrave;te les quiz
                  pour gagner de l&rsquo;XP, et d&eacute;bloque tes
                  certificats.
                </p>
                <div className="mt-8 flex gap-8">
                  {features.map((f) => (
                    <div key={f.label} className="flex flex-col items-center gap-2">
                      <span className="text-4xl">{f.icon}</span>
                      <span className="text-sm font-medium text-[#111]">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                <h2 className="text-2xl font-bold text-[#111]">
                  Ton objectif
                </h2>
                <p className="mt-4 text-[#111]/70 leading-relaxed">
                  Qu&rsquo;est-ce qui t&rsquo;am&egrave;ne ici&nbsp;?
                </p>
                <div className="mt-6 flex w-full flex-col gap-3">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className={cn(
                        "w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                        selectedGoal === goal
                          ? "border-[#FF1744] bg-[#FF1744]/5 text-[#FF1744]"
                          : "border-gray-200 text-[#111] hover:border-[#FF1744]/40"
                      )}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === step ? "w-6 bg-[#FF1744]" : "w-2 bg-gray-300"
              )}
            />
          ))}
        </div>

        {/* Action button */}
        <div className="mt-6 flex justify-center">
          {isLast ? (
            <button
              onClick={finish}
              disabled={!selectedGoal}
              className={cn(
                "rounded-xl px-8 py-3 text-sm font-semibold text-white transition-all",
                selectedGoal
                  ? "bg-[#FF1744] hover:bg-[#FF1744]/90 shadow-lg shadow-[#FF1744]/25"
                  : "bg-gray-300 cursor-not-allowed"
              )}
            >
              Commencer
            </button>
          ) : (
            <button
              onClick={next}
              className="rounded-xl bg-[#FF1744] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF1744]/25 transition-all hover:bg-[#FF1744]/90"
            >
              Suivant
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
