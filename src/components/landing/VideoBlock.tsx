"use client";

import { motion } from "framer-motion";

export default function VideoBlock() {
  return (
    <section className="py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            D&eacute;mo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            D&eacute;couvre la plateforme en action
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            CRM int&eacute;gr&eacute;, assistant IA, g&eacute;n&eacute;rateur de projets, templates — tout ce dont tu as besoin pour lancer ton agence.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/10"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Gradient background placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-20 w-20 lg:h-24 lg:w-24 rounded-full bg-[#FF1744] flex items-center justify-center cursor-pointer shadow-2xl shadow-red-900/50"
            >
              <svg className="h-8 w-8 lg:h-10 lg:w-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Corner label */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
            <span className="text-xs font-medium text-white/80">Vid&eacute;o de pr&eacute;sentation</span>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="text-xs font-medium text-white/80">5:30</span>
          </div>
        </motion.div>

        {/* Sub-features below video */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: "\uD83D\uDCCA", label: "Pipeline CRM" },
            { icon: "\uD83E\uDD16", label: "Assistant IA" },
            { icon: "\uD83D\uDCC4", label: "Templates pro" },
            { icon: "\uD83C\uDFAE", label: "Gamification" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-white/70">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
