"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TIERS, TIER_MODULE_ACCESS } from "@/lib/constants";
import PostPurchaseOnboarding from "@/components/platform/PostPurchaseOnboarding";
import Link from "next/link";
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

/* ——— Admin Stats Types ——— */
interface AdminMonthlyRevenue { month: string; revenue: number; }
interface AdminEnrollmentsByTier { starter: number; academy: number; one_to_one: number; }
interface AdminRecentEnrollment { id: string; userName: string; userEmail: string; tier: string; date: string; }
interface AdminRecentActivity { type: string; userName: string; detail: string; createdAt: string; }
interface AdminUserGrowth { month: string; count: number; }
interface AdminStats {
  totalStudents: number;
  activeStudents: number;
  avgCompletion: number;
  avgQuizScore: number;
  totalLessons: number;
  completionsToday: number;
  totalRevenue: number;
  monthlyRevenue: AdminMonthlyRevenue[];
  enrollmentsByTier: AdminEnrollmentsByTier;
  recentEnrollments: AdminRecentEnrollment[];
  recentActivity: AdminRecentActivity[];
  userGrowth: AdminUserGrowth[];
}

interface RecentActivityItem {
  type: "lesson" | "quiz";
  title: string;
  lessonOrder: number;
  moduleOrder: number;
  xpEarned: number;
  completedAt: string;
}

interface DashboardData {
  totalLessons: number;
  completedLessons: number;
  currentLesson: { id: string; title: string; slug: string; order: number } | null;
  streak: number;
  xp: number;
  tier: string | null;
  recentActivity: RecentActivityItem[];
  quizzesCompleted: number;
  averageScore: number;
  modules: Array<{ id: string; title: string; order: number; totalLessons: number; completedLessons: number; }>;
}

/* ——— Animated Counter ——— */
function AnimatedNumber({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => Math.round(v).toString() + suffix);
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) animate(motionVal, value, { duration: 1.2, ease: "easeOut" }); }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ——— Radial Progress Ring ——— */
function RadialProgress({ percent, size = 160, strokeWidth = 10 }: { percent: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          ref={ref}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FF1744"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: circumference - (circumference * percent) / 100 } : {}}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedNumber value={percent} suffix="%" className="text-3xl font-bold text-[#111] tracking-tight" />
        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">Compl&eacute;t&eacute;</span>
      </div>
    </div>
  );
}

/* ——— XP Sparkline (SVG area chart) ——— */
function XPSparkline({ data: activityData, className }: { data: RecentActivityItem[]; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const width = 240;
  const height = 64;
  const padding = 4;

  const days: { label: string; xp: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dayStr = d.toDateString();
    const xp = activityData.filter(a => new Date(a.completedAt).toDateString() === dayStr).reduce((s, a) => s + a.xpEarned, 0);
    days.push({ label: d.toLocaleDateString("fr-FR", { weekday: "short" }).slice(0, 3), xp });
  }

  const maxXP = Math.max(...days.map(d => d.xp), 10);
  const points = days.map((d, i) => ({
    x: padding + (i / 6) * (width - padding * 2),
    y: padding + (1 - d.xp / maxXP) * (height - padding * 2),
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div ref={containerRef} className={className}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF1744" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF1744" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={areaPath}
          fill="url(#sparkGrad)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="#FF1744"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="white"
            stroke="#FF1744"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
          />
        ))}
      </svg>
      <div className="flex justify-between mt-1.5 px-1">
        {days.map((d, i) => (
          <span key={i} className="text-[9px] text-gray-400 font-medium capitalize">{d.label}</span>
        ))}
      </div>
    </div>
  );
}

/* ——— SVG Icons ——— */
function IconPlay({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconFlame({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Bonjour";
  if (h < 18) return "Bon apr\u00e8s-midi";
  return "Bonsoir";
}

/* ——— Helpers ——— */
function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "\u00c0 l\u2019instant";
  if (diffMin < 60) return `Il y a ${diffMin} min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `Il y a ${diffH}h`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return "Hier";
  if (diffD < 7) return `Il y a ${diffD} jours`;
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

/* ——— Card wrapper ——— */
function Card({ children, className, ...props }: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn("bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showOnboardingTest, setShowOnboardingTest] = useState(false);
  const [previewTier, setPreviewTier] = useState<string | null>(null);
  const [adminStats, setAdminStats] = useState<AdminStats | null>(null);
  const [adminLoading, setAdminLoading] = useState(false);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  /* Fetch admin stats when user is admin */
  useEffect(() => {
    if (session?.user?.role === "admin") {
      setAdminLoading(true);
      fetch("/api/admin/stats")
        .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
        .then((d) => { setAdminStats(d); setAdminLoading(false); })
        .catch(() => setAdminLoading(false));
    }
  }, [session?.user?.role]);

  const progress = data ? Math.round((data.completedLessons / data.totalLessons) * 100) : 0;
  const firstName = session?.user?.name?.split(" ")[0] || "\u00c9l\u00e8ve";
  const isAdmin = session?.user?.role === "admin";

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 w-full">
        <div className="h-40 bg-gray-100 rounded-2xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 bg-gray-100 rounded-2xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 h-64 bg-gray-100 rounded-2xl" />
          <div className="lg:col-span-5 h-64 bg-gray-100 rounded-2xl" />
        </div>
      </div>
    );
  }

  const hasEnrollment = !!data?.tier;
  const userTier = previewTier || data?.tier || "starter";

  if (showOnboardingTest) {
    return (
      <PostPurchaseOnboarding
        userName={session?.user?.name || undefined}
        onComplete={() => setShowOnboardingTest(false)}
      />
    );
  }

  return (
    <motion.div
      className="w-full space-y-6"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >

      {/* ════ ADMIN: TEST ONBOARDING ════ */}
      {isAdmin && (
        <button
          onClick={() => setShowOnboardingTest(true)}
          className="text-xs text-gray-400 hover:text-[#FF1744] transition-colors border border-gray-200 rounded-lg px-3 py-1.5 hover:border-[#FF1744]/30"
        >
          Tester l&apos;onboarding
        </button>
      )}

      {/* ════ NO ENROLLMENT BANNER ════ */}
      {!hasEnrollment && !isAdmin && (
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
          variants={fadeUp}
        >
          <div className="relative z-10 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#111] mb-1.5">
              Ton compte est cr&eacute;&eacute; !
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Choisis ton offre pour d&eacute;bloquer tes modules de formation et commencer ton parcours.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium text-white bg-[#FF1744] hover:bg-[#E01440] transition-colors"
            >
              Voir les offres
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}

      {/* ════ HERO BANNER ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-lg"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)" }}
        variants={fadeUp}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#FF1744]/5 rounded-full translate-y-1/2 blur-2xl" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF1744] font-semibold mb-2">Tableau de bord</p>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {getGreeting()}, {firstName}
            </motion.h1>
            <motion.p
              className="text-white/40 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {progress > 0
                ? `${progress}% de ta formation compl\u00e9t\u00e9. Continue comme \u00e7a.`
                : "Commence ta premi\u00e8re le\u00e7on pour lancer l\u2019aventure."
              }
            </motion.p>
          </div>
          {data?.currentLesson && (
            <motion.a
              href={`/lessons/${data.currentLesson.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white flex-shrink-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF1744, #D50000)", boxShadow: "0 4px 24px rgba(255,23,68,0.35)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconPlay className="text-white" /> Reprendre
            </motion.a>
          )}
        </div>

        {/* Progress bar */}
        <div className="relative z-10 mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/30 font-medium">Progression globale</span>
            <span className="text-xs text-white font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#FF5252]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ════ WELCOME CHECKLIST (new users only) ════ */}
      {data?.completedLessons === 0 && hasEnrollment && (
        <Card variants={fadeUp} className="p-6 sm:p-8 border-[#FF1744]/20 bg-gradient-to-br from-white to-red-50/30">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#FF1744]/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#111]">Bienvenue ! Voici tes premiers pas</h2>
              <p className="text-xs text-gray-400">3 actions pour bien d&eacute;marrer ta formation</p>
            </div>
          </div>
          <div className="space-y-3">
            <a href="/lessons" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#FF1744]/30 hover:shadow-sm transition-all group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF1744] text-white text-sm font-bold shrink-0">1</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#111] group-hover:text-[#FF1744] transition-colors">Commence la le&ccedil;on 1</p>
                <p className="text-xs text-gray-400">D&eacute;couvre les bases de l&apos;IA pour ton business</p>
              </div>
              <IconArrowRight className="text-gray-300 group-hover:text-[#FF1744] transition-colors shrink-0" />
            </a>
            <a href="https://discord.gg/uNc2jwBsr8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#FF1744]/30 hover:shadow-sm transition-all group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1A2E] text-white text-sm font-bold shrink-0">2</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#111] group-hover:text-[#FF1744] transition-colors">Rejoins le Discord</p>
                <p className="text-xs text-gray-400">Connecte-toi avec la communaut&eacute; OpexIA</p>
              </div>
              <IconArrowRight className="text-gray-300 group-hover:text-[#FF1744] transition-colors shrink-0" />
            </a>
            <a href="/profile" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#FF1744]/30 hover:shadow-sm transition-all group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-bold shrink-0">3</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#111] group-hover:text-[#FF1744] transition-colors">Compl&egrave;te ton profil</p>
                <p className="text-xs text-gray-400">Ajoute ta photo et tes infos</p>
              </div>
              <IconArrowRight className="text-gray-300 group-hover:text-[#FF1744] transition-colors shrink-0" />
            </a>
          </div>
        </Card>
      )}

      {/* ════ STATS CARDS ════ */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={stagger}>
        {[
          { label: "Le\u00e7ons", numValue: data?.completedLessons || 0, displaySuffix: `/${data?.totalLessons || 80}`, sub: "termin\u00e9es", accentClass: "text-[#111]", icon: IconBook },
          { label: "XP total", numValue: data?.xp || 0, displaySuffix: "", sub: "points gagn\u00e9s", accentClass: "text-[#FF1744]", icon: IconBolt },
          { label: "Streak", numValue: data?.streak || 0, displaySuffix: "j", sub: "jours cons\u00e9cutifs", accentClass: "text-orange-500", icon: IconFlame },
          { label: "Quiz r\u00e9ussis", numValue: data?.quizzesCompleted || 0, displaySuffix: "", sub: `moy. ${Math.round(data?.averageScore || 0)}%`, accentClass: "text-gray-500", icon: IconChart },
        ].map((stat) => (
          <Card key={stat.label} variants={fadeUp} className="p-5 group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <stat.icon className="text-gray-300 group-hover:text-gray-400 transition-colors" />
              </div>
            </div>
            <div className="flex items-baseline gap-0.5">
              <AnimatedNumber value={stat.numValue} className={cn("text-2xl font-bold tracking-tight", stat.accentClass)} />
              {stat.displaySuffix && <span className="text-sm text-gray-400 font-medium">{stat.displaySuffix}</span>}
            </div>
            <p className="text-[11px] text-gray-400 mt-1">{stat.sub}</p>
          </Card>
        ))}
      </motion.div>

      {/* ════ RADIAL PROGRESS + XP SPARKLINE ROW ════ */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={stagger}>
        {/* Radial Progress */}
        <Card variants={fadeUp} className="p-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-5 self-start">
            <IconTarget className="text-gray-300 w-4 h-4" />
            <h3 className="text-sm font-medium text-[#111]">Progression globale</h3>
          </div>
          <RadialProgress percent={progress} size={170} strokeWidth={12} />
          <div className="flex items-center gap-6 mt-5">
            <div className="text-center">
              <p className="text-lg font-bold text-[#111]">{data?.completedLessons || 0}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Compl&eacute;t&eacute;es</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-lg font-bold text-[#111]">{(data?.totalLessons || 0) - (data?.completedLessons || 0)}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Restantes</p>
            </div>
          </div>
        </Card>

        {/* XP Sparkline */}
        <Card variants={fadeUp} className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <IconBolt className="text-gray-300 w-4 h-4" />
              <h3 className="text-sm font-medium text-[#111]">XP cette semaine</h3>
            </div>
            <span className="text-xs font-medium text-[#FF1744] bg-red-50 px-2.5 py-1 rounded-lg">
              <AnimatedNumber value={data?.xp || 0} className="" /> XP
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-4">Progression sur les 7 derniers jours</p>
          <XPSparkline data={data?.recentActivity || []} className="mt-auto" />
        </Card>
      </motion.div>

      {/* ════ TWO-COLUMN LAYOUT ════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-6">

          {/* Continue Learning */}
          {data?.currentLesson && (
            <Card variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-[#FF1744] to-[#FF5252]" />
              <div className="p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <IconPlay className="text-[#FF1744]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#FF1744] font-medium mb-0.5">Reprendre la formation</p>
                  <h3 className="text-sm font-semibold text-[#111] truncate">{data.currentLesson.title}</h3>
                  <p className="text-xs text-gray-400">Le&ccedil;on {data.currentLesson.order} sur {data.totalLessons}</p>
                </div>
                <Button href={`/lessons/${data.currentLesson.slug}`} size="sm" className="flex-shrink-0 gap-2">
                  Continuer <IconArrowRight />
                </Button>
              </div>
            </Card>
          )}

          {/* Weekly Activity */}
          {(() => {
            const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
            const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
            const weekData = days.map((day, i) => {
              const targetDate = new Date();
              targetDate.setDate(targetDate.getDate() - (todayIdx - i));
              const dayStr = targetDate.toDateString();
              const count = (data?.recentActivity || []).filter(a => new Date(a.completedAt).toDateString() === dayStr).length;
              return { day, count };
            });
            const maxCount = Math.max(...weekData.map(d => d.count), 1);
            const totalWeek = weekData.reduce((s, d) => s + d.count, 0);
            return (
              <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <IconChart className="text-gray-300 w-4 h-4" />
                    <div>
                      <h3 className="text-sm font-medium text-[#111]">Activit&eacute; de la semaine</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Le&ccedil;ons et quiz compl&eacute;t&eacute;s</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    {totalWeek} activit&eacute;{totalWeek !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-2 h-36">
                  {weekData.map((d, i) => {
                    const isToday = i === todayIdx;
                    return (
                      <div key={d.day} className="flex flex-col items-center gap-2 flex-1 group/bar">
                        {d.count > 0 && (
                          <span className={cn("text-[10px] font-medium transition-colors", isToday ? "text-[#FF1744]" : "text-gray-400 group-hover/bar:text-gray-600")}>{d.count}</span>
                        )}
                        <motion.div
                          className={cn(
                            "w-full max-w-[36px] rounded-t-lg rounded-b-md transition-colors",
                            isToday
                              ? "bg-[#FF1744] group-hover/bar:bg-[#E01440]"
                              : d.count > 0
                                ? "bg-gray-200 group-hover/bar:bg-gray-300"
                                : "bg-gray-100"
                          )}
                          initial={{ height: 0 }}
                          whileInView={{ height: d.count > 0 ? `${(d.count / maxCount) * 100}%` : "4px" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <span className={cn(
                          "text-[10px] font-medium transition-colors",
                          isToday ? "text-[#FF1744]" : "text-gray-400"
                        )}>{d.day}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })()}

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 space-y-6">

          {/* Daily Goals */}
          {(() => {
            const todayLessons = (data?.recentActivity || []).filter(a => {
              const d = new Date(a.completedAt);
              const now = new Date();
              return a.type === "lesson" && d.toDateString() === now.toDateString();
            }).length;
            const todayQuizzes = (data?.recentActivity || []).filter(a => {
              const d = new Date(a.completedAt);
              const now = new Date();
              return a.type === "quiz" && d.toDateString() === now.toDateString();
            }).length;
            const todayXp = (data?.recentActivity || []).filter(a => {
              const d = new Date(a.completedAt);
              const now = new Date();
              return d.toDateString() === now.toDateString();
            }).reduce((s, a) => s + a.xpEarned, 0);
            const dailyGoals = [
              { label: "Compl\u00e9ter 1 le\u00e7on", progress: Math.min(todayLessons * 100, 100), done: todayLessons >= 1, icon: IconBook },
              { label: "R\u00e9ussir 1 quiz", progress: Math.min(todayQuizzes * 100, 100), done: todayQuizzes >= 1, icon: IconChart },
              { label: "Gagner 50 XP", progress: Math.min(Math.round((todayXp / 50) * 100), 100), done: todayXp >= 50, icon: IconBolt },
              { label: "Maintenir le streak", progress: (data?.streak || 0) > 0 ? 100 : 0, done: (data?.streak || 0) > 0, icon: IconFlame },
            ];
            const doneCount = dailyGoals.filter(g => g.done).length;
            return (
              <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <IconTarget className="text-gray-300 w-4 h-4" />
                    <h3 className="text-sm font-medium text-[#111]">Objectifs du jour</h3>
                  </div>
                  <span className={cn(
                    "text-[11px] font-medium px-2.5 py-1 rounded-lg border",
                    doneCount === dailyGoals.length
                      ? "text-green-600 bg-green-50 border-green-100"
                      : "text-gray-500 bg-gray-50 border-gray-100"
                  )}>
                    {doneCount}/{dailyGoals.length}
                  </span>
                </div>
                <div className="space-y-4">
                  {dailyGoals.map((goal, i) => (
                    <motion.div
                      key={goal.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className={cn(
                            "w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-300",
                            goal.done ? "bg-[#111] scale-100" : "border border-gray-200 bg-white"
                          )}>
                            {goal.done && <IconCheck className="text-white w-3 h-3" />}
                          </div>
                          <span className={cn("text-xs transition-colors", goal.done ? "text-gray-400 line-through" : "text-gray-700 font-medium")}>{goal.label}</span>
                        </div>
                        <span className={cn("text-[10px] font-medium tabular-nums", goal.done ? "text-gray-300" : "text-gray-400")}>{goal.progress}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden ml-[30px]" style={{ width: "calc(100% - 30px)" }}>
                        <motion.div
                          className={cn("h-full rounded-full", goal.done ? "bg-[#111]" : "bg-[#FF1744]")}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.2 + 0.08 * i, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            );
          })()}

          {/* Module Progress */}
          {data?.modules && data.modules.length > 0 && (
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <IconBook className="text-gray-300 w-4 h-4" />
                <h3 className="text-sm font-medium text-[#111]">Modules en cours</h3>
              </div>
              <div className="space-y-4">
                {data.modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.totalLessons).slice(0, 4).map((mod, i) => {
                  const pct = Math.round((mod.completedLessons / mod.totalLessons) * 100);
                  return (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-gray-700 truncate pr-2">M{mod.order}. {mod.title}</span>
                        <span className="text-[10px] text-gray-400 font-medium flex-shrink-0 tabular-nums">{pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-[#111]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
                {data.modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.totalLessons).length === 0 && (
                  <p className="text-xs text-gray-400 text-center py-4">Aucun module en cours pour le moment.</p>
                )}
              </div>
            </Card>
          )}

          {/* Recent Activity */}
          <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <IconClock className="text-gray-300 w-3.5 h-3.5" />
              <h3 className="text-sm font-medium text-[#111]">Activit&eacute; r&eacute;cente</h3>
            </div>
            <div className="space-y-0">
              {(data?.recentActivity && data.recentActivity.length > 0) ? data.recentActivity.map((item, i) => (
                <motion.div
                  key={i}
                  className={cn("flex items-center gap-3 py-3", i < data.recentActivity.length - 1 && "border-b border-gray-100")}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    {item.type === "lesson" ? (
                      <IconCheck className="w-3.5 h-3.5 text-gray-400" />
                    ) : (
                      <IconChart className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#111]">
                      {item.type === "lesson" ? "Le\u00e7on termin\u00e9e" : "Quiz r\u00e9ussi"}
                    </p>
                    <p className="text-[10px] text-gray-400">M{item.moduleOrder} &middot; {item.title}{item.xpEarned > 0 ? ` &middot; +${item.xpEarned} XP` : ""}</p>
                  </div>
                  <span className="text-[10px] text-gray-300 shrink-0">{timeAgo(item.completedAt)}</span>
                </motion.div>
              )) : (
                <p className="text-xs text-gray-400 text-center py-6">Aucune activit&eacute; pour le moment. Commence ta premi&egrave;re le&ccedil;on !</p>
              )}
            </div>
          </Card>
        </div>

        {/* Discord Community */}
        <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#111]">Rejoins la communaut&eacute;</h3>
                <p className="text-xs text-gray-400 mt-0.5">&Eacute;change avec les autres &eacute;l&egrave;ves, partage tes wins et trouve des opportunit&eacute;s.</p>
              </div>
            </div>
            <a
              href="https://discord.gg/uNc2jwBsr8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-medium rounded-lg transition-colors flex-shrink-0"
            >
              Rejoindre Discord
            </a>
          </div>
        </Card>
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/*  ADMIN PANEL — only visible for admin, hidden during preview   */}
      {/* ════════════════════════════════════════════════════════════════ */}
      {isAdmin && !previewTier && (
        <AdminDashboardSection stats={adminStats} loading={adminLoading} />
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Dashboard Section (light theme)                                */
/* ══════════════════════════════════════════════════════════════════════ */

const adminTierConfig: Record<string, { label: string; color: string; bg: string; bar: string }> = {
  starter:    { label: "Starter",  color: "text-emerald-600", bg: "bg-emerald-50",  bar: "bg-emerald-500" },
  academy:    { label: "Academy",  color: "text-blue-600",    bg: "bg-blue-50",     bar: "bg-blue-500" },
  one_to_one: { label: "1-to-1",   color: "text-amber-600",   bg: "bg-amber-50",    bar: "bg-amber-500" },
};

function formatEuro(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k \u20ac`;
  return `${n} \u20ac`;
}

function adminRelativeTime(dateStr: string) {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.max(0, now - then);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "\u00e0 l\u2019instant";
  if (minutes < 60) return `il y a ${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `il y a ${days}j`;
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function AdminChartTooltip({ active, payload, label, valueSuffix }: {
  active?: boolean; payload?: Array<{ value: number }>; label?: string; valueSuffix?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#111] border border-gray-200 rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="text-gray-400 mb-1">{label}</p>
      <p className="text-white font-semibold">
        {payload[0].value.toLocaleString("fr-FR")}{valueSuffix || ""}
      </p>
    </div>
  );
}

function AdminDashboardSection({ stats, loading }: { stats: AdminStats | null; loading: boolean }) {
  if (loading) {
    return (
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Panel Administrateur</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-72 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
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
    <div className="mt-8 space-y-6">
      {/* Section Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Panel Administrateur</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Eleves */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 group hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Total Eleves</span>
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#111] tracking-tight">{stats.totalStudents}</p>
          <p className="text-[11px] text-gray-400 mt-1">inscrits au total</p>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 group hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Revenue</span>
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#111] tracking-tight">{formatEuro(stats.totalRevenue)}</p>
          <p className="text-[11px] text-gray-400 mt-1">revenue total</p>
        </div>

        {/* Actifs 7j */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 group hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Actifs 7j</span>
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#111] tracking-tight">{stats.activeStudents}</p>
          <p className="text-[11px] text-gray-400 mt-1">eleves actifs</p>
        </div>

        {/* Taux Completion */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 group hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Completion</span>
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-[#111] tracking-tight">{stats.avgCompletion}%</p>
          <p className="text-[11px] text-gray-400 mt-1">taux moyen</p>
        </div>
      </div>

      {/* ── Revenue Chart + Tier Breakdown ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-semibold text-[#111] mb-1">Revenue Mensuel</h3>
          <p className="text-xs text-gray-400 mb-6">Evolution sur les derniers mois</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.monthlyRevenue}>
                <defs>
                  <linearGradient id="adminRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF1744" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#FF1744" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} tickFormatter={(v: number) => `${v >= 1000 ? `${v / 1000}k` : v}`} width={40} />
                <Tooltip content={<AdminChartTooltip valueSuffix=" \u20ac" />} cursor={{ stroke: "#e5e7eb" }} />
                <Area type="monotone" dataKey="revenue" stroke="#FF1744" strokeWidth={2} fill="url(#adminRevenueGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-semibold text-[#111] mb-1">Repartition par Offre</h3>
          <p className="text-xs text-gray-400 mb-6">{totalTier} inscriptions totales</p>
          <div className="space-y-5">
            {tierData.map(({ key, count }) => {
              const cfg = adminTierConfig[key];
              const pct = totalTier > 0 ? Math.round((count / totalTier) * 100) : 0;
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${cfg.color} ${cfg.bg}`}>
                      {cfg.label}
                    </span>
                    <span className="text-sm text-[#111] font-semibold">
                      {count} <span className="text-gray-400 font-normal">({pct}%)</span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${cfg.bar}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Activity Feed + Recent Enrollments ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Activity Feed */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-semibold text-[#111] mb-1">Activite Recente</h3>
          <p className="text-xs text-gray-400 mb-4">Dernieres actions des eleves</p>
          <div className="space-y-1 max-h-[400px] overflow-y-auto pr-1">
            {stats.recentActivity.length === 0 && (
              <p className="text-gray-400 text-xs py-4 text-center">Aucune activite recente</p>
            )}
            {stats.recentActivity.slice(0, 20).map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  item.type === "lesson_completion" ? "bg-emerald-50 text-emerald-500"
                    : item.type === "quiz_submission" ? "bg-blue-50 text-blue-500"
                    : "bg-gray-50 text-gray-400"
                }`}>
                  {item.type === "lesson_completion" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : item.type === "quiz_submission" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#111] leading-snug">
                    <span className="font-medium">{item.userName}</span>{" "}
                    <span className="text-gray-500">{item.detail}</span>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{adminRelativeTime(item.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enrollments */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-semibold text-[#111] mb-1">Inscriptions Recentes</h3>
          <p className="text-xs text-gray-400 mb-4">Derniers eleves inscrits</p>
          <div className="max-h-[400px] overflow-y-auto pr-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-wider">
                  <th className="text-left pb-3 font-medium">Nom</th>
                  <th className="text-left pb-3 font-medium hidden sm:table-cell">Email</th>
                  <th className="text-left pb-3 font-medium">Offre</th>
                  <th className="text-right pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentEnrollments.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-gray-400 text-xs py-4 text-center">Aucune inscription recente</td>
                  </tr>
                )}
                {stats.recentEnrollments.map((enrollment) => {
                  const cfg = adminTierConfig[enrollment.tier] || adminTierConfig.starter;
                  return (
                    <tr key={enrollment.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-3">
                        <Link href={`/admin/students/${enrollment.id}`} className="text-[#111] hover:text-[#FF1744] transition-colors font-medium">
                          {enrollment.userName}
                        </Link>
                      </td>
                      <td className="py-3 text-gray-400 hidden sm:table-cell truncate max-w-[140px]">{enrollment.userEmail}</td>
                      <td className="py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${cfg.color} ${cfg.bg}`}>
                          {cfg.label}
                        </span>
                      </td>
                      <td className="py-3 text-right text-gray-400 text-xs">{adminRelativeTime(enrollment.date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Growth Chart ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
        <h3 className="text-sm font-semibold text-[#111] mb-1">Croissance Utilisateurs</h3>
        <p className="text-xs text-gray-400 mb-6">Nouveaux inscrits par mois</p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.userGrowth}>
              <defs>
                <linearGradient id="adminBarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#FF1744" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} width={30} allowDecimals={false} />
              <Tooltip content={<AdminChartTooltip valueSuffix=" inscrits" />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar dataKey="count" fill="url(#adminBarGradient)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Quick Link to Full Admin ── */}
      <div className="flex justify-center">
        <Link
          href="/admin/students"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:text-[#FF1744] hover:border-[#FF1744]/30 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          Gestion complete des eleves
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
