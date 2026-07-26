// framework/templates/ngo.preset.ts
// Preset for NGOs, charities, non-profits, social enterprises.

import type { SiteConfig } from "@fw/types";

export const ngoPreset: Partial<SiteConfig> = {
  theme: "minimal",
  schemaType: "Organization",
  sectionOrder: ["hero", "stats", "about", "services", "team", "testimonials", "cta", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Our Work", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Impact", href: "#stats" },
    { label: "Donate", href: "#contact" },
  ],
  ctaPrimary: { label: "Donate Now", href: "#contact", icon: "Heart" },
  ctaSecondary: { label: "Volunteer", href: "#contact", icon: "HandHeart" },
  sections: {
    hero: {
      headline: "Together We\nCreate Change",
      description: "Empowering communities through education, healthcare, and opportunity. Join us in building a better world.",
      badge: "Making a Difference Since 2010",
    },
    stats: [
      { label: "Lives Impacted", value: 50000, suffix: "+", icon: "Heart" },
      { label: "Projects Completed", value: 200, suffix: "+", icon: "Trophy" },
      { label: "Volunteers", value: 1000, suffix: "+", icon: "Users" },
      { label: "Cities Reached", value: 50, suffix: "+", icon: "Globe" },
    ],
  },
};
