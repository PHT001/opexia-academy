"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LazyVideo from "@/components/ui/LazyVideo";

const SCREENSHOTS_ROW1 = [
  "/images/testimonials/screen-01.jpg",
  "/images/testimonials/screen-02.jpg",
  "/images/testimonials/screen-03.jpg",
  "/images/testimonials/screen-04.jpg",
  "/images/testimonials/screen-05.jpg",
];

const SCREENSHOTS_ROW2 = [
  "/images/testimonials/screen-06.jpg",
  "/images/testimonials/screen-07.jpg",
  "/images/testimonials/screen-08.jpg",
  "/images/testimonials/screen-09.jpg",
  "/images/testimonials/screen-10.jpg",
];

function ScreenshotCard({ src, idx }: { src: string; idx: number }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] mx-3">
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
        <Image
          src={src}
          alt={`Retour élève ${idx + 1}`}
          width={640}
          height={1136}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const marquee1 = [...SCREENSHOTS_ROW1, ...SCREENSHOTS_ROW1];
  const marquee2 = [...SCREENSHOTS_ROW2, ...SCREENSHOTS_ROW2];

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            R&eacute;sultats r&eacute;els
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ce que nos &eacute;l&egrave;ves accomplissent
          </h2>
          <p className="mt-3 text-sm text-[#6B7280]">
            Des vrais retours, pas des avis inventés
          </p>
        </motion.div>
      </div>

      {/* Floating robot */}
      <motion.div
        className="flex justify-center -mb-16 relative z-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <LazyVideo
          src="/images/idee.mp4"
          className="w-40 h-40 lg:w-52 lg:h-52"
          style={{ mask: "radial-gradient(circle, black 50%, transparent 75%)", WebkitMask: "radial-gradient(circle, black 50%, transparent 75%)" }}
        />
      </motion.div>

      {/* Row 1 — scrolls right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-right">
          {marquee1.map((src, i) => (
            <ScreenshotCard key={`r1-${i}`} src={src} idx={i % SCREENSHOTS_ROW1.length} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-left">
          {marquee2.map((src, i) => (
            <ScreenshotCard key={`r2-${i}`} src={src} idx={i % SCREENSHOTS_ROW2.length} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-[#9CA3AF] mt-8 px-6">
        Captures d&apos;&eacute;cran r&eacute;elles de nos &eacute;l&egrave;ves. Les r&eacute;sultats individuels peuvent varier.
      </p>

      {/* Founders trust */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center px-6"
      >
        <div className="inline-flex items-center gap-3 bg-[#0A0A0A] rounded-full px-5 py-2.5 max-w-full">
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
    </section>
  );
}
