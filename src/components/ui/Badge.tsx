import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
        "bg-white/[0.05] text-white/90 text-sm font-semibold",
        "border border-white/[0.08] backdrop-blur-sm",
        "shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.04)]",
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
      )}
      {children}
    </span>
  );
}
