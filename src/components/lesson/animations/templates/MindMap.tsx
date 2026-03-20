"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function MindMap({ items, title, subtitle }: AnimationTemplateProps) {
  const cx = 150;
  const cy = 120;
  const branches = items.slice(0, 6);
  const count = branches.length;

  const branchColors = [
    "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4",
  ];

  // Position branches in a radial layout
  const nodes = branches.map((item, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const dist = 80;
    return {
      ...item,
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      color: branchColors[i % branchColors.length],
      angle,
    };
  });

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="300" height="240" viewBox="0 0 300 240" className="overflow-visible">
        {/* Animated branch lines with gradient */}
        {nodes.map((node, i) => {
          const midX = cx + Math.cos(node.angle) * 35;
          const midY = cy + Math.sin(node.angle) * 35;
          return (
            <motion.g key={`branch-${i}`}>
              {/* Branch line */}
              <motion.path
                d={`M ${cx} ${cy} Q ${midX + Math.cos(node.angle + 0.3) * 15} ${midY + Math.sin(node.angle + 0.3) * 15} ${node.x} ${node.y}`}
                fill="none"
                stroke={node.color}
                strokeWidth="2"
                strokeOpacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              />
              {/* Pulse along branch */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="3"
                fill={node.color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  cx: [cx, node.x],
                  cy: [cy, node.y],
                }}
                transition={{ delay: 1.5 + i * 0.3, duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.g>
          );
        })}

        {/* Center node */}
        <motion.g>
          <motion.circle
            cx={cx} cy={cy} r="22"
            fill="rgba(139, 92, 246, 0.2)"
            stroke="rgba(139, 92, 246, 0.6)"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          />
          <motion.circle
            cx={cx} cy={cy} r="22"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.text
            x={cx} y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-lg fill-white font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {items[0]?.icon || "🧠"}
          </motion.text>
        </motion.g>

        {/* Branch nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x} cy={node.y} r="28"
              fill={`${node.color}15`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            />
            {/* Node circle */}
            <motion.circle
              cx={node.x} cy={node.y} r="20"
              fill={`${node.color}20`}
              stroke={`${node.color}80`}
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
            />
            {/* Icon */}
            <motion.text
              x={node.x} y={node.y - 2}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.15 }}
            >
              {node.icon || "•"}
            </motion.text>
            {/* Label below */}
            <motion.text
              x={node.x} y={node.y + 36}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-[9px] font-semibold fill-white/80"
              initial={{ opacity: 0, y: node.y + 30 }}
              animate={{ opacity: 1, y: node.y + 36 }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              {node.label.length > 14 ? node.label.slice(0, 14) + "…" : node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </AnimationContainer>
  );
}
