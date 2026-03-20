"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function HallucinationBubbles({ items, title, subtitle }: AnimationTemplateProps) {
  // Show "facts" vs "hallucinations" — true ones stay, false ones dissolve
  const trueFacts = items.filter((_, i) => i % 2 === 0).slice(0, 3);
  const falseFacts = items.filter((_, i) => i % 2 === 1).slice(0, 3);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[300px] space-y-4">
        {/* True facts */}
        <div>
          <motion.p
            className="text-[10px] uppercase tracking-widest text-emerald-400/70 mb-2 flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            Faits vérifiés
          </motion.p>
          <div className="space-y-1.5">
            {trueFacts.map((item, i) => (
              <motion.div
                key={`true-${i}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
              >
                <motion.span
                  className="text-emerald-400 font-bold text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.2, type: "spring" }}
                >
                  ✓
                </motion.span>
                <span className="text-xs text-emerald-200/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hallucinations - appear then dissolve */}
        <div>
          <motion.p
            className="text-[10px] uppercase tracking-widest text-red-400/70 mb-2 flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            Hallucinations
          </motion.p>
          <div className="space-y-1.5">
            {falseFacts.map((item, i) => (
              <motion.div
                key={`false-${i}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 relative overflow-hidden"
                initial={{ opacity: 0, x: -16 }}
                animate={{
                  opacity: [0, 1, 1, 0.3],
                  x: [-16, 0, 0, 0],
                }}
                transition={{
                  delay: 1.4 + i * 0.25,
                  duration: 3,
                  times: [0, 0.15, 0.6, 1],
                }}
              >
                <motion.span
                  className="text-red-400 font-bold text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 1, 1], rotate: [0, 0, 0, 90] }}
                  transition={{ delay: 1.4 + i * 0.25, duration: 3, times: [0, 0.15, 0.6, 1] }}
                >
                  ✗
                </motion.span>
                <span className="text-xs text-red-200/80">{item.label}</span>

                {/* Dissolve line through */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/40 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ delay: 2.5 + i * 0.25, duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warning message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <p className="text-[10px] text-amber-400/70 italic">
            ⚠️ Toujours vérifier les informations générées par l&apos;IA
          </p>
        </motion.div>
      </div>
    </AnimationContainer>
  );
}
