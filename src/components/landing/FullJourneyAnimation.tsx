"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase =
  | "formation-start"
  | "formation-progress"
  | "formation-done"
  | "project-build"
  | "project-services"
  | "project-done"
  | "crm-pipeline"
  | "crm-prospect"
  | "crm-reply"
  | "invoice-show"
  | "invoice-items"
  | "invoice-paid";

const PHASE_SEQUENCE: { phase: Phase; duration: number }[] = [
  { phase: "formation-start", duration: 1800 },
  { phase: "formation-progress", duration: 2200 },
  { phase: "formation-done", duration: 1500 },
  { phase: "project-build", duration: 1800 },
  { phase: "project-services", duration: 2000 },
  { phase: "project-done", duration: 1500 },
  { phase: "crm-pipeline", duration: 1800 },
  { phase: "crm-prospect", duration: 2200 },
  { phase: "crm-reply", duration: 2000 },
  { phase: "invoice-show", duration: 1800 },
  { phase: "invoice-items", duration: 2000 },
  { phase: "invoice-paid", duration: 2500 },
];

const stepLabels = [
  { label: "Formation", icon: "📚" },
  { label: "Projet", icon: "🛠️" },
  { label: "Client", icon: "🤝" },
  { label: "Facture", icon: "💰" },
];

function getActiveStep(phase: Phase): number {
  if (phase.startsWith("formation")) return 0;
  if (phase.startsWith("project")) return 1;
  if (phase.startsWith("crm")) return 2;
  return 3;
}

export default function FullJourneyAnimation() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phase = PHASE_SEQUENCE[phaseIndex].phase;
  const activeStep = getActiveStep(phase);

  const advance = useCallback(() => {
    setPhaseIndex((prev) => (prev + 1) % PHASE_SEQUENCE.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(advance, PHASE_SEQUENCE[phaseIndex].duration);
    return () => clearTimeout(timer);
  }, [phaseIndex, advance]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 text-center border border-gray-100">
              app.opexia.com
            </div>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-b border-gray-100">
          {stepLabels.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: i === activeStep ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors duration-300 ${
                    i === activeStep
                      ? "bg-[#FF1744] text-white shadow-md shadow-red-200"
                      : i < activeStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i < activeStep ? "✓" : i + 1}
                </motion.div>
                <span className={`text-[11px] font-semibold hidden sm:inline transition-colors duration-300 ${
                  i === activeStep
                    ? "text-gray-900"
                    : i < activeStep
                    ? "text-green-600"
                    : "text-gray-400"
                }`}>
                  {s.label}
                </span>
              </div>
              {i < 3 && (
                <div className="flex-1 mx-2">
                  <div className="h-[2px] rounded-full bg-gray-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-green-400 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: i < activeStep ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="relative h-[340px] overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            {/* ── PHASE 1: FORMATION ── */}
            {activeStep === 0 && (
              <motion.div
                key="formation"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF1744]/10 flex items-center justify-center text-sm">📚</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Module 3 — Prompt Engineering</p>
                    <p className="text-[10px] text-gray-400">Leçon 12/15</p>
                  </div>
                </div>

                {/* Lesson content */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-800 mb-1">Le rôle dans un prompt</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Le rôle définit le comportement de l&apos;IA. Ex : &quot;Tu es un expert comptable avec 20 ans d&apos;expérience...&quot;
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-[11px] font-semibold text-gray-800 mb-1">Le contexte</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Le contexte donne les informations nécessaires pour une réponse précise et pertinente.
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-medium text-gray-500">Progression du module</span>
                    <motion.span
                      className="text-[10px] font-bold text-[#FF1744]"
                      key={phase}
                    >
                      {phase === "formation-start" ? "65%" : phase === "formation-progress" ? "88%" : "100%"}
                    </motion.span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#FF5252]"
                      initial={{ width: "65%" }}
                      animate={{
                        width: phase === "formation-start" ? "65%" : phase === "formation-progress" ? "88%" : "100%",
                      }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Completion badge */}
                <AnimatePresence>
                  {phase === "formation-done" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
                    >
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-[11px] font-semibold text-green-700">Formation complétée !</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── PHASE 2: PROJECT BUILD ── */}
            {activeStep === 1 && (
              <motion.div
                key="project"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4"
              >
                {/* Mini website preview */}
                <div className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
                  {/* Navbar */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center justify-between px-3 py-2 bg-[#111] text-white"
                  >
                    <span className="text-[10px] font-bold">⚡ MonAgenceIA</span>
                    <div className="flex gap-2 text-[8px] text-gray-400">
                      <span>Services</span>
                      <span>Tarifs</span>
                      <span className="bg-[#FF1744] text-white px-2 py-0.5 rounded text-[7px]">Devis</span>
                    </div>
                  </motion.div>

                  {/* Hero */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-4"
                  >
                    <p className="text-[11px] font-bold text-white leading-tight">Boostez votre business<br />avec l&apos;IA</p>
                    <p className="text-[8px] text-gray-400 mt-1">Solutions sur mesure pour PME</p>
                  </motion.div>

                  {/* Service cards */}
                  <div className="grid grid-cols-3 gap-2 p-3">
                    {["Chatbot IA", "Emails auto", "CRM IA"].map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: phase === "project-build" && i > 0 ? 0 : 1,
                          scale: phase === "project-build" && i > 0 ? 0.8 : 1,
                        }}
                        transition={{ delay: 0.3 + i * 0.3, duration: 0.4 }}
                        className="bg-gray-50 rounded-md p-2 text-center border border-gray-100"
                      >
                        <div className="text-sm mb-0.5">{["💬", "📧", "📊"][i]}</div>
                        <p className="text-[8px] font-semibold text-gray-700">{s}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Build progress */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <motion.span
                      className="text-[10px] font-medium text-gray-600"
                      key={phase}
                    >
                      {phase === "project-build"
                        ? "Création du site..."
                        : phase === "project-services"
                        ? "Ajout des services IA..."
                        : "Projet prêt !"}
                    </motion.span>
                    <motion.span className={`text-[10px] font-bold ${phase === "project-done" ? "text-green-600" : "text-[#FF1744]"}`}>
                      {phase === "project-build" ? "33%" : phase === "project-services" ? "66%" : "100%"}
                    </motion.span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        phase === "project-done" ? "bg-green-500" : "bg-gradient-to-r from-[#FF1744] to-[#FF5252]"
                      }`}
                      animate={{
                        width: phase === "project-build" ? "33%" : phase === "project-services" ? "66%" : "100%",
                      }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {phase === "project-done" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-2 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
                    >
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-[11px] font-semibold text-green-700">Premier projet livré !</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── PHASE 3: CRM ── */}
            {activeStep === 2 && (
              <motion.div
                key="crm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-gray-900">Pipeline commercial</p>
                  <span className="text-[9px] text-gray-400">Mars 2026</span>
                </div>

                {/* Pipeline stages */}
                <div className="grid grid-cols-4 gap-1.5 mb-4">
                  {[
                    { label: "Prospects", count: 8, color: "bg-blue-100 text-blue-700" },
                    { label: "Contact", count: 3, color: "bg-yellow-100 text-yellow-700" },
                    { label: "Devis", count: 2, color: "bg-orange-100 text-orange-700" },
                    { label: "Gagné", count: phase === "crm-reply" ? 2 : 1, color: "bg-green-100 text-green-700" },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-md px-2 py-1.5 text-center ${s.color}`}>
                      <p className="text-[8px] font-medium">{s.label}</p>
                      <p className="text-sm font-bold">{s.count}</p>
                    </div>
                  ))}
                </div>

                {/* Leads list */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-800">Boulangerie Martin</p>
                      <p className="text-[8px] text-gray-400">Chatbot IA</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-700">1 200€</span>
                  </div>

                  {/* New prospect appears */}
                  <AnimatePresence>
                    {(phase === "crm-prospect" || phase === "crm-reply") && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 border border-blue-200"
                      >
                        <div>
                          <p className="text-[10px] font-semibold text-gray-800">Restaurant Le Petit Chef</p>
                          <p className="text-[8px] text-blue-500 font-medium">
                            {phase === "crm-prospect" ? "📩 Message envoyé" : "✅ Intéressé — RDV pris"}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-blue-700">4 500€</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-800">Garage Auto Plus</p>
                      <p className="text-[8px] text-gray-400">Email automation</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-700">2 800€</span>
                  </div>
                </div>

                {/* Reply notification */}
                <AnimatePresence>
                  {phase === "crm-reply" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
                    >
                      <span className="text-green-500 text-sm">🤝</span>
                      <span className="text-[11px] font-semibold text-green-700">Client trouvé — RDV confirmé !</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── PHASE 4: INVOICE ── */}
            {activeStep === 3 && (
              <motion.div
                key="invoice"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-gray-900">Facture #001</p>
                  <span className="text-[9px] text-gray-400">Restaurant Le Petit Chef</span>
                </div>

                {/* Invoice items */}
                <div className="rounded-lg border border-gray-200 overflow-hidden mb-3">
                  <div className="grid grid-cols-[1fr,auto] gap-2 px-3 py-1.5 bg-gray-50 border-b border-gray-100 text-[8px] font-semibold text-gray-500 uppercase">
                    <span>Service</span>
                    <span>Montant</span>
                  </div>
                  {[
                    { name: "Chatbot IA sur mesure", amount: "2 000€" },
                    { name: "Site web vitrine", amount: "1 500€" },
                    { name: "Automatisation emails", amount: "1 000€" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: phase === "invoice-show" && i > 0 ? 0 : 1,
                        x: 0,
                      }}
                      transition={{ delay: i * 0.3, duration: 0.4 }}
                      className="grid grid-cols-[1fr,auto] gap-2 px-3 py-2 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-[10px] text-gray-700">{item.name}</span>
                      <span className="text-[10px] font-semibold text-gray-900">{item.amount}</span>
                    </motion.div>
                  ))}
                  <div className="grid grid-cols-[1fr,auto] gap-2 px-3 py-2 bg-gray-50 border-t border-gray-200">
                    <span className="text-[11px] font-bold text-gray-900">Total</span>
                    <span className="text-[11px] font-bold text-gray-900">4 500€</span>
                  </div>
                </div>

                {/* Paid badge */}
                <AnimatePresence>
                  {phase === "invoice-paid" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="mb-3 flex items-center justify-center gap-2 bg-green-50 border-2 border-green-300 rounded-xl px-4 py-3"
                    >
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-sm font-bold text-green-700">Payé — 4 500€ encaissés</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Premier mois", value: "4 500€", icon: "💰" },
                    { label: "Conversion", value: "33%", icon: "📈" },
                    { label: "Clients actifs", value: "2", icon: "👥" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                      <p className="text-sm mb-0.5">{stat.icon}</p>
                      <p className="text-[11px] font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[8px] text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
