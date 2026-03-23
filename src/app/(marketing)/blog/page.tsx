import { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Blog OpexIA | Conseils IA & Agence",
  description:
    "Conseils, tutoriels et actualités sur l'IA. Apprends à lancer et développer ton agence IA.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero */}
      <div className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs text-white/50 font-medium mb-6">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF1744]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          {blogArticles.length} articles
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Blog Opex<span className="text-[#FF1744]">IA</span>
        </h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Conseils, tutoriels et strategies pour lancer ton agence IA
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Gradient accent top */}
              <div className="h-1 bg-gradient-to-r from-[#FF1744] to-[#FF1744]/30" />

              <div className="p-6 flex flex-col min-h-[240px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] text-white/30 font-medium">
                    {article.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[11px] text-white/30 font-medium">
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-[#FF1744] transition-colors duration-200">
                  {article.title}
                </h2>

                <p className="text-sm text-white/35 leading-relaxed flex-1 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-[#FF1744] group-hover:gap-3 transition-all duration-200">
                  Lire l&apos;article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Pret a passer a l&apos;action ?
          </h2>
          <p className="text-white/40 mb-6 max-w-md mx-auto">
            Rejoins OpexIA Academy et apprends a creer ton agence IA de A a Z.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" }}
          >
            Voir les offres
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
