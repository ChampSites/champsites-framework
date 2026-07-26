"use client";
// framework/components/ui/SectionHeader.tsx
// Uniform section title + subtitle + description. Used at the top of every block.

import { motion } from "framer-motion";
import { cn } from "@fw/utils/cn";
import { fadeUp, viewportOnce } from "@fw/constants/animations";

interface SectionHeaderProps {
  headline: string;
  subheadline?: string;
  description?: string;
  align?: "left" | "center" | "right";
  /** If true, renders in white text (for dark section backgrounds) */
  light?: boolean;
  className?: string;
  accentColor?: string;
}

export function SectionHeader({
  headline,
  subheadline,
  description,
  align = "center",
  light = false,
  className,
  accentColor,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={cn("flex flex-col gap-3 max-w-2xl", alignClass, align === "center" && "mx-auto", className)}
    >
      {subheadline && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-xs font-bold tracking-widest uppercase",
            light ? "text-white/60" : "text-[var(--fw-accent)]"
          )}
          style={accentColor ? { color: accentColor } : undefined}
        >
          {subheadline}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight",
          light ? "text-white" : "text-[var(--fw-primary)]"
        )}
      >
        {headline}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-white/60" : "text-[var(--fw-muted)]"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
