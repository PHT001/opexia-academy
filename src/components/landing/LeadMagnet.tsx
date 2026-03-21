"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de l'inscription");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Erreur de connexion. Reessaye.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8 lg:p-12 text-center overflow-hidden"
        >
          {/* Subtle red glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#FF1744]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Gift box animation */}
            <motion.div
              className="mx-auto mb-6 w-16 h-16 relative"
              initial={{ scale: 0, y: 10 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
            >
              {/* Lid that lifts */}
              <motion.div
                className="absolute top-0 left-0 right-0 z-10"
                animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Lid */}
                <div className="h-5 bg-[#FF1744] rounded-t-lg relative mx-[-4px]">
                  {/* Ribbon on lid */}
                  <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
                    <div className="w-3 bg-[#FFD54F]" />
                  </div>
                  {/* Bow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center">
                    <div className="w-3.5 h-3 bg-[#FFD54F] rounded-full -mr-0.5" />
                    <div className="w-2 h-2 bg-[#FFC107] rounded-full z-10" />
                    <div className="w-3.5 h-3 bg-[#FFD54F] rounded-full -ml-0.5" />
                  </div>
                </div>
              </motion.div>
              {/* Box body */}
              <div className="absolute bottom-0 left-0 right-0 h-11 bg-[#FF5252] rounded-b-lg overflow-hidden">
                {/* Ribbon on box */}
                <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
                  <div className="w-3 bg-[#FFD54F]" />
                </div>
              </div>
              {/* Sparkles */}
              <motion.span
                className="absolute -top-3 -right-2 text-[#FFD54F] text-xs"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >&#10022;</motion.span>
              <motion.span
                className="absolute -top-1 -left-3 text-[#FF1744] text-[10px]"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >&#10022;</motion.span>
              <motion.span
                className="absolute bottom-1 -right-3 text-[#FF8A65] text-[8px]"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >&#10022;</motion.span>
            </motion.div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744] mb-6">
              Gratuit
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Les 5 services IA les plus demand&eacute;s en 2026
            </h3>
            <p className="text-[#6B7280] text-sm sm:text-base mb-8 max-w-md mx-auto">
              Re&ccedil;ois le guide gratuit avec les prix, les outils, et comment d&eacute;crocher tes premiers clients.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Merci ! Tu seras notifi&eacute; d&egrave;s que le guide est disponible.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ton email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full border border-gray-200 px-5 py-3 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#FF1744] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi..." : "Recevoir le guide"}
                </button>
              </form>
            )}

            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}

            <p className="mt-4 text-xs text-gray-400">
              Pas de spam. D&eacute;sinscription en un clic.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
