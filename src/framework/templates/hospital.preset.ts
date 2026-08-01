// framework/templates/hospital.preset.ts
// Preset for multi-specialty hospitals and large medical centers.

import type { SiteConfig } from "@fw/types";

export const hospitalPreset: Partial<SiteConfig> = {
  theme: "medical",
  schemaType: "MedicalBusiness",
  sectionOrder: ["hero", "stats", "services", "features", "team", "testimonials", "faq", "contact", "map"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Departments", href: "#services" },
    { label: "Doctors", href: "#team" },
    { label: "About", href: "#features" },
    { label: "Emergency", href: "#contact" },
  ],
  ctaPrimary: { label: "Book Appointment", href: "#contact", icon: "Calendar" },
  ctaSecondary: { label: "Emergency: Call Now", href: "tel:+911234567890", icon: "Phone" },
  sections: {
    hero: {
      headline: "Advanced Care.\nCompassionate Healing.",
      description: "Multi-specialty hospital equipped with cutting-edge technology and dedicated medical professionals available 24/7.",
      badge: "24/7 Emergency Services Available",
    },
    stats: {
      items: [
      { label: "Beds Available", value: 500, suffix: "+", icon: "Activity" },
      { label: "Specialist Doctors", value: 100, suffix: "+", icon: "Stethoscope" },
      { label: "Departments", value: 25, suffix: "+", icon: "Building2" },
      { label: "Patients Annually", value: 100000, suffix: "+", icon: "Users" },
      ]
    },
  },
};
