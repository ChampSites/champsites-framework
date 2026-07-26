// framework/themes/premium.ts
// Premium theme — bold dark primary with a striking red/crimson accent.
// Ideal for: Dance academies, fitness studios, premium services.

import type { ThemeTokens } from "@fw/types";

export const premiumTheme: ThemeTokens = {
  name: "premium",
  colors: {
    primary: "#111111",
    primaryLight: "#1a1a1a",
    primaryLighter: "#2d2d2d",
    accent: "#E63946",
    accentDark: "#c1121f",
    bg: "#FFFFFF",
    surface: "#F8F8F8",
    border: "#EAEAEA",
    muted: "#666666",
    mutedDark: "#444444",
  },
  fonts: {
    heading: "Playfair Display",
    body: "Inter",
  },
  radius: "0.75rem",
  heroStyle: "dark",
  navStyle: "glass",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #111111 0%, #2d2d2d 100%)",
  accentGradient: "linear-gradient(135deg, #E63946 0%, #c1121f 100%)",
};
