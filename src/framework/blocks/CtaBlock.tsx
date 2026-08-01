"use client";
// framework/blocks/CtaBlock.tsx
// Full-width call-to-action banner — dark, accent, or gradient style.

import { motion } from "framer-motion";
import { getIcon } from "@fw/constants/icons";
import { fadeUp, staggerContainer, viewportOnce } from "@fw/constants/animations";
import type { CtaBlockProps } from "@fw/types";
import Link from "next/link";

export function CtaBlock({ config, ctx }: CtaBlockProps) {
  const { theme } = ctx;
  const PrimaryIcon = config.primary.icon ? getIcon(config.primary.icon) : null;
  const SecondaryIcon = config.secondary?.icon ? getIcon(config.secondary.icon) : null;

  return (
    <section
      id="cta"
      aria-label="Call to action"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: theme.primaryGradient }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: theme.colors.accent }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          {config.subheadline && (
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: theme.colors.accent }}
            >
              {config.subheadline}
            </motion.p>
          )}

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            {config.headline}
          </motion.h2>

          {config.description && (
            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-10 leading-relaxed">
              {config.description}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={config.primary.href}
              target={config.primary.external ? "_blank" : undefined}
              rel={config.primary.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
              style={{
                backgroundColor: theme.colors.accent,
                boxShadow: `0 8px 32px ${theme.colors.accent}55`,
              }}
            >
              {PrimaryIcon && <PrimaryIcon className="w-5 h-5" aria-hidden="true" />}
              {config.primary.label}
            </Link>

            {config.secondary && (
              <Link
                href={config.secondary.href}
                target={config.secondary.external ? "_blank" : undefined}
                rel={config.secondary.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {SecondaryIcon && <SecondaryIcon className="w-5 h-5" aria-hidden="true" />}
                {config.secondary.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
