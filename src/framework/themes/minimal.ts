// framework/themes/minimal.ts
// Minimal theme — near-black with emerald green accent. Clean and modern.
// Ideal for: Portfolios, coaching, NGOs, tech startups, personal brands.

import type { ThemeTokens } from "@fw/types";

export const minimalTheme: ThemeTokens = {
  name: "minimal",
  colors: {
    primary: "#0A0A0A",
    primaryLight: "#141414",
    primaryLighter: "#1F1F1F",
    accent: "#10B981",
    accentDark: "#059669",
    bg: "#FAFAFA",
    surface: "#F4F4F4",
    border: "#E5E5E5",
    muted: "#737373",
    mutedDark: "#525252",
  },
  fonts: {
    heading: "DM Serif Display",
    body: "DM Sans",
  },
  radius: "0.375rem",
  heroStyle: "light",
  navStyle: "transparent",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #0A0A0A 0%, #1F1F1F 100%)",
  accentGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
};
