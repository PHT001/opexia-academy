import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProgressBar({ value, max = 100, showLabel = true, size = "md", className }: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between mb-1.5">
          <span className="text-xs text-text-secondary">{percentage}%</span>
        </div>
      )}
      <div className={cn("w-full rounded-full bg-white/[0.04] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]", heights[size])}>
        <div
          className="h-full rounded-full bg-white transition-all duration-700 ease-out shadow-[0_0_8px_rgba(255,255,255,0.15)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
