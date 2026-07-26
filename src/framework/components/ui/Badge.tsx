// framework/components/ui/Badge.tsx
// Pill badge for tags, labels, status indicators.

import { cn } from "@fw/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "primary" | "outline" | "muted" | "success" | "warning";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "accent",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    accent: "bg-[var(--fw-accent)] text-white",
    primary: "bg-[var(--fw-primary)] text-white",
    outline: "border border-[var(--fw-accent)] text-[var(--fw-accent)] bg-transparent",
    muted: "bg-[var(--fw-surface)] text-[var(--fw-muted)]",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full tracking-wide",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
