"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const buildSteps = [
  { label: "Création du site...", progress: 25 },
  { label: "Ajout des services...", progress: 50 },
  { label: "Intégration du chatbot IA...", progress: 75 },
  { label: "Projet prêt !", progress: 100 },
];

const services = [
  { icon: "💬", title: "Chatbot IA", desc: "Support client 24/7" },
  { icon: "📧", title: "Email auto", desc: "Réponses automatiques" },
  { icon: "📊", title: "Analyse IA", desc: "Rapports intelligents" },
];

export default function ProjectBuilderAnimation() {
  const [step, setStep] = useState(-1);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(-1);
    const timeouts: NodeJS.Timeout[] = [];

    buildSteps.forEach((_, i) => {
      const t = setTimeout(() => setStep(i), 800 + i * 1800);
      timeouts.push(t);
    });

    const restart = setTimeout(
      () => setCycle((c) => c + 1),
      800 + buildSteps.length * 1800 + 3000
    );
    timeouts.push(restart);

    return () => timeouts.forEach(clearTimeout);
  }, [cycle]);

  const currentProgress = step >= 0 ? buildSteps[step].progress : 0;
  const currentLabel = step >= 0 ? buildSteps[step].label : "";

  return (
    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden h-full flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 border border-gray-200 truncate">
            mon-agence-ia.com
          </div>
        </div>
      </div>

      {/* Website preview */}
      <div className="flex-1 p-3 bg-[#FAFBFC] min-h-[300px] relative overflow-hidden">
        {/* Navbar */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-gray-100 shadow-sm mb-2.5"
            >
              <span className="text-[10px] font-bold text-gray-800">
                ⚡ AgenceIA
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[8px] text-gray-400">Services</span>
                <span className="text-[8px] text-gray-400">Tarifs</span>
                <span className="text-[8px] text-gray-400">Contact</span>
                <div className="h-4 px-2 rounded bg-[#FF1744] flex items-center">
                  <span className="text-[7px] text-white font-medium">
                    Devis gratuit
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero section */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
                delay: 0.2,
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 mb-2.5 text-white"
            >
              <div className="text-[11px] font-bold leading-tight mb-1">
                Boostez votre business
                <br />
                avec l&apos;Intelligence Artificielle
              </div>
              <div className="text-[8px] text-gray-300 mb-2.5">
                Chatbots, automatisations et solutions IA sur mesure
              </div>
              <div className="flex gap-1.5">
                <div className="h-5 px-2.5 rounded-md bg-[#FF1744] flex items-center">
                  <span className="text-[7px] font-medium">Prendre RDV</span>
                </div>
                <div className="h-5 px-2.5 rounded-md border border-gray-500 flex items-center">
                  <span className="text-[7px] text-gray-300">Nos services</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Service cards */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="grid grid-cols-3 gap-1.5 mb-2.5"
            >
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm p-2 text-center"
                >
                  <div className="text-base mb-1">{svc.icon}</div>
                  <div className="text-[8px] font-semibold text-gray-800 mb-0.5">
                    {svc.title}
                  </div>
                  <div className="text-[7px] text-gray-400">{svc.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonial / social proof */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg border border-gray-100 shadow-sm px-3 py-2 flex items-center gap-2"
            >
              <div className="flex -space-x-1.5">
                <div className="h-4 w-4 rounded-full bg-blue-200 border border-white" />
                <div className="h-4 w-4 rounded-full bg-green-200 border border-white" />
                <div className="h-4 w-4 rounded-full bg-purple-200 border border-white" />
              </div>
              <div>
                <span className="text-[7px] text-gray-500">
                  ⭐⭐⭐⭐⭐ &quot;Excellent service, notre chatbot a doublé nos leads !&quot;
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbot widget */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-3 right-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 shadow-lg p-2.5 w-36 mb-2"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="h-4 w-4 rounded-full bg-[#FF1744] flex items-center justify-center">
                    <span className="text-[6px] text-white font-bold">IA</span>
                  </div>
                  <span className="text-[8px] font-semibold text-gray-700">
                    Assistant
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 ml-auto" />
                </div>
                <div className="space-y-1">
                  <div className="bg-gray-50 rounded-md px-2 py-1">
                    <span className="text-[7px] text-gray-600">
                      Bonjour ! Comment puis-je vous aider ?
                    </span>
                  </div>
                  {step >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#FF1744]/10 rounded-md px-2 py-1 ml-auto w-fit"
                    >
                      <span className="text-[7px] text-[#FF1744]">
                        Je veux un devis
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <div className="bg-[#FF1744] rounded-full h-8 w-8 flex items-center justify-center shadow-lg ml-auto">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom progress bar */}
      <div className="px-4 py-3 border-t border-gray-100 bg-white">
        <div className="flex items-center justify-between mb-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentLabel}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className={`text-[12px] font-medium ${
                step === 3 ? "text-green-600" : "text-gray-600"
              }`}
            >
              {currentLabel}
            </motion.span>
          </AnimatePresence>
          <span
            className={`text-[11px] font-semibold ${
              step === 3 ? "text-green-600" : "text-[#FF1744]"
            }`}
          >
            {currentProgress}%
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${
              step === 3 ? "bg-green-500" : "bg-[#FF1744]"
            }`}
            initial={{ width: "0%" }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
