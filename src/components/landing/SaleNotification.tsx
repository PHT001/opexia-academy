"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { name: "Thomas D.", city: "Paris", plan: "Academy", time: "il y a 3 min" },
  { name: "Sarah M.", city: "Lyon", plan: "Starter", time: "il y a 7 min" },
  { name: "Marc L.", city: "Bordeaux", plan: "Academy", time: "il y a 12 min" },
  { name: "Julie R.", city: "Marseille", plan: "One-to-One", time: "il y a 18 min" },
  { name: "Camille P.", city: "Toulouse", plan: "Academy", time: "il y a 23 min" },
  { name: "Yassine B.", city: "Lille", plan: "Academy", time: "il y a 31 min" },
  { name: "Antoine F.", city: "Nantes", plan: "Starter", time: "il y a 45 min" },
  { name: "Hugo M.", city: "Strasbourg", plan: "Academy", time: "il y a 1h" },
];

export default function SaleNotification() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // First notification after 25 seconds
    const firstTimer = setTimeout(() => {
      setVisible(true);
      // Hide after 4s
      setTimeout(() => setVisible(false), 4000);
    }, 25000);

    // Subsequent notifications every 30-60s
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 35000 + Math.random() * 25000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const notif = notifications[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-24 md:bottom-6 left-4 z-40 max-w-xs"
        >
          <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 shadow-lg px-4 py-3">
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${
                  notif.plan === "Academy"
                    ? "#FF1744, #D50000"
                    : notif.plan === "One-to-One"
                    ? "#7C3AED, #4F46E5"
                    : "#111, #333"
                })`,
              }}
            >
              {notif.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#111] truncate">
                {notif.name} <span className="font-normal text-[#6B7280]">({notif.city})</span>
              </p>
              <p className="text-xs text-[#6B7280]">
                A rejoint <span className="font-medium text-[#FF1744]">{notif.plan}</span> &middot; {notif.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
