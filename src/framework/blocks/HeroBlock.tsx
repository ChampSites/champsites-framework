"use client";
// framework/blocks/HeroBlock.tsx
// The first thing visitors see. Full-screen section driven entirely by HeroConfig.

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@fw/utils/cn";
import { getIcon } from "@fw/constants/icons";
import { heroReveal, fadeUp, staggerContainer, viewportOnce } from "@fw/constants/animations";
import type { HeroBlockProps } from "@fw/types";

export function HeroBlock({ config, ctx }: HeroBlockProps) {
  const { theme } = ctx;
  const CtaIcon = config.ctaPrimary?.icon ? getIcon(config.ctaPrimary.icon) : null;
  const isDark = theme.heroStyle === "dark" || theme.heroStyle === "gradient";

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: theme.primaryGradient }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow blobs */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${theme.colors.accent}18` }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: `${theme.colors.accent}0d` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          {config.badge && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <div className="flex" aria-hidden="true">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-xs font-medium">{config.badge}</span>
            </motion.div>
          )}

          {/* Offer pill */}
          {config.offer && (
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center text-xs font-bold tracking-wide uppercase rounded-full px-4 py-1.5 border"
                style={{
                  color: theme.colors.accent,
                  backgroundColor: `${theme.colors.accent}22`,
                  borderColor: `${theme.colors.accent}44`,
                }}
              >
                {config.offer}
              </span>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            variants={heroReveal}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold text-white leading-[0.92] tracking-tight mb-8 whitespace-pre-line"
          >
            {config.headline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {i === 1 && arr.length > 1 ? (
                  <span style={{ color: theme.colors.accent }}>{line}</span>
                ) : (
                  line
                )}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          {config.description && (
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              {config.description}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
            {config.ctaPrimary && (
              <a
                href={config.ctaPrimary.href}
                target={config.ctaPrimary.external ? "_blank" : undefined}
                rel={config.ctaPrimary.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center gap-3 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: theme.colors.accent,
                  boxShadow: `0 8px 32px ${theme.colors.accent}44`,
                }}
              >
                {CtaIcon && <CtaIcon className="w-5 h-5" aria-hidden="true" />}
                {config.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            )}

            {config.ctaSecondary && (
              <a
                href={config.ctaSecondary.href}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-all duration-300 hover:border-white/40"
              >
                {config.ctaSecondary.label}
              </a>
            )}
          </motion.div>

          {/* Quick Stats */}
          {config.quickStats && config.quickStats.length > 0 && (
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              {config.quickStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-none">{stat.value}</span>
                  <span className="text-white/40 text-xs mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
