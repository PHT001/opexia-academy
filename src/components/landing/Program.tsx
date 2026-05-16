"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

const weeks = [
  {
    num: 1,
    title: "Le Cadre",
    lessons: "7 leçons · 2 modules",
    points: [
      "Comprendre l'IA, les LLMs et le marché",
      "Découvrir ChatGPT, Claude, Gemini",
      "Définir ta roadmap personnelle",
      "Poser les fondations de ton agence",
    ],
    result: "Tu comprends l'IA et tu as une vision claire",
  },
  {
    num: 2,
    title: "Tes Outils de Travail",
    lessons: "11 leçons · 3 modules",
    points: [
      "Prompt engineering avancé avec Claude",
      "Maîtriser les IDE IA : Claude Code & Cursor",
      "Git, GitHub et le workflow développeur",
      "Premiers projets concrets",
    ],
    result: "Tu maîtrises les outils du développeur IA",
  },
  {
    num: 3,
    title: "Construire un Site Web",
    lessons: "9 leçons · 2 modules",
    points: [
      "Frontend moderne avec Next.js + Tailwind",
      "Backend Supabase, SQL et API Routes",
      "Intégrer Stripe et les paiements",
      "Déployer sur Vercel comme un pro",
    ],
    result: "Tu crées des sites web complets et déployés",
  },
  {
    num: 4,
    title: "Les Services à Vendre",
    lessons: "19 leçons · 5 modules",
    points: [
      "Chatbots IA (RAG, multi-canal, WhatsApp)",
      "Agents vocaux IA avec ElevenLabs",
      "Automatisations IA pour entreprises",
      "Scraping, leads et traitement de documents",
    ],
    result: "Tu crées des solutions IA complètes pour tes clients",
  },
  {
    num: 5,
    title: "Industrialiser",
    lessons: "13 leçons · 3 modules",
    points: [
      "Construire un MVP complet en 48h",
      "Sécurité Supabase & bonnes pratiques (RLS)",
      "DevOps, CI/CD et monitoring",
      "Checklist production et déploiement pro",
    ],
    result: "Tu déploies des projets solides et sécurisés",
  },
  {
    num: 6,
    title: "Vendre",
    lessons: "19 leçons · 5 modules",
    points: [
      "Créer ton offre irrésistible et ton pricing",
      "Prospection : LinkedIn, cold email, closing",
      "L'appel de closing et signature du deal",
      "Livraison, fidélisation et referrals",
    ],
    result: "Tu es prêt à signer et livrer tes premiers clients",
  },
  {
    num: 7,
    title: "Scaler",
    lessons: "7 leçons · 2 modules",
    points: [
      "Juridique, contrats, RGPD et facturation",
      "Passer de freelance solo à agence rentable",
      "Architecture multi-tenant & white-label",
      "Atteindre 10K€/mois et au-delà",
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
          <span className="text-sm font-semibold text-[#06B6D4] uppercase tracking-wider">
            Programme
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            7 phases pour tout changer
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            86 leçons, 22 modules — du débutant complet au freelance IA rentable
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto z-10">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#06B6D4]/20 via-[#06B6D4]/40 to-[#06B6D4]/20" />

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
                <div className="absolute left-3 lg:left-5 top-1 h-7 w-7 rounded-full border-2 border-[#06B6D4] bg-white flex items-center justify-center">
                  <span className="text-xs font-bold text-[#06B6D4]">
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
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#06B6D4]/40 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4]">
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
