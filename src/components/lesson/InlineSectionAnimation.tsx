"use client";

import { motion } from "framer-motion";
import { getAnimationForSection } from "@/lib/lessonAnimations";
import { AnimationRenderer } from "./animations/AnimationRenderer";
import { DefaultAnimation } from "./animations/DefaultAnimation";

interface InlineSectionAnimationProps {
  lessonSlug: string;
  sectionIndex: number;
  sectionTitle: string;
}

export function InlineSectionAnimation({
  lessonSlug,
  sectionIndex,
  sectionTitle,
}: InlineSectionAnimationProps) {
  const config = getAnimationForSection(lessonSlug, sectionIndex);

  return (
    <motion.div
      className="my-4 sm:my-6 rounded-xl sm:rounded-2xl overflow-hidden w-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(30,30,45,0.95) 0%, rgba(15,15,30,0.98) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 4px 16px rgba(0,0,0,0.2)",
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="h-[220px] sm:h-[280px] md:h-[320px] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden relative">
        <div className="w-full h-full flex items-center justify-center overflow-hidden [&_*]:max-w-full">
          {config ? (
            <AnimationRenderer template={config.template} props={config.props} />
          ) : (
            <DefaultAnimation title={sectionTitle} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
