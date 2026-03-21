"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ——— Types ——— */
interface LeaderboardUser {
  id: string;
  name: string;
  level: number;
  xp: number;
  lessonsCompleted: number;
}

interface LeaderboardData {
  rankings: LeaderboardUser[];
  currentUserRank: number | null;
  currentUser: LeaderboardUser | null;
}

/* ——— Icons ——— */
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

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

/* ——— Medal Component ——— */
const MEDAL_COLORS: Record<number, { bg: string; border: string; text: string; icon: string }> = {
  1: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700", icon: "#FFD700" },
  2: { bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-500", icon: "#C0C0C0" },
  3: { bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-700", icon: "#CD7F32" },
};

function MedalIcon({ rank }: { rank: number }) {
  const color = MEDAL_COLORS[rank]?.icon ?? "#999";
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="14" r="7" fill={color} opacity={0.2} />
      <circle cx="12" cy="14" r="7" stroke={color} strokeWidth="1.5" />
      <text x="12" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>
        {rank}
      </text>
      <path d="M8 2l4 6 4-6" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ——— Avatar ——— */
function UserAvatar({ name, isCurrentUser }: { name: string; isCurrentUser: boolean }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold shrink-0",
        isCurrentUser
          ? "bg-[#FF1744] text-white"
          : "bg-gray-100 text-gray-600"
      )}
    >
      {initial}
    </div>
  );
}

/* ——— Top 3 Podium Card ——— */
function PodiumCard({ user, rank, isCurrentUser }: { user: LeaderboardUser; rank: number; isCurrentUser: boolean }) {
  const medal = MEDAL_COLORS[rank];
  const isFirst = rank === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.1, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col items-center rounded-2xl border p-6 transition-shadow",
        medal.bg, medal.border,
        isFirst ? "md:-mt-4 shadow-md" : "shadow-sm",
        isCurrentUser && "ring-2 ring-[#FF1744] ring-offset-2"
      )}
    >
      <MedalIcon rank={rank} />

      <div className="mt-3 mb-1">
        <div
          className={cn(
            "flex items-center justify-center rounded-full font-bold text-white",
            isFirst ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
          )}
          style={{ backgroundColor: medal.icon }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>

      <p className={cn("mt-2 font-semibold text-[#111]", isFirst ? "text-lg" : "text-sm")}>
        {user.name}
      </p>

      <p className="mt-1 text-xs text-gray-500">Niveau {user.level}</p>

      <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <IconFlame className={medal.text} />
          {user.xp.toLocaleString("fr-FR")} XP
        </span>
        <span className="flex items-center gap-1">
          <IconBook className="text-gray-400" />
          {user.lessonsCompleted}
        </span>
      </div>
    </motion.div>
  );
}

/* ——— Ranking Row ——— */
function RankingRow({ user, rank, isCurrentUser, index }: { user: LeaderboardUser; rank: number; isCurrentUser: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.03, duration: 0.35, ease: "easeOut" }}
      className={cn(
        "flex items-center gap-4 rounded-xl px-4 py-3 transition-colors",
        isCurrentUser
          ? "bg-red-50 border border-[#FF1744]/20"
          : "hover:bg-gray-50"
      )}
    >
      {/* Rank */}
      <span className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold shrink-0",
        isCurrentUser ? "bg-[#FF1744] text-white" : "bg-gray-100 text-gray-500"
      )}>
        {rank}
      </span>

      {/* Avatar + Name */}
      <UserAvatar name={user.name} isCurrentUser={isCurrentUser} />
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-medium text-[#111] truncate", isCurrentUser && "font-semibold")}>
          {user.name}
          {isCurrentUser && <span className="ml-2 text-xs text-[#FF1744] font-normal">(vous)</span>}
        </p>
        <p className="text-xs text-gray-400">Niveau {user.level}</p>
      </div>

      {/* Stats */}
      <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
        <IconBook className="text-gray-400" />
        <span>{user.lessonsCompleted} lecons</span>
      </div>

      <div className="flex items-center gap-1 text-sm font-semibold text-[#111] min-w-[80px] justify-end">
        <IconFlame className="text-[#FF1744]" />
        {user.xp.toLocaleString("fr-FR")} XP
      </div>
    </motion.div>
  );
}

/* ——— Page ——— */
export default function LeaderboardPage() {
  const { data: session } = useSession();
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  /* ——— Loading State ——— */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 rounded-lg bg-gray-200" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-52 rounded-2xl bg-gray-200" />
              ))}
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 rounded-xl bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ——— Error State ——— */
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

  const { rankings, currentUserRank, currentUser } = data;
  const top3 = rankings.slice(0, 3);
  const rest = rankings.slice(3);
  const currentUserInTop20 = currentUserRank !== null && currentUserRank <= 20;

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <IconTrophy className="text-[#FF1744]" />
            <h1 className="text-2xl font-bold text-[#111]">Classement</h1>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Decouvrez les meilleurs apprenants de la communaute OpexIA Academy.
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        {top3.length >= 3 && (
          <div className="mb-8 grid grid-cols-3 items-end gap-3 md:gap-4">
            <PodiumCard user={top3[1]} rank={2} isCurrentUser={top3[1].id === currentUserId} />
            <PodiumCard user={top3[0]} rank={1} isCurrentUser={top3[0].id === currentUserId} />
            <PodiumCard user={top3[2]} rank={3} isCurrentUser={top3[2].id === currentUserId} />
          </div>
        )}

        {/* Ranking List */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="divide-y divide-gray-100 p-2">
              {rest.map((user, i) => (
                <RankingRow
                  key={user.id}
                  user={user}
                  rank={i + 4}
                  isCurrentUser={user.id === currentUserId}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Current User Position (if not in top 20) */}
        {!currentUserInTop20 && currentUser && currentUserRank && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6 rounded-2xl border border-[#FF1744]/20 bg-white shadow-sm"
          >
            <div className="px-4 py-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Votre position</p>
            </div>
            <div className="px-2 pb-2">
              <RankingRow
                user={currentUser}
                rank={currentUserRank}
                isCurrentUser={true}
                index={0}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
