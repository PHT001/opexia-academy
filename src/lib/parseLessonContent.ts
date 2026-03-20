import type { LessonBlock } from "@/types/lesson-blocks";

export function detectContentFormat(content: string): "blocks" | "html" {
  const trimmed = content.trim();
  if (trimmed.startsWith("[")) {
    try {
      JSON.parse(trimmed);
      return "blocks";
    } catch {
      return "html";
    }
  }
  return "html";
}

export function parseLessonBlocks(content: string): LessonBlock[] {
  return JSON.parse(content) as LessonBlock[];
}
