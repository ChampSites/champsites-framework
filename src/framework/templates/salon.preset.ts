// framework/templates/salon.preset.ts
// Preset for salons, spas, beauty parlors, barbershops.

import type { SiteConfig } from "@fw/types";

export const salonPreset: Partial<SiteConfig> = {
  theme: "luxury",
  schemaType: "BeautySalon",
  sectionOrder: ["hero", "services", "team", "gallery", "testimonials", "pricing", "contact"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Book", href: "#contact" },
  ],
  ctaPrimary: { label: "Book Appointment", href: "#contact", icon: "Calendar" },
  sections: {
    hero: {
      headline: "Look Beautiful.\nFeel Confident.",
      description: "Premium beauty services by expert stylists in a luxurious, relaxing environment. You deserve the best.",
      badge: "Award-Winning Beauty Studio",
    },
    stats: {
      items: [
      { label: "Happy Clients", value: 5000, suffix: "+", icon: "Users" },
      { label: "Expert Stylists", value: 12, suffix: "", icon: "Scissors" },
      { label: "Services Offered", value: 30, suffix: "+", icon: "Star" },
      { label: "Years of Excellence", value: 8, suffix: "+", icon: "Award" },
      ]
    },
  },
};
