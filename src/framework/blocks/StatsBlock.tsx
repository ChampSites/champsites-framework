"use client";
// framework/blocks/StatsBlock.tsx
// Displays a row of animated stat counters. Works on both dark and light backgrounds.

import { motion } from "framer-motion";
import { StatCard } from "@fw/components/ui/StatCard";
import { fadeUp, viewportOnce } from "@fw/constants/animations";
import type { StatsBlockProps } from "@fw/types";

export function StatsBlock({ config, ctx }: StatsBlockProps) {
  const { theme } = ctx;
  const { items } = config;
  const isDark = theme.heroStyle === "dark";

  return (
    <section
      id="stats"
      aria-label="Statistics"
      className="py-16 md:py-20"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0, 1fr))` }}
        >
          {items.map((stat, i) => (
            <StatCard key={stat.label} {...stat} light={true} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
