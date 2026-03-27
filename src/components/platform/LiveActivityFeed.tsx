"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------------------------
// French first names pool
// ---------------------------------------------------------------------------

const FIRST_NAMES = [
  "Thomas", "Sarah", "Marc", "Julie", "Lucas", "Emma", "Hugo", "Léa",
  "Nathan", "Chloé", "Enzo", "Manon", "Louis", "Camille", "Raphaël",
  "Inès", "Arthur", "Jade", "Jules", "Zoé", "Adam", "Alice", "Théo",
  "Lina", "Gabriel", "Louise", "Ethan", "Clara", "Noah", "Ambre",
];

// ---------------------------------------------------------------------------
// Message templates — {name} is replaced at runtime
// ---------------------------------------------------------------------------

const MESSAGE_TEMPLATES = [
  { text: "{name} vient de terminer le Module 3 \uD83C\uDF93", icon: "\uD83C\uDF93" },
  { text: "{name} a sign\u00e9 son premier client ! \uD83C\uDF89", icon: "\uD83C\uDF89" },
  { text: "{count} personnes suivent la formation en ce moment", icon: "\uD83D\uDC65" },
  { text: "{name} vient de s\u2019inscrire \u00e0 l\u2019Academy", icon: "\uD83D\uDE80" },
  { text: "{name} a gagn\u00e9 {xp} XP aujourd\u2019hui", icon: "\u26A1" },
  { text: "{name} vient de compl\u00e9ter un quiz avec 100% \uD83C\uDFC6", icon: "\uD83C\uDFC6" },
  { text: "{name} a d\u00e9bloqu\u00e9 le badge \u00abPremier Module\u00bb \u2B50", icon: "\u2B50" },
  { text: "{name} a rejoint la communaut\u00e9 Discord", icon: "\uD83D\uDCAC" },
];

function getRandomName(): string {
  return FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
}

function getRandomMessage(): string {
  const tpl = MESSAGE_TEMPLATES[Math.floor(Math.random() * MESSAGE_TEMPLATES.length)];
  return tpl.text
    .replace("{name}", getRandomName())
    .replace("{count}", String(Math.floor(Math.random() * 15) + 8))
    .replace("{xp}", String(Math.floor(Math.random() * 4) * 50 + 50));
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function LiveActivityFeed() {
  const [notification, setNotification] = useState<{ id: number; message: string } | null>(null);
  const [counter, setCounter] = useState(0);

  const showNext = useCallback(() => {
    const id = Date.now();
    setNotification({ id, message: getRandomMessage() });
    setCounter((c) => c + 1);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setNotification((prev) => (prev?.id === id ? null : prev));
    }, 5000);
  }, []);

  useEffect(() => {
    // Show first notification after a short delay
    const initialTimeout = setTimeout(showNext, 3000);

    // Then rotate every 8-10 seconds
    const interval = setInterval(() => {
      showNext();
    }, 8000 + Math.random() * 2000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 100,
        left: 24,
        zIndex: 40,
        pointerEvents: "none",
        maxWidth: 340,
      }}
    >
      <AnimatePresence mode="wait">
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 10, x: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              borderRadius: 14,
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              pointerEvents: "auto",
              cursor: "default",
            }}
          >
            {/* Pulsing green dot */}
            <span
              style={{
                flexShrink: 0,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 6px rgba(34,197,94,0.5)",
              }}
            />
            <span
              style={{
                fontSize: 13,
                lineHeight: 1.4,
                color: "#374151",
                fontWeight: 500,
              }}
            >
              {notification.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
