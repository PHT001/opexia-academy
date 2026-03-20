"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Phase =
  | "pipeline"
  | "prospect"
  | "message"
  | "reply"
  | "devis"
  | "won";

export default function AgencyLaunchAnimation() {
  const [phase, setPhase] = useState<Phase>("pipeline");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("pipeline");
    const timeouts: NodeJS.Timeout[] = [];
    const schedule = (p: Phase, delay: number) => {
      timeouts.push(setTimeout(() => setPhase(p), delay));
    };

    schedule("pipeline", 0);
    schedule("prospect", 2000);
    schedule("message", 3500);
    schedule("reply", 5500);
    schedule("devis", 7500);
    schedule("won", 9500);

    timeouts.push(setTimeout(() => setCycle((c) => c + 1), 12500));
    return () => timeouts.forEach(clearTimeout);
  }, [cycle]);

  const leads = [
    { name: "Boulangerie Martin", status: "Nouveau", value: "1 200" },
    { name: "Garage Auto Plus", status: "Contact", value: "2 500" },
    { name: "Cabinet Durand", status: "Devis", value: "3 800" },
  ];

  const pipelineStages = [
    { label: "Prospects", count: 12, color: "#6366F1" },
    { label: "Contact", count: 5, color: "#F59E0B" },
    { label: "Devis", count: 3, color: "#FF1744" },
    { label: "Gagn\u00e9", count: 2, color: "#22C55E" },
  ];

  const showDevis = ["devis", "won"].includes(phase);

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
            app.opexia.com/crm/pipeline
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
          <span className="text-[9px] text-gray-400 font-medium">Formation</span>
          <span className="text-[9px] text-[#FF1744] font-semibold">CRM</span>
          <span className="text-[9px] text-gray-400 font-medium">Outils</span>
          <div className="h-5 px-2.5 rounded-md bg-[#FF1744] flex items-center">
            <span className="text-[8px] text-white font-medium">Mon compte</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-hidden bg-[#FAFBFC]">
        {/* Pipeline header */}
        <div className="px-4 pt-3 pb-2 border-b border-gray-100 bg-[#FAFBFC]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] font-bold text-gray-900">{"Pipeline commercial"}</div>
            <div className="text-[9px] text-gray-400">{"Mars 2025"}</div>
          </div>
          {/* Pipeline stages bar */}
          <div className="flex gap-1">
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.label}
                className="flex-1 rounded-md px-2 py-1.5 text-center"
                style={{ backgroundColor: `${stage.color}10`, borderBottom: `2px solid ${stage.color}` }}
                animate={
                  phase === "won" && idx === 3
                    ? { scale: [1, 1.05, 1] }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                <div className="text-[8px] font-bold" style={{ color: stage.color }}>
                  {stage.label}
                </div>
                <motion.div
                  className="text-[10px] font-bold text-gray-800"
                  animate={
                    phase === "won" && idx === 3
                      ? { }
                      : {}
                  }
                >
                  {phase === "won" && idx === 3 ? 3 : stage.count}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leads list */}
        <div className="px-4 pt-2 space-y-1.5">
          {leads.map((lead, idx) => (
            <motion.div
              key={lead.name}
              className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-3 py-2 shadow-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-gray-500">
                  {lead.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-semibold text-gray-800 truncate">{lead.name}</div>
                <div className="text-[7px] text-gray-400">{lead.status}</div>
              </div>
              <div className="text-[9px] font-bold text-gray-700 shrink-0">{lead.value}{"€"}</div>
            </motion.div>
          ))}

          {/* New prospect appearing */}
          <AnimatePresence>
            {["prospect", "message", "reply", "devis", "won"].includes(phase) && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex items-center gap-2 bg-[#6366F1]/5 rounded-lg border border-[#6366F1]/20 px-3 py-2"
              >
                <div className="h-6 w-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center shrink-0">
                  <span className="text-[8px] font-bold text-[#6366F1]">R</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-semibold text-[#6366F1] truncate">{"Restaurant Le Petit Chef"}</div>
                  <div className="text-[7px] text-[#6366F1]/60">
                    {showDevis ? "Devis envoy\u00e9" : phase === "reply" ? "R\u00e9pondu" : "Nouveau"}
                  </div>
                </div>
                <div className="text-[9px] font-bold text-[#6366F1] shrink-0">{"4 500€"}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Message notification */}
        <AnimatePresence>
          {phase === "message" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 left-3 right-3 bg-white rounded-xl border border-gray-200 shadow-xl p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 rounded-full bg-[#6366F1] flex items-center justify-center">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-gray-800">{"Prospection envoy\u00e9e"}</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-2.5 py-2 text-[8px] text-gray-600 leading-[1.4]">
                {"Bonjour, je propose des solutions IA (chatbot, automatisation) pour les restaurants. Int\u00e9ress\u00e9 par une d\u00e9mo gratuite ?"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reply notification */}
        <AnimatePresence>
          {phase === "reply" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 left-3 right-3 bg-white rounded-xl border border-green-200 shadow-xl p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-green-700">{"R\u00e9ponse re\u00e7ue !"}</span>
              </div>
              <div className="bg-green-50 rounded-lg px-2.5 py-2 text-[8px] text-green-800 leading-[1.4]">
                {"Oui, on cherche justement un chatbot pour les r\u00e9servations ! Quand est-ce qu'on peut se voir ?"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Devis overlay */}
        <AnimatePresence>
          {showDevis && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 left-3 right-3 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[9px] font-bold text-gray-800">{"Devis #047"}</span>
                <span className="text-[7px] text-gray-400">{"Restaurant Le Petit Chef"}</span>
              </div>
              <div className="px-3 py-2 space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span className="text-gray-600">{"Chatbot IA r\u00e9servation"}</span>
                  <span className="font-semibold text-gray-800">{"2 500€"}</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-gray-600">{"Int\u00e9gration site web"}</span>
                  <span className="font-semibold text-gray-800">{"1 000€"}</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-gray-600">{"Maintenance 3 mois"}</span>
                  <span className="font-semibold text-gray-800">{"1 000€"}</span>
                </div>
                <div className="border-t border-gray-100 pt-1 mt-1 flex justify-between">
                  <span className="text-[9px] font-bold text-gray-900">{"Total"}</span>
                  <span className="text-[11px] font-bold text-[#FF1744]">{"4 500€"}</span>
                </div>
              </div>

              {/* Won badge */}
              <AnimatePresence>
                {phase === "won" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-3 mb-2 bg-green-500 rounded-lg py-1.5 text-center"
                  >
                    <span className="text-[9px] font-bold text-white">{"✅ Devis accept\u00e9 — Client gagn\u00e9 !"}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 flex border-t border-gray-200 bg-white z-20">
          <div className="flex-1 py-2 text-center">
            <div className="text-[8px] text-gray-400">{"Ce mois"}</div>
            <motion.div
              className="text-[11px] font-bold text-gray-900"
              animate={phase === "won" ? {} : {}}
            >
              {phase === "won" ? "12 050€" : "7 550€"}
            </motion.div>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="flex-1 py-2 text-center">
            <div className="text-[8px] text-gray-400">{"Taux conversion"}</div>
            <div className="text-[11px] font-bold text-green-600">{"38%"}</div>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="flex-1 py-2 text-center">
            <div className="text-[8px] text-gray-400">{"Clients actifs"}</div>
            <div className="text-[11px] font-bold text-gray-900">
              {phase === "won" ? "6" : "5"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
