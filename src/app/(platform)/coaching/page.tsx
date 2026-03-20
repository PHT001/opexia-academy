"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { COACHING_PRICE_DISPLAY } from "@/lib/constants";
import { useSearchParams } from "next/navigation";

interface Slot {
  date: string;
  label: string;
  dayLabel: string;
  time: string;
}

interface CoachingSession {
  id: string;
  date: string;
  slot: string;
  status: string;
  amount: number;
  createdAt: string;
}

/* ─── Icons ─────────────────────────────────────────── */
function IconCalendar({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconVideo({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="15" height="12" rx="2" /><path d="M17 9l5-3v12l-5-3z" /></svg>;
}
function IconStar({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
}
function IconUsers({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function IconTarget({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}
function IconZap({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
}
function IconMessageCircle({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}
function IconShield({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
}

const INCLUDES = [
  { icon: "🎯", text: "Review de tes projets et code en direct" },
  { icon: "💡", text: "Conseils stratégie business personnalisés" },
  { icon: "🔧", text: "Questions techniques et architecture" },
  { icon: "📋", text: "Plan d'action concret post-session" },
  { icon: "🔄", text: "Replay vidéo envoyé sous 24h" },
  { icon: "💬", text: "Accès chat prioritaire 48h après la session" },
];

const STEPS = [
  { num: "01", title: "Réserve ton créneau", desc: "Choisis la date et l'heure qui te conviennent parmi les créneaux disponibles.", icon: <IconCalendar className="text-white" /> },
  { num: "02", title: "Prépare tes questions", desc: "Envoie-nous tes sujets à l'avance pour maximiser la session.", icon: <IconMessageCircle className="text-white" /> },
  { num: "03", title: "Session en visio", desc: "1h en face à face avec ton coach, partage d'écran et feedback en direct.", icon: <IconVideo className="text-white" /> },
  { num: "04", title: "Plan d'action", desc: "Tu repars avec des actions concrètes et le replay de la session.", icon: <IconTarget className="text-white" /> },
];

// Témoignages supprimés — à remplacer par de vrais retours quand disponibles

/* ─── Animations ────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

/* ─── Calendar Slot Picker ─────────────────────────── */
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

function CalendarSlotPicker({
  slots,
  selectedSlot,
  onSelect,
}: {
  slots: Slot[];
  selectedSlot: string | null;
  onSelect: (date: string) => void;
}) {
  const slotsByDate = useMemo(() => {
    const map: Record<string, Slot[]> = {};
    for (const s of slots) {
      const key = s.date.slice(0, 10);
      if (!map[key]) map[key] = [];
      map[key].push(s);
    }
    return map;
  }, [slots]);

  const firstSlotDate = slots.length > 0 ? new Date(slots[0].date) : new Date();
  const [viewMonth, setViewMonth] = useState(firstSlotDate.getMonth());
  const [viewYear, setViewYear] = useState(firstSlotDate.getFullYear());
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const totalDays = lastDay.getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) calendarDays.push(null);
  for (let d = 1; d <= totalDays; d++) calendarDays.push(d);
  while (calendarDays.length % 7 !== 0) calendarDays.push(null);

  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const slotsInMonth = slots.filter((s) => {
    const d = new Date(s.date);
    return d.getMonth() === viewMonth && d.getFullYear() === viewYear;
  }).length;

  if (slots.length === 0) {
    return (
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
          <IconCalendar className="text-gray-400" />
          Choisis ton créneau
        </h2>
        <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center mt-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl mx-auto mb-3">📅</div>
          <p className="text-sm font-semibold text-gray-700 mb-1">Aucun créneau disponible</p>
          <p className="text-xs text-gray-400">Reviens bientôt, de nouveaux créneaux seront ajoutés.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
        <IconCalendar className="text-gray-400" />
        Choisis ton créneau
      </h2>
      <p className="text-xs text-gray-500 mb-5">Sélectionne un jour pour voir les horaires disponibles.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4">
        {/* Compact calendar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Month nav */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <button onClick={prevMonth} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="text-center">
              <h3 className="text-xs font-bold text-gray-900 capitalize">{MONTHS_FR[viewMonth]} {viewYear}</h3>
              <p className="text-[9px] text-gray-400 mt-0.5">{slotsInMonth} créneau{slotsInMonth > 1 ? "x" : ""}</p>
            </div>
            <button onClick={nextMonth} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 px-2 pt-2">
            {DAYS_FR.map((d) => (
              <div key={d} className="py-1 text-center text-[9px] font-bold text-gray-400 uppercase">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid — compact */}
          <div className="grid grid-cols-7 gap-px px-2 pb-3 pt-1">
            {calendarDays.map((day, i) => {
              if (day === null) {
                return <div key={`empty-${i}`} className="h-8" />;
              }

              const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const daySlots = slotsByDate[dateKey] || [];
              const hasSlots = daySlots.length > 0;
              const isToday = dateKey === todayKey;
              const isPast = new Date(dateKey) < new Date(todayKey);
              const isExpanded = expandedDay === dateKey;
              const hasSelectedSlot = daySlots.some((s) => s.date === selectedSlot);

              return (
                <button
                  key={dateKey}
                  type="button"
                  disabled={!hasSlots || isPast}
                  onClick={() => {
                    if (!hasSlots) return;
                    if (daySlots.length === 1) {
                      onSelect(daySlots[0].date);
                      setExpandedDay(dateKey);
                    } else {
                      setExpandedDay(isExpanded ? null : dateKey);
                    }
                  }}
                  className={cn(
                    "relative h-8 rounded-lg flex flex-col items-center justify-center transition-all text-xs",
                    hasSlots && !isPast ? "cursor-pointer hover:bg-[#FF1744]/[0.06]" : "",
                    isPast && "opacity-30",
                    !hasSlots && !isPast && "text-gray-300",
                    isExpanded && hasSlots && "bg-[#FF1744]/10 ring-1 ring-[#FF1744]/20",
                    hasSelectedSlot && !isExpanded && "bg-[#FF1744]/[0.06]",
                  )}
                >
                  <span className={cn(
                    "text-[11px] font-semibold leading-none",
                    isToday ? "w-5.5 h-5.5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]" : "",
                    hasSelectedSlot && !isToday ? "text-[#FF1744] font-black" : "",
                    hasSlots && !hasSelectedSlot && !isToday ? "text-gray-700" : "",
                  )}>
                    {day}
                  </span>
                  {hasSlots && !isPast && (
                    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF1744]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right panel — time slots for selected day */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {expandedDay && slotsByDate[expandedDay] ? (
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-[#FF1744]/10 flex items-center justify-center">
                  <IconCalendar className="text-[#FF1744] w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 capitalize">
                    {new Date(expandedDay + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mb-4 ml-9">
                {slotsByDate[expandedDay].length} créneau{slotsByDate[expandedDay].length > 1 ? "x" : ""} disponible{slotsByDate[expandedDay].length > 1 ? "s" : ""}
              </p>

              <div className="space-y-2">
                {slotsByDate[expandedDay].map((slot) => {
                  const isSelected = slot.date === selectedSlot;
                  return (
                    <button
                      key={slot.date}
                      onClick={() => onSelect(slot.date)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all",
                        isSelected
                          ? "bg-[#FF1744] text-white border-[#FF1744] shadow-md shadow-red-500/15"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#FF1744]/30 hover:bg-[#FF1744]/[0.03]"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        isSelected ? "bg-white/20" : "bg-white"
                      )}>
                        <IconClock className={cn("w-4 h-4", isSelected ? "text-white" : "text-gray-400")} />
                      </div>
                      <div className="flex-1">
                        <p className={cn("text-sm font-semibold", isSelected ? "text-white" : "text-gray-800")}>{slot.time}</p>
                        <p className={cn("text-[10px]", isSelected ? "text-white/60" : "text-gray-400")}>Session de 1h</p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <IconCheck className="text-white w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected summary */}
              {selectedSlot && slotsByDate[expandedDay]?.some((s) => s.date === selectedSlot) && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <IconCheck className="text-emerald-600 w-3 h-3" />
                  </div>
                  <p className="text-xs text-gray-500">Créneau sélectionné — prêt à réserver</p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl mb-3">📅</div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Sélectionne un jour</p>
              <p className="text-xs text-gray-400 max-w-[200px]">Clique sur un jour marqué d&apos;un point rouge pour voir les créneaux disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────── */
export default function CoachingPage() {
  return (
    <Suspense fallback={<div className="animate-pulse space-y-6"><div className="h-8 bg-gray-200 rounded-lg w-48" /><div className="h-48 bg-gray-100 rounded-xl" /></div>}>
      <CoachingContent />
    </Suspense>
  );
}

function CoachingContent() {
  const searchParams = useSearchParams();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [sessions, setSessions] = useState<CoachingSession[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccessMessage("Session réservée avec succès ! Tu recevras un email de confirmation.");
    }
    if (searchParams.get("cancelled") === "true") {
      setSuccessMessage(null);
    }
  }, [searchParams]);

  useEffect(() => {
    fetch("/api/coaching/slots")
      .then((r) => r.json())
      .then((data) => {
        setSlots(data.slots || []);
        setSessions(data.sessions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBooking = async () => {
    if (!selectedSlot || booking) return;
    setBooking(true);
    try {
      const res = await fetch("/api/coaching/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: selectedSlot }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erreur lors de la reservation");
        setBooking(false);
      }
    } catch {
      alert("Erreur de connexion");
      setBooking(false);
    }
  };

  // Group slots by week
  const groupedSlots: Record<string, Slot[]> = {};
  for (const slot of slots) {
    const d = new Date(slot.date);
    const weekStart = new Date(d);
    weekStart.setDate(d.getDate() - d.getDay() + 1);
    const weekLabel = `Semaine du ${weekStart.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}`;
    if (!groupedSlots[weekLabel]) groupedSlots[weekLabel] = [];
    groupedSlots[weekLabel].push(slot);
  }

  const confirmedSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) >= new Date());
  const pastSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) < new Date());

  if (loading) {
    return (
      <div className="w-full animate-pulse space-y-6">
        <div className="h-48 bg-gray-200 rounded-2xl" />
        <div className="h-64 bg-gray-100 rounded-xl" />
        <div className="h-48 bg-gray-100 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">

      {/* ═══════════════ HERO BANNER ═══════════════ */}
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 40%, #0F0F1E 100%)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <span className="absolute -right-8 -top-8 text-[160px] font-black text-white/[0.03] leading-none tracking-tighter select-none">
            1:1
          </span>
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#FF1744]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-violet-500/8 blur-[80px]" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF1744]/[0.06] to-transparent" />
        </div>

        <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <IconVideo className="text-[#FF1744] w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Coaching 1-to-1</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-[1.15] text-white mb-3">
                Accélère ta progression,
                <br />
                <span className="bg-gradient-to-r from-[#FF1744] to-[#FF5252] bg-clip-text text-transparent">
                  avec un expert dédié.
                </span>
              </h1>
              <p className="text-sm sm:text-[15px] text-white/45 leading-relaxed max-w-md">
                Une heure en visio pour débloquer tes problèmes, optimiser ta stratégie
                et passer au niveau supérieur. 100% adapté à tes besoins.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap items-center gap-5 mt-6">
                <div className="flex items-center gap-2">
                  <IconUsers className="text-[#FF1744] w-4 h-4" />
                  <span className="text-xs text-white/40"><span className="font-bold text-white/70">150+</span> sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <IconStar key={i} className="text-amber-400 w-3 h-3" />)}
                  </div>
                  <span className="text-xs text-white/40"><span className="font-bold text-white/70">4.9</span>/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconShield className="text-emerald-400 w-4 h-4" />
                  <span className="text-xs text-white/40"><span className="font-bold text-white/70">Satisfait</span> ou remboursé</span>
                </div>
              </div>
            </div>

            {/* Right — price card */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#FF1744]/20 blur-xl" />
                <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center min-w-[180px]">
                  <p className="text-4xl sm:text-5xl font-black text-white mb-1">
                    {COACHING_PRICE_DISPLAY}<span className="text-[#FF1744]">€</span>
                  </p>
                  <p className="text-xs text-white/40 font-medium">par session de 1h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════ SUCCESS MESSAGE ═══════════════ */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <IconCheck className="text-emerald-600" />
          </div>
          <p className="text-sm text-emerald-700">{successMessage}</p>
        </motion.div>
      )}

      {/* ═══════════════ WHAT'S INCLUDED ═══════════════ */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Ce qui est inclus</h2>
        <p className="text-xs text-gray-500 mb-5">Chaque session est conçue pour maximiser ton temps et tes résultats.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INCLUDES.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
            >
              <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
              <span className="text-sm text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Comment ça marche</h2>
        <p className="text-xs text-gray-500 mb-5">4 étapes simples pour ta session de coaching.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl border border-gray-200 p-5 group hover:shadow-md transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-sm shadow-red-500/20">
                  {step.icon}
                </div>
                <span className="text-[10px] font-black text-gray-300">{step.num}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10 text-gray-300">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════ UPCOMING SESSIONS ═══════════════ */}
      {confirmedSessions.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <IconCalendar className="text-emerald-500" />
            Tes prochaines sessions
          </h2>
          <div className="space-y-2">
            {confirmedSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <motion.div
                  key={s.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-emerald-500 uppercase">{d.toLocaleDateString("fr-FR", { weekday: "short" })}</span>
                    <span className="text-lg font-black text-emerald-700 leading-none">{d.getDate()}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <IconClock className="w-3 h-3" />
                      {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — 1h
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">Confirmée</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════════════ SLOT SELECTION — CALENDAR ═══════════════ */}
      <CalendarSlotPicker
        slots={slots}
        selectedSlot={selectedSlot}
        onSelect={(date) => setSelectedSlot(selectedSlot === date ? null : date)}
      />

      {/* ═══════════════ BOOKING BAR ═══════════════ */}
      {slots.length > 0 && (
        <div className="sticky bottom-4 z-10">
          <motion.div
            className="p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl shadow-black/5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedSlot ? (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-[#FF1744]/10 flex items-center justify-center flex-shrink-0">
                      <IconCalendar className="text-[#FF1744]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(selectedSlot).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(selectedSlot).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — Session de 1h
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <IconCalendar className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-400">Sélectionne un créneau ci-dessus</p>
                  </>
                )}
              </div>
              <button
                disabled={!selectedSlot || booking}
                onClick={handleBooking}
                className={cn(
                  "flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all w-full sm:w-auto text-center",
                  selectedSlot && !booking
                    ? "bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white hover:shadow-lg hover:shadow-red-500/25 cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                )}
              >
                {booking ? "Redirection..." : `Réserver & Payer — ${COACHING_PRICE_DISPLAY}€`}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Testimonials supprimés */}

      {/* ═══════════════ TRUST BADGES ═══════════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: <IconShield className="text-emerald-500" />, title: "Satisfait ou remboursé", desc: "Si la session ne te convient pas, on te rembourse intégralement." },
          { icon: <IconZap className="text-amber-500" />, title: "Résultats immédiats", desc: "Tu repars avec des actions concrètes applicables dès la fin de la session." },
          { icon: <IconVideo className="text-blue-500" />, title: "Replay inclus", desc: "Reçois l'enregistrement complet de ta session sous 24h par email." },
        ].map((badge, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
              {badge.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 mb-0.5">{badge.title}</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════ PAST SESSIONS ═══════════════ */}
      {pastSessions.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Sessions passées</h3>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {pastSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <div key={s.id} className="flex items-center gap-4 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <IconVideo className="text-gray-400 w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-700">Session de coaching</p>
                    <p className="text-[10px] text-gray-400">
                      {d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Terminée</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
