import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-bold shadow-[0_2px_12px_rgba(255,255,255,0.1)] " +
    "hover:bg-white/90 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]",
  secondary:
    "bg-transparent border border-glass-border text-text-primary font-semibold backdrop-blur-sm " +
    "hover:bg-white/[0.06] hover:border-glass-border-hover " +
    "hover:shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]",
  ghost:
    "bg-transparent text-text-secondary " +
    "hover:text-text-primary hover:bg-white/[0.04]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

export function Button({ variant = "primary", size = "md", glow = false, className, ...props }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-sans transition-all duration-300 cursor-pointer select-none",
    variants[variant],
    sizes[size],
    glow && variant === "primary" && "animate-pulse-glow",
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkProps;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
