// framework/constants/animations.ts
// Shared Framer Motion variants — import and use across all blocks for visual consistency.

import type { Variants } from "framer-motion";

/** Standard fade-up entrance — use on most section content */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Fade-in without translation — good for backgrounds or overlays */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Scale in — use for cards and badges */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

/** Stagger container — wraps a list of children to stagger their entrance */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Faster stagger for dense grids (e.g. gallery, stat cards) */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Stagger item — child of staggerContainer */
export const staggerItem: Variants = fadeUp;

/** Hero text reveal — heavier entrance for hero headings */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Shared viewport trigger config — use on all section-level motion.div wrappers */
export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Standard useInView transition */
export const inViewTransition = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } as const;
