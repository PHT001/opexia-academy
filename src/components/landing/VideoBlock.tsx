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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#111]" />

          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <p className="text-white/60 text-lg font-medium">
              Vid&eacute;o bient&ocirc;t disponible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
