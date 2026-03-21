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
          <p className="mt-3 text-sm text-[#6B7280]">
            2 minutes pour comprendre comment nos &eacute;l&egrave;ves g&eacute;n&egrave;rent leurs premiers revenus
          </p>
        </motion.div>

        {/* Video placeholder — replace with real video when ready */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl cursor-pointer group"
          style={{ aspectRatio: "16/9" }}
        >
          {/* TODO: Replace with real video embed */}
          {/* <video src="/videos/vsl.mp4" controls className="w-full h-full object-cover" /> */}

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#111]" />

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-[#FF1744] flex items-center justify-center shadow-2xl shadow-red-900/50 group-hover:scale-110 transition-transform">
              <svg className="h-7 w-7 lg:h-8 lg:w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white">T</div>
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white">S</div>
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white">M</div>
              </div>
              <p className="text-white/50 text-sm font-medium">
                +150 &eacute;l&egrave;ves ont d&eacute;j&agrave; regard&eacute; cette vid&eacute;o
              </p>
            </div>
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
