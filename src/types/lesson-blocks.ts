// ─── Lesson Block System Types ───

interface BlockBase {
  id: string;
  type: string;
}

export interface HeadingBlock extends BlockBase {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface TextBlock extends BlockBase {
  type: "text";
  html: string;
}

export interface CalloutBlock extends BlockBase {
  type: "callout";
  variant: "tip" | "warning" | "info" | "success";
  title?: string;
  html: string;
}

export interface ImageBlock extends BlockBase {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoBlock extends BlockBase {
  type: "video";
  src: string;
  poster?: string;
}

export interface CodeBlock extends BlockBase {
  type: "code";
  language: string;
  filename?: string;
  code: string;
}

export interface StepsBlock extends BlockBase {
  type: "steps";
  steps: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface ComparisonBlock extends BlockBase {
  type: "comparison";
  headers: string[];
  rows: Array<{
    cells: string[];
  }>;
}

export interface ChecklistBlock extends BlockBase {
  type: "checklist";
  title?: string;
  items: Array<{
    id: string;
    text: string;
  }>;
}

export interface QuizInlineBlock extends BlockBase {
  type: "quiz-inline";
  question: string;
  options: Array<{
    id: string;
    text: string;
  }>;
  correctId: string;
  explanation?: string;
}

export interface SeparatorBlock extends BlockBase {
  type: "separator";
  style?: "line" | "dots" | "space";
}

export interface DiagramBlock extends BlockBase {
  type: "diagram";
  variant: "flow" | "timeline" | "tree";
  nodes: Array<{
    id: string;
    label: string;
    description?: string;
    children?: string[];
  }>;
}

export type LessonBlock =
  | HeadingBlock
  | TextBlock
  | CalloutBlock
  | ImageBlock
  | VideoBlock
  | CodeBlock
  | StepsBlock
  | ComparisonBlock
  | ChecklistBlock
  | QuizInlineBlock
  | SeparatorBlock
  | DiagramBlock;
