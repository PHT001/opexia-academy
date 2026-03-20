"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300",
            activeIndex === index && "border-white/[0.12] bg-white/[0.04]"
          )}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="flex items-center justify-between w-full px-6 py-5 text-left text-[15px] font-semibold text-text-primary hover:text-white transition-colors cursor-pointer"
          >
            <span>{item.question}</span>
            <svg
              className={cn(
                "w-5 h-5 text-text-tertiary transition-transform duration-300 shrink-0 ml-4",
                activeIndex === index && "rotate-180"
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-400",
              activeIndex === index ? "max-h-[300px]" : "max-h-0"
            )}
          >
            <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
