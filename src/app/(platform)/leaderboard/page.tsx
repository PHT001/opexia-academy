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
   ICONS (inline SVG)
   ═══════════════════════════════════════════════════════════ */

function IconTrophy({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.084 2.262-5.564 4-7.5.722-.806 1.5-1.7 2-2.5.5.8 1.278 1.694 2 2.5 1.738 1.936 4 4.416 4 7.5 0 3.866-3.134 7-7 7zm0-12.5c-.944 1.121-3 3.672-3 5.5a3 3 0 0 0 6 0c0-1.828-2.056-4.379-3-5.5z" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconTrendUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconTrendDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */

function CountUp({ target, duration = 1200, className }: { target: number; duration?: number; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (target === 0) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <span ref={ref} className={className}>{count.toLocaleString("fr-FR")}</span>;
}

/* ═══════════════════════════════════════════════════════════
   MEDAL COMPONENT
   ═══════════════════════════════════════════════════════════ */

const MEDAL_CONFIG = {
  1: { color: "#FFD700", glow: "shadow-[0_0_30px_rgba(255,215,0,0.4)]", label: "1er", bg: "bg-amber-50", border: "border-amber-200" },
  2: { color: "#C0C0C0", glow: "shadow-[0_0_20px_rgba(192,192,192,0.3)]", label: "2e", bg: "bg-gray-50", border: "border-gray-200" },
  3: { color: "#CD7F32", glow: "shadow-[0_0_20px_rgba(205,127,50,0.3)]", label: "3e", bg: "bg-orange-50", border: "border-orange-200" },
} as const;

/* ═══════════════════════════════════════════════════════════
   PODIUM (Top 3)
   ═══════════════════════════════════════════════════════════ */

function Podium({ users, currentUserId }: { users: RankedUser[]; currentUserId: string }) {
  if (users.length < 3) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="relative mb-6">
          <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
            <IconTrophy className="text-gray-300 h-10 w-10" />
          </div>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#FF1744] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">?</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#111]">Le podium se prepare...</h3>
        <p className="mt-1 text-sm text-gray-400 max-w-xs">
          Complete des lecons et passe des quiz pour apparaitre dans le classement !
        </p>
      </motion.div>
    );
  }

  // Display order: 2nd, 1st, 3rd
  const order = [users[1], users[0], users[2]];
  const heights = ["h-28", "h-36", "h-24"];
  const delays = [0.2, 0.1, 0.3];

  return (
    <div className="flex items-end justify-center gap-3 md:gap-5 pt-8 pb-4">
      {order.map((user, i) => {
        const rank = (i === 1 ? 1 : i === 0 ? 2 : 3) as 1 | 2 | 3;
        const medal = MEDAL_CONFIG[rank];
        const isMe = user.id === currentUserId;
        const isFirst = rank === 1;

        return (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: delays[i], duration: 0.6, type: "spring", stiffness: 120 }}
            className="flex flex-col items-center"
          >
            {/* Avatar */}
            <motion.div
              className={cn(
                "relative rounded-full flex items-center justify-center font-bold text-white mb-3",
                isFirst ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg",
                medal.glow,
                isMe && "ring-2 ring-[#FF1744] ring-offset-2"
              )}
              style={{ backgroundColor: medal.color }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {user.name.charAt(0).toUpperCase()}
              {isFirst && (
                <motion.div
                  className="absolute -top-3 -right-1"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <span className="text-xl">👑</span>
                </motion.div>
              )}
            </motion.div>

            {/* Name */}
            <p className={cn(
              "font-semibold text-[#111] truncate max-w-[100px] text-center",
              isFirst ? "text-base" : "text-sm"
            )}>
              {user.name}
            </p>

            {/* XP */}
            <div className="flex items-center gap-1 mt-1">
              <IconBolt className="text-amber-500" />
              <span className="text-xs font-semibold text-gray-600">
                <CountUp target={user.xp} /> XP
              </span>
            </div>

            {/* Pillar */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ delay: delays[i] + 0.3, duration: 0.5, ease: "easeOut" }}
              className={cn(
                "mt-3 w-20 md:w-24 rounded-t-xl flex items-center justify-center border-t-2",
                heights[i],
                medal.bg, medal.border
              )}
              style={{ borderTopColor: medal.color }}
            >
              <span className="text-2xl font-black" style={{ color: medal.color }}>
                {medal.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS CARDS (personal competitive stats)
   ═══════════════════════════════════════════════════════════ */

function StatsCards({ user, totalStudents }: { user: CurrentUser; totalStudents: number }) {
  const cards = [
    {
      label: "Mon Rang",
      value: user.rank ? `#${user.rank}` : "-",
      sub: `sur ${totalStudents} eleves`,
      icon: <IconTrophy className="h-5 w-5 text-[#FF1744]" />,
      color: "text-[#FF1744]",
      bg: "bg-red-50",
      trend: user.rankTrend,
    },
    {
      label: "XP Total",
      value: user.xp,
      sub: `Niveau ${user.level} • ${user.levelProgress}%`,
      icon: <IconBolt className="h-5 w-5 text-amber-500" />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      progress: user.levelProgress,
    },
    {
      label: "Serie",
      value: `${user.streak}j`,
      sub: `Record : ${user.bestStreak} jours`,
      icon: <IconFlame className="h-5 w-5 text-orange-500" />,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      label: "Quiz Score",
      value: `${user.quizAverage}%`,
      sub: `${user.perfectQuizzes} quiz parfait${user.perfectQuizzes !== 1 ? "s" : ""}`,
      icon: <IconTarget className="h-5 w-5 text-emerald-500" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-default"
        >
          <div className="flex items-center justify-between mb-2">
            <div className={cn("flex items-center justify-center h-8 w-8 rounded-lg", card.bg)}>
              {card.icon}
            </div>
            {card.trend && card.trend !== "same" && (
              <div className={cn(
                "flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full",
                card.trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
              )}>
                {card.trend === "up" ? <IconTrendUp /> : <IconTrendDown />}
              </div>
            )}
          </div>
          <p className={cn("text-xl font-bold", card.color)}>
            {typeof card.value === "number" ? <CountUp target={card.value} /> : card.value}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">{card.sub}</p>
          {card.progress !== undefined && (
            <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${card.progress}%` }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TABS
   ═══════════════════════════════════════════════════════════ */

const TABS: { key: TabKey; label: string; icon: React.ReactNode; metricLabel: string; metricKey: string; color: string }[] = [
  { key: "xp", label: "XP Total", icon: <IconBolt className="h-4 w-4" />, metricLabel: "XP", metricKey: "xp", color: "text-amber-500" },
  { key: "streak", label: "Serie", icon: <IconFlame className="h-4 w-4" />, metricLabel: "jours", metricKey: "streak", color: "text-orange-500" },
  { key: "quiz", label: "Quiz Master", icon: <IconTarget className="h-4 w-4" />, metricLabel: "% moy.", metricKey: "quizAverage", color: "text-emerald-500" },
];

function RankingTabs({
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
  const tab = TABS.find((t) => t.key === activeTab)!;
  const list = rankings[activeTab];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-xl mb-4">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => onTabChange(t.key)}
            className={cn(
              "relative flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
              activeTab === t.key ? "text-[#111]" : "text-gray-400 hover:text-gray-600"
            )}
          >
            {activeTab === t.key && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className={cn("relative z-10 flex items-center gap-1.5", activeTab === t.key && t.color)}>
              {t.icon}
              <span className="hidden sm:inline">{t.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          {list.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-400">Pas encore de donnees pour ce classement</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {list.map((user, i) => {
                const isMe = user.id === currentUserId;
                const metricValue =
                  activeTab === "xp" ? `${user.xp.toLocaleString("fr-FR")} XP` :
                  activeTab === "streak" ? `${user.streak} jours` :
                  `${user.quizAverage}% moy.`;

                return (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 transition-colors",
                      isMe ? "bg-red-50/60" : "hover:bg-gray-50/50"
                    )}
                  >
                    {/* Rank */}
                    <span className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold shrink-0",
                      user.rank <= 3
                        ? "text-white"
                        : isMe ? "bg-[#FF1744] text-white" : "bg-gray-100 text-gray-500"
                    )} style={user.rank <= 3 ? { backgroundColor: MEDAL_CONFIG[user.rank as 1 | 2 | 3]?.color } : undefined}>
                      {user.rank}
                    </span>

                    {/* Avatar */}
                    <div className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold shrink-0",
                      isMe ? "bg-[#FF1744] text-white" : "bg-gray-100 text-gray-600"
                    )}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-sm font-medium text-[#111] truncate", isMe && "font-semibold")}>
                        {user.name}
                        {isMe && <span className="ml-1.5 text-[10px] text-[#FF1744] font-normal">(vous)</span>}
                      </p>
                      <p className="text-[11px] text-gray-400">Niv. {user.level} • {user.lessonsCompleted} lecons</p>
                    </div>

                    {/* Metric */}
                    <div className={cn("flex items-center gap-1 text-sm font-semibold min-w-[90px] justify-end", tab.color)}>
                      {tab.icon}
                      {metricValue}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BADGES
   ═══════════════════════════════════════════════════════════ */

const BADGE_ICONS: Record<string, React.ReactNode> = {
  target: <IconTarget className="h-5 w-5" />,
  cpu: <IconBolt className="h-5 w-5" />,
  flame: <IconFlame className="h-5 w-5" />,
  bolt: <IconBolt className="h-5 w-5" />,
  award: <IconStar className="h-5 w-5" />,
};

function BadgesShowcase({ allBadges, earned }: { allBadges: Badge[]; earned: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <h3 className="text-sm font-semibold text-[#111] mb-3 flex items-center gap-2">
        <IconStar className="text-amber-500" />
        Badges
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {allBadges.map((badge) => {
          const isEarned = earned.includes(badge.id);
          return (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.08 }}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-colors",
                isEarned
                  ? "border-amber-200 bg-amber-50"
                  : "border-gray-100 bg-gray-50 opacity-40"
              )}
            >
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                isEarned ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"
              )}>
                {isEarned ? (BADGE_ICONS[badge.icon] || <IconStar />) : <IconLock />}
              </div>
              <p className="text-[10px] font-semibold text-[#111] leading-tight">{badge.name}</p>
            </motion.div>
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
  if (mins < 60) return `il y a ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `il y a ${days}j`;
}

function ActivityFeed({ activities }: { activities: Activity[] }) {
  if (activities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
    >
      <h3 className="text-sm font-semibold text-[#111] mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Activite recente
      </h3>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden divide-y divide-gray-50">
        {activities.slice(0, 5).map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.05 }}
            className="flex items-center gap-3 px-4 py-2.5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 shrink-0">
              {a.userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-600 truncate">
                <span className="font-semibold text-[#111]">{a.userName}</span> {a.action}
              </p>
            </div>
            {a.xp > 0 && (
              <span className="text-[10px] font-semibold text-amber-500 shrink-0">+{a.xp} XP</span>
            )}
            <span className="text-[10px] text-gray-300 shrink-0 flex items-center gap-0.5">
              <IconClock />
              {timeAgo(a.time)}
            </span>
          </motion.div>
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
    async function fetchLeaderboard() {
      try {
        setLoading(true);
        const res = await fetch("/api/leaderboard");
        if (!res.ok) throw new Error("Erreur lors du chargement du classement");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  const currentUserId = session?.user?.id ?? "";

  /* Loading */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 rounded-lg bg-gray-200" />
            <div className="h-48 rounded-2xl bg-gray-200" />
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => <div key={i} className="h-24 rounded-xl bg-gray-200" />)}
            </div>
            <div className="h-10 rounded-xl bg-gray-200" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-14 rounded-xl bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* Error */
  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm max-w-md">
          <p className="text-sm text-gray-500">{error ?? "Impossible de charger le classement."}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-[#FF1744] px-4 py-2 text-sm font-medium text-white hover:bg-[#D50000] transition-colors"
          >
            Reessayer
          </button>
        </div>
      </div>
    );
  }

  const { rankings, currentUser, totalStudents, recentActivity, allBadges } = data;
  const top3 = rankings.xp.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 py-6 md:py-10">
      <div className="mx-auto max-w-3xl space-y-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#FF1744]/10">
              <IconTrophy className="text-[#FF1744]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#111]">Classement</h1>
              <p className="text-sm text-gray-400">
                {totalStudents} eleve{totalStudents > 1 ? "s" : ""} dans l&apos;arene
              </p>
            </div>
          </div>
        </motion.div>

        {/* Podium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 md:p-6 overflow-hidden"
        >
          <Podium users={top3} currentUserId={currentUserId} />
        </motion.div>

        {/* Personal Stats */}
        {currentUser && (
          <StatsCards user={currentUser} totalStudents={totalStudents} />
        )}

        {/* Rankings with Tabs */}
        <RankingTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          rankings={rankings}
          currentUserId={currentUserId}
        />

        {/* Badges */}
        {currentUser && allBadges && (
          <BadgesShowcase allBadges={allBadges} earned={currentUser.badges} />
        )}

        {/* Activity Feed */}
        <ActivityFeed activities={recentActivity} />

      </div>
    </div>
  );
}
