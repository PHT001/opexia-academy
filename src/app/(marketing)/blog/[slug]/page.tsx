import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/blog-articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} | Blog OpexIA`,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Retour au blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] text-white/30 font-medium">{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[12px] text-white/30 font-medium">{article.readTime} de lecture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
              {article.title}
            </h1>
          </div>

          <article
            className="
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-white/90 [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-white/50 [&>p]:leading-relaxed [&>p]:mb-5
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>ul>li]:text-white/50 [&>ul>li]:leading-relaxed
              [&_strong]:text-white [&_strong]:font-semibold
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2
              [&>ol>li]:text-white/50 [&>ol>li]:leading-relaxed
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Tu veux apprendre tout ca ?
            </h2>
            <p className="text-white/40 mb-6 max-w-lg mx-auto">
              OpexIA Academy te forme de A a Z pour lancer ton agence IA et trouver tes premiers clients.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" }}
            >
              Decouvre OpexIA Academy
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
