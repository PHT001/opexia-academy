"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Student {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  completedLessons: number;
  totalLessons: number;
  tier: string | null;
  lastActive: string | null;
  discordUsername: string | null;
  totalXP: number;
  isBot: boolean;
  isLead?: boolean;
}

interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  totalPages: number;
}

const TIER_CONFIG: Record<string, { bg: string; text: string; label: string; sectionBg: string; sectionBorder: string; dot: string }> = {
  lead:       { bg: "bg-purple-50", text: "text-purple-600", label: "Lead",       sectionBg: "bg-purple-50/50", sectionBorder: "border-purple-200", dot: "bg-purple-400" },
  free:       { bg: "bg-gray-100",  text: "text-gray-500",   label: "Gratuit",    sectionBg: "bg-gray-50/50",   sectionBorder: "border-gray-200",   dot: "bg-gray-400" },
  starter:    { bg: "bg-emerald-50",text: "text-emerald-600",label: "Starter",    sectionBg: "bg-emerald-50/50",sectionBorder: "border-emerald-200",dot: "bg-emerald-400" },
  academy:    { bg: "bg-blue-50",   text: "text-blue-600",   label: "Academy",    sectionBg: "bg-blue-50/50",   sectionBorder: "border-blue-200",   dot: "bg-blue-400" },
  one_to_one: { bg: "bg-red-50",    text: "text-[#FF1744]",  label: "One-to-One", sectionBg: "bg-red-50/50",    sectionBorder: "border-red-200",    dot: "bg-[#FF1744]" },
};

const TIER_ORDER = ["one_to_one", "academy", "starter", "free", "lead"];

export default function StudentsPage() {
  const [data, setData] = useState<StudentsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const fetchStudents = useCallback(() => {
    fetch("/api/admin/students?limit=200&sort=createdAt&order=desc")
      .then((r) => r.json())
      .then((d: StudentsResponse) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Initial fetch
  useEffect(() => { fetchStudents(); }, [fetchStudents]);

  // Auto-refresh every 15 seconds
  useEffect(() => {
    const interval = setInterval(fetchStudents, 15000);
    return () => clearInterval(interval);
  }, [fetchStudents]);

  const formatRelative = (dateStr: string | null) => {
    if (!dateStr) return "\u2014";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "A l'instant";
    if (mins < 60) return `Il y a ${mins}min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `Il y a ${days}j`;
    return new Date(dateStr).toLocaleDateString("fr-FR");
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const isLead = id.startsWith("lead_");
      const realId = isLead ? id.replace("lead_", "") : id;
      const res = isLead
        ? await fetch("/api/admin/leads", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: realId }) })
        : await fetch(`/api/admin/students/${id}`, { method: "DELETE" });
      if (res.ok) {
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
        fetchStudents();
      }
    } catch { /* ignore */ }
    finally { setDeletingId(null); setConfirmDeleteId(null); }
  };

  // Group students by tier
  const grouped: Record<string, Student[]> = {};
  if (data?.students) {
    for (const s of data.students) {
      const key = s.isLead ? "lead" : (s.tier || "free");
      if (!grouped[key]) grouped[key] = [];
      // Apply search filter client-side
      if (search) {
        const q = search.toLowerCase();
        if (!(s.name?.toLowerCase().includes(q) || s.email.toLowerCase().includes(q))) continue;
      }
      grouped[key].push(s);
    }
  }

  // Count per tier for badges
  const tierCounts: Record<string, number> = {};
  for (const [key, list] of Object.entries(grouped)) {
    tierCounts[key] = list.length;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#111]">Eleves</h1>
          {data && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
              {data.total}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-gray-400">Actualisation auto</span>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher par nom ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[#111] text-sm focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400"
        />
      </div>

      {/* Tier summary chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TIER_ORDER.map((t) => {
          const cfg = TIER_CONFIG[t];
          const count = tierCounts[t] || 0;
          if (count === 0) return null;
          return (
            <span key={t} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}>
              <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
              {cfg.label}: {count}
            </span>
          );
        })}
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400 text-sm">Chargement...</div>
      ) : (
        <div className="space-y-6">
          {TIER_ORDER.map((tierKey) => {
            const students = grouped[tierKey];
            if (!students?.length) return null;
            const cfg = TIER_CONFIG[tierKey];
            const isLeadSection = tierKey === "lead";

            return (
              <div key={tierKey} className={`rounded-2xl border ${cfg.sectionBorder} overflow-hidden`}>
                {/* Section header */}
                <div className={`${cfg.sectionBg} px-5 py-3 flex items-center justify-between border-b ${cfg.sectionBorder}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                    <span className={`text-sm font-semibold ${cfg.text}`}>{cfg.label}</span>
                    <span className="text-xs text-gray-400 font-medium">{students.length}</span>
                  </div>
                </div>

                {/* Students list */}
                <div className="bg-white">
                  {students.map((student, i) => {
                    const pct = student.totalLessons > 0 ? Math.round((student.completedLessons / student.totalLessons) * 100) : 0;

                    const row = (
                      <div
                        key={student.id}
                        className={`flex items-center gap-4 px-5 py-3.5 ${i < students.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition-colors group ${isLeadSection ? "" : "cursor-pointer"}`}
                      >
                        {/* Avatar */}
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isLeadSection ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-[#111]"}`}>
                          {(student.name || student.email)[0].toUpperCase()}
                        </div>

                        {/* Name + Email */}
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm font-medium truncate ${isLeadSection ? "text-gray-600" : "text-[#111] group-hover:text-[#FF1744]"} transition-colors`}>
                            {student.name || (isLeadSection ? student.email.split("@")[0] : "Sans nom")}
                          </p>
                          <p className="text-xs text-gray-400 truncate">{student.email}</p>
                        </div>

                        {/* Progress (not for leads) */}
                        <div className="hidden sm:flex items-center gap-2 w-32">
                          {isLeadSection ? (
                            <span className="text-xs text-gray-300">{"\u2014"}</span>
                          ) : (
                            <>
                              <div className="w-20"><ProgressBar value={pct} size="sm" showLabel={false} /></div>
                              <span className="text-xs text-gray-400">{student.completedLessons}/{student.totalLessons}</span>
                            </>
                          )}
                        </div>

                        {/* XP */}
                        <div className="hidden md:block w-16 text-right">
                          {isLeadSection ? (
                            <span className="text-xs text-gray-300">{"\u2014"}</span>
                          ) : (
                            <span className="text-sm font-medium text-[#111]">{student.totalXP}</span>
                          )}
                        </div>

                        {/* Last active */}
                        <div className="hidden lg:block w-28 text-right">
                          <span className="text-xs text-gray-400">{formatRelative(student.lastActive || student.createdAt)}</span>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirmDeleteId(student.id); }}
                          disabled={deletingId === student.id}
                          className="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all disabled:opacity-50 text-xs font-medium shrink-0 opacity-0 group-hover:opacity-100"
                        >
                          Supprimer
                        </button>
                      </div>
                    );

                    if (isLeadSection) return row;
                    return (
                      <Link key={student.id} href={`/admin/students/${student.id}`} className="block">
                        {row}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {Object.keys(grouped).length === 0 && (
            <div className="text-center py-16 text-gray-400 text-sm">
              {search ? "Aucun resultat" : "Aucun eleve"}
            </div>
          )}
        </div>
      )}

      {/* Confirmation Dialog */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#111]">Supprimer ?</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">Cette action est irreversible.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmDeleteId(null)} className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">Annuler</button>
              <button onClick={() => handleDelete(confirmDeleteId)} disabled={deletingId !== null} className="px-4 py-2 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all disabled:opacity-50">
                {deletingId ? "..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-50 border border-emerald-200 text-emerald-600 px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
          Supprime avec succes
        </div>
      )}
    </div>
  );
}
