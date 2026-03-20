"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Chatbots sur mesure",
    desc: "Chatbots intelligents qui répondent 24/7. Support, prise de RDV, qualification de leads.",
    price: "800–2 500€",
    keyword: "CHATBOT",
  },
  {
    title: "Automatisations business",
    desc: "Facturation, relances, reporting. Tes clients gagnent des heures chaque semaine.",
    price: "500–2 000€",
    keyword: "AUTOMATION",
  },
  {
    title: "Agents IA 24/7",
    desc: "Agents autonomes qui travaillent pendant que tes clients dorment. Veille, analyse, prospection.",
    price: "1 500–5 000€",
    keyword: "AGENT",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * features.length), features.length - 1);
    setActiveIndex(idx);
  });

  return (
    <section ref={containerRef} className="relative bg-[#0A0A0A]" style={{ height: `${features.length * 55}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8">
          {/* Top label */}
          <div className="absolute top-0 left-6 lg:left-8 -translate-y-20 lg:-translate-y-24">
            <p className="text-xs font-medium text-[#FF1744] tracking-[0.3em] uppercase">
              Ce que tu pourras vendre
            </p>
          </div>

          {/* Progress indicator — left side */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex-col items-center gap-3">
            {features.map((_, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center"
              >
                <div
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "bg-[#FF1744] scale-[2]"
                      : i < activeIndex
                      ? "bg-white/30"
                      : "bg-white/10"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            {/* Left — big number + title */}
            <div className="flex-1 max-w-2xl">
              {/* Counter */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`num-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-baseline gap-4 mb-6"
                >
                  <span className="text-7xl lg:text-[120px] font-black text-white/[0.04] leading-none select-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Keyword */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`kw-${activeIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-[10px] font-bold tracking-[0.4em] text-[#FF1744]/60 uppercase mb-4"
                >
                  {features[activeIndex].keyword}
                </motion.p>
              </AnimatePresence>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]"
                >
                  {features[activeIndex].title}
                </motion.h3>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="mt-5 text-base lg:text-lg text-white/40 leading-relaxed max-w-lg"
                >
                  {features[activeIndex].desc}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Right — price */}
            <div className="lg:text-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`price-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="text-xs font-medium text-white/20 tracking-wider uppercase mb-2">
                    Tes clients paient
                  </p>
                  <p className="text-4xl lg:text-6xl font-black text-white tracking-tight">
                    {features[activeIndex].price}
                  </p>
                  <p className="text-sm text-white/20 mt-2">par projet</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-6 right-6 lg:left-8 lg:right-8 translate-y-16 lg:translate-y-20">
            <div className="h-[1px] bg-white/[0.06] w-full relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#FF1744]/40"
                style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-[10px] text-white/20 font-medium">
                {String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-white/20 font-medium tracking-wider">
                SCROLL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
