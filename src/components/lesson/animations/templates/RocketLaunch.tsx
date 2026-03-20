"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function RocketLaunch({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex items-end gap-4 w-full max-w-[280px]">
        {/* Steps (left side) */}
        <div className="flex-1 flex flex-col-reverse gap-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.08] border border-white/[0.15]"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-xs font-bold text-white/50">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-xs text-white/80 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Rocket */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + items.length * 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="32" height="50" viewBox="0 0 32 50" fill="none" className="text-white/60">
              <path d="M16 2L8 18V36L4 42H28L24 36V18L16 2Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>
          {/* Flame */}
          <motion.div
            className="w-2 h-6 rounded-b-full bg-gradient-to-b from-white/20 to-transparent"
            animate={{ scaleY: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </AnimationContainer>
  );
}
