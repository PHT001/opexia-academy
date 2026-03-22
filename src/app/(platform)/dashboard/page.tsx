"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TIERS, TIER_MODULE_ACCESS } from "@/lib/constants";
import PostPurchaseOnboarding from "@/components/platform/PostPurchaseOnboarding";

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

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

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
            <a href="https://discord.gg/XwPUx6fm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#FF1744]/30 hover:shadow-sm transition-all group">
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
      </div>
    </motion.div>
  );
}
