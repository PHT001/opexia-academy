"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface EmailLog { id: string; type: string; sequence: number; subject: string; status: string; createdAt: string; }
interface ModuleProgress { moduleTitle: string; moduleOrder: number; totalLessons: number; completedLessons: number; percentage: number; }
interface QuizSubmission { lessonTitle: string; score: number; passed: boolean; createdAt: string; }

interface StudentDetail {
  id: string; name: string | null; email: string; phone: string | null;
  discordUsername: string | null; age: number | null; profession: string | null;
  createdAt: string; enrollment: { tier: string; status: string; createdAt: string } | null;
  totalLessons: number; completedLessons: number; completionPercentage: number; totalXP: number;
  moduleProgress: ModuleProgress[]; quizHistory: QuizSubmission[];
  streaks: { date: string }[]; currentStreak: number; longestStreak: number;
  emailLogs: EmailLog[]; engagement: "chaud" | "tiede" | "froid";
  shouldContact: boolean; daysSinceLastActivity: number; adminNotes: string | null;
}

const ENGAGEMENT_BADGE: Record<string, { bg: string; text: string; label: string; dot: string }> = {
  chaud: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Actif", dot: "bg-emerald-500" },
  tiede: { bg: "bg-amber-50", text: "text-amber-600", label: "Peu actif", dot: "bg-amber-500" },
  froid: { bg: "bg-red-50", text: "text-red-600", label: "Inactif", dot: "bg-red-500" },
};

const EMAIL_TYPE_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  nurture: { bg: "bg-purple-50", text: "text-purple-600", label: "Nurture" },
  drip: { bg: "bg-blue-50", text: "text-blue-600", label: "Drip" },
  free_followup: { bg: "bg-amber-50", text: "text-amber-600", label: "Free Followup" },
  weekly_recap: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Weekly Recap" },
  manual: { bg: "bg-gray-100", text: "text-gray-500", label: "Manuel" },
};

const TIER_BADGE: Record<string, { bg: string; text: string; label: string; avatar: string }> = {
  free: { bg: "bg-gray-100", text: "text-gray-500", label: "Gratuit", avatar: "bg-gray-200 text-gray-600" },
  starter: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Starter", avatar: "bg-emerald-100 text-emerald-700" },
  academy: { bg: "bg-blue-50", text: "text-blue-600", label: "Academy", avatar: "bg-blue-100 text-blue-700" },
  one_to_one: { bg: "bg-red-50", text: "text-[#FF1744]", label: "One-to-One", avatar: "bg-red-100 text-[#FF1744]" },
};

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}>{children}</div>;
}

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
      .then((r) => { if (!r.ok) throw new Error("Not found"); return r.json(); })
      .then((d: StudentDetail) => { setStudent(d); setSelectedTier(d.enrollment?.tier || ""); setAdminNotes(d.adminNotes || ""); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [studentId]);

  const handleTierChange = async () => {
    if (!selectedTier || saving) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/students/${studentId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tier: selectedTier }) });
      if (res.ok) { const updated = await res.json(); setStudent((prev) => (prev ? { ...prev, ...updated } : prev)); }
    } catch { /* silent */ } finally { setSaving(false); }
  };

  const handleSaveNotes = useCallback(async () => {
    if (savingNotes) return;
    setSavingNotes(true);
    try {
      const res = await fetch(`/api/admin/students/${studentId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ adminNotes }) });
      if (res.ok) setNotesSavedAt(new Date().toLocaleString("fr-FR"));
    } catch { /* silent */ } finally { setSavingNotes(false); }
  }, [studentId, adminNotes, savingNotes]);

  const sequenceProgress = useMemo(() => {
    if (!student?.emailLogs) return [];
    const sequences: Record<string, { total: number; label: string }> = { nurture: { total: 3, label: "Nurture" }, free_followup: { total: 3, label: "Free Followup" }, drip: { total: 2, label: "Drip" } };
    const counts: Record<string, number> = {};
    for (const log of student.emailLogs) { if (sequences[log.type]) counts[log.type] = (counts[log.type] || 0) + 1; }
    return Object.entries(sequences).filter(([type]) => (counts[type] || 0) > 0).map(([type, { total, label }]) => ({ type, label, sent: Math.min(counts[type] || 0, total), total, completed: (counts[type] || 0) >= total }));
  }, [student]);

  const streakCalendar = useMemo(() => {
    if (!student) return [];
    const streakDates = new Set(student.streaks.map((s) => s.date.split("T")[0]));
    const days: { date: string; active: boolean }[] = [];
    const today = new Date();
    for (let i = 90; i >= 0; i--) { const d = new Date(today); d.setDate(d.getDate() - i); const key = d.toISOString().split("T")[0]; days.push({ date: key, active: streakDates.has(key) }); }
    return days;
  }, [student]);

  const avgQuizScore = useMemo(() => {
    if (!student?.quizHistory.length) return 0;
    return Math.round(student.quizHistory.reduce((a, q) => a + q.score, 0) / student.quizHistory.length);
  }, [student]);

  if (loading) return <div className="flex items-center justify-center min-h-[400px]"><p className="text-gray-400 text-sm">Chargement...</p></div>;
  if (error || !student) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <p className="text-gray-400 text-sm">Eleve introuvable</p>
      <Link href="/admin/students" className="text-sm text-gray-500 hover:text-[#111] transition-colors">&larr; Retour aux eleves</Link>
    </div>
  );

  const tierVal = student.enrollment?.tier || null;
  const badge = tierVal ? TIER_BADGE[tierVal] : null;

  return (
    <div>
      <Link href="/admin/students" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#111] transition-colors mb-6">&larr; Retour aux eleves</Link>

      {/* Profile Header */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0 ${badge ? badge.avatar : "bg-gray-200 text-gray-600"}`}>
            {(student.name || student.email)[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-[#111] truncate">{student.name || "Sans nom"}</h1>
            <p className="text-sm text-gray-400 truncate">{student.email}</p>
            {student.phone && (
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                {student.phone}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="text-xs text-gray-400">Inscrit le {new Date(student.createdAt).toLocaleDateString("fr-FR")}</span>
              {badge && <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>{badge.label}</span>}
              {student.engagement && (() => {
                const eng = ENGAGEMENT_BADGE[student.engagement];
                return eng ? (
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${eng.bg} ${eng.text}`}>
                    <span className={`w-2 h-2 rounded-full ${eng.dot}`} />
                    {eng.label}
                    {student.daysSinceLastActivity >= 0 && <span className="opacity-70 ml-0.5">({student.daysSinceLastActivity}j)</span>}
                  </span>
                ) : null;
              })()}
              {student.discordUsername && (
                <span className="inline-flex items-center gap-1.5 text-xs text-indigo-500">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" /></svg>
                  {student.discordUsername}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Contact Alert */}
      {student.shouldContact && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200">
          <div className="flex items-start gap-3">
            <span className="text-lg">&#9888;&#65039;</span>
            <div>
              <p className="text-sm font-semibold text-red-600">Sequence email terminee — A contacter manuellement</p>
              <a href={`mailto:${student.email}`} className="text-sm text-red-500 hover:text-red-700 underline underline-offset-2 transition-colors mt-1 inline-block">{student.email}</a>
            </div>
          </div>
        </div>
      )}

      {/* Sequence Progress */}
      {sequenceProgress.length > 0 && (
        <Card className="p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sequences</span>
            {sequenceProgress.map((seq) => (
              <div key={seq.type} className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{seq.label}:</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: seq.total }).map((_, i) => (
                    <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < seq.sent ? "bg-gray-600" : "bg-gray-200"}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{seq.sent}/{seq.total}{seq.completed && " \u2713"}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-[#111]">{student.completionPercentage}%</p>
          <p className="text-xs text-gray-400 mt-1">Completion</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-[#111]">{student.totalXP.toLocaleString("fr-FR")}</p>
          <p className="text-xs text-gray-400 mt-1">XP Total</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-[#111]">
            {student.currentStreak}
            <span className="text-sm font-normal text-gray-400 ml-1">/ {student.longestStreak}</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Streak actuel / Record</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-[#111]">{avgQuizScore}%</p>
          <p className="text-xs text-gray-400 mt-1">Quiz score moyen</p>
        </Card>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Module Progress */}
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">Progression par module</h2>
            <div className="space-y-4">
              {student.moduleProgress.map((mod) => (
                <div key={mod.moduleOrder}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[#111] truncate pr-4">{mod.moduleTitle}</span>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{mod.completedLessons}/{mod.totalLessons}</span>
                  </div>
                  <ProgressBar value={mod.percentage} size="sm" showLabel={false} />
                </div>
              ))}
              {!student.moduleProgress.length && <p className="text-sm text-gray-400 text-center py-4">Aucun module</p>}
            </div>
          </Card>

          {/* Quiz History */}
          <Card className="overflow-hidden">
            <div className="p-5 pb-3">
              <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider">Historique des quiz</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-2">Lecon</th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-2">Score</th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-2">Resultat</th>
                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {student.quizHistory.length ? student.quizHistory.map((quiz, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="px-5 py-3 text-sm text-[#111] truncate max-w-[200px]">{quiz.lessonTitle}</td>
                      <td className="px-5 py-3 text-sm font-medium text-[#111]">{quiz.score}%</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${quiz.passed ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                          {quiz.passed ? "Reussi" : "Echoue"}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-sm text-gray-400">{new Date(quiz.createdAt).toLocaleDateString("fr-FR")}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4} className="px-5 py-8 text-center text-gray-400 text-sm">Aucun quiz soumis</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Email Timeline */}
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">Historique des emails</h2>
            {student.emailLogs?.length ? (
              <div className="relative space-y-0">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
                {student.emailLogs.map((log, i) => {
                  const typeBadge = EMAIL_TYPE_BADGE[log.type] || EMAIL_TYPE_BADGE.manual;
                  return (
                    <div key={log.id || i} className="relative pl-7 py-3">
                      <div className="absolute left-0 top-[18px] w-[15px] h-[15px] rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs text-gray-400">
                          {new Date(log.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${typeBadge.bg} ${typeBadge.text}`}>{typeBadge.label}</span>
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] ${log.status === "sent" ? "bg-emerald-50 text-emerald-600" : log.status === "failed" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-400"}`}>{log.status}</span>
                      </div>
                      <p className="text-sm text-[#111] truncate">{log.subject}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-4">Aucun email envoye</p>
            )}
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">Streak (90 jours)</h2>
            <div className="grid grid-cols-[repeat(13,1fr)] gap-[3px]">
              {streakCalendar.map((day, i) => (
                <div key={i} title={day.date} className={`w-3 h-3 rounded-sm ${day.active ? "bg-emerald-400" : "bg-gray-100"}`} />
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">Actions</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1.5">Changer le tier</label>
                <div className="flex gap-2">
                  <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)} className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[#111] text-sm focus:outline-none focus:border-gray-400 transition-all appearance-none cursor-pointer">
                    <option value="">Aucun</option>
                    <option value="free">Gratuit</option>
                    <option value="starter">Starter</option>
                    <option value="academy">Academy</option>
                    <option value="one_to_one">One-to-One</option>
                  </select>
                  <button onClick={handleTierChange} disabled={saving} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg text-sm text-[#111] transition-all disabled:opacity-50">
                    {saving ? "..." : "Sauvegarder"}
                  </button>
                </div>
              </div>
              <a href={`mailto:${student.email}`} className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 hover:text-[#111] transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                Envoyer un email
              </a>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-4">Notes admin</h2>
            <textarea value={adminNotes} onChange={(e) => setAdminNotes(e.target.value)} placeholder="Ajouter des notes sur cet etudiant..." rows={5}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[#111] text-sm placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-all resize-y" />
            <div className="flex items-center justify-between mt-3">
              <div className="text-xs text-gray-400">{notesSavedAt && `Sauvegarde le ${notesSavedAt}`}</div>
              <button onClick={handleSaveNotes} disabled={savingNotes} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg text-sm text-[#111] transition-all disabled:opacity-50">
                {savingNotes ? "..." : "Sauvegarder"}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
