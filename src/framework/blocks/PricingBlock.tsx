"use client";
// framework/blocks/PricingBlock.tsx
// Pricing tiers section.

import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { PricingCard } from "@fw/components/ui/PricingCard";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@fw/constants/animations";
import type { PricingBlockProps } from "@fw/types";

export function PricingBlock({ config, ctx }: PricingBlockProps) {
  return (
    <section
      id="pricing"
      aria-label="Pricing plans"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          description={config.description}
          className="mb-16"
        />

        <div
          className="grid gap-8 items-stretch"
          style={{ gridTemplateColumns: `repeat(${Math.min(config.tiers.length, 3)}, minmax(0, 1fr))` }}
        >
          {config.tiers.map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        {config.disclaimer && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-center text-sm mt-10"
            style={{ color: "var(--fw-muted)" }}
          >
            {config.disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
}
