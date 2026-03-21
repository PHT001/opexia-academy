"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */

interface RankedUser {
  id: string;
  name: string;
  xp: number;
  level: number;
  lessonsCompleted: number;
  streak: number;
  bestStreak: number;
  quizAverage: number;
  perfectQuizzes: number;
  quizCount: number;
  rank: number;
}

interface CurrentUser {
  id: string;
  name: string;
  xp: number;
  level: number;
  lessonsCompleted: number;
  streak: number;
  bestStreak: number;
  quizAverage: number;
  perfectQuizzes: number;
  quizCount: number;
  rank: number | null;
  levelProgress: number;
  rankTrend: "up" | "down" | "same";
  badges: string[];
}

interface Activity {
  userName: string;
  action: string;
  module: string;
  moduleOrder: number;
  xp: number;
  time: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface LeaderboardData {
  rankings: { xp: RankedUser[]; streak: RankedUser[]; quiz: RankedUser[] };
  currentUser: CurrentUser | null;
  totalStudents: number;
  recentActivity: Activity[];
  allBadges: Badge[];
}

type TabKey = "xp" | "streak" | "quiz";

/* ═══════════════════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════════════════ */

function IconTrophy({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.084 2.262-5.564 4-7.5.722-.806 1.5-1.7 2-2.5.5.8 1.278 1.694 2 2.5 1.738 1.936 4 4.416 4 7.5 0 3.866-3.134 7-7 7zm0-12.5c-.944 1.121-3 3.672-3 5.5a3 3 0 0 0 6 0c0-1.828-2.056-4.379-3-5.5z" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconArrowUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
    </svg>
  );
}

function IconArrowDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" /><path d="M19 12l-7 7-7-7" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */

function CountUp({ target, duration = 1000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) { setCount(0); return; }
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <>{count.toLocaleString("fr-FR")}</>;
}

/* ═══════════════════════════════════════════════════════════
   PODIUM
   ═══════════════════════════════════════════════════════════ */

const PODIUM_HEIGHTS = ["h-24", "h-32", "h-20"];
const PODIUM_SIZES = [
  { avatar: "h-12 w-12 text-base", name: "text-sm" },
  { avatar: "h-16 w-16 text-xl", name: "text-base" },
  { avatar: "h-12 w-12 text-base", name: "text-sm" },
];

function Podium({ users, currentUserId }: { users: RankedUser[]; currentUserId: string }) {
  if (users.length < 3) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <IconTrophy className="text-gray-300" />
        </div>
        <p className="text-sm font-medium text-[#111]">Le podium se prepare...</p>
        <p className="mt-1 text-xs text-gray-400 max-w-[240px]">
          Complete des lecons et passe des quiz pour apparaitre dans le classement.
        </p>
      </div>
    );
  }

  // Order: 2nd, 1st, 3rd
  const order = [users[1], users[0], users[2]];
  const ranks = [2, 1, 3];

  return (
    <div className="flex items-end justify-center gap-4 md:gap-6 pt-6 pb-2">
      {order.map((user, i) => {
        const rank = ranks[i];
        const isFirst = rank === 1;
        const isMe = user.id === currentUserId;
        const size = PODIUM_SIZES[i];

        return (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.5, type: "spring", stiffness: 140 }}
            className="flex flex-col items-center"
          >
            {/* Avatar */}
            <div className="relative mb-2">
              <div
                className={cn(
                  "rounded-full flex items-center justify-center font-semibold shrink-0",
                  size.avatar,
                  isMe ? "bg-[#FF1744] text-white" : "bg-[#111] text-white",
                  isFirst && "ring-2 ring-[#FF1744]/30 ring-offset-2"
                )}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
              {/* Rank badge */}
              <div className={cn(
                "absolute -bottom-1 -right-1 flex items-center justify-center rounded-full text-[10px] font-bold",
                "h-5 w-5 border-2 border-white",
                isFirst ? "bg-[#FF1744] text-white" : "bg-gray-200 text-gray-600"
              )}>
                {rank}
              </div>
            </div>

            {/* Name */}
            <p className={cn("font-medium text-[#111] truncate max-w-[90px] text-center", size.name)}>
              {user.name}
            </p>

            {/* XP */}
            <p className="text-xs text-gray-400 mt-0.5">
              <CountUp target={user.xp} /> XP
            </p>

            {/* Pillar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "bottom" }}
              className={cn(
                "mt-3 w-20 md:w-24 rounded-t-lg",
                PODIUM_HEIGHTS[i],
                isFirst ? "bg-[#FF1744]/8 border-t-2 border-[#FF1744]" : "bg-gray-50 border-t-2 border-gray-200"
              )}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS CARDS
   ═══════════════════════════════════════════════════════════ */

function StatsCards({ user, totalStudents }: { user: CurrentUser; totalStudents: number }) {
  const stats = [
    {
      label: "Rang",
      value: user.rank ? `#${user.rank}` : "-",
      sub: `/ ${totalStudents}`,
      trend: user.rankTrend,
    },
    {
      label: "XP",
      value: user.xp,
      sub: `Niv. ${user.level}`,
      progress: user.levelProgress,
    },
    {
      label: "Serie",
      value: `${user.streak}j`,
      sub: `Record ${user.bestStreak}j`,
    },
    {
      label: "Quiz",
      value: `${user.quizAverage}%`,
      sub: `${user.perfectQuizzes} parfait${user.perfectQuizzes !== 1 ? "s" : ""}`,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.06 }}
          className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{s.label}</span>
            {s.trend && s.trend !== "same" && (
              s.trend === "up"
                ? <IconArrowUp className="text-[#FF1744]" />
                : <IconArrowDown className="text-gray-400" />
            )}
          </div>
          <p className="text-lg font-bold text-[#111]">
            {typeof s.value === "number" ? <CountUp target={s.value} /> : s.value}
          </p>
          <p className="text-[10px] text-gray-400">{s.sub}</p>
          {s.progress !== undefined && (
            <div className="mt-1.5 h-1 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.progress}%` }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="h-full rounded-full bg-[#FF1744]"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   RANKING TABS + LIST
   ═══════════════════════════════════════════════════════════ */

const TABS: { key: TabKey; label: string; icon: React.ReactNode; metric: (u: RankedUser) => string }[] = [
  { key: "xp", label: "XP", icon: <IconBolt />, metric: (u) => `${u.xp.toLocaleString("fr-FR")} XP` },
  { key: "streak", label: "Serie", icon: <IconFlame />, metric: (u) => `${u.streak}j` },
  { key: "quiz", label: "Quiz", icon: <IconTarget />, metric: (u) => `${u.quizAverage}%` },
];

function RankingSection({
  activeTab,
  onTabChange,
  rankings,
  currentUserId,
}: {
  activeTab: TabKey;
  onTabChange: (t: TabKey) => void;
  rankings: LeaderboardData["rankings"];
  currentUserId: string;
}) {
  const currentTab = TABS.find((t) => t.key === activeTab)!;
  const list = rankings[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
    >
      {/* Tabs */}
      <div className="flex gap-0.5 p-0.5 bg-gray-100 rounded-lg mb-3">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => onTabChange(t.key)}
            className={cn(
              "relative flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-medium transition-colors",
              activeTab === t.key ? "text-[#111]" : "text-gray-400 hover:text-gray-500"
            )}
          >
            {activeTab === t.key && (
              <motion.div
                layoutId="tab"
                className="absolute inset-0 bg-white rounded-md shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              {t.icon}
              {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          {list.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-xs text-gray-400">Pas encore de donnees</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100/60">
              {list.map((user, i) => {
                const isMe = user.id === currentUserId;
                return (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.025 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 transition-colors",
                      isMe ? "bg-[#FF1744]/[0.04]" : "hover:bg-gray-50/60"
                    )}
                  >
                    {/* Rank */}
                    <span className={cn(
                      "flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold shrink-0",
                      isMe ? "bg-[#FF1744] text-white" : user.rank <= 3 ? "bg-[#111] text-white" : "text-gray-400"
                    )}>
                      {user.rank}
                    </span>

                    {/* Avatar */}
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold shrink-0",
                      isMe ? "bg-[#FF1744] text-white" : "bg-gray-100 text-gray-500"
                    )}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#111] truncate">
                        <span className={cn(isMe && "font-semibold")}>{user.name}</span>
                        {isMe && <span className="ml-1 text-[10px] text-[#FF1744]">(vous)</span>}
                      </p>
                      <p className="text-[10px] text-gray-400">Niv. {user.level}</p>
                    </div>

                    {/* Metric */}
                    <span className={cn(
                      "text-sm font-semibold tabular-nums shrink-0",
                      isMe ? "text-[#FF1744]" : "text-[#111]"
                    )}>
                      {currentTab.metric(user)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BADGES
   ═══════════════════════════════════════════════════════════ */

function BadgesRow({ allBadges, earned }: { allBadges: Badge[]; earned: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65 }}
    >
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Badges</p>
      <div className="flex gap-2">
        {allBadges.map((badge) => {
          const isEarned = earned.includes(badge.id);
          return (
            <div
              key={badge.id}
              title={`${badge.name} — ${badge.description}`}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border p-2.5 flex-1 transition-opacity",
                isEarned ? "border-gray-200 bg-white" : "border-gray-100 bg-gray-50 opacity-30"
              )}
            >
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                isEarned ? "bg-[#FF1744]/10 text-[#FF1744]" : "bg-gray-100 text-gray-300"
              )}>
                {isEarned ? <IconCheck /> : <IconLock />}
              </div>
              <p className="text-[9px] font-medium text-[#111] text-center leading-tight">{badge.name}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACTIVITY FEED
   ═══════════════════════════════════════════════════════════ */

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "a l'instant";
  if (mins < 60) return `${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}j`;
}

function ActivityFeed({ activities }: { activities: Activity[] }) {
  if (activities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1.5 w-1.5 rounded-full bg-[#FF1744] animate-pulse" />
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Activite</p>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden divide-y divide-gray-100/60">
        {activities.slice(0, 5).map((a, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-[9px] font-bold text-gray-500 shrink-0">
              {a.userName.charAt(0).toUpperCase()}
            </div>
            <p className="flex-1 text-xs text-gray-500 truncate">
              <span className="font-medium text-[#111]">{a.userName}</span>{" "}{a.action}
            </p>
            {a.xp > 0 && (
              <span className="text-[10px] font-medium text-[#FF1744] shrink-0">+{a.xp}</span>
            )}
            <span className="text-[10px] text-gray-300 shrink-0 flex items-center gap-0.5">
              <IconClock />
              {timeAgo(a.time)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */

export default function LeaderboardPage() {
  const { data: session } = useSession();
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("xp");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/leaderboard");
        if (!res.ok) throw new Error("Erreur lors du chargement");
        setData(await res.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const uid = session?.user?.id ?? "";

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 py-8">
        <div className="mx-auto max-w-2xl animate-pulse space-y-3">
          <div className="h-7 w-40 rounded bg-gray-200" />
          <div className="h-44 rounded-xl bg-gray-200" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => <div key={i} className="h-20 rounded-xl bg-gray-200" />)}
          </div>
          {[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-12 rounded-lg bg-gray-200" />)}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm max-w-sm">
          <p className="text-sm text-gray-500">{error ?? "Impossible de charger le classement."}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 rounded-lg bg-[#FF1744] px-4 py-2 text-sm font-medium text-white hover:bg-[#D50000] transition-colors"
          >
            Reessayer
          </button>
        </div>
      </div>
    );
  }

  const { rankings, currentUser, totalStudents, recentActivity, allBadges } = data;

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 py-6 md:py-10">
      <div className="mx-auto max-w-2xl space-y-5">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-xl font-bold text-[#111]">Classement</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {totalStudents} eleve{totalStudents > 1 ? "s" : ""} dans l&apos;arene
          </p>
        </motion.div>

        {/* Podium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 overflow-hidden"
        >
          <Podium users={rankings.xp.slice(0, 3)} currentUserId={uid} />
        </motion.div>

        {/* Stats */}
        {currentUser && <StatsCards user={currentUser} totalStudents={totalStudents} />}

        {/* Rankings */}
        <RankingSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          rankings={rankings}
          currentUserId={uid}
        />

        {/* Badges */}
        {currentUser && allBadges && (
          <BadgesRow allBadges={allBadges} earned={currentUser.badges} />
        )}

        {/* Activity */}
        <ActivityFeed activities={recentActivity} />
      </div>
    </div>
  );
}
