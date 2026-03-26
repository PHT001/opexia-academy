import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
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
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF1744] transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Retour au blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px] text-gray-400 font-medium">{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-[12px] text-gray-400 font-medium">{article.readTime} de lecture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#111]">
              {article.title}
            </h1>
            <div className="w-16 h-1 bg-[#FF1744] rounded-full mt-6" />
          </div>

          <article
            className="
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#111] [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-[#333] [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-[15px]
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>ul>li]:text-gray-600 [&>ul>li]:leading-relaxed [&>ul>li]:text-[15px]
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2
              [&>ol>li]:text-gray-600 [&>ol>li]:leading-relaxed [&>ol>li]:text-[15px]
              [&_strong]:text-[#111] [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
          />

          {/* CTA */}
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF1744]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#111] mb-3">
                Tu veux apprendre tout ca ?
              </h2>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                OpexIA Academy te forme de A a Z pour lancer ton agence IA et trouver tes premiers clients.
              </p>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#FF1744]/20"
                style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
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
    </div>
  );
}
