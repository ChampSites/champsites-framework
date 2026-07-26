// framework/templates/law-firm.preset.ts
// Preset for law firms, legal consultancies, attorneys.

import type { SiteConfig } from "@fw/types";

export const lawFirmPreset: Partial<SiteConfig> = {
  theme: "corporate",
  schemaType: "LegalService",
  sectionOrder: ["hero", "services", "features", "team", "testimonials", "faq", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Practice Areas", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Why Choose Us", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Consult", href: "#contact" },
  ],
  ctaPrimary: { label: "Free Consultation", href: "#contact", icon: "Scale" },
  sections: {
    hero: {
      headline: "Expert Legal\nRepresentation You Can Trust",
      description: "Experienced attorneys committed to protecting your rights and delivering results. Your justice is our mission.",
      badge: "Trusted Legal Experts Since 1995",
    },
    stats: [
      { label: "Cases Won", value: 5000, suffix: "+", icon: "Trophy" },
      { label: "Years of Practice", value: 30, suffix: "+", icon: "Award" },
      { label: "Expert Attorneys", value: 25, suffix: "+", icon: "Users" },
      { label: "Client Satisfaction", value: 98, suffix: "%", icon: "ThumbsUp" },
    ],
  },
};
