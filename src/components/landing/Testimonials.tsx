"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const MOBILE_VISIBLE = 4;
const COLLAPSED_HEIGHT_DESKTOP = 780;

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const handleExpand = () => setExpanded(true);

  const handleCollapse = () => {
    const section = document.getElementById("testimonials");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setExpanded(false), 400);
  };

  const COLLAPSED_HEIGHT_MOBILE = 580;

  return (
    <>
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

          {/* Preload all images so "voir plus" is instant */}
          <div className="hidden">
            {ALL_SCREENSHOTS.map((src) => (
              <Image key={`preload-${src}`} src={src} alt="" width={400} height={600} loading="eager" />
            ))}
          </div>

          {/* Mobile/Tablet: masonry 2 columns with max-height clip (same as desktop) */}
          <div className="lg:hidden relative">
            <motion.div
              animate={{ maxHeight: expanded ? 5000 : COLLAPSED_HEIGHT_MOBILE }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="columns-2 gap-2.5">
                {ALL_SCREENSHOTS.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="mb-2.5 break-inside-avoid cursor-pointer"
                    onClick={() => setLightbox(src)}
                  >
                    <div className="rounded-xl overflow-hidden shadow-md active:scale-95 transition-transform">
                      <Image src={src} alt={`Retour ${i + 1}`} width={400} height={600} sizes="50vw" className="w-full h-auto block" loading="eager" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blur overlay when collapsed */}
            {!expanded && (
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none backdrop-blur-[2px]"
                style={{
                  background: "linear-gradient(to top, #F8F9FA 10%, rgba(248,249,250,0.8) 40%, rgba(248,249,250,0) 100%)",
                }}
              />
            )}

            {/* Button */}
            <div className={`flex justify-center ${expanded ? "mt-4" : "-mt-4 relative z-10"}`}>
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
                    className="mb-3 break-inside-avoid cursor-pointer"
                    onClick={() => setLightbox(src)}
                  >
                    <div className="rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <Image src={src} alt={`Retour ${i + 1}`} width={400} height={600} sizes="(min-width: 1024px) 33vw, 50vw" className="w-full h-auto block" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blur overlay when collapsed */}
            {!expanded && (
              <div
                className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none backdrop-blur-[2px]"
                style={{
                  background: "linear-gradient(to top, #F8F9FA 10%, rgba(248,249,250,0.8) 40%, rgba(248,249,250,0) 100%)",
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-md w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src={lightbox} alt="Retour" width={800} height={1200} sizes="100vw" className="w-full h-auto block" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
