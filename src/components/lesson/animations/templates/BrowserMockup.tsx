"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function BrowserMockup({ items, title, subtitle }: AnimationTemplateProps) {
  const features = items.slice(1); // first item is the extension name

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[320px]">
        {/* Browser window */}
        <div className="rounded-xl border border-white/15 overflow-hidden bg-white/[0.03]">
          {/* Browser chrome */}
          <div className="bg-white/[0.06] border-b border-white/10">
            {/* Tab bar */}
            <div className="flex items-center gap-1 px-2 pt-2">
              <div className="flex gap-1 mr-2">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
              </div>
              <div className="px-3 py-1 bg-white/[0.08] rounded-t-md text-[8px] text-white/60 border-x border-t border-white/[0.08]">
                Google Docs - Mon projet
              </div>
            </div>
            {/* URL bar */}
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="flex-1 h-5 rounded-md bg-white/[0.05] border border-white/[0.08] flex items-center px-2">
                <span className="text-[8px] text-white/40">🔒 docs.google.com/document/d/...</span>
              </div>
              {/* Extension icon */}
              <motion.div
                className="w-5 h-5 rounded-sm bg-violet-600/40 border border-violet-400/30 flex items-center justify-center cursor-pointer"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-[9px]">🟣</span>
              </motion.div>
            </div>
          </div>

          {/* Page content area */}
          <div className="relative min-h-[100px] p-3">
            {/* Fake document content */}
            <div className="space-y-1.5 opacity-30">
              <div className="h-3 bg-white/20 rounded w-3/4" />
              <div className="h-2 bg-white/10 rounded w-full" />
              <div className="h-2 bg-white/10 rounded w-5/6" />
              <div className="h-2 bg-white/10 rounded w-full" />
              <div className="h-2 bg-white/10 rounded w-2/3" />
            </div>

            {/* Extension popup overlay */}
            <motion.div
              className="absolute top-1 right-1 w-[55%] rounded-lg border border-violet-500/30 bg-[#1a1a2e]/95 shadow-xl shadow-violet-900/20 overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, y: -8, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            >
              {/* Popup header */}
              <div className="px-2.5 py-1.5 border-b border-violet-500/20 bg-violet-600/10 flex items-center gap-1.5">
                <span className="text-[9px]">🟣</span>
                <span className="text-[9px] font-bold text-violet-300">{items[0]?.label || "Claude Cowork"}</span>
              </div>
              {/* Features list */}
              <div className="p-2 space-y-1">
                {features.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.15, duration: 0.3 }}
                  >
                    <span className="text-[10px]">{feature.icon || "✨"}</span>
                    <span className="text-[9px] text-white/70">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
