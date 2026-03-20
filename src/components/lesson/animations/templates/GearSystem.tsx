"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

function GearSVG({ size, className }: { size: number; className?: string }) {
  const r = size / 2 - 4;
  const teeth = 8;
  const d: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.3) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a4 = ((i + 0.8) / teeth) * Math.PI * 2;
    d.push(`${Math.cos(a1) * r},${Math.sin(a1) * r}`);
    d.push(`${Math.cos(a2) * (r + 5)},${Math.sin(a2) * (r + 5)}`);
    d.push(`${Math.cos(a3) * (r + 5)},${Math.sin(a3) * (r + 5)}`);
    d.push(`${Math.cos(a4) * r},${Math.sin(a4) * r}`);
  }

  return (
    <svg width={size} height={size} viewBox={`-${size / 2} -${size / 2} ${size} ${size}`} className={className}>
      <polygon points={d.join(" ")} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <circle r={r * 0.35} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    </svg>
  );
}

export function GearSystem({ items, title, subtitle }: AnimationTemplateProps) {
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[240px] h-[160px] flex items-center justify-center">
          {/* Gear 1 */}
          <motion.div
            className="absolute"
            style={{ left: 40, top: 30 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <GearSVG size={80} />
          </motion.div>

          {/* Gear 2 (counter-rotate) */}
          <motion.div
            className="absolute"
            style={{ left: 110, top: 50 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <GearSVG size={60} />
          </motion.div>

          {/* Gear 3 */}
          <motion.div
            className="absolute"
            style={{ left: 155, top: 20 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <GearSVG size={50} />
          </motion.div>
        </div>

        {/* Labels */}
        <div className="flex gap-3 flex-wrap justify-center">
          {items.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.15] text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            >
              <p className="text-xs font-semibold text-white/80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
