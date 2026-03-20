"use client";

interface AnimationContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AnimationContainer({ children, title, subtitle }: AnimationContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-2 sm:gap-3 p-2 sm:p-4 overflow-hidden">
      {(title || subtitle) && (
        <div className="text-center mb-1 sm:mb-2 flex-shrink-0">
          {title && <p className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider leading-tight">{title}</p>}
          {subtitle && <p className="text-[10px] sm:text-xs text-white/60 mt-0.5">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1 flex items-center justify-center w-full min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
