"use client";
// framework/blocks/FeaturesBlock.tsx
// "Why Choose Us" / features grid with icon, title, and description.

import { motion } from "framer-motion";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { getIcon } from "@fw/constants/icons";
import { cn } from "@fw/utils/cn";
import { staggerContainer, staggerItem, viewportOnce } from "@fw/constants/animations";
import type { FeaturesBlockProps } from "@fw/types";

export function FeaturesBlock({ config, ctx }: FeaturesBlockProps) {
  const { theme } = ctx;

  return (
    <section
      id="features"
      aria-label="Features and benefits"
      className="py-20 md:py-28"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          description={config.description}
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {config.items.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="bg-white rounded-[var(--fw-radius)] border border-[var(--fw-border)] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${theme.colors.accent}15` }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: theme.colors.accent }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: theme.colors.primary }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.muted }}>
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
