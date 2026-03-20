"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

interface AdminLesson {
  id: string;
  title: string;
  slug: string;
  order: number;
  moduleTitle: string;
  moduleOrder: number;
  hasQuiz: boolean;
}

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<AdminLesson[]>([]);

  useEffect(() => {
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((modules: Array<{ title: string; order: number; lessons: Array<{ id: string; title: string; slug: string; order: number }> }>) => {
        const flat = modules.flatMap((m) =>
          m.lessons.map((l) => ({
            ...l,
            moduleTitle: m.title,
            moduleOrder: m.order,
            hasQuiz: true,
          }))
        );
        setLessons(flat);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Leçons</h1>
          <p className="text-text-secondary">{lessons.length} leçons</p>
        </div>
      </div>

      <div className="space-y-2">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/admin/lessons/${lesson.slug}`}>
            <GlassCard className="p-4 flex items-center gap-4 cursor-pointer hover:border-glass-border-hover">
              <span className="text-sm font-mono text-white/70 font-bold w-8">{lesson.order}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{lesson.title}</p>
                <p className="text-xs text-text-tertiary">Module {lesson.moduleOrder} — {lesson.moduleTitle}</p>
              </div>
              <span className="text-xs text-text-tertiary">
                {lesson.hasQuiz ? "Quiz ✓" : "Pas de quiz"}
              </span>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
