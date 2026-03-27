"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogArticles } from "@/lib/blog-articles";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const tagColors: Record<string, string> = {
  "Agence IA": "bg-blue-50 text-blue-600",
  "Guide": "bg-blue-50 text-blue-600",
  "Business": "bg-emerald-50 text-emerald-600",
  "Outils": "bg-purple-50 text-purple-600",
  "Vente": "bg-amber-50 text-amber-600",
  "Automatisation": "bg-rose-50 text-rose-600",
  "Stratégie": "bg-cyan-50 text-cyan-600",
  "PME": "bg-cyan-50 text-cyan-600",
  "Freelance": "bg-violet-50 text-violet-600",
  "Productivité": "bg-lime-50 text-lime-600",
  "Prospection": "bg-orange-50 text-orange-600",
  "Entreprise": "bg-teal-50 text-teal-600",
  "Entrepreneuriat": "bg-indigo-50 text-indigo-600",
  "Comparatif": "bg-fuchsia-50 text-fuchsia-600",
  "Services": "bg-emerald-50 text-emerald-600",
  "Rentabilité": "bg-amber-50 text-amber-600",
  "Technique": "bg-gray-100 text-gray-600",
  "Débutant": "bg-sky-50 text-sky-600",
  "Développement": "bg-purple-50 text-purple-600",
  "n8n": "bg-rose-50 text-rose-600",
  "Opportunité": "bg-yellow-50 text-yellow-600",
};

export default function BlogPage() {
  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF1744]/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF1744]/5 border border-[#FF1744]/10 text-xs text-[#FF1744] font-semibold mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {blogArticles.length} articles
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#111] mb-4">
            Blog Opex<span className="text-[#FF1744]">IA</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ressources &amp; Guides pour lancer et developper ton agence IA
          </p>
        </motion.div>
      </div>

      {/* Featured Article */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] p-8 md:p-12 hover:shadow-2xl hover:shadow-[#FF1744]/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1744]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl group-hover:bg-[#FF1744]/15 transition-all duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/60 font-medium mb-4">
                Article a la une
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-[#FF1744] transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-white/40 text-base md:text-lg max-w-2xl mb-4 leading-relaxed">
                {featured.description}
              </p>
              {featured.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/30">{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-sm text-white/30">{featured.readTime}</span>
                {featured.author && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-sm text-white/30">{featured.author}</span>
                  </>
                )}
                <div className="ml-auto flex items-center gap-2 text-sm font-semibold text-[#FF1744] group-hover:gap-3 transition-all duration-200">
                  Lire
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <motion.div
              key={article.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 h-full"
              >
                {/* Color accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#FF1744] via-[#FF1744]/60 to-transparent" />

                <div className="p-6 flex flex-col min-h-[280px]">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {article.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-gray-50 text-gray-500"}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] text-gray-400 ml-auto">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#111] leading-snug mb-3 group-hover:text-[#FF1744] transition-colors duration-200">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{article.date}</span>
                      {article.author && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-xs text-gray-400">{article.author}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FF1744] group-hover:gap-2.5 transition-all duration-200">
                      Lire
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#FF1744]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#111] mb-3">
              Pret a passer a l&apos;action ?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Rejoins OpexIA Academy et apprends a creer ton agence IA de A a Z.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#FF1744]/20"
              style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
            >
              Voir les offres
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
