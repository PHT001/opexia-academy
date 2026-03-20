"use client";

import { motion } from "framer-motion";
import { AnimationContainer } from "../AnimationContainer";
import type { AnimationTemplateProps } from "@/lib/lessonAnimations/types";

export function ChatBubbles({ items, title, subtitle }: AnimationTemplateProps) {
  // items alternate: user message, AI response, user, AI...
  const messages = items.slice(0, 6).map((item, i) => ({
    ...item,
    isUser: i % 2 === 0,
  }));

  return (
    <AnimationContainer title={title} subtitle={subtitle}>
      <div className="w-full max-w-[300px]">
        {/* Chat window chrome */}
        <div className="rounded-xl border border-white/15 overflow-hidden bg-white/[0.03]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.04]">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <span className="text-[9px] text-white/50 ml-1">claude.ai</span>
          </div>

          {/* Messages */}
          <div className="p-3 space-y-2.5 min-h-[160px]">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.5, duration: 0.35, ease: "easeOut" }}
              >
                <div
                  className={`max-w-[80%] px-3 py-1.5 rounded-2xl text-[10px] leading-relaxed ${
                    msg.isUser
                      ? "bg-violet-600/30 text-violet-100 rounded-br-sm border border-violet-500/20"
                      : "bg-white/[0.08] text-white/80 rounded-bl-sm border border-white/10"
                  }`}
                >
                  {!msg.isUser && (
                    <span className="text-[8px] font-bold text-violet-400 block mb-0.5">Claude</span>
                  )}
                  {msg.label}

                  {/* Typing indicator for last AI message */}
                  {!msg.isUser && i === messages.length - 1 && (
                    <motion.span
                      className="inline-flex gap-0.5 ml-1 align-middle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: 0.5 + i * 0.5 + 0.3, duration: 1.5, repeat: 2 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input bar */}
          <div className="px-3 py-2 border-t border-white/10 flex items-center gap-2">
            <div className="flex-1 h-6 rounded-full bg-white/[0.05] border border-white/10 flex items-center px-3">
              <motion.span
                className="text-[9px] text-white/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Écris ton message...
              </motion.span>
            </div>
            <div className="w-6 h-6 rounded-full bg-violet-600/40 flex items-center justify-center">
              <span className="text-[10px]">↑</span>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
