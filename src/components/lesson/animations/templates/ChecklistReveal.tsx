"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ChecklistReveal({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[260px] space-y-2.5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.12]"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.4, ease: "easeOut" }}
          >
            {/* Checkbox */}
            <motion.div
              className="w-5 h-5 rounded-md border border-white/[0.25] flex items-center justify-center flex-shrink-0 mt-0.5"
              initial={{ backgroundColor: "rgba(255,255,255,0)" }}
              animate={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.3 }}
            >
              <motion.svg
                width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                className="text-white/80"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.2, duration: 0.3 }}
              >
                <motion.polyline
                  points="20 6 9 17 4 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7 + i * 0.2, duration: 0.3 }}
                />
              </motion.svg>
            </motion.div>

            {/* Text */}
            <div>
              <p className="text-[11px] font-medium text-white/80 leading-relaxed">{item.label}</p>
              {item.description && (
                <p className="text-xs text-white/50 mt-0.5">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimationContainer>
  );
}
