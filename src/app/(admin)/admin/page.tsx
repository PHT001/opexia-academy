"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface MonthlyRevenue {
  month: string;
  revenue: number;
}

interface EnrollmentsByTier {
  starter: number;
  academy: number;
  one_to_one: number;
}

interface RecentEnrollment {
  id: string;
  userName: string;
  userEmail: string;
  tier: string;
  createdAt: string;
}

interface RecentActivityItem {
  type: string;
  userName: string;
  detail: string;
  createdAt: string;
}

interface UserGrowth {
  month: string;
  count: number;
}

interface AdminStats {
  totalStudents: number;
  activeStudents: number;
  avgCompletion: number;
  avgQuizScore: number;
  totalLessons: number;
  completionsToday: number;
  totalRevenue: number;
  monthlyRevenue: MonthlyRevenue[];
  enrollmentsByTier: EnrollmentsByTier;
  recentEnrollments: RecentEnrollment[];
  recentActivity: RecentActivityItem[];
  userGrowth: UserGrowth[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatEuro(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k €`;
  return `${n} €`;
}

function relativeTime(dateStr: string) {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.max(0, now - then);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "à l'instant";
  if (minutes < 60) return `il y a ${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `il y a ${days}j`;
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

const tierConfig: Record<string, { label: string; color: string; bg: string }> =
  {
    starter: {
      label: "Starter",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    academy: {
      label: "Academy",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    one_to_one: {
      label: "1-to-1",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  };

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedNumber({
  value,
  suffix = "",
  format,
}: {
  value: number;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {format ? format(display) : display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom tooltip for charts                                          */
/* ------------------------------------------------------------------ */

function ChartTooltip({
  active,
  payload,
  label,
  valueSuffix,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  valueSuffix?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-black/90 border border-white/10 rounded-lg px-3 py-2 text-xs">
      <p className="text-white/50 mb-1">{label}</p>
      <p className="text-white font-semibold">
        {payload[0].value.toLocaleString("fr-FR")}
        {valueSuffix || ""}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => {
        if (!r.ok) throw new Error(`Erreur ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setStats(data);
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
        <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
        <p className="text-white/40 mb-10">Vue d&apos;ensemble de la plateforme</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <GlassCard key={i} hover={false} className="p-6 animate-pulse">
              <div className="h-8 w-20 bg-white/[0.06] rounded mb-2" />
              <div className="h-3 w-24 bg-white/[0.04] rounded" />
            </GlassCard>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[...Array(2)].map((_, i) => (
            <GlassCard key={i} hover={false} className="p-6 h-72 animate-pulse">
              <div className="h-4 w-32 bg-white/[0.06] rounded mb-4" />
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
        <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
        <GlassCard hover={false} className="p-8 text-center">
          <div className="text-red-400 text-lg font-semibold mb-2">
            Erreur de chargement
          </div>
          <p className="text-white/40 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#FF1744]/20 text-[#FF1744] rounded-lg text-sm font-medium hover:bg-[#FF1744]/30 transition-colors"
          >
            Réessayer
          </button>
        </GlassCard>
      </div>
    );
  }

  if (!stats) return null;

  const totalTier =
    (stats.enrollmentsByTier.starter || 0) +
    (stats.enrollmentsByTier.academy || 0) +
    (stats.enrollmentsByTier.one_to_one || 0);

  const tierData = [
    { key: "starter", count: stats.enrollmentsByTier.starter || 0 },
    { key: "academy", count: stats.enrollmentsByTier.academy || 0 },
    { key: "one_to_one", count: stats.enrollmentsByTier.one_to_one || 0 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
      <p className="text-white/40 mb-10">
        Vue d&apos;ensemble de la plateforme
      </p>

      {/* ============================================================ */}
      {/*  ROW 1 — KPI Cards                                           */}
      {/* ============================================================ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Total Eleves */}
        <GlassCard hover={false} className="p-6 relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <p className="text-3xl font-black text-white">
            <AnimatedNumber value={stats.totalStudents} />
          </p>
          <p className="text-xs text-white/40 mt-1">Total Eleves</p>
        </GlassCard>

        {/* Revenue Total */}
        <GlassCard hover={false} className="p-6 relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <p className="text-3xl font-black text-white">
            <AnimatedNumber value={stats.totalRevenue} format={formatEuro} />
          </p>
          <p className="text-xs text-white/40 mt-1">Revenue Total</p>
        </GlassCard>

        {/* Actifs 7j */}
        <GlassCard hover={false} className="p-6 relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
          <p className="text-3xl font-black text-white">
            <AnimatedNumber value={stats.activeStudents} />
          </p>
          <p className="text-xs text-white/40 mt-1">Actifs 7j</p>
        </GlassCard>

        {/* Taux Completion */}
        <GlassCard hover={false} className="p-6 relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
          </div>
          <p className="text-3xl font-black text-white">
            <AnimatedNumber value={stats.avgCompletion} suffix="%" />
          </p>
          <p className="text-xs text-white/40 mt-1">Taux Completion</p>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/*  ROW 2 — Revenue Chart + Tier Breakdown                      */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Revenue Chart */}
        <GlassCard hover={false} className="p-6">
          <h2 className="text-sm font-semibold text-white mb-1">Revenue Mensuel</h2>
          <p className="text-xs text-white/40 mb-6">Evolution sur les derniers mois</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.monthlyRevenue}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF1744" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#FF1744" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                  tickFormatter={(v: number) => `${v >= 1000 ? `${v / 1000}k` : v}`}
                  width={40}
                />
                <Tooltip
                  content={<ChartTooltip valueSuffix=" €" />}
                  cursor={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#FF1744"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Tier Breakdown */}
        <GlassCard hover={false} className="p-6">
          <h2 className="text-sm font-semibold text-white mb-1">
            Repartition par Offre
          </h2>
          <p className="text-xs text-white/40 mb-6">
            {totalTier} inscriptions totales
          </p>
          <div className="space-y-5">
            {tierData.map(({ key, count }) => {
              const cfg = tierConfig[key];
              const pct = totalTier > 0 ? Math.round((count / totalTier) * 100) : 0;
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${cfg.color} ${cfg.bg}`}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <span className="text-sm text-white font-semibold">
                      {count}{" "}
                      <span className="text-white/30 font-normal">
                        ({pct}%)
                      </span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        key === "starter"
                          ? "bg-emerald-400"
                          : key === "academy"
                          ? "bg-blue-400"
                          : "bg-amber-400"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/*  ROW 3 — Activity Feed + Recent Enrollments                  */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Activity Feed */}
        <GlassCard hover={false} className="p-6">
          <h2 className="text-sm font-semibold text-white mb-1">
            Activite Recente
          </h2>
          <p className="text-xs text-white/40 mb-4">
            Dernieres actions des eleves
          </p>
          <div className="space-y-1 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            {stats.recentActivity.length === 0 && (
              <p className="text-white/30 text-xs py-4 text-center">
                Aucune activite recente
              </p>
            )}
            {stats.recentActivity.slice(0, 20).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0"
              >
                {/* Icon */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    item.type === "lesson"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : item.type === "quiz"
                      ? "bg-blue-400/10 text-blue-400"
                      : "bg-white/[0.06] text-white/40"
                  }`}
                >
                  {item.type === "lesson" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : item.type === "quiz" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white leading-snug">
                    <span className="font-medium">{item.userName}</span>{" "}
                    <span className="text-white/50">{item.detail}</span>
                  </p>
                  <p className="text-[10px] text-white/30 mt-0.5">
                    {relativeTime(item.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Enrollments */}
        <GlassCard hover={false} className="p-6">
          <h2 className="text-sm font-semibold text-white mb-1">
            Inscriptions Recentes
          </h2>
          <p className="text-xs text-white/40 mb-4">
            Derniers eleves inscrits
          </p>
          <div className="max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white/30 text-[10px] uppercase tracking-wider">
                  <th className="text-left pb-3 font-medium">Nom</th>
                  <th className="text-left pb-3 font-medium hidden sm:table-cell">Email</th>
                  <th className="text-left pb-3 font-medium">Offre</th>
                  <th className="text-right pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentEnrollments.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-white/30 text-xs py-4 text-center">
                      Aucune inscription recente
                    </td>
                  </tr>
                )}
                {stats.recentEnrollments.map((enrollment) => {
                  const cfg = tierConfig[enrollment.tier] || tierConfig.starter;
                  return (
                    <tr
                      key={enrollment.id}
                      className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3">
                        <Link
                          href={`/admin/students/${enrollment.id}`}
                          className="text-white hover:text-[#FF1744] transition-colors font-medium"
                        >
                          {enrollment.userName}
                        </Link>
                      </td>
                      <td className="py-3 text-white/40 hidden sm:table-cell truncate max-w-[140px]">
                        {enrollment.userEmail}
                      </td>
                      <td className="py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${cfg.color} ${cfg.bg}`}
                        >
                          {cfg.label}
                        </span>
                      </td>
                      <td className="py-3 text-right text-white/30 text-xs">
                        {relativeTime(enrollment.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/*  ROW 4 — Growth Chart                                        */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6">
        <h2 className="text-sm font-semibold text-white mb-1">
          Croissance Utilisateurs
        </h2>
        <p className="text-xs text-white/40 mb-6">
          Nouveaux inscrits par mois
        </p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.userGrowth}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#FF1744" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                width={30}
                allowDecimals={false}
              />
              <Tooltip
                content={<ChartTooltip valueSuffix=" inscrits" />}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Bar
                dataKey="count"
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
}
