"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function FlowDiagram({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center gap-1 w-full max-w-[240px]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {/* Box */}
            <motion.div
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.10] border border-white/[0.20] text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[11px] font-semibold text-white/70">{item.label}</p>
              {item.description && (
                <p className="text-xs text-white/60 mt-0.5">{item.description}</p>
              )}
            </motion.div>

            {/* Arrow */}
            {i < items.length - 1 && (
              <motion.div
                className="flex flex-col items-center my-1"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 0.4 + i * 0.25, duration: 0.3 }}
              >
                <div className="w-px h-4 bg-white/10" />
                <svg width="8" height="6" viewBox="0 0 8 6" className="text-white/50">
                  <path d="M4 6L0 0h8z" fill="currentColor" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
}
