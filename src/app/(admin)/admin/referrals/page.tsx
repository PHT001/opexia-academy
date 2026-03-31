"use client";

import { useEffect, useState } from "react";

interface ReferrerStat {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalReferrals: number;
  confirmedReferrals: number;
  totalCommission: number;
  paidCommission: number;
  unpaidCommission: number;
}

interface ReferralEntry {
  id: string;
  referrer: { name: string; email: string; code: string };
  referred: { name: string; email: string };
  tier: string | null;
  commission: number;
  status: string;
  createdAt: string;
  paidAt: string | null;
}

interface Stats {
  totalReferrals: number;
  confirmedReferrals: number;
  pendingReferrals: number;
  totalCommission: number;
  paidCommission: number;
  unpaidCommission: number;
}

const TIER_LABELS: Record<string, string> = {
  starter: "Starter",
  academy: "Academy",
  one_to_one: "One-to-One",
};

const STATUS_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "En attente", color: "text-amber-400", bg: "bg-amber-400/10" },
  confirmed: { label: "À payer", color: "text-blue-400", bg: "bg-blue-400/10" },
  paid: { label: "Payé", color: "text-emerald-400", bg: "bg-emerald-400/10" },
};

export default function AdminReferralsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [referrerStats, setReferrerStats] = useState<ReferrerStat[]>([]);
  const [referrals, setReferrals] = useState<ReferralEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [marking, setMarking] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/referrals");
      const data = await res.json();
      setStats(data.stats);
      setReferrerStats(data.referrerStats || []);
      setReferrals(data.referrals || []);
    } catch {
      console.error("Failed to fetch referral data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAllUnpaid() {
    const unpaid = referrals.filter((r) => r.status === "confirmed").map((r) => r.id);
    setSelectedIds(new Set(unpaid));
  }

  async function markAsPaid() {
    if (selectedIds.size === 0) return;
    setMarking(true);
    try {
      await fetch("/api/admin/referrals", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referralIds: Array.from(selectedIds), action: "mark_paid" }),
      });
      setSelectedIds(new Set());
      await fetchData();
    } catch {
      alert("Erreur lors de la mise à jour");
    }
    setMarking(false);
  }

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-white/5 rounded-lg w-48" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => <div key={i} className="h-24 bg-white/5 rounded-xl" />)}
        </div>
        <div className="h-64 bg-white/5 rounded-xl" />
      </div>
    );
  }

  const unpaidCount = referrals.filter((r) => r.status === "confirmed").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
          <span className="text-2xl">🤝</span> Parrainages
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Suivi des parrainages et commissions à verser.
        </p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total parrainages" value={stats.totalReferrals} />
          <StatCard label="Confirmés" value={stats.confirmedReferrals} accent />
          <StatCard label="En attente paiement" value={`${(stats.unpaidCommission / 100).toFixed(0)}€`} warning={stats.unpaidCommission > 0} />
          <StatCard label="Déjà payé" value={`${(stats.paidCommission / 100).toFixed(0)}€`} />
        </div>
      )}

      {/* Top referrers */}
      {referrerStats.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span>🏆</span> Parrains actifs
          </h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-[var(--text-secondary)]">
                  <th className="text-left px-4 py-3 font-medium">Parrain</th>
                  <th className="text-left px-4 py-3 font-medium">Code</th>
                  <th className="text-center px-4 py-3 font-medium">Filleuls</th>
                  <th className="text-right px-4 py-3 font-medium">Commission due</th>
                  <th className="text-right px-4 py-3 font-medium">Déjà payé</th>
                </tr>
              </thead>
              <tbody>
                {referrerStats.map((r) => (
                  <tr key={r.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium">{r.name}</p>
                      <p className="text-xs text-[var(--text-tertiary)]">{r.email}</p>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-white/[0.06] px-2 py-1 rounded font-mono">{r.referralCode}</code>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-bold">{r.confirmedReferrals}</span>
                      <span className="text-[var(--text-tertiary)]">/{r.totalReferrals}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {r.unpaidCommission > 0 ? (
                        <span className="font-bold text-amber-400">{(r.unpaidCommission / 100).toFixed(2)}€</span>
                      ) : (
                        <span className="text-[var(--text-tertiary)]">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {r.paidCommission > 0 ? (
                        <span className="text-emerald-400">{(r.paidCommission / 100).toFixed(2)}€</span>
                      ) : (
                        <span className="text-[var(--text-tertiary)]">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* All referrals */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <span>📋</span> Détail des parrainages
          </h2>
          {unpaidCount > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={selectAllUnpaid}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sélectionner les {unpaidCount} à payer
              </button>
              {selectedIds.size > 0 && (
                <button
                  onClick={markAsPaid}
                  disabled={marking}
                  className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-emerald-600 disabled:opacity-50 transition-all"
                >
                  {marking ? "..." : `Marquer ${selectedIds.size} comme payé${selectedIds.size > 1 ? "s" : ""}`}
                </button>
              )}
            </div>
          )}
        </div>

        {referrals.length === 0 ? (
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-12 text-center">
            <p className="text-2xl mb-2">🤝</p>
            <p className="text-[var(--text-secondary)]">Aucun parrainage pour le moment.</p>
          </div>
        ) : (
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-[var(--text-secondary)]">
                  <th className="w-10 px-4 py-3" />
                  <th className="text-left px-4 py-3 font-medium">Parrain</th>
                  <th className="text-left px-4 py-3 font-medium">Filleul</th>
                  <th className="text-center px-4 py-3 font-medium">Plan</th>
                  <th className="text-right px-4 py-3 font-medium">Commission</th>
                  <th className="text-center px-4 py-3 font-medium">Statut</th>
                  <th className="text-right px-4 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((r) => {
                  const s = STATUS_LABELS[r.status] || STATUS_LABELS.pending;
                  return (
                    <tr key={r.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3">
                        {r.status === "confirmed" && (
                          <input
                            type="checkbox"
                            checked={selectedIds.has(r.id)}
                            onChange={() => toggleSelect(r.id)}
                            className="rounded border-white/20 bg-transparent accent-emerald-500"
                          />
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-medium">{r.referrer.name}</p>
                        <p className="text-xs text-[var(--text-tertiary)]">{r.referrer.code}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-medium">{r.referred.name}</p>
                        <p className="text-xs text-[var(--text-tertiary)]">{r.referred.email}</p>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {r.tier ? (
                          <span className="text-xs font-semibold bg-white/[0.06] px-2 py-1 rounded">
                            {TIER_LABELS[r.tier] || r.tier}
                          </span>
                        ) : (
                          <span className="text-[var(--text-tertiary)]">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        {r.commission > 0 ? `${(r.commission / 100).toFixed(2)}€` : "—"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.color}`}>
                          {s.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-xs text-[var(--text-tertiary)]">
                        {new Date(r.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                        {r.paidAt && (
                          <p className="text-emerald-400 mt-0.5">
                            Payé le {new Date(r.paidAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                          </p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, accent, warning }: { label: string; value: string | number; accent?: boolean; warning?: boolean }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
      <p className="text-xs text-[var(--text-tertiary)] mb-1">{label}</p>
      <p className={`text-2xl font-bold ${warning ? "text-amber-400" : accent ? "text-[#FF1744]" : ""}`}>
        {value}
      </p>
    </div>
  );
}
