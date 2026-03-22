import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/blog-articles";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

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
    title: article.title,
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
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-white/50 hover:text-white transition-colors mb-10"
          >
            &larr; Retour au blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} de lecture</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <article
            className="
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-text-secondary [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>ul>li]:text-text-secondary [&>ul>li]:leading-relaxed
              [&_strong]:text-white [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <div className="mt-16">
            <GlassCard className="p-8 md:p-10 text-center" featured>
              <h2 className="text-2xl font-bold mb-4">
                Tu veux apprendre tout ça ?
              </h2>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                OpexIA Academy te forme de A à Z pour lancer ton agence IA,
                maîtriser les outils et trouver tes premiers clients.
              </p>
              <Link
                href="/#pricing"
                className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Découvre OpexIA Academy
              </Link>
            </GlassCard>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
