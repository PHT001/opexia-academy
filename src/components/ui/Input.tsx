import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-secondary">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-text-primary placeholder-text-tertiary font-sans text-sm",
            "bg-white/[0.03] border border-white/[0.08]",
            "shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]",
            "focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10",
            "focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_12px_rgba(255,255,255,0.04)]",
            "transition-all duration-300",
            error && "border-danger/50 focus:border-danger/50 focus:ring-danger/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
