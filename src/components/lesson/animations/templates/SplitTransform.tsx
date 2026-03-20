"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function SplitTransform({ items, title, subtitle }: AnimationTemplateProps) {
  const before = items.filter((_, i) => i % 2 === 0);
  const after = items.filter((_, i) => i % 2 === 1);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex items-center gap-4 w-full max-w-[300px]">
        {/* Before */}
        <motion.div
          className="flex-1 p-3 rounded-xl bg-white/[0.05] border border-white/[0.12]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Avant</p>
          {before.map((item, i) => (
            <motion.p
              key={i}
              className="text-xs text-white/70 mb-1 last:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.3 }}
            >
              {item.label}
            </motion.p>
          ))}
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>

        {/* After */}
        <motion.div
          className="flex-1 p-3 rounded-xl bg-white/[0.10] border border-white/[0.20]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Apres</p>
          {after.map((item, i) => (
            <motion.p
              key={i}
              className="text-xs text-white/80 mb-1 last:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.15, duration: 0.3 }}
            >
              {item.label}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </AnimationContainer>
  );
}
