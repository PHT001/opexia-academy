"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function TokenStream({ items, title, subtitle }: AnimationTemplateProps) {
  // items = tokens: each item.label is a token, item.description is original text
  // Colors cycle through a palette
  const tokenColors = [
    { bg: "rgba(139, 92, 246, 0.25)", border: "rgba(139, 92, 246, 0.5)", text: "#c4a7ff" },
    { bg: "rgba(59, 130, 246, 0.25)", border: "rgba(59, 130, 246, 0.5)", text: "#93c5fd" },
    { bg: "rgba(16, 185, 129, 0.25)", border: "rgba(16, 185, 129, 0.5)", text: "#6ee7b7" },
    { bg: "rgba(245, 158, 11, 0.25)", border: "rgba(245, 158, 11, 0.5)", text: "#fcd34d" },
    { bg: "rgba(236, 72, 153, 0.25)", border: "rgba(236, 72, 153, 0.5)", text: "#f9a8d4" },
    { bg: "rgba(6, 182, 212, 0.25)", border: "rgba(6, 182, 212, 0.5)", text: "#67e8f9" },
  ];

  // First item's description is the full sentence, remaining items are tokens
  const fullText = items[0]?.description || "";
  const tokens = items.map((item) => item.label);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[320px] space-y-6">
        {/* Original text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Texte original</p>
          <p className="text-sm text-white/80 font-mono bg-white/[0.06] rounded-lg px-3 py-2 border border-white/10">
            {fullText}
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <svg width="20" height="24" viewBox="0 0 20 24">
            <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* Tokenized output */}
        <div>
          <motion.p
            className="text-[10px] uppercase tracking-widest text-white/40 mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Tokens ({tokens.length})
          </motion.p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {tokens.map((token, i) => {
              const color = tokenColors[i % tokenColors.length];
              return (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono font-medium"
                  style={{
                    backgroundColor: color.bg,
                    borderWidth: 1,
                    borderColor: color.border,
                    color: color.text,
                  }}
                  initial={{ opacity: 0, scale: 0.5, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.9 + i * 0.08,
                    duration: 0.35,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <span className="text-[9px] text-white/30">{i}</span>
                  {token}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
