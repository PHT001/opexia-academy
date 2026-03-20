"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function CapabilityWheel({ items, title, subtitle }: AnimationTemplateProps) {
  const cx = 140;
  const cy = 115;
  const radius = 80;
  const segments = items.slice(0, 8);
  const count = segments.length;
  const anglePerSegment = (Math.PI * 2) / count;

  const segmentColors = [
    "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#06b6d4", "#f97316", "#a855f7",
  ];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="280" height="230" viewBox="0 0 280 230" className="overflow-visible">
        {/* Segments */}
        {segments.map((segment, i) => {
          const startAngle = i * anglePerSegment - Math.PI / 2;
          const endAngle = startAngle + anglePerSegment;
          const gap = 0.03;
          const innerR = 30;
          const outerR = radius;

          const x1 = cx + Math.cos(startAngle + gap) * outerR;
          const y1 = cy + Math.sin(startAngle + gap) * outerR;
          const x2 = cx + Math.cos(endAngle - gap) * outerR;
          const y2 = cy + Math.sin(endAngle - gap) * outerR;
          const x3 = cx + Math.cos(endAngle - gap) * innerR;
          const y3 = cy + Math.sin(endAngle - gap) * innerR;
          const x4 = cx + Math.cos(startAngle + gap) * innerR;
          const y4 = cy + Math.sin(startAngle + gap) * innerR;

          const midAngle = startAngle + anglePerSegment / 2;
          const labelR = (innerR + outerR) / 2 + 5;
          const iconR = (innerR + outerR) / 2 - 8;
          const color = segmentColors[i % segmentColors.length];

          return (
            <motion.g key={i}>
              {/* Segment path */}
              <motion.path
                d={`M ${x1} ${y1}
                    A ${outerR} ${outerR} 0 0 1 ${x2} ${y2}
                    L ${x3} ${y3}
                    A ${innerR} ${innerR} 0 0 0 ${x4} ${y4}
                    Z`}
                fill={`${color}20`}
                stroke={`${color}50`}
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />

              {/* Icon */}
              <motion.text
                x={cx + Math.cos(midAngle) * iconR}
                y={cy + Math.sin(midAngle) * iconR}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
              >
                {segment.icon || "⚡"}
              </motion.text>

              {/* Label */}
              <motion.text
                x={cx + Math.cos(midAngle) * labelR}
                y={cy + Math.sin(midAngle) * labelR}
                textAnchor="middle"
                dominantBaseline="central"
                fill={color}
                className="text-[7px] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {segment.label.length > 10 ? segment.label.slice(0, 10) + "…" : segment.label}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Center circle */}
        <motion.circle
          cx={cx} cy={cy} r="25"
          fill="rgba(15,15,30,0.9)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
        />

        {/* Rotating highlight */}
        <motion.circle
          cx={cx} cy={cy} r="25"
          fill="none"
          stroke="rgba(139, 92, 246, 0.3)"
          strokeWidth="2"
          strokeDasharray="10 146"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Center icon */}
        <motion.text
          x={cx} y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {items[0]?.icon || "⚙️"}
        </motion.text>
      </svg>
    </AnimationContainer>
  );
}
