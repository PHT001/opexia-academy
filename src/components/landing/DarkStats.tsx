"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";


function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, prefix: "+", suffix: "", label: "\u00c9l\u00e8ves form\u00e9s" },
  { value: 14, prefix: "", suffix: "j", label: "Pour le 1er client" },
  { value: 200, prefix: "+", suffix: "", label: "Entreprises accompagn\u00e9es" },
];

export default function DarkStats() {
  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 3 stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center rounded-2xl border border-gray-100 bg-white shadow-sm py-8 px-4 overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#FF1744]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative text-4xl sm:text-5xl font-black text-[#111] leading-none">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="relative text-xs text-gray-400 font-medium mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
