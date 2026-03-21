"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[OpexIA] Erreur globale :", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center">
              <span className="text-white font-black text-lg">O</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              OpexIA Academy
            </span>
          </div>
        </div>

        {/* Error message */}
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          Quelque chose s&apos;est mal passé. Réessaie ou retourne au dashboard.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Réessayer
          </button>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 text-sm font-semibold rounded-xl transition-colors"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
