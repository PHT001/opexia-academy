"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function TimelineAnimation({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="relative w-full max-w-[280px]">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[18px] top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 mb-6 last:mb-0"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-white/[0.12] border border-white/[0.20] flex items-center justify-center">
              <span className="text-xs text-white/80">{item.icon || "•"}</span>
            </div>

            {/* Content */}
            <div className="pt-1.5">
              <p className="text-xs font-bold text-white/70">{item.label}</p>
              {item.description && (
                <p className="text-xs text-white/60 mt-0.5 leading-relaxed">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimationContainer>
  );
}
