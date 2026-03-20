"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

function AnimatedNumber({ value, delay, prefix = "", suffix = "" }: { value: number; delay: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => {
    if (value >= 1000) return `${prefix}${Math.round(v).toLocaleString("fr-FR")}${suffix}`;
    if (value >= 100) return `${prefix}${Math.round(v)}${suffix}`;
    return `${prefix}${v.toFixed(1)}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration: 2,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [motionVal, value, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function CounterStats({ items, title, subtitle }: AnimationTemplateProps) {
  const colors = [
    "from-violet-500/30 to-purple-600/20",
    "from-blue-500/30 to-cyan-600/20",
    "from-emerald-500/30 to-teal-600/20",
    "from-amber-500/30 to-orange-600/20",
  ];

  const glowColors = [
    "shadow-violet-500/20",
    "shadow-blue-500/20",
    "shadow-emerald-500/20",
    "shadow-amber-500/20",
  ];

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className={`grid ${items.length <= 2 ? "grid-cols-2" : "grid-cols-2"} gap-3 w-full max-w-[320px]`}>
        {items.slice(0, 4).map((item, i) => (
          <motion.div
            key={i}
            className={`relative rounded-xl bg-gradient-to-br ${colors[i % colors.length]} border border-white/10 p-4 text-center shadow-lg ${glowColors[i % glowColors.length]}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.5, ease: "easeOut" }}
          >
            {/* Icon */}
            {item.icon && (
              <motion.div
                className="text-2xl mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + 0.15 * i, type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.div>
            )}
            {/* Big number */}
            <div className="text-2xl font-black text-white tracking-tight">
              <AnimatedNumber
                value={item.value ?? 0}
                delay={0.3 + 0.15 * i}
                prefix={item.description?.includes("$") ? "$" : ""}
                suffix={item.description?.includes("%") ? "%" : item.description?.includes("B") ? "B" : item.description?.includes("M") ? "M" : item.description?.includes("K") ? "K" : ""}
              />
            </div>
            {/* Label */}
            <p className="text-[11px] text-white/70 font-medium mt-1 leading-tight">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </AnimationContainer>
  );
}
