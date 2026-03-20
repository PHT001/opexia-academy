"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF1744]/8 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FF1744]/15 border border-[#FF1744]/30 px-5 py-2 text-sm font-medium text-[#FF5252] mb-8">
            <span className="text-base">&#127891;</span> Formation compl&egrave;te &bull; CRM inclus &bull; Acc&egrave;s &agrave; vie
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            Il ne manque que
            <br />
            <span className="text-[#FF1744]">ta d&eacute;cision.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Dans 90 jours, tu te remercieras d&apos;avoir commenc&eacute; aujourd&apos;hui.
            <br />
            Ou tu regarderas toujours les autres r&eacute;ussir.
          </p>

          <div className="mt-10">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#FF1744] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#D50000] hover:shadow-2xl hover:shadow-red-900/40"
            >
              Rejoindre la formation
              <svg
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Garantie remboursement 14 jours &bull; Acc&egrave;s imm&eacute;diat &bull; Paiement s&eacute;curis&eacute; &bull; Payable en plusieurs fois
          </p>
        </motion.div>
      </div>
    </section>
  );
}
