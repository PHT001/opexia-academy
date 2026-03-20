"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function HierarchyTree({ items, title, subtitle }: AnimationTemplateProps) {
  const root = items[0];
  const children = items.slice(1, 5);

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center gap-4 w-full max-w-[280px]">
        {/* Root node */}
        <motion.div
          className="px-4 py-2.5 rounded-xl bg-white/[0.12] border border-white/[0.20] text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[11px] font-bold text-white/70">{root?.label || "Root"}</p>
        </motion.div>

        {/* Connector lines */}
        <motion.div
          className="w-px h-4 bg-white/10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />

        {/* Horizontal bar */}
        <motion.div
          className="h-px bg-white/10"
          style={{ width: `${Math.min(children.length, 4) * 25}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />

        {/* Children */}
        <div className="flex gap-2 w-full justify-center">
          {children.map((child, i) => (
            <motion.div
              key={i}
              className="flex-1 max-w-[80px] flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15, duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-px h-3 bg-white/10" />
              <div className="w-full px-2 py-2 rounded-lg bg-white/[0.08] border border-white/[0.15] text-center">
                <p className="text-xs font-semibold text-white/80 leading-tight">{child.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationContainer>
  );
}
