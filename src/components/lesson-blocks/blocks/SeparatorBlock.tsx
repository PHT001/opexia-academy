"use client";

import type { SeparatorBlock as SeparatorBlockType } from "@/types/lesson-blocks";

export default function SeparatorBlock({ block }: { block: SeparatorBlockType }) {
  const style = block.style || "line";

  if (style === "dots") {
    return (
      <div className="flex gap-2 justify-center my-10">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
      </div>
    );
  }

  if (style === "space") {
    return <div className="h-10" />;
  }

  return <hr className="border-gray-200 my-10" />;
}
