// framework/types/theme.types.ts
// Defines the shape of a design theme — all visual tokens that can be swapped per client.

export type ThemeName =
  | "premium"
  | "luxury"
  | "corporate"
  | "creative"
  | "minimal"
  | "medical"
  | "fitness"
  | "playful";

export interface ThemeColors {
  /** Main brand color — used for backgrounds, primary buttons, navbar */
  primary: string;
  /** Slightly lighter variant of primary */
  primaryLight: string;
  /** Even lighter — used for hover states on dark backgrounds */
  primaryLighter: string;
  /** Accent / CTA color — high-contrast action color */
  accent: string;
  /** Darker accent for hover states */
  accentDark: string;
  /** Page background */
  bg: string;
  /** Subtle surface (cards, panels) */
  surface: string;
  /** Border / divider color */
  border: string;
  /** Muted text color */
  muted: string;
  /** Darker muted */
  mutedDark: string;
}

export interface ThemeFonts {
  /** Display / heading font family (Google Fonts name) */
  heading: string;
  /** Body / paragraph font family (Google Fonts name) */
  body: string;
}

export interface ThemeTokens {
  name: ThemeName;
  colors: ThemeColors;
  fonts: ThemeFonts;
  /** Base border-radius (rem) */
  radius: string;
  /** Hero section visual style */
  heroStyle: "dark" | "light" | "gradient" | "image";
  /** Navbar visual style */
  navStyle: "glass" | "solid" | "transparent";
  /** Whether to use dark or light text on the primary color */
  primaryText: "white" | "black";
  /** CSS class for primary gradient */
  primaryGradient: string;
  /** CSS class for accent gradient */
  accentGradient: string;
}
