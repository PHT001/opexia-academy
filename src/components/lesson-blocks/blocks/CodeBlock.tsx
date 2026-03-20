"use client";

import { useState, useCallback } from "react";
import type { CodeBlock as CodeBlockType } from "@/types/lesson-blocks";

export default function CodeBlock({ block }: { block: CodeBlockType }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(block.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [block.code]);

  return (
    <div className="rounded-2xl overflow-hidden my-6 border border-gray-200">
      {/* Header */}
      <div className="bg-[#1e1e2e] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {block.filename && (
            <span className="text-sm text-gray-400 font-mono">
              {block.filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {block.language && (
            <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded">
              {block.language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Copier le code"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Code */}
      <pre className="bg-[#1e1e2e] text-gray-300 p-5 font-mono text-sm leading-relaxed overflow-x-auto">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}
