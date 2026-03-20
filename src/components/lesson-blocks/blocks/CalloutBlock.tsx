"use client";

import type { CalloutBlock as CalloutBlockType } from "@/types/lesson-blocks";

const VARIANTS = {
  tip: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    textColor: "text-blue-900",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    textColor: "text-amber-900",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    ),
  },
  info: {
    bg: "bg-gray-50",
    border: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    textColor: "text-gray-800",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" />
      </svg>
    ),
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    textColor: "text-emerald-900",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
};

export default function CalloutBlock({ block }: { block: CalloutBlockType }) {
  const v = VARIANTS[block.variant];

  return (
    <div className={`${v.bg} ${v.border} border rounded-2xl p-5 my-6 flex gap-4 items-start`}>
      <div className={`${v.iconBg} ${v.iconColor} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {v.icon}
      </div>
      <div className="min-w-0">
        {block.title && (
          <p className={`font-semibold ${v.textColor} text-[0.95rem] mb-1`}>{block.title}</p>
        )}
        <div
          className={`${v.textColor} text-[0.95rem] leading-relaxed [&_a]:underline [&_a]:underline-offset-2`}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      </div>
    </div>
  );
}
