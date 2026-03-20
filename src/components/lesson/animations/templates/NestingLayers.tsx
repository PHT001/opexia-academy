"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function NestingLayers({ items, title, subtitle }: AnimationTemplateProps) {
  const count = Math.min(items.length, 5);
  const maxR = 100;
  const minR = 24;
  const step = (maxR - minR) / Math.max(count - 1, 1);

  const ringColors = [
    { stroke: "rgba(139, 92, 246, 0.6)", fill: "rgba(139, 92, 246, 0.08)", text: "rgb(196, 167, 255)" },    // violet
    { stroke: "rgba(59, 130, 246, 0.6)", fill: "rgba(59, 130, 246, 0.08)", text: "rgb(147, 197, 253)" },     // blue
    { stroke: "rgba(16, 185, 129, 0.6)", fill: "rgba(16, 185, 129, 0.08)", text: "rgb(110, 231, 183)" },     // emerald
    { stroke: "rgba(245, 158, 11, 0.6)", fill: "rgba(245, 158, 11, 0.08)", text: "rgb(252, 211, 77)" },      // amber
    { stroke: "rgba(236, 72, 153, 0.6)", fill: "rgba(236, 72, 153, 0.08)", text: "rgb(249, 168, 212)" },     // pink
  ];

  const cx = 150;
  const cy = 120;

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="300" height="240" viewBox="0 0 300 240" className="overflow-visible">
        {/* Rings from outer to inner */}
        {items.slice(0, count).map((item, i) => {
          const r = maxR - i * step;
          const color = ringColors[i % ringColors.length];
          const circumference = 2 * Math.PI * r;

          return (
            <motion.g key={i}>
              {/* Animated ring */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={r}
                fill={color.fill}
                stroke={color.stroke}
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                initial={{ strokeDashoffset: circumference, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ delay: i * 0.3, duration: 1.2, ease: "easeInOut" }}
              />

              {/* Pulsing glow */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={color.stroke}
                strokeWidth="1"
                opacity={0}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ delay: i * 0.3 + 1, duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              {/* Label */}
              <motion.text
                x={cx}
                y={cy - r + 14}
                textAnchor="middle"
                dominantBaseline="central"
                fill={color.text}
                className="text-[10px] font-bold uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.6, duration: 0.5 }}
              >
                {item.label}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Central dot */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="4"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: count * 0.3 + 0.5, duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </AnimationContainer>
  );
}
