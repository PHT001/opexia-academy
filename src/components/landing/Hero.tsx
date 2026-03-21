"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NextImage from "next/image";

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
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
              La comp&eacute;tence qui va valoir de l&apos;or en 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-4"
          >
            Lance ton agence IA
            <br />
            et g&eacute;n&egrave;re <span className="text-[#FF1744]">10K&euro;/mois</span> en 90 jours
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 text-base lg:text-lg text-[#6B7280] max-w-md mx-auto mb-8 leading-relaxed"
          >
            Ma&icirc;trise l&apos;IA, vends des services d&apos;automatisation aux PME, et vis de ton activit&eacute; — m&ecirc;me en partant de z&eacute;ro.
          </motion.p>

          {/* Social proof — avatars + rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-2.5 mb-6"
          >
            <NextImage
              src="/images/customers.webp"
              alt="Clients"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm text-[#111] font-medium">
              <strong>4.7</strong>/5 par <strong>+50 clients</strong>
            </span>
            <NextImage
              src="/images/blue-badge.svg"
              alt="V&eacute;rifi&eacute;"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative flex items-center justify-center mt-6">
              {/* Floating robot video behind the button */}
              <motion.div
                className="absolute -top-16 lg:-top-20 z-0 w-36 h-36 lg:w-44 lg:h-44 pointer-events-none"
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
                />
              </motion.div>

              <a
                href="#pricing"
                className="relative z-10 group inline-flex items-center justify-center rounded-full bg-[#1E88E5] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1565C0] hover:shadow-xl hover:shadow-blue-200"
              >
                Commencer maintenant
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

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-4 sm:gap-6 text-[11px] sm:text-sm text-[#9CA3AF]"
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Paiement s&eacute;curis&eacute;
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Satisfait ou rembours&eacute;
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Acc&egrave;s imm&eacute;diat
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
                  Fond&eacute; par Marius &amp; Igor
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
