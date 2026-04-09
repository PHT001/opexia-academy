"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface LessonStat {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  moduleOrder: number;
  lessonOrder: number;
  completions: number;
  totalStudents: number;
  completionRate: number;
}

interface QuizStat {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  attempts: number;
  passes: number;
  passRate: number;
  avgScore: number;
}

interface Bottleneck {
  lessonTitle: string;
  moduleTitle: string;
  dropoffRate: number;
}

interface AnalyticsData {
  lessonStats: LessonStat[];
  quizStats: QuizStat[];
  bottlenecks: Bottleneck[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function rateColor(rate: number): string {
  if (rate < 30) return "bg-red-500";
  if (rate < 70) return "bg-amber-500";
  return "bg-emerald-500";
}

function rateTextColor(rate: number): string {
  if (rate < 30) return "text-red-400";
  if (rate < 70) return "text-amber-400";
  return "text-emerald-400";
}

function rateBgColor(rate: number): string {
  if (rate < 30) return "bg-red-400/10";
  if (rate < 70) return "bg-amber-400/10";
  return "bg-emerald-400/10";
}

/* ------------------------------------------------------------------ */
/*  Group lessons by module                                            */
/* ------------------------------------------------------------------ */

interface ModuleGroup {
  moduleTitle: string;
  moduleOrder: number;
  lessons: LessonStat[];
}

function groupByModule(lessons: LessonStat[]): ModuleGroup[] {
  const map = new Map<string, ModuleGroup>();
  for (const l of lessons) {
    if (!map.has(l.moduleTitle)) {
      map.set(l.moduleTitle, {
        moduleTitle: l.moduleTitle,
        moduleOrder: l.moduleOrder,
        lessons: [],
      });
    }
    map.get(l.moduleTitle)!.lessons.push(l);
  }
  const groups = Array.from(map.values());
  groups.sort((a, b) => a.moduleOrder - b.moduleOrder);
  for (const g of groups) {
    g.lessons.sort((a, b) => a.lessonOrder - b.lessonOrder);
  }
  return groups;
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonStat | null>(null);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((r) => {
        if (!r.ok) throw new Error(`Erreur ${r.status}`);
        return r.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Erreur de chargement");
        setLoading(false);
      });
  }, []);

  /* ----- Loading state ----- */
  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-white/40 mb-10">Lecons et quiz</p>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <GlassCard key={i} hover={false} className="p-6 h-48 animate-pulse">
              <div className="h-4 w-40 bg-white/[0.06] rounded mb-4" />
              <div className="h-full bg-white/[0.04] rounded" />
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }

  /* ----- Error state ----- */
  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <GlassCard hover={false} className="p-8 text-center">
          <div className="text-red-400 text-lg font-semibold mb-2">
            Erreur de chargement
          </div>
          <p className="text-white/40 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#FF1744]/20 text-[#FF1744] rounded-lg text-sm font-medium hover:bg-[#FF1744]/30 transition-colors"
          >
            Reessayer
          </button>
        </GlassCard>
      </div>
    );
  }

  if (!data) return null;

  const moduleGroups = groupByModule(data.lessonStats);
  const sortedQuizStats = [...data.quizStats].sort(
    (a, b) => a.passRate - b.passRate
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Analytics</h1>
      <p className="text-white/40 mb-10">
        Performance des lecons et quiz
      </p>

      {/* ============================================================ */}
      {/*  Section 1 — Lesson Completion Heatmap                        */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6 mb-8">
        <h2 className="text-sm font-semibold text-white mb-1">
          Taux de completion par lecon
        </h2>
        <p className="text-xs text-white/40 mb-6">
          Chaque cellule represente une lecon — cliquez pour voir les details
        </p>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-6 text-[10px] text-white/40">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span>&lt; 30%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <span>30-70%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <span>&gt; 70%</span>
          </div>
        </div>

        <div className="space-y-3 overflow-x-auto">
          {moduleGroups.map((group) => (
            <div key={group.moduleTitle} className="flex items-center gap-3">
              <div className="w-48 shrink-0 text-xs text-white/50 truncate" title={group.moduleTitle}>
                <span className="text-white/20 mr-1.5">M{group.moduleOrder}</span>
                {group.moduleTitle}
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {group.lessons.map((lesson) => (
                  <button
                    key={lesson.lessonId}
                    onClick={() =>
                      setSelectedLesson(
                        selectedLesson?.lessonId === lesson.lessonId
                          ? null
                          : lesson
                      )
                    }
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-bold text-white/90 transition-all hover:scale-110 hover:ring-2 hover:ring-white/20 ${rateColor(
                      lesson.completionRate
                    )} ${
                      selectedLesson?.lessonId === lesson.lessonId
                        ? "ring-2 ring-white/50 scale-110"
                        : ""
                    }`}
                    title={`${lesson.lessonTitle} — ${lesson.completionRate}%`}
                  >
                    {lesson.completionRate}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected lesson detail panel */}
        {selectedLesson && (
          <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {selectedLesson.lessonTitle}
                </h3>
                <p className="text-xs text-white/40 mt-0.5">
                  Module {selectedLesson.moduleOrder} — {selectedLesson.moduleTitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="text-white/30 hover:text-white/60 transition-colors text-sm"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-2xl font-black text-white">
                  {selectedLesson.completionRate}%
                </p>
                <p className="text-[10px] text-white/40">Taux de completion</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">
                  {selectedLesson.completions}
                </p>
                <p className="text-[10px] text-white/40">Completions</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">
                  {selectedLesson.totalStudents}
                </p>
                <p className="text-[10px] text-white/40">Total inscrits</p>
              </div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${rateColor(
                  selectedLesson.completionRate
                )}`}
                style={{ width: `${selectedLesson.completionRate}%` }}
              />
            </div>
          </div>
        )}
      </GlassCard>

      {/* ============================================================ */}
      {/*  Section 2 — Quiz Performance                                 */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6 mb-8">
        <h2 className="text-sm font-semibold text-white mb-1">
          Performance des Quiz
        </h2>
        <p className="text-xs text-white/40 mb-4">
          Trie par taux de reussite (pire en premier)
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white/30 text-[10px] uppercase tracking-wider">
                <th className="text-left pb-3 font-medium">Quiz</th>
                <th className="text-left pb-3 font-medium hidden md:table-cell">Module</th>
                <th className="text-center pb-3 font-medium">Tentatives</th>
                <th className="text-center pb-3 font-medium">Reussis</th>
                <th className="text-center pb-3 font-medium">Taux reussite</th>
                <th className="text-center pb-3 font-medium">Score moyen</th>
              </tr>
            </thead>
            <tbody>
              {sortedQuizStats.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-white/30 text-xs py-4 text-center">
                    Aucune donnee
                  </td>
                </tr>
              )}
              {sortedQuizStats.map((q) => (
                <tr
                  key={q.lessonId}
                  className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 text-white font-medium max-w-[200px] truncate">
                    {q.lessonTitle}
                  </td>
                  <td className="py-3 text-white/40 hidden md:table-cell max-w-[160px] truncate">
                    {q.moduleTitle}
                  </td>
                  <td className="py-3 text-center text-white/60">
                    {q.attempts}
                  </td>
                  <td className="py-3 text-center text-white/60">
                    {q.passes}
                  </td>
                  <td className="py-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${rateTextColor(
                        q.passRate
                      )} ${rateBgColor(q.passRate)}`}
                    >
                      {q.passRate}%
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${rateTextColor(
                        q.avgScore
                      )} ${rateBgColor(q.avgScore)}`}
                    >
                      {q.avgScore}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* ============================================================ */}
      {/*  Section 3 — Bottlenecks                                      */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6 mb-8">
        <h2 className="text-sm font-semibold text-white mb-1">
          Top 5 lecons ou les eleves decrochent
        </h2>
        <p className="text-xs text-white/40 mb-6">
          Plus grand ecart de completion avec la lecon suivante
        </p>

        {data.bottlenecks.length === 0 ? (
          <p className="text-white/30 text-xs py-4 text-center">
            Pas assez de donnees
          </p>
        ) : (
          <div className="space-y-4">
            {data.bottlenecks.map((b, i) => {
              const maxRate = data.bottlenecks[0]?.dropoffRate || 1;
              const barWidth = Math.max(
                8,
                Math.round((b.dropoffRate / maxRate) * 100)
              );
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium truncate">
                        {b.lessonTitle}
                      </p>
                      <p className="text-[10px] text-white/30">{b.moduleTitle}</p>
                    </div>
                    <span className="text-sm font-bold text-red-400 ml-3 shrink-0">
                      -{b.dropoffRate}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-700"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </GlassCard>
    </div>
  );
}
