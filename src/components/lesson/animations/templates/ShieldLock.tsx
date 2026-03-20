"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ShieldLock({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center gap-6">
        {/* Shield */}
        <div className="relative">
          <motion.svg
            width="80" height="90" viewBox="0 0 80 90"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.path
              d="M40 5 L72 20 V50 C72 70 40 85 40 85 C40 85 8 70 8 50 V20 Z"
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {/* Lock icon */}
            <rect x="30" y="38" width="20" height="16" rx="3" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            <path d="M35 38V32A5 5 0 0 1 45 32V38" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          </motion.svg>

          {/* Pulse rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-white/[0.10]"
              style={{ margin: -10 - i * 12 }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </div>

        {/* Items */}
        <div className="flex flex-wrap gap-2 justify-center max-w-[260px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }}
            >
              <p className="text-xs text-white/75 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
