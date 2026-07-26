// framework/themes/fitness.ts
// Fitness theme — jet black with electric orange. Raw energy and power.
// Ideal for: Gyms, crossfit, personal training, martial arts, sports academies.

import type { ThemeTokens } from "@fw/types";

export const fitnessTheme: ThemeTokens = {
  name: "fitness",
  colors: {
    primary: "#0A0A0A",
    primaryLight: "#141414",
    primaryLighter: "#222222",
    accent: "#F97316",
    accentDark: "#EA580C",
    bg: "#FFFFFF",
    surface: "#F9F9F9",
    border: "#E5E5E5",
    muted: "#6B6B6B",
    mutedDark: "#444444",
  },
  fonts: {
    heading: "Bebas Neue",
    body: "Inter",
  },
  radius: "0.25rem",
  heroStyle: "dark",
  navStyle: "solid",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #0A0A0A 0%, #222222 100%)",
  accentGradient: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
};
