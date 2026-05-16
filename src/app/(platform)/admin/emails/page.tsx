"use client";

import { useEffect, useState, useCallback } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface EmailBatch {
  subject: string;
  createdAt: string;
  count: number;
  status: string;
}

const FILTER_OPTIONS = [
  { value: "tous", label: "Tous les eleves" },
  { value: "standard", label: "Standard uniquement" },
  { value: "accompagnement", label: "Accompagnement uniquement" },
  { value: "free", label: "Free uniquement" },
  { value: "inactive", label: "Eleves inactifs (>14j)" },
  { value: "no_purchase", label: "Eleves sans achat" },
];

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AdminEmailsPage() {
  // Compose state
  const [tier, setTier] = useState("tous");
  const [recipientCount, setRecipientCount] = useState<number | null>(null);
  const [countLoading, setCountLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // History state
  const [history, setHistory] = useState<EmailBatch[]>([]);
  const [historyLoading, setHistoryLoading] = useState(true);

  // Fetch recipient count when filter changes
  const fetchCount = useCallback(async (filter: string) => {
    setCountLoading(true);
    try {
      const res = await fetch(`/api/admin/send-email?action=count&tier=${filter}`);
      if (res.ok) {
        const data = await res.json();
        setRecipientCount(data.count);
      }
    } catch {
      setRecipientCount(null);
    }
    setCountLoading(false);
  }, []);

  useEffect(() => {
    fetchCount(tier);
  }, [tier, fetchCount]);

  // Fetch email history
  const fetchHistory = useCallback(async () => {
    setHistoryLoading(true);
    try {
      const res = await fetch("/api/admin/send-email?action=history");
      if (res.ok) {
        const data = await res.json();
        setHistory(data.history || []);
      }
    } catch {
      // EmailLog table may not exist yet
      setHistory([]);
    }
    setHistoryLoading(false);
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  // Show toast with auto-dismiss
  function showToast(type: "success" | "error", text: string) {
    setToast({ type, text });
    setTimeout(() => setToast(null), 5000);
  }

  // Send email
  async function handleSend() {
    setShowConfirm(false);
    setSending(true);
    try {
      const res = await fetch("/api/admin/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, subject, message }),
      });

      if (res.ok) {
        const data = await res.json();
        showToast("success", `${data.sent} email(s) envoye(s) avec succes`);
        setSubject("");
        setMessage("");
        // Refresh history
        fetchHistory();
      } else {
        const data = await res.json();
        showToast("error", data.error || "Erreur lors de l'envoi");
      }
    } catch {
      showToast("error", "Erreur reseau");
    }
    setSending(false);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Emails</h1>
      <p className="text-white/40 mb-10">Composer et envoyer des emails aux eleves</p>

      {/* Toast notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl text-sm font-medium shadow-2xl transition-all ${
            toast.type === "success"
              ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
              : "bg-red-500/20 border border-red-500/30 text-red-400"
          }`}
        >
          {toast.text}
        </div>
      )}

      {/* ============================================================ */}
      {/*  Section 1: Compose Email                                     */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Composer un email</h2>

        {/* Recipients filter */}
        <div className="mb-5">
          <label className="block text-sm text-white/60 mb-2">Destinataires</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#06B6D4]/50 transition-colors appearance-none cursor-pointer"
          >
            {FILTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                {opt.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-white/30 mt-2">
            {countLoading ? (
              "Calcul en cours..."
            ) : recipientCount !== null ? (
              <span className="text-white/50 font-medium">{recipientCount} destinataire{recipientCount !== 1 ? "s" : ""}</span>
            ) : (
              "Impossible de calculer le nombre de destinataires"
            )}
          </p>
        </div>

        {/* Subject */}
        <div className="mb-5">
          <label className="block text-sm text-white/60 mb-2">Sujet</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Sujet de l'email..."
            className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm text-white/60 mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Contenu de l'email..."
            rows={8}
            className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#06B6D4]/50 transition-colors resize-y leading-relaxed"
          />
          <p className="text-xs text-white/20 mt-1">
            Les retours a la ligne seront preserves. Le nom de l&apos;eleve est ajoute automatiquement.
          </p>
        </div>

        {/* Send button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowConfirm(true)}
            disabled={sending || !subject.trim() || !message.trim() || recipientCount === 0}
            className="px-6 py-3 bg-[#06B6D4] text-white rounded-xl text-sm font-semibold hover:bg-[#06B6D4]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {sending ? "Envoi en cours..." : "Envoyer"}
          </button>
          {recipientCount === 0 && (
            <span className="text-xs text-white/30">Aucun destinataire pour ce filtre</span>
          )}
        </div>
      </GlassCard>

      {/* ============================================================ */}
      {/*  Confirmation dialog                                          */}
      {/* ============================================================ */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-white/[0.08] rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-2">Confirmer l&apos;envoi</h3>
            <p className="text-sm text-white/50 mb-1">
              Vous allez envoyer un email a <span className="text-white font-medium">{recipientCount}</span> destinataire{recipientCount !== 1 ? "s" : ""}.
            </p>
            <p className="text-sm text-white/50 mb-1">
              <span className="text-white/70">Sujet :</span> {subject}
            </p>
            <p className="text-sm text-white/50 mb-6">
              <span className="text-white/70">Filtre :</span> {FILTER_OPTIONS.find((o) => o.value === tier)?.label}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2.5 bg-white/[0.06] text-white/70 rounded-xl text-sm font-medium hover:bg-white/[0.1] transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleSend}
                className="flex-1 px-4 py-2.5 bg-[#06B6D4] text-white rounded-xl text-sm font-semibold hover:bg-[#06B6D4]/90 transition-colors"
              >
                Confirmer l&apos;envoi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/*  Section 2: Email History                                     */}
      {/* ============================================================ */}
      <GlassCard hover={false} className="p-6">
        <h2 className="text-lg font-semibold text-white mb-1">Historique des envois</h2>
        <p className="text-xs text-white/40 mb-6">Emails manuels recents</p>

        {historyLoading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 bg-white/[0.04] rounded-lg animate-pulse" />
            ))}
          </div>
        ) : history.length === 0 ? (
          <p className="text-white/30 text-sm py-8 text-center">Aucun email envoye pour le moment</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white/30 text-[10px] uppercase tracking-wider">
                  <th className="text-left pb-3 font-medium">Date</th>
                  <th className="text-left pb-3 font-medium">Sujet</th>
                  <th className="text-right pb-3 font-medium">Envois</th>
                </tr>
              </thead>
              <tbody>
                {history.map((batch, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 text-white/40 text-xs whitespace-nowrap">
                      {formatDate(batch.createdAt)}
                    </td>
                    <td className="py-3 text-white font-medium truncate max-w-[300px]">
                      {batch.subject}
                    </td>
                    <td className="py-3 text-right text-white/50 text-xs whitespace-nowrap">
                      {batch.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
