import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { getArticleBySlug, getAllSlugs, blogArticles } from "@/lib/blog-articles";

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
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author || "Équipe OpexIA"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://opexia-formation.com/blog/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-400 font-medium">Partager :</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/5 transition-all duration-200"
        aria-label="Partager sur Twitter"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:text-[#0077B5] hover:border-[#0077B5]/20 hover:bg-[#0077B5]/5 transition-all duration-200"
        aria-label="Partager sur LinkedIn"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  );
}

function RelatedArticles({ slugs, currentSlug }: { slugs: string[]; currentSlug: string }) {
  const related = slugs
    .filter((s) => s !== currentSlug)
    .map((s) => blogArticles.find((a) => a.slug === s))
    .filter(Boolean)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-[#111] mb-8">Articles similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((article) => (
          <Link
            key={article!.slug}
            href={`/blog/${article!.slug}`}
            className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
          >
            <div className="h-1 bg-gradient-to-r from-[#06B6D4] via-[#06B6D4]/60 to-transparent" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                {article!.tags?.slice(0, 1).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-50 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-[11px] text-gray-400">{article!.readTime}</span>
              </div>
              <h3 className="text-sm font-bold text-[#111] leading-snug mb-2 group-hover:text-[#06B6D4] transition-colors duration-200 line-clamp-2">
                {article!.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                {article!.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
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
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#06B6D4] transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Retour au blog
          </Link>

          <div className="mb-12">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#111]">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="flex items-center gap-3">
                {article.author && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white text-xs font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{article.author}</span>
                  </div>
                )}
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[12px] text-gray-400 font-medium">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[12px] text-gray-400 font-medium">{article.readTime} de lecture</span>
              </div>
              <div className="ml-auto">
                <ShareButtons title={article.title} slug={article.slug} />
              </div>
            </div>

            <div className="w-16 h-1 bg-[#06B6D4] rounded-full mt-6" />
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

          {/* Bottom share */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {article.author && (
                <>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white text-xs font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-500">Par {article.author}</span>
                </>
              )}
            </div>
            <ShareButtons title={article.title} slug={article.slug} />
          </div>

          {/* CTA */}
          <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] p-8 md:p-10 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">
                Pret a lancer ton agence IA ?
              </h2>
              <p className="text-white/50 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Decouvre la formation OpexIA et apprends a creer ton agence IA de A a Z, trouver tes premiers clients et generer des revenus recurrents.
              </p>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#06B6D4]/20"
                style={{ background: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)" }}
              >
                Decouvre la formation OpexIA
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {article.relatedSlugs && article.relatedSlugs.length > 0 && (
            <RelatedArticles slugs={article.relatedSlugs} currentSlug={article.slug} />
          )}
        </div>
      </div>
    </div>
  );
}
