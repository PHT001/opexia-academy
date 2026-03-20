import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  depth?: boolean;
  featured?: boolean;
  shimmer?: boolean;
  glow?: boolean;
}

export function GlassCard({ hover = true, depth = false, featured = false, shimmer = false, glow = false, className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        hover && "interactive-card",
        depth && "glass-card-3d",
        featured && "glass-card-featured",
        shimmer && "glass-shimmer",
        glow && "shadow-[0_0_40px_rgba(255,255,255,0.06)]",
        !hover && "hover:border-glass-border hover:shadow-none hover:translate-y-0 hover:scale-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
