"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────── */
interface Deal {
  id: string;
  name: string;
  company: string | null;
  value: number;
  stage: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

type Priority = "low" | "medium" | "high";

const STAGES = [
  { id: "lead", label: "Leads", color: "#64748B", bg: "bg-slate-50", border: "border-slate-200", dot: "bg-slate-400", textColor: "text-slate-600" },
  { id: "contact", label: "Contact", color: "#3B82F6", bg: "bg-blue-50", border: "border-blue-200", dot: "bg-blue-400", textColor: "text-blue-600" },
  { id: "proposal", label: "Proposition", color: "#8B5CF6", bg: "bg-purple-50", border: "border-purple-200", dot: "bg-purple-400", textColor: "text-purple-600" },
  { id: "negotiation", label: "Négociation", color: "#F59E0B", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-400", textColor: "text-amber-600" },
  { id: "won", label: "Gagné", color: "#10B981", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-400", textColor: "text-emerald-600" },
] as const;

const LOST_STAGE = { id: "lost", label: "Perdu", color: "#EF4444", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-400", textColor: "text-red-600" };

const PRIORITY_MAP: Record<Priority, { label: string; color: string; bg: string; dot: string }> = {
  high: { label: "Haute", color: "text-red-600", bg: "bg-red-50 border-red-200", dot: "bg-red-500" },
  medium: { label: "Moyenne", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", dot: "bg-amber-500" },
  low: { label: "Basse", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", dot: "bg-blue-500" },
};

/* ─── Helpers ───────────────────────────────────────── */
function getPriorityFromNotes(notes: string | null): Priority {
  if (!notes) return "medium";
  if (notes.startsWith("[HIGH]")) return "high";
  if (notes.startsWith("[LOW]")) return "low";
  return "medium";
}

function getCleanNotes(notes: string | null): string {
  if (!notes) return "";
  return notes.replace(/^\[(HIGH|LOW|MEDIUM)\]\s*/, "");
}

function encodePriorityInNotes(priority: Priority, notes: string): string {
  if (priority === "medium") return notes;
  return `[${priority.toUpperCase()}] ${notes}`;
}

function daysSince(date: string): number {
  return Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
}

function formatCurrency(val: number): string {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1).replace(".0", "")}M€`;
  if (val >= 1000) return `${(val / 1000).toFixed(1).replace(".0", "")}k€`;
  return `${val.toLocaleString("fr-FR")}€`;
}

/* ─── Icons ─────────────────────────────────────────── */
function IconPlus({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
}
function IconX({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
}
function IconChevronRight({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function IconChevronLeft({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
}
function IconTrash({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>;
}
function IconEdit({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
}
function IconBuilding({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><line x1="9" y1="18" x2="15" y2="18" /></svg>;
}
function IconSearch({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconTrendingUp({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
}
function IconFilter({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
}
function IconList({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>;
}
function IconGrid({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>;
}
function IconDollar({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
}
function IconCalendar({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function IconAlert({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
}
function IconDownload({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
}

/* ─── Animations ────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };

/* ─── Deal Detail Panel ────────────────────────────── */
function DealDetailPanel({
  deal,
  onClose,
  onEdit,
  onMove,
  onDelete,
}: {
  deal: Deal;
  onClose: () => void;
  onEdit: () => void;
  onMove: (dir: "left" | "right") => void;
  onDelete: () => void;
}) {
  const stage = [...STAGES, LOST_STAGE].find((s) => s.id === deal.stage) || STAGES[0];
  const priority = getPriorityFromNotes(deal.notes);
  const pInfo = PRIORITY_MAP[priority];
  const cleanNotes = getCleanNotes(deal.notes);
  const days = daysSince(deal.createdAt);
  const stageIdx = [...STAGES.map((s) => s.id), "lost"].indexOf(deal.stage);
  const stageProgress = deal.stage === "lost" ? 0 : ((stageIdx) / (STAGES.length - 1)) * 100;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-2xl w-full max-w-lg border border-gray-200 shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Colored top bar */}
          <div className="h-1.5" style={{ background: stage.color }} />

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{deal.name}</h2>
                {deal.company && (
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <IconBuilding className="text-gray-400" />
                    <span className="text-xs">{deal.company}</span>
                  </div>
                )}
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                <IconX className="text-gray-400" />
              </button>
            </div>

            {/* Status badges */}
            <div className="flex items-center gap-2 mb-5">
              <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border", pInfo.bg)} style={{ color: pInfo.dot.replace("bg-", "") }}>
                <span className={cn("inline-block w-1.5 h-1.5 rounded-full mr-1.5", pInfo.dot)} />
                Priorité {pInfo.label}
              </span>
              <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border" style={{ background: `${stage.color}10`, borderColor: `${stage.color}30`, color: stage.color }}>
                {stage.label}
              </span>
              {days > 14 && deal.stage !== "won" && deal.stage !== "lost" && (
                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 flex items-center gap-1">
                  <IconAlert className="w-3 h-3" />
                  Inactif {days}j
                </span>
              )}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <IconDollar className="mx-auto text-gray-400 mb-1" />
                <p className="text-sm font-bold text-gray-800">{deal.value > 0 ? formatCurrency(deal.value) : "—"}</p>
                <p className="text-[9px] text-gray-400 mt-0.5">Montant</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <IconClock className="mx-auto text-gray-400 mb-1 w-3.5 h-3.5" />
                <p className="text-sm font-bold text-gray-800">{days}j</p>
                <p className="text-[9px] text-gray-400 mt-0.5">Dans le pipeline</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <IconCalendar className="mx-auto text-gray-400 mb-1" />
                <p className="text-sm font-bold text-gray-800">
                  {new Date(deal.updatedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                </p>
                <p className="text-[9px] text-gray-400 mt-0.5">Dernière MAJ</p>
              </div>
            </div>

            {/* Progress bar */}
            {deal.stage !== "lost" && (
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-medium text-gray-500">Progression</span>
                  <span className="text-[10px] font-bold" style={{ color: stage.color }}>{Math.round(stageProgress)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${STAGES[0].color}, ${stage.color})` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stageProgress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  {STAGES.map((s) => (
                    <span key={s.id} className={cn("text-[8px]", s.id === deal.stage ? "font-bold" : "text-gray-300")} style={{ color: s.id === deal.stage ? s.color : undefined }}>
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Notes */}
            {cleanNotes && (
              <div className="mb-5">
                <p className="text-[10px] font-medium text-gray-500 mb-1.5">Notes</p>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{cleanNotes}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
              <button
                onClick={() => onMove("left")}
                disabled={stageIdx <= 0}
                className={cn("flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors",
                  stageIdx > 0 ? "bg-gray-100 hover:bg-gray-200 text-gray-700" : "bg-gray-50 text-gray-300 cursor-not-allowed"
                )}
              >
                <IconChevronLeft /> Reculer
              </button>
              <button
                onClick={onEdit}
                className="flex-1 py-2 rounded-lg bg-[#FF1744] text-white text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-[#D50000] transition-colors"
              >
                <IconEdit className="text-white" /> Modifier
              </button>
              <button
                onClick={() => onMove("right")}
                disabled={stageIdx >= STAGES.length}
                className={cn("flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors",
                  stageIdx < STAGES.length ? "bg-gray-100 hover:bg-gray-200 text-gray-700" : "bg-gray-50 text-gray-300 cursor-not-allowed"
                )}
              >
                Avancer <IconChevronRight />
              </button>
            </div>

            <button
              onClick={onDelete}
              className="w-full mt-2 py-2 rounded-lg text-xs font-medium text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-center gap-1.5"
            >
              <IconTrash /> Supprimer ce deal
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Deal Form Modal ──────────────────────────────── */
function DealModal({
  open,
  deal,
  onClose,
  onSave,
}: {
  open: boolean;
  deal: Deal | null;
  onClose: () => void;
  onSave: (data: { name: string; company: string; value: number; stage: string; notes: string }) => void;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");
  const [stage, setStage] = useState("lead");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  useEffect(() => {
    if (deal) {
      setName(deal.name);
      setCompany(deal.company || "");
      setValue(deal.value ? String(deal.value) : "");
      setStage(deal.stage);
      setNotes(getCleanNotes(deal.notes));
      setPriority(getPriorityFromNotes(deal.notes));
    } else {
      setName(""); setCompany(""); setValue(""); setStage("lead"); setNotes(""); setPriority("medium");
    }
  }, [deal, open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-2xl w-full max-w-md border border-gray-200 shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="h-1.5 bg-gradient-to-r from-[#FF1744] to-[#D50000]" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">{deal ? "Modifier le deal" : "Nouveau projet"}</h3>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                <IconX className="text-gray-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSave({ name, company, value: Number(value) || 0, stage, notes: encodePriorityInNotes(priority, notes) });
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Nom du projet / client *</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
                  placeholder="Ex: Agence IA pour cabinet comptable"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Entreprise</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
                    placeholder="Ex: ComptaPlus"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Montant (€)</label>
                  <input type="number" value={value} onChange={(e) => setValue(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
                    placeholder="0" min="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Étape</label>
                  <select value={stage} onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
                  >
                    {STAGES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                    <option value="lost">{LOST_STAGE.label}</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Priorité</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
                  >
                    <option value="high">🔴 Haute</option>
                    <option value="medium">🟡 Moyenne</option>
                    <option value="low">🔵 Basse</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-gray-500 font-medium mb-1.5 block">Notes</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors resize-none"
                  placeholder="Détails, prochaines étapes, contact..."
                />
              </div>

              <button type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white font-semibold text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                {deal ? "Enregistrer les modifications" : "Ajouter le projet"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Export CSV ─────────────────────────────────────── */
function exportCSV(deals: Deal[]) {
  const header = "Nom,Entreprise,Montant,Étape,Priorité,Notes,Créé le,MAJ le";
  const rows = deals.map((d) =>
    `"${d.name}","${d.company || ""}",${d.value},"${d.stage}","${getPriorityFromNotes(d.notes)}","${getCleanNotes(d.notes).replace(/"/g, '""')}","${new Date(d.createdAt).toLocaleDateString("fr-FR")}","${new Date(d.updatedAt).toLocaleDateString("fr-FR")}"`
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pipeline-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ─── Main Page ─────────────────────────────────────── */
export default function PipelinePage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);
  const [detailDeal, setDetailDeal] = useState<Deal | null>(null);
  const [showLost, setShowLost] = useState(false);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");
  const [filterPriority, setFilterPriority] = useState<Priority | "all">("all");
  const [sortBy, setSortBy] = useState<"date" | "value" | "name">("date");
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const fetchDeals = useCallback(() => {
    fetch("/api/pipeline")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setDeals(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchDeals(); }, [fetchDeals]);

  // Filtered + sorted deals
  const filteredDeals = useMemo(() => {
    let result = deals;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((d) => d.name.toLowerCase().includes(q) || (d.company && d.company.toLowerCase().includes(q)));
    }
    if (filterPriority !== "all") {
      result = result.filter((d) => getPriorityFromNotes(d.notes) === filterPriority);
    }
    if (sortBy === "value") result = [...result].sort((a, b) => b.value - a.value);
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "date") result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return result;
  }, [deals, search, filterPriority, sortBy]);

  const handleSave = async (data: { name: string; company: string; value: number; stage: string; notes: string }) => {
    if (editingDeal) {
      await fetch(`/api/pipeline/${editingDeal.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } else {
      await fetch("/api/pipeline", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    }
    setModalOpen(false);
    setEditingDeal(null);
    setDetailDeal(null);
    fetchDeals();
  };

  const handleMove = async (deal: Deal, direction: "left" | "right") => {
    const allStages = [...STAGES.map((s) => s.id), "lost"];
    const idx = allStages.indexOf(deal.stage);
    const newIdx = direction === "right" ? idx + 1 : idx - 1;
    if (newIdx < 0 || newIdx >= allStages.length) return;
    await fetch(`/api/pipeline/${deal.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ stage: allStages[newIdx] }) });
    setDetailDeal(null);
    fetchDeals();
  };

  const handleDelete = async (id: string) => {
    if (confirmDelete !== id) { setConfirmDelete(id); return; }
    await fetch(`/api/pipeline/${id}`, { method: "DELETE" });
    setConfirmDelete(null);
    setDetailDeal(null);
    fetchDeals();
  };

  // Stats
  const activeDeals = deals.filter((d) => d.stage !== "lost");
  const wonDeals = deals.filter((d) => d.stage === "won");
  const lostDeals = deals.filter((d) => d.stage === "lost");
  const totalValue = activeDeals.reduce((s, d) => s + d.value, 0);
  const wonValue = wonDeals.reduce((s, d) => s + d.value, 0);
  const lostValue = lostDeals.reduce((s, d) => s + d.value, 0);
  const conversionRate = deals.length > 0 ? Math.round((wonDeals.length / deals.length) * 100) : 0;
  const avgDealValue = activeDeals.length > 0 ? Math.round(totalValue / activeDeals.length) : 0;
  const highPriorityCount = deals.filter((d) => getPriorityFromNotes(d.notes) === "high" && d.stage !== "won" && d.stage !== "lost").length;
  const staleDeals = deals.filter((d) => daysSince(d.updatedAt) > 14 && d.stage !== "won" && d.stage !== "lost");

  const visibleStages = showLost ? [...STAGES, LOST_STAGE] : STAGES;

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded-lg w-64" />
        <div className="h-4 bg-gray-100 rounded w-80" />
        <div className="grid grid-cols-4 gap-3 mt-4">
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-24 bg-gray-100 rounded-xl" />)}
        </div>
        <div className="grid grid-cols-5 gap-3 mt-4">
          {Array.from({ length: 5 }).map((_, i) => <div key={i} className="h-64 bg-gray-100 rounded-xl" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* ─── Header ─────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pipeline</h1>
          <p className="text-sm text-gray-500 mt-0.5">Suis tes projets et clients en temps réel</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportCSV(deals)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition-colors"
          >
            <IconDownload /> Export CSV
          </button>
          <motion.button
            onClick={() => { setEditingDeal(null); setModalOpen(true); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white font-semibold text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconPlus className="text-white" />
            Nouveau projet
          </motion.button>
        </div>
      </div>

      {/* ─── Stats row ──────────────────────────────── */}
      <motion.div className="grid grid-cols-2 lg:grid-cols-5 gap-3" initial="hidden" animate="visible" variants={stagger}>
        {[
          { label: "Projets actifs", val: activeDeals.length.toString(), sub: `${highPriorityCount} haute priorité`, icon: <IconGrid className="text-slate-400" />, accent: "#64748B" },
          { label: "Pipeline total", val: formatCurrency(totalValue), sub: `Moy. ${formatCurrency(avgDealValue)}/deal`, icon: <IconTrendingUp className="text-blue-400" />, accent: "#3B82F6" },
          { label: "Gagnés", val: formatCurrency(wonValue), sub: `${wonDeals.length} deal${wonDeals.length > 1 ? "s" : ""} closés`, icon: <IconDollar className="text-emerald-400" />, accent: "#10B981" },
          { label: "Perdus", val: formatCurrency(lostValue), sub: `${lostDeals.length} deal${lostDeals.length > 1 ? "s" : ""}`, icon: <IconX className="text-red-400" />, accent: "#EF4444" },
          { label: "Taux de conversion", val: `${conversionRate}%`, sub: `${wonDeals.length}/${deals.length} deals`, icon: <IconTrendingUp className="text-amber-400" />, accent: "#F59E0B" },
        ].map((s) => (
          <motion.div key={s.label} className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden" variants={fadeUp}>
            <div className="h-0.5" style={{ background: s.accent }} />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</p>
                {s.icon}
              </div>
              <p className="text-xl font-black text-gray-800 tracking-tight">{s.val}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ─── Alerts ─────────────────────────────────── */}
      {staleDeals.length > 0 && (
        <motion.div
          className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <IconAlert className="text-orange-500 w-4 h-4 flex-shrink-0" />
          <p className="text-xs text-orange-700">
            <span className="font-bold">{staleDeals.length} deal{staleDeals.length > 1 ? "s" : ""} inactif{staleDeals.length > 1 ? "s" : ""}</span>
            {" "}depuis plus de 14 jours — {staleDeals.map((d) => d.name).slice(0, 3).join(", ")}{staleDeals.length > 3 ? ` et ${staleDeals.length - 3} autres` : ""}
          </p>
        </motion.div>
      )}

      {/* ─── Toolbar ────────────────────────────────── */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un deal..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744]/20 transition-colors"
          />
        </div>

        {/* Priority filter */}
        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
          <button onClick={() => setFilterPriority("all")} className={cn("px-2.5 py-1.5 rounded-md text-[10px] font-medium transition-colors", filterPriority === "all" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700")}>
            Tous
          </button>
          <button onClick={() => setFilterPriority("high")} className={cn("px-2.5 py-1.5 rounded-md text-[10px] font-medium transition-colors", filterPriority === "high" ? "bg-red-500 text-white" : "text-gray-500 hover:text-gray-700")}>
            🔴 Haute
          </button>
          <button onClick={() => setFilterPriority("medium")} className={cn("px-2.5 py-1.5 rounded-md text-[10px] font-medium transition-colors", filterPriority === "medium" ? "bg-amber-500 text-white" : "text-gray-500 hover:text-gray-700")}>
            🟡 Moyenne
          </button>
          <button onClick={() => setFilterPriority("low")} className={cn("px-2.5 py-1.5 rounded-md text-[10px] font-medium transition-colors", filterPriority === "low" ? "bg-blue-500 text-white" : "text-gray-500 hover:text-gray-700")}>
            🔵 Basse
          </button>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "value" | "name")}
          className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-[10px] font-medium text-gray-600 focus:outline-none focus:border-[#FF1744]"
        >
          <option value="date">Trier par date</option>
          <option value="value">Trier par montant</option>
          <option value="name">Trier par nom</option>
        </select>

        {/* View mode */}
        <div className="flex items-center gap-0.5 bg-white border border-gray-200 rounded-lg p-0.5">
          <button onClick={() => setViewMode("kanban")} className={cn("p-1.5 rounded-md transition-colors", viewMode === "kanban" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700")}>
            <IconGrid />
          </button>
          <button onClick={() => setViewMode("list")} className={cn("p-1.5 rounded-md transition-colors", viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700")}>
            <IconList />
          </button>
        </div>

        {/* Toggle lost */}
        <button
          onClick={() => setShowLost(!showLost)}
          className={cn("text-[10px] font-medium px-3 py-2 rounded-lg transition-colors border",
            showLost ? "bg-red-50 text-red-600 border-red-200" : "bg-white text-gray-500 border-gray-200 hover:text-gray-700"
          )}
        >
          {showLost ? "Masquer perdus" : "Afficher perdus"} ({lostDeals.length})
        </button>
      </div>

      {/* ─── Kanban View ────────────────────────────── */}
      {viewMode === "kanban" && (
        <div className="overflow-x-auto pb-4 -mx-2 px-2">
          <motion.div className="flex gap-3 min-w-max" initial="hidden" animate="visible" variants={stagger}>
            {visibleStages.map((stage) => {
              const stageDeals = filteredDeals.filter((d) => d.stage === stage.id);
              const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);

              return (
                <motion.div key={stage.id} className="w-[260px] flex-shrink-0" variants={fadeUp}>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", stage.dot)} />
                      <span className={cn("text-xs font-bold", stage.textColor)}>{stage.label}</span>
                      <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">{stageDeals.length}</span>
                    </div>
                    {stageValue > 0 && <span className="text-[10px] font-medium text-gray-400">{formatCurrency(stageValue)}</span>}
                  </div>

                  <div className={cn("rounded-xl p-2 min-h-[200px] space-y-2 border", stage.bg, stage.border)}>
                    <AnimatePresence mode="popLayout">
                      {stageDeals.map((deal) => {
                        const priority = getPriorityFromNotes(deal.notes);
                        const pInfo = PRIORITY_MAP[priority];
                        const days = daysSince(deal.createdAt);
                        const isStale = days > 14 && deal.stage !== "won" && deal.stage !== "lost";

                        return (
                          <motion.div
                            key={deal.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => setDetailDeal(deal)}
                            className={cn(
                              "bg-white rounded-lg p-3 group cursor-pointer border hover:shadow-md transition-all",
                              isStale ? "border-orange-200" : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {/* Priority dot + name */}
                            <div className="flex items-start gap-2 mb-1.5">
                              <div className={cn("w-2 h-2 rounded-full mt-1 flex-shrink-0", pInfo.dot)} />
                              <p className="text-sm font-semibold text-gray-800 leading-tight flex-1">{deal.name}</p>
                              {isStale && <IconAlert className="text-orange-400 flex-shrink-0 mt-0.5" />}
                            </div>

                            {deal.company && (
                              <div className="flex items-center gap-1 mb-1.5 ml-4">
                                <IconBuilding className="text-gray-300" />
                                <span className="text-[10px] text-gray-500">{deal.company}</span>
                              </div>
                            )}

                            <div className="flex items-center justify-between ml-4">
                              {deal.value > 0 ? (
                                <span className="text-xs font-bold text-gray-700">{formatCurrency(deal.value)}</span>
                              ) : (
                                <span className="text-[10px] text-gray-300">Pas de montant</span>
                              )}
                              <span className="text-[9px] text-gray-300 flex items-center gap-1">
                                <IconClock />
                                {days}j
                              </span>
                            </div>

                            {/* Quick actions on hover */}
                            <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => { e.stopPropagation(); handleMove(deal, "left"); }}
                                className="p-1 rounded hover:bg-gray-100 text-gray-400 transition-colors"
                              >
                                <IconChevronLeft />
                              </button>
                              <div className="flex items-center gap-0.5">
                                <button
                                  onClick={(e) => { e.stopPropagation(); setEditingDeal(deal); setModalOpen(true); }}
                                  className="p-1 rounded hover:bg-gray-100 transition-colors"
                                >
                                  <IconEdit className="text-gray-400" />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleDelete(deal.id); }}
                                  className="p-1 rounded hover:bg-red-50 transition-colors"
                                >
                                  <IconTrash className={cn(confirmDelete === deal.id ? "text-red-600" : "text-red-400")} />
                                </button>
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleMove(deal, "right"); }}
                                className="p-1 rounded hover:bg-gray-100 text-gray-400 transition-colors"
                              >
                                <IconChevronRight />
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    {stageDeals.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-24 gap-1">
                        <p className="text-[10px] text-gray-300">Aucun projet</p>
                        {stage.id === "lead" && (
                          <button
                            onClick={() => { setEditingDeal(null); setModalOpen(true); }}
                            className="text-[10px] text-[#FF1744] font-medium hover:underline"
                          >
                            + Ajouter
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}

      {/* ─── List View ──────────────────────────────── */}
      {viewMode === "list" && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            <div className="col-span-1 hidden sm:block">Prio.</div>
            <div className="col-span-2 sm:col-span-3">Projet</div>
            <div className="hidden sm:block sm:col-span-2">Entreprise</div>
            <div className="col-span-1 sm:col-span-2">Étape</div>
            <div className="col-span-1">Montant</div>
            <div className="hidden sm:block sm:col-span-1">Créé</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* Table rows */}
          {filteredDeals.filter((d) => showLost || d.stage !== "lost").length === 0 && (
            <div className="px-4 py-8 text-center text-xs text-gray-400">Aucun deal trouvé</div>
          )}
          {filteredDeals.filter((d) => showLost || d.stage !== "lost").map((deal) => {
            const stage = [...STAGES, LOST_STAGE].find((s) => s.id === deal.stage) || STAGES[0];
            const priority = getPriorityFromNotes(deal.notes);
            const pInfo = PRIORITY_MAP[priority];
            const days = daysSince(deal.createdAt);
            const isStale = days > 14 && deal.stage !== "won" && deal.stage !== "lost";

            return (
              <div
                key={deal.id}
                onClick={() => setDetailDeal(deal)}
                className={cn(
                  "grid grid-cols-6 sm:grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors items-center",
                  isStale && "bg-orange-50/50"
                )}
              >
                <div className="col-span-1 hidden sm:block">
                  <div className={cn("w-2.5 h-2.5 rounded-full", pInfo.dot)} title={`Priorité ${pInfo.label}`} />
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <p className="text-xs font-semibold text-gray-800 truncate">{deal.name}</p>
                </div>
                <div className="hidden sm:block sm:col-span-2">
                  <p className="text-xs text-gray-500 truncate">{deal.company || "—"}</p>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border" style={{ background: `${stage.color}10`, borderColor: `${stage.color}30`, color: stage.color }}>
                    {stage.label}
                  </span>
                </div>
                <div className="col-span-1">
                  <p className="text-xs font-bold text-gray-700">{deal.value > 0 ? formatCurrency(deal.value) : "—"}</p>
                </div>
                <div className="hidden sm:block sm:col-span-1">
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    {isStale && <IconAlert className="text-orange-400" />}
                    {days}j
                  </p>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-1">
                  <button onClick={(e) => { e.stopPropagation(); handleMove(deal, "left"); }} className="p-1 rounded hover:bg-gray-200 text-gray-400 transition-colors"><IconChevronLeft /></button>
                  <button onClick={(e) => { e.stopPropagation(); handleMove(deal, "right"); }} className="p-1 rounded hover:bg-gray-200 text-gray-400 transition-colors"><IconChevronRight /></button>
                  <button onClick={(e) => { e.stopPropagation(); setEditingDeal(deal); setModalOpen(true); }} className="p-1 rounded hover:bg-gray-200 transition-colors"><IconEdit className="text-gray-400" /></button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(deal.id); }} className="p-1 rounded hover:bg-red-50 transition-colors"><IconTrash className={cn(confirmDelete === deal.id ? "text-red-600" : "text-red-400")} /></button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─── Pipeline funnel visual ─────────────────── */}
      {deals.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Funnel de conversion</h3>
          <div className="space-y-2">
            {STAGES.map((stage, i) => {
              const count = deals.filter((d) => d.stage === stage.id).length;
              const maxCount = Math.max(...STAGES.map((s) => deals.filter((d) => d.stage === s.id).length), 1);
              const pct = (count / maxCount) * 100;
              const stageValue = deals.filter((d) => d.stage === stage.id).reduce((s, d) => s + d.value, 0);

              return (
                <div key={stage.id} className="flex items-center gap-3">
                  <span className={cn("text-[10px] font-bold w-24 text-right", stage.textColor)}>{stage.label}</span>
                  <div className="flex-1 h-7 bg-gray-100 rounded-lg overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-lg flex items-center px-2"
                      style={{ background: stage.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(pct, count > 0 ? 8 : 0)}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    >
                      {pct > 20 && <span className="text-[10px] font-bold text-white">{count}</span>}
                    </motion.div>
                    {pct <= 20 && count > 0 && <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 ml-1">{count}</span>}
                  </div>
                  <span className="text-[10px] text-gray-400 w-16 text-right">{stageValue > 0 ? formatCurrency(stageValue) : "—"}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── Empty state ────────────────────────────── */}
      {deals.length === 0 && !loading && (
        <motion.div
          className="bg-white border border-gray-200 border-dashed rounded-2xl p-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-4">📊</div>
          <h3 className="text-base font-bold text-gray-800 mb-1">Ton pipeline est vide</h3>
          <p className="text-xs text-gray-500 mb-5 max-w-sm">Commence à ajouter tes deals et prospects pour suivre ta progression commerciale en temps réel.</p>
          <button
            onClick={() => { setEditingDeal(null); setModalOpen(true); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white font-semibold text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all"
          >
            <IconPlus className="text-white" />
            Ajouter mon premier deal
          </button>
        </motion.div>
      )}

      {/* ─── Modals ─────────────────────────────────── */}
      <DealModal
        open={modalOpen}
        deal={editingDeal}
        onClose={() => { setModalOpen(false); setEditingDeal(null); }}
        onSave={handleSave}
      />

      {detailDeal && (
        <DealDetailPanel
          deal={detailDeal}
          onClose={() => setDetailDeal(null)}
          onEdit={() => { setEditingDeal(detailDeal); setModalOpen(true); setDetailDeal(null); }}
          onMove={(dir) => handleMove(detailDeal, dir)}
          onDelete={() => handleDelete(detailDeal.id)}
        />
      )}
    </div>
  );
}
