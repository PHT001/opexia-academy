"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function PlanetOrbit({ items, title, subtitle }: AnimationTemplateProps) {
  const cx = 150;
  const cy = 115;
  const planets = items.slice(0, 6);

  const planetColors = [
    { fill: "#8b5cf6", glow: "rgba(139, 92, 246, 0.3)" },
    { fill: "#10b981", glow: "rgba(16, 185, 129, 0.3)" },
    { fill: "#3b82f6", glow: "rgba(59, 130, 246, 0.3)" },
    { fill: "#f59e0b", glow: "rgba(245, 158, 11, 0.3)" },
    { fill: "#ec4899", glow: "rgba(236, 72, 153, 0.3)" },
    { fill: "#06b6d4", glow: "rgba(6, 182, 212, 0.3)" },
  ];

  const orbits = [38, 58, 78, 95, 110, 125];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <svg width="300" height="240" viewBox="0 0 300 240" className="overflow-visible">
        {/* Orbit paths */}
        {planets.map((_, i) => (
          <motion.ellipse
            key={`orbit-${i}`}
            cx={cx} cy={cy}
            rx={orbits[i]} ry={orbits[i] * 0.45}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Central sun */}
        <motion.g>
          <motion.circle
            cx={cx} cy={cy} r="18"
            fill="rgba(255, 200, 50, 0.15)"
            stroke="rgba(255, 200, 50, 0.4)"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          />
          <motion.circle
            cx={cx} cy={cy} r="18"
            fill="none"
            stroke="rgba(255, 200, 50, 0.2)"
            strokeWidth="1"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.text
            x={cx} y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[10px] font-bold fill-yellow-200/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LLM
          </motion.text>
        </motion.g>

        {/* Orbiting planets */}
        {planets.map((planet, i) => {
          const orbitR = orbits[i];
          const orbitRy = orbitR * 0.45;
          const startAngle = (i * 60 + 30) * (Math.PI / 180);
          const duration = 8 + i * 3;
          const planetR = Math.max(8, 14 - i * 1.5);
          const color = planetColors[i % planetColors.length];

          return (
            <motion.g key={`planet-${i}`}>
              {/* Planet on orbit */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <motion.circle
                  r={planetR + 4}
                  fill={color.glow}
                  animate={{
                    cx: Array.from({ length: 61 }, (_, k) => cx + Math.cos(startAngle + (k / 60) * Math.PI * 2) * orbitR),
                    cy: Array.from({ length: 61 }, (_, k) => cy + Math.sin(startAngle + (k / 60) * Math.PI * 2) * orbitRy),
                  }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  r={planetR}
                  fill={color.fill}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                  animate={{
                    cx: Array.from({ length: 61 }, (_, k) => cx + Math.cos(startAngle + (k / 60) * Math.PI * 2) * orbitR),
                    cy: Array.from({ length: 61 }, (_, k) => cy + Math.sin(startAngle + (k / 60) * Math.PI * 2) * orbitRy),
                  }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                />
                <motion.text
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[8px] font-bold fill-white pointer-events-none"
                  animate={{
                    x: Array.from({ length: 61 }, (_, k) => cx + Math.cos(startAngle + (k / 60) * Math.PI * 2) * orbitR),
                    y: Array.from({ length: 61 }, (_, k) => cy + Math.sin(startAngle + (k / 60) * Math.PI * 2) * orbitRy),
                  }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  {planet.icon || planet.label.slice(0, 2)}
                </motion.text>
              </motion.g>

              {/* Fixed label at right */}
              <motion.text
                x={285}
                y={20 + i * 22}
                className="text-[9px] font-semibold"
                fill={color.fill}
                initial={{ opacity: 0, x: 295 }}
                animate={{ opacity: 1, x: 285 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
              >
                {planet.label}
              </motion.text>
              <motion.circle
                cx={276}
                cy={17 + i * 22}
                r="3"
                fill={color.fill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.12 }}
              />
            </motion.g>
          );
        })}
      </svg>
    </AnimationContainer>
  );
}
