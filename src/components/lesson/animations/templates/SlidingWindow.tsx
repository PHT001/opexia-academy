"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function SlidingWindow({ items, title, subtitle }: AnimationTemplateProps) {
  // items: context windows - label = model name, value = window size, description = detail
  const textLines = [
    "Salut, je voudrais créer une app...",
    "Elle doit avoir un système d'auth...",
    "Avec une base de données PostgreSQL...",
    "Et un dashboard avec des graphiques...",
    "Le design doit être moderne, dark...",
    "J'aimerais aussi un système de...",
    "notifications en temps réel avec...",
    "WebSocket et une file d'attente...",
    "Redis pour gérer les messages...",
    "Et pour finir, un déploiement...",
    "automatisé avec Docker + CI/CD...",
    "sur AWS avec auto-scaling...",
  ];

  const windowHeight = 5; // lines visible
  const totalLines = textLines.length;

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[320px] space-y-4">
        {/* Text with sliding window overlay */}
        <div className="relative bg-white/[0.03] rounded-xl border border-white/10 overflow-hidden">
          {/* All text lines */}
          <div className="p-3 space-y-1">
            {textLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-[10px] font-mono text-white/30 leading-relaxed whitespace-nowrap overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <span className="text-white/20 mr-2">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </motion.p>
            ))}
          </div>

          {/* Sliding window highlight */}
          <motion.div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              height: `${(windowHeight / totalLines) * 100}%`,
              background: "linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
              borderTop: "1px solid rgba(139, 92, 246, 0.4)",
              borderBottom: "1px solid rgba(139, 92, 246, 0.4)",
            }}
            initial={{ top: "0%" }}
            animate={{ top: ["0%", `${((totalLines - windowHeight) / totalLines) * 100}%`, "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />

          {/* Window label */}
          <motion.div
            className="absolute right-2 pointer-events-none"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", `${((totalLines - windowHeight) / totalLines) * 100}%`, "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          >
            <span className="text-[8px] font-bold text-violet-400 bg-violet-500/20 px-1.5 py-0.5 rounded">
              CONTEXTE
            </span>
          </motion.div>
        </div>

        {/* Context window sizes comparison */}
        <div className="space-y-2">
          {items.slice(0, 4).map((item, i) => {
            const maxVal = Math.max(...items.map((it) => it.value ?? 0));
            const pct = ((item.value ?? 0) / maxVal) * 100;
            const colors = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"];
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.3 }}
              >
                <span className="text-[10px] text-white/60 w-24 truncate text-right">{item.label}</span>
                <div className="flex-1 h-3 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: colors[i % colors.length] }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 1.2 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <span className="text-[10px] font-bold text-white/70 w-10">{item.value}K</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimationContainer>
  );
}
