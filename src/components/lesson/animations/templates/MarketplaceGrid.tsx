"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function MarketplaceGrid({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-[280px]">
        {items.slice(0, 6).map((item, i) => (
          <motion.div
            key={i}
            className="p-3 rounded-xl bg-white/[0.08] border border-white/[0.15]"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-7 h-7 rounded-lg bg-white/[0.10] flex items-center justify-center mb-2">
              <span className="text-xs">{item.icon || "◆"}</span>
            </div>
            <p className="text-xs font-semibold text-white/80 leading-tight">{item.label}</p>
            {item.description && (
              <p className="text-xs text-white/50 mt-0.5">{item.description}</p>
            )}
            {item.value && (
              <p className="text-xs font-bold text-white/70 mt-1">{item.value}€</p>
            )}
          </motion.div>
        ))}
      </div>
    </AnimationContainer>
  );
}
