"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ArtifactGallery({ items, title, subtitle }: AnimationTemplateProps) {
  const artifacts = items.slice(0, 6);

  const cardColors = [
    { bg: "from-violet-900/40 to-purple-900/20", border: "border-violet-500/25", accent: "#8b5cf6" },
    { bg: "from-blue-900/40 to-indigo-900/20", border: "border-blue-500/25", accent: "#3b82f6" },
    { bg: "from-emerald-900/40 to-green-900/20", border: "border-emerald-500/25", accent: "#10b981" },
    { bg: "from-amber-900/40 to-orange-900/20", border: "border-amber-500/25", accent: "#f59e0b" },
    { bg: "from-pink-900/40 to-rose-900/20", border: "border-pink-500/25", accent: "#ec4899" },
    { bg: "from-cyan-900/40 to-teal-900/20", border: "border-cyan-500/25", accent: "#06b6d4" },
  ];

  // Mini code/content previews for each artifact type
  const previews: Record<string, string[]> = {
    "💻": ["function App() {", "  return (", "    <div>Hello</div>", "  );", "}"],
    "📄": ["# Mon Document", "", "Paragraphe un...", "Paragraphe deux..."],
    "📊": ["| Nom    | Score |", "|--------|-------|", "| Alice  |    95 |", "| Bob    |    87 |"],
    "🎨": ['<svg width="100">', '  <circle r="40"', '    fill="blue"/>', "</svg>"],
    "📐": ["graph TD", "  A[Start] --> B", "  B --> C[End]"],
    "⚛️": ["<Counter", "  initial={0}", "  step={1}", "/>"],
  };

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[320px] grid grid-cols-2 gap-2.5">
        {artifacts.map((artifact, i) => {
          const style = cardColors[i % cardColors.length];
          const preview = previews[artifact.icon || ""] || previews["💻"];

          return (
            <motion.div
              key={i}
              className={`rounded-xl bg-gradient-to-br ${style.bg} border ${style.border} overflow-hidden`}
              initial={{ opacity: 0, y: 16, rotateY: 25 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              {/* Mini preview area */}
              <div className="p-2 border-b border-white/[0.06] bg-black/20 min-h-[52px]">
                {preview.map((line, j) => (
                  <motion.p
                    key={j}
                    className="text-[7px] font-mono text-white/40 leading-[1.4] whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.12 + j * 0.05, duration: 0.2 }}
                  >
                    {line || "\u00A0"}
                  </motion.p>
                ))}
              </div>

              {/* Label area */}
              <div className="p-2 flex items-center gap-1.5">
                <motion.span
                  className="text-base"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
                >
                  {artifact.icon || "📦"}
                </motion.span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-white leading-tight truncate">{artifact.label}</p>
                  {artifact.description && (
                    <p className="text-[8px] text-white/50 leading-tight truncate">{artifact.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimationContainer>
  );
}
