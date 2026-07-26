// framework/constants/breakpoints.ts
// Tailwind 4 breakpoint values — use in JS logic that needs to match CSS breakpoints.

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
