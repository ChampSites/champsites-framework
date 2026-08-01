// framework/templates/gym.preset.ts
// Preset for gyms, fitness centers, crossfit boxes, yoga studios.

import type { SiteConfig } from "@fw/types";

export const gymPreset: Partial<SiteConfig> = {
  theme: "fitness",
  schemaType: "GymOrHealthClub",
  sectionOrder: ["hero", "stats", "services", "features", "pricing", "testimonials", "faq", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Coaches", href: "#team" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Join Now", href: "#contact" },
  ],
  ctaPrimary: { label: "Start Free Trial", href: "#contact", icon: "Dumbbell" },
  sections: {
    hero: {
      headline: "Build the Body\nYou Deserve",
      description: "State-of-the-art equipment. Expert coaches. A community that pushes you further every single day.",
      badge: "Start Your Transformation Today",
    },
    stats: {
      items: [
      { label: "Active Members", value: 1200, suffix: "+", icon: "Users" },
      { label: "Expert Coaches", value: 15, suffix: "", icon: "Trophy" },
      { label: "Workout Programs", value: 20, suffix: "+", icon: "Dumbbell" },
      { label: "Years Open", value: 8, suffix: "+", icon: "Award" },
      ]
    },
  },
};
