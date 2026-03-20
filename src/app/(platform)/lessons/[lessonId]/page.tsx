"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { LessonSectionContent } from "@/components/lesson/LessonSectionContent";
import LessonArticleLayout from "@/components/lesson-blocks/LessonArticleLayout";
import LessonBlockRenderer from "@/components/lesson-blocks/LessonBlockRenderer";
import { detectContentFormat, parseLessonBlocks } from "@/lib/parseLessonContent";

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
}

export default function LessonPage() {
  const params = useParams();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/lessons/${params.lessonId}`)
      .then((r) => r.json())
      .then((data) => {
        setLesson(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.lessonId]);

  if (loading) {
    return (
      <div className="lesson-article-wrapper">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="w-8 h-8 border-2 border-[#FF1744] border-t-transparent rounded-full animate-spin" />
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
  const showUpsell = lesson.order === 10 && !isAdmin;

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
            dangerouslySetInnerHTML={{ __html: lesson.exercise }}
          />
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
            href="/profile?tab=subscription"
            className="inline-block bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Découvrir le One-to-One
          </a>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {lesson.prevSlug ? (
          <a
            href={`/lessons/${lesson.prevSlug}`}
            className="text-[#6B7280] hover:text-[#111] transition-colors text-sm font-medium flex items-center gap-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Leçon précédente
          </a>
        ) : <div />}

        {lesson.hasQuiz && !lesson.quizPassed ? (
          <a
            href={`/quiz/${lesson.slug}`}
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Passer le Quiz →
          </a>
        ) : lesson.nextSlug ? (
          <a
            href={`/lessons/${lesson.nextSlug}`}
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors flex items-center gap-1"
          >
            Leçon suivante
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        ) : (
          <a
            href="/congratulations"
            className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors"
          >
            Terminer le parcours
          </a>
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
    </LessonArticleLayout>
  );
}
