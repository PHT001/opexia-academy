"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TIER_LIMITS: Record<string, number> = {
  free: 0,
  starter: 10,
  academy: 30,
  one_to_one: 999,
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [tier, setTier] = useState("free");
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Fetch tier on mount
  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        const t = data?.tier || "free";
        setTier(t);
        setRemaining(TIER_LIMITS[t] ?? 0);
      })
      .catch(() => {});
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const dailyLimit = TIER_LIMITS[tier] ?? 0;
  const isLocked = tier === "free";

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || isLocked) return;
    if (remaining !== null && remaining <= 0) return;

    setInput("");
    setError(null);
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur");
        setLoading(false);
        return;
      }

      setMessages([...newMessages, { role: "assistant", content: data.content }]);
      if (data.remaining !== undefined) setRemaining(data.remaining);
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }, [input, loading, isLocked, remaining, messages]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF1744, #D50000)",
              boxShadow: "0 8px 32px rgba(255,23,68,0.35), 0 2px 8px rgba(0,0,0,0.1)",
            }}
            aria-label="Ouvrir le chat"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {/* Pulse ring */}
            {messages.length === 0 && (
              <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#FF1744]" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden flex flex-col"
            style={{
              height: "min(520px, calc(100vh - 100px))",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #1A1A2E, #16162A)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Assistant OpexIA</h3>
                  <p className="text-[10px] text-white/50">
                    {isLocked
                      ? "Réservé aux membres"
                      : remaining !== null
                      ? `${remaining}/${dailyLimit} questions restantes`
                      : "En ligne"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
              {/* Welcome message */}
              {messages.length === 0 && !isLocked && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FF1744]/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-[#FF1744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-[#111] mb-1">Une question sur la formation ?</h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-[240px] mx-auto">
                    Je peux t{"'"}orienter vers le bon module, t{"'"}aider avec un concept ou te donner un conseil rapide.
                  </p>
                </div>
              )}

              {/* Locked state for free users */}
              {isLocked && (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#111] mb-1">Chat r{"é"}serv{"é"}</h4>
                  <p className="text-xs text-gray-400 mb-4 max-w-[220px] mx-auto">
                    D{"é"}bloque une formule pour discuter avec l{"'"}assistant OpexIA.
                  </p>
                  <a
                    href="/offres"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2.5 rounded-xl transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
                  >
                    Voir les offres <span>→</span>
                  </a>
                </div>
              )}

              {/* Messages */}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#FF1744] text-white rounded-br-md"
                        : "bg-white border border-gray-200 text-[#111] rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Loading dots */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="text-center">
                  <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2 inline-block">{error}</p>
                </div>
              )}

              {/* Rate limit reached */}
              {remaining !== null && remaining <= 0 && !isLocked && (
                <div className="text-center py-2">
                  <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 inline-block">
                    Limite atteinte pour aujourd{"'"}hui.
                    {tier === "starter" && (
                      <> <a href="/offres" className="font-bold text-[#FF1744] underline">Passe en Academy</a> pour 30 questions/jour.</>
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Input area */}
            {!isLocked && (
              <div className="flex-shrink-0 border-t border-gray-200 bg-white px-3 py-3">
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    }}
                    placeholder={remaining !== null && remaining <= 0 ? "Limite atteinte..." : "Pose ta question..."}
                    disabled={loading || (remaining !== null && remaining <= 0)}
                    rows={1}
                    className="flex-1 resize-none text-sm text-[#111] bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all disabled:opacity-50 max-h-24"
                    style={{ minHeight: "42px" }}
                  />
                  <button
                    onClick={send}
                    disabled={!input.trim() || loading || (remaining !== null && remaining <= 0)}
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      background: input.trim() ? "linear-gradient(135deg, #FF1744, #D50000)" : "#E5E7EB",
                    }}
                  >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
