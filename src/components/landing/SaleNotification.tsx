"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SaleNotification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 20s of browsing
    const timer = setTimeout(() => setVisible(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-20 md:bottom-6 lg:bottom-6 left-4 z-40"
        >
          <div className="flex items-center gap-3 bg-[#0A0A0A] rounded-full pl-4 pr-5 py-2.5 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#FF1744]/10">
              <svg className="h-4 w-4 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">
                +20 membres ont rejoint récemment
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="ml-1 text-white/30 hover:text-white/60 transition-colors"
              aria-label="Fermer"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
