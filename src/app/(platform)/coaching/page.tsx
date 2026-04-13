"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { COACHING_PRICE_DISPLAY } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import UpgradeOverlay from "@/components/platform/UpgradeOverlay";

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
function IconTarget({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}
function IconMessageCircle({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}
function IconGlobe({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
}
function IconChevronLeft({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
}
function IconChevronRight({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function IconArrowLeft({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
}

const INCLUDES = [
  { icon: "🎯", text: "Review de tes projets et code en direct" },
  { icon: "💡", text: "Conseils stratégie business personnalisés" },
  { icon: "🔧", text: "Questions techniques et architecture" },
  { icon: "📋", text: "Plan d'action concret post-session" },
  { icon: "🔄", text: "Replay vidéo envoyé sous 24h" },
  { icon: "💬", text: "Accès chat prioritaire 48h après la session" },
];

// NOTE: Coaching sessions are 1h (aligned with OneToOne plan on /offres).
const STEPS = [
  { num: "01", title: "Réserve ton créneau", desc: "Choisis la date et l'heure qui te conviennent.", icon: <IconCalendar className="text-white" /> },
  { num: "02", title: "Prépare tes questions", desc: "Envoie-nous tes sujets à l'avance.", icon: <IconMessageCircle className="text-white" /> },
  { num: "03", title: "Session en visio", desc: "1h en face à face, partage d'écran.", icon: <IconVideo className="text-white" /> },
  { num: "04", title: "Plan d'action", desc: "Actions concrètes + replay de la session.", icon: <IconTarget className="text-white" /> },
];

/* ─── Animations ────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

/* ─── Calendar constants ─────────────────────────────── */
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

/* ─── Calendly-style Calendar + Time Slot Picker ───── */
function CalendlyPicker({
  slots,
  selectedSlot,
  onSelect,
  onConfirm,
  booking,
  tier,
  topic,
  onTopicChange,
}: {
  slots: Slot[];
  selectedSlot: string | null;
  onSelect: (date: string) => void;
  onConfirm: () => void;
  booking: boolean;
  tier?: string;
  topic: string;
  onTopicChange: (v: string) => void;
}) {
  const isOneToOne = tier === "one_to_one";
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
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [confirmStep, setConfirmStep] = useState(false);

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

  const handleTimeSelect = (slotDate: string) => {
    onSelect(slotDate);
    setConfirmStep(true);
  };

  const handleBack = () => {
    setConfirmStep(false);
  };

  /* ─── Confirmation step ─── */
  if (confirmStep && selectedSlot) {
    const slotDate = new Date(selectedSlot);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-lg mx-auto"
      >
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-5 transition-colors group"
        >
          <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Retour au calendrier
        </button>

        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-200/50 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-[#FF1744] to-[#D50000]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <IconCheck className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Confirmer la réservation</h3>
                <p className="text-xs text-white/70">Vérifie les détails ci-dessous</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <IconCalendar className="text-blue-600 w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111] capitalize">
                  {slotDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </p>
                <p className="text-[11px] text-gray-400">Date sélectionnée</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <IconClock className="text-emerald-600 w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111]">
                  {slotDate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" })} — 1h
                </p>
                <p className="text-[11px] text-gray-400">Heure (Europe/Paris)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <IconVideo className="text-purple-600 w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111]">Google Meet</p>
                <p className="text-[11px] text-gray-400">Le lien sera envoyé par email</p>
              </div>
            </div>
          </div>

          {/* Topic */}
          <div className="px-6 pb-2">
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">De quoi veux-tu parler ?</label>
            <textarea
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="Ex: Review de mon projet, questions sur le pricing, architecture technique..."
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#FF1744]/40 focus:ring-2 focus:ring-[#FF1744]/10 focus:bg-white transition-all resize-none"
              rows={3}
            />
          </div>

          {/* CTA */}
          <div className="p-6 pt-4">
            <button
              disabled={booking || !topic.trim()}
              onClick={onConfirm}
              className={cn(
                "w-full py-3.5 rounded-xl font-bold text-sm transition-all text-center",
                !booking && topic.trim()
                  ? "bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              {booking ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  Réservation en cours...
                </span>
              ) : (
                "Réserver ma session"
              )}
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-2.5">
              {isOneToOne
                ? "Session incluse dans ton forfait. Annulation jusqu'à 24h avant."
                : `${COACHING_PRICE_DISPLAY}€ à régler lors de la session. Annulation jusqu'à 24h avant.`
              }
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  /* ─── No slots ─── */
  if (slots.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-10 text-center max-w-md mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl mx-auto mb-3">📅</div>
        <p className="text-sm font-semibold text-[#111] mb-1">Aucun créneau disponible</p>
        <p className="text-xs text-gray-400">Reviens bientôt, de nouveaux créneaux seront ajoutés.</p>
      </div>
    );
  }

  const daySlots = selectedDay ? (slotsByDate[selectedDay] || []) : [];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-200/40 overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* ─── LEFT: Calendar ─── */}
          <div className="flex-1 p-5 sm:p-6">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={prevMonth}
                className="w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#111] flex items-center justify-center"
              >
                <IconChevronLeft />
              </button>
              <h3 className="text-sm sm:text-base font-bold text-[#111] capitalize select-none">
                {MONTHS_FR[viewMonth]} {viewYear}
              </h3>
              <button
                onClick={nextMonth}
                className="w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#111] flex items-center justify-center"
              >
                <IconChevronRight />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
              {DAYS_FR.map((d) => (
                <div key={d} className="py-1.5 text-center text-[11px] font-semibold text-gray-400 uppercase tracking-wider select-none">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-0.5">
              {calendarDays.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="aspect-square" />;
                }

                const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const hasSlots = !!(slotsByDate[dateKey] && slotsByDate[dateKey].length > 0);
                const isToday = dateKey === todayKey;
                const isPast = new Date(dateKey) < new Date(todayKey);
                const isSelected = selectedDay === dateKey;

                return (
                  <button
                    key={dateKey}
                    type="button"
                    disabled={!hasSlots || isPast}
                    onClick={() => {
                      if (!hasSlots) return;
                      setSelectedDay(isSelected ? null : dateKey);
                      if (!isSelected) onSelect("");
                    }}
                    className={cn(
                      "aspect-square rounded-lg flex items-center justify-center transition-all text-[13px] sm:text-sm relative",
                      isPast && "opacity-20 cursor-default",
                      !hasSlots && !isPast && "text-gray-300 cursor-default",
                      hasSlots && !isPast && !isSelected && "cursor-pointer text-[#111] font-medium hover:bg-[#FF1744]/5 hover:text-[#FF1744]",
                      isSelected && "bg-[#FF1744] text-white font-bold shadow-md shadow-red-500/25 scale-105",
                      isToday && !isSelected && "font-bold",
                    )}
                  >
                    {isToday && !isSelected && (
                      <span className="absolute inset-1 rounded-md border-2 border-[#FF1744]/25 pointer-events-none" />
                    )}
                    {day}
                    {hasSlots && !isPast && !isSelected && (
                      <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF1744]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT: Time slots panel ─── */}
          <div className="w-full lg:w-[280px] border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50/70">
            <AnimatePresence mode="wait">
              {selectedDay && daySlots.length > 0 ? (
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="p-4 sm:p-5"
                >
                  <div className="mb-4">
                    <p className="text-sm font-bold text-[#111] capitalize">
                      {new Date(selectedDay + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {daySlots.length} créneau{daySlots.length > 1 ? "x" : ""} disponible{daySlots.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="space-y-1.5 max-h-[350px] overflow-y-auto scrollbar-thin">
                    {daySlots.map((slot) => {
                      const isSlotSelected = slot.date === selectedSlot;
                      return (
                        <button
                          key={slot.date}
                          onClick={() => handleTimeSelect(slot.date)}
                          className={cn(
                            "w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-center transition-all text-sm font-medium",
                            isSlotSelected
                              ? "bg-[#FF1744] text-white border-[#FF1744] shadow-md shadow-red-500/15"
                              : "bg-gray-50 text-[#111] border-gray-200 hover:border-[#FF1744]/40 hover:text-[#FF1744] hover:bg-red-50/50"
                          )}
                        >
                          <IconClock className={cn("w-3.5 h-3.5", isSlotSelected ? "text-white/80" : "text-gray-400")} />
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[250px] lg:min-h-[300px]"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-200/60 flex items-center justify-center mb-3">
                    <IconClock className="text-gray-300 w-5 h-5" />
                  </div>
                  <p className="text-xs font-medium text-gray-400">Sélectionne un jour</p>
                  <p className="text-[11px] text-gray-300 mt-0.5">pour voir les horaires</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [sessions, setSessions] = useState<CoachingSession[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const sessionTier = session?.user?.tier || "free";
  const [userTier, setUserTier] = useState<string>(sessionTier);
  const [coachingTopic, setCoachingTopic] = useState("");

  useEffect(() => {
    if (sessionTier && sessionTier !== "free") {
      setUserTier((prev) => prev === "free" ? sessionTier : prev);
    }
  }, [sessionTier]);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccessMessage("Session réservée avec succès ! Tu recevras un email de confirmation.");
    }
    if (searchParams.get("cancelled") === "true") {
      setSuccessMessage(null);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchSlots = () => {
      fetch("/api/coaching/slots")
        .then((r) => r.json())
        .then((data) => {
          setSlots(data.slots || []);
          setSessions(data.sessions || []);
          setUserTier(data.userTier || "free");
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };
    fetchSlots();
    const interval = setInterval(fetchSlots, 30_000);
    return () => clearInterval(interval);
  }, []);

  const handleBooking = async () => {
    if (!selectedSlot || booking) return;
    setBooking(true);
    try {
      const res = await fetch("/api/coaching/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: selectedSlot, topic: coachingTopic }),
      });
      const data = await res.json();
      if (res.ok) {
        const calInfo = data.calendarStatus ? ` [Calendar: ${data.calendarStatus}]` : "";
        setSuccessMessage(
          `Session reservee ! Tu recevras un email de confirmation.${calInfo}`
        );
        setSelectedSlot(null);
        setCoachingTopic("");
        const refreshRes = await fetch("/api/coaching/slots");
        const refreshData = await refreshRes.json();
        setSlots(refreshData.slots || []);
        setSessions(refreshData.sessions || []);
      } else {
        alert(data.error || "Erreur lors de la réservation");
      }
    } catch {
      alert("Erreur de connexion");
    } finally {
      setBooking(false);
    }
  };

  const confirmedSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) >= new Date());
  const pastSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) < new Date());

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto animate-pulse space-y-5">
        <div className="h-24 bg-gray-100 rounded-2xl" />
        <div className="h-80 bg-gray-100 rounded-2xl" />
      </div>
    );
  }

  const previewTier = typeof window !== "undefined" ? localStorage.getItem("admin-preview-tier") : null;
  const effectiveTier = previewTier || userTier;
  const isFreeUser = effectiveTier === "free" || !effectiveTier;

  /* ─── Admin View ─────────────────────────────────── */
  if ((session?.user as any)?.role === "admin" && !previewTier) {
    const allSessions = sessions.filter((s) => s.status === "confirmed");
    const upcomingSessions = allSessions.filter((s) => new Date(s.date) >= new Date());
    const pastAdminSessions = allSessions.filter((s) => new Date(s.date) < new Date());

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-bold text-[#111] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-sm shadow-red-500/20">
              <IconCalendar className="text-white" />
            </div>
            Coaching — Planning
          </h1>
          <p className="text-xs text-gray-500 mt-1 ml-12">Vue administrateur</p>
        </div>

        {/* Google Calendar */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
            <IconCalendar className="text-[#FF1744]" />
            <h2 className="text-sm font-bold text-[#111]">Google Calendar</h2>
          </div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=opexiapro%40gmail.com&ctz=Europe%2FParis"
            style={{ border: 0 }}
            width="100%"
            height="450"
            title="Google Calendar OpexIA"
          />
        </div>

        {/* All sessions from DB */}
        <div>
          <h2 className="text-sm font-bold text-[#111] mb-3 flex items-center gap-2">
            <IconCalendar className="text-emerald-500 w-4 h-4" />
            Sessions planifiees
            {sessions.length > 0 && (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{sessions.length}</span>
            )}
          </h2>
          {sessions.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-gray-200 p-6 text-center">
              <p className="text-xs text-gray-400">Aucune session planifiee.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {allSessions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((s: any) => {
                const d = new Date(s.date);
                const isPast = d < new Date();
                return (
                  <div key={s.id} className={`rounded-xl bg-white border border-gray-200 overflow-hidden ${isPast ? "opacity-40" : ""}`}>
                    <div className="flex items-center gap-3 p-3.5">
                      <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 ${isPast ? "bg-gray-100" : "bg-emerald-50"}`}>
                        <span className={`text-[8px] font-bold uppercase ${isPast ? "text-gray-400" : "text-emerald-500"}`}>{d.toLocaleDateString("fr-FR", { weekday: "short" })}</span>
                        <span className={`text-lg font-black leading-none ${isPast ? "text-gray-500" : "text-emerald-600"}`}>{d.getDate()}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#111] truncate">
                          {s.user?.name || "Eleve"}
                        </p>
                        <p className="text-[11px] text-[#111] opacity-40 truncate">{s.user?.email}</p>
                        <p className="text-[11px] text-[#111] opacity-50 flex items-center gap-1 mt-0.5">
                          <IconClock className="w-3 h-3" />
                          {d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })} — {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${isPast ? "text-gray-400 bg-gray-100" : "text-emerald-600 bg-emerald-50"}`}>
                        {isPast ? "Passee" : "Confirmee"}
                      </span>
                    </div>
                    {s.topic && (
                      <div className="px-3.5 pb-3 pt-0">
                        <div className="bg-gray-50 rounded-lg px-3 py-2">
                          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Motif</p>
                          <p className="text-xs text-[#111]">{s.topic}</p>
                        </div>
                      </div>
                    )}
                    {s.meetLink && !isPast && (
                      <div className="px-3.5 pb-3">
                        <a href={s.meetLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 font-medium">
                          <IconVideo className="w-3.5 h-3.5" />
                          Rejoindre Google Meet
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    );
  }

  /* ─── User booking view ─── */
  const bookingContent = (
    <div className="w-full max-w-3xl mx-auto space-y-6">

      {/* Success popup */}
      {successMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-lg font-bold text-[#111] mb-2">Session reservee !</h3>
            <p className="text-sm text-gray-500 mb-6">{successMessage}</p>
            <button onClick={() => setSuccessMessage(null)} className="w-full py-3 bg-[#111] text-white text-sm font-semibold rounded-xl hover:bg-[#333] transition-colors">
              Fermer
            </button>
          </motion.div>
        </div>
      )}

      {/* ─── Coach header card ─── */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 flex-shrink-0 ring-2 ring-gray-100">
              <img src="/images/chatbot-avatar.jpg" alt="OpexIA" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-[#111]">Session coaching OpexIA</h1>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-[11px] font-medium text-gray-500">
                  <IconClock className="w-3 h-3" /> 1h
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-[11px] font-medium text-gray-500">
                  <IconVideo className="w-3 h-3" /> Google Meet
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-[11px] font-medium text-gray-500">
                  <IconGlobe className="w-3 h-3" /> Paris
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#FF1744]/10 text-[11px] font-bold text-[#FF1744]">
                  {effectiveTier === "one_to_one" ? "Inclus" : `${COACHING_PRICE_DISPLAY}€`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Calendar picker ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <CalendlyPicker
          slots={slots}
          selectedSlot={selectedSlot}
          onSelect={(date) => setSelectedSlot(date || null)}
          onConfirm={handleBooking}
          booking={booking}
          tier={effectiveTier}
          topic={coachingTopic}
          onTopicChange={setCoachingTopic}
        />
      </motion.div>

      {/* ─── What's included ─── */}
      {/* ─── How it works ─── */}
      {/* ─── Upcoming sessions ─── */}
      {confirmedSessions.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-[#111] mb-3 flex items-center gap-2">
            <IconCalendar className="text-emerald-500 w-4 h-4" />
            Tes prochaines sessions
          </h2>
          <div className="space-y-2">
            {confirmedSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <div key={s.id} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[8px] font-bold text-emerald-500 uppercase">{d.toLocaleDateString("fr-FR", { weekday: "short" })}</span>
                    <span className="text-base font-black text-emerald-600 leading-none">{d.getDate()}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111] truncate">
                      {d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </p>
                    <p className="text-[11px] text-[#111] opacity-50 flex items-center gap-1">
                      <IconClock className="w-3 h-3" />
                      {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — 1h
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">Confirmee</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── Past sessions ─── */}
      {pastSessions.length > 0 && (
        <div>
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Sessions passées</h3>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {pastSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <div key={s.id} className="flex items-center gap-3 px-4 py-2.5">
                  <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <IconVideo className="text-gray-400 w-3 h-3" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-600">
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

  if (isFreeUser) {
    return (
      <UpgradeOverlay
        featureName="Coaching personnalisé"
        featureDescription="Réserve une session de coaching 1-to-1 avec l'équipe OpexIA. Disponible avec les formules payantes."
      >
        {bookingContent}
      </UpgradeOverlay>
    );
  }

  return bookingContent;
}
