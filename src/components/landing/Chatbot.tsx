"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
}

const faqData: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["prix", "tarif", "combien", "co\u00fbt", "cher", "gratuit", "payer", "paiement", "plusieurs fois"],
    answer:
      "On a 3 formules : Starter \u00e0 47\u20ac (PDF + templates), Academy \u00e0 397\u20ac (formation compl\u00e8te + plateforme + CRM \u2014 payable en 3x139\u20ac), et One-to-One \u00e0 3 997\u20ac (accompagnement premium avec Marius & Igor \u2014 payable en 4x999\u20ac). Garantie 14 jours satisfait ou rembours\u00e9.",
  },
  {
    keywords: ["d\u00e9butant", "z\u00e9ro", "aucune", "connaissance", "niveau", "pr\u00e9requis", "base"],
    answer:
      "Aucun pr\u00e9requis technique. La formation part de z\u00e9ro et t'am\u00e8ne jusqu'\u00e0 pouvoir vendre des services IA \u00e0 des entreprises. On a des \u00e9l\u00e8ves qui n'avaient jamais touch\u00e9 \u00e0 l'IA avant.",
  },
  {
    keywords: ["temps", "dur\u00e9e", "combien de temps", "semaine", "heure", "parall\u00e8le", "travail"],
    answer:
      "Le programme dure 4 semaines. Tu peux le suivre en parall\u00e8le de ton travail, \u00e0 raison de 1-2h par jour. Certains \u00e9l\u00e8ves ont d\u00e9croch\u00e9 leur premier client en 10 jours.",
  },
  {
    keywords: ["r\u00e9sultat", "10k", "gagner", "revenu", "argent", "facturer", "client"],
    answer:
      "Nos \u00e9l\u00e8ves g\u00e9n\u00e8rent en moyenne 1 800\u20ac/mois apr\u00e8s la formation. L'objectif 10K\u20ac/mois est atteignable avec 3-5 clients qui paient entre 2 000 et 5 000\u20ac pour des automatisations IA.",
  },
  {
    keywords: ["garantie", "rembours", "satisfait", "risque"],
    answer:
      "Oui, garantie satisfait ou rembours\u00e9 14 jours, sans condition. Si la formation ne te convient pas, on te rembourse int\u00e9gralement. Z\u00e9ro risque.",
  },
  {
    keywords: ["satur\u00e9", "concurrence", "trop tard", "march\u00e9"],
    answer:
      "Le march\u00e9 de l'IA est en pleine explosion \u2014 85% des m\u00e9tiers de 2030 n'existent pas encore. La demande d\u00e9passe largement l'offre. C'est maintenant qu'il faut se positionner, pas dans 2 ans.",
  },
  {
    keywords: ["support", "aide", "bloqu\u00e9", "question", "discord", "communaut\u00e9"],
    answer:
      "Tu as acc\u00e8s \u00e0 notre Discord communautaire avec +150 entrepreneurs. L'offre Academy inclut aussi un assistant IA int\u00e9gr\u00e9. Pour le One-to-One, tu as un support prioritaire illimit\u00e9 + 8 visios individuelles avec Marius & Igor.",
  },
  {
    keywords: ["contenu", "programme", "module", "le\u00e7on", "apprendre"],
    answer:
      "74 le\u00e7ons r\u00e9parties en 4 semaines : Fondations IA, Construction d'infrastructures, Packaging de ton offre, et Acquisition clients. Plus des templates, un CRM, et un g\u00e9n\u00e9rateur de projets.",
  },
];

function findAnswer(input: string): string {
  const lower = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const faq of faqData) {
    for (const kw of faq.keywords) {
      const normalizedKw = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (lower.includes(normalizedKw)) {
        return faq.answer;
      }
    }
  }
  return "Bonne question ! \u00c9cris-nous sur WhatsApp pour une r\u00e9ponse personnalis\u00e9e, ou scroll jusqu'aux tarifs pour d\u00e9couvrir nos formules. \ud83d\ude80";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Salut ! \ud83d\udc4b Je suis l'assistant OpexIA. Pose-moi tes questions sur la formation, les tarifs, ou le programme.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(trimmed);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#FF1744] text-white shadow-xl shadow-red-900/30 flex items-center justify-center hover:bg-[#D50000] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="bg-[#0A0A0A] px-5 py-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#FF1744] flex items-center justify-center text-white text-sm font-bold">
                IA
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Assistant OpexIA</p>
                <p className="text-white/40 text-xs flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                  En ligne
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#FF1744] text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {["C'est quoi le prix ?", "Je suis d\u00e9butant", "Combien de temps ?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setMessages((prev) => [...prev, { role: "user", text: q }]);
                      setIsTyping(true);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { role: "bot", text: findAnswer(q) }]);
                        setIsTyping(false);
                      }, 800 + Math.random() * 600);
                    }}
                    className="text-xs border border-gray-200 rounded-full px-3 py-1.5 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-100 px-4 py-3 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Pose ta question..."
                className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2.5 outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="h-10 w-10 rounded-full bg-[#FF1744] text-white flex items-center justify-center hover:bg-[#D50000] transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
