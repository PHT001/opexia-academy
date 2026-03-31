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

// NOTE: Coaching sessions are 45 min here, but the OneToOne plan on /offres
// advertises "8 visios individuelles (1h)". This discrepancy is known and
// intentional for now — do NOT change the duration without product decision.
const STEPS = [
  { num: "01", title: "Réserve ton créneau", desc: "Choisis la date et l'heure qui te conviennent parmi les créneaux disponibles.", icon: <IconCalendar className="text-white" /> },
  { num: "02", title: "Prépare tes questions", desc: "Envoie-nous tes sujets à l'avance pour maximiser la session.", icon: <IconMessageCircle className="text-white" /> },
  { num: "03", title: "Session en visio", desc: "45 min en face à face avec ton coach, partage d'écran et feedback en direct.", icon: <IconVideo className="text-white" /> },
  { num: "04", title: "Plan d'action", desc: "Tu repars avec des actions concrètes et le replay de la session.", icon: <IconTarget className="text-white" /> },
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
}: {
  slots: Slot[];
  selectedSlot: string | null;
  onSelect: (date: string) => void;
  onConfirm: () => void;
  booking: boolean;
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

  // When user selects a time slot and wants to confirm
  const handleTimeSelect = (slotDate: string) => {
    onSelect(slotDate);
    setConfirmStep(true);
  };

  const handleBack = () => {
    setConfirmStep(false);
  };

  // Confirmation step
  if (confirmStep && selectedSlot) {
    const slotDate = new Date(selectedSlot);
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full"
      >
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors"
        >
          <IconArrowLeft className="w-4 h-4" />
          Retour au calendrier
        </button>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Confirmation header */}
          <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-lg shadow-red-500/20">
                <IconCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Confirmer la réservation</h3>
                <p className="text-sm text-gray-500">Vérifie les détails ci-dessous</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <IconCalendar className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {slotDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <p className="text-xs text-gray-500">Date sélectionnée</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <IconClock className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {slotDate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" })} — 45 min
                  </p>
                  <p className="text-xs text-gray-500">Heure (Europe/Paris)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <IconVideo className="text-purple-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Google Meet</p>
                  <p className="text-xs text-gray-500">Le lien sera envoyé par email</p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm action */}
          <div className="p-6 sm:p-8 bg-gray-50/50">
            <button
              disabled={booking}
              onClick={onConfirm}
              className={cn(
                "w-full py-4 rounded-xl font-bold text-sm transition-all text-center",
                !booking
                  ? "bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white hover:shadow-lg hover:shadow-red-500/25 cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              {booking ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  Redirection vers le paiement...
                </span>
              ) : (
                `Réserver & Payer — ${COACHING_PRICE_DISPLAY}€`
              )}
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">
              Paiement sécurisé par Stripe. Tu peux annuler jusqu'à 24h avant.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mx-auto mb-4">📅</div>
        <p className="text-base font-semibold text-gray-700 mb-1">Aucun créneau disponible</p>
        <p className="text-sm text-gray-400">Reviens bientôt, de nouveaux créneaux seront ajoutés.</p>
      </div>
    );
  }

  const daySlots = selectedDay ? (slotsByDate[selectedDay] || []) : [];

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* ─── LEFT: Calendar ─── */}
          <div className="flex-1 min-w-0 lg:min-w-[55%] p-5 sm:p-8">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <IconChevronLeft />
              </button>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 capitalize">
                {MONTHS_FR[viewMonth]} {viewYear}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <IconChevronRight />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS_FR.map((d) => (
                <div key={d} className="py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid - bigger cells */}
            <div className="grid grid-cols-7 gap-1">
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
                      // Clear the slot selection when switching days
                      if (!isSelected) {
                        onSelect("");
                      }
                    }}
                    className={cn(
                      "aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative text-sm sm:text-base",
                      hasSlots && !isPast ? "cursor-pointer" : "",
                      isPast && "opacity-25 cursor-default",
                      !hasSlots && !isPast && "text-gray-300 cursor-default",
                      hasSlots && !isPast && !isSelected && "hover:bg-[#FF1744]/[0.06] text-gray-700 font-medium",
                      isSelected && "bg-[#FF1744] text-white font-bold shadow-lg shadow-red-500/20",
                      isToday && !isSelected && hasSlots && "ring-2 ring-[#FF1744]/30",
                    )}
                  >
                    <span className={cn(
                      "leading-none",
                      isToday && !isSelected && !hasSlots && "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-sm",
                      isToday && !isSelected && hasSlots && "w-8 h-8 rounded-full flex items-center justify-center font-bold",
                    )}>
                      {day}
                    </span>
                    {hasSlots && !isPast && !isSelected && (
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT: Time slots panel ─── */}
          <div className="lg:w-[320px] xl:w-[360px] border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50/50">
            <AnimatePresence mode="wait">
              {selectedDay && daySlots.length > 0 ? (
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 sm:p-6"
                >
                  <div className="mb-5">
                    <p className="text-sm font-bold text-gray-900 capitalize">
                      {new Date(selectedDay + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {daySlots.length} créneau{daySlots.length > 1 ? "x" : ""} disponible{daySlots.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                    {daySlots.map((slot) => {
                      const isSelected = slot.date === selectedSlot;
                      return (
                        <button
                          key={slot.date}
                          onClick={() => handleTimeSelect(slot.date)}
                          className={cn(
                            "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full border text-center transition-all",
                            isSelected
                              ? "bg-[#FF1744] text-white border-[#FF1744] shadow-md shadow-red-500/15 scale-[1.02]"
                              : "bg-white text-gray-700 border-gray-200 hover:border-[#FF1744] hover:text-[#FF1744] hover:shadow-sm"
                          )}
                        >
                          <IconClock className={cn("w-4 h-4", isSelected ? "text-white" : "text-gray-400")} />
                          <span className={cn("text-sm font-semibold", isSelected ? "text-white" : "")}>{slot.time}</span>
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
                  className="flex flex-col items-center justify-center p-8 sm:p-10 text-center h-full min-h-[300px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <IconClock className="text-gray-300 w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-gray-400">Sélectionne un jour</p>
                  <p className="text-xs text-gray-300 mt-1">pour voir les créneaux disponibles</p>
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
  const [userTier, setUserTier] = useState<string>("free");

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
        setUserTier(data.userTier || "free");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBooking = async () => {
    if (!selectedSlot || booking) return;
    setBooking(true);
    try {
      // One-to-One users book for free (no Stripe)
      if (effectiveTier === "one_to_one") {
        const res = await fetch("/api/coaching/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slot: selectedSlot }),
        });
        const data = await res.json();
        if (res.ok) {
          setSuccessMessage("Session réservée avec succès ! Tu recevras un email de confirmation.");
          setSelectedSlot(null);
          // Refresh sessions
          const refreshRes = await fetch("/api/coaching/slots");
          const refreshData = await refreshRes.json();
          setSessions(refreshData.sessions || []);
        } else {
          alert(data.error || "Erreur lors de la réservation");
        }
        setBooking(false);
      } else {
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
      }
    } catch {
      alert("Erreur de connexion");
      setBooking(false);
    }
  };

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

  /* ─── Admin View ─────────────────────────────────── */
  const previewTier = typeof window !== "undefined" ? localStorage.getItem("admin-preview-tier") : null;
  const effectiveTier = previewTier || userTier;
  const isFreeUser = effectiveTier === "free" || !effectiveTier;

  if ((session?.user as any)?.role === "admin" && !previewTier) {
    const allSessions = sessions.filter((s) => s.status === "confirmed");
    const upcomingSessions = allSessions.filter((s) => new Date(s.date) >= new Date());
    const pastAdminSessions = allSessions.filter((s) => new Date(s.date) < new Date());

    return (
      <div className="w-full space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-sm shadow-red-500/20">
              <IconCalendar className="text-white" />
            </div>
            Coaching — Planning
          </h1>
          <p className="text-sm text-gray-500 mt-1 ml-[52px]">
            Vue administrateur : calendrier et sessions de coaching.
          </p>
        </div>

        {/* Google Calendar Embed — admin only */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
            <IconCalendar className="text-[#FF1744]" />
            <h2 className="text-sm font-bold text-gray-900">Calendrier Google</h2>
          </div>
          <div className="w-full overflow-x-auto -mx-px">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=opexiapro%40gmail.com&ctz=Europe%2FParis"
              style={{ border: 0, minWidth: "320px" }}
              width="100%"
              height="600"
              className="sm:h-[600px] h-[400px]"
              title="Google Calendar OpexIA"
            />
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <IconCalendar className="text-emerald-500" />
            Sessions à venir
            {upcomingSessions.length > 0 && (
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {upcomingSessions.length}
              </span>
            )}
          </h2>
          {upcomingSessions.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-gray-200 p-8 text-center">
              <p className="text-sm text-gray-400">Aucune session à venir pour le moment.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {upcomingSessions.map((s) => {
                const d = new Date(s.date);
                return (
                  <motion.div
                    key={s.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[9px] font-bold text-emerald-500 uppercase">
                        {d.toLocaleDateString("fr-FR", { weekday: "short" })}
                      </span>
                      <span className="text-lg font-black text-emerald-700 leading-none">{d.getDate()}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <IconClock className="w-3 h-3" />
                        {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — 45 min
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Confirmée
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Past Sessions */}
        {pastAdminSessions.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Sessions passées</h3>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
              {pastAdminSessions.map((s) => {
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
                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Terminée
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ─── User booking view ─── */
  const bookingContent = (
    <div className="w-full space-y-3 sm:space-y-8">

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

      {/* ═══════════════ COACH INFO HEADER (Calendly-style) ═══════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-3 sm:p-8">
          <div className="flex flex-row items-center gap-3 sm:gap-5">
            {/* Avatar */}
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-lg shadow-red-500/15 flex-shrink-0">
              <span className="text-lg sm:text-2xl font-black text-white">O</span>
            </div>

            <div className="flex-1">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                Équipe OpexIA
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                Session de coaching personnalisée
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                  <IconClock className="w-3.5 h-3.5 text-gray-400" />
                  45 min
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                  <IconVideo className="w-3.5 h-3.5 text-gray-400" />
                  Google Meet
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                  <IconGlobe className="w-3.5 h-3.5 text-gray-400" />
                  Europe/Paris
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF1744]/[0.08] text-xs font-bold text-[#FF1744]">
                  {effectiveTier === "one_to_one" ? "Inclus" : `${COACHING_PRICE_DISPLAY}€`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════ CALENDLY-STYLE PICKER ═══════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">Choisis ton créneau</h2>
        <p className="text-xs text-gray-500 mb-2 sm:mb-5">Sélectionne un jour puis un horaire pour réserver ta session.</p>

        <CalendlyPicker
          slots={slots}
          selectedSlot={selectedSlot}
          onSelect={(date) => setSelectedSlot(date || null)}
          onConfirm={handleBooking}
          booking={booking}
        />
      </motion.div>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-1">Comment ça marche</h2>
        <p className="text-xs text-gray-500 mb-5">4 étapes simples pour ta session de coaching.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl border border-gray-200 p-3 sm:p-5 group hover:shadow-md transition-all"
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
      </motion.div>

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
                      {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — 45 min
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">Confirmée</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

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

  /* ─── Free users see the upgrade overlay ─── */
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
