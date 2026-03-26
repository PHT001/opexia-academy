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
          className="fixed bottom-20 left-4 z-40"
        >
          <div className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 shadow-md border border-gray-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="text-xs text-gray-600 font-semibold">
              {count} nouveaux inscrits hier
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
