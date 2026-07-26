// framework/templates/academy.preset.ts
// Preset for dance academies, music schools, martial arts dojos, and art schools.

import type { SiteConfig } from "@fw/types";

export const academyPreset: Partial<SiteConfig> = {
  theme: "premium",
  schemaType: "DanceSchool",
  sectionOrder: ["hero", "stats", "services", "features", "gallery", "testimonials", "faq", "contact", "map"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Courses", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#features" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  ctaPrimary: { label: "Book Free Trial", href: "#contact", icon: "MessageCircle" },
  sections: {
    hero: {
      headline: "Where Passion\nMeets Performance",
      description: "World-class training in a welcoming environment. Join hundreds of students who've found their rhythm with us.",
      badge: "Join Our Community",
    },
    stats: [
      { label: "Students Trained", value: 500, suffix: "+", icon: "Users" },
      { label: "Years of Experience", value: 10, suffix: "+", icon: "Award" },
      { label: "Courses Offered", value: 8, suffix: "", icon: "Star" },
      { label: "Rating", value: 4.8, suffix: "★", icon: "ThumbsUp" },
    ],
  },
};
