// framework/utils/motion.ts
// Factory functions that produce Framer Motion variant objects from theme tokens.

import type { Variants } from "framer-motion";

/** Produces a colored underline slide variant for nav links */
export function makeUnderlineVariant(accentColor: string): Variants {
  return {
    rest: { scaleX: 0, originX: 0 },
    hover: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
}

/** Float animation CSS keyframe string — inject via style on elements */
export const floatAnimation = {
  y: [0, -10, 0],
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
} as const;

/** Glow pulse animation for primary CTA buttons */
export const pulseGlow = {
  boxShadow: [
    "0 0 0 0 rgba(var(--fw-accent-rgb), 0.4)",
    "0 0 0 20px rgba(var(--fw-accent-rgb), 0)",
    "0 0 0 0 rgba(var(--fw-accent-rgb), 0)",
  ],
  transition: { repeat: Infinity, duration: 2 },
} as const;

/** Shimmer animation for skeleton loaders */
export const shimmerVariants: Variants = {
  animate: {
    backgroundPosition: ["-400% 0", "400% 0"],
    transition: { repeat: Infinity, duration: 1.5, ease: "linear" },
  },
};
