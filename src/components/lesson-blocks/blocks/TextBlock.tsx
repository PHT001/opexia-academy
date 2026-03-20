"use client";

import type { TextBlock as TextBlockType } from "@/types/lesson-blocks";

export default function TextBlock({ block }: { block: TextBlockType }) {
  return (
    <div
      className="block-text my-4"
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  );
}
