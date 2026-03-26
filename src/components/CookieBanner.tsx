"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so the banner animates in after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  // Don't render anything once dismissed (or if consent already stored)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const consent = localStorage.getItem(STORAGE_KEY);
  if (consent) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-4 pb-4 pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
      }}
    >
      <div
        className="pointer-events-auto w-full max-w-lg rounded-2xl border border-white/10 bg-[#141118]/95 p-5 shadow-2xl backdrop-blur-md"
      >
        <h3 className="text-base font-semibold text-white mb-1.5">
          Ce site utilise des cookies
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Nous utilisons Plausible Analytics (sans cookies) pour analyser le
          trafic. En continuant, tu acceptes notre{" "}
          <Link
            href="/confidentialite"
            className="underline underline-offset-2 text-white hover:text-red-400 transition-colors"
          >
            politique de confidentialit&eacute;
          </Link>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#141118]"
          >
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="flex-1 rounded-xl border border-white/20 bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#141118]"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
