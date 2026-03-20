"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MODULE_METADATA, WEEKS, TIER_MODULE_ACCESS } from "@/lib/constants";
import type { ModuleMetadata } from "@/lib/constants";
import { LessonSectionContent } from "@/components/lesson/LessonSectionContent";
import LessonArticleLayout from "@/components/lesson-blocks/LessonArticleLayout";
import LessonBlockRenderer from "@/components/lesson-blocks/LessonBlockRenderer";
import { detectContentFormat, parseLessonBlocks } from "@/lib/parseLessonContent";
import { Badge } from "@/components/ui/Badge";

interface LessonItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  duration: string;
  status: "locked" | "in_progress" | "completed";
  quizPassed: boolean;
  hasQuiz: boolean;
  xpEarned: number;
}

interface ModuleGroup {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: LessonItem[];
}

interface LessonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  videoUrl: string | null;
  pdfUrl: string | null;
  exercise: string | null;
  duration: string;
  order: number;
  moduleTitle: string;
  moduleOrder: number;
  hasQuiz: boolean;
  quizPassed: boolean;
  status: string;
  prevSlug: string | null;
  nextSlug: string | null;
}

/* ——— Week Themes ——— */
const WEEK_THEMES = [
  { accent: "text-emerald-600", accentBg: "bg-emerald-50", border: "border-emerald-200", bar: "bg-emerald-500", ring: "stroke-emerald-500", leftBorder: "border-l-emerald-500", lightBg: "bg-emerald-50" },
  { accent: "text-blue-600", accentBg: "bg-blue-50", border: "border-blue-200", bar: "bg-blue-500", ring: "stroke-blue-500", leftBorder: "border-l-blue-500", lightBg: "bg-blue-50" },
  { accent: "text-violet-600", accentBg: "bg-violet-50", border: "border-violet-200", bar: "bg-violet-500", ring: "stroke-violet-500", leftBorder: "border-l-violet-500", lightBg: "bg-violet-50" },
  { accent: "text-amber-600", accentBg: "bg-amber-50", border: "border-amber-200", bar: "bg-amber-500", ring: "stroke-amber-500", leftBorder: "border-l-amber-500", lightBg: "bg-amber-50" },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
const cardContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

/* ——— Icons ——— */
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconPlay({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
}
function IconLock({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconQuiz({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>;
}
function IconChevron({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function IconBook({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
}
function IconLayers({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function IconClaude({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C8 0 9.5 5 11 6.5C12.5 8 16 8 16 8C16 8 12.5 8 11 9.5C9.5 11 8 16 8 16C8 16 6.5 11 5 9.5C3.5 8 0 8 0 8C0 8 3.5 8 5 6.5C6.5 5 8 0 8 0Z" /></svg>;
}
function IconOpenClaw({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="12" height="9" rx="2" /><circle cx="6" cy="10" r="1.5" fill="currentColor" /><circle cx="10" cy="10" r="1.5" fill="currentColor" /><path d="M8 2v3" /><circle cx="8" cy="1.5" r="1.5" /></svg>;
}
function IconX({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
}
function IconBack({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
}

/* ——— Circular Progress ——— */
function CircularProgress({ percentage, size = 56, strokeWidth = 4, strokeColor = "stroke-[#FF1744]", className }: {
  percentage: number; size?: number; strokeWidth?: number; strokeColor?: string; className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-gray-200" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} strokeLinecap="round" className={strokeColor} strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 1s ease-out" }} />
      </svg>
      <span className="absolute text-xs font-black text-[#111]">{percentage}%</span>
    </div>
  );
}

const DEFAULT_META: ModuleMetadata = { brands: [], difficulty: "debutant", estimatedTime: "~2h", lessonCount: 6 };

/* ═══════════════════════════════════════════════════════
   LESSON READER PANEL — Inline drawer
   ═══════════════════════════════════════════════════════ */
function LessonReaderPanel({
  lessonSlug,
  onClose,
  onNavigate,
}: {
  lessonSlug: string;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    setLesson(null);
    fetch(`/api/lessons/${lessonSlug}`)
      .then((r) => r.json())
      .then((data) => {
        setLesson(data);
        setLoading(false);
        scrollRef.current?.scrollTo(0, 0);
      })
      .catch(() => setLoading(false));
  }, [lessonSlug]);

  // Keyboard: Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const navigationFooter = lesson ? (
    <div className="space-y-6">
      {/* PDF */}
      {lesson.pdfUrl && (
        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200 flex items-center justify-between">
          <div>
            <p className="font-semibold text-[#111] text-sm">R{"\u00e9"}sum{"\u00e9"} de la le{"\u00e7"}on (PDF)</p>
            <p className="text-xs text-[#6B7280]">T{"\u00e9"}l{"\u00e9"}charge le r{"\u00e9"}sum{"\u00e9"} pour r{"\u00e9"}viser</p>
          </div>
          <a href={lesson.pdfUrl} className="bg-[#FF1744] text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-[#D50000] transition-colors">
            T{"\u00e9"}l{"\u00e9"}charger
          </a>
        </div>
      )}

      {/* Exercise */}
      {lesson.exercise && (
        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200">
          <h3 className="font-bold text-[#111] mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#FF1744]/10 text-[#FF1744] flex items-center justify-center text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            Exercice pratique
          </h3>
          <div className="text-sm text-[#374151] leading-relaxed block-text" dangerouslySetInnerHTML={{ __html: lesson.exercise }} />
        </div>
      )}

      {/* Upsell */}
      {lesson.order === 10 && (
        <div className="bg-gradient-to-br from-[#FF1744]/5 to-[#FF1744]/10 rounded-2xl p-8 border border-[#FF1744]/20 text-center">
          <h3 className="text-xl font-bold text-[#111] mb-3">Tu veux aller plus vite ?</h3>
          <p className="text-sm text-[#6B7280] mb-6">Passe {"\u00e0"} la formule One-to-One et b{"\u00e9"}n{"\u00e9"}ficie d&apos;un accompagnement personnalis{"\u00e9"}.</p>
          <a href="/profile?tab=subscription" className="inline-block bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors">
            D{"\u00e9"}couvrir le One-to-One
          </a>
        </div>
      )}

      {/* Navigation prev/next */}
      <div className="flex items-center justify-between gap-4">
        {lesson.prevSlug ? (
          <button onClick={() => onNavigate(lesson.prevSlug!)} className="text-[#6B7280] hover:text-[#111] transition-colors text-sm font-medium flex items-center gap-1">
            <IconBack className="w-4 h-4" />
            Le{"\u00e7"}on pr{"\u00e9"}c{"\u00e9"}dente
          </button>
        ) : <div />}

        {lesson.hasQuiz && !lesson.quizPassed ? (
          <a href={`/quiz/${lesson.slug}`} className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors">
            Passer le Quiz {"\u2192"}
          </a>
        ) : lesson.nextSlug ? (
          <button onClick={() => onNavigate(lesson.nextSlug!)} className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors flex items-center gap-1">
            Le{"\u00e7"}on suivante
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        ) : (
          <a href="/congratulations" className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors">
            Terminer le parcours
          </a>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-[3px] z-40"
        onClick={onClose}
      />

      {/* Panel — full width in content area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="fixed inset-0 md:left-[260px] md:top-0 z-50 bg-white flex flex-col"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white/80 backdrop-blur-sm flex-shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#111] transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
              <IconBack />
            </div>
            <span className="hidden sm:inline">Retour aux le{"\u00e7"}ons</span>
          </button>

          {lesson && !loading && (
            <div className="flex items-center gap-3">
              {lesson.prevSlug && (
                <button onClick={() => onNavigate(lesson.prevSlug!)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" title="Pr\u00e9c\u00e9dente">
                  <IconBack className="w-4 h-4 text-gray-500" />
                </button>
              )}
              {lesson.nextSlug && (
                <button onClick={() => onNavigate(lesson.nextSlug!)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" title="Suivante">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
          {loading && (
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="w-8 h-8 border-2 border-[#FF1744] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && !lesson && (
            <div className="text-center py-20">
              <h2 className="text-xl font-bold text-[#111] mb-2">Le{"\u00e7"}on introuvable</h2>
              <p className="text-[#6B7280] mb-6">Cette le{"\u00e7"}on n&apos;existe pas ou tu n&apos;y as pas acc{"\u00e8"}s.</p>
              <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-[#FF1744] text-white text-sm font-semibold hover:bg-[#D50000] transition-colors">
                Retour aux le{"\u00e7"}ons
              </button>
            </div>
          )}

          {!loading && lesson && (() => {
            const format = detectContentFormat(lesson.content);
            const isBlocks = format === "blocks";

            if (isBlocks) {
              const blocks = parseLessonBlocks(lesson.content);
              return (
                <LessonArticleLayout
                  moduleTitle={`Module ${lesson.moduleOrder} \u2014 ${lesson.moduleTitle}`}
                  lessonNumber={lesson.order}
                  lessonTitle={lesson.title}
                  duration={lesson.duration}
                  footer={navigationFooter}
                >
                  <LessonBlockRenderer blocks={blocks} lessonSlug={lesson.slug} />
                </LessonArticleLayout>
              );
            }

            return (
              <LessonArticleLayout
                moduleTitle={`Module ${lesson.moduleOrder} \u2014 ${lesson.moduleTitle}`}
                lessonNumber={lesson.order}
                lessonTitle={lesson.title}
                duration={lesson.duration}
                footer={navigationFooter}
              >
                <div className="lesson-body">
                  <LessonSectionContent content={lesson.content} lessonSlug={lesson.slug} />
                </div>
                {lesson.quizPassed && (
                  <div className="mt-4">
                    <Badge className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Quiz valid{"\u00e9"} {"\u2713"}
                    </Badge>
                  </div>
                )}
              </LessonArticleLayout>
            );
          })()}
        </div>
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN LESSONS PAGE
   ═══════════════════════════════════════════════════════ */
export default function LessonsPage() {
  const [modules, setModules] = useState<ModuleGroup[]>([]);
  const [userTier, setUserTier] = useState<string>("starter");
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Inline lesson reader
  const [openLessonSlug, setOpenLessonSlug] = useState<string | null>(null);

  const openLesson = useCallback((slug: string) => {
    setOpenLessonSlug(slug);
    // Prevent body scroll when panel is open on mobile
    document.body.style.overflow = "hidden";
  }, []);

  const closeLesson = useCallback(() => {
    setOpenLessonSlug(null);
    document.body.style.overflow = "";
  }, []);

  const navigateLesson = useCallback((slug: string) => {
    setOpenLessonSlug(slug);
  }, []);

  useEffect(() => {
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((data) => {
        const mods = Array.isArray(data) ? data : (data.modules ?? []);
        const tier = Array.isArray(data) ? "academy" : (data.userTier ?? "starter");
        setModules(mods);
        setUserTier(tier);
        const activeModule = mods.find((m: ModuleGroup) => m.lessons.some((l: LessonItem) => l.status === "in_progress"));
        if (activeModule) setExpandedModule(activeModule.order);
        else setExpandedModule(1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.starter;
  const totalCompleted = modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length, 0);
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalProgress = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
  const totalModules = modules.length;

  if (loading) {
    return (
      <div className="mx-auto animate-pulse space-y-8">
        <div className="space-y-3 py-8">
          <div className="h-10 bg-gray-200 rounded-lg w-56" />
          <div className="h-4 bg-gray-100 rounded w-72" />
        </div>
        {[1, 2, 3].map((i) => <div key={i} className="h-32 bg-gray-100 rounded-2xl" />)}
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative py-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#111] mb-2">Formation</h1>
            <p className="text-sm text-gray-400 mb-5 max-w-md">
              Progresse {"\u00e0"} ton rythme et deviens un expert IA. Chaque semaine te rapproche de l&apos;autonomie compl{"\u00e8"}te.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: IconBook, text: `${totalLessons} le\u00e7ons` },
                { icon: IconLayers, text: `${totalModules} modules` },
                { icon: IconClock, text: "4 semaines" },
              ].map((pill) => (
                <span key={pill.text} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                  <pill.icon className="w-3.5 h-3.5 text-[#FF1744]" />
                  {pill.text}
                </span>
              ))}
              {totalProgress > 0 && (
                <span className="flex items-center gap-2 text-xs font-bold text-[#FF1744] bg-red-50 px-3 py-1.5 rounded-full border border-red-200">
                  {totalProgress}% compl{"\u00e9"}t{"\u00e9"}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* ══ Timeline ══ */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px bg-gray-200" />

          {WEEKS.map((week, weekIdx) => {
            const theme = WEEK_THEMES[weekIdx];
            const weekModuleOrders = week.modules as readonly number[];
            const weekModules = modules.filter((m) => weekModuleOrders.includes(m.order));
            const weekAccessible = weekModuleOrders.some((o) => accessibleModules.includes(o));
            const weekCompleted = weekModules.reduce((sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length, 0);
            const weekTotal = weekModules.reduce((sum, m) => sum + m.lessons.length, 0);
            const weekProgress = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;

            return (
              <motion.div key={week.week} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
                {/* ── Week Header Node ── */}
                <div className={cn("relative pl-14 md:pl-16 py-5", !weekAccessible && "opacity-60")}>
                  {/* Big dot */}
                  <div className={cn("absolute left-2.5 md:left-3 w-[22px] h-[22px] rounded-full border-4 border-white shadow-sm z-10", theme.bar)} />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", theme.accent)}>
                          Semaine {week.week}
                        </span>
                        {weekAccessible ? (
                          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", theme.accentBg, theme.accent, theme.border)}>
                            {userTier === "starter" && week.week === 1 ? "Starter" : "Academy"}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                            <IconLock className="w-2.5 h-2.5" /> Academy
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-bold text-[#111]">{week.title}</h2>
                      <p className="text-xs text-gray-400">{week.subtitle}</p>
                    </div>
                    {weekAccessible && weekTotal > 0 && (
                      <div className="flex-shrink-0 hidden sm:flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full bg-gray-100 overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-700", theme.bar)} style={{ width: `${weekProgress}%` }} />
                        </div>
                        <span className="text-[10px] text-gray-400 font-semibold whitespace-nowrap">{weekCompleted}/{weekTotal}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Module Nodes ── */}
                {weekModules.map((mod, modIdx) => {
                  const modAccessible = accessibleModules.includes(mod.order);
                  const completed = mod.lessons.filter((l) => l.status === "completed").length;
                  const pct = mod.lessons.length > 0 ? Math.round((completed / mod.lessons.length) * 100) : 0;
                  const isExpanded = expandedModule === mod.order;
                  const hasActive = mod.lessons.some((l) => l.status === "in_progress");
                  const isModuleCompleted = completed === mod.lessons.length && mod.lessons.length > 0;
                  const meta = MODULE_METADATA[mod.order] ?? DEFAULT_META;
                  const hasClaude = meta.brands.includes("claude");
                  const hasClawBot = meta.brands.includes("clawbot");

                  return (
                    <motion.div
                      key={mod.id}
                      id={`module-${mod.order}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: modIdx * 0.08 }}
                      className="relative pl-14 md:pl-16 pb-4"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[9px] md:left-[13px] z-10 mt-5">
                        {isModuleCompleted ? (
                          <div className={cn("w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-sm", theme.bar)}>
                            <IconCheck className="text-white w-2.5 h-2.5" />
                          </div>
                        ) : hasActive ? (
                          <div className="relative">
                            <div className={cn("w-[18px] h-[18px] rounded-full border-[3px] bg-white", `border-current ${theme.accent}`)} />
                            <div className={cn("absolute inset-0 w-[18px] h-[18px] rounded-full border-[3px] border-current animate-ping opacity-30", theme.accent)} />
                          </div>
                        ) : modAccessible ? (
                          <div className="w-3 h-3 ml-[3px] rounded-full border-2 border-gray-300 bg-white" />
                        ) : (
                          <div className="w-3 h-3 ml-[3px] rounded-full bg-gray-200" />
                        )}
                      </div>

                      {/* Module card */}
                      <div className={cn(
                        "rounded-2xl border overflow-hidden transition-all duration-300 bg-white",
                        isExpanded ? "shadow-lg border-gray-300" : "shadow-sm",
                        modAccessible
                          ? "border-gray-200 hover:shadow-md hover:border-gray-300"
                          : "border-gray-100 bg-gray-50/50",
                      )}>
                        <button
                          onClick={() => { if (!modAccessible) return; setExpandedModule(isExpanded ? null : mod.order); }}
                          disabled={!modAccessible}
                          className={cn("w-full flex items-center gap-4 p-4 md:p-5 text-left transition-colors", modAccessible ? "cursor-pointer" : "cursor-default")}
                        >
                          <div className={cn(
                            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border",
                            modAccessible
                              ? cn(theme.lightBg, theme.border, hasActive && "ring-2 ring-offset-1 ring-[#FF1744]/20")
                              : "bg-gray-100 border-gray-200"
                          )}>
                            {modAccessible ? (
                              <span className={cn("text-base font-black", theme.accent)}>{String(mod.order).padStart(2, "0")}</span>
                            ) : (
                              <IconLock className="text-gray-300 w-4 h-4" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                              <h3 className={cn("text-sm font-bold", modAccessible ? "text-[#111]" : "text-gray-400")}>{mod.title}</h3>
                              {hasClaude && (
                                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-orange-50 border border-orange-200 flex-shrink-0" title="Claude">
                                  <IconClaude className="text-orange-500 w-3 h-3" />
                                </span>
                              )}
                              {hasClawBot && (
                                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-red-50 border border-red-200 flex-shrink-0" title="ClawBot">
                                  <IconOpenClaw className="text-red-500 w-3 h-3" />
                                </span>
                              )}
                              {modAccessible && isModuleCompleted && (
                                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                                  <IconCheck className="w-3 h-3" /> Termin{"\u00e9"}
                                </span>
                              )}
                              {modAccessible && hasActive && !isModuleCompleted && (
                                <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 border", theme.accent, theme.accentBg, theme.border)}>
                                  En cours
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={cn("flex items-center gap-1 text-[10px]", modAccessible ? "text-gray-400" : "text-gray-300")}>
                                <IconClock /> {meta.estimatedTime}
                              </span>
                              <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                              <span className={cn("text-[10px]", modAccessible ? "text-gray-400" : "text-gray-300")}>{meta.lessonCount} le{"\u00e7"}ons</span>
                              {modAccessible && pct > 0 && (
                                <>
                                  <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                                  <span className={cn("text-[10px] font-bold", theme.accent)}>{pct}%</span>
                                </>
                              )}
                            </div>
                          </div>

                          {modAccessible && (
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <div className="hidden sm:block">
                                <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                  <div className={cn("h-full rounded-full transition-all duration-700", theme.bar)} style={{ width: `${pct}%`, opacity: pct > 0 ? 1 : 0 }} />
                                </div>
                              </div>
                              <IconChevron className={cn("text-gray-300 transition-transform duration-200", isExpanded && "rotate-90")} />
                            </div>
                          )}
                        </button>

                        {/* Lock overlay */}
                        {!modAccessible && (
                          <div className="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none">
                            <div className="w-full p-4 pt-10 rounded-b-2xl">
                              <div className="flex items-center gap-2">
                                <IconLock className="text-gray-400 w-3.5 h-3.5" />
                                <span className="text-[11px] text-gray-400">{meta.lessonCount} le{"\u00e7"}ons</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Lessons list */}
                        <AnimatePresence>
                          {modAccessible && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="border-t border-gray-100"
                            >
                              {mod.lessons.map((lesson, idx) => {
                                const isLocked = lesson.status === "locked";
                                const isActive = lesson.status === "in_progress";
                                const isCompleted = lesson.status === "completed";
                                const isLast = idx === mod.lessons.length - 1;
                                const isSelected = openLessonSlug === lesson.slug;

                                const innerContent = (
                                  <>
                                    <div className="flex-shrink-0 mt-0.5">
                                      {isCompleted && (
                                        <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                                          <IconCheck className="text-emerald-500 w-3 h-3" />
                                        </div>
                                      )}
                                      {isActive && (
                                        <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center border", theme.accentBg, theme.border)}>
                                          <IconPlay className={cn(theme.accent, "w-3 h-3")} />
                                        </div>
                                      )}
                                      {isLocked && (
                                        <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                                          <IconLock className="text-gray-300 w-3 h-3" />
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">{String(lesson.order).padStart(2, "0")}</span>
                                        <h4 className={cn("text-sm font-semibold truncate", isLocked ? "text-gray-300" : "text-[#111]")}>{lesson.title}</h4>
                                      </div>
                                      <div className="flex items-center gap-3 mt-1">
                                        <span className={cn("flex items-center gap-1 text-[10px]", isLocked ? "text-gray-300" : "text-gray-400")}><IconClock /> {lesson.duration}</span>
                                        {lesson.hasQuiz && (
                                          <span className={cn("flex items-center gap-1 text-[10px]", lesson.quizPassed ? "text-emerald-500" : isLocked ? "text-gray-300" : "text-gray-400")}>
                                            <IconQuiz /> {lesson.quizPassed ? "Quiz valid\u00e9" : "Quiz"}
                                          </span>
                                        )}
                                        {isCompleted && lesson.xpEarned > 0 && (
                                          <span className="text-[10px] text-[#FF1744] font-semibold">+{lesson.xpEarned} XP</span>
                                        )}
                                      </div>
                                    </div>
                                    {!isLocked && (
                                      <div className="flex-shrink-0 self-center">
                                        <IconChevron className={cn("text-gray-300 transition-colors", isActive && theme.accent)} />
                                      </div>
                                    )}
                                  </>
                                );

                                const sharedClassName = cn(
                                  "flex items-center gap-3 px-4 py-3 transition-all relative",
                                  !isLast && "border-b border-gray-50",
                                  isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50/50",
                                  isActive && "bg-gray-50/30",
                                  isSelected && "bg-[#FF1744]/5 border-l-2 border-l-[#FF1744]"
                                );

                                return isLocked ? (
                                  <div key={lesson.id} className={sharedClassName}>{innerContent}</div>
                                ) : (
                                  <button key={lesson.id} onClick={() => openLesson(lesson.slug)} className={cn(sharedClassName, "w-full text-left")}>{innerContent}</button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Upgrade CTA on timeline */}
                {!weekAccessible && (
                  <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative pl-14 md:pl-16 pb-4">
                    <div className="absolute left-[12px] md:left-[16px] z-10 mt-4">
                      <div className="w-[12px] h-[12px] rounded-full border-2 border-dashed border-red-300 bg-red-50" />
                    </div>
                    <a
                      href="/profile?tab=subscription"
                      className="flex items-center gap-3 px-5 py-3.5 rounded-xl border-2 border-dashed border-red-200 bg-red-50/50 transition-all group hover:border-[#FF1744] hover:bg-red-50"
                    >
                      <span className="text-xs font-semibold text-gray-500 group-hover:text-[#111] transition-colors">
                        D{"\u00e9"}bloquer les modules suivants {"\u2014"} 397{"\u20ac"}
                      </span>
                      <IconArrowRight className="w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 text-[#FF1744]" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ══ Lesson Reader Panel ══ */}
      <AnimatePresence>
        {openLessonSlug && (
          <LessonReaderPanel
            key={openLessonSlug}
            lessonSlug={openLessonSlug}
            onClose={closeLesson}
            onNavigate={navigateLesson}
          />
        )}
      </AnimatePresence>
    </>
  );
}
