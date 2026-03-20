"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function LayeredStack({ items, title, subtitle }: AnimationTemplateProps) {
  const count = Math.min(items.length, 5);
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="relative w-full max-w-[260px] h-[220px] flex items-center justify-center">
        {items.slice(0, count).map((item, i) => {
          const offset = (i - (count - 1) / 2) * 14;
          const rotate = (i - (count - 1) / 2) * 3;
          return (
            <motion.div
              key={i}
              className="absolute w-[200px] px-4 py-3 rounded-xl bg-white/[0.10] border border-white/[0.20] backdrop-blur-sm"
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{
                opacity: 1 - i * 0.1,
                y: offset,
                rotate,
                scale: 1 - i * 0.03,
              }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              style={{ zIndex: count - i }}
            >
              <p className="text-[11px] font-semibold text-white/70">{item.label}</p>
              {item.description && (
                <p className="text-xs text-white/60 mt-0.5">{item.description}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </AnimationContainer>
  );
}
