"use client";

import type { ChecklistBlock as ChecklistBlockType } from "@/types/lesson-blocks";
import { useChecklistState } from "../hooks/useChecklistState";

interface Props {
  block: ChecklistBlockType;
  lessonSlug: string;
}

export default function ChecklistBlock({ block, lessonSlug }: Props) {
  const { checkedItems, toggleItem } = useChecklistState(lessonSlug, block.id);

  const total = block.items.length;
  const done = block.items.filter((i) => checkedItems[i.id]).length;

  return (
    <div className="rounded-2xl bg-[#F8F9FA] p-5 sm:p-6 my-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-[#111] text-[0.95rem]">
          {block.title || "Checklist"}
        </p>
        <span className="text-xs text-[#6B7280] font-medium">
          {done}/{total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-200 rounded-full mb-5 overflow-hidden">
        <div
          className="h-full bg-[#FF1744] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${total ? (done / total) * 100 : 0}%` }}
        />
      </div>

      {/* Items */}
      <div className="space-y-1">
        {block.items.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-center gap-3 py-2.5 px-2 w-full text-left rounded-xl hover:bg-white/60 transition-colors"
            >
              {/* Custom checkbox */}
              <span
                className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isChecked
                    ? "bg-[#FF1744] border-[#FF1744]"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isChecked && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              {/* Text */}
              <span
                className={`text-[0.95rem] transition-all duration-200 ${
                  isChecked
                    ? "line-through text-[#6B7280]"
                    : "text-[#111]"
                }`}
              >
                {item.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
