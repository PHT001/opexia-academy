"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

const weeks = [
  {
    num: 1,
    title: "Fondations",
    lessons: "8 le\u00e7ons \u00b7 1 module",
    points: [
      "Comprendre l\u2019IA, les LLMs, APIs et agents",
      "Choisir les bons outils selon chaque cas client",
      "Premiers prompts efficaces",
      "Cr\u00e9er ton premier agent IA",
    ],
    result: "Tu comprends l\u2019IA et tu ma\u00eetrises les fondamentaux",
  },
  {
    num: 2,
    title: "D\u00e9veloppeur IA",
    lessons: "28 le\u00e7ons \u00b7 5 modules",
    points: [
      "Prompt engineering avanc\u00e9 avec Claude",
      "Cr\u00e9er des sites web pro (Next.js + Tailwind)",
      "Design & UI avec Figma",
      "Backend Supabase, APIs, Stripe & paiements",
    ],
    result: "Tu ma\u00eetrises la stack technique compl\u00e8te",
  },
  {
    num: 3,
    title: "Architecte Solutions",
    lessons: "44 le\u00e7ons \u00b7 7 modules",
    points: [
      "Automatisations & workflows avec n8n",
      "Chatbots IA (RAG, multi-canal, WhatsApp)",
      "Agents IA autonomes et Voice AI",
      "Construire un MVP de A \u00e0 Z",
    ],
    result: "Tu cr\u00e9es des solutions IA compl\u00e8tes pour tes clients",
  },
  {
    num: 4,
    title: "S\u00e9curit\u00e9 & Production",
    lessons: "12 le\u00e7ons \u00b7 2 modules",
    points: [
      "S\u00e9curit\u00e9 Supabase & bonnes pratiques (RLS)",
      "DevOps, CI/CD et monitoring",
      "Checklist production et maintenance",
      "D\u00e9ploiement professionnel",
    ],
    result: "Tu d\u00e9ploies des projets solides et s\u00e9curis\u00e9s",
  },
  {
    num: 5,
    title: "Entrepreneur",
    lessons: "26 le\u00e7ons \u00b7 4 modules",
    points: [
      "Cr\u00e9er ton offre irr\u00e9sistible et ton pricing",
      "Prospection : LinkedIn, cold email, closing",
      "Livraison, fid\u00e9lisation et referrals",
      "Juridique, fiscalit\u00e9, RGPD et admin",
    ],
    result: "Tu es pr\u00eat \u00e0 signer et livrer tes premiers clients",
  },
  {
    num: 6,
    title: "Scale & Mastery",
    lessons: "19 le\u00e7ons \u00b7 3 modules",
    points: [
      "Scaler de freelance solo \u00e0 agence rentable",
      "Architecture multi-tenant & white-label",
      "Masterclass Claude Code, Cursor & Antigravity",
      "Atteindre 10K\u20ac/mois et au-del\u00e0",
    ],
    result: "Tu as une agence IA rentable et scalable",
  },
];

export default function Program() {
  return (
    <section className="py-2 lg:py-3 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Programme
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            6 phases pour tout changer
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            91 le\u00e7ons, 22 modules \u2014 du d\u00e9butant complet au freelance IA rentable
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto z-10">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF1744]/20 via-[#FF1744]/40 to-[#FF1744]/20" />

          <div className="space-y-16">
            {weeks.map((week, i) => (
              <motion.div
                key={week.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 lg:pl-20"
              >
                {/* Circle on timeline */}
                <div className="absolute left-3 lg:left-5 top-1 h-7 w-7 rounded-full border-2 border-[#FF1744] bg-white flex items-center justify-center">
                  <span className="text-xs font-bold text-[#FF1744]">
                    {week.num}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold">
                      Phase {week.num}
                    </h3>
                    <span className="text-xs font-medium text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">
                      {week.lessons}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#111] mb-4">
                    {week.title}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {week.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[#6B7280]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF1744]/40 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF1744]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {week.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating robot with printer video */}
      <div className="flex justify-center -mt-8 pb-2">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-56 h-56 lg:w-72 lg:h-72"
        >
          <LazyVideo
            src="/images/imprimante.mp4"
            className="w-full h-full"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 30px 0 35px 6px white, inset -30px 0 35px 6px white, inset 0 35px 40px 8px white, inset 0 -35px 40px 8px white",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 72% 68% at 50% 50%, transparent 30%, white 83%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
