"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ModelCards({ items, title, subtitle }: AnimationTemplateProps) {
  const cardStyles = [
    { gradient: "from-violet-600/40 to-purple-800/30", border: "border-violet-400/30", glow: "0 0 30px rgba(139, 92, 246, 0.2)", accent: "#8b5cf6" },
    { gradient: "from-emerald-600/40 to-green-800/30", border: "border-emerald-400/30", glow: "0 0 30px rgba(16, 185, 129, 0.2)", accent: "#10b981" },
    { gradient: "from-blue-600/40 to-indigo-800/30", border: "border-blue-400/30", glow: "0 0 30px rgba(59, 130, 246, 0.2)", accent: "#3b82f6" },
    { gradient: "from-orange-600/40 to-red-800/30", border: "border-orange-400/30", glow: "0 0 30px rgba(245, 158, 11, 0.2)", accent: "#f59e0b" },
    { gradient: "from-pink-600/40 to-rose-800/30", border: "border-pink-400/30", glow: "0 0 30px rgba(236, 72, 153, 0.2)", accent: "#ec4899" },
    { gradient: "from-cyan-600/40 to-teal-800/30", border: "border-cyan-400/30", glow: "0 0 30px rgba(6, 182, 212, 0.2)", accent: "#06b6d4" },
  ];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="grid grid-cols-2 gap-3 w-full max-w-[320px]">
        {items.slice(0, 6).map((item, i) => {
          const style = cardStyles[i % cardStyles.length];
          return (
            <motion.div
              key={i}
              className={`relative rounded-xl bg-gradient-to-br ${style.gradient} border ${style.border} p-3 overflow-hidden`}
              style={{ boxShadow: style.glow }}
              initial={{ opacity: 0, y: 24, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04, y: -2 }}
            >
              {/* Accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: style.accent }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              />

              {/* Icon */}
              {item.icon && (
                <motion.div
                  className="text-xl mb-1.5"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
              )}

              {/* Name */}
              <p className="text-sm font-bold text-white leading-tight">{item.label}</p>

              {/* Description */}
              {item.description && (
                <p className="text-[10px] text-white/60 mt-0.5 leading-snug">{item.description}</p>
              )}

              {/* Subtle shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ delay: 1 + i * 0.2, duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          );
        })}
      </div>
    </AnimationContainer>
  );
}
