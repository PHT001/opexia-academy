"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ProgressPath({ items, title, subtitle }: AnimationTemplateProps) {
  const steps = items.slice(0, 6);
  const stepHeight = 44;
  const totalHeight = steps.length * stepHeight;

  const stepColors = [
    "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4",
  ];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[300px]">
        <div className="relative pl-8">
          {/* Vertical path line */}
          <motion.div
            className="absolute left-[11px] top-3 w-[2px] bg-gradient-to-b from-violet-500/50 via-blue-500/50 to-emerald-500/50"
            initial={{ height: 0 }}
            animate={{ height: totalHeight - 20 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {steps.map((step, i) => {
            const color = stepColors[i % stepColors.length];
            return (
              <motion.div
                key={i}
                className="relative flex items-start gap-3 mb-3"
                style={{ minHeight: stepHeight }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.25, duration: 0.4 }}
              >
                {/* Circle checkpoint */}
                <motion.div
                  className="absolute -left-8 top-0.5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.25, type: "spring", stiffness: 300 }}
                >
                  {/* Outer ring */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center border-2"
                    style={{ borderColor: color, background: `${color}20` }}
                  >
                    {/* Inner fill animation */}
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ background: color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.25, type: "spring" }}
                    />
                  </div>

                  {/* Checkmark */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.25, type: "spring" }}
                  >
                    <span className="text-[9px] font-bold text-white">✓</span>
                  </motion.div>
                </motion.div>

                {/* Step content */}
                <motion.div
                  className="rounded-lg px-3 py-2 flex-1"
                  style={{ background: `${color}10`, borderLeft: `2px solid ${color}40` }}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.25, duration: 0.3 }}
                >
                  <p className="text-xs font-semibold text-white/90">{step.label}</p>
                  {step.description && (
                    <p className="text-[10px] text-white/50 mt-0.5 leading-snug">{step.description}</p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationContainer>
  );
}
