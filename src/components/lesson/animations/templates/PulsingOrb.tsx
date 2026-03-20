"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function PulsingOrb({ items, title, subtitle }: AnimationTemplateProps) {
  const count = Math.min(items.length, 6);
  const radius = 90;

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="relative w-[260px] h-[240px] flex items-center justify-center">
        {/* Central orb */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-white/[0.12] border border-white/[0.25] flex items-center justify-center z-10"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.08)",
              "0 0 40px rgba(255,255,255,0.12)",
              "0 0 20px rgba(255,255,255,0.08)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-bold text-white/80">{items[0]?.icon || "✦"}</span>
        </motion.div>

        {/* Orbiting concepts */}
        {items.slice(0, count).map((item, i) => {
          const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: "50%", top: "50%" }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x, y }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {/* Connection line (visual only) */}
              <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center">
                <span className="text-sm text-white/70">{item.icon || "•"}</span>
              </div>
              <p className="text-xs text-white/70 font-medium text-center max-w-[60px] leading-tight">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </AnimationContainer>
  );
}
