"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  type: string;
  question: string;
  options: string[];
  order: number;
}

interface QuizResult {
  score: number;
  passed: boolean;
  total: number;
  correct: number;
  xpEarned: number;
  questions: Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
  }>;
}

type Phase = "intro" | "quiz" | "results";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [lessonTitle, setLessonTitle] = useState("");

  useEffect(() => {
    fetch(`/api/quizzes/${params.lessonId}`)
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data.questions || []);
        setLessonTitle(data.lessonTitle || "");
      })
      .catch(() => {});
  }, [params.lessonId]);

  const currentQ = questions[currentIdx];
  const progress = questions.length > 0 ? Math.round(((currentIdx + 1) / questions.length) * 100) : 0;

  async function submitQuiz() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quiz-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonSlug: params.lessonId,
          answers,
        }),
      });
      const data = await res.json();
      setResult(data);
      setPhase("results");
    } catch {
      alert("Erreur lors de la soumission");
    }
    setSubmitting(false);
  }

  // INTRO
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
          <div className="text-5xl mb-6">📝</div>
          <h1 className="text-2xl font-bold mb-3 text-[#111]">Quiz — {lessonTitle}</h1>
          <p className="text-gray-500 mb-2">{questions.length} questions</p>
          <p className="text-sm text-gray-400 mb-8">Score minimum : 80% pour valider la leçon</p>
          <button
            onClick={() => setPhase("quiz")}
            disabled={questions.length === 0}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
          >
            Commencer le quiz
          </button>
        </div>
      </div>
    );
  }

  // RESULTS
  if (phase === "results" && result) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center mb-8 shadow-sm">
          <div className="text-5xl mb-4">{result.passed ? "🎉" : "😕"}</div>
          <h2 className="text-2xl font-bold mb-2 text-[#111]">
            {result.passed ? "Quiz validé !" : "Pas cette fois..."}
          </h2>
          <p className={cn(
            "text-4xl font-black my-4",
            result.passed ? "text-emerald-500" : "text-red-500"
          )}>
            {result.score}%
          </p>
          <p className="text-sm text-gray-500 mb-2">
            {result.correct}/{result.total} réponses correctes
          </p>
          {result.passed && result.xpEarned > 0 && (
            <p className="text-[#FF1744] font-semibold">+{result.xpEarned} XP</p>
          )}
          <div className="flex gap-4 justify-center mt-8">
            {result.passed ? (
              <a
                href="/lessons"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
              >
                Continuer &rarr;
              </a>
            ) : (
              <button
                onClick={() => {
                  setPhase("intro");
                  setCurrentIdx(0);
                  setAnswers({});
                  setResult(null);
                }}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF1744]"
              >
                Réessayer
              </button>
            )}
          </div>
        </div>

        {/* Review */}
        <h3 className="text-lg font-bold mb-4 text-[#111]">Détail des réponses</h3>
        <div className="space-y-3">
          {result.questions.map((q, i) => (
            <div key={i} className={cn(
              "bg-white rounded-2xl border p-5 shadow-sm",
              q.isCorrect ? "border-emerald-200" : "border-red-200"
            )}>
              <p className="text-sm font-semibold mb-2 text-[#111]">Q{i + 1}. {q.question}</p>
              <p className="text-xs">
                <span className="text-gray-400">Ta réponse : </span>
                <span className={q.isCorrect ? "text-emerald-500" : "text-red-500"}>{q.userAnswer}</span>
              </p>
              {!q.isCorrect && (
                <p className="text-xs mt-1">
                  <span className="text-gray-400">Bonne réponse : </span>
                  <span className="text-emerald-500">{q.correctAnswer}</span>
                </p>
              )}
              {q.explanation && (
                <p className="text-xs text-gray-400 mt-2 italic">{q.explanation}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // QUIZ
  if (!currentQ) return null;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <ProgressBar value={progress} size="sm" className="mb-8" />

      <p className="text-sm text-gray-400 mb-6">
        Question {currentIdx + 1} sur {questions.length}
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-sm">
        <h2 className="text-lg font-bold mb-6 text-[#111]">{currentQ.question}</h2>

        <div className="space-y-3">
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => setAnswers({ ...answers, [currentQ.id]: option })}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all text-sm cursor-pointer",
                answers[currentQ.id] === option
                  ? "border-[#FF1744]/30 bg-[#FF1744]/5 text-[#111] font-semibold"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-[#111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          &larr; Précédent
        </button>

        {currentIdx < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIdx(currentIdx + 1)}
            disabled={!answers[currentQ.id]}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
          >
            Suivant &rarr;
          </button>
        ) : (
          <button
            onClick={submitQuiz}
            disabled={!answers[currentQ.id] || submitting}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
          >
            {submitting ? "Envoi..." : "Valider le quiz"}
          </button>
        )}
      </div>
    </div>
  );
}
