// framework/themes/corporate.ts
// Corporate theme — professional blue with clean white. Trusted and authoritative.
// Ideal for: Law firms, consulting agencies, financial services, construction.

import type { ThemeTokens } from "@fw/types";

export const corporateTheme: ThemeTokens = {
  name: "corporate",
  colors: {
    primary: "#1B3A6B",
    primaryLight: "#254d8f",
    primaryLighter: "#2e60b0",
    accent: "#F05A28",
    accentDark: "#D04820",
    bg: "#FFFFFF",
    surface: "#F4F6FA",
    border: "#DDE2EC",
    muted: "#6B7A99",
    mutedDark: "#4A5568",
  },
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Inter",
  },
  radius: "0.5rem",
  heroStyle: "dark",
  navStyle: "solid",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #1B3A6B 0%, #2e60b0 100%)",
  accentGradient: "linear-gradient(135deg, #F05A28 0%, #D04820 100%)",
};
