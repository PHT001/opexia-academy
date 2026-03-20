"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ArrowCycle({ items, title, subtitle }: AnimationTemplateProps) {
  const count = Math.min(items.length, 5);
  const cx = 120, cy = 110, radius = 75;

  const nodes = items.slice(0, count).map((item, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { ...item, x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
  });

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="240" height="220" viewBox="0 0 240 220" className="overflow-visible">
        {/* Curved arrows between nodes */}
        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % count];
          const mx = (node.x + next.x) / 2 + (cy - (node.y + next.y) / 2) * 0.3;
          const my = (node.y + next.y) / 2 - (cx - (node.x + next.x) / 2) * 0.3;
          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${node.x} ${node.y} Q ${mx} ${my} ${next.x} ${next.y}`}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x} cy={node.y} r="28"
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.20)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.5, ease: "easeOut" }}
            />
            <motion.text
              x={node.x} y={node.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-[9px] font-semibold fill-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            >
              {node.label.length > 12 ? node.label.slice(0, 12) + "…" : node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </AnimationContainer>
  );
}
