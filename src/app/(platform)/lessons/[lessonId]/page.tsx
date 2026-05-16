"use client";

import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { LessonSectionContent } from "@/components/lesson/LessonSectionContent";
import LessonArticleLayout from "@/components/lesson-blocks/LessonArticleLayout";
import LessonBlockRenderer from "@/components/lesson-blocks/LessonBlockRenderer";
import { detectContentFormat, parseLessonBlocks } from "@/lib/parseLessonContent";
import { useTierGate } from "@/hooks/useTierGate";
import Link from "next/link";

interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  videoUrl: string | null;
  pdfUrl: string | null;
  exercise: string | null;
  duration: string;
  order: number;
  moduleTitle: string;
  moduleOrder: number;
  hasQuiz: boolean;
  quizPassed: boolean;
  status: string;
  prevSlug: string | null;
  nextSlug: string | null;
  isLastInModule?: boolean;
}

/* ── Inline MVP submission form — shown on the last lesson of a module ── */
function InlineMvpSubmission({ moduleOrder, moduleTitle }: { moduleOrder: number; moduleTitle: string }) {
  const [title, setTitle] = useState(`Module ${moduleOrder} — ${moduleTitle}`);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!description.trim()) {
      setError("Ajoute une description rapide.");
      return;
    }
    if (url && !/^https?:\/\//.test(url)) {
      setError("L'URL doit commencer par https://");
      return;
    }
    setSubmitting(true);
    try {
      const r = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, url, moduleOrder }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "Erreur de soumission");
      setSuccess(true);
      setDescription("");
      setUrl("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-10 rounded-2xl p-6 sm:p-7 border border-[#FF1744]/25 bg-gradient-to-br from-[#FF1744]/[0.06] to-white">
      <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#FF1744] mb-1.5">Dernière étape du module {moduleOrder}</p>
      <h3 className="text-xl sm:text-2xl font-black text-[#111] mb-2">🚀 Dépose ton MVP du Module {moduleOrder}</h3>
      <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
        Tu viens de finir <strong>{moduleTitle}</strong>. Construis le mini-projet de l&apos;exercice, déploie-le sur Vercel (ou Notion / Loom / Drive selon le cas), et soumets le lien ci-dessous. Marius te review en perso sous <strong>24h</strong>. Le module suivant se débloque dès validation.
      </p>

      {success ? (
        <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
          ✓ MVP soumis. Marius va te répondre sous 24h sur l&apos;email de ton compte. Tu reçois une notif quand le module suivant se débloque.
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-[#6B7280] mb-1.5">Titre du projet</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl px-4 py-3 bg-white border border-gray-200 text-[#111] placeholder:text-gray-400 focus:border-[#FF1744]/60 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/10 text-sm transition-all"
              placeholder="Ex: Landing cabinet Dr Lefebvre"
              maxLength={200}
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-[#6B7280] mb-1.5">Description (qu&apos;est-ce que ça fait, pour quel client)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full rounded-xl px-4 py-3 bg-white border border-gray-200 text-[#111] placeholder:text-gray-400 focus:border-[#FF1744]/60 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/10 text-sm transition-all resize-none"
              placeholder="3 lignes claires. Ce que tu as construit et pourquoi."
              required
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-[#6B7280] mb-1.5">URL (Vercel · Notion · Loom · Drive…)</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-xl px-4 py-3 bg-white border border-gray-200 text-[#111] placeholder:text-gray-400 focus:border-[#FF1744]/60 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/10 text-sm transition-all"
              placeholder="https://…"
            />
          </div>
          {error && (
            <div className="rounded-xl p-3 bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-bold transition-all disabled:opacity-60 disabled:cursor-wait"
          >
            {submitting ? "Envoi…" : "Soumettre mon MVP →"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function LessonPage() {
  const params = useParams();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const { tier } = useTierGate();
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);

  const [accessBlock, setAccessBlock] = useState<null | { reason: string; blockingModule?: number; message: string }>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLesson(null);
    setAccessBlock(null);
    fetch(`/api/lessons/${params.lessonId}`)
      .then(async (r) => {
        if (r.ok) return { ok: true, data: await r.json() } as const;
        // 403 from MVP gating · capture so we can show a useful screen
        const body = await r.json().catch(() => ({}));
        if (r.status === 403 && body?.reason) {
          return { ok: false, block: body as { reason: string; blockingModule?: number; message: string } } as const;
        }
        throw new Error(`HTTP ${r.status}`);
      })
      .then((res) => {
        if (cancelled) return;
        if (res.ok) {
          setLesson(res.data);
        } else {
          setAccessBlock(res.block);
        }
        setLoading(false);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      })
      .catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [params.lessonId]);

  if (loading) {
    return (
      <div className="lesson-article-wrapper">
        <div className="max-w-3xl mx-auto px-4 py-10 animate-pulse">
          <div className="h-3 w-32 rounded bg-gray-200 mb-3" />
          <div className="h-9 w-3/4 rounded bg-gray-200 mb-4" />
          <div className="h-4 w-1/3 rounded bg-gray-100 mb-8" />
          <div className="h-4 w-full rounded bg-gray-100 mb-2" />
          <div className="h-4 w-5/6 rounded bg-gray-100 mb-2" />
          <div className="h-4 w-11/12 rounded bg-gray-100 mb-6" />
          <div className="h-32 w-full rounded-xl bg-gray-100 mb-6" />
          <div className="h-4 w-full rounded bg-gray-100 mb-2" />
          <div className="h-4 w-4/5 rounded bg-gray-100 mb-2" />
        </div>
      </div>
    );
  }

  if (accessBlock) {
    return (
      <div className="lesson-article-wrapper">
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-amber-600 mb-2">Module verrouillé</p>
          <h2 className="text-2xl font-bold text-[#111] mb-3">
            {accessBlock.blockingModule
              ? `Valide d'abord le MVP du Module ${accessBlock.blockingModule}`
              : "Cette leçon est verrouillée"}
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">{accessBlock.message}</p>
          {accessBlock.blockingModule ? (
            <Link
              href={`/lessons`}
              prefetch
              className="inline-flex items-center gap-2 bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-bold hover:bg-[#D50000] transition-colors"
            >
              Retour aux modules →
            </Link>
          ) : (
            <Button href="/lessons">Retour aux leçons</Button>
          )}
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="lesson-article-wrapper">
        <div className="text-center py-20">
          <h2 className="text-xl font-bold text-[#111] mb-2">Leçon introuvable</h2>
          <p className="text-[#6B7280] mb-6">Cette leçon n&apos;existe pas ou tu n&apos;y as pas accès.</p>
          <Button href="/lessons">Retour aux leçons</Button>
        </div>
      </div>
    );
  }

  const format = detectContentFormat(lesson.content);
  const isBlocks = format === "blocks";
  const showUpsell = !lesson.nextSlug && !isAdmin;
  const isStarterLastLesson = tier === "starter" && lesson.moduleOrder === 2 && !lesson.nextSlug;

  // Navigation footer
  const navigationFooter = (
    <div className="space-y-6">
      {/* PDF download */}
      {lesson.pdfUrl && (
        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200 flex items-center justify-between">
          <div>
            <p className="font-semibold text-[#111] text-sm">Résumé de la leçon (PDF)</p>
            <p className="text-xs text-[#6B7280]">Télécharge le résumé pour réviser</p>
          </div>
          <a
            href={lesson.pdfUrl}
            className="bg-[#FF1744] text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Télécharger
          </a>
        </div>
      )}

      {/* Exercise */}
      {lesson.exercise && (
        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200">
          <h3 className="font-bold text-[#111] mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#FF1744]/10 text-[#FF1744] flex items-center justify-center text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            Exercice pratique
          </h3>
          <div
            className="text-sm text-[#374151] leading-relaxed block-text"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lesson.exercise) }}
          />
        </div>
      )}

      {/* Starter funnel CTA — last lesson of module 2 */}
      {isStarterLastLesson && (
        <div className="rounded-2xl overflow-hidden border border-[#FF1744]/20">
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] p-8">
            <h3 className="text-xl font-bold text-white mb-3">Tu as les bases. Et maintenant ?</h3>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Tu comprends le marché, tu connais les outils, tu as comparé les IA par toi-même.
              Mais soyons honnêtes : <strong className="text-white">savoir ce que l&apos;IA fait et savoir la vendre, c&apos;est deux choses différentes.</strong>
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: "🤖", text: "Construire des chatbots IA pour tes clients" },
                { icon: "🌐", text: "Créer des sites et apps avec l'IA (Next.js, Supabase)" },
                { icon: "⚡", text: "Automatiser des process pour les entreprises" },
                { icon: "📞", text: "Créer des agents vocaux IA" },
                { icon: "💰", text: "Trouver et closer tes premiers clients à 2000€+" },
                { icon: "🚀", text: "Passer de 0 à 10K€/mois avec ton agence" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                  <span className="ml-auto text-[10px] text-[#FF1744]/60 font-medium">Academy</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Les 20 modules suivants te donnent tout : les compétences techniques, les outils, et la méthode pour vendre.
            </p>
            <Link
              href="/offres"
              className="inline-flex items-center gap-2 bg-[#FF1744] hover:bg-[#D50000] text-white rounded-xl px-8 py-3.5 text-sm font-bold transition-colors shadow-lg shadow-red-500/20"
            >
              Débloquer la plateforme
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      )}

      {/* Upsell after lesson 10 */}
      {showUpsell && (
        <div className="bg-gradient-to-br from-[#FF1744]/5 to-[#FF1744]/10 rounded-2xl p-8 border border-[#FF1744]/20 text-center">
          <h3 className="text-xl font-bold text-[#111] mb-3">Tu veux aller plus vite ?</h3>
          <p className="text-sm text-[#6B7280] mb-6">
            Passe à la formule One-to-One et bénéficie d&apos;un accompagnement personnalisé.
          </p>
          <a
            href="/offres"
            className="inline-block bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Découvrir le One-to-One
          </a>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {lesson.prevSlug ? (
          <Link
            href={`/lessons/${lesson.prevSlug}`}
            prefetch
            className="text-[#6B7280] hover:text-[#111] transition-colors text-sm font-medium flex items-center gap-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Leçon précédente
          </Link>
        ) : <div />}

        {lesson.hasQuiz && !lesson.quizPassed ? (
          <Link
            href={`/quiz/${lesson.slug}`}
            prefetch
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Passer le Quiz →
          </Link>
        ) : lesson.nextSlug ? (
          <Link
            href={`/lessons/${lesson.nextSlug}`}
            prefetch
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors flex items-center gap-1"
          >
            Leçon suivante
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ) : (
          <Link
            href="/congratulations"
            prefetch
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Terminer le parcours
          </Link>
        )}
      </div>
    </div>
  );

  // ── BLOCKS FORMAT (new) ──
  if (isBlocks) {
    const blocks = parseLessonBlocks(lesson.content);
    return (
      <LessonArticleLayout
        moduleTitle={`Module ${lesson.moduleOrder} — ${lesson.moduleTitle}`}
        lessonNumber={lesson.order}
        lessonTitle={lesson.title}
        duration={lesson.duration}
        footer={navigationFooter}
      >
        <LessonBlockRenderer blocks={blocks} lessonSlug={lesson.slug} />
        {lesson.isLastInModule && lesson.moduleOrder >= 2 && (
          <InlineMvpSubmission moduleOrder={lesson.moduleOrder} moduleTitle={lesson.moduleTitle} />
        )}
      </LessonArticleLayout>
    );
  }

  // ── HTML FORMAT (legacy) ──
  return (
    <LessonArticleLayout
      moduleTitle={`Module ${lesson.moduleOrder} — ${lesson.moduleTitle}`}
      lessonNumber={lesson.order}
      lessonTitle={lesson.title}
      duration={lesson.duration}
      footer={navigationFooter}
    >
      <div className="lesson-body">
        <LessonSectionContent
          content={lesson.content}
          lessonSlug={lesson.slug}
        />
      </div>
      {lesson.quizPassed && (
        <div className="mt-4">
          <Badge className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
            Quiz validé ✓
          </Badge>
        </div>
      )}
      {lesson.isLastInModule && lesson.moduleOrder >= 2 && (
        <InlineMvpSubmission moduleOrder={lesson.moduleOrder} moduleTitle={lesson.moduleTitle} />
      )}
    </LessonArticleLayout>
  );
}
