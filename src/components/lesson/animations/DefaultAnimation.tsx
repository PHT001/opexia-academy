"use client";

import { motion } from "framer-motion";

interface DefaultAnimationProps {
  title?: string;
}

export function DefaultAnimation({ title }: DefaultAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      {/* Pulsing orb */}
      <div className="relative">
        <motion.div
          className="w-24 h-24 rounded-full bg-white/[0.10] border border-white/[0.15]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-white/[0.12] border border-white/[0.20]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.div
          className="absolute inset-5 rounded-full bg-white/[0.15] flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </motion.div>
      </div>

      {/* Title */}
      {title && (
        <motion.p
          className="text-sm text-white/60 text-center max-w-[200px] leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {title}
        </motion.p>
      )}
    </div>
  );
}
