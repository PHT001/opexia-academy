"use client";

import { motion } from "framer-motion";
import type { LessonBlock } from "@/types/lesson-blocks";

import HeadingBlock from "./blocks/HeadingBlock";
import TextBlock from "./blocks/TextBlock";
import SeparatorBlock from "./blocks/SeparatorBlock";
import CalloutBlock from "./blocks/CalloutBlock";
import CodeBlock from "./blocks/CodeBlock";
import ImageBlock from "./blocks/ImageBlock";
import VideoBlock from "./blocks/VideoBlock";
import ChecklistBlock from "./blocks/ChecklistBlock";
import QuizInlineBlock from "./blocks/QuizInlineBlock";
import StepsBlock from "./blocks/StepsBlock";
import ComparisonBlock from "./blocks/ComparisonBlock";
import DiagramBlock from "./blocks/DiagramBlock";

interface LessonBlockRendererProps {
  blocks: LessonBlock[];
  lessonSlug: string;
}

function renderBlock(block: LessonBlock, lessonSlug: string) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} />;
    case "text":
      return <TextBlock block={block} />;
    case "separator":
      return <SeparatorBlock block={block} />;
    case "callout":
      return <CalloutBlock block={block} />;
    case "code":
      return <CodeBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "checklist":
      return <ChecklistBlock block={block} lessonSlug={lessonSlug} />;
    case "quiz-inline":
      return <QuizInlineBlock block={block} />;
    case "steps":
      return <StepsBlock block={block} />;
    case "comparison":
      return <ComparisonBlock block={block} />;
    case "diagram":
      return <DiagramBlock block={block} />;
    default:
      return null;
  }
}

export default function LessonBlockRenderer({
  blocks,
  lessonSlug,
}: LessonBlockRendererProps) {
  return (
    <div>
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {renderBlock(block, lessonSlug)}
        </motion.div>
      ))}
    </div>
  );
}
