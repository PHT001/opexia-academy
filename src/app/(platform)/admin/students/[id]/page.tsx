"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface EmailLog {
  id: string;
  type: string;
  sequence: number;
  subject: string;
  status: string;
  createdAt: string;
}

interface ModuleProgress {
  moduleTitle: string;
  moduleOrder: number;
  totalLessons: number;
  completedLessons: number;
  percentage: number;
}

interface QuizSubmission {
  lessonTitle: string;
  score: number;
  passed: boolean;
  createdAt: string;
}

interface StudentDetail {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  discordUsername: string | null;
  age: number | null;
  profession: string | null;
  createdAt: string;
  enrollment: { tier: string; status: string; createdAt: string } | null;
  totalLessons: number;
  completedLessons: number;
  completionPercentage: number;
  totalXP: number;
  moduleProgress: ModuleProgress[];
  quizHistory: QuizSubmission[];
  streaks: { date: string }[];
  currentStreak: number;
  longestStreak: number;
  emailLogs: EmailLog[];
  engagement: "chaud" | "tiede" | "froid";
  shouldContact: boolean;
  daysSinceLastActivity: number;
  adminNotes: string | null;
}

const ENGAGEMENT_BADGE: Record<string, { bg: string; text: string; label: string; dot: string }> = {
  chaud: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Chaud", dot: "bg-emerald-400" },
  tiede: { bg: "bg-amber-500/20", text: "text-amber-400", label: "Tiede", dot: "bg-amber-400" },
  froid: { bg: "bg-red-500/20", text: "text-red-400", label: "Froid", dot: "bg-red-400" },
};

const EMAIL_TYPE_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  nurture: { bg: "bg-purple-500/20", text: "text-purple-400", label: "Nurture" },
  drip: { bg: "bg-blue-500/20", text: "text-blue-400", label: "Drip" },
  free_followup: { bg: "bg-amber-500/20", text: "text-amber-400", label: "Free Followup" },
  weekly_recap: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Weekly Recap" },
  manual: { bg: "bg-white/[0.08]", text: "text-text-tertiary", label: "Manuel" },
};

const TIER_BADGE: Record<string, { bg: string; text: string; label: string; avatar: string }> = {
  free: { bg: "bg-white/[0.08]", text: "text-text-secondary", label: "Gratuit", avatar: "bg-white/[0.08] text-white" },
  starter: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Starter", avatar: "bg-emerald-500/30 text-emerald-300" },
  academy: { bg: "bg-blue-500/20", text: "text-blue-400", label: "Academy", avatar: "bg-blue-500/30 text-blue-300" },
  one_to_one: { bg: "bg-[#FF1744]/20", text: "text-[#FF1744]", label: "One-to-One", avatar: "bg-[#FF1744]/30 text-[#FF1744]" },
};

export default function StudentDetailPage() {
  const params = useParams();
  const studentId = params.id as string;

  const [student, setStudent] = useState<StudentDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");
  const [saving, setSaving] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSavedAt, setNotesSavedAt] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/admin/students/${studentId}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((d: StudentDetail) => {
        setStudent(d);
        setSelectedTier(d.enrollment?.tier || "");
        setAdminNotes(d.adminNotes || "");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [studentId]);

  const handleTierChange = async () => {
    if (!selectedTier || saving) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/students/${studentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: selectedTier }),
      });
      if (res.ok) {
        const updated = await res.json();
        setStudent((prev) => (prev ? { ...prev, ...updated } : prev));
      }
    } catch {
      // silent
    } finally {
      setSaving(false);
    }
  };

  const handleSaveNotes = useCallback(async () => {
    if (savingNotes) return;
    setSavingNotes(true);
    try {
      const res = await fetch(`/api/admin/students/${studentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes }),
      });
      if (res.ok) {
        setNotesSavedAt(new Date().toLocaleString("fr-FR"));
      }
    } catch {
      // silent
    } finally {
      setSavingNotes(false);
    }
  }, [studentId, adminNotes, savingNotes]);

  // Sequence progress computation
  const sequenceProgress = useMemo(() => {
    if (!student?.emailLogs) return [];
    const sequences: Record<string, { total: number; label: string }> = {
      nurture: { total: 3, label: "Nurture" },
      free_followup: { total: 3, label: "Free Followup" },
      drip: { total: 2, label: "Drip" },
    };
    const counts: Record<string, number> = {};
    for (const log of student.emailLogs) {
      if (sequences[log.type]) {
        counts[log.type] = (counts[log.type] || 0) + 1;
      }
    }
    return Object.entries(sequences)
      .filter(([type]) => (counts[type] || 0) > 0)
      .map(([type, { total, label }]) => ({
        type,
        label,
        sent: Math.min(counts[type] || 0, total),
        total,
        completed: (counts[type] || 0) >= total,
      }));
  }, [student]);

  // Build streak calendar (last 90 days)
  const streakCalendar = useMemo(() => {
    if (!student) return [];
    const streakDates = new Set(student.streaks.map((s) => s.date.split("T")[0]));
    const days: { date: string; active: boolean }[] = [];
    const today = new Date();
    for (let i = 90; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      days.push({ date: key, active: streakDates.has(key) });
    }
    return days;
  }, [student]);

  const avgQuizScore = useMemo(() => {
    if (!student?.quizHistory.length) return 0;
    const sum = student.quizHistory.reduce((a, q) => a + q.score, 0);
    return Math.round(sum / student.quizHistory.length);
  }, [student]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-text-tertiary text-sm">Chargement...</p>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-text-tertiary text-sm">Eleve introuvable</p>
        <Link href="/admin/students" className="text-sm text-text-secondary hover:text-white transition-colors">
          &larr; Retour aux eleves
        </Link>
      </div>
    );
  }

  const tier = student.enrollment?.tier || null;
  const badge = tier ? TIER_BADGE[tier] : null;

  return (
    <div>
      {/* Back button */}
      <Link
        href="/admin/students"
        className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors mb-6"
      >
        &larr; Retour aux eleves
      </Link>

      {/* Profile Header */}
      <GlassCard hover={false} className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0 ${
              badge ? badge.avatar : "bg-white/[0.08] text-white"
            }`}
          >
            {(student.name || student.email)[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-text-primary truncate">
              {student.name || "Sans nom"}
            </h1>
            <p className="text-sm text-text-tertiary truncate">{student.email}</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="text-xs text-text-tertiary">
                Inscrit le {new Date(student.createdAt).toLocaleDateString("fr-FR")}
              </span>
              {badge && (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                  {badge.label}
                </span>
              )}
              {student.engagement && (() => {
                const eng = ENGAGEMENT_BADGE[student.engagement];
                return eng ? (
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${eng.bg} ${eng.text}`}>
                    <span className={`w-2 h-2 rounded-full ${eng.dot}`} />
                    {eng.label}
                    {student.daysSinceLastActivity >= 0 && (
                      <span className="opacity-70 ml-0.5">({student.daysSinceLastActivity}j)</span>
                    )}
                  </span>
                ) : null;
              })()}
              {student.discordUsername && (
                <span className="inline-flex items-center gap-1.5 text-xs text-indigo-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                  </svg>
                  {student.discordUsername}
                </span>
              )}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Contact Alert */}
      {student.shouldContact && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <span className="text-lg">&#9888;&#65039;</span>
            <div>
              <p className="text-sm font-semibold text-red-400">
                Sequence email terminee — A contacter manuellement
              </p>
              <a
                href={`mailto:${student.email}`}
                className="text-sm text-red-300 hover:text-red-200 underline underline-offset-2 transition-colors mt-1 inline-block"
              >
                {student.email}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sequence Progress Overview */}
      {sequenceProgress.length > 0 && (
        <GlassCard hover={false} className="p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Sequences</span>
            {sequenceProgress.map((seq) => (
              <div key={seq.type} className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">{seq.label}:</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: seq.total }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < seq.sent ? "bg-white/60" : "bg-white/[0.1]"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-text-tertiary">
                  {seq.sent}/{seq.total}
                  {seq.completed && " \u2713"}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <GlassCard hover={false} className="p-4 text-center">
          <p className="text-3xl font-bold text-white">{student.completionPercentage}%</p>
          <p className="text-xs text-text-tertiary mt-1">Completion</p>
        </GlassCard>
        <GlassCard hover={false} className="p-4 text-center">
          <p className="text-3xl font-bold text-white">{student.totalXP.toLocaleString("fr-FR")}</p>
          <p className="text-xs text-text-tertiary mt-1">XP Total</p>
        </GlassCard>
        <GlassCard hover={false} className="p-4 text-center">
          <p className="text-3xl font-bold text-white">
            {student.currentStreak}
            <span className="text-sm font-normal text-text-tertiary ml-1">/ {student.longestStreak}</span>
          </p>
          <p className="text-xs text-text-tertiary mt-1">Streak actuel / Record</p>
        </GlassCard>
        <GlassCard hover={false} className="p-4 text-center">
          <p className="text-3xl font-bold text-white">{avgQuizScore}%</p>
          <p className="text-xs text-text-tertiary mt-1">Quiz score moyen</p>
        </GlassCard>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Module Progress */}
          <GlassCard hover={false} className="p-5">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Progression par module
            </h2>
            <div className="space-y-4">
              {student.moduleProgress.map((mod) => (
                <div key={mod.moduleOrder}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-text-primary truncate pr-4">{mod.moduleTitle}</span>
                    <span className="text-xs text-text-tertiary whitespace-nowrap">
                      {mod.completedLessons}/{mod.totalLessons}
                    </span>
                  </div>
                  <ProgressBar value={mod.percentage} size="sm" showLabel={false} />
                </div>
              ))}
              {!student.moduleProgress.length && (
                <p className="text-sm text-text-tertiary text-center py-4">Aucun module</p>
              )}
            </div>
          </GlassCard>

          {/* Quiz History */}
          <GlassCard hover={false} className="overflow-hidden">
            <div className="p-5 pb-3">
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                Historique des quiz
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-2">
                      Lecon
                    </th>
                    <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-2">
                      Score
                    </th>
                    <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-2">
                      Resultat
                    </th>
                    <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-2">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {student.quizHistory.length ? (
                    student.quizHistory.map((quiz, i) => (
                      <tr key={i} className="border-b border-white/[0.03]">
                        <td className="px-5 py-3 text-sm text-text-primary truncate max-w-[200px]">
                          {quiz.lessonTitle}
                        </td>
                        <td className="px-5 py-3 text-sm font-medium text-text-primary">
                          {quiz.score}%
                        </td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              quiz.passed
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {quiz.passed ? "Reussi" : "Echoue"}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-sm text-text-tertiary">
                          {new Date(quiz.createdAt).toLocaleDateString("fr-FR")}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-5 py-8 text-center text-text-tertiary text-sm">
                        Aucun quiz soumis
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Email Timeline */}
          <GlassCard hover={false} className="p-5">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Historique des emails
            </h2>
            {student.emailLogs && student.emailLogs.length > 0 ? (
              <div className="relative space-y-0">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />
                {student.emailLogs.map((log, i) => {
                  const typeBadge = EMAIL_TYPE_BADGE[log.type] || EMAIL_TYPE_BADGE.manual;
                  return (
                    <div key={log.id || i} className="relative pl-7 py-3">
                      {/* Dot */}
                      <div className="absolute left-0 top-[18px] w-[15px] h-[15px] rounded-full bg-white/[0.06] border-2 border-white/[0.15] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs text-text-tertiary">
                          {new Date(log.createdAt).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${typeBadge.bg} ${typeBadge.text}`}>
                          {typeBadge.label}
                        </span>
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] ${
                          log.status === "sent" ? "bg-emerald-500/10 text-emerald-400" :
                          log.status === "failed" ? "bg-red-500/10 text-red-400" :
                          "bg-white/[0.04] text-text-tertiary"
                        }`}>
                          {log.status}
                        </span>
                      </div>
                      <p className="text-sm text-text-primary truncate">{log.subject}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-text-tertiary text-center py-4">Aucun email envoye</p>
            )}
          </GlassCard>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-6">
          {/* Streak Calendar */}
          <GlassCard hover={false} className="p-5">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Streak (90 jours)
            </h2>
            <div className="grid grid-cols-[repeat(13,1fr)] gap-[3px]">
              {streakCalendar.map((day, i) => (
                <div
                  key={i}
                  title={day.date}
                  className={`w-3 h-3 rounded-sm ${
                    day.active ? "bg-emerald-500/60" : "bg-white/[0.04]"
                  }`}
                />
              ))}
            </div>
          </GlassCard>

          {/* Actions */}
          <GlassCard hover={false} className="p-5">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Actions
            </h2>
            <div className="space-y-4">
              {/* Change tier */}
              <div>
                <label className="text-xs text-text-tertiary block mb-1.5">Changer le tier</label>
                <div className="flex gap-2">
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white/[0.04] border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Aucun</option>
                    <option value="starter">Starter</option>
                    <option value="academy">Academy</option>
                    <option value="one_to_one">One-to-One</option>
                  </select>
                  <button
                    onClick={handleTierChange}
                    disabled={saving}
                    className="px-4 py-2 bg-white/[0.08] hover:bg-white/[0.12] border border-glass-border rounded-lg text-sm text-text-primary transition-all disabled:opacity-50"
                  >
                    {saving ? "..." : "Sauvegarder"}
                  </button>
                </div>
              </div>

              {/* Send email */}
              <div>
                <a
                  href={`mailto:${student.email}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-glass-border rounded-lg text-sm text-text-secondary hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Envoyer un email
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Admin Notes */}
          <GlassCard hover={false} className="p-5">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Notes admin
            </h2>
            <textarea
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Ajouter des notes sur cet etudiant..."
              rows={5}
              className="w-full px-3 py-2 bg-white/[0.04] border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-white/20 transition-all resize-y"
            />
            <div className="flex items-center justify-between mt-3">
              <div className="text-xs text-text-tertiary">
                {notesSavedAt && `Sauvegarde le ${notesSavedAt}`}
              </div>
              <button
                onClick={handleSaveNotes}
                disabled={savingNotes}
                className="px-4 py-2 bg-white/[0.08] hover:bg-white/[0.12] border border-glass-border rounded-lg text-sm text-text-primary transition-all disabled:opacity-50"
              >
                {savingNotes ? "..." : "Sauvegarder"}
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
