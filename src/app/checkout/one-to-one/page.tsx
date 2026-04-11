"use client";

import { useEffect, useState } from "react";

export default function OneToOneCheckout() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: "one_to_one", guest: true }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        } else {
          setError(data.error || "Erreur lors de la creation du paiement");
          setLoading(false);
        }
      })
      .catch(() => {
        setError("Erreur de connexion");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #1A1A2E 100%)" }}>
      <div className="text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-3xl font-bold tracking-tight">
            <span className="text-white">Opex</span>
            <span className="text-[#FF1744]">IA</span>
          </span>
        </div>

        {loading && !error ? (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 mx-auto border-3 border-white/20 border-t-[#8B5CF6] rounded-full animate-spin" />
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">
              Accompagnement One-to-One
            </h1>
            <p className="text-sm text-white/50">
              Redirection vers le paiement securise...
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
              <span className="text-2xl font-bold text-[#8B5CF6]">2 497 &euro;</span>
              <span className="text-xs text-white/40">TTC</span>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 w-12 h-12 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">Erreur</h1>
            <p className="text-sm text-white/50 mb-6">{error}</p>
            <button
              onClick={() => { setError(""); setLoading(true); window.location.reload(); }}
              className="px-6 py-3 bg-[#8B5CF6] text-white rounded-xl text-sm font-semibold hover:bg-[#7C3AED] transition-colors"
            >
              Reessayer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
