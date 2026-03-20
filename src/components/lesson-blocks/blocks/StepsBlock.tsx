"use client";

import type { StepsBlock as StepsBlockType } from "@/types/lesson-blocks";

export default function StepsBlock({ block }: { block: StepsBlockType }) {
  return (
    <div className="rounded-2xl bg-[#F8F9FA] p-5 sm:p-6 my-8">
      <div className="space-y-0">
        {block.steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 relative">
            {/* Connector line */}
            {i < block.steps.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200" />
            )}

            {/* Step number */}
            <div className="w-10 h-10 rounded-xl bg-[#FF1744] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 relative z-10">
              {step.icon || i + 1}
            </div>

            {/* Content */}
            <div className={`pb-6 ${i === block.steps.length - 1 ? "pb-0" : ""}`}>
              <p className="font-semibold text-[#111] text-[1rem] leading-snug">
                {step.title}
              </p>
              <p className="text-[#6B7280] text-[0.95rem] mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
