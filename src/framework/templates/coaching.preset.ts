// framework/templates/coaching.preset.ts
// Preset for life coaches, business coaches, tutoring centers, educational institutes.

import type { SiteConfig } from "@fw/types";

export const coachingPreset: Partial<SiteConfig> = {
  theme: "creative",
  schemaType: "Organization",
  sectionOrder: ["hero", "about", "services", "features", "testimonials", "pricing", "faq", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Results", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Enroll", href: "#contact" },
  ],
  ctaPrimary: { label: "Book Free Call", href: "#contact", icon: "Phone" },
  sections: {
    hero: {
      headline: "Unlock Your\nFull Potential",
      description: "Proven frameworks, personalized mentoring, and a community of high-achievers. Your transformation starts here.",
      badge: "Trusted by 2,000+ Students",
    },
    stats: {
      items: [
      { label: "Students Coached", value: 2000, suffix: "+", icon: "Users" },
      { label: "Success Stories", value: 800, suffix: "+", icon: "Trophy" },
      { label: "Programs Available", value: 12, suffix: "", icon: "BookOpen" },
      { label: "Years Coaching", value: 8, suffix: "+", icon: "Award" },
      ]
    },
  },
};
