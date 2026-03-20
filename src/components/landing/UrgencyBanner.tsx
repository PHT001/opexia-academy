"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        exit={{ y: -40 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#FF1744] text-white text-center py-2 px-4"
      >
        <div className="flex items-center justify-center gap-3 text-sm font-medium">
          <span className="hidden sm:inline">&#127891;</span>
          <span>
            Nouveau &mdash; <strong>Formation IA + CRM + Outils</strong> inclus dans chaque acc&egrave;s
          </span>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold hover:bg-white/30 transition-colors"
          >
            D&eacute;couvrir &rarr;
          </a>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
