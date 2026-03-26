"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getCount(): number {
  const now = new Date();
  const base = now.getDate() + now.getMonth() * 3;
  return 5 + (base % 8); // 5-12
}

export default function SaleNotification() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCount());

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-20 left-4 z-40"
        >
          <div className="flex items-center gap-2.5 bg-white rounded-full pl-4 pr-2 py-2 shadow-md border border-gray-200">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="text-xs text-gray-600 font-semibold">
              {count} nouveaux inscrits hier
            </p>
            <button
              onClick={() => setDismissed(true)}
              className="ml-1 w-5 h-5 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
