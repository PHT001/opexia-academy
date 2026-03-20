"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─── Icons ─────────────────────────────── */
function IconSend({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
}
function IconSparkles({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" /><circle cx="12" cy="12" r="4" /></svg>;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  { emoji: "🚀", text: "Comment créer mon premier agent IA ?" },
  { emoji: "💰", text: "Quels outils pour automatiser ma prospection ?" },
  { emoji: "📊", text: "Comment structurer mon offre de services IA ?" },
  { emoji: "🧠", text: "Quelle est la différence entre GPT et Claude ?" },
  { emoji: "📈", text: "Comment fixer mes tarifs en tant que freelance IA ?" },
  { emoji: "🔧", text: "Quels sont les meilleurs outils no-code IA ?" },
];

const CAPABILITIES = [
  { icon: "📚", title: "Formation", desc: "Questions sur les modules, leçons et quiz" },
  { icon: "🤖", title: "Outils IA", desc: "Aide sur ChatGPT, Claude, Midjourney, etc." },
  { icon: "💼", title: "Business", desc: "Stratégie, pricing, prospection, clients" },
  { icon: "⚙️", title: "Technique", desc: "Code, automatisations, intégrations API" },
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Salut ! 👋 Je suis l'assistant Opexia. Je suis là pour t'aider sur ta formation, les outils IA, ou ton projet d'agence. Pose-moi n'importe quelle question !",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: msg,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (replace with real API call later)
    setTimeout(() => {
      const responses = [
        "C'est une excellente question ! Pour créer ton premier agent IA, commence par définir clairement son objectif. Utilise un outil comme ChatGPT API ou Claude API, puis structure tes prompts avec un system prompt précis. Je te recommande de suivre le Module 3 de la formation qui couvre ce sujet en détail. 🚀",
        "Pour automatiser ta prospection, je te recommande de combiner Make.com (ou n8n) avec LinkedIn Sales Navigator et un CRM comme HubSpot. Le Module 5 de la formation te montre étape par étape comment mettre en place ce workflow. Tu peux aussi utiliser des outils comme Instantly pour l'email outreach. 📧",
        "Structurer ton offre est crucial ! Je te conseille de proposer 3 tiers : un pack starter (audit + recommandations), un pack business (implémentation), et un pack premium (accompagnement continu). Check le Module 7 sur le pricing et le positionnement. 💡",
        "GPT et Claude ont des forces différentes. GPT-4 excelle en créativité et génération de contenu, tandis que Claude est meilleur pour l'analyse longue, le respect des instructions complexes et le raisonnement. En pratique, beaucoup de pros utilisent les deux selon le cas d'usage. Le Module 2 compare les modèles en détail. 🧠",
        "Pour fixer tes tarifs en freelance IA, base-toi sur la valeur apportée plutôt que sur le temps passé. Un chatbot qui fait économiser 20h/mois à un client vaut bien 2000-5000€. Commence par des projets à 500-1500€ pour te faire la main, puis monte progressivement. Le Module 8 approfondit ce sujet. 💰",
        "Les meilleurs outils no-code IA actuellement : Make.com pour les automatisations, Voiceflow pour les chatbots, Relevance AI pour les agents, et Bubble + GPT-4 pour les apps. Chacun a ses forces — je détaille tout ça dans les Modules 4 et 5 de la formation. ⚡",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
          Assistant IA
        </h1>
        <p className="text-sm text-gray-500">
          Ton assistant personnel pour répondre à toutes tes questions sur la formation.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">
        {/* ═══════════════ MAIN CHAT ═══════════════ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col" style={{ minHeight: "calc(100vh - 220px)", maxHeight: "calc(100vh - 220px)" }}>
          {/* Chat header */}
          <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shadow-sm shadow-red-500/20">
                  <IconSparkles className="text-white w-4 h-4" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Opexia AI</p>
                <p className="text-[10px] text-emerald-600 font-medium">En ligne</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                {messages.length - 1} message{messages.length - 1 !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "flex gap-2.5",
                    msg.role === "user" ? "flex-row-reverse" : ""
                  )}
                >
                  {/* Avatar */}
                  <div className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                    msg.role === "assistant"
                      ? "bg-gradient-to-br from-[#FF1744] to-[#D50000]"
                      : "bg-gray-200"
                  )}>
                    <span className={cn(
                      "text-[9px] font-bold",
                      msg.role === "assistant" ? "text-white" : "text-gray-600"
                    )}>
                      {msg.role === "assistant" ? "AI" : "T"}
                    </span>
                  </div>

                  {/* Bubble */}
                  <div className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-3",
                    msg.role === "assistant"
                      ? "bg-gray-50 rounded-tl-md"
                      : "bg-[#FF1744] rounded-tr-md"
                  )}>
                    <p className={cn(
                      "text-[13px] leading-relaxed",
                      msg.role === "assistant" ? "text-gray-700" : "text-white"
                    )}>
                      {msg.content}
                    </p>
                    <p className={cn(
                      "text-[9px] mt-1.5",
                      msg.role === "assistant" ? "text-gray-300" : "text-white/50"
                    )}>
                      {msg.timestamp.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[9px] font-bold text-white">AI</span>
                </div>
                <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex gap-1.5 items-center h-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Suggestions */}
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Questions suggérées</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SUGGESTIONS.map((s, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleSend(s.text)}
                      className="text-left px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-[#FF1744]/30 hover:bg-[#FF1744]/[0.02] transition-all duration-200 group"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-base mt-0.5">{s.emoji}</span>
                        <p className="text-xs text-gray-600 group-hover:text-gray-800 leading-relaxed">{s.text}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-5 py-3.5 border-t border-gray-100 flex-shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pose ta question..."
                disabled={isTyping}
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/30 transition-all disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className={cn(
                  "p-2.5 rounded-xl transition-all flex-shrink-0",
                  input.trim() && !isTyping
                    ? "bg-[#FF1744] text-white hover:bg-[#D50000] shadow-sm shadow-red-500/20"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                )}
              >
                <IconSend className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[9px] text-gray-300 text-center mt-2">L&apos;assistant peut faire des erreurs. Vérifie les infos importantes.</p>
          </div>
        </div>

        {/* ═══════════════ RIGHT SIDEBAR ═══════════════ */}
        <div className="hidden xl:flex flex-col gap-4">
          {/* Capabilities */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-xs font-bold text-gray-900">Je peux t&apos;aider sur</h3>
            </div>
            <div className="p-3 space-y-1">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm mt-0.5">{cap.icon}</span>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800">{cap.title}</p>
                    <p className="text-[10px] text-gray-400">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick tips */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-xs font-bold text-gray-900">💡 Conseils</h3>
            </div>
            <div className="p-4 space-y-3">
              {[
                "Sois précis dans tes questions pour des réponses plus utiles.",
                "Mentionne le module ou la leçon pour un contexte ciblé.",
                "Demande des exemples concrets pour mieux comprendre.",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[8px] font-bold text-amber-600">{i + 1}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
