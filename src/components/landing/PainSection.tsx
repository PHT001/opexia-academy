"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "Tu scrolles.", muted: true },
  { text: "Tu testes.", muted: true },
  { text: "Tu regardes des tutos.", muted: true },
  { text: "Mais tu ne factures toujours rien.", muted: false, accent: true },
];

const pains = [
  {
    num: "01",
    statement: "Tu connais 15 outils IA.",
    punchline: "Mais aucun client ne te paye pour.",
  },
  {
    num: "02",
    statement: "Tu passes 4h par jour à apprendre.",
    punchline: "Ton compte en banque ne le sait pas.",
  },
  {
    num: "03",
    statement: "YouTube t'a appris les bases.",
    punchline: "Personne ne t'a appris à vendre.",
  },
  {
    num: "04",
    statement: "La fenêtre se ferme.",
    punchline: "Chaque mois, de nouveaux concurrents entrent.",
  },
];

export default function PainSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Manifesto intro */}
        <div className="mb-20 lg:mb-28">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${
                line.accent
                  ? "text-[#FF1744] mt-4"
                  : line.muted
                  ? "text-white/25"
                  : "text-white"
              }`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Pain points — editorial numbered list */}
        <div className="space-y-0">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-t border-white/[0.06] py-8 lg:py-10 flex gap-6 lg:gap-10 items-baseline"
            >
              <span className="text-[11px] font-mono text-white/15 tracking-widest flex-shrink-0">
                {pain.num}
              </span>
              <div>
                <p className="text-white/90 text-lg lg:text-xl font-medium leading-snug">
                  {pain.statement}
                </p>
                <p className="text-white/30 text-lg lg:text-xl font-medium leading-snug mt-1">
                  {pain.punchline}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
