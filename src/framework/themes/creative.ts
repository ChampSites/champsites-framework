// framework/themes/creative.ts
// Creative theme — deep purple with vibrant violet/fuchsia accent. Energetic and expressive.
// Ideal for: Creative agencies, photography, music, art studios, events.

import type { ThemeTokens } from "@fw/types";

export const creativeTheme: ThemeTokens = {
  name: "creative",
  colors: {
    primary: "#1E0F3C",
    primaryLight: "#2D1560",
    primaryLighter: "#3D2080",
    accent: "#8B5CF6",
    accentDark: "#7C3AED",
    bg: "#FFFFFF",
    surface: "#F7F5FF",
    border: "#EDE8FF",
    muted: "#7C6FA0",
    mutedDark: "#5A5070",
  },
  fonts: {
    heading: "Outfit",
    body: "Inter",
  },
  radius: "1rem",
  heroStyle: "gradient",
  navStyle: "glass",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #1E0F3C 0%, #3D2080 100%)",
  accentGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
};
