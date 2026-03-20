"use client";

import { ReactNode } from "react";

interface LessonArticleLayoutProps {
  moduleTitle?: string;
  lessonNumber?: number;
  lessonTitle: string;
  duration?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function LessonArticleLayout({
  moduleTitle,
  lessonNumber,
  lessonTitle,
  duration,
  children,
  footer,
}: LessonArticleLayoutProps) {
  return (
    <div className="lesson-article-wrapper">
      <article className="max-w-[720px] mx-auto px-5 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-10 sm:mb-14">
          {moduleTitle && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-[#FF1744]">
                {moduleTitle}
              </span>
              {lessonNumber !== undefined && (
                <>
                  <span className="text-gray-300">·</span>
                  <span className="text-sm text-[#6B7280]">
                    Leçon {lessonNumber}
                  </span>
                </>
              )}
            </div>
          )}
          <h1 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-[#111] leading-[1.15] tracking-tight">
            {lessonTitle}
          </h1>
          {duration && (
            <div className="flex items-center gap-2 mt-4 text-sm text-[#6B7280]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {duration}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="lesson-blocks-content">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <footer className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
            {footer}
          </footer>
        )}
      </article>
    </div>
  );
}
