// framework/templates/portfolio.preset.ts
// Preset for personal portfolios, freelancers, coaches, consultants.

import type { SiteConfig } from "@fw/types";

export const portfolioPreset: Partial<SiteConfig> = {
  theme: "minimal",
  schemaType: "Organization",
  sectionOrder: ["hero", "about", "services", "gallery", "testimonials", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  ctaPrimary: { label: "Hire Me", href: "#contact", icon: "Send" },
  sections: {
    hero: {
      headline: "I Design &\nBuild Digital Products",
      description: "Full-stack developer with a passion for clean code and beautiful interfaces. Available for freelance projects.",
      badge: "Open to Work",
    },
    stats: [
      { label: "Projects Built", value: 60, suffix: "+", icon: "Rocket" },
      { label: "Happy Clients", value: 40, suffix: "+", icon: "Users" },
      { label: "Years Experience", value: 6, suffix: "+", icon: "Award" },
      { label: "Technologies", value: 20, suffix: "+", icon: "Code" },
    ],
  },
};
