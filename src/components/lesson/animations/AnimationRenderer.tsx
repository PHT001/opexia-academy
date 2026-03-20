"use client";

import type { AnimationTemplateName, AnimationTemplateProps } from "@/lib/lessonAnimations/types";
import { DefaultAnimation } from "./DefaultAnimation";

import { TimelineAnimation } from "./templates/TimelineAnimation";
import { ComparisonGrid } from "./templates/ComparisonGrid";
import { LayeredStack } from "./templates/LayeredStack";
import { FlowDiagram } from "./templates/FlowDiagram";
import { ConcentricCircles } from "./templates/ConcentricCircles";
import { BrainNetwork } from "./templates/BrainNetwork";
import { CodeTerminal } from "./templates/CodeTerminal";
import { PieChart } from "./templates/PieChart";
import { BarChart } from "./templates/BarChart";
import { ChecklistReveal } from "./templates/ChecklistReveal";
import { ArrowCycle } from "./templates/ArrowCycle";
import { HierarchyTree } from "./templates/HierarchyTree";
import { PulsingOrb } from "./templates/PulsingOrb";
import { SplitTransform } from "./templates/SplitTransform";
import { GearSystem } from "./templates/GearSystem";
import { RocketLaunch } from "./templates/RocketLaunch";
import { ShieldLock } from "./templates/ShieldLock";
import { MarketplaceGrid } from "./templates/MarketplaceGrid";
import { CounterStats } from "./templates/CounterStats";
import { NestingLayers } from "./templates/NestingLayers";
import { ModelCards } from "./templates/ModelCards";
import { TokenStream } from "./templates/TokenStream";
import { TemperatureGauge } from "./templates/TemperatureGauge";
import { WordByWord } from "./templates/WordByWord";
import { RadarChart } from "./templates/RadarChart";
import { FeatureSpotlight } from "./templates/FeatureSpotlight";
import { MindMap } from "./templates/MindMap";
import { ConvergenceBeam } from "./templates/ConvergenceBeam";
import { PlanetOrbit } from "./templates/PlanetOrbit";
import { SlidingWindow } from "./templates/SlidingWindow";
import { HallucinationBubbles } from "./templates/HallucinationBubbles";
import { ChatBubbles } from "./templates/ChatBubbles";
import { ArtifactGallery } from "./templates/ArtifactGallery";
import { ProgressPath } from "./templates/ProgressPath";
import { BrowserMockup } from "./templates/BrowserMockup";
import { WireframeBuilder } from "./templates/WireframeBuilder";
import { CapabilityWheel } from "./templates/CapabilityWheel";
import { TrophyUnlock } from "./templates/TrophyUnlock";

const TEMPLATE_MAP: Record<AnimationTemplateName, React.ComponentType<AnimationTemplateProps>> = {
  "timeline": TimelineAnimation,
  "comparison-grid": ComparisonGrid,
  "layered-stack": LayeredStack,
  "flow-diagram": FlowDiagram,
  "concentric-circles": ConcentricCircles,
  "brain-network": BrainNetwork,
  "code-terminal": CodeTerminal,
  "pie-chart": PieChart,
  "bar-chart": BarChart,
  "checklist-reveal": ChecklistReveal,
  "arrow-cycle": ArrowCycle,
  "hierarchy-tree": HierarchyTree,
  "pulsing-orb": PulsingOrb,
  "split-transform": SplitTransform,
  "gear-system": GearSystem,
  "rocket-launch": RocketLaunch,
  "shield-lock": ShieldLock,
  "marketplace-grid": MarketplaceGrid,
  "counter-stats": CounterStats,
  "nesting-layers": NestingLayers,
  "model-cards": ModelCards,
  "token-stream": TokenStream,
  "temperature-gauge": TemperatureGauge,
  "word-by-word": WordByWord,
  "radar-chart": RadarChart,
  "feature-spotlight": FeatureSpotlight,
  "mind-map": MindMap,
  "convergence-beam": ConvergenceBeam,
  "planet-orbit": PlanetOrbit,
  "sliding-window": SlidingWindow,
  "hallucination-bubbles": HallucinationBubbles,
  "chat-bubbles": ChatBubbles,
  "artifact-gallery": ArtifactGallery,
  "progress-path": ProgressPath,
  "browser-mockup": BrowserMockup,
  "wireframe-builder": WireframeBuilder,
  "capability-wheel": CapabilityWheel,
  "trophy-unlock": TrophyUnlock,
};

interface AnimationRendererProps {
  template: AnimationTemplateName;
  props: AnimationTemplateProps;
}

export function AnimationRenderer({ template, props }: AnimationRendererProps) {
  const Component = TEMPLATE_MAP[template];
  if (!Component) return <DefaultAnimation title={props.title} />;
  return <Component {...props} />;
}
