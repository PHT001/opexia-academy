"use client";

import { motion } from "framer-motion";

export default function VideoBlock() {
  return (
    <section className="py-10 lg:py-14 bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-[#FF1744]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1744] animate-pulse" />
            Vid&eacute;o de pr&eacute;sentation
          </span>
        </motion.div>

        {/* Video placeholder — replace src with real video when ready */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          {/* TODO: Replace with real video embed */}
          {/* <video src="/videos/vsl.mp4" controls className="w-full h-full object-cover" /> */}

          {/* Gradient background placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-[#FF1744] flex items-center justify-center cursor-pointer shadow-2xl shadow-red-900/50"
            >
              <svg className="h-7 w-7 lg:h-8 lg:w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
            <p className="text-white/60 text-sm font-medium">
              Regarde comment nos &eacute;l&egrave;ves g&eacute;n&egrave;rent leurs premiers revenus
            </p>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="text-xs font-medium text-white/80">2:30</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
