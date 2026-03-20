"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { QuizInlineBlock as QuizInlineBlockType } from "@/types/lesson-blocks";
import { useQuizState } from "../hooks/useQuizState";

export default function QuizInlineBlock({ block }: { block: QuizInlineBlockType }) {
  const { selectedId, revealed, select } = useQuizState();
  const isCorrect = selectedId === block.correctId;

  return (
    <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 my-8 bg-white">
      {/* Question */}
      <div className="flex items-start gap-3 mb-5">
        <span className="w-7 h-7 rounded-lg bg-[#FF1744]/10 text-[#FF1744] flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
          ?
        </span>
        <p className="font-semibold text-[#111] text-[1rem] leading-snug">
          {block.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {block.options.map((option) => {
          let className =
            "w-full text-left p-4 rounded-xl border text-[0.95rem] transition-all duration-200 ";

          if (!revealed) {
            className += "border-gray-200 hover:bg-[#F8F9FA] hover:border-gray-300 cursor-pointer";
          } else if (option.id === block.correctId) {
            className += "bg-emerald-50 border-emerald-300 text-emerald-800";
          } else if (option.id === selectedId) {
            className += "bg-red-50 border-red-300 text-red-800";
          } else {
            className += "border-gray-100 text-gray-400";
          }

          return (
            <button
              key={option.id}
              onClick={() => select(option.id)}
              disabled={revealed}
              className={className}
            >
              <div className="flex items-center gap-3">
                {/* Radio indicator */}
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    revealed && option.id === block.correctId
                      ? "border-emerald-500 bg-emerald-500"
                      : revealed && option.id === selectedId
                      ? "border-red-400 bg-red-400"
                      : "border-gray-300"
                  }`}
                >
                  {revealed && option.id === block.correctId && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {revealed && option.id === selectedId && option.id !== block.correctId && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                </span>
                {option.text}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {revealed && block.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
              isCorrect
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              <span className="font-semibold">{isCorrect ? "Correct !" : "Pas tout à fait."}</span>{" "}
              {block.explanation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
