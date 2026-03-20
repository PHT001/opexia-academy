"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TIERS, TIER_MODULE_ACCESS } from "@/lib/constants";

interface DashboardData {
  totalLessons: number;
  completedLessons: number;
  currentLesson: { id: string; title: string; slug: string; order: number } | null;
  streak: number;
  xp: number;
  tier: string | null;
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

/* ——— Icons ——— */
function IconPlay({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Bonjour";
  if (h < 18) return "Bon apr\u00e8s-midi";
  return "Bonsoir";
}

/* ——— Mock Data ——— */
const WEEK_ACTIVITY = [
  { day: "Lun", minutes: 52 }, { day: "Mar", minutes: 38 }, { day: "Mer", minutes: 71 },
  { day: "Jeu", minutes: 18 }, { day: "Ven", minutes: 55 }, { day: "Sam", minutes: 0 }, { day: "Dim", minutes: 30 },
];
const MAX_WEEK = Math.max(...WEEK_ACTIVITY.map((d) => d.minutes), 1);
const TODAY_INDEX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

const DAILY_GOALS = [
  { label: "Compl\u00e9ter 1 le\u00e7on", progress: 100, done: true },
  { label: "R\u00e9ussir 1 quiz", progress: 100, done: true },
  { label: "Gagner 50 XP", progress: 68, done: false },
  { label: "\u00c9tudier 30 min", progress: 45, done: false },
];

const RECENT = [
  { text: "Le\u00e7on 1 termin\u00e9e", sub: "Comprendre l\u2019IA", time: "Il y a 2h", icon: "check" },
  { text: "Quiz r\u00e9ussi", sub: "Score : 85%", time: "Il y a 3h", icon: "quiz" },
  { text: "S\u00e9rie de 3 jours", sub: "Continue comme \u00e7a !", time: "Hier", icon: "flame" },
  { text: "Module 1 commenc\u00e9", sub: "D\u00e9couvrir Claude", time: "Hier", icon: "layers" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

/* ——— Card wrapper ——— */
function Card({ children, className, ...props }: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn("bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-300", className)}
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
        <div className="h-40 bg-white/60 rounded-2xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 bg-white/60 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  const userTier = data?.tier || "starter";
  const currentPlan = TIERS.find((t) => t.id === userTier) || TIERS[0];
  const currentIndex = TIERS.findIndex((t) => t.id === userTier);
  const nextPlan = currentIndex < TIERS.length - 1 ? TIERS[currentIndex + 1] : null;
  const accessibleModules = TIER_MODULE_ACCESS[userTier] || [1];

  return (
    <div className="w-full space-y-5">

      {/* ════ WELCOME BANNER ════ */}
      <motion.div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-lg"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#FF1744]/5 rounded-full translate-y-1/2 blur-2xl" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF1744] font-semibold mb-2">Tableau de bord</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {getGreeting()}, {firstName} !
            </h1>
            <p className="text-white/40 text-sm">
              {progress > 0
                ? `Tu es \u00e0 ${progress}% de ta formation. Continue comme \u00e7a !`
                : "Commence ta premi\u00e8re le\u00e7on pour lancer l\u2019aventure."
              }
            </p>
          </div>
          {data?.currentLesson && (
            <a
              href={`/lessons/${data.currentLesson.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white flex-shrink-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF1744, #D50000)", boxShadow: "0 4px 24px rgba(255,23,68,0.35)" }}
            >
              <IconPlay className="text-white" /> Reprendre
            </a>
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
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ════ STATS ════ */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" initial="hidden" animate="visible" variants={stagger}>
        {[
          { label: "Le\u00e7ons", value: `${data?.completedLessons || 0}/${data?.totalLessons || 80}`, sub: "termin\u00e9es", color: "text-[#FF1744]", bg: "bg-red-50", icon: "\ud83d\udcda" },
          { label: "XP total", value: `${(data?.xp || 0).toLocaleString()}`, sub: "points gagn\u00e9s", color: "text-amber-500", bg: "bg-amber-50", icon: "\u26a1" },
          { label: "Streak", value: `${data?.streak || 0}`, sub: "jours cons\u00e9cutifs", color: "text-orange-500", bg: "bg-orange-50", icon: "\ud83d\udd25" },
          { label: "Temps moyen", value: "18 min", sub: "par le\u00e7on", color: "text-blue-500", bg: "bg-blue-50", icon: "\u23f1" },
        ].map((stat) => (
          <Card key={stat.label} variants={fadeUp} className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-lg", stat.bg)}>
                {stat.icon}
              </div>
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="text-2xl font-black text-[#111] tracking-tight">{stat.value}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</p>
          </Card>
        ))}
      </motion.div>

      {/* ════ TWO-COLUMN ════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-5">

          {/* Continue Learning */}
          {data?.currentLesson && (
            <Card initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="overflow-hidden">
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #FF1744, #FF5252, #FF1744)" }} />
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <IconPlay className="text-[#FF1744]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#FF1744] font-bold mb-0.5">Reprendre la formation</p>
                  <h3 className="text-sm font-bold text-[#111] truncate">{data.currentLesson.title}</h3>
                  <p className="text-xs text-gray-400">Le&ccedil;on {data.currentLesson.order} sur {data.totalLessons}</p>
                </div>
                <Button href={`/lessons/${data.currentLesson.slug}`} size="sm" className="flex-shrink-0 gap-2">
                  Continuer <IconArrowRight />
                </Button>
              </div>
            </Card>
          )}

          {/* Weekly Activity */}
          <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-[#111]">Activit&eacute; de la semaine</h3>
                <p className="text-xs text-gray-400 mt-0.5">Minutes &eacute;tudi&eacute;es par jour</p>
              </div>
              <span className="text-xs font-bold text-[#FF1744] bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">
                {WEEK_ACTIVITY.reduce((a, b) => a + b.minutes, 0)} min
              </span>
            </div>
            <div className="flex items-end justify-between gap-2 h-32">
              {WEEK_ACTIVITY.map((d, i) => {
                const isToday = i === TODAY_INDEX;
                return (
                  <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                    {d.minutes > 0 && (
                      <span className={cn("text-[10px] font-bold", isToday ? "text-[#FF1744]" : "text-gray-400")}>{d.minutes}</span>
                    )}
                    <motion.div
                      className={cn("w-full max-w-[36px] rounded-lg", isToday ? "bg-gradient-to-t from-[#D50000] to-[#FF1744]" : "bg-gray-100")}
                      initial={{ height: 0 }}
                      whileInView={{ height: d.minutes > 0 ? `${(d.minutes / MAX_WEEK) * 100}%` : "4px" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                    />
                    <span className={cn("text-[10px] font-semibold", isToday ? "text-[#FF1744]" : "text-gray-400")}>{d.day}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Mon offre */}
          <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-sm font-bold text-[#111]">Mon offre</h3>
                <p className="text-xs text-gray-400 mt-0.5">Plan {currentPlan.name} &mdash; {currentPlan.price}&euro;</p>
              </div>
              <div className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                userTier === "one_to_one" ? "bg-amber-50 text-amber-600 border border-amber-200" :
                userTier === "academy" ? "bg-red-50 text-[#FF1744] border border-red-200" :
                "bg-gray-100 text-gray-500 border border-gray-200"
              )}>
                {userTier === "one_to_one" ? "Premium" : userTier === "academy" ? "Complet" : "Basique"}
              </div>
            </div>

            {/* Module access */}
            <div className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-100 mb-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Acc&egrave;s aux modules</span>
                <span className="text-[10px] text-gray-400 font-semibold">{accessibleModules.length}/14</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 14 }, (_, i) => i + 1).map((m) => (
                  <div key={m} className={cn("flex-1 h-2.5 rounded-full", accessibleModules.includes(m) ? "bg-gradient-to-r from-[#FF1744] to-[#FF5252]" : "bg-gray-200")} />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {currentPlan.features.slice(0, 6).map((f) => (
                <div key={f.text} className="flex items-center gap-2 py-1">
                  {f.included ? (
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <IconCheck className="text-emerald-500 w-2.5 h-2.5" />
                    </div>
                  ) : (
                    <div className="w-4.5 h-4.5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                      <span className="text-gray-300 text-[8px]">&mdash;</span>
                    </div>
                  )}
                  <span className={cn("text-[11px]", f.included ? "text-gray-600" : "text-gray-300")}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Upgrade — hidden for admins */}
            {nextPlan && !isAdmin && (
              <div className="flex items-center justify-between p-4 rounded-xl border-2 border-dashed border-red-200 bg-red-50/60">
                <div>
                  <p className="text-xs font-bold text-[#111]">Passer &agrave; <span className="text-[#FF1744]">{nextPlan.name}</span></p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{nextPlan.description}</p>
                </div>
                <a href="/profile?tab=subscription" className="px-5 py-2.5 rounded-xl text-xs font-bold text-white flex-shrink-0 shadow-md hover:shadow-lg transition-all" style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}>
                  {nextPlan.price}&euro; &rarr;
                </a>
              </div>
            )}
          </Card>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-5">

          {/* Daily Goals */}
          <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-[#111]">Objectifs du jour</h3>
              <span className="text-[10px] font-bold text-[#FF1744] bg-red-50 px-2 py-1 rounded-lg border border-red-100">
                {DAILY_GOALS.filter((g) => g.done).length}/{DAILY_GOALS.length}
              </span>
            </div>
            <div className="space-y-4">
              {DAILY_GOALS.map((goal, i) => (
                <div key={goal.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", goal.done ? "bg-emerald-500" : "border-2 border-gray-200 bg-white")}>
                        {goal.done && <IconCheck className="text-white w-3 h-3" />}
                      </div>
                      <span className={cn("text-xs", goal.done ? "text-gray-400 line-through" : "text-[#111] font-medium")}>{goal.label}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden ml-[30px]" style={{ width: "calc(100% - 30px)" }}>
                    <motion.div
                      className={cn("h-full rounded-full", goal.done ? "bg-emerald-400" : "bg-gradient-to-r from-[#FF1744] to-[#FF5252]")}
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 0.7, delay: 0.3 + 0.1 * i, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Module Progress */}
          {data?.modules && data.modules.length > 0 && (
            <Card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="p-6">
              <h3 className="text-sm font-bold text-[#111] mb-4">Modules en cours</h3>
              <div className="space-y-4">
                {data.modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.totalLessons).slice(0, 4).map((mod) => {
                  const pct = Math.round((mod.completedLessons / mod.totalLessons) * 100);
                  return (
                    <div key={mod.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-[#111] truncate pr-2">M{mod.order}. {mod.title}</span>
                        <span className="text-[10px] text-gray-400 font-bold flex-shrink-0">{pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#FF5252] transition-all" style={{ width: `${pct}%` }} />
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
            <h3 className="text-sm font-bold text-[#111] mb-4">Activit&eacute; r&eacute;cente</h3>
            <div className="space-y-0">
              {RECENT.map((item, i) => (
                <div key={i} className={cn("flex items-center gap-3 py-3", i < RECENT.length - 1 && "border-b border-gray-100")}>
                  <div className="w-8 h-8 rounded-lg bg-[#FF1744]/10 flex items-center justify-center flex-shrink-0 text-[#FF1744]">
                    {item.icon === "check" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                    {item.icon === "quiz" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914-3.782A2 2 0 0 0 10 11" /></svg>}
                    {item.icon === "flame" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c1 3 4.5 6 4.5 10a6.5 6.5 0 1 1-13 0C3.5 8 7 5 8 2c.5 2 2 4 4 0z" /></svg>}
                    {item.icon === "layers" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#111]">{item.text}</p>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                  <span className="text-[10px] text-gray-300 shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
