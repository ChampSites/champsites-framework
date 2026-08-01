// framework/templates/clinic.preset.ts
// Preset for clinics, diagnostic centers, physiotherapy, dentists.

import type { SiteConfig } from "@fw/types";

export const clinicPreset: Partial<SiteConfig> = {
  theme: "medical",
  schemaType: "MedicalBusiness",
  sectionOrder: ["hero", "services", "features", "team", "testimonials", "faq", "contact", "map"],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#team" },
    { label: "About", href: "#features" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Appointment", href: "#contact" },
  ],
  ctaPrimary: { label: "Book Appointment", href: "#contact", icon: "Calendar" },
  sections: {
    hero: {
      headline: "Your Health,\nOur Priority",
      description: "Expert doctors, advanced diagnostics, and compassionate care — all under one roof.",
      badge: "Trusted by Thousands of Families",
    },
    stats: {
      items: [
      { label: "Patients Treated", value: 25000, suffix: "+", icon: "Users" },
      { label: "Expert Doctors", value: 20, suffix: "+", icon: "Stethoscope" },
      { label: "Specializations", value: 15, suffix: "+", icon: "BriefcaseMedical" },
      { label: "Years of Service", value: 10, suffix: "+", icon: "Award" },
      ]
    },
  },
};
