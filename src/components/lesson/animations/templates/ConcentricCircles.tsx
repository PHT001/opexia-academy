"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ConcentricCircles({ items, title, subtitle }: AnimationTemplateProps) {
  const count = Math.min(items.length, 4);
  const sizes = [60, 110, 160, 210];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="relative w-[240px] h-[240px] flex items-center justify-center">
        {items.slice(0, count).map((item, i) => {
          const size = sizes[count - 1 - i];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/[0.15] flex items-center justify-center"
              style={{ width: size, height: size }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 * (count - 1 - i), duration: 0.7, ease: "easeOut" }}
            >
              {/* Label positioned on the ring */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white/[0.12] border border-white/[0.20]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (count - 1 - i) * 0.2, duration: 0.4 }}
              >
                <p className="text-xs font-semibold text-white/80 whitespace-nowrap">{item.label}</p>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center label */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-xs font-bold text-white/60">{items[0]?.icon || "●"}</span>
        </motion.div>
      </div>
    </AnimationContainer>
  );
}
