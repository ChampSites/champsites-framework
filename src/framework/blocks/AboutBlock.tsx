"use client";
// framework/blocks/AboutBlock.tsx
// About section with text, highlights, optional image, and CTA.

import { motion } from "framer-motion";
import Image from "next/image";
import { getIcon } from "@fw/constants/icons";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { slideInLeft, slideInRight, staggerContainer, staggerItem, viewportOnce } from "@fw/constants/animations";
import { cn } from "@fw/utils/cn";
import type { AboutBlockProps } from "@fw/types";

export function AboutBlock({ config, ctx }: AboutBlockProps) {
  const { theme, ctaPrimary } = ctx;

  return (
    <section
      id="about"
      aria-label="About us"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            className="space-y-6"
          >
            {config.subheadline && (
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: theme.colors.accent }}>
                {config.subheadline}
              </p>
            )}
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight" style={{ color: theme.colors.primary }}>
              {config.headline}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.muted }}>
              {config.body}
            </p>

            {/* Highlights */}
            {config.highlights && config.highlights.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
              >
                {config.highlights.map((h) => {
                  const Icon = getIcon(h.icon);
                  return (
                    <motion.div key={h.title} variants={staggerItem} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${theme.colors.accent}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: theme.colors.accent }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: theme.colors.primary }}>{h.title}</p>
                        <p className="text-xs leading-relaxed mt-0.5" style={{ color: theme.colors.muted }}>{h.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* CTA */}
            {(config.cta ?? ctaPrimary) && (
              <div className="pt-4">
                <a
                  href={(config.cta ?? ctaPrimary).href}
                  target={(config.cta ?? ctaPrimary).external ? "_blank" : undefined}
                  rel={(config.cta ?? ctaPrimary).external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: theme.colors.accent }}
                >
                  {(config.cta ?? ctaPrimary).label}
                </a>
              </div>
            )}
          </motion.div>

          {/* Image side */}
          {config.image ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideInRight}
              className="relative h-[480px] rounded-2xl overflow-hidden"
            >
              <Image
                src={config.image.src}
                alt={config.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideInRight}
              className="h-[480px] rounded-2xl flex items-center justify-center"
              style={{ background: `${theme.colors.primary}0d` }}
            >
              <span className="text-8xl font-heading font-bold" style={{ color: `${theme.colors.primary}22` }}>
                {ctx.businessName[0]}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
