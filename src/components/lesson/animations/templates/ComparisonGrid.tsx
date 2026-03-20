"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ComparisonGrid({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="grid grid-cols-2 gap-3 w-full max-w-[300px]">
        {items.slice(0, 4).map((item, i) => (
          <motion.div
            key={i}
            className="p-3 rounded-xl bg-white/[0.08] border border-white/[0.15] flex flex-col items-center text-center gap-2"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.12] flex items-center justify-center">
              <span className="text-sm">{item.icon || "◆"}</span>
            </div>
            <p className="text-[11px] font-semibold text-white/70 leading-tight">{item.label}</p>
            {item.description && (
              <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </AnimationContainer>
  );
}
