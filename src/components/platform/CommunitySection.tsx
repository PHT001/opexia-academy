"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LeaderboardEntry {
  id: string;
  name: string;
  xp: number;
  completedLessons: number;
  tier: string;
}

interface FeedEntry {
  id: string;
  userName: string;
  lessonTitle: string;
  lessonOrder: number;
  moduleOrder: number;
  moduleTitle: string;
  xpEarned: number;
  completedAt: string;
}

interface CommunityData {
  leaderboard: LeaderboardEntry[];
  feed: FeedEntry[];
  totalActive: number;
}

const TIER_BADGES: Record<string, { label: string; color: string; bg: string }> = {
  starter: { label: "Starter", color: "text-emerald-600", bg: "bg-emerald-50" },
  academy: { label: "Academy", color: "text-blue-600", bg: "bg-blue-50" },
  one_to_one: { label: "1-to-1", color: "text-amber-600", bg: "bg-amber-50" },
  free: { label: "Free", color: "text-gray-500", bg: "bg-gray-50" },
};

const RANK_STYLES: Record<number, string> = {
  1: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-md shadow-amber-200",
  2: "bg-gradient-to-r from-gray-300 to-gray-400 text-white shadow-sm",
  3: "bg-gradient-to-r from-orange-300 to-orange-400 text-white shadow-sm",
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.max(0, now - then);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "maintenant";
  if (minutes < 60) return `il y a ${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `il y a ${days}j`;
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function displayName(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return `${parts[0]} ${parts[parts.length - 1][0]}.`;
  return name;
}

const AVATAR_COLORS = [
  "from-red-400 to-rose-500",
  "from-blue-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-purple-400 to-violet-500",
  "from-pink-400 to-fuchsia-500",
  "from-cyan-400 to-sky-500",
];

function getAvatarColor(name: string): string {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export default function CommunitySection() {
  const [data, setData] = useState<CommunityData | null>(null);
  const [tab, setTab] = useState<"leaderboard" | "feed">("leaderboard");

  useEffect(() => {
    fetch("/api/community")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => {});
  }, []);

  if (!data || (data.leaderboard.length === 0 && data.feed.length === 0)) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#111]">Communaut&eacute; OpexIA</h3>
              <p className="text-[10px] text-gray-400">
                {data.totalActive} &eacute;tudiant{data.totalActive > 1 ? "s" : ""} actif{data.totalActive > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] text-green-600 font-medium">En direct</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-4 flex gap-1 border-b border-gray-100">
        {([
          { id: "leaderboard" as const, label: "Classement", icon: "M" },
          { id: "feed" as const, label: "Activit\u00e9 en direct", icon: "A" },
        ]).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative px-4 py-2.5 text-xs font-medium transition-colors ${
              tab === t.id ? "text-[#FF1744]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t.label}
            {tab === t.id && (
              <motion.div
                layoutId="community-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1744] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        <AnimatePresence mode="wait">
          {tab === "leaderboard" ? (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              {data.leaderboard.map((entry, i) => {
                const rank = i + 1;
                const tierCfg = TIER_BADGES[entry.tier] || TIER_BADGES.free;
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      rank <= 3 ? "bg-gray-50/80" : "hover:bg-gray-50/50"
                    }`}
                  >
                    {/* Rank */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        RANK_STYLES[rank] || "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {rank}
                    </div>

                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${getAvatarColor(entry.name)} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-[10px] font-bold text-white">{getInitials(entry.name)}</span>
                    </div>

                    {/* Name + tier */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium text-[#111] truncate ${rank === 1 ? "font-semibold" : ""}`}>
                          {displayName(entry.name)}
                        </span>
                        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${tierCfg.color} ${tierCfg.bg}`}>
                          {tierCfg.label}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">{entry.completedLessons} le&ccedil;on{entry.completedLessons > 1 ? "s" : ""}</span>
                    </div>

                    {/* XP */}
                    <div className="text-right flex-shrink-0">
                      <span className={`text-sm font-bold tabular-nums ${rank === 1 ? "text-amber-500" : rank <= 3 ? "text-[#111]" : "text-gray-600"}`}>
                        {entry.xp.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-[10px] text-gray-400 ml-0.5">XP</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="feed"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-0"
            >
              {data.feed.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  className={`flex items-start gap-3 py-3 ${
                    i < data.feed.length - 1 ? "border-b border-gray-50" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${getAvatarColor(entry.userName)} flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <span className="text-[10px] font-bold text-white">{getInitials(entry.userName)}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#111]">
                      <span className="font-semibold">{displayName(entry.userName)}</span>{" "}
                      <span className="text-gray-500">a termin&eacute;</span>{" "}
                      <span className="font-medium text-gray-700">{entry.lessonTitle}</span>
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-gray-400">M{entry.moduleOrder}</span>
                      {entry.xpEarned > 0 && (
                        <span className="text-[10px] font-medium text-[#FF1744]">+{entry.xpEarned} XP</span>
                      )}
                      <span className="text-[10px] text-gray-300">{timeAgo(entry.completedAt)}</span>
                    </div>
                  </div>

                  {/* Pulse dot for recent */}
                  {i < 3 && (
                    <span className="relative flex h-2 w-2 mt-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-40" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1744]" />
                    </span>
                  )}
                </motion.div>
              ))}
              {data.feed.length === 0 && (
                <p className="text-xs text-gray-400 text-center py-6">Aucune activit&eacute; pour le moment.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
