"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
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
}

interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  totalPages: number;
}

const TIER_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  starter: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Starter" },
  academy: { bg: "bg-blue-500/20", text: "text-blue-400", label: "Academy" },
  one_to_one: { bg: "bg-amber-500/20", text: "text-amber-400", label: "One-to-One" },
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

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, tier, sort]);

  const formatRelative = (dateStr: string | null) => {
    if (!dateStr) return "—";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `Il y a ${mins}min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `Il y a ${days}j`;
    return new Date(dateStr).toLocaleDateString("fr-FR");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Eleves</h1>
        {data && (
          <span className="text-xs bg-white/[0.08] text-text-secondary px-2.5 py-1 rounded-full font-medium">
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
          className="flex-1 max-w-sm px-4 py-2.5 bg-glass-bg border border-glass-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-text-tertiary"
        />
        <select
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="px-4 py-2.5 bg-glass-bg border border-glass-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer"
        >
          <option value="all">Tous les tiers</option>
          <option value="starter">Starter</option>
          <option value="academy">Academy</option>
          <option value="one_to_one">One-to-One</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2.5 bg-glass-bg border border-glass-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <GlassCard hover={false} className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  Eleve
                </th>
                <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  Tier
                </th>
                <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  Progression
                </th>
                <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  XP
                </th>
                <th className="text-left text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  Derniere activite
                </th>
                <th className="text-center text-xs font-medium text-text-tertiary uppercase tracking-wider px-5 py-3">
                  Discord
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-text-tertiary text-sm">
                    Chargement...
                  </td>
                </tr>
              ) : !data?.students.length ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-text-tertiary text-sm">
                    Aucun eleve trouve
                  </td>
                </tr>
              ) : (
                data.students.map((student) => {
                  const pct =
                    student.totalLessons > 0
                      ? Math.round((student.completedLessons / student.totalLessons) * 100)
                      : 0;
                  const badge = student.tier ? TIER_BADGE[student.tier] : null;

                  return (
                    <Link
                      key={student.id}
                      href={`/admin/students/${student.id}`}
                      className="contents"
                    >
                      <tr className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors cursor-pointer group">
                        {/* Name + Email */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-xs font-bold text-white shrink-0">
                              {(student.name || student.email)[0].toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-text-primary truncate group-hover:text-white transition-colors">
                                {student.name || "Sans nom"}
                              </p>
                              <p className="text-xs text-text-tertiary truncate">{student.email}</p>
                            </div>
                          </div>
                        </td>

                        {/* Tier */}
                        <td className="px-5 py-4">
                          {badge ? (
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}
                            >
                              {badge.label}
                            </span>
                          ) : (
                            <span className="text-xs text-text-tertiary">—</span>
                          )}
                        </td>

                        {/* Progression */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24">
                              <ProgressBar value={pct} size="sm" showLabel={false} />
                            </div>
                            <span className="text-xs text-text-secondary whitespace-nowrap">
                              {student.completedLessons}/{student.totalLessons}
                            </span>
                          </div>
                        </td>

                        {/* XP */}
                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-text-primary">
                            {student.totalXP.toLocaleString("fr-FR")}
                          </span>
                        </td>

                        {/* Last active */}
                        <td className="px-5 py-4">
                          <span className="text-sm text-text-secondary">
                            {formatRelative(student.lastActive)}
                          </span>
                        </td>

                        {/* Discord */}
                        <td className="px-5 py-4 text-center">
                          <span
                            className={`inline-block w-2.5 h-2.5 rounded-full ${
                              student.discordUsername
                                ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]"
                                : "bg-white/[0.15]"
                            }`}
                          />
                        </td>
                      </tr>
                    </Link>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data && data.totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 px-5 py-4 border-t border-white/[0.06]">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="text-sm text-text-secondary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              &larr; Precedent
            </button>
            <span className="text-sm text-text-tertiary">
              Page {data.page} sur {data.totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
              disabled={page >= data.totalPages}
              className="text-sm text-text-secondary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Suivant &rarr;
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
