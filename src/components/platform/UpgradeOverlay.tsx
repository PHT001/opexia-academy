"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface UpgradeOverlayProps {
  featureName: string;
  featureDescription: string;
  children: React.ReactNode;
}

export default function UpgradeOverlay({
  featureName,
  featureDescription,
  children,
}: UpgradeOverlayProps) {
  return (
    <div className="relative overflow-hidden min-h-[60vh]">
      {/* Blurred content behind */}
      <div className="pointer-events-none blur-sm opacity-40 select-none">
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-white/80 to-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto px-6"
        >
          {/* Lock icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-[#111] mb-2">{featureName}</h2>
          <p className="text-[#6B7280] mb-8">{featureDescription}</p>

          <Link
            href="/offres"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
              boxShadow: "0 4px 14px rgba(6,182,212,0.3)",
            }}
          >
            Voir les offres
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <p className="mt-4 text-xs text-[#9CA3AF]">
            Disponible avec les formules Standard ou Accompagnement
          </p>
        </motion.div>
      </div>
    </div>
  );
}
