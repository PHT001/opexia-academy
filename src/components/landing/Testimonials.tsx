"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SCREENSHOTS = [
  "/images/testimonials/screen-01.jpg",
  "/images/testimonials/screen-02.jpg",
  "/images/testimonials/screen-03.jpg",
  "/images/testimonials/screen-04.jpg",
  "/images/testimonials/screen-05.jpg",
  "/images/testimonials/screen-06.jpg",
  "/images/testimonials/screen-07.jpg",
  "/images/testimonials/screen-08.jpg",
  "/images/testimonials/screen-09.jpg",
  "/images/testimonials/screen-10.jpg",
];

// Split into 5 columns for masonry layout
const COLUMNS = [
  [SCREENSHOTS[0], SCREENSHOTS[5]],
  [SCREENSHOTS[1], SCREENSHOTS[6]],
  [SCREENSHOTS[2], SCREENSHOTS[7]],
  [SCREENSHOTS[3], SCREENSHOTS[8]],
  [SCREENSHOTS[4], SCREENSHOTS[9]],
];

export default function Testimonials() {
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

        {/* Masonry grid — 5 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="columns-2 sm:columns-3 lg:columns-5 gap-3 space-y-3">
          {SCREENSHOTS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Retour élève ${i + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#9CA3AF] mt-8">
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
