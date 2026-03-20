"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function TemperatureGauge({ items, title, subtitle }: AnimationTemplateProps) {
  // items represent temperature stops: each has a value (0-1), label, description
  const gaugeHeight = 180;
  const gaugeWidth = 32;

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex items-center gap-6 w-full max-w-[320px] justify-center">
        {/* Thermometer */}
        <div className="relative flex flex-col items-center">
          {/* Tube */}
          <div
            className="relative rounded-full overflow-hidden border border-white/20"
            style={{ width: gaugeWidth, height: gaugeHeight }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/20 to-red-600/20" />

            {/* Animated fill */}
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              style={{
                background: "linear-gradient(to top, #3b82f6, #8b5cf6, #ef4444)",
              }}
              initial={{ height: 0 }}
              animate={{ height: "70%" }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
            />

            {/* Glow overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
              }}
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{ delay: 1, duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Bulb at bottom */}
          <div className="relative -mt-2">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-500/60 border border-white/20"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(139, 92, 246, 0.3)",
                  "0 0 25px rgba(139, 92, 246, 0.5)",
                  "0 0 10px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Labels on the right */}
        <div className="relative" style={{ height: gaugeHeight + 20 }}>
          {items.map((item, i) => {
            const yPos = gaugeHeight - (gaugeHeight * (item.value ?? (i / (items.length - 1))));
            const isHot = (item.value ?? (i / (items.length - 1))) > 0.6;
            const isCold = (item.value ?? (i / (items.length - 1))) < 0.3;

            return (
              <motion.div
                key={i}
                className="absolute left-0 flex items-center gap-2"
                style={{ top: yPos }}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
              >
                {/* Tick line */}
                <div className="w-3 h-px bg-white/30" />

                {/* Value + label */}
                <div>
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: isHot ? "#fca5a5" : isCold ? "#93c5fd" : "#c4b5fd",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.description && (
                    <p className="text-[10px] text-white/50 leading-tight">{item.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationContainer>
  );
}
