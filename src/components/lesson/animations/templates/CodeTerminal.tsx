"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function CodeTerminal({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[280px] rounded-xl overflow-hidden border border-white/[0.20]">
        {/* Terminal header */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.10] border-b border-white/[0.12]">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="ml-2 text-xs text-white/50 font-mono">terminal</span>
        </div>

        {/* Terminal body */}
        <div className="p-3 bg-white/[0.05] font-mono text-xs leading-relaxed min-h-[140px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="mb-1.5 last:mb-0"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.4, duration: 0.3 }}
            >
              {item.icon === "output" ? (
                <span className="text-white/60">{item.label}</span>
              ) : (
                <>
                  <span className="text-white/60">$ </span>
                  <span className="text-white/80">{item.label}</span>
                </>
              )}
              {item.description && (
                <motion.div
                  className="text-white/50 ml-2 mt-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.4, duration: 0.3 }}
                >
                  {item.description}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Cursor */}
          <motion.span
            className="inline-block w-1.5 h-3 bg-white/60 ml-0.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
    </AnimationContainer>
  );
}
