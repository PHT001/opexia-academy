"use client";

import type { HeadingBlock as HeadingBlockType } from "@/types/lesson-blocks";

export default function HeadingBlock({ block }: { block: HeadingBlockType }) {
  if (block.level === 2) {
    return (
      <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-[#111] leading-tight mt-12 mb-4 pb-3 border-b border-gray-200 first:mt-0">
        {block.text}
      </h2>
    );
  }

  return (
    <h3 className="text-[1.15rem] sm:text-[1.25rem] font-semibold text-[#111] leading-snug mt-8 mb-3">
      {block.text}
    </h3>
  );
}
