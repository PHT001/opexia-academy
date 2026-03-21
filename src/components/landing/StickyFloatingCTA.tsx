"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyFloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile floating button */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: [0, -5, 0], opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.4 },
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
          >
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-[#FF1744] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_4px_rgba(255,23,68,0.35),0_0_40px_8px_rgba(255,23,68,0.15)]"
            >
              Voir les tarifs
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sticky bar */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 hidden md:block"
          >
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border-t border-white/10">
              <div className="mx-auto max-w-7xl px-8 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-white font-semibold text-sm">
                    OpexIA Academy
                  </span>
                  <span className="text-gray-400 text-sm hidden lg:inline">
                    Formation compl&egrave;te &mdash;{" "}
                    <span className="line-through text-gray-500">697&euro;</span>{" "}
                    <span className="text-[#FF1744] font-bold">397&euro;</span>{" "}
                    &mdash; ou 3x 139&euro; sans frais
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Garantie 14 jours
                  </span>
                </div>
                <a
                  href="#pricing"
                  className="inline-flex items-center rounded-full bg-[#FF1744] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-900/30"
                >
                  Rejoindre maintenant
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
