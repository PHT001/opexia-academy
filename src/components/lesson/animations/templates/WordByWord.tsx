"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function WordByWord({ items, title, subtitle }: AnimationTemplateProps) {
  // items: each item.label is a word, item.value (0-100) is probability, item.description = alternative
  // Simulates LLM text generation showing words appearing with their probabilities

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[320px] space-y-4">
        {/* Generated text area */}
        <div className="bg-white/[0.04] rounded-xl border border-white/10 p-4 min-h-[80px]">
          <div className="flex flex-wrap gap-x-1.5 gap-y-1">
            {items.map((item, i) => (
              <motion.span
                key={i}
                className="text-sm text-white font-medium relative"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.35, duration: 0.2 }}
              >
                {item.label}
                {/* Blinking cursor after last visible word */}
                {i === items.length - 1 && (
                  <motion.span
                    className="inline-block w-[2px] h-4 bg-violet-400 ml-0.5 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Probability bars for the last word */}
        <div className="space-y-1.5">
          <motion.p
            className="text-[10px] uppercase tracking-widest text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + items.length * 0.35 }}
          >
            Probabilites du prochain mot
          </motion.p>

          {items.slice(-4).reverse().map((item, i) => {
            const prob = item.value ?? (90 - i * 20);
            const barColors = ["bg-violet-500", "bg-blue-500", "bg-cyan-500", "bg-white/20"];
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + items.length * 0.35 + i * 0.1, duration: 0.3 }}
              >
                <span className="text-xs text-white/60 w-16 truncate text-right font-mono">
                  {item.description || item.label}
                </span>
                <div className="flex-1 h-4 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${barColors[i] || barColors[3]}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${prob}%` }}
                    transition={{ delay: 0.9 + items.length * 0.35 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs text-white/50 w-8 font-mono">{prob}%</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationContainer>
  );
}
