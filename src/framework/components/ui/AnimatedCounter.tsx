"use client";
// framework/components/ui/AnimatedCounter.tsx
// Counts a number from 0 to target when it enters the viewport.

import { useAnimatedCounter } from "@fw/hooks/useAnimatedCounter";
import { cn } from "@fw/utils/cn";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  /** If true, renders as a float with 1 decimal place (e.g. 4.9) */
  isFloat?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 2000,
  isFloat = false,
}: AnimatedCounterProps) {
  // For float values, animate the integer part * 10 then divide
  const target = isFloat ? Math.round(value * 10) : value;
  const { count, ref } = useAnimatedCounter({ target, duration });
  const display = isFloat ? (count / 10).toFixed(1) : count.toLocaleString("en-IN");

  return (
    <div ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{display}{suffix}
    </div>
  );
}
