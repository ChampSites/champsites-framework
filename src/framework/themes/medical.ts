// framework/themes/medical.ts
// Medical theme — clean white with trustworthy teal/sky blue. Calm and clinical.
// Ideal for: Clinics, hospitals, dentists, physiotherapy, mental health centers.

import type { ThemeTokens } from "@fw/types";

export const medicalTheme: ThemeTokens = {
  name: "medical",
  colors: {
    primary: "#0369A1",
    primaryLight: "#0284C7",
    primaryLighter: "#0EA5E9",
    accent: "#06B6D4",
    accentDark: "#0891B2",
    bg: "#FFFFFF",
    surface: "#F0F9FF",
    border: "#BAE6FD",
    muted: "#64748B",
    mutedDark: "#475569",
  },
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Source Sans 3",
  },
  radius: "0.5rem",
  heroStyle: "light",
  navStyle: "solid",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)",
  accentGradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
};
