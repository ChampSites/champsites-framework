// framework/themes/luxury.ts
// Luxury theme — deep navy with gold accent. Timeless elegance.
// Ideal for: High-end salons, boutique hotels, fine dining, jewelry, real estate.

import type { ThemeTokens } from "@fw/types";

export const luxuryTheme: ThemeTokens = {
  name: "luxury",
  colors: {
    primary: "#0F1729",
    primaryLight: "#1a2540",
    primaryLighter: "#243356",
    accent: "#C9A84C",
    accentDark: "#A88730",
    bg: "#FAFAF8",
    surface: "#F5F3EE",
    border: "#E8E4D9",
    muted: "#7A7260",
    mutedDark: "#5A5248",
  },
  fonts: {
    heading: "Cormorant Garamond",
    body: "Montserrat",
  },
  radius: "0.25rem",
  heroStyle: "dark",
  navStyle: "solid",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #0F1729 0%, #243356 100%)",
  accentGradient: "linear-gradient(135deg, #C9A84C 0%, #A88730 100%)",
};
