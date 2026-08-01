import type { ThemeTokens } from "@fw/types";

export const midnightGoldTheme: ThemeTokens = {
  name: "midnight-gold",
  colors: {
    // Text colors (Light for dark theme)
    primary: "#F8F8F8",
    primaryLight: "#E0E0E0",
    primaryLighter: "#C0C0C0",
    
    // Rich Gold
    accent: "#D4AF37",
    accentDark: "#AA8C2C",
    
    // Almost black backgrounds
    bg: "#050505",
    surface: "#111111",
    
    border: "rgba(212, 175, 55, 0.2)",
    muted: "#A3A3A3",
    mutedDark: "#737373",
  },
  fonts: {
    heading: "Playfair Display",
    body: "Inter",
  },
  radius: "0rem", // Sharp edges for luxury feel
  heroStyle: "dark",
  navStyle: "solid",
  primaryText: "white",
  primaryGradient: "linear-gradient(135deg, #F8F8F8 0%, #E0E0E0 100%)",
  accentGradient: "linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)",
};
