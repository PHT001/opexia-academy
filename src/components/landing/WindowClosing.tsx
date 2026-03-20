"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2023", event: "ChatGPT explose. Tout le monde en parle.", opacity: "text-white/30" },
  { year: "2024", event: "Les premiers freelances IA facturent 5K\u20ac/mois.", opacity: "text-white/50" },
  { year: "2025", event: "Les entreprises recrutent des agences IA.", opacity: "text-white/70" },
  { year: "2026", event: "Le march\u00e9 se structure. Les retardataires galèrent.", opacity: "text-white", highlight: true },
  { year: "2027", event: "Trop tard pour les d\u00e9butants sans m\u00e9thode.", opacity: "text-white/30" },
];

export default function WindowClosing() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF1744]/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            La fen&ecirc;tre se ferme.
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Chaque mois qui passe, le march&eacute; devient plus comp&eacute;titif.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-[#FF1744]/40 to-white/5" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6 py-5"
              >
                {/* Dot */}
                <div className={`relative z-10 flex-shrink-0 w-[45px] flex justify-center`}>
                  <div
                    className={`h-3 w-3 rounded-full border-2 ${
                      item.highlight
                        ? "bg-[#FF1744] border-[#FF1744] shadow-[0_0_12px_rgba(255,23,68,0.6)]"
                        : "bg-transparent border-white/20"
                    }`}
                  />
                </div>

                <div className="flex-1 -mt-1">
                  <span
                    className={`text-xs font-mono tracking-wider ${
                      item.highlight ? "text-[#FF1744]" : "text-white/20"
                    }`}
                  >
                    {item.year}
                  </span>
                  <p className={`text-lg font-medium leading-snug mt-0.5 ${item.opacity}`}>
                    {item.event}
                  </p>
                </div>

                {item.highlight && (
                  <span className="flex-shrink-0 text-xs font-bold text-[#FF1744] bg-[#FF1744]/10 border border-[#FF1744]/30 rounded-full px-3 py-1 mt-0.5">
                    Tu es ici
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-white/50 text-lg mb-6">
            Ceux qui agissent <strong className="text-white">maintenant</strong> prennent l&rsquo;avance.
            <br />
            Les autres regarderont.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF1744] px-8 py-4 text-base font-semibold text-white hover:bg-[#D50000] transition-all hover:shadow-xl hover:shadow-red-900/30"
          >
            Prendre ma place
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
