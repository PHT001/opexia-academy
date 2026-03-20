"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-28 pb-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-12">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744] mb-8">
                <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
                +200 entreprises accompagn&eacute;es en IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-6"
            >
              Lance ton agence IA
              <br />
              et g&eacute;n&egrave;re <span className="text-[#FF1744]">10K&euro;/mois</span> en 90 jours
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 text-lg lg:text-xl text-[#6B7280] max-w-xl mx-auto mb-10 leading-relaxed"
            >
              La formation pas-&agrave;-pas pour ma&icirc;triser l&apos;IA, vendre des services d&apos;automatisation aux PME, et vivre de ton activit&eacute; — m&ecirc;me si tu pars de z&eacute;ro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="relative flex items-center justify-center">
                {/* Floating robot video behind the button */}
                <motion.div
                  className="absolute -top-20 lg:-top-24 z-0 w-36 h-36 lg:w-44 lg:h-44 pointer-events-none"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    maskImage: "radial-gradient(ellipse 65% 65% at center, black 30%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse 65% 65% at center, black 30%, transparent 70%)",
                  }}
                >
                  <video
                    src="/images/coucou.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    style={{ display: 'none' }}
                    onLoadedData={(e) => { (e.target as HTMLVideoElement).style.display = 'block'; }}
                  />
                </motion.div>

                <a
                  href="#pricing"
                  className="relative z-10 group inline-flex items-center justify-center rounded-full bg-[#FF1744] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-xl hover:shadow-red-200"
                >
                  D&eacute;couvrir les formules
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <a href="#testimonials" className="text-[#6B7280] text-sm font-medium hover:text-[#111] transition-colors flex items-center gap-1.5">
                Voir les r&eacute;sultats des &eacute;l&egrave;ves &darr;
              </a>
            </motion.div>

            {/* Social proof mini-stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#6B7280]"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <strong className="text-[#111]">+150</strong> &eacute;l&egrave;ves form&eacute;s
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Premier client en <strong className="text-[#111]">14 jours</strong> en moyenne
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Satisfait ou rembours&eacute; <strong className="text-[#111]">14 jours</strong>
              </span>
            </motion.div>
        </div>

        {/* Founders Badge — 3D Floating Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 lg:mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft shadow underneath */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/10 rounded-full blur-xl" />

            <div
              className="relative inline-flex items-center gap-4 rounded-full px-6 py-3 bg-[#0A0A0A]/70 backdrop-blur-sm border border-white/10"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Inner glass highlight */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>

              <div className="relative flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                  <Image
                    src="/images/founder-marius.png"
                    alt="Marius"
                    width={40}
                    height={40}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                  <Image
                    src="/images/founder-igor.jpg"
                    alt="Igor"
                    width={40}
                    height={40}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative">
                <p className="text-white text-sm font-semibold">
                  Fondé par Marius &amp; Igor
                </p>
                <p className="text-gray-400 text-xs flex items-center gap-1">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Paris, France
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
