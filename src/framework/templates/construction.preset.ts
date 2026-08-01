// framework/templates/construction.preset.ts
// Preset for construction companies, contractors, architects, interior designers.

import type { SiteConfig } from "@fw/types";

export const constructionPreset: Partial<SiteConfig> = {
  theme: "corporate",
  schemaType: "Organization",
  sectionOrder: ["hero", "stats", "services", "features", "gallery", "testimonials", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#gallery" },
    { label: "About", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
  ctaPrimary: { label: "Get Free Quote", href: "#contact", icon: "Wrench" },
  sections: {
    hero: {
      headline: "Building Dreams.\nDelivering Excellence.",
      description: "Quality construction, on-time delivery, and transparent pricing. We build structures that stand the test of time.",
      badge: "Licensed & Insured Contractors",
    },
    stats: {
      items: [
      { label: "Projects Completed", value: 500, suffix: "+", icon: "Building2" },
      { label: "Years of Experience", value: 20, suffix: "+", icon: "Award" },
      { label: "Happy Clients", value: 300, suffix: "+", icon: "Users" },
      { label: "Expert Workers", value: 150, suffix: "+", icon: "Wrench" },
      ]
    },
  },
};
