"use client";

import { AnimatePresence, motion } from "framer-motion";
import { getAnimationForSection } from "@/lib/lessonAnimations";
import { AnimationRenderer } from "./animations/AnimationRenderer";
import { DefaultAnimation } from "./animations/DefaultAnimation";
import { cn } from "@/lib/utils";

interface AnimationPanelProps {
  lessonSlug: string;
  activeSectionIndex: number;
  sectionCount: number;
  sectionTitles: string[];
}

export function AnimationPanel({
  lessonSlug,
  activeSectionIndex,
  sectionCount,
  sectionTitles,
}: AnimationPanelProps) {
  const config = getAnimationForSection(lessonSlug, activeSectionIndex);

  return (
    <div className="h-[calc(100vh-8rem)] rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(30,30,45,0.95) 0%, rgba(15,15,30,0.98) 100%)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Animation area */}
      <div className="flex-1 relative min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSectionIndex}
            className="absolute inset-0 flex items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {config ? (
              <AnimationRenderer template={config.template} props={config.props} />
            ) : (
              <DefaultAnimation title={sectionTitles[activeSectionIndex]} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section indicator dots */}
      <div className="flex justify-center gap-1.5 py-3 border-t border-white/[0.15]">
        {Array.from({ length: sectionCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeSectionIndex
                ? "bg-white w-5"
                : "bg-white/30 w-1.5"
            )}
          />
        ))}
      </div>
    </div>
  );
}
