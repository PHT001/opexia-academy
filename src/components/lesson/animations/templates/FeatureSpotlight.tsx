"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function FeatureSpotlight({ items, title, subtitle, variant }: AnimationTemplateProps) {
  // variant controls accent color: "violet", "green", "blue", "orange", "pink"
  const accentMap: Record<string, { ring: string; glow: string; text: string; bg: string; dot: string }> = {
    violet: { ring: "rgba(139, 92, 246, 0.5)", glow: "rgba(139, 92, 246, 0.15)", text: "#c4a7ff", bg: "rgba(139, 92, 246, 0.1)", dot: "#8b5cf6" },
    green: { ring: "rgba(16, 185, 129, 0.5)", glow: "rgba(16, 185, 129, 0.15)", text: "#6ee7b7", bg: "rgba(16, 185, 129, 0.1)", dot: "#10b981" },
    blue: { ring: "rgba(59, 130, 246, 0.5)", glow: "rgba(59, 130, 246, 0.15)", text: "#93c5fd", bg: "rgba(59, 130, 246, 0.1)", dot: "#3b82f6" },
    orange: { ring: "rgba(245, 158, 11, 0.5)", glow: "rgba(245, 158, 11, 0.15)", text: "#fcd34d", bg: "rgba(245, 158, 11, 0.1)", dot: "#f59e0b" },
    pink: { ring: "rgba(236, 72, 153, 0.5)", glow: "rgba(236, 72, 153, 0.15)", text: "#f9a8d4", bg: "rgba(236, 72, 153, 0.1)", dot: "#ec4899" },
    cyan: { ring: "rgba(6, 182, 212, 0.5)", glow: "rgba(6, 182, 212, 0.15)", text: "#67e8f9", bg: "rgba(6, 182, 212, 0.1)", dot: "#06b6d4" },
  };

  const accent = accentMap[variant || "violet"] || accentMap.violet;
  const mainItem = items[0];
  const features = items.slice(1);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[300px] flex flex-col items-center gap-4">
        {/* Main spotlight */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute w-24 h-24 rounded-full"
            style={{
              border: `2px solid ${accent.ring}`,
              boxShadow: `0 0 40px ${accent.glow}, inset 0 0 20px ${accent.glow}`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center icon */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: accent.bg }}>
            <span className="text-3xl">{mainItem?.icon || "✨"}</span>
          </div>
        </motion.div>

        {/* Main label */}
        <motion.p
          className="text-base font-bold text-white text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {mainItem?.label}
        </motion.p>

        {/* Feature list */}
        <div className="w-full space-y-2 mt-1">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-lg"
              style={{ background: accent.bg }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4, ease: "easeOut" }}
            >
              {/* Dot */}
              <motion.div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: accent.dot }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 300 }}
              />

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold" style={{ color: accent.text }}>{feature.label}</p>
                {feature.description && (
                  <p className="text-[10px] text-white/50 leading-tight">{feature.description}</p>
                )}
              </div>

              {/* Optional icon */}
              {feature.icon && <span className="text-sm flex-shrink-0">{feature.icon}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
