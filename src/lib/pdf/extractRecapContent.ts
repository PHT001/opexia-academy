/**
 * Extracts key recap content from lesson JSON blocks for PDF generation.
 * Pulls out: headings, callouts, comparisons, checklists, steps, diagrams.
 * Skips: long text paragraphs, images, videos, code blocks, inline quizzes.
 */

import type {
  LessonBlock,
  CalloutBlock,
  ComparisonBlock,
  ChecklistBlock,
  StepsBlock,
  DiagramBlock,
  HeadingBlock,
  TextBlock,
} from "@/types/lesson-blocks";

export interface RecapCallout {
  type: "callout";
  variant: "tip" | "warning" | "info" | "success";
  title?: string;
  text: string;
}

export interface RecapTable {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface RecapBullets {
  type: "bullets";
  title?: string;
  items: string[];
}

export interface RecapFlow {
  type: "flow";
  nodes: string[];
}

export interface RecapHeading {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface RecapText {
  type: "text";
  text: string;
}

export type RecapElement =
  | RecapCallout
  | RecapTable
  | RecapBullets
  | RecapFlow
  | RecapHeading
  | RecapText;

export interface LessonRecap {
  order: number;
  title: string;
  elements: RecapElement[];
}

export interface ModuleRecap {
  moduleOrder: number;
  moduleTitle: string;
  moduleDescription: string;
  lessons: LessonRecap[];
}

/** Strip HTML tags from a string */
function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(p|li|ol|ul|h[1-6]|div|span|strong|em|b|i|code|a)[^>]*>/gi, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Extract bold items from HTML as bullet points (e.g. "<strong>Term</strong> : description") */
function extractBoldItems(html: string): string[] {
  const matches = html.match(/<strong>([^<]+)<\/strong>\s*[:：]\s*([^<]+)/gi);
  if (!matches || matches.length < 2) return [];
  return matches.map((m) => {
    const cleaned = m
      .replace(/<\/?strong>/gi, "")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned;
  });
}

/** Check if a text block contains a structured list (bold terms with descriptions) */
function isStructuredList(html: string): boolean {
  const boldCount = (html.match(/<strong>/gi) || []).length;
  return boldCount >= 3;
}

export function extractRecapFromBlocks(blocks: LessonBlock[]): RecapElement[] {
  const elements: RecapElement[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    switch (block.type) {
      case "heading": {
        const h = block as HeadingBlock;
        elements.push({ type: "heading", level: h.level, text: h.text });
        break;
      }

      case "text": {
        const t = block as TextBlock;
        // Extract structured lists from text blocks
        if (isStructuredList(t.html)) {
          const items = extractBoldItems(t.html);
          if (items.length > 0) {
            elements.push({ type: "bullets", items });
          }
        }
        // Skip regular paragraphs (too verbose for recap)
        break;
      }

      case "callout": {
        const c = block as CalloutBlock;
        elements.push({
          type: "callout",
          variant: c.variant,
          title: c.title,
          text: stripHtml(c.html),
        });
        break;
      }

      case "comparison": {
        const comp = block as ComparisonBlock;
        elements.push({
          type: "table",
          headers: comp.headers,
          rows: comp.rows.map((r) => r.cells),
        });
        break;
      }

      case "checklist": {
        const cl = block as ChecklistBlock;
        elements.push({
          type: "bullets",
          title: cl.title,
          items: cl.items.map((item) => item.text),
        });
        break;
      }

      case "steps": {
        const s = block as StepsBlock;
        elements.push({
          type: "flow",
          nodes: s.steps.map((step) => step.title),
        });
        break;
      }

      case "diagram": {
        const d = block as DiagramBlock;
        if (d.variant === "flow" || d.variant === "timeline") {
          elements.push({
            type: "flow",
            nodes: d.nodes.map((n) => n.label),
          });
        }
        break;
      }

      // Skip: separator, quiz-inline, image, video, code
      default:
        break;
    }
  }

  return elements;
}
