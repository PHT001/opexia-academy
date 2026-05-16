"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Est-ce que j\u2019ai besoin de savoir coder ?",
    a: "Non, absolument pas. La formation est con\u00e7ue pour les d\u00e9butants complets. On utilise m\u00eame Claude Code pour vibe coder : tu d\u00e9cris ce que tu veux, l\u2019IA code pour toi. Si tu sais utiliser un ordinateur, tu peux construire des services IA pro.",
  },
  {
    q: "Combien de temps faut-il pour voir des r\u00e9sultats ?",
    a: "La formation comprend 6 phases compl\u00e8tes, \u00e0 suivre \u00e0 ton rythme. La plupart de nos \u00e9l\u00e8ves signent leur premier client rapidement. En moyenne, 14 jours suffisent pour d\u00e9crocher un premier contrat gr\u00e2ce aux scripts et templates fournis.",
  },
  {
    q: "Standard mensuel ou Lifetime \u00b7 qu\u2019est-ce qui change ?",
    a: "Standard mensuel \u00b7 89\u20ac/mois, acc\u00e8s complet \u00e0 la plateforme (23 modules, 111 le\u00e7ons), 1 appel offert par mois avec Marius (30 min). Sans engagement, annulation en 1 clic. Lifetime \u00b7 697\u20ac une fois, m\u00eame acc\u00e8s complet + mises \u00e0 jour \u00e0 vie + 3 appels offerts en bonus au d\u00e9marrage. Aucun renouvellement. L\u2019exp\u00e9rience plateforme est identique \u00b7 seule la dur\u00e9e et les bonus changent.",
  },
  {
    q: "Est-ce qu\u2019il y a un Accompagnement One-to-One ?",
    a: "Oui \u00b7 l\u2019Accompagnement One-to-One inclut tout le pack Lifetime + sessions 1-on-1 hebdomadaires avec Marius jusqu\u2019\u00e0 ton 1er client sign\u00e9, review MVP en perso \u00e0 chaque module, acc\u00e8s WhatsApp illimit\u00e9, et garantie 1er client en 90 jours. Tarif sur mesure \u00b7 r\u00e9serve un appel WhatsApp pour en discuter.",
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
    a: "Avec les bons outils et la bonne approche, oui. Un chatbot se facture 200-1 000\u20ac, une automatisation business 500-2 000\u20ac, un agent IA 1 500-5 000\u20ac. Il suffit de quelques clients par mois pour g\u00e9n\u00e9rer un revenu solide. La formation te montre exactement comment y arriver.",
  },
  {
    q: "Comment fonctionne la garantie ?",
    a: "Tu as 14 jours pour tester. Si apr\u00e8s avoir compl\u00e9t\u00e9 au moins 80% de la formation et fait au moins un appel bilan avec notre \u00e9quipe tu n\u2019es toujours pas convaincu, on te rembourse int\u00e9gralement. On veut que tu r\u00e9ussisses, pas juste que tu paies. D\u00e9tails dans nos CGU.",
  },
  {
    q: "Y a-t-il un support si je suis bloqu\u00e9 ?",
    a: "Oui. Tu as acc\u00e8s au Discord communautaire (toutes les offres), \u00e0 l\u2019aide rapide int\u00e9gr\u00e9e (Standard et Lifetime), et au support prioritaire illimit\u00e9 avec review de tes projets (Accompagnement One-to-One). Tu n\u2019es jamais seul.",
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
        <span className="text-base lg:text-lg font-semibold text-[#111] pr-8 group-hover:text-[#06B6D4] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-[#06B6D4] text-white rotate-45"
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
          <span className="text-sm font-semibold text-[#06B6D4] uppercase tracking-wider">
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
