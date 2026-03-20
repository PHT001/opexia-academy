export type AnimationTemplateName =
  | "timeline"
  | "comparison-grid"
  | "layered-stack"
  | "flow-diagram"
  | "concentric-circles"
  | "brain-network"
  | "code-terminal"
  | "pie-chart"
  | "bar-chart"
  | "checklist-reveal"
  | "arrow-cycle"
  | "hierarchy-tree"
  | "pulsing-orb"
  | "split-transform"
  | "gear-system"
  | "rocket-launch"
  | "shield-lock"
  | "marketplace-grid"
  | "counter-stats"
  | "nesting-layers"
  | "model-cards"
  | "token-stream"
  | "temperature-gauge"
  | "word-by-word"
  | "radar-chart"
  | "feature-spotlight"
  | "mind-map"
  | "convergence-beam"
  | "planet-orbit"
  | "sliding-window"
  | "hallucination-bubbles"
  | "chat-bubbles"
  | "artifact-gallery"
  | "progress-path"
  | "browser-mockup"
  | "wireframe-builder"
  | "capability-wheel"
  | "trophy-unlock";

export interface AnimationItem {
  label: string;
  description?: string;
  icon?: string;
  color?: string;
  value?: number;
}

export interface AnimationTemplateProps {
  items: AnimationItem[];
  title?: string;
  subtitle?: string;
  variant?: string;
  speed?: "slow" | "normal" | "fast";
  highlightIndex?: number;
}

export interface SectionAnimationConfig {
  template: AnimationTemplateName;
  props: AnimationTemplateProps;
}

export interface LessonAnimationMap {
  [sectionIndex: number]: SectionAnimationConfig;
}

export interface AllLessonAnimations {
  [lessonSlug: string]: LessonAnimationMap;
}
