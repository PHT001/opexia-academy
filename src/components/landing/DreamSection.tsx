"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

const dreamPoints = [
  "Tu factures **3 \u00e0 5 clients** entre 2 000\u20ac et 5 000\u20ac/mois chacun pour des automatisations IA.",
  "Tes syst\u00e8mes tournent **en autonomie** \u2014 tu g\u00e9n\u00e8res du revenu m\u00eame offline.",
  "Tu es positionn\u00e9 comme **l\u2019expert IA** dans ta niche, avec des clients qui viennent \u00e0 toi.",
  "Tu travailles depuis **o\u00f9 tu veux**, avec un laptop et une connexion internet.",
  "Tu n\u2019as plus peur d\u2019\u00eatre remplac\u00e9 par l\u2019IA \u2014 **tu la vends** \u00e0 ceux qui le craignent.",
];

function formatBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[#111] font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function DreamSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Income card — LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Floating robot video behind the card */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-24 lg:-top-32 z-0 w-48 h-48 lg:w-60 lg:h-60"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <LazyVideo
                src="/images/robot-1.mp4"
                className="w-full h-full"
              />
            </motion.div>

            <div className="relative z-10 bg-white rounded-2xl border border-gray-200 shadow-xl p-10 lg:p-12 text-center">
              <div className="text-6xl lg:text-7xl font-black text-[#FF1744] leading-none">
                10 000&euro;
              </div>
              <p className="text-[#6B7280] mt-3 text-sm">
                par mois — objectif atteignable en 90 jours
              </p>

              <div className="flex justify-around mt-10 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#111]">
                    3–5
                  </div>
                  <div className="text-xs text-[#6B7280] mt-1">clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#111]">
                    2K–5K
                  </div>
                  <div className="text-xs text-[#6B7280] mt-1">par client</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#111]">
                    90j
                  </div>
                  <div className="text-xs text-[#6B7280] mt-1">
                    pour y arriver
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side — RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
              La vision
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8">
              Imagine ta vie
              <br />
              dans 90 jours.
            </h2>

            <ul className="space-y-5">
              {dreamPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-[#FF1744] font-bold mt-0.5 flex-shrink-0">
                    &rarr;
                  </span>
                  <span className="text-[#6B7280] leading-relaxed">
                    {formatBold(point)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
