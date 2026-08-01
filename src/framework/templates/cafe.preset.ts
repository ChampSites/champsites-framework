// framework/templates/cafe.preset.ts
// Preset for cafes, coffee shops, tea houses, dessert parlors.

import type { SiteConfig } from "@fw/types";

export const cafePreset: Partial<SiteConfig> = {
  theme: "minimal",
  schemaType: "CafeOrCoffeeShop",
  sectionOrder: ["hero", "services", "about", "gallery", "testimonials", "map"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Menu", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Find Us", href: "#map" },
  ],
  ctaPrimary: { label: "Order Now", href: "#contact", icon: "Coffee" },
  sections: {
    hero: {
      headline: "Your Perfect Cup\nAwaits",
      description: "Artisan coffee, cozy vibes, and a menu crafted with love. The café that feels like home.",
      badge: "Freshly Brewed Every Morning",
    },
    stats: {
      items: [
      { label: "Cups Served Daily", value: 500, suffix: "+", icon: "Coffee" },
      { label: "Menu Items", value: 40, suffix: "+", icon: "Utensils" },
      { label: "Years Open", value: 5, suffix: "+", icon: "Award" },
      { label: "Rating", value: 4.8, suffix: "★", icon: "Star" },
      ]
    },
  },
};
