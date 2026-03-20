"use client";

import type { ImageBlock as ImageBlockType } from "@/types/lesson-blocks";

export default function ImageBlock({ block }: { block: ImageBlockType }) {
  return (
    <figure className="rounded-2xl overflow-hidden my-8 bg-[#F8F9FA]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.src}
        alt={block.alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      {block.caption && (
        <figcaption className="text-sm text-[#6B7280] text-center py-3 px-4 italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}
