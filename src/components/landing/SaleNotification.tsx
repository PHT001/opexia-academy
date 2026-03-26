"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getCount(): number {
  const now = new Date();
  const base = now.getDate() + now.getMonth() * 3;
  return 3 + (base % 5); // 3-7
}

export default function SaleNotification() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCount());

    // Show when user scrolls to ~40% of the page
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.3 && !visible) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
        // Auto-hide after 6 seconds
        setTimeout(() => setVisible(false), 6000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-4 z-40"
        >
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-2 shadow-sm border border-gray-100/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <p className="text-[11px] text-gray-500 font-medium">
              {count} inscrits aujourd&apos;hui
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
