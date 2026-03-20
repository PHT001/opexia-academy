"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function RadarChart({ items, title, subtitle }: AnimationTemplateProps) {
  const cx = 140;
  const cy = 130;
  const maxR = 90;
  const axes = items.slice(0, 6);
  const count = axes.length;

  // Generate axis positions
  const axisPoints = axes.map((_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle),
      y: Math.sin(angle),
    };
  });

  // Generate polygon points based on item.value (0-100)
  const dataPoints = axes.map((item, i) => {
    const val = (item.value ?? 70) / 100;
    return {
      x: cx + axisPoints[i].x * maxR * val,
      y: cy + axisPoints[i].y * maxR * val,
    };
  });

  const polygonPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  // Grid circles
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="280" height="260" viewBox="0 0 280 260" className="overflow-visible">
        {/* Grid circles */}
        {gridLevels.map((level, i) => (
          <motion.circle
            key={`grid-${i}`}
            cx={cx}
            cy={cy}
            r={maxR * level}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Axis lines */}
        {axisPoints.map((point, i) => (
          <motion.line
            key={`axis-${i}`}
            x1={cx}
            y1={cy}
            x2={cx + point.x * maxR}
            y2={cy + point.y * maxR}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          />
        ))}

        {/* Data polygon fill */}
        <motion.path
          d={polygonPath}
          fill="rgba(139, 92, 246, 0.15)"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        />

        {/* Data polygon stroke */}
        <motion.path
          d={polygonPath}
          fill="none"
          stroke="rgba(139, 92, 246, 0.7)"
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#8b5cf6"
            stroke="white"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 300 }}
          />
        ))}

        {/* Labels */}
        {axes.map((item, i) => {
          const labelDist = maxR + 20;
          const lx = cx + axisPoints[i].x * labelDist;
          const ly = cy + axisPoints[i].y * labelDist;
          const anchor = axisPoints[i].x > 0.3 ? "start" : axisPoints[i].x < -0.3 ? "end" : "middle";

          return (
            <motion.text
              key={`label-${i}`}
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="central"
              className="text-[10px] font-semibold fill-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            >
              {item.label}
            </motion.text>
          );
        })}
      </svg>
    </AnimationContainer>
  );
}
