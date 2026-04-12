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
  isSuspended?: boolean;
  leadStatus?: string;
  leadSource?: string;
  leadConvertedAt?: string | null;
}

interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  totalPages: number;
}

interface AdminStats {
  totalStudents: number;
  activeStudents: number;
  totalRevenue: number;
  avgCompletion: number;
  emails: { sent: number; failed: number; thisWeek: number; byType: Record<string, number> };
  leads: { total: number; converted: number; conversionRate: number };
}

const TIER_CONFIG: Record<string, { bg: string; text: string; label: string; sectionBg: string; sectionBorder: string; dot: string }> = {
  lead:       { bg: "bg-purple-50", text: "text-purple-600", label: "Lead",       sectionBg: "bg-purple-50/50", sectionBorder: "border-purple-200", dot: "bg-purple-400" },
  free:       { bg: "bg-gray-100",  text: "text-gray-500",   label: "Gratuit",    sectionBg: "bg-gray-50/50",   sectionBorder: "border-gray-200",   dot: "bg-gray-400" },
  starter:    { bg: "bg-emerald-50",text: "text-emerald-600",label: "Starter",    sectionBg: "bg-emerald-50/50",sectionBorder: "border-emerald-200",dot: "bg-emerald-400" },
  academy:    { bg: "bg-blue-50",   text: "text-blue-600",   label: "Academy",    sectionBg: "bg-blue-50/50",   sectionBorder: "border-blue-200",   dot: "bg-blue-400" },
  one_to_one: { bg: "bg-red-50",    text: "text-[#FF1744]",  label: "One-to-One", sectionBg: "bg-red-50/50",    sectionBorder: "border-red-200",    dot: "bg-[#FF1744]" },
};

const TIER_ORDER = ["one_to_one", "academy", "starter", "free", "lead"];

const EMAIL_TYPE_LABELS: Record<string, string> = {
  drip: "Onboarding", free_followup: "Free follow-up", manual: "Manuel",
  weekly_recap: "Recap hebdo", nurture: "Nurture", welcome: "Bienvenue",
};

const LEAD_STATUS_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  active: { bg: "bg-amber-50", text: "text-amber-600", label: "Actif" },
  contacted: { bg: "bg-blue-50", text: "text-blue-600", label: "Contacte" },
  converted: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Converti" },
};

export default function StudentsPage() {
  const [data, setData] = useState<StudentsResponse | null>(null);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);

  const fetchAll = useCallback(() => {
    Promise.all([
      fetch("/api/admin/students?limit=200&sort=createdAt&order=desc").then((r) => r.json()),
      fetch("/api/admin/stats").then((r) => r.json()),
    ]).then(([studentsData, statsData]) => {
      setData(studentsData);
      setStats(statsData);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);
  useEffect(() => {
    const interval = setInterval(fetchAll, 15000);
    return () => clearInterval(interval);
  }, [fetchAll]);

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

  const formatEuro = (n: number) => {
    const parts = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${parts} EUR`;
  };

  const handleToggleSuspend = async (id: string, currentlySuspended: boolean) => {
    try {
      const res = await fetch(`/api/admin/students/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suspended: !currentlySuspended }),
      });
      if (res.ok) fetchAll();
    } catch { /* ignore */ }
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
        fetchAll();
      }
    } catch { /* ignore */ }
    finally { setDeletingId(null); setConfirmDeleteId(null); }
  };

  const handleExportCSV = () => {
    if (!data?.students) return;
    const headers = ["Nom", "Email", "Tier", "Progression (%)", "XP", "Derniere activite", "Date inscription"];
    const rows = data.students.map((s) => [
      s.name || (s.isLead ? "Lead" : "Sans nom"),
      s.email,
      s.isLead ? "Lead" : (TIER_CONFIG[s.tier || ""]?.label || s.tier || ""),
      s.isLead ? "" : String(s.totalLessons > 0 ? Math.round((s.completedLessons / s.totalLessons) * 100) : 0),
      s.isLead ? "" : String(s.totalXP),
      s.lastActive || s.createdAt,
      s.createdAt,
    ]);
    const csvContent = "\uFEFF" + [headers, ...rows].map((r) => r.map((c) => `"${(c || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `eleves-opexia-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Group students by tier
  const grouped: Record<string, Student[]> = {};
  if (data?.students) {
    for (const s of data.students) {
      const key = s.isLead ? "lead" : (s.tier || "free");
      if (!grouped[key]) grouped[key] = [];
      if (search) {
        const q = search.toLowerCase();
        if (!(s.name?.toLowerCase().includes(q) || s.email.toLowerCase().includes(q))) continue;
      }
      grouped[key].push(s);
    }
  }

  const tierCounts: Record<string, number> = {};
  for (const [key, list] of Object.entries(grouped)) tierCounts[key] = list.length;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#111]">Eleves</h1>
          {data && <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">{data.total}</span>}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleExportCSV} disabled={!data?.students?.length} className="px-4 py-2 bg-[#111] text-white text-xs font-medium rounded-lg hover:bg-[#333] transition-all disabled:opacity-30">
            Exporter CSV
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Eleves</p>
            <p className="text-2xl font-bold text-[#111]">{stats.totalStudents}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stats.activeStudents} actifs 7j</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Revenue</p>
            <p className="text-2xl font-bold text-[#FF1744]">{formatEuro(stats.totalRevenue)}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Leads</p>
            <p className="text-2xl font-bold text-purple-600">{stats.leads.total}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stats.leads.conversionRate}% convertis</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Emails envoyes</p>
            <p className="text-2xl font-bold text-[#111]">{stats.emails.sent}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stats.emails.thisWeek} cette semaine</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">Completion</p>
            <p className="text-2xl font-bold text-[#111]">{stats.avgCompletion}%</p>
            <p className="text-xs text-gray-400 mt-0.5">taux moyen</p>
          </div>
        </div>
      )}

      {/* Email breakdown */}
      {stats?.emails && Object.keys(stats.emails.byType).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">Emails par type</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.emails.byType).map(([type, count]) => (
              <span key={type} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs">
                <span className="font-medium text-[#111]">{count}</span>
                <span className="text-gray-400">{EMAIL_TYPE_LABELS[type] || type}</span>
              </span>
            ))}
            {stats.emails.failed > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 rounded-full text-xs">
                <span className="font-medium text-red-600">{stats.emails.failed}</span>
                <span className="text-red-400">echoues</span>
              </span>
            )}
          </div>
        </div>
      )}

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
                <div className={`${cfg.sectionBg} px-5 py-3 flex items-center justify-between border-b ${cfg.sectionBorder}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                    <span className={`text-sm font-semibold ${cfg.text}`}>{cfg.label}</span>
                    <span className="text-xs text-gray-400 font-medium">{students.length}</span>
                  </div>
                </div>

                <div className="bg-white divide-y divide-gray-50">
                  {students.map((student) => {
                    const pct = student.totalLessons > 0 ? Math.round((student.completedLessons / student.totalLessons) * 100) : 0;
                    const isExpanded = expandedLeadId === student.id;
                    const statusBadge = student.leadStatus ? LEAD_STATUS_BADGE[student.leadStatus] : null;

                    const row = (
                      <div key={student.id}>
                        <div
                          className={`flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/50 transition-colors group ${isLeadSection ? "cursor-pointer" : "cursor-pointer"}`}
                          onClick={isLeadSection ? () => setExpandedLeadId(isExpanded ? null : student.id) : undefined}
                        >
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isLeadSection ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-[#111]"}`}>
                            {(student.name || student.email)[0].toUpperCase()}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className={`text-sm font-medium truncate ${isLeadSection ? "text-gray-600" : "text-[#111] group-hover:text-[#FF1744]"} transition-colors`}>
                                {student.name || (isLeadSection ? student.email.split("@")[0] : "Sans nom")}
                              </p>
                              {isLeadSection && statusBadge && (
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${statusBadge.bg} ${statusBadge.text}`}>
                                  {statusBadge.label}
                                </span>
                              )}
                              {!isLeadSection && student.isSuspended && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-50 text-orange-600">
                                  Desactive
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 truncate">{student.email}</p>
                          </div>

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

                          <div className="hidden md:block w-16 text-right">
                            {isLeadSection ? (
                              <span className="text-xs text-gray-300">{"\u2014"}</span>
                            ) : (
                              <span className="text-sm font-medium text-[#111]">{student.totalXP}</span>
                            )}
                          </div>

                          <div className="hidden lg:block w-28 text-right">
                            <span className="text-xs text-gray-400">{formatRelative(student.lastActive || student.createdAt)}</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-all">
                            {!isLeadSection && (
                              <button
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleToggleSuspend(student.id, !!student.isSuspended); }}
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${student.isSuspended ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" : "bg-orange-50 text-orange-500 hover:bg-orange-100"}`}
                              >
                                {student.isSuspended ? "Reactiver" : "Desactiver"}
                              </button>
                            )}
                            <button
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setConfirmDeleteId(student.id); }}
                              disabled={deletingId === student.id}
                              className="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-all disabled:opacity-50 text-xs font-medium"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>

                        {/* Expandable lead detail */}
                        {isLeadSection && isExpanded && (
                          <div className="px-5 pb-4 pt-1 bg-purple-50/30 border-t border-purple-100">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                              <div>
                                <p className="text-gray-400 mb-0.5">Email</p>
                                <p className="text-[#111] font-medium">{student.email}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 mb-0.5">Source</p>
                                <p className="text-[#111] font-medium">{student.leadSource === "guide_niches" ? "Guide 5 niches IA" : (student.leadSource || "\u2014")}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 mb-0.5">Date inscription</p>
                                <p className="text-[#111] font-medium">{new Date(student.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 mb-0.5">Statut</p>
                                {statusBadge ? (
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${statusBadge.bg} ${statusBadge.text}`}>
                                    {statusBadge.label}
                                  </span>
                                ) : (
                                  <p className="text-[#111]">{"\u2014"}</p>
                                )}
                              </div>
                              {student.leadConvertedAt && (
                                <div className="col-span-2">
                                  <p className="text-gray-400 mb-0.5">Date conversion</p>
                                  <p className="text-emerald-600 font-medium">{new Date(student.leadConvertedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
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
