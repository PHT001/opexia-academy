"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Phase =
  | "lesson"
  | "stuck"
  | "chatOpen"
  | "chatReply"
  | "chatDone"
  | "quiz"
  | "quizAnswer";

export default function ChatbotAnimation() {
  const [phase, setPhase] = useState<Phase>("lesson");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("lesson");
    const timeouts: NodeJS.Timeout[] = [];

    const schedule = (p: Phase, delay: number) => {
      timeouts.push(setTimeout(() => setPhase(p), delay));
    };

    schedule("lesson", 0);
    schedule("stuck", 2500);
    schedule("chatOpen", 4500);
    schedule("chatReply", 6000);
    schedule("chatDone", 9000);
    schedule("quiz", 10500);
    schedule("quizAnswer", 12000);

    timeouts.push(setTimeout(() => setCycle((c) => c + 1), 15000));
    return () => timeouts.forEach(clearTimeout);
  }, [cycle]);

  const chatVisible = ["chatOpen", "chatReply", "chatDone"].includes(phase);
  const quizVisible = ["quiz", "quizAnswer"].includes(phase);

  const userQuestion =
    "Les horaires du magasin dans mon prompt, contexte ou rôle ?";
  const botReply1 = "Les horaires = ";
  const botReplyContext = "contexte";
  const botReply2 = " (infos de fond). Le ";
  const botReplyRole = "rôle";
  const botReply3 = " serait : \"assistant commercial amical\". ";

  return (
    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden min-h-[500px] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white rounded-md px-3 py-1.5 text-[10px] text-gray-400 border border-gray-200 truncate">
            app.opexia.com/formation/module-3
          </div>
        </div>
      </div>

      {/* OpexIA Banner */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-b border-gray-100">
        <Image
          src="/images/logo-opexia.png"
          alt="OpexIA"
          width={24}
          height={24}
          className="h-6 w-6 rounded-md object-cover"
        />
        <span className="text-[12px] font-bold text-gray-900 tracking-tight">
          OpexIA
        </span>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-[9px] text-gray-400 font-medium">
            Formation
          </span>
          <span className="text-[9px] text-gray-400 font-medium">Outils</span>
          <span className="text-[9px] text-gray-400 font-medium">CRM</span>
          <div className="h-5 px-2.5 rounded-md bg-[#FF1744] flex items-center">
            <span className="text-[8px] text-white font-medium">
              Mon compte
            </span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden bg-[#FAFBFC]">
        {/* PHASE: Lesson view */}
        <AnimatePresence>
          {!quizVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0 flex flex-col pb-10 overflow-hidden"
            >
              {/* Module header - fixed */}
              <div className="flex items-center gap-2.5 px-4 py-3 bg-[#FAFBFC] border-b border-gray-100 shrink-0 z-10">
                <div className="h-6 w-6 rounded-full bg-[#6366F1] flex items-center justify-center">
                  <span className="text-[9px] text-white font-bold">03</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-gray-900">
                    {"Prompt Engineering — Le Contexte"}
                  </div>
                  <div className="text-[9px] text-gray-400">
                    {"Leçon 2/6"}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-1.5 w-12 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-[#6366F1] rounded-full" />
                  </div>
                  <span className="text-[9px] text-gray-400">33%</span>
                </div>
              </div>

              {/* Scrollable lesson content */}
              <div className="flex-1 overflow-hidden relative">
                <motion.div
                  className="space-y-3 px-4 pt-3 pb-4"
                  animate={{ y: phase === "lesson" ? 0 : -35 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  {/* Definition */}
                  <div className="bg-[#6366F1]/5 border-l-[3px] border-[#6366F1] rounded-r-lg px-3 py-2">
                    <div className="text-[10px] font-bold text-[#6366F1] mb-0.5">{"Définition"}</div>
                    <div className="text-[9px] text-gray-600 leading-[1.6]">
                      {"Le contexte = les infos de fond que tu donnes à l'IA avant ta question : qui tu es, ton secteur, ton audience, tes contraintes."}
                    </div>
                  </div>

                  {/* Code example */}
                  <div className="bg-gray-900 rounded-lg p-3 font-mono">
                    <div className="text-[7px] text-gray-500 mb-1">{"prompt-context.txt"}</div>
                    <div className="text-[8px] text-green-400 leading-[1.8]">
                      {"Tu es l'assistant de Dupont"}
                      <br />
                      {"Plomberie (Lyon). Tu réponds"}
                      <br />
                      {"aux clients sur le site web."}
                      <br />
                      {"Ton = pro mais amical."}
                    </div>
                  </div>

                  {/* Contexte vs Rôle comparison */}
                  <div className="text-[10px] font-bold text-gray-800">{"Contexte vs Rôle"}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#FF1744]/5 border border-[#FF1744]/20 rounded-lg p-2.5 text-center">
                      <div className="text-[9px] font-bold text-[#FF1744] mb-1">{"Contexte"}</div>
                      <div className="text-[8px] text-gray-500">{"Infos de fond"}</div>
                      <div className="text-[7px] text-gray-400 mt-0.5 italic">{"\"Tu travailles pour X\""}</div>
                    </div>
                    <div className="bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-lg p-2.5 text-center">
                      <div className="text-[9px] font-bold text-[#6366F1] mb-1">{"Rôle"}</div>
                      <div className="text-[8px] text-gray-500">{"Comportement"}</div>
                      <div className="text-[7px] text-gray-400 mt-0.5 italic">{"\"Tu es expert en Y\""}</div>
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <span className="text-[10px] shrink-0">{"💡"}</span>
                    <div className="text-[8px] text-amber-700 leading-[1.6]">
                      {"Plus le contexte est précis, meilleure est la réponse."}
                    </div>
                  </div>
                </motion.div>

                {/* Fade overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAFBFC] to-transparent pointer-events-none z-[5]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE: Quiz view */}
        <AnimatePresence>
          {quizVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4 pb-10 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-7 w-7 rounded-full bg-[#FF1744] flex items-center justify-center">
                  <span className="text-[11px] text-white">{"✓"}</span>
                </div>
                <div className="text-[12px] font-semibold text-gray-900">
                  {"Quiz — Module 3"}
                </div>
                <div className="ml-auto text-[10px] text-gray-400">
                  Question 1/5
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-3">
                <div className="text-[12px] text-gray-900 font-medium mb-4">
                  {
                    "Quel élément d'un prompt définit comment l'IA doit se comporter ?"
                  }
                </div>

                <div className="space-y-2">
                  {[
                    { label: "A", text: "Le contexte", correct: false },
                    { label: "B", text: "Le rôle", correct: true },
                    {
                      label: "C",
                      text: "Le format de sortie",
                      correct: false,
                    },
                    { label: "D", text: "La température", correct: false },
                  ].map((opt) => (
                    <motion.div
                      key={opt.label}
                      animate={
                        phase === "quizAnswer" && opt.correct
                          ? {
                              borderColor: "#22c55e",
                              backgroundColor: "rgba(34,197,94,0.08)",
                            }
                          : {}
                      }
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-gray-200 bg-[#FAFBFC] cursor-pointer"
                    >
                      <div
                        className={`h-5 w-5 rounded flex items-center justify-center text-[9px] font-bold ${
                          phase === "quizAnswer" && opt.correct
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {phase === "quizAnswer" && opt.correct
                          ? "✓"
                          : opt.label}
                      </div>
                      <span
                        className={`text-[11px] ${
                          phase === "quizAnswer" && opt.correct
                            ? "text-green-600 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {opt.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {phase === "quizAnswer" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-xl px-3 py-2.5"
                >
                  <span className="text-[11px] text-green-700 font-medium">
                    {
                      "✅ Bonne réponse ! Le rôle définit le comportement de l'IA."
                    }
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbot bubble button */}
        <AnimatePresence>
          {!quizVisible && (
            <motion.div
              className="absolute bottom-10 right-3 z-30"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                boxShadow:
                  phase === "stuck"
                    ? "0 0 0 4px rgba(255,23,68,0.3)"
                    : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {phase === "stuck" && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FF1744]/20"
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              <div className="relative h-8 w-8 rounded-full bg-[#FF1744] flex items-center justify-center shadow-lg cursor-pointer">
                <svg
                  className="h-4 w-4 text-white"
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
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated cursor arrow pointing to chatbot button */}
        <AnimatePresence>
          {phase === "stuck" && (
            <motion.div
              className="absolute z-40 pointer-events-none"
              initial={{ opacity: 0, right: 60, bottom: 50 }}
              animate={{
                opacity: 1,
                right: 18,
                bottom: 22,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Cursor SVG */}
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-md"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87c.45 0 .67-.54.35-.85L5.85 2.36a.5.5 0 00-.35.85z"
                  fill="#111827"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbot panel */}
        <AnimatePresence>
          {chatVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-20 right-3 z-40 w-[220px] bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden"
            >
              {/* Chat header */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
                <Image
                  src="/images/logo-opexia.png"
                  alt="OpexIA"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] rounded-full object-cover"
                />
                <div>
                  <span className="text-[10px] font-semibold text-gray-900 block leading-tight">
                    OpexIA Assistant
                  </span>
                  <span className="text-[8px] text-green-500">En ligne</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-2.5 space-y-2 min-h-[80px]">
                <div className="flex justify-end">
                  <div className="bg-[#FF1744] rounded-lg rounded-tr-sm px-2.5 py-1.5 max-w-[90%]">
                    <span className="text-[9px] text-white leading-[1.2]">
                      {userQuestion}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {(phase === "chatReply" || phase === "chatDone") && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start gap-1"
                    >
                      <Image
                        src="/images/logo-opexia.png"
                        alt="OpexIA"
                        width={14}
                        height={14}
                        className="h-[14px] w-[14px] rounded-full object-cover mt-0.5 flex-shrink-0"
                      />
                      <div className="bg-gray-100 rounded-lg rounded-tl-sm px-2.5 py-1.5 max-w-[90%]">
                        <span className="text-[9px] text-gray-700 leading-[1.2]">
                          {botReply1}
                          <span className="text-[#FF1744] font-semibold">
                            {botReplyContext}
                          </span>
                          {botReply2}
                          <span className="text-[#6366F1] font-semibold">
                            {botReplyRole}
                          </span>
                          {botReply3}
                          {"😊"}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {phase === "chatOpen" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-1 items-center"
                    >
                      <Image
                        src="/images/logo-opexia.png"
                        alt="OpexIA"
                        width={14}
                        height={14}
                        className="h-[14px] w-[14px] rounded-full object-cover flex-shrink-0"
                      />
                      <div className="bg-gray-100 rounded-lg px-2 py-1.5 flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-1 w-1 rounded-full bg-gray-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="px-2.5 py-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-200">
                  <span className="text-[9px] text-gray-400 flex-1">
                    Pose ta question...
                  </span>
                  <div className="h-5 w-5 rounded bg-[#FF1744] flex items-center justify-center">
                    <svg
                      className="h-2.5 w-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom nav tabs */}
        <div className="absolute bottom-0 left-0 right-0 flex border-t border-gray-200 bg-white z-20">
          <button
            className={`flex-1 py-2 text-center text-[9px] font-medium transition-colors ${
              !quizVisible
                ? "text-[#FF1744] border-t-2 border-[#FF1744]"
                : "text-gray-400"
            }`}
          >
            {"📖 Leçon"}
          </button>
          <button
            className={`flex-1 py-2 text-center text-[9px] font-medium transition-colors ${
              quizVisible
                ? "text-[#FF1744] border-t-2 border-[#FF1744]"
                : "text-gray-400"
            }`}
          >
            {"✅ Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
}
