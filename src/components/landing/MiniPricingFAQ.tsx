"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const miniFaqs = [
  {
    q: "Comment fonctionne la garantie ?",
    a: "C\u2019est simple : si tu n\u2019es pas satisfait dans les 14 jours suivant ton achat, on te rembourse int\u00e9gralement, sans poser de questions. Z\u00e9ro risque.",
  },
  {
    q: "Je suis d\u00e9butant, c\u2019est pour moi ?",
    a: "Oui, absolument. La formation est con\u00e7ue pour les d\u00e9butants complets. On utilise des outils no-code et m\u00eame si tu n\u2019as jamais touch\u00e9 \u00e0 l\u2019IA, tu seras guid\u00e9 pas-\u00e0-pas.",
  },
  {
    q: "Je peux payer en plusieurs fois ?",
    a: "Oui ! L\u2019Academy est payable en 3x 139\u20ac sans frais. Le One-to-One en 4x 999\u20ac sans frais. Paiement 100% s\u00e9curis\u00e9.",
  },
];

function MiniItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm lg:text-base font-semibold text-[#111] pr-6 group-hover:text-[#FF1744] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-[#FF1744] text-white rotate-45"
              : "bg-gray-100 text-[#6B7280]"
          }`}
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-[#6B7280] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MiniPricingFAQ() {
  return (
    <section className="py-10 lg:py-14 bg-[#F8F9FA]">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-6">
          Questions rapides
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 px-6">
          {miniFaqs.map((faq) => (
            <MiniItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
