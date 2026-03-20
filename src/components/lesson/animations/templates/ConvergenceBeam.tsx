"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ConvergenceBeam({ items, title, subtitle }: AnimationTemplateProps) {
  const cx = 150;
  const cy = 120;
  const count = Math.min(items.length, 6);

  const beamColors = [
    "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4",
  ];

  // Start positions on the edges
  const beams = items.slice(0, count).map((item, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const startDist = 130;
    return {
      ...item,
      startX: cx + Math.cos(angle) * startDist,
      startY: cy + Math.sin(angle) * startDist,
      color: beamColors[i % beamColors.length],
    };
  });

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="300" height="240" viewBox="0 0 300 240" className="overflow-visible">
        {/* Beam lines converging to center */}
        {beams.map((beam, i) => (
          <motion.g key={i}>
            {/* Beam glow */}
            <motion.line
              x1={beam.startX} y1={beam.startY}
              x2={cx} y2={cy}
              stroke={beam.color}
              strokeWidth="3"
              strokeOpacity={0.15}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: "easeIn" }}
            />
            {/* Beam core */}
            <motion.line
              x1={beam.startX} y1={beam.startY}
              x2={cx} y2={cy}
              stroke={beam.color}
              strokeWidth="1.5"
              strokeOpacity={0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: "easeIn" }}
            />
            {/* Traveling particle */}
            <motion.circle
              r="4"
              fill={beam.color}
              initial={{ cx: beam.startX, cy: beam.startY, opacity: 0 }}
              animate={{
                cx: [beam.startX, cx],
                cy: [beam.startY, cy],
                opacity: [0, 1, 0.8, 0],
              }}
              transition={{ delay: 1.5 + i * 0.2, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />

            {/* Source label */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
            >
              <circle cx={beam.startX} cy={beam.startY} r="16" fill={`${beam.color}25`} stroke={`${beam.color}50`} strokeWidth="1" />
              <text x={beam.startX} y={beam.startY - 1} textAnchor="middle" dominantBaseline="central" className="text-sm">
                {beam.icon || "•"}
              </text>
              <text x={beam.startX} y={beam.startY + 24} textAnchor="middle" className="text-[8px] font-semibold fill-white/70">
                {beam.label.length > 12 ? beam.label.slice(0, 12) + "…" : beam.label}
              </text>
            </motion.g>
          </motion.g>
        ))}

        {/* Center convergence point */}
        <motion.circle
          cx={cx} cy={cy} r="6"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ delay: 0.8 + count * 0.15, duration: 0.5, ease: "easeOut" }}
        />

        {/* Shockwave rings */}
        {[0, 1, 2].map((ring) => (
          <motion.circle
            key={`ring-${ring}`}
            cx={cx} cy={cy}
            fill="none"
            stroke="white"
            strokeWidth="1"
            initial={{ r: 6, opacity: 0.6 }}
            animate={{ r: [6, 60], opacity: [0.5, 0] }}
            transition={{
              delay: 1.2 + count * 0.15 + ring * 0.3,
              duration: 1.2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Center label */}
        <motion.text
          x={cx} y={cy + 28}
          textAnchor="middle"
          className="text-[10px] font-bold fill-white/90 uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {items[0]?.description || "2025"}
        </motion.text>
      </svg>
    </AnimationContainer>
  );
}
