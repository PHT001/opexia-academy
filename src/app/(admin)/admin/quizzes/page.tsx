"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

interface QuizInfo {
  lessonTitle: string;
  lessonOrder: number;
  questionCount: number;
}

export default function AdminQuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizInfo[]>([]);

  useEffect(() => {
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((modules: Array<{ lessons: Array<{ title: string; order: number }> }>) => {
        const flat = modules.flatMap((m) =>
          m.lessons.map((l) => ({
            lessonTitle: l.title,
            lessonOrder: l.order,
            questionCount: 5,
          }))
        );
        setQuizzes(flat);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Quiz</h1>
      <p className="text-text-secondary mb-8">{quizzes.length} quiz</p>

      <div className="space-y-2">
        {quizzes.map((quiz) => (
          <GlassCard key={quiz.lessonOrder} className="p-4 flex items-center gap-4">
            <span className="text-sm font-mono text-white/70 font-bold w-8">{quiz.lessonOrder}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold">{quiz.lessonTitle}</p>
            </div>
            <span className="text-xs text-text-tertiary">{quiz.questionCount} questions</span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
