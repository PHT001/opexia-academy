"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function PieChart({ items, title, subtitle }: AnimationTemplateProps) {
  const total = items.reduce((sum, item) => sum + (item.value || 1), 0);
  const cx = 100, cy = 100, radius = 70, inner = 40;
  let cumAngle = -90;

  const segments = items.map((item) => {
    const value = item.value || 1;
    const angle = (value / total) * 360;
    const start = cumAngle;
    cumAngle += angle;
    return { ...item, startAngle: start, angle };
  });

  function polarToXY(cx: number, cy: number, r: number, deg: number) {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
    const start = polarToXY(cx, cy, r, startDeg);
    const end = polarToXY(cx, cy, r, endDeg);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
  }

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex items-center gap-4">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {segments.map((seg, i) => {
            const strokeWidth = radius - inner;
            const midR = (radius + inner) / 2;
            const circumference = 2 * Math.PI * midR;
            const dashLen = (seg.angle / 360) * circumference;
            const dashOffset = -((seg.startAngle + 90) / 360) * circumference;
            const opacities = [0.30, 0.22, 0.16, 0.12, 0.10, 0.08];

            return (
              <motion.circle
                key={i}
                cx={cx} cy={cy}
                r={midR}
                fill="none"
                stroke={`rgba(255,255,255,${opacities[i % opacities.length]})`}
                strokeWidth={strokeWidth - 2}
                strokeDasharray={`${dashLen} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                transform={`rotate(-90 ${cx} ${cy})`}
              />
            );
          })}
        </svg>

        {/* Legend */}
        <div className="flex flex-col gap-1.5">
          {items.slice(0, 5).map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `rgba(255,255,255,${0.3 - i * 0.05})` }} />
              <span className="text-xs text-white/70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
