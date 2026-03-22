import { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import { blogArticles } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Blog OpexIA",
  description:
    "Conseils, tutoriels et actualités sur l'IA. Apprends à lancer et développer ton agence IA.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Blog OpexIA
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Conseils, tutoriels et actualités sur l&apos;IA
          </p>
        </div>
      </ScrollFadeIn>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogArticles.map((article, i) => (
          <ScrollFadeIn key={article.slug} delay={i * 150}>
            <GlassCard className="p-6 flex flex-col h-full">
              <p className="text-xs text-white/40 mb-3">
                {article.date} · {article.readTime}
              </p>
              <h2 className="text-lg font-bold mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                {article.description}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="text-sm font-semibold text-[#E57373] hover:text-white transition-colors"
              >
                Lire l&apos;article &rarr;
              </Link>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
