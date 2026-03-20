"use client";

import { useEffect, useRef, useMemo } from "react";
import { parseHtmlSections, type ContentSection } from "@/lib/parseHtmlSections";
import { InlineSectionAnimation } from "./InlineSectionAnimation";

interface LessonSectionContentProps {
  content: string;
  lessonSlug: string;
  onSectionsReady?: (sections: ContentSection[]) => void;
}

/**
 * Transform raw HTML to style "Astuce :", "Attention :", "Conseil pro :" as callout boxes
 */
function transformCallouts(html: string): string {
  // Match <p> tags that start with <strong>Astuce/Attention/Conseil pro :</strong>
  return html.replace(
    /<p>(\s*)<strong>(Astuce|Attention|Conseil pro)\s*:?\s*<\/strong>\s*(.*?)<\/p>/gi,
    (_, _ws, type, rest) => {
      const lower = type.toLowerCase();
      let icon = "💡";
      let cls = "callout-tip";
      if (lower === "attention") { icon = "⚠️"; cls = "callout-warn"; }
      if (lower === "conseil pro") { icon = "🎯"; cls = "callout-pro"; }
      return `<div class="lesson-callout ${cls}"><span class="callout-icon">${icon}</span><div><strong>${type} :</strong> ${rest}</div></div>`;
    }
  );
}

export function LessonSectionContent({
  content,
  lessonSlug,
  onSectionsReady,
}: LessonSectionContentProps) {
  const sectionsRef = useRef<ContentSection[]>([]);
  const sections = parseHtmlSections(content);

  useEffect(() => {
    sectionsRef.current = sections;
    onSectionsReady?.(sections);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const processedSections = useMemo(() =>
    sections.map(s => ({
      ...s,
      bodyHtml: transformCallouts(s.bodyHtml),
    })),
    [sections]
  );

  return (
    <div className="lesson-content max-w-none overflow-hidden break-words">
      {processedSections.map((section, idx) => (
        <div key={section.id} className={idx > 0 ? "mt-10 sm:mt-14" : ""}>
          {/* Section number + title */}
          {section.titleHtml && (
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                {section.index + 1}
              </span>
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight [&_h2]:text-inherit [&_h2]:font-inherit [&_h2]:text-[length:inherit] [&_h2]:m-0 [&_h2]:p-0 [&_h2]:leading-tight"
                dangerouslySetInnerHTML={{ __html: section.titleHtml }}
              />
            </div>
          )}

          {/* Inline animation */}
          <InlineSectionAnimation
            lessonSlug={lessonSlug}
            sectionIndex={section.index}
            sectionTitle={section.title}
          />

          {/* Section body */}
          {section.bodyHtml && (
            <div
              className="lesson-body"
              dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
            />
          )}
        </div>
      ))}

      <style jsx global>{`
        /* ── Base text ── */
        .lesson-body {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
        }
        @media (min-width: 640px) {
          .lesson-body {
            font-size: 0.95rem;
            line-height: 1.8;
          }
        }
        @media (min-width: 768px) {
          .lesson-body {
            font-size: 1rem;
          }
        }

        /* ── Paragraphs ── */
        .lesson-body p {
          margin-bottom: 1rem;
        }

        /* ── Lists ── */
        .lesson-body ul {
          list-style: disc;
          padding-left: 1.25rem;
          margin-bottom: 1rem;
        }
        .lesson-body ol {
          list-style: decimal;
          padding-left: 1.25rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 640px) {
          .lesson-body ul, .lesson-body ol {
            padding-left: 1.75rem;
          }
        }
        .lesson-body li {
          margin-bottom: 0.4rem;
        }

        /* ── Strong / bold ── */
        .lesson-body strong {
          color: #fff;
          font-weight: 600;
        }

        /* ── Subtitles h3 ── */
        .lesson-body h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        @media (min-width: 640px) {
          .lesson-body h3 {
            font-size: 1.15rem;
          }
        }

        /* ── Code inline ── */
        .lesson-body code {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.1rem 0.35rem;
          border-radius: 0.25rem;
          font-size: 0.82em;
          font-family: ui-monospace, SFMono-Regular, monospace;
          color: rgba(255, 255, 255, 0.92);
        }

        /* ── Blockquote ── */
        .lesson-body blockquote {
          border-left: 3px solid rgba(255, 255, 255, 0.25);
          padding: 0.75rem 1rem;
          margin: 1.25rem 0;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 0 0.5rem 0.5rem 0;
          font-style: italic;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ── Callout boxes (Astuce, Attention, Conseil pro) ── */
        .lesson-callout {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: 0.625rem;
          margin: 1rem 0;
          font-size: 0.88rem;
          line-height: 1.6;
          border: 1px solid;
        }
        @media (min-width: 640px) {
          .lesson-callout {
            padding: 1rem 1.25rem;
            font-size: 0.92rem;
          }
        }
        .lesson-callout .callout-icon {
          flex-shrink: 0;
          font-size: 1.1rem;
          margin-top: 0.1rem;
        }
        .lesson-callout strong {
          font-weight: 700;
        }

        /* Tip (Astuce) - blue */
        .callout-tip {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.25);
          color: rgba(191, 219, 254, 0.95);
        }
        .callout-tip strong { color: rgba(191, 219, 254, 1); }

        /* Warning (Attention) - amber */
        .callout-warn {
          background: rgba(245, 158, 11, 0.08);
          border-color: rgba(245, 158, 11, 0.25);
          color: rgba(253, 230, 138, 0.95);
        }
        .callout-warn strong { color: rgba(253, 230, 138, 1); }

        /* Pro tip (Conseil pro) - purple */
        .callout-pro {
          background: rgba(139, 92, 246, 0.08);
          border-color: rgba(139, 92, 246, 0.25);
          color: rgba(196, 181, 253, 0.95);
        }
        .callout-pro strong { color: rgba(196, 181, 253, 1); }
      `}</style>
    </div>
  );
}
