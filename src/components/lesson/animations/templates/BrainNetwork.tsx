"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function BrainNetwork({ items, title, subtitle }: AnimationTemplateProps) {
  // Position nodes in a circular layout
  const count = Math.min(items.length, 6);
  const cx = 130, cy = 110, radius = 80;

  const nodes = items.slice(0, count).map((item, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { ...item, x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="260" height="220" viewBox="0 0 260 220" className="overflow-visible">
        {/* Connection lines */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x} y1={node.y}
              x2={target.x} y2={target.y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + (i + j) * 0.1, duration: 0.6 }}
            />
          ))
        )}

        {/* Center node */}
        <motion.circle
          cx={cx} cy={cy} r="16"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x} cy={node.y} r="22"
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.20)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            />
            <motion.text
              x={node.x} y={node.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-[9px] font-semibold fill-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
            >
              {node.label.length > 10 ? node.label.slice(0, 10) + "…" : node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </AnimationContainer>
  );
}
