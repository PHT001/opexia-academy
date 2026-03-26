"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ALL_SCREENSHOTS = [
  "/images/testimonials/screen-02.jpg",
  "/images/testimonials/screen-03.jpg",
  "/images/testimonials/screen-05.jpg",
  "/images/testimonials/screen-01.jpg",
  "/images/testimonials/screen-04.jpg",
  "/images/testimonials/screen-07.jpg",
  "/images/testimonials/screen-06.jpg",
  "/images/testimonials/screen-08.jpg",
  "/images/testimonials/screen-09.jpg",
  "/images/testimonials/screen-10.jpg",
];

const MOBILE_VISIBLE = 5;
const COLLAPSED_HEIGHT_DESKTOP = 780;

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(true);

  const handleCollapse = () => {
    const section = document.getElementById("testimonials");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setExpanded(false), 400);
  };

  const mobileScreenshots = expanded ? ALL_SCREENSHOTS : ALL_SCREENSHOTS.slice(0, MOBILE_VISIBLE);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            R&eacute;sultats r&eacute;els
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111]">
            Ce que nos &eacute;l&egrave;ves accomplissent
          </h2>
          <p className="mt-3 text-sm text-[#6B7280]">
            Des vrais retours, pas des avis invent&eacute;s
          </p>
        </motion.div>

        {/* Mobile/Tablet: masonry 2 columns with voir plus */}
        <div className="lg:hidden relative">
          <div className="columns-2 gap-3">
            {mobileScreenshots.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="mb-3 break-inside-avoid"
              >
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image src={src} alt={`Retour élève ${i + 1}`} width={400} height={600} sizes="50vw" className="w-full h-auto block" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade overlay when collapsed */}
          {!expanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #F8F9FA 0%, rgba(248,249,250,0.6) 50%, transparent 100%)",
              }}
            />
          )}

          {/* Button */}
          <div className={`flex justify-center ${expanded ? "mt-6" : "-mt-6 relative z-10"}`}>
            <button
              onClick={expanded ? handleCollapse : handleExpand}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 ${
                expanded
                  ? "border border-gray-200 bg-white text-[#111] hover:border-[#FF1744] hover:text-[#FF1744]"
                  : "bg-[#111] text-white hover:bg-[#FF1744]"
              }`}
            >
              {expanded ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  Voir moins
                </>
              ) : (
                <>
                  Voir plus de retours
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Desktop: masonry 3 columns with max-height clip */}
        <div className="hidden lg:block relative">
          <motion.div
            animate={{ maxHeight: expanded ? 5000 : COLLAPSED_HEIGHT_DESKTOP }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="columns-3 gap-3" style={{ columnFill: "balance" }}>
              {ALL_SCREENSHOTS.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="mb-3 break-inside-avoid"
                >
                  <div className="rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <Image src={src} alt={`Retour élève ${i + 1}`} width={400} height={600} sizes="(min-width: 1024px) 33vw, 50vw" className="w-full h-auto block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gradient fade overlay when collapsed */}
          {!expanded && (
            <div
              className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none backdrop-blur-[2px]"
              style={{
                background: "linear-gradient(to top, #F8F9FA 0%, rgba(248,249,250,0.6) 50%, transparent 100%)",
              }}
            />
          )}

          {/* Button */}
          <div className={`flex justify-center ${expanded ? "mt-8" : "-mt-8 relative z-10"}`}>
            <button
              onClick={expanded ? handleCollapse : handleExpand}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 ${
                expanded
                  ? "border border-gray-200 bg-white text-[#111] hover:border-[#FF1744] hover:text-[#FF1744]"
                  : "bg-[#111] text-white hover:bg-[#FF1744]"
              }`}
            >
              {expanded ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  Voir moins
                </>
              ) : (
                <>
                  Voir plus de retours
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
