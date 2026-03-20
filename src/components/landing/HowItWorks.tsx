"use client";

import { motion } from "framer-motion";
import FullJourneyAnimation from "./FullJourneyAnimation";

function IconGraduation() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#FF1744" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#FF1744" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#FF1744" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#FF1744" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "Forme-toi à l'IA",
    desc: "74 leçons, 15 modules, quiz interactifs. Du prompt engineering au déploiement.",
    Icon: IconGraduation,
  },
  {
    num: "02",
    title: "Crée tes projets",
    desc: "Chatbots, sites web, automatisations. Un portfolio complet de services à vendre.",
    Icon: IconCode,
  },
  {
    num: "03",
    title: "Trouve tes clients",
    desc: "Pipeline CRM intégré, scripts de prospection, stratégies testées.",
    Icon: IconUsers,
  },
  {
    num: "04",
    title: "Facture & scale",
    desc: "Modèles de devis, facturation, et stratégies pour scaler ton agence.",
    Icon: IconTrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="pt-16 lg:pt-20 pb-10 lg:pb-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Processus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            De débutant à freelance IA rentable, tout est inclus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: steps list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FF1744]/10 flex items-center justify-center">
                  <step.Icon />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#FF1744]/50 uppercase tracking-wider">
                      Étape {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: unified animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <FullJourneyAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
