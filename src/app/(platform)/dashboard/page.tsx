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
  useEffect(() => { if (isInView) animate(motionVal, value, { duration: 1, ease: "easeOut" }); }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
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

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

/* ——— Card wrapper ——— */
function Card({ children, className, ...props }: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn("bg-white rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow duration-300", className)}
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
      <div className="animate-pulse space-y-5 w-full">
        <div className="h-36 bg-gray-100 rounded-xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-24 bg-gray-100 rounded-xl" />)}
        </div>
      </div>
    );
  }

  const hasEnrollment = !!data?.tier;
  const userTier = data?.tier || "starter";

  if (showOnboardingTest) {
    return (
      <PostPurchaseOnboarding
        userName={session?.user?.name || undefined}
        onComplete={() => setShowOnboardingTest(false)}
      />
    );
  }

  return (
    <div className="w-full space-y-6">

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
          className="relative overflow-hidden rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1.5">
              Ton compte est cr&eacute;&eacute; !
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Choisis ton offre pour d&eacute;bloquer tes modules de formation et commencer ton parcours.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium text-white bg-[#FF1744] hover:bg-[#E01440] transition-colors"
            >
              Voir les offres
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}

      {/* ════ WELCOME BANNER ════ */}
      <motion.div
        className="relative overflow-hidden rounded-xl p-6 sm:p-8"
        style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0a0a0a 100%)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1744]/[0.04] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">
              {getGreeting()}, {firstName}
            </h1>
            <p className="text-white/40 text-sm">
              {progress > 0
                ? `${progress}% de ta formation compl\u00e9t\u00e9. Continue comme \u00e7a.`
                : "Commence ta premi\u00e8re le\u00e7on pour lancer l\u2019aventure."
              }
            </p>
          </div>
          {data?.currentLesson && (
            <a
              href={`/lessons/${data.currentLesson.slug}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#FF1744] hover:bg-[#E01440] transition-colors flex-shrink-0"
            >
              <IconPlay className="text-white" /> Reprendre
            </a>
          )}
        </div>

        {/* Progress bar */}
        <div className="relative z-10 mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/30 font-medium">Progression globale</span>
            <span className="text-xs text-white/60 font-medium">{progress}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[#FF1744]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ════ STATS ════ */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" animate="visible" variants={stagger}>
        {[
          { label: "Le\u00e7ons", value: `${data?.completedLessons || 0}/${data?.totalLessons || 80}`, sub: "termin\u00e9es", borderColor: "border-l-gray-900", icon: IconBook },
          { label: "XP total", value: `${(data?.xp || 0).toLocaleString()}`, sub: "points gagn\u00e9s", borderColor: "border-l-[#FF1744]", icon: IconBolt },
          { label: "Streak", value: `${data?.streak || 0}`, sub: "jours cons\u00e9cutifs", borderColor: "border-l-orange-400", icon: IconFlame },
          { label: "Quiz r\u00e9ussis", value: `${data?.quizzesCompleted || 0}`, sub: `moy. ${Math.round(data?.averageScore || 0)}%`, borderColor: "border-l-gray-400", icon: IconChart },
        ].map((stat) => (
          <Card key={stat.label} variants={fadeUp} className={cn("p-5 border-l-[3px]", stat.borderColor)}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
              <stat.icon className="text-gray-300" />
            </div>
            <p className="text-2xl font-semibold text-gray-900 tracking-tight">{stat.value}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</p>
          </Card>
        ))}
      </motion.div>

      {/* ════ TWO-COLUMN ════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">

          {/* Continue Learning */}
          {data?.currentLesson && (
            <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="overflow-hidden">
              <div className="h-[2px] w-full bg-[#FF1744]" />
              <div className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <IconPlay className="text-gray-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#FF1744] font-medium mb-0.5">Reprendre la formation</p>
                  <h3 className="text-sm font-medium text-gray-900 truncate">{data.currentLesson.title}</h3>
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
              <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Activit&eacute; de la semaine</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Le&ccedil;ons et quiz compl&eacute;t&eacute;s</p>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                    {totalWeek} activit&eacute;{totalWeek !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-2 h-32">
                  {weekData.map((d, i) => {
                    const isToday = i === todayIdx;
                    return (
                      <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                        {d.count > 0 && (
                          <span className={cn("text-[10px] font-medium", isToday ? "text-[#FF1744]" : "text-gray-400")}>{d.count}</span>
                        )}
                        <motion.div
                          className={cn(
                            "w-full max-w-[32px] rounded-md",
                            isToday ? "bg-[#FF1744]" : d.count > 0 ? "bg-gray-200" : "bg-gray-100"
                          )}
                          initial={{ height: 0 }}
                          whileInView={{ height: d.count > 0 ? `${(d.count / maxCount) * 100}%` : "3px" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                        />
                        <span className={cn("text-[10px] font-medium", isToday ? "text-[#FF1744]" : "text-gray-400")}>{d.day}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })()}

        </div>

        {/* RIGHT */}
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
              { label: "Compl\u00e9ter 1 le\u00e7on", progress: Math.min(todayLessons * 100, 100), done: todayLessons >= 1 },
              { label: "R\u00e9ussir 1 quiz", progress: Math.min(todayQuizzes * 100, 100), done: todayQuizzes >= 1 },
              { label: "Gagner 50 XP", progress: Math.min(Math.round((todayXp / 50) * 100), 100), done: todayXp >= 50 },
              { label: "Maintenir le streak", progress: (data?.streak || 0) > 0 ? 100 : 0, done: (data?.streak || 0) > 0 },
            ];
            const doneCount = dailyGoals.filter(g => g.done).length;
            return (
              <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-medium text-gray-900">Objectifs du jour</h3>
                  <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    {doneCount}/{dailyGoals.length}
                  </span>
                </div>
                <div className="space-y-4">
                  {dailyGoals.map((goal, i) => (
                    <div key={goal.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className={cn(
                            "w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors",
                            goal.done ? "bg-gray-900" : "border border-gray-200 bg-white"
                          )}>
                            {goal.done && <IconCheck className="text-white w-3 h-3" />}
                          </div>
                          <span className={cn("text-xs", goal.done ? "text-gray-400 line-through" : "text-gray-700 font-medium")}>{goal.label}</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{goal.progress}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden ml-[30px]" style={{ width: "calc(100% - 30px)" }}>
                        <motion.div
                          className={cn("h-full rounded-full", goal.done ? "bg-gray-900" : "bg-[#FF1744]")}
                          initial={{ width: 0 }}
                          animate={{ width: `${goal.progress}%` }}
                          transition={{ duration: 0.7, delay: 0.3 + 0.1 * i, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })()}

          {/* Module Progress */}
          {data?.modules && data.modules.length > 0 && (
            <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="p-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Modules en cours</h3>
              <div className="space-y-4">
                {data.modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.totalLessons).slice(0, 4).map((mod) => {
                  const pct = Math.round((mod.completedLessons / mod.totalLessons) * 100);
                  return (
                    <div key={mod.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-gray-700 truncate pr-2">M{mod.order}. {mod.title}</span>
                        <span className="text-[10px] text-gray-400 font-medium flex-shrink-0">{pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-gray-900 transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
                {data.modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.totalLessons).length === 0 && (
                  <p className="text-xs text-gray-400 text-center py-4">Aucun module en cours pour le moment.</p>
                )}
              </div>
            </Card>
          )}

          {/* Recent Activity */}
          <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Activit&eacute; r&eacute;cente</h3>
            <div className="space-y-0">
              {(data?.recentActivity && data.recentActivity.length > 0) ? data.recentActivity.map((item, i) => (
                <div key={i} className={cn("flex items-center gap-3 py-3", i < data.recentActivity.length - 1 && "border-b border-gray-50")}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    item.type === "quiz" ? "bg-gray-50 text-gray-500" : "bg-gray-50 text-gray-500"
                  )}>
                    {item.type === "lesson" ? (
                      <IconCheck className="w-3.5 h-3.5" />
                    ) : (
                      <IconChart className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900">
                      {item.type === "lesson" ? "Le\u00e7on termin\u00e9e" : "Quiz r\u00e9ussi"}
                    </p>
                    <p className="text-[10px] text-gray-400">M{item.moduleOrder} &middot; {item.title}{item.xpEarned > 0 ? ` &middot; +${item.xpEarned} XP` : ""}</p>
                  </div>
                  <span className="text-[10px] text-gray-300 shrink-0">{timeAgo(item.completedAt)}</span>
                </div>
              )) : (
                <p className="text-xs text-gray-400 text-center py-6">Aucune activit&eacute; pour le moment. Commence ta premi&egrave;re le&ccedil;on !</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
