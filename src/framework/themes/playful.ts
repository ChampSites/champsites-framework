// framework/themes/playful.ts
// Playful theme — warm pink with sunny yellow. Fun, approachable, joyful.
// Ideal for: Kids activities, cafes, ice cream shops, bakeries, events for children.

import type { ThemeTokens } from "@fw/types";

export const playfulTheme: ThemeTokens = {
  name: "playful",
  colors: {
    primary: "#BE185D",
    primaryLight: "#DB2777",
    primaryLighter: "#EC4899",
    accent: "#FBBF24",
    accentDark: "#F59E0B",
    bg: "#FFFBF7",
    surface: "#FFF0F7",
    border: "#FECDD3",
    muted: "#9D7A8A",
    mutedDark: "#7D5A6A",
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  radius: "1.5rem",
  heroStyle: "gradient",
  navStyle: "glass",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #BE185D 0%, #EC4899 100%)",
  accentGradient: "linear-gradient(135deg, #FBBF24 0%, #F97316 100%)",
};
