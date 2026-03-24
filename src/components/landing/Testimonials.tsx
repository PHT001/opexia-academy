"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SCREENSHOTS_PAGE1 = [
  "/images/testimonials/screen-01.jpg",
  "/images/testimonials/screen-02.jpg",
  "/images/testimonials/screen-03.jpg",
  "/images/testimonials/screen-04.jpg",
  "/images/testimonials/screen-05.jpg",
];

const SCREENSHOTS_PAGE2 = [
  "/images/testimonials/screen-06.jpg",
  "/images/testimonials/screen-07.jpg",
  "/images/testimonials/screen-08.jpg",
  "/images/testimonials/screen-09.jpg",
  "/images/testimonials/screen-10.jpg",
];

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  const current = showMore ? SCREENSHOTS_PAGE2 : SCREENSHOTS_PAGE1;

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        {/* 5 screenshots grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showMore ? "page2" : "page1"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {current.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Retour élève ${showMore ? i + 6 : i + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Toggle button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-sm font-semibold text-[#111] hover:border-[#FF1744] hover:text-[#FF1744] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {showMore ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Retour
              </>
            ) : (
              <>
                Voir plus de retours
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </>
            )}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#9CA3AF] mt-6">
          Captures d&apos;&eacute;cran r&eacute;elles de nos &eacute;l&egrave;ves. Les r&eacute;sultats individuels peuvent varier.
        </p>

        {/* Founders trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#0A0A0A] rounded-full px-5 py-2.5">
            <div className="flex -space-x-2 flex-shrink-0">
              <div className="h-8 w-8 rounded-full border-2 border-[#333] overflow-hidden">
                <Image src="/images/founder-marius.png" alt="Marius" width={32} height={32} className="h-full w-full object-cover" />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-[#333] overflow-hidden">
                <Image src="/images/founder-igor.jpg" alt="Igor" width={32} height={32} className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
              &ldquo;L&apos;IA accessible &agrave; tous.&rdquo;
              <span className="text-gray-400 text-xs ml-2">&mdash; Marius &amp; Igor</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
