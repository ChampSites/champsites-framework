// framework/templates/agency.preset.ts
// Preset for creative agencies, digital marketing firms, design studios.

import type { SiteConfig } from "@fw/types";

export const agencyPreset: Partial<SiteConfig> = {
  theme: "creative",
  schemaType: "Organization",
  sectionOrder: ["hero", "services", "features", "team", "gallery", "testimonials", "pricing", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  ctaPrimary: { label: "Start a Project", href: "#contact", icon: "Rocket" },
  sections: {
    hero: {
      headline: "We Build\nDigital Experiences\nThat Convert",
      description: "Strategy. Design. Development. Marketing. We're the creative partner that turns your vision into measurable results.",
      badge: "Award-Winning Digital Agency",
    },
    stats: {
      items: [
      { label: "Projects Delivered", value: 250, suffix: "+", icon: "Rocket" },
      { label: "Happy Clients", value: 120, suffix: "+", icon: "Users" },
      { label: "Years in Business", value: 8, suffix: "+", icon: "Award" },
      { label: "Team Members", value: 30, suffix: "+", icon: "Sparkles" },
      ]
    },
  },
};
