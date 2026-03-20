"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "300M", label: "d'emplois menacés par l'IA d'ici 2030" },
  { value: "4.4T$", label: "de valeur ajoutée par l'IA chaque année" },
  { value: "85%", label: "des métiers de 2030 n'existent pas encore" },
];

const timeline = [
  { year: "2023", event: "ChatGPT explose. Tout le monde en parle.", opacity: "text-white/30" },
  { year: "2024", event: "Les premiers freelances IA facturent 5K\u20ac/mois.", opacity: "text-white/50" },
  { year: "2025", event: "Les entreprises recrutent des agences IA.", opacity: "text-white/70" },
  { year: "2026", event: "Le march\u00e9 se structure. Les retardataires gal\u00e8rent.", opacity: "text-white", highlight: true },
  { year: "2027", event: "Trop tard pour les d\u00e9butants sans m\u00e9thode.", opacity: "text-white/30" },
];

export default function UrgenceIA() {
  return (
    <section className="relative py-14 lg:py-20 bg-white overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-6">
              97% des PME n&apos;ont{" "}
              <span className="text-[#FF1744]">aucun prestataire IA</span>.
              <br />
              <span className="text-gray-500">C&apos;est l&agrave; que tu interviens.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Le march&eacute; de l&apos;IA explose. Les entreprises cherchent <strong className="text-gray-900">des prestataires IA</strong> pour automatiser leurs process — mais il n&apos;y a <strong className="text-gray-900">personne pour r&eacute;pondre</strong>. La demande est l&agrave;, l&apos;offre est vide.
            </p>

            <p className="text-gray-900 font-semibold text-lg mb-10">
              Ceux qui se positionnent <span className="text-[#FF1744]">maintenant</span> raflent le march&eacute;. Les autres <span className="text-[#FF1744]">regarderont</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#FF1744]">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl font-bold text-gray-900 mb-5 text-center">Les secteurs d&apos;activités <span className="text-[#FF1744]">impactés</span> par l&apos;IA</p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-gray-200/80 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <Image
                src="/images/graph2.jpeg"
                alt="Impact de l'IA par secteur d'activité"
                width={500}
                height={500}
                className="w-full"
              />
              <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Source: Rapport IA 2026</span>
                <a
                  href="https://cdn.sanity.io/files/4zrzovbb/website/dc7bcd0224644fce97cecb7f9e68dcd8434b35f1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-[11px] font-medium text-white shadow-[0_2px_0_rgba(0,0,0,0.3)] hover:shadow-[0_1px_0_rgba(0,0,0,0.3)] hover:translate-y-[1px] active:shadow-none active:translate-y-[2px] transition-all"
                >
                  Voir le rapport
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline card — merged from WindowClosing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-[#0A0A0A] p-8 lg:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF1744]/5 rounded-full blur-[100px]" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              La fen&ecirc;tre se ferme.
            </h3>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-[#FF1744]/40 to-white/5" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex items-start gap-5 py-3"
                >
                  <div className="relative z-10 flex-shrink-0 w-[37px] flex justify-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full border-2 ${
                        item.highlight
                          ? "bg-[#FF1744] border-[#FF1744] shadow-[0_0_10px_rgba(255,23,68,0.6)]"
                          : "bg-transparent border-white/20"
                      }`}
                    />
                  </div>
                  <div className="flex-1 -mt-0.5">
                    <span className={`text-[10px] font-mono tracking-wider ${item.highlight ? "text-[#FF1744]" : "text-white/20"}`}>
                      {item.year}
                    </span>
                    <p className={`text-base font-medium leading-snug mt-0.5 ${item.opacity}`}>
                      {item.event}
                    </p>
                  </div>
                  {item.highlight && (
                    <span className="flex-shrink-0 text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/10 border border-[#FF1744]/30 rounded-full px-2.5 py-0.5 mt-0.5">
                      Tu es ici
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF1744] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#D50000] transition-all hover:shadow-xl hover:shadow-red-900/30"
              >
                Prendre ma place
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
