"use client";
// framework/hooks/useTheme.ts
// Returns the current theme tokens from the nearest ThemeContext.
// Useful in deep components that need theme-aware colors without prop-drilling.

import { createContext, useContext } from "react";
import type { ThemeTokens } from "@fw/types";

export const ThemeContext = createContext<ThemeTokens | null>(null);

export function useTheme(): ThemeTokens {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. Ensure your layout wraps content in <ThemeContext.Provider>."
    );
  }
  return ctx;
}
