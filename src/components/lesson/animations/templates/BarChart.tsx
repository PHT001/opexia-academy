"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function BarChart({ items, title, subtitle }: AnimationTemplateProps) {
  const maxValue = Math.max(...items.map((i) => i.value || 1), 1);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[280px]">
        {/* Bars */}
        <div className="flex items-end gap-3 h-[160px] px-2">
          {items.map((item, i) => {
            const height = ((item.value || 1) / maxValue) * 130;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                {/* Value */}
                <motion.span
                  className="text-xs font-bold text-white/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                >
                  {item.value}
                </motion.span>

                {/* Bar */}
                <motion.div
                  className="w-full rounded-t-lg bg-white/[0.15] border border-white/[0.20] border-b-0"
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                />
              </div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className="flex gap-3 px-2 mt-2 border-t border-white/[0.12] pt-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex-1 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
            >
              <span className="text-xs text-white/65">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
