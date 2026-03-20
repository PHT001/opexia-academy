"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function WireframeBuilder({ items, title, subtitle }: AnimationTemplateProps) {
  // Builds a wireframe of a webpage section by section
  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[280px]">
        <div className="rounded-xl border border-white/15 overflow-hidden bg-white/[0.02]">
          {/* Browser mini chrome */}
          <div className="flex items-center gap-1 px-2 py-1 border-b border-white/10 bg-white/[0.04]">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
            </div>
            <div className="flex-1 h-3 rounded bg-white/[0.05] mx-2" />
          </div>

          {/* Wireframe being drawn */}
          <div className="p-3 space-y-2">
            {/* Hero / Header */}
            <motion.div
              className="border border-dashed border-violet-500/40 rounded-lg p-2 bg-violet-500/[0.05]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.div className="h-2.5 bg-violet-400/30 rounded w-3/5 mb-1" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.3 }} style={{ transformOrigin: "left" }} />
              <motion.div className="h-1.5 bg-violet-400/15 rounded w-4/5" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.3 }} style={{ transformOrigin: "left" }} />
              <motion.p className="text-[7px] text-violet-400/60 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                {items[0]?.label || "Header + CTA"}
              </motion.p>
            </motion.div>

            {/* Benefits section */}
            <motion.div
              className="border border-dashed border-blue-500/40 rounded-lg p-2 bg-blue-500/[0.05]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-1">
                {[0, 1, 2].map((j) => (
                  <motion.div key={j} className="bg-blue-400/15 rounded p-1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + j * 0.1, type: "spring" }}>
                    <div className="w-3 h-3 rounded-full bg-blue-400/25 mx-auto mb-0.5" />
                    <div className="h-1 bg-blue-400/15 rounded mx-auto w-4/5" />
                  </motion.div>
                ))}
              </div>
              <motion.p className="text-[7px] text-blue-400/60 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                {items[1]?.label || "Bénéfices"}
              </motion.p>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="border border-dashed border-emerald-500/40 rounded-lg p-2 bg-emerald-500/[0.05]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              <div className="flex gap-1">
                {[0, 1].map((j) => (
                  <motion.div key={j} className="flex-1 bg-emerald-400/10 rounded p-1 flex items-start gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 + j * 0.1 }}>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/25 flex-shrink-0" />
                    <div className="space-y-0.5 flex-1">
                      <div className="h-1 bg-emerald-400/15 rounded w-full" />
                      <div className="h-1 bg-emerald-400/10 rounded w-3/4" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p className="text-[7px] text-emerald-400/60 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                {items[2]?.label || "Témoignages"}
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="border border-dashed border-amber-500/40 rounded-lg p-2 bg-amber-500/[0.05] text-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 2, duration: 0.4 }}
            >
              <motion.div
                className="h-4 bg-amber-400/30 rounded-full mx-auto w-2/3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 0.3 }}
              />
              <motion.p className="text-[7px] text-amber-400/60 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
                {items[3]?.label || "Call to Action"}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
