"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

const weeks = [
  {
    num: 1,
    title: "Fondations IA & Stack Technique",
    lessons: "7 le\u00e7ons",
    points: [
      "Comprendre l\u2019\u00e9cosyst\u00e8me : LLMs, APIs, agents, prompting avanc\u00e9",
      "Choisir les bons outils selon chaque cas client",
      "Premiers prompts efficaces",
      "Cas d\u2019usage pour entreprises locales",
    ],
    result: "Tu comprends l\u2019IA et tu ma\u00eetrises les fondamentaux",
  },
  {
    num: 2,
    title: "Construire des Infrastructures IA",
    lessons: "7 le\u00e7ons",
    points: [
      "Techniques avanc\u00e9es de prompt engineering",
      "Cr\u00e9er des workflows complexes et agents autonomes",
      "Automatiser des processus business complets",
      "Optimiser la qualit\u00e9 des outputs",
    ],
    result: "Tu cr\u00e9es des syst\u00e8mes IA qui produisent des r\u00e9sultats pro",
  },
  {
    num: 3,
    title: "D\u00e9finir & Packager ton Offre",
    lessons: "8 le\u00e7ons",
    points: [
      "Trouver ta niche et cr\u00e9er des offres productis\u00e9es",
      "Cr\u00e9er tes premiers projets clients",
      "D\u00e9ployer des chatbots et sites web",
      "Int\u00e9grer les APIs et automatisations",
    ],
    result: "Tu as un portfolio de projets pr\u00eats \u00e0 vendre",
  },
  {
    num: 4,
    title: "Trouver tes Clients & Scaler",
    lessons: "6 le\u00e7ons",
    points: [
      "Scripts de prospection test\u00e9s",
      "Strat\u00e9gies de prospection client",
      "Pricing et n\u00e9gociation",
      "Scaler ton agence IA",
    ],
    result: "Tu es pr\u00eat \u00e0 signer tes premiers clients",
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
            4 semaines pour tout changer
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            86 leçons, 15 modules — du débutant complet au freelance IA rentable
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
                      Semaine {week.num}
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
