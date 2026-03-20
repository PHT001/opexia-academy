"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to email service (Mailchimp, Resend, etc.)
    setSubmitted(true);
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
                  Check tes mails ! Le guide arrive dans 2 min.
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
                  className="rounded-full bg-[#FF1744] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200 whitespace-nowrap"
                >
                  Recevoir le guide
                </button>
              </form>
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
