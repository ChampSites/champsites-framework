"use client";
// framework/components/ui/PricingCard.tsx
// Pricing tier card with highlight support, feature list, and CTA.

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "@fw/utils/cn";
import { scaleIn, viewportOnce } from "@fw/constants/animations";
import type { PricingTier } from "@fw/types";

interface PricingCardProps {
  tier: PricingTier;
  index?: number;
}

export function PricingCard({ tier, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative rounded-[var(--fw-radius)] border p-8 flex flex-col gap-6 transition-all duration-300",
        tier.highlighted
          ? "border-[var(--fw-accent)] bg-[var(--fw-primary)] text-white shadow-2xl scale-105"
          : "border-[var(--fw-border)] bg-white hover:shadow-lg hover:-translate-y-1"
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant={tier.highlighted ? "accent" : "muted"}>{tier.badge}</Badge>
        </div>
      )}

      {/* Header */}
      <div>
        <h3
          className={cn(
            "font-heading font-bold text-xl mb-1",
            tier.highlighted ? "text-white" : "text-[var(--fw-primary)]"
          )}
        >
          {tier.name}
        </h3>
        {tier.description && (
          <p className={cn("text-sm", tier.highlighted ? "text-white/60" : "text-[var(--fw-muted)]")}>
            {tier.description}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "font-heading font-bold text-4xl",
            tier.highlighted ? "text-white" : "text-[var(--fw-primary)]"
          )}
        >
          {tier.price}
        </span>
        {tier.period && (
          <span className={cn("text-sm", tier.highlighted ? "text-white/60" : "text-[var(--fw-muted)]")}>
            / {tier.period}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "w-4 h-4 mt-0.5 shrink-0",
                tier.highlighted ? "text-[var(--fw-accent)]" : "text-emerald-500"
              )}
            />
            <span className={tier.highlighted ? "text-white/80" : "text-[var(--fw-muted)]"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={tier.cta.href}
        target={tier.cta.external ? "_blank" : undefined}
        rel={tier.cta.external ? "noopener noreferrer" : undefined}
        className={cn(
          "text-center text-sm font-semibold py-3 px-6 rounded-lg transition-all duration-200",
          tier.highlighted
            ? "bg-[var(--fw-accent)] text-white hover:opacity-90"
            : "border-2 border-[var(--fw-accent)] text-[var(--fw-accent)] hover:bg-[var(--fw-accent)] hover:text-white"
        )}
      >
        {tier.cta.label}
      </a>
    </motion.div>
  );
}
