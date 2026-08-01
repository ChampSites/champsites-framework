// framework/themes/index.ts
// Theme registry — resolves a ThemeName string to ThemeTokens.
// This is the single point of entry for all theme logic.

import type { ThemeName, ThemeTokens } from "@fw/types";
import { premiumTheme } from "./premium";
import { luxuryTheme } from "./luxury";
import { corporateTheme } from "./corporate";
import { creativeTheme } from "./creative";
import { minimalTheme } from "./minimal";
import { medicalTheme } from "./medical";
import { fitnessTheme } from "./fitness";
import { playfulTheme } from "./playful";
import { midnightGoldTheme } from "./midnight-gold";

export const THEME_REGISTRY: Record<ThemeName, ThemeTokens> = {
  premium: premiumTheme,
  luxury: luxuryTheme,
  corporate: corporateTheme,
  creative: creativeTheme,
  minimal: minimalTheme,
  medical: medicalTheme,
  fitness: fitnessTheme,
  playful: playfulTheme,
  "midnight-gold": midnightGoldTheme,
};

/** Returns theme tokens for a given theme name. Defaults to 'premium'. */
export function resolveTheme(name: ThemeName): ThemeTokens {
  return THEME_REGISTRY[name] ?? premiumTheme;
}

/**
 * Generates CSS custom properties string from theme tokens.
 * These are injected into the root layout as :root variables.
 */
export function themeToCSS(theme: ThemeTokens, overrides?: { primary?: string; accent?: string }): string {
  const colors = {
    ...theme.colors,
    ...(overrides?.primary ? { primary: overrides.primary } : {}),
    ...(overrides?.accent ? { accent: overrides.accent, accentDark: overrides.accent } : {}),
  };

  return `
    :root {
      --fw-primary: ${colors.primary};
      --fw-primary-light: ${colors.primaryLight};
      --fw-primary-lighter: ${colors.primaryLighter};
      --fw-accent: ${colors.accent};
      --fw-accent-dark: ${colors.accentDark};
      --fw-bg: ${colors.bg};
      --fw-surface: ${colors.surface};
      --fw-border: ${colors.border};
      --fw-muted: ${colors.muted};
      --fw-muted-dark: ${colors.mutedDark};
      --fw-radius: ${theme.radius};
      --fw-primary-gradient: ${theme.primaryGradient};
      --fw-accent-gradient: ${theme.accentGradient};
    }
  `.trim();
}

export {
  premiumTheme, luxuryTheme, corporateTheme, creativeTheme,
  minimalTheme, medicalTheme, fitnessTheme, playfulTheme,
  midnightGoldTheme,
};
