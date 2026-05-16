"use client";

import { useSession } from "next-auth/react";
import React, { Suspense, useCallback, useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TIERS, TIER_MODULE_ACCESS, WHATSAPP_PHONE } from "@/lib/constants";
import PostPurchaseOnboarding from "@/components/platform/PostPurchaseOnboarding";
import FreeDashboard from "@/components/platform/FreeDashboard";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
interface AdminFunnel { totalUsers: number; verifiedUsers: number; enrolledUsers: number; activeUsers: number; }
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
  churnRate: number;
  atRiskStudents: number;
  funnel: AdminFunnel;
}

/* ——— Admin Students Types ——— */
interface AdminStudentListItem {
  id: string;
  name: string | null;
  email: string | null;
  createdAt: string;
  completedLessons: number;
  totalLessons: number;
  tier: string | null;
  lastActive: string | null;
  discordUsername: string | null;
  totalXP: number;
}
interface AdminStudentDetail {
  id: string;
  name: string | null;
  email: string | null;
  discordUsername: string | null;
  enrollment: { id: string; tier: string; status: string; createdAt: string } | null;
  totalXP: number;
  moduleProgress: Array<{
    moduleId: string;
    moduleTitle: string;
    moduleOrder: number;
    totalLessons: number;
    completedLessons: number;
    lessons: Array<{ lessonId: string; title: string; status: string; xpEarned: number; completedAt: string | null }>;
  }>;
  quizHistory: Array<{ id: string; lessonTitle: string; lessonSlug: string; score: number; passed: boolean; createdAt: string }>;
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
  xp: number;
  tier: string | null;
  recentActivity: RecentActivityItem[];
  quizzesCompleted: number;
  averageScore: number;
  modules: Array<{ id: string; title: string; order: number; totalLessons: number; completedLessons: number; }>;
  onboardingCompleted?: boolean;
}

/* ——— Project Types ——— */
interface ProjectUser {
  id: string;
  name: string | null;
  email: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  url: string | null;
  status: string;
  feedback: string | null;
  userId: string;
  user?: ProjectUser;
  createdAt: string;
  updatedAt: string;
}

type ProjectTabFilter = "all" | "submitted" | "reviewing" | "approved" | "needs_revision";

const PROJECT_STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  submitted: { label: "En attente", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" },
  reviewing: { label: "En revue", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  approved: { label: "Approuv\u00e9", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  needs_revision: { label: "\u00c0 r\u00e9viser", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
};

function ProjectStatusBadge({ status }: { status: string }) {
  const cfg = PROJECT_STATUS_CONFIG[status] || PROJECT_STATUS_CONFIG.submitted;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.color.replace("text-", "bg-")}`} />
      {cfg.label}
    </span>
  );
}

const PROJECT_TABS: { id: ProjectTabFilter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "submitted", label: "En attente" },
  { id: "reviewing", label: "En revue" },
  { id: "approved", label: "Approuv\u00e9s" },
  { id: "needs_revision", label: "\u00c0 r\u00e9viser" },
];

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

/* ——— Post-Purchase Celebration Modal ——— */
const PLAN_LABELS: Record<string, string> = {
  starter: "Standard",
  academy: "Standard",
  one_to_one: "Accompagnement",
  standard: "Standard",
  standard_lifetime: "Standard",
  accompagnement: "Accompagnement",
};

function CelebrationModal({ plan, onClose }: { plan: string; onClose: () => void }) {
  const label = PLAN_LABELS[plan] || plan;

  useEffect(() => {
    const timer = setTimeout(onClose, 30000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* CSS confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-sm animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              backgroundColor: ["#FF1744", "#FF5252", "#FFD54F", "#4FC3F7", "#81C784", "#CE93D8", "#FF8A65"][i % 7],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <motion.div
        className="relative z-10 bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full text-center shadow-2xl"
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-4">{"\uD83C\uDF89"}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111] mb-2">
          Bienvenue dans {label} !
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Ton acc{"è"}s est activ{"é"}. Ta premi{"è"}re le{"ç"}on t{"'"}attend.
        </p>
        <Link
          href="/lessons"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-4 text-base font-bold bg-[#FF1744] text-white hover:bg-[#D50000] transition-colors shadow-lg shadow-[#FF1744]/20"
        >
          Commencer ma premi{"è"}re le{"ç"}on
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href="/dashboard"
          onClick={onClose}
          className="block mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Explorer la plateforme
        </Link>
      </motion.div>

      {/* Confetti keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti-fall linear forwards;
        }
      `}} />
    </motion.div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const { data: session } = useSession();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [previewTier, setPreviewTier] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin-preview-tier") || null;
    }
    return null;
  });
  const [adminStats, setAdminStats] = useState<AdminStats | null>(null);
  const [adminLoading, setAdminLoading] = useState(false);

  // Post-purchase celebration modal
  const searchParams = useSearchParams();
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPlan, setCelebrationPlan] = useState("");

  // Auto-checkout: redirect to Stripe when coming from pricing → register/login flow
  const [autoCheckoutPending, setAutoCheckoutPending] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return !!params.get("auto_checkout");
    }
    return false;
  });

  useEffect(() => {
    const plan = searchParams.get("auto_checkout");
    if (!plan) return;

    // Clean the URL param immediately
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("auto_checkout");
      window.history.replaceState({}, "", url.toString());
    }

    setAutoCheckoutPending(true);

    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        } else {
          setAutoCheckoutPending(false);
        }
      })
      .catch(() => {
        setAutoCheckoutPending(false);
      });
  }, [searchParams]);

  useEffect(() => {
    const checkout = searchParams.get("checkout");
    const plan = searchParams.get("plan");
    if (checkout === "success" && plan) {
      const alreadyShown = sessionStorage.getItem(`opexia-celebration-${plan}`);
      if (!alreadyShown) {
        setCelebrationPlan(plan);
        setShowCelebration(true);
        sessionStorage.setItem(`opexia-celebration-${plan}`, "true");
      }
    }
  }, [searchParams]);

  const closeCelebration = useCallback(() => {
    setShowCelebration(false);
    // Clean up URL params
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("checkout");
      url.searchParams.delete("plan");
      window.history.replaceState({}, "", url.toString());
    }
    // After celebration, show onboarding if not completed
    if (data && data.onboardingCompleted === false && data.tier && data.tier !== "free") {
      setShowOnboarding(true);
    }
  }, [data]);

  // Auto-show onboarding for enrolled users who haven't completed it (no celebration or checkout pending)
  useEffect(() => {
    if (data && data.onboardingCompleted === false && data.tier && data.tier !== "free" && !showCelebration && !autoCheckoutPending) {
      setShowOnboarding(true);
    }
  }, [data, showCelebration, autoCheckoutPending]);

  // Project state (used by admin dashboard section)
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const fetchProjects = useCallback(() => {
    setProjectsLoading(true);
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setProjects(d); })
      .catch(() => {})
      .finally(() => setProjectsLoading(false));
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleProjectUpdate = async (projectId: string, status: string, feedback: string) => {
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, feedback }),
      });
      if (res.ok) {
        const updated = await res.json();
        setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
      }
    } catch {
      // silent
    }
  };

  // Listen for preview tier changes from other components
  useEffect(() => {
    const handler = (e: Event) => {
      const tier = (e as CustomEvent).detail;
      setPreviewTier(tier);
    };
    window.addEventListener("preview-tier-change", handler);
    return () => window.removeEventListener("preview-tier-change", handler);
  }, []);

  const handlePreviewTierChange = (tier: string | null) => {
    setPreviewTier(tier);
    if (tier) {
      localStorage.setItem("admin-preview-tier", tier);
    } else {
      localStorage.removeItem("admin-preview-tier");
    }
    window.dispatchEvent(new CustomEvent("preview-tier-change", { detail: tier }));
  };

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

  // Auto-checkout takes priority — show loading while redirecting to Stripe
  if (autoCheckoutPending) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <svg className="animate-spin h-8 w-8 text-[#FF1744]" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-gray-600 font-medium">Redirection vers le paiement...</p>
      </div>
    );
  }

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

  const hasEnrollment = !!data?.tier && data.tier !== "free";
  const isFreeUser = data?.tier === "free" || !data?.tier;
  const userTier = previewTier || data?.tier || "free";

  if (showOnboarding) {
    return (
      <PostPurchaseOnboarding
        userName={session?.user?.name || undefined}
        tier={userTier}
        onComplete={() => setShowOnboarding(false)}
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

      {/* ════ POST-PURCHASE CELEBRATION ════ */}
      <AnimatePresence>
        {showCelebration && (
          <CelebrationModal plan={celebrationPlan} onClose={closeCelebration} />
        )}
      </AnimatePresence>

      {/* ════ ADMIN TIER SWITCHER — always visible for admin ════ */}
      {isAdmin && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-[0.12em] text-gray-400 font-semibold mr-1">Vue :</span>
          {[
            { id: null, label: "Admin" },
            { id: "free", label: "Gratuit" },
            { id: "standard", label: "Standard" },
            { id: "accompagnement", label: "Accompagnement" },
          ].map((t) => (
            <button
              key={t.id || "admin"}
              onClick={() => handlePreviewTierChange(t.id)}
              className={`text-[11px] font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                previewTier === t.id
                  ? "bg-[#FF1744] text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* ════ ADMIN-ONLY VIEW: show admin panel directly ════ */}
      {isAdmin && !previewTier && (
        <>
          <AdminDashboardSection stats={adminStats} loading={adminLoading} projects={projects} onProjectUpdate={handleProjectUpdate} onTestOnboarding={() => setShowOnboarding(true)} userTier={userTier} />
        </>
      )}

      {/* ════ FREE USER dashboard ════ */}
      {(isFreeUser && !isAdmin && !previewTier) || (previewTier === "free") ? (
        <FreeDashboard firstName={firstName} />
      ) : null}

      {/* ════ STUDENT DASHBOARD — hidden for admin (shown during tier preview) ════ */}
      {((!isAdmin && !isFreeUser && !previewTier) || (previewTier && previewTier !== "free")) && (<>

      {/* ════ FREE USER UPGRADE BANNER (legacy, kept for tier preview) ════ */}
      {isFreeUser && !isAdmin && (
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#FF1744]/20 shadow-sm bg-gradient-to-br from-white to-red-50/40"
          variants={fadeUp}
        >
          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#FF1744] uppercase tracking-wider">Compte gratuit</span>
                </div>
                <h2 className="text-lg font-semibold text-[#111] mb-1">
                  Bienvenue sur OpexIA Academy !
                </h2>
                <p className="text-gray-500 text-sm">
                  Tu as acc&egrave;s &agrave; la plateforme. D&eacute;bloque une formule pour acc&eacute;der aux modules de formation.
                </p>
              </div>
              <a
                href="/offres"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#E01440] transition-colors shadow-md shadow-red-200 whitespace-nowrap"
              >
                D&eacute;bloquer la formation
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
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

      {/* ════ VIP SECTION (One-to-One users only) ════ */}
      {userTier === "one_to_one" && (
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#FF1744]/20 shadow-lg"
          style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1E1B2E 50%, #1A1A2E 100%)" }}
          variants={fadeUp}
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF1744]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF1744]/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FF1744] text-lg">&#9733;</span>
              <h2 className="text-lg font-bold text-white tracking-tight">Ton espace VIP</h2>
              <span className="ml-auto inline-flex items-center rounded-full bg-[#FF1744]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#FF1744] uppercase tracking-wider border border-[#FF1744]/20">One-to-One</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={WHATSAPP_PHONE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.818-6.303-2.187l-.44-.36-2.796.938.938-2.796-.36-.44A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#FF1744] transition-colors">WhatsApp direct</p>
                  <p className="text-xs text-white/40">Marius &amp; Igor</p>
                </div>
              </a>
              <a
                href="/coaching"
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#FF1744] transition-colors">R&eacute;server une visio</p>
                  <p className="text-xs text-white/40">Session coaching</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF1744]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF1744]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Support prioritaire</p>
                  <p className="text-xs text-white/40">Acc&egrave;s &agrave; vie aux mises &agrave; jour</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

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
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" variants={stagger}>
        {[
          { label: "Le\u00e7ons", numValue: data?.completedLessons || 0, displaySuffix: `/${data?.totalLessons || 80}`, sub: "termin\u00e9es", accentClass: "text-[#111]", icon: IconBook },
          { label: "XP total", numValue: data?.xp || 0, displaySuffix: "", sub: "points gagn\u00e9s", accentClass: "text-[#FF1744]", icon: IconBolt },
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

        {/* Discord Community */}
        <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="15" viewBox="0 0 127.14 96.36" fill="white">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
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

      {/* End of student dashboard */}
      </>)}
    </motion.div>
  );
}


/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Dashboard Section (premium light theme)                        */
/* ══════════════════════════════════════════════════════════════════════ */

const adminTierConfig: Record<string, { label: string; color: string; bg: string; bar: string; border: string; dot: string }> = {
  starter:    { label: "Starter",  color: "text-emerald-700", bg: "bg-emerald-50",  bar: "bg-emerald-500", border: "border-emerald-200", dot: "bg-emerald-500" },
  academy:    { label: "Academy",  color: "text-blue-700",    bg: "bg-blue-50",     bar: "bg-blue-500",    border: "border-blue-200",    dot: "bg-blue-500" },
  one_to_one: { label: "1-to-1",   color: "text-[#FF1744]",   bg: "bg-red-50",      bar: "bg-[#FF1744]",   border: "border-red-200",     dot: "bg-[#FF1744]" },
};

function formatEuro(n: number) {
  const parts = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${parts} EUR`;
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
    <div className="bg-[#111] rounded-xl px-4 py-2.5 text-xs shadow-xl border border-white/10">
      <p className="text-gray-400 mb-0.5">{label}</p>
      <p className="text-white font-bold tabular-nums">
        {payload[0].value.toLocaleString("fr-FR")}{valueSuffix || ""}
      </p>
    </div>
  );
}

function AdminAvatarCircle({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const letter = (name || "?").charAt(0).toUpperCase();
  const colors = ["bg-[#FF1744]", "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-purple-500", "bg-pink-500", "bg-cyan-500"];
  const colorIndex = name ? name.charCodeAt(0) % colors.length : 0;
  const sizeClass = size === "sm" ? "w-7 h-7 text-[10px]" : size === "lg" ? "w-12 h-12 text-lg" : "w-8 h-8 text-xs";
  return (
    <div className={cn(sizeClass, "rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm", colors[colorIndex])}>
      {letter}
    </div>
  );
}

const adminFadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, } } };
const adminStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

function AdminDashboardSection({ stats, loading, projects, onProjectUpdate, onTestOnboarding, userTier }: { stats: AdminStats | null; loading: boolean; projects: Project[]; onProjectUpdate: (id: string, status: string, feedback: string) => Promise<void>; onTestOnboarding?: () => void; userTier?: string }) {
  const [adminTab, setAdminTab] = useState<"overview" | "students" | "projects" | "referrals" | "leads">("overview");

  if (loading) {
    return (
      <motion.div id="admin-panel" className="space-y-6" initial="hidden" animate="visible" variants={adminStagger}>
        <div className="h-44 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-72 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </motion.div>
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

  const todayStr = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <motion.div id="admin-panel" className="space-y-6" initial="hidden" animate="visible" variants={adminStagger}>
      {/* Dark Hero Banner */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-lg"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1A 100%)" }}
        variants={adminFadeUp}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1744]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#FF1744]/5 rounded-full translate-y-1/2 blur-2xl" />
        <div className="absolute top-4 right-8 w-20 h-20 bg-white/[0.02] rounded-full blur-xl" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF1744] font-semibold mb-2">Administration</p>
              <motion.h1
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {getGreeting()}, Admin
              </motion.h1>
              <motion.p
                className="text-white/40 text-sm capitalize"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {todayStr}
              </motion.p>
            </div>

            <motion.div
              className="flex items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white tabular-nums">{stats.totalStudents}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Eleves</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF1744] tabular-nums">{formatEuro(stats.totalRevenue)}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Revenue</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white tabular-nums">{stats.activeStudents}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Actifs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div variants={adminFadeUp} className="flex items-center gap-1.5 bg-gray-100/80 rounded-xl p-1 w-fit backdrop-blur-sm">
        <button
          onClick={() => setAdminTab("overview")}
          className={cn(
            "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            adminTab === "overview"
              ? "bg-white text-[#111] shadow-sm ring-1 ring-black/5"
              : "text-gray-500 hover:text-[#111] hover:bg-white/50"
          )}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            Vue d&apos;ensemble
          </span>
        </button>
        <button
          onClick={() => setAdminTab("projects")}
          className={cn(
            "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            adminTab === "projects"
              ? "bg-white text-[#111] shadow-sm ring-1 ring-black/5"
              : "text-gray-500 hover:text-[#111] hover:bg-white/50"
          )}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
            </svg>
            Projets
          </span>
        </button>
        <button
          onClick={() => setAdminTab("referrals")}
          className={cn(
            "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            adminTab === "referrals"
              ? "bg-white text-[#111] shadow-sm ring-1 ring-black/5"
              : "text-gray-500 hover:text-[#111] hover:bg-white/50"
          )}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Parrainages
          </span>
        </button>
        <button
          onClick={() => setAdminTab("leads")}
          className={cn(
            "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            adminTab === "leads"
              ? "bg-white text-[#111] shadow-sm ring-1 ring-black/5"
              : "text-gray-500 hover:text-[#111] hover:bg-white/50"
          )}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Leads
          </span>
        </button>
      </motion.div>

      {adminTab === "overview" ? (
        <AdminOverviewTab stats={stats} totalTier={totalTier} tierData={tierData} />
      ) : adminTab === "students" ? (
        <AdminStudentsTab />
      ) : adminTab === "referrals" ? (
        <AdminReferralsTab />
      ) : adminTab === "leads" ? (
        <AdminLeadsTab />
      ) : (
        <AdminProjectsTab projects={projects} onUpdate={onProjectUpdate} />
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Overview Tab (premium KPIs/charts view)                        */
/* ══════════════════════════════════════════════════════════════════════ */

function AdminOverviewTab({ stats, totalTier, tierData }: {
  stats: AdminStats;
  totalTier: number;
  tierData: Array<{ key: string; count: number }>;
}) {
  return (
    <motion.div className="space-y-6" initial="hidden" animate="visible" variants={adminStagger}>
      {/* KPI Cards */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" variants={adminStagger}>
        {[
          {
            label: "Total Eleves", value: stats.totalStudents, suffix: "", sub: "inscrits au total",
            borderColor: "border-l-[#FF1744]", iconBg: "bg-red-50", iconColor: "text-[#FF1744]",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
          },
          {
            label: "Revenue Total", value: stats.totalRevenue, suffix: " EUR", sub: "revenue cumule",
            borderColor: "border-l-[#FF1744]", iconBg: "bg-red-50", iconColor: "text-[#FF1744]",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
          },
          {
            label: "Actifs 7j", value: stats.activeStudents, suffix: "", sub: "eleves actifs",
            borderColor: "border-l-[#FF6B6B]", iconBg: "bg-red-50", iconColor: "text-[#FF6B6B]",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
          },
          {
            label: "Completion", value: stats.avgCompletion, suffix: "%", sub: "taux moyen",
            borderColor: "border-l-[#B71C1C]", iconBg: "bg-red-50", iconColor: "text-[#B71C1C]",
            icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>),
          },
        ].map((kpi) => (
          <motion.div
            key={kpi.label}
            variants={adminFadeUp}
            className={cn("bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-5 group border-l-4", kpi.borderColor)}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{kpi.label}</span>
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300", kpi.iconBg, kpi.iconColor)}>
                {kpi.icon}
              </div>
            </div>
            <p className="text-3xl font-bold text-[#111] tracking-tight tabular-nums">
              {kpi.suffix === " EUR" ? formatEuro(kpi.value) : <><AnimatedNumber value={kpi.value} className="" />{kpi.suffix}</>}
            </p>
            <p className="text-[11px] text-gray-400 mt-1.5">{kpi.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Churn Rate Card */}
      <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-5 border-l-4 border-l-[#D32F2F]">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Taux d&apos;inactivité</span>
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[#D32F2F]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
            </div>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-3xl font-bold text-[#D32F2F] tracking-tight tabular-nums">
                  <AnimatedNumber value={stats.churnRate || 0} className="" />%
                </p>
                <p className="text-[11px] text-gray-400 mt-1">inscrits 30j+ sans activité 14j</p>
              </div>
              <div className="pl-4 border-l border-gray-100">
                <p className="text-2xl font-bold text-[#111] tabular-nums">
                  <AnimatedNumber value={stats.atRiskStudents || 0} className="" />
                </p>
                <p className="text-[11px] text-gray-400 mt-1">élèves à risque</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Chart + Tier Breakdown */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={adminStagger}>
        <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-[#111]">Revenue Mensuel</h3>
            <span className="text-[10px] font-medium text-[#FF1744] bg-red-50 px-2.5 py-1 rounded-lg">{formatEuro(stats.totalRevenue)}</span>
          </div>
          <p className="text-xs text-gray-400 mb-6">Evolution sur les derniers mois</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.monthlyRevenue}>
                <defs>
                  <linearGradient id="adminRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF1744" stopOpacity={0.2} />
                    <stop offset="60%" stopColor="#FF1744" stopOpacity={0.05} />
                    <stop offset="100%" stopColor="#FF1744" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} tickFormatter={(v: number) => `${v >= 1000 ? `${v / 1000}k` : v}`} width={40} />
                <Tooltip content={<AdminChartTooltip valueSuffix=" EUR" />} cursor={{ stroke: "#FF1744", strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.3 }} />
                <Area type="monotone" dataKey="revenue" stroke="#FF1744" strokeWidth={2.5} fill="url(#adminRevenueGradient)" dot={false} activeDot={{ r: 5, fill: "#FF1744", stroke: "#fff", strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-[#111]">R&eacute;partition par Offre</h3>
            <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{totalTier} inscrits</span>
          </div>
          <p className="text-xs text-gray-400 mb-6">Distribution des formules</p>
          <div className="space-y-5">
            {tierData.map(({ key, count }) => {
              const cfg = adminTierConfig[key];
              const pct = totalTier > 0 ? Math.round((count / totalTier) * 100) : 0;
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border", cfg.color, cfg.bg, cfg.border)}>
                      <span className={cn("w-2 h-2 rounded-full", cfg.dot)} />
                      {cfg.label}
                    </span>
                    <span className="text-sm text-[#111] font-bold tabular-nums">
                      {count} <span className="text-gray-400 font-normal text-xs">({pct}%)</span>
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div className={cn("h-full rounded-full", cfg.bar)} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Activity Feed + Recent Enrollments */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={adminStagger}>
        <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-[#111]">Activit&eacute; R&eacute;cente</h3>
            <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{stats.recentActivity.length} actions</span>
          </div>
          <p className="text-xs text-gray-400 mb-4">Derni&egrave;res actions des &eacute;l&egrave;ves</p>
          <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-1 -mr-1">
            {stats.recentActivity.length === 0 && (
              <p className="text-gray-400 text-xs py-8 text-center">Aucune activit&eacute; r&eacute;cente</p>
            )}
            {stats.recentActivity.slice(0, 20).map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0 rounded-lg hover:bg-gray-50/50 px-2 -mx-2 transition-colors"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * i, duration: 0.3 }}
              >
                <AdminAvatarCircle name={item.userName} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#111] leading-snug">
                    <span className="font-semibold">{item.userName}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  <p className="text-[10px] text-gray-300 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {adminRelativeTime(item.createdAt)}
                  </p>
                </div>
                <div className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                  item.type === "lesson_completion" ? "bg-emerald-50 text-emerald-500"
                    : item.type === "quiz_submission" ? "bg-blue-50 text-blue-500"
                    : "bg-gray-50 text-gray-400"
                )}>
                  {item.type === "lesson_completion" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  ) : item.type === "quiz_submission" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-[#111]">Inscriptions R&eacute;centes</h3>
            <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{stats.recentEnrollments.length} derniers</span>
          </div>
          <p className="text-xs text-gray-400 mb-4">Derniers &eacute;l&egrave;ves inscrits</p>
          <div className="max-h-[420px] overflow-y-auto pr-1 -mr-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-wider">
                  <th className="text-left pb-3 font-semibold">Nom</th>
                  <th className="text-left pb-3 font-semibold hidden sm:table-cell">Email</th>
                  <th className="text-left pb-3 font-semibold">Offre</th>
                  <th className="text-right pb-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentEnrollments.length === 0 && (
                  <tr><td colSpan={4} className="text-gray-400 text-xs py-8 text-center">Aucune inscription r&eacute;cente</td></tr>
                )}
                {stats.recentEnrollments.map((enrollment, i) => {
                  const cfg = adminTierConfig[enrollment.tier] || adminTierConfig.starter;
                  return (
                    <motion.tr
                      key={enrollment.id}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/80 transition-colors group"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.3 }}
                    >
                      <td className="py-3.5">
                        <div className="flex items-center gap-2.5">
                          <AdminAvatarCircle name={enrollment.userName} size="sm" />
                          <Link href={`/admin/students/${enrollment.id}`} className="text-[#111] hover:text-[#FF1744] transition-colors font-medium group-hover:text-[#FF1744]">{enrollment.userName}</Link>
                        </div>
                      </td>
                      <td className="py-3.5 text-gray-400 hidden sm:table-cell truncate max-w-[140px] text-xs">{enrollment.userEmail}</td>
                      <td className="py-3.5">
                        <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border", cfg.color, cfg.bg, cfg.border)}>
                          <span className={cn("w-1.5 h-1.5 rounded-full", cfg.dot)} />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="py-3.5 text-right text-gray-400 text-xs tabular-nums">{adminRelativeTime(enrollment.date)}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* Growth Chart */}
      <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold text-[#111]">Croissance Utilisateurs</h3>
          <span className="text-[10px] font-medium text-[#FF1744] bg-red-50 px-2.5 py-1 rounded-lg">
            {stats.userGrowth.length > 0 ? `+${stats.userGrowth[stats.userGrowth.length - 1]?.count || 0} ce mois` : ""}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-6">Nouveaux inscrits par mois</p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.userGrowth}>
              <defs>
                <linearGradient id="adminBarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#FF1744" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 11 }} width={30} allowDecimals={false} />
              <Tooltip content={<AdminChartTooltip valueSuffix=" inscrits" />} cursor={{ fill: "rgba(255,23,68,0.04)" }} />
              <Bar dataKey="count" fill="url(#adminBarGradient)" radius={[6, 6, 0, 0]} maxBarSize={44} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Conversion Funnel */}
      {stats.funnel && (
        <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-[#111]">Funnel de Conversion</h3>
            <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">Entonnoir</span>
          </div>
          <p className="text-xs text-gray-400 mb-6">Drop-off à chaque étape du parcours utilisateur</p>
          <div className="space-y-4">
            {(() => {
              const f = stats.funnel;
              const stages = [
                { label: "Inscrits", value: f.totalUsers, color: "bg-blue-500" },
                { label: "Email vérifié", value: f.verifiedUsers, color: "bg-emerald-500" },
                { label: "Abonnés", value: f.enrolledUsers, color: "bg-[#FF1744]" },
                { label: "Actifs 7j", value: f.activeUsers, color: "bg-purple-500" },
              ];
              const max = Math.max(f.totalUsers, 1);
              return stages.map((stage, i) => {
                const pct = Math.round((stage.value / max) * 100);
                const dropOff = i > 0 ? Math.round(((stages[i - 1].value - stage.value) / Math.max(stages[i - 1].value, 1)) * 100) : 0;
                return (
                  <div key={stage.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={cn("w-2.5 h-2.5 rounded-full", stage.color)} />
                        <span className="text-xs font-medium text-[#111]">{stage.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {i > 0 && dropOff > 0 && (
                          <span className="text-[10px] font-medium text-red-400">-{dropOff}%</span>
                        )}
                        <span className="text-sm font-bold text-[#111] tabular-nums">{stage.value}</span>
                        <span className="text-[10px] text-gray-400 tabular-nums w-10 text-right">{pct}%</span>
                      </div>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        className={cn("h-full rounded-full", stage.color)}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 + i * 0.15 }}
                      />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Students Tab (premium inline student management)               */
/* ══════════════════════════════════════════════════════════════════════ */

function AdminStudentsTab() {
  const [students, setStudents] = useState<AdminStudentListItem[]>([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [studentDetail, setStudentDetail] = useState<AdminStudentDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [editTier, setEditTier] = useState<string>("");
  const [savingTier, setSavingTier] = useState(false);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const [csvExporting, setCsvExporting] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailTier, setEmailTier] = useState("tous");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState<number | null>(null);

  const fetchStudents = useCallback((s: string, t: string, p: number) => {
    setStudentsLoading(true);
    const params = new URLSearchParams();
    if (s) params.set("search", s);
    if (t) params.set("tier", t);
    params.set("page", String(p));
    params.set("limit", "15");
    fetch(`/api/admin/students?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => {
        setStudents(d.students || []);
        setTotalPages(d.totalPages || 1);
        setTotal(d.total || 0);
        setStudentsLoading(false);
      })
      .catch(() => setStudentsLoading(false));
  }, []);

  useEffect(() => {
    fetchStudents(search, tierFilter, page);
  }, [tierFilter, page, fetchStudents]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      setPage(1);
      fetchStudents(value, tierFilter, 1);
    }, 400);
  };

  const handleDeleteStudent = async (id: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/students/${id}`, { method: "DELETE" });
      if (res.ok) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
        if (expandedId === id) { setExpandedId(null); setStudentDetail(null); }
      }
    } catch (e) { /* ignore */ }
    setDeletingId(null);
    setConfirmDeleteId(null);
  };

  const handleExpand = (studentId: string) => {
    if (expandedId === studentId) {
      setExpandedId(null);
      setStudentDetail(null);
      return;
    }
    setExpandedId(studentId);
    setDetailLoading(true);
    setStudentDetail(null);
    fetch(`/api/admin/students/${studentId}`)
      .then((r) => {
        if (!r.ok) throw new Error("Fetch failed");
        return r.json();
      })
      .then((d) => {
        if (d.error) throw new Error(d.error);
        setStudentDetail(d);
        setEditTier(d.enrollment?.tier || "starter");
        setDetailLoading(false);
      })
      .catch(() => {
        setDetailLoading(false);
        setExpandedId(null);
      });
  };

  const handleSaveTier = () => {
    if (!expandedId || !editTier) return;
    setSavingTier(true);
    fetch(`/api/admin/students/${expandedId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier: editTier }),
    })
      .then((r) => r.json())
      .then(() => {
        setSavingTier(false);
        fetchStudents(search, tierFilter, page);
        if (studentDetail) {
          setStudentDetail({
            ...studentDetail,
            enrollment: studentDetail.enrollment
              ? { ...studentDetail.enrollment, tier: editTier }
              : { id: "", tier: editTier, status: "active", createdAt: new Date().toISOString() },
          });
        }
      })
      .catch(() => setSavingTier(false));
  };

  const handleExportCSV = async () => {
    setCsvExporting(true);
    try {
      const res = await fetch("/api/admin/students?limit=1000");
      const data = await res.json();
      const allStudents: AdminStudentListItem[] = data.students || [];
      const tierLabel = (t: string | null) => t === "one_to_one" ? "One-to-One" : t === "academy" ? "Academy" : t === "starter" ? "Starter" : "--";
      const csvRows = [
        ["Nom", "Email", "Offre", "Progression", "XP", "Discord", "Date inscription"].join(","),
        ...allStudents.map((s) => [
          `"${(s.name || "").replace(/"/g, '""')}"`,
          `"${(s.email || "").replace(/"/g, '""')}"`,
          tierLabel(s.tier),
          s.totalLessons > 0 ? `${Math.round((s.completedLessons / s.totalLessons) * 100)}%` : "0%",
          s.totalXP,
          `"${(s.discordUsername || "").replace(/"/g, '""')}"`,
          new Date(s.createdAt).toLocaleDateString("fr-FR"),
        ].join(",")),
      ];
      const csvContent = "\uFEFF" + csvRows.join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const today = new Date().toISOString().split("T")[0];
      a.download = `eleves-opexia-${today}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("CSV export error", err);
    }
    setCsvExporting(false);
  };

  const handleSendEmail = async () => {
    if (!emailSubject.trim() || !emailMessage.trim()) return;
    setEmailSending(true);
    try {
      const res = await fetch("/api/admin/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: emailTier, subject: emailSubject, message: emailMessage }),
      });
      const data = await res.json();
      setEmailSent(data.sent || 0);
      setTimeout(() => {
        setEmailModalOpen(false);
        setEmailSent(null);
        setEmailSubject("");
        setEmailMessage("");
        setEmailTier("tous");
      }, 2500);
    } catch {
      setEmailSent(-1);
    }
    setEmailSending(false);
  };

  return (
    <motion.div className="space-y-4" initial="hidden" animate="visible" variants={adminStagger}>
      {/* Email Modal */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={() => setEmailModalOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-lg mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-[#111] mb-1">Envoyer un email groupé</h3>
            <p className="text-xs text-gray-400 mb-5">Envoyez un message à vos élèves</p>

            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Destinataires</label>
                <select
                  value={emailTier}
                  onChange={(e) => setEmailTier(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111] bg-gray-50/50 focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 transition-all"
                >
                  <option value="tous">Tous les élèves</option>
                  <option value="starter">Starter uniquement</option>
                  <option value="academy">Academy uniquement</option>
                  <option value="one_to_one">One-to-One uniquement</option>
                </select>
                <p className="text-[10px] text-gray-400 mt-1.5">
                  Cet email sera envoyé à {emailTier === "tous" ? total : "tous les"} élève{emailTier !== "tous" ? `s ${emailTier === "one_to_one" ? "One-to-One" : emailTier === "academy" ? "Academy" : "Starter"}` : `s`}
                </p>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Objet</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Objet de l'email..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111] placeholder-gray-400 focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Contenu de l'email..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111] placeholder-gray-400 focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 transition-all bg-gray-50/50 resize-none"
                />
              </div>
            </div>

            {emailSent !== null && (
              <div className={cn("mt-4 px-4 py-3 rounded-xl text-sm font-medium", emailSent >= 0 ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200")}>
                {emailSent >= 0 ? `Email envoyé à ${emailSent} élève${emailSent !== 1 ? "s" : ""}` : "Erreur lors de l'envoi"}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 mt-5">
              <button
                onClick={() => setEmailModalOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-[#111] hover:bg-gray-50 transition-all"
              >
                Annuler
              </button>
              <button
                onClick={handleSendEmail}
                disabled={emailSending || !emailSubject.trim() || !emailMessage.trim()}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#E01440] transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {emailSending ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search + Filter Bar */}
      <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111] placeholder-gray-400 focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 transition-all bg-gray-50/50 hover:bg-white"
            />
          </div>
          <select
            value={tierFilter}
            onChange={(e) => { setTierFilter(e.target.value); setPage(1); }}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111] bg-gray-50/50 hover:bg-white focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 transition-all cursor-pointer"
          >
            <option value="">Toutes les offres</option>
            <option value="starter">Starter</option>
            <option value="academy">Academy</option>
            <option value="one_to_one">1-to-1</option>
          </select>
          <button
            onClick={handleExportCSV}
            disabled={csvExporting}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
            {csvExporting ? "Export..." : "Exporter CSV"}
          </button>
          <button
            onClick={() => setEmailModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-[#FF1744] hover:bg-[#E01440] transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Envoyer un email
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-gray-400 font-medium tabular-nums">{total} &eacute;l&egrave;ve{total !== 1 ? "s" : ""} trouv&eacute;{total !== 1 ? "s" : ""}</p>
        </div>
      </motion.div>

      {/* Students Table */}
      <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {studentsLoading ? (
          <div className="p-6 space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-14 bg-gray-50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : students.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-400 font-medium">Aucun &eacute;l&egrave;ve trouv&eacute;</p>
            <p className="text-xs text-gray-300 mt-1">Essayez de modifier vos filtres</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-wider border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left py-3.5 px-5 font-semibold">Nom</th>
                  <th className="text-left py-3.5 px-4 font-semibold hidden md:table-cell">Email</th>
                  <th className="text-left py-3.5 px-4 font-semibold">Offre</th>
                  <th className="text-left py-3.5 px-4 font-semibold">Progression</th>
                  <th className="text-right py-3.5 px-4 font-semibold">XP</th>
                  <th className="text-right py-3.5 px-4 font-semibold hidden sm:table-cell">Derni&egrave;re activit&eacute;</th>
                  <th className="w-10 py-3.5 px-4"></th>
                  <th className="py-3.5 px-3 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => {
                  const isExpanded = expandedId === student.id;
                  const cfg = adminTierConfig[student.tier || "starter"] || adminTierConfig.starter;
                  const pct = student.totalLessons > 0 ? Math.round((student.completedLessons / student.totalLessons) * 100) : 0;
                  return (
                    <React.Fragment key={student.id}>
                      <motion.tr
                        onClick={() => handleExpand(student.id)}
                        className={cn(
                          "border-b border-gray-50 cursor-pointer transition-all duration-200",
                          isExpanded ? "bg-gray-50" : "hover:bg-gray-50/60"
                        )}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.02 * i, duration: 0.3 }}
                      >
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-2.5">
                            <AdminAvatarCircle name={student.name || "?"} size="sm" />
                            <span className="text-[#111] font-medium">{student.name || "Sans nom"}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-gray-400 hidden md:table-cell truncate max-w-[180px] text-xs">{student.email}</td>
                        <td className="py-3.5 px-4">
                          {student.tier ? (
                            <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border", cfg.color, cfg.bg, cfg.border)}>
                              <span className={cn("w-1.5 h-1.5 rounded-full", cfg.dot)} />
                              {cfg.label}
                            </span>
                          ) : (
                            <span className="text-gray-300 text-xs">--</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-20 h-2 rounded-full bg-gray-100 overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#FF5252] transition-all duration-500" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-xs text-gray-500 font-medium tabular-nums">{pct}%</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="text-[#111] font-bold text-xs tabular-nums">{student.totalXP.toLocaleString("fr-FR")}</span>
                        </td>
                        <td className="py-3.5 px-4 text-right text-gray-400 text-xs hidden sm:table-cell tabular-nums">
                          {student.lastActive ? adminRelativeTime(student.lastActive) : "--"}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200", isExpanded ? "bg-[#FF1744]/10" : "bg-gray-50")}>
                            <svg
                              className={cn("w-3.5 h-3.5 transition-all duration-200", isExpanded ? "rotate-180 text-[#FF1744]" : "text-gray-400")}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(student.id); }}
                            disabled={deletingId === student.id}
                            className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 flex items-center gap-1.5 text-xs font-medium shadow-sm mx-auto"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Supprimer
                          </button>
                        </td>
                      </motion.tr>
                      {isExpanded && (
                        <tr>
                          <td colSpan={7} className="p-0">
                            <motion.div
                              className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 px-6 py-6"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              {detailLoading ? (
                                <div className="space-y-3">
                                  {[...Array(3)].map((_, idx) => (
                                    <div key={idx} className="h-10 bg-gray-100 rounded-xl animate-pulse" />
                                  ))}
                                </div>
                              ) : studentDetail ? (
                                <div className="space-y-5">
                                  {/* ——— Header: Name, email, date, tier badge, discord ——— */}
                                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                      <AdminAvatarCircle name={studentDetail.name || "?"} size="lg" />
                                      <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                                          <h3 className="text-lg font-bold text-[#111] truncate">{studentDetail.name || "Sans nom"}</h3>
                                          {(() => {
                                            const tierKey = studentDetail.enrollment?.tier || "starter";
                                            const cfg = adminTierConfig[tierKey] || adminTierConfig.starter;
                                            return (
                                              <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border", cfg.color, cfg.bg, cfg.border)}>
                                                <span className={cn("w-1.5 h-1.5 rounded-full", cfg.dot)} />
                                                {cfg.label}
                                              </span>
                                            );
                                          })()}
                                        </div>
                                        <p className="text-xs text-gray-400 truncate">{studentDetail.email || "Pas d\u2019email"}</p>
                                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                                          <span className="text-[11px] text-gray-400">
                                            Membre depuis {studentDetail.enrollment?.createdAt ? new Date(studentDetail.enrollment.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "--"}
                                          </span>
                                          {studentDetail.discordUsername && (
                                            <span className="inline-flex items-center gap-1 text-[11px] text-indigo-500 font-medium">
                                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" /></svg>
                                              {studentDetail.discordUsername}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* ——— Stats Row: 4 mini cards ——— */}
                                  {(() => {
                                    const totalLessons = studentDetail.moduleProgress.reduce((sum, m) => sum + m.totalLessons, 0);
                                    const completedLessons = studentDetail.moduleProgress.reduce((sum, m) => sum + m.completedLessons, 0);
                                    const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
                                    const avgQuizScore = studentDetail.quizHistory.length > 0
                                      ? Math.round(studentDetail.quizHistory.reduce((sum, q) => sum + q.score, 0) / studentDetail.quizHistory.length)
                                      : 0;
                                    const statCards = [
                                      { label: "Progression", value: `${completedLessons}/${totalLessons}`, sub: `${progressPct}% compl\u00e9t\u00e9`, icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>) },
                                      { label: "XP Total", value: studentDetail.totalXP.toLocaleString("fr-FR"), sub: "points", icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>) },
                                      { label: "Score moyen quiz", value: `${avgQuizScore}%`, sub: `${studentDetail.quizHistory.length} quiz`, icon: (<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>) },
                                    ];
                                    return (
                                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                        {statCards.map((card, idx) => (
                                          <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                              <div className="w-7 h-7 rounded-lg bg-[#FF1744]/10 text-[#FF1744] flex items-center justify-center">{card.icon}</div>
                                              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{card.label}</p>
                                            </div>
                                            <p className="text-xl font-bold text-[#111] tabular-nums">{card.value}</p>
                                            <p className="text-[11px] text-gray-400 mt-0.5">{card.sub}</p>
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  })()}

                                  {/* ——— Module Progress ——— */}
                                  {studentDetail.moduleProgress.length > 0 && (
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-4">Progression par module</p>
                                      <div className="space-y-3.5">
                                        {studentDetail.moduleProgress
                                          .sort((a, b) => a.moduleOrder - b.moduleOrder)
                                          .map((mod) => {
                                          const modPct = mod.totalLessons > 0 ? Math.round((mod.completedLessons / mod.totalLessons) * 100) : 0;
                                          const barColor = modPct === 100
                                            ? "bg-emerald-500"
                                            : modPct > 0
                                              ? "bg-[#FF1744]"
                                              : "bg-gray-300";
                                          return (
                                            <div key={mod.moduleId}>
                                              <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-xs text-[#111] font-medium">{mod.moduleTitle}</span>
                                                <span className="text-[10px] text-gray-400 tabular-nums font-medium">{mod.completedLessons}/{mod.totalLessons} le&ccedil;ons</span>
                                              </div>
                                              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                                                <motion.div
                                                  className={cn("h-full rounded-full transition-all", barColor)}
                                                  initial={{ width: 0 }}
                                                  animate={{ width: `${modPct}%` }}
                                                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                                                />
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}

                                  {/* ——— Recent Quiz Scores (last 5) ——— */}
                                  {studentDetail.quizHistory.length > 0 && (
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-4">Derniers r&eacute;sultats quiz</p>
                                      <div className="space-y-2">
                                        {studentDetail.quizHistory.slice(0, 5).map((q) => (
                                          <div key={q.id} className="flex items-center justify-between py-2.5 px-3 -mx-1 rounded-lg border border-gray-50 hover:bg-gray-50/60 transition-colors">
                                            <div className="flex-1 min-w-0 mr-3">
                                              <span className="text-xs text-[#111] font-medium block truncate">{q.lessonTitle}</span>
                                              <span className="text-[10px] text-gray-400">{new Date(q.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}</span>
                                            </div>
                                            <div className="flex items-center gap-2.5 flex-shrink-0">
                                              <span className={cn("text-sm font-bold tabular-nums", q.passed ? "text-emerald-600" : "text-red-500")}>{q.score}%</span>
                                              <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-semibold border", q.passed ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-600 border-red-200")}>
                                                {q.passed ? "R\u00e9ussi" : "\u00c9chou\u00e9"}
                                              </span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* ——— Actions Row: Tier changer + Save ——— */}
                                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mr-1">Changer l&apos;offre</p>
                                      <select
                                        value={editTier}
                                        onChange={(e) => setEditTier(e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-[#111] bg-gray-50/50 focus:outline-none focus:border-[#FF1744]/40 focus:ring-1 focus:ring-[#FF1744]/10 transition-all cursor-pointer"
                                      >
                                        <option value="starter">Starter</option>
                                        <option value="academy">Academy</option>
                                        <option value="one_to_one">1-to-1</option>
                                      </select>
                                      <button
                                        onClick={(e) => { e.stopPropagation(); handleSaveTier(); }}
                                        disabled={savingTier || editTier === (studentDetail.enrollment?.tier || "starter")}
                                        className={cn(
                                          "px-5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                                          editTier !== (studentDetail.enrollment?.tier || "starter")
                                            ? "bg-[#FF1744] text-white hover:bg-[#E01440] shadow-sm hover:shadow-md"
                                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        )}
                                      >
                                        {savingTier ? "Sauvegarde..." : "Sauvegarder"}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-400 text-center py-6">Impossible de charger les d&eacute;tails</p>
                              )}
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-gray-50/30">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Pr&eacute;c&eacute;dent
            </button>
            <span className="text-xs text-gray-400 font-medium tabular-nums">
              Page {page} sur {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Suivant
            </button>
          </div>
        )}
      </motion.div>
      {/* Delete confirmation modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setConfirmDeleteId(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-gray-900">Supprimer cet élève ?</h3>
            <p className="text-gray-500 text-sm mt-2">Cette action est irréversible. Toutes les données seront définitivement supprimées.</p>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setConfirmDeleteId(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">Annuler</button>
              <button onClick={() => handleDeleteStudent(confirmDeleteId)} disabled={!!deletingId} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium text-sm hover:bg-red-700 disabled:opacity-50">
                {deletingId ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Projects Tab                                                    */
/* ══════════════════════════════════════════════════════════════════════ */

function AdminProjectsTab({ projects, onUpdate }: { projects: Project[]; onUpdate: (id: string, status: string, feedback: string) => Promise<void> }) {
  const [activeFilter, setActiveFilter] = useState<ProjectTabFilter>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter);

  return (
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={adminStagger}>
      {/* Filter tabs */}
      <motion.div variants={adminFadeUp} className="flex items-center gap-1 p-1 bg-gray-100/80 rounded-xl border border-gray-100 w-fit">
        {PROJECT_TABS.map((tab) => {
          const count = tab.id === "all" ? projects.length : projects.filter((p) => p.status === tab.id).length;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-medium transition-all",
                activeFilter === tab.id
                  ? "bg-white text-[#111] shadow-sm ring-1 ring-black/5"
                  : "text-gray-500 hover:text-[#111] hover:bg-white/50"
              )}
            >
              {tab.label} ({count})
            </button>
          );
        })}
      </motion.div>

      {/* Project cards */}
      {filtered.length === 0 ? (
        <motion.div variants={adminFadeUp} className="text-center py-16">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">Aucun projet soumis pour le moment.</p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {filtered.map((project, i) => (
            <AdminProjectCard
              key={project.id}
              project={project}
              index={i}
              updating={updatingId === project.id}
              onUpdate={async (id, status, feedback) => {
                setUpdatingId(id);
                await onUpdate(id, status, feedback);
                setUpdatingId(null);
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function AdminProjectCard({ project, index, updating, onUpdate }: {
  project: Project;
  index: number;
  updating: boolean;
  onUpdate: (id: string, status: string, feedback: string) => Promise<void>;
}) {
  const [editStatus, setEditStatus] = useState(project.status);
  const [editFeedback, setEditFeedback] = useState(project.feedback || "");
  const [expanded, setExpanded] = useState(false);

  const date = new Date(project.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[15px] font-semibold text-[#111] truncate">{project.title}</h3>
            <ProjectStatusBadge status={project.status} />
          </div>
          {project.user && (
            <p className="text-xs text-gray-400">
              par {project.user.name || project.user.email} &mdash; {date}
            </p>
          )}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 hover:text-[#111] hover:bg-gray-100 transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Lien
          </a>
        )}
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-3 whitespace-pre-wrap">{project.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-medium text-[#FF1744]/70 hover:text-[#FF1744] transition-colors mt-1"
      >
        {expanded ? "Fermer" : "G\u00e9rer"}
      </button>

      {expanded && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-3 border-t border-gray-100 pt-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Statut</label>
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111] text-sm focus:outline-none focus:border-[#FF1744]/50 transition-all appearance-none"
            >
              <option value="submitted">En attente</option>
              <option value="reviewing">En revue</option>
              <option value="approved">Approuv&eacute;</option>
              <option value="needs_revision">&Agrave; r&eacute;viser</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Feedback</label>
            <textarea
              value={editFeedback}
              onChange={(e) => setEditFeedback(e.target.value)}
              placeholder="Ajouter un retour pour l'&eacute;tudiant..."
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#111] text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 transition-all resize-none"
            />
          </div>
          <button
            onClick={() => onUpdate(project.id, editStatus, editFeedback)}
            disabled={updating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
          >
            {updating ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Mise &agrave; jour...
              </>
            ) : (
              "Enregistrer"
            )}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Referrals Tab                                                   */
/* ══════════════════════════════════════════════════════════════════════ */

interface AdminReferralEntry {
  id: string;
  referrer: { name: string; email: string; code: string };
  referred: { name: string; email: string };
  tier: string | null;
  commission: number;
  status: string;
  createdAt: string;
  paidAt: string | null;
}

interface AdminReferrerStat {
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

const REF_TIER_LABELS: Record<string, string> = { starter: "Starter", academy: "Academy", one_to_one: "One-to-One" };
const REF_STATUS: Record<string, { label: string; color: string }> = {
  pending: { label: "En attente", color: "bg-amber-100 text-amber-700" },
  confirmed: { label: "\u00c0 payer", color: "bg-blue-100 text-blue-700" },
  paid: { label: "Pay\u00e9", color: "bg-emerald-100 text-emerald-700" },
};

/* ══════════════════════════════════════════════════════════════════════ */
/*  Admin Leads Tab                                                       */
/* ══════════════════════════════════════════════════════════════════════ */

interface AdminLead {
  id: string;
  email: string;
  source: string;
  status: string;
  createdAt: string;
  hasAccount: boolean;
}
interface AdminLeadStats {
  total: number;
  today: number;
  converted: number;
  withAccount: number;
}

function AdminLeadsTab() {
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [lstats, setLstats] = useState<AdminLeadStats | null>(null);
  const [lloading, setLloading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((r) => r.json())
      .then((data) => {
        setLeads(data.leads || []);
        setLstats(data.stats || null);
      })
      .catch(console.error)
      .finally(() => setLloading(false));
  }, []);

  const filtered = search
    ? leads.filter((l) => l.email.toLowerCase().includes(search.toLowerCase()))
    : leads;

  if (lloading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <motion.div className="space-y-6" initial="hidden" animate="visible" variants={adminStagger}>
      {/* Stats cards */}
      {lstats && (
        <motion.div variants={adminFadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Total Leads</p>
            <p className="text-2xl font-bold text-[#111] tabular-nums">{lstats.total}</p>
            <p className="text-xs text-gray-400 mt-1">emails r&eacute;cup&eacute;r&eacute;s</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Aujourd&apos;hui</p>
            <p className="text-2xl font-bold text-[#FF1744] tabular-nums">{lstats.today}</p>
            <p className="text-xs text-gray-400 mt-1">nouveaux leads</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Inscrits</p>
            <p className="text-2xl font-bold text-emerald-600 tabular-nums">{lstats.withAccount}</p>
            <p className="text-xs text-gray-400 mt-1">ont cr&eacute;&eacute; un compte</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">Taux conversion</p>
            <p className="text-2xl font-bold text-[#111] tabular-nums">
              {lstats.total > 0 ? Math.round((lstats.withAccount / lstats.total) * 100) : 0}%
            </p>
            <p className="text-xs text-gray-400 mt-1">lead → inscription</p>
          </div>
        </motion.div>
      )}

      {/* Search + table */}
      <motion.div variants={adminFadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="font-semibold text-[#111]">Leads Guide IA</h3>
            <p className="text-xs text-gray-400">{filtered.length} emails</p>
          </div>
          <input
            type="text"
            placeholder="Rechercher un email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744] w-full sm:w-64"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-sm">
            {search ? "Aucun lead trouv\u00e9" : "Aucun lead pour le moment"}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-wider text-gray-400 border-b border-gray-100">
                  <th className="px-5 py-3 font-semibold">Email</th>
                  <th className="px-5 py-3 font-semibold">Source</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Statut</th>
                  <th className="px-5 py-3 font-semibold">Compte</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-[#111]">{lead.email}</td>
                    <td className="px-5 py-3.5 text-gray-500">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-600">
                        {lead.source === "guide_niches" ? "Guide 5 niches" : lead.source}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 tabular-nums">
                      {new Date(lead.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                      <span className="text-gray-300 ml-1">
                        {new Date(lead.createdAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold",
                        lead.status === "active" ? "bg-blue-50 text-blue-600" :
                        lead.status === "converted" ? "bg-emerald-50 text-emerald-600" :
                        "bg-gray-100 text-gray-500"
                      )}>
                        {lead.status === "active" ? "Actif" : lead.status === "converted" ? "Converti" : lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      {lead.hasAccount ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Inscrit
                        </span>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function AdminReferralsTab() {
  const [referrals, setReferrals] = useState<AdminReferralEntry[]>([]);
  const [referrerStats, setReferrerStats] = useState<AdminReferrerStat[]>([]);
  const [rstats, setRstats] = useState<{ totalReferrals: number; confirmedReferrals: number; unpaidCommission: number; paidCommission: number } | null>(null);
  const [rloading, setRloading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [marking, setMarking] = useState(false);

  const fetchRefData = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/referrals");
      const data = await res.json();
      setRstats(data.stats);
      setReferrerStats(data.referrerStats || []);
      setReferrals(data.referrals || []);
    } catch { /* ignore */ }
    setRloading(false);
  }, []);

  useEffect(() => { fetchRefData(); }, [fetchRefData]);

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
      await fetchRefData();
    } catch { alert("Erreur"); }
    setMarking(false);
  }

  if (rloading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />)}
        </div>
        <div className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
      </div>
    );
  }

  const unpaidReferrals = referrals.filter((r) => r.status === "confirmed");

  return (
    <div className="space-y-6">
      {rstats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 font-medium mb-1">Total parrainages</p>
            <p className="text-2xl font-bold text-[#111]">{rstats.totalReferrals}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 font-medium mb-1">Confirm&eacute;s</p>
            <p className="text-2xl font-bold text-[#FF1744]">{rstats.confirmedReferrals}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 font-medium mb-1">&Agrave; payer</p>
            <p className={cn("text-2xl font-bold", rstats.unpaidCommission > 0 ? "text-amber-500" : "text-[#111]")}>{(rstats.unpaidCommission / 100).toFixed(0)}&euro;</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 font-medium mb-1">D&eacute;j&agrave; pay&eacute;</p>
            <p className="text-2xl font-bold text-emerald-500">{(rstats.paidCommission / 100).toFixed(0)}&euro;</p>
          </div>
        </div>
      )}

      {referrerStats.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#111]">Parrains actifs</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {referrerStats.map((r) => (
              <div key={r.id} className="flex items-center gap-4 px-5 py-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {r.name[0]?.toUpperCase() || "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111] truncate">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.email}</p>
                </div>
                <code className="text-[10px] bg-gray-100 px-2 py-1 rounded font-mono text-gray-500 hidden sm:block">{r.referralCode}</code>
                <div className="text-center px-3">
                  <p className="text-sm font-bold text-[#111]">{r.confirmedReferrals}</p>
                  <p className="text-[10px] text-gray-400">filleuls</p>
                </div>
                <div className="text-right min-w-[70px]">
                  {r.unpaidCommission > 0 ? (
                    <p className="text-sm font-bold text-amber-500">{(r.unpaidCommission / 100).toFixed(0)}&euro; d&ucirc;</p>
                  ) : r.paidCommission > 0 ? (
                    <p className="text-sm font-medium text-emerald-500">{(r.paidCommission / 100).toFixed(0)}&euro; pay&eacute;</p>
                  ) : (
                    <p className="text-sm text-gray-300">&mdash;</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111]">D&eacute;tail des parrainages</h3>
          {unpaidReferrals.length > 0 && (
            <div className="flex items-center gap-2">
              <button onClick={() => setSelectedIds(new Set(unpaidReferrals.map((r) => r.id)))} className="text-xs text-blue-500 hover:text-blue-700 font-medium">
                Tout s&eacute;lectionner ({unpaidReferrals.length})
              </button>
              {selectedIds.size > 0 && (
                <button onClick={markAsPaid} disabled={marking} className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-emerald-600 disabled:opacity-50 transition-all">
                  {marking ? "..." : `Marquer ${selectedIds.size} comme pay\u00e9`}
                </button>
              )}
            </div>
          )}
        </div>

        {referrals.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-3xl mb-2">🤝</p>
            <p className="text-sm text-gray-400">Aucun parrainage pour le moment.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {referrals.map((r) => {
              const s = REF_STATUS[r.status] || REF_STATUS.pending;
              return (
                <div key={r.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                  {r.status === "confirmed" ? (
                    <input
                      type="checkbox"
                      checked={selectedIds.has(r.id)}
                      onChange={() => {
                        setSelectedIds((prev) => {
                          const next = new Set(prev);
                          if (next.has(r.id)) next.delete(r.id);
                          else next.add(r.id);
                          return next;
                        });
                      }}
                      className="rounded border-gray-300 accent-emerald-500"
                    />
                  ) : <div className="w-4" />}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#111]">
                      <span className="font-semibold">{r.referrer.name}</span>
                      <span className="text-gray-400 mx-1.5">&rarr;</span>
                      <span className="font-medium">{r.referred.name}</span>
                      <span className="text-xs text-gray-400 ml-1">({r.referred.email})</span>
                    </p>
                  </div>
                  {r.tier && (
                    <span className="text-[10px] font-semibold bg-gray-100 px-2 py-0.5 rounded hidden sm:block">
                      {REF_TIER_LABELS[r.tier] || r.tier}
                    </span>
                  )}
                  <span className="text-xs font-mono text-[#111] min-w-[50px] text-right">
                    {r.commission > 0 ? `${(r.commission / 100).toFixed(0)}\u20ac` : "\u2014"}
                  </span>
                  <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", s.color)}>
                    {s.label}
                  </span>
                  <span className="text-[10px] text-gray-400 min-w-[60px] text-right hidden sm:block">
                    {new Date(r.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
