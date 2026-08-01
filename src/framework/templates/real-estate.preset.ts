// framework/templates/real-estate.preset.ts
// Preset for real estate agents, property developers, housing projects.

import type { SiteConfig } from "@fw/types";

export const realEstatePreset: Partial<SiteConfig> = {
  theme: "luxury",
  schemaType: "RealEstateAgent",
  sectionOrder: ["hero", "stats", "services", "gallery", "team", "testimonials", "faq", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Properties", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  ctaPrimary: { label: "Schedule Viewing", href: "#contact", icon: "Home" },
  sections: {
    hero: {
      headline: "Find Your\nDream Home Today",
      description: "Premium properties in prime locations. Expert guidance from listing to keys-in-hand.",
      badge: "Trusted Real Estate Experts",
    },
    stats: {
      items: [
      { label: "Properties Sold", value: 1200, suffix: "+", icon: "Home" },
      { label: "Happy Families", value: 900, suffix: "+", icon: "Users" },
      { label: "Years in Business", value: 15, suffix: "+", icon: "Award" },
      { label: "Cities Covered", value: 5, suffix: "", icon: "MapPin" },
      ]
    },
  },
};
