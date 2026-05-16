"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

interface LessonDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  moduleTitle: string;
  moduleOrder: number;
  content: Array<{ type: string; [key: string]: unknown }>;
  hasQuiz?: boolean;
}

export default function AdminLessonDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lesson, setLesson] = useState<LessonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/lessons/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Lecon introuvable");
        return r.json();
      })
      .then((data) => {
        setLesson(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-white/10 rounded w-64" />
        <div className="h-48 bg-white/5 rounded-xl" />
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div>
        <Link href="/admin/lessons" className="text-sm text-white/50 hover:text-white mb-4 inline-block">
          &larr; Retour aux lecons
        </Link>
        <GlassCard className="p-8 text-center">
          <p className="text-red-400">{error || "Lecon introuvable"}</p>
        </GlassCard>
      </div>
    );
  }

  const contentBlocks = lesson.content || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/admin/lessons" className="text-sm text-white/50 hover:text-white mb-4 inline-block">
          &larr; Retour aux lecons
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white font-bold text-sm">
            {lesson.order}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="text-sm text-white/50">
              Module {lesson.moduleOrder} — {lesson.moduleTitle} &middot; Slug: <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded">{lesson.slug}</code>
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4 text-center">
          <p className="text-2xl font-bold">{contentBlocks.length}</p>
          <p className="text-xs text-white/50">Blocs de contenu</p>
        </GlassCard>
        <GlassCard className="p-4 text-center">
          <p className="text-2xl font-bold">{lesson.order}</p>
          <p className="text-xs text-white/50">Position dans le module</p>
        </GlassCard>
      </div>

      {/* Content blocks preview */}
      <GlassCard className="p-6">
        <h2 className="text-lg font-bold mb-4">Contenu ({contentBlocks.length} blocs)</h2>
        <div className="space-y-2 max-h-[500px] overflow-y-auto">
          {contentBlocks.map((block, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-white/30 w-6 text-right flex-shrink-0 pt-0.5">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-bold text-[#06B6D4] bg-[#06B6D4]/10 px-1.5 py-0.5 rounded mb-1 uppercase">
                  {block.type}
                </span>
                {block.type === "heading" && <p className="text-sm font-semibold truncate">{String(block.content || "")}</p>}
                {block.type === "text" && <p className="text-xs text-white/60 line-clamp-2">{String(block.content || "").slice(0, 200)}</p>}
                {block.type === "callout" && <p className="text-xs text-amber-300/80 line-clamp-2">{String(block.content || "")}</p>}
                {block.type === "steps" && <p className="text-xs text-white/50">{Array.isArray(block.items) ? `${block.items.length} etapes` : ""}</p>}
                {block.type === "checklist" && <p className="text-xs text-white/50">{Array.isArray(block.items) ? `${block.items.length} items` : ""}</p>}
                {block.type === "comparison" && <p className="text-xs text-white/50">Comparaison</p>}
                {block.type === "separator" && <hr className="border-white/10" />}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Quiz preview */}
      {lesson.quiz && lesson.quiz.questions && (
        <GlassCard className="p-6">
          <h2 className="text-lg font-bold mb-4">Quiz ({lesson.quiz.questions.length} questions)</h2>
          <div className="space-y-4">
            {lesson.quiz.questions.map((q, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm font-semibold mb-2">
                  <span className="text-white/30 mr-2">Q{i + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-1 ml-6">
                  {q.options.map((opt, j) => (
                    <p key={j} className={`text-xs ${j === q.correctAnswer ? "text-emerald-400 font-semibold" : "text-white/40"}`}>
                      {j === q.correctAnswer ? "✓" : "○"} {opt}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
}
