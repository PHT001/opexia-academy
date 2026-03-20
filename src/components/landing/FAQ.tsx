"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Est-ce que j\u2019ai besoin de savoir coder ?",
    a: "Non, absolument pas. La formation est con\u00e7ue pour les d\u00e9butants complets. On utilise des outils no-code comme Make et n8n, et m\u00eame Claude Code pour vibe coder : tu d\u00e9cris ce que tu veux, l\u2019IA code pour toi. Si tu sais utiliser un ordinateur, tu peux construire des services IA pro.",
  },
  {
    q: "Combien de temps faut-il pour voir des r\u00e9sultats ?",
    a: "La formation dure 4 semaines. La plupart de nos \u00e9l\u00e8ves signent leur premier client entre la semaine 2 et la semaine 4. En moyenne, 14 jours suffisent pour d\u00e9crocher un premier contrat gr\u00e2ce aux scripts et templates fournis.",
  },
  {
    q: "C\u2019est quoi la diff\u00e9rence entre Starter, Academy et One-to-One ?",
    a: "Le Starter \u00e0 47\u20ac te donne les guides PDF et templates pour comprendre l\u2019IA. L\u2019Academy \u00e0 397\u20ac (ou 3x139\u20ac), c\u2019est la formation compl\u00e8te avec 100+ le\u00e7ons, la plateforme interactive, l\u2019assistant IA, le CRM, et tout ce qu\u2019il faut pour lancer ton agence. Le One-to-One \u00e0 3 997\u20ac (ou 4x999\u20ac), c\u2019est l\u2019accompagnement premium avec 8 visios individuelles et un suivi personnalis\u00e9 avec Marius & Igor.",
  },
  {
    q: "Est-ce que je peux payer en plusieurs fois ?",
    a: "Oui ! L\u2019Academy est payable en 3x139\u20ac sans frais, et le One-to-One en 4x999\u20ac sans frais. Le Starter est \u00e0 47\u20ac en une seule fois. Tous les paiements sont s\u00e9curis\u00e9s.",
  },
  {
    q: "Est-ce que je peux faire \u00e7a en parall\u00e8le de mon travail ?",
    a: "Oui, la formation est 100% en ligne et accessible \u00e0 ton rythme. Compte environ 1 \u00e0 2 heures par jour. Les le\u00e7ons sont courtes et actionnables. Tu peux avancer le soir ou le week-end.",
  },
  {
    q: "Le march\u00e9 n\u2019est-il pas d\u00e9j\u00e0 satur\u00e9 ?",
    a: "Moins de 3% des PME europ\u00e9ennes ont d\u00e9j\u00e0 adopt\u00e9 de vraies automatisations IA. Le march\u00e9 est en pleine explosion. Ce n\u2019est pas satur\u00e9 \u2014 c\u2019est vierge. Et les agences IA s\u00e9rieuses sont rarissimes.",
  },
  {
    q: "10K\u20ac/mois, c\u2019est r\u00e9aliste ?",
    a: "Avec les bons outils et la bonne approche, oui. Un chatbot se facture 800-2 500\u20ac, une automatisation business 500-2 000\u20ac, un agent IA 1 500-5 000\u20ac. Il suffit de 3 \u00e0 5 clients par mois pour d\u00e9passer les 10K\u20ac. La formation te montre exactement comment y arriver.",
  },
  {
    q: "C\u2019est pas un scam / une arnaque ?",
    a: "On comprend la m\u00e9fiance \u2014 il y a beaucoup de formations bidon sur le march\u00e9. OpexIA est une vraie agence IA qui a accompagn\u00e9 +200 entreprises. On ne vend pas du r\u00eave : on te donne les outils, la m\u00e9thode, et le support pour lancer. Et si \u00e7a ne te convient pas, tu es rembours\u00e9 sous 14 jours, sans condition.",
  },
  {
    q: "Comment fonctionne la garantie ?",
    a: "C\u2019est simple : si tu n\u2019es pas satisfait dans les 14 jours suivant ton achat, on te rembourse int\u00e9gralement, sans poser de questions. Z\u00e9ro risque.",
  },
  {
    q: "Y a-t-il un support si je suis bloqu\u00e9 ?",
    a: "Oui. Tu as acc\u00e8s au Discord communautaire avec +150 entrepreneurs (toutes les offres), \u00e0 l\u2019assistant IA int\u00e9gr\u00e9 (Academy), et au support prioritaire illimit\u00e9 avec review de tes projets (One-to-One). Tu n\u2019es jamais seul.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-semibold text-[#111] pr-8 group-hover:text-[#FF1744] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-[#FF1744] text-white rotate-45"
              : "bg-gray-100 text-[#6B7280]"
          }`}
        >
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
              d="M12 4v16m8-8H4"
            />
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
            <p className="pb-6 text-[#6B7280] leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
