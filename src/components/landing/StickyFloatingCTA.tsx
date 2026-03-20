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
            Rejoindre maintenant
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
