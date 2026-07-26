"use client";
// framework/components/ui/StatCard.tsx
// A single stat tile with animated counter and optional icon.

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { getIcon } from "@fw/constants/icons";
import { cn } from "@fw/utils/cn";
import { scaleIn, viewportOnce } from "@fw/constants/animations";
import type { StatItem } from "@fw/types";

interface StatCardProps extends StatItem {
  light?: boolean;
  index?: number;
}

export function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  icon,
  description,
  light = true,
  index = 0,
}: StatCardProps) {
  const Icon = icon ? getIcon(icon) : null;
  const isFloat = !Number.isInteger(value);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "flex flex-col items-center text-center gap-2 p-6 rounded-[var(--fw-radius)]",
        light
          ? "bg-white/5 border border-white/10"
          : "bg-[var(--fw-surface)] border border-[var(--fw-border)]"
      )}
    >
      {Icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
          style={{ backgroundColor: "rgba(var(--fw-accent), 0.1)" }}
        >
          <Icon className="w-6 h-6" style={{ color: "var(--fw-accent)" }} />
        </div>
      )}

      <AnimatedCounter
        value={value}
        suffix={suffix}
        prefix={prefix}
        isFloat={isFloat}
        className={cn(
          "font-heading font-bold text-4xl md:text-5xl",
          light ? "text-white" : "text-[var(--fw-primary)]"
        )}
      />

      <p className={cn("text-sm font-medium", light ? "text-white/60" : "text-[var(--fw-muted)]")}>
        {label}
      </p>

      {description && (
        <p className={cn("text-xs", light ? "text-white/40" : "text-[var(--fw-muted)]")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
