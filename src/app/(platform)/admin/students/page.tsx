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
}

interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  totalPages: number;
}

const TIER_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  free: { bg: "bg-gray-100", text: "text-gray-500", label: "Gratuit" },
  starter: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Starter" },
  academy: { bg: "bg-blue-50", text: "text-blue-600", label: "Academy" },
  one_to_one: { bg: "bg-red-50", text: "text-[#FF1744]", label: "One-to-One" },
};

const SORT_OPTIONS = [
  { value: "createdAt_desc", label: "Plus recents" },
  { value: "createdAt_asc", label: "Plus anciens" },
  { value: "name_asc", label: "Nom A-Z" },
  { value: "name_desc", label: "Nom Z-A" },
  { value: "xp_desc", label: "XP decroissant" },
  { value: "progress_desc", label: "Progression decroissante" },
];

export default function StudentsPage() {
  const [data, setData] = useState<StudentsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("all");
  const [sort, setSort] = useState("createdAt_desc");
  const [page, setPage] = useState(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const fetchStudents = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), sort });
    if (search) params.set("search", search);
    if (tier !== "all") params.set("tier", tier);
    fetch(`/api/admin/students?${params}`)
      .then((r) => r.json())
      .then((d: StudentsResponse) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [page, search, tier, sort]);

  useEffect(() => {
    const timeout = setTimeout(fetchStudents, search ? 300 : 0);
    return () => clearTimeout(timeout);
  }, [fetchStudents]);

  useEffect(() => {
    setPage(1);
  }, [search, tier, sort]);

  const formatRelative = (dateStr: string | null) => {
    if (!dateStr) return "\u2014";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
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
      const res = await fetch(`/api/admin/students/${id}`, { method: "DELETE" });
      if (res.ok) {
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
        fetchStudents();
      }
    } catch {
      // ignore
    } finally {
      setDeletingId(null);
      setConfirmDeleteId(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-[#111]">Eleves</h1>
        {data && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
            {data.total}
          </span>
        )}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Rechercher un eleve..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-sm px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[#111] text-sm focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400"
        />
        <select
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[#111] text-sm focus:outline-none focus:border-gray-400 transition-all appearance-none cursor-pointer"
        >
          <option value="all">Tous les tiers</option>
          <option value="free">Gratuit</option>
          <option value="starter">Starter</option>
          <option value="academy">Academy</option>
          <option value="one_to_one">One-to-One</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[#111] text-sm focus:outline-none focus:border-gray-400 transition-all appearance-none cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">Eleve</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">Tier</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">Progression</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">XP</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">Derniere activite</th>
                <th className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3">Discord</th>
                <th className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider px-5 py-3 w-12"></th>
                <th className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-gray-400 text-sm">Chargement...</td>
                </tr>
              ) : !data?.students.length ? (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-gray-400 text-sm">Aucun eleve trouve</td>
                </tr>
              ) : (
                data.students.map((student) => {
                  const pct = student.totalLessons > 0 ? Math.round((student.completedLessons / student.totalLessons) * 100) : 0;
                  const badge = student.tier ? TIER_BADGE[student.tier] : null;

                  return (
                    <Link key={student.id} href={`/admin/students/${student.id}`} className="contents">
                      <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-[#111] shrink-0">
                              {(student.name || student.email)[0].toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <p className="text-sm font-medium text-[#111] truncate group-hover:text-[#FF1744] transition-colors">
                                  {student.name || "Sans nom"}
                                </p>
                                {student.isBot && <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" title="Bot" />}
                              </div>
                              <p className="text-xs text-gray-400 truncate">{student.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          {badge ? (
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                              {badge.label}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400">{"\u2014"}</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24">
                              <ProgressBar value={pct} size="sm" showLabel={false} />
                            </div>
                            <span className="text-xs text-gray-500 whitespace-nowrap">
                              {student.completedLessons}/{student.totalLessons}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-[#111]">{student.totalXP.toLocaleString("fr-FR")}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm text-gray-500">{formatRelative(student.lastActive)}</span>
                        </td>
                        <td className="px-5 py-4 text-center">
                          <span className={`inline-block w-2.5 h-2.5 rounded-full ${student.discordUsername ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" : "bg-gray-200"}`} />
                        </td>
                        <td className="px-3 py-4 text-center">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirmDeleteId(student.id); }}
                            disabled={deletingId === student.id}
                            className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 flex items-center gap-1.5 text-xs font-medium shadow-sm"
                            title="Supprimer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    </Link>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {data && data.totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 px-5 py-4 border-t border-gray-100">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1} className="text-sm text-gray-500 hover:text-[#111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              &larr; Precedent
            </button>
            <span className="text-sm text-gray-400">Page {data.page} sur {data.totalPages}</span>
            <button onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))} disabled={page >= data.totalPages} className="text-sm text-gray-500 hover:text-[#111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              Suivant &rarr;
            </button>
          </div>
        )}
      </div>

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
              <h3 className="text-lg font-semibold text-[#111]">Supprimer cet eleve ?</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">Cette action est irreversible. Toutes les donnees de cet eleve seront definitivement supprimees.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmDeleteId(null)} className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">Annuler</button>
              <button onClick={() => handleDelete(confirmDeleteId)} disabled={deletingId !== null} className="px-4 py-2 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all disabled:opacity-50">
                {deletingId ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-50 border border-emerald-200 text-emerald-600 px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
          Eleve supprime avec succes
        </div>
      )}
    </div>
  );
}
