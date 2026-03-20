"use client";

import type { DiagramBlock as DiagramBlockType } from "@/types/lesson-blocks";

function FlowDiagram({ nodes }: { nodes: DiagramBlockType["nodes"] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {nodes.map((node, i) => (
        <div key={node.id} className="flex items-center gap-3">
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 shadow-sm text-center min-w-[120px]">
            <p className="font-semibold text-[#111] text-sm">{node.label}</p>
            {node.description && (
              <p className="text-xs text-[#6B7280] mt-1">{node.description}</p>
            )}
          </div>
          {i < nodes.length - 1 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function TimelineDiagram({ nodes }: { nodes: DiagramBlockType["nodes"] }) {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#FF1744]/20 rounded-full" />

      <div className="space-y-6">
        {nodes.map((node) => (
          <div key={node.id} className="relative flex items-start gap-4">
            {/* Dot on line */}
            <div className="absolute left-[-17px] top-1.5 w-3 h-3 rounded-full bg-[#FF1744] border-2 border-white shadow-sm" />
            <div>
              <p className="font-semibold text-[#111] text-[0.95rem]">{node.label}</p>
              {node.description && (
                <p className="text-[#6B7280] text-sm mt-0.5">{node.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TreeDiagram({ nodes }: { nodes: DiagramBlockType["nodes"] }) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const rootNodes = nodes.filter(
    (n) => !nodes.some((parent) => parent.children?.includes(n.id))
  );

  function renderNode(nodeId: string, depth: number) {
    const node = nodeMap.get(nodeId);
    if (!node) return null;
    return (
      <div key={node.id} style={{ marginLeft: depth * 24 }} className="my-1">
        <div className="flex items-center gap-2">
          {depth > 0 && (
            <span className="text-gray-300 text-xs">└─</span>
          )}
          <div className={`rounded-xl border border-gray-200 px-3 py-2 text-sm ${
            depth === 0 ? "bg-[#FF1744]/5 border-[#FF1744]/20 font-semibold text-[#111]" : "bg-white text-[#374151]"
          }`}>
            {node.label}
            {node.description && (
              <span className="text-[#6B7280] ml-2 font-normal">— {node.description}</span>
            )}
          </div>
        </div>
        {node.children?.map((childId) => renderNode(childId, depth + 1))}
      </div>
    );
  }

  return (
    <div>
      {rootNodes.map((node) => renderNode(node.id, 0))}
    </div>
  );
}

export default function DiagramBlock({ block }: { block: DiagramBlockType }) {
  return (
    <div className="rounded-2xl bg-[#F8F9FA] p-5 sm:p-6 my-8 overflow-x-auto">
      {block.variant === "flow" && <FlowDiagram nodes={block.nodes} />}
      {block.variant === "timeline" && <TimelineDiagram nodes={block.nodes} />}
      {block.variant === "tree" && <TreeDiagram nodes={block.nodes} />}
    </div>
  );
}
