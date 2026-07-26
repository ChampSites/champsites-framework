// framework/templates/restaurant.preset.ts
// Preset for restaurants, dhabas, fast food outlets, cloud kitchens.

import type { SiteConfig } from "@fw/types";

export const restaurantPreset: Partial<SiteConfig> = {
  theme: "premium",
  schemaType: "Restaurant",
  sectionOrder: ["hero", "about", "services", "gallery", "testimonials", "map", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Menu", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Reserve", href: "#contact" },
  ],
  ctaPrimary: { label: "Reserve a Table", href: "#contact", icon: "Utensils" },
  sections: {
    hero: {
      headline: "A Dining Experience\nLike No Other",
      description: "Fresh ingredients, authentic recipes, and a warm ambiance. Every meal is a celebration.",
      badge: "Now Open for Reservations",
    },
    stats: [
      { label: "Happy Diners", value: 50000, suffix: "+", icon: "Users" },
      { label: "Menu Items", value: 80, suffix: "+", icon: "Utensils" },
      { label: "Years of Service", value: 12, suffix: "+", icon: "Award" },
      { label: "Rating", value: 4.7, suffix: "★", icon: "Star" },
    ],
  },
};
