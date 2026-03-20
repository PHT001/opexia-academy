"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function TrophyUnlock({ items, title, subtitle }: AnimationTemplateProps) {
  // Confetti particles
  const confettiColors = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
  const confetti = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 280 + 10,
    delay: 0.8 + Math.random() * 0.5,
    color: confettiColors[i % confettiColors.length],
    size: 3 + Math.random() * 4,
    rotation: Math.random() * 360,
  }));

  const achievements = items.slice(0, 4);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[300px] flex flex-col items-center gap-4">
        {/* Trophy area with confetti */}
        <div className="relative w-full h-[100px] flex items-center justify-center">
          {/* Confetti particles */}
          {confetti.map((c, i) => (
            <motion.div
              key={i}
              className="absolute rounded-sm"
              style={{
                width: c.size,
                height: c.size,
                background: c.color,
                left: c.x,
                top: 50,
              }}
              initial={{ opacity: 0, y: 0, rotate: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [0, -40 - Math.random() * 30, -20 + Math.random() * 60, 80],
                x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 60],
                rotate: [0, c.rotation, c.rotation * 2],
                scale: [0, 1, 0.8, 0],
              }}
              transition={{
                delay: c.delay,
                duration: 2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Glow behind trophy */}
          <motion.div
            className="absolute w-24 h-24 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0.5] }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Trophy */}
          <motion.div
            className="relative z-10 text-5xl"
            initial={{ scale: 0, rotate: -20, y: 20 }}
            animate={{ scale: [0, 1.3, 1], rotate: [-20, 5, 0], y: [20, -5, 0] }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            🏆
          </motion.div>

          {/* Sparkle rings */}
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={`ring-${ring}`}
              className="absolute w-8 h-8 rounded-full border border-amber-400/40"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 3 + ring], opacity: [0.5, 0] }}
              transition={{ delay: 0.8 + ring * 0.2, duration: 1, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Achievement badges */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {achievements.map((achievement, i) => {
            const badgeColors = [
              "from-amber-600/30 to-yellow-700/20 border-amber-400/25",
              "from-violet-600/30 to-purple-700/20 border-violet-400/25",
              "from-emerald-600/30 to-green-700/20 border-emerald-400/25",
              "from-blue-600/30 to-indigo-700/20 border-blue-400/25",
            ];
            return (
              <motion.div
                key={i}
                className={`rounded-xl bg-gradient-to-br ${badgeColors[i % badgeColors.length]} border p-2.5 text-center`}
                initial={{ opacity: 0, scale: 0.5, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.15, type: "spring", stiffness: 200 }}
              >
                <motion.span
                  className="text-lg block mb-1"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5 + i * 0.15, type: "spring" }}
                >
                  {achievement.icon || "⭐"}
                </motion.span>
                <p className="text-[10px] font-bold text-white/90 leading-tight">{achievement.label}</p>
                {achievement.description && (
                  <p className="text-[8px] text-white/50 mt-0.5">{achievement.description}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationContainer>
  );
}
