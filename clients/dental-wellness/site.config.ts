import type { SiteConfig } from "@fw/types/site.types";

export const siteConfig: SiteConfig = {
  name: "Dental Wellness Clinic",
  tagline: "Expert Dental Care in Purnia",
  phone: "08877900824",
  address: "1st FLOOR, KUBER PLAZA, Chitrawani Rd",
  city: "Purnia, Bihar 854301",
  hours: "Daily 11 AM – 8 PM",
  social: {
    whatsapp: "08877900824"
  },
  theme: "medical",
  seo: {
    title: "Dental Wellness Clinic | Expert Dental Care in Purnia",
    description: "Top-rated dental clinic in Purnia, Bihar offering expert care."
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" }
  ],
  ctaPrimary: {
    label: "Call Now",
    href: "tel:08877900824"
  },
  sections: {
    hero: {
      headline: "Smile with Confidence",
      description: "Top-rated dental clinic in Purnia, Bihar.",
      ctaPrimary: { label: "Book Appointment", href: "tel:08877900824" }
    },
    services: {
      headline: "Our Dental Services",
      subheadline: "Comprehensive care for your entire family",
      layout: "cards",
      items: [
        {
          id: "rct",
          title: "Root Canal Treatment",
          description: "Painless single-sitting RCT to save your natural tooth.",
          icon: "activity"
        },
        {
          id: "whitening",
          title: "Teeth Whitening",
          description: "Advanced laser whitening for a brighter, more confident smile.",
          icon: "sparkles"
        },
        {
          id: "implants",
          title: "Dental Implants",
          description: "Permanent and natural-looking solution for missing teeth.",
          icon: "shield-check"
        }
      ]
    },
    contact: {
      headline: "Visit Our Clinic",
      subheadline: "We are centrally located in Purnia.",
      showForm: false,
      showContactInfo: true
    },
    testimonials: [
      {
        id: "t1",
        name: "Rahul Verma",
        role: "Patient",
        review: "The root canal treatment was completely painless. Highly recommended!",
        rating: 5
      },
      {
        id: "t2",
        name: "Sneha Singh",
        role: "Patient",
        review: "Very clean clinic and professional doctors. Got my teeth whitening done here.",
        rating: 5
      }
    ]
  },
  plugins: ["whatsapp-chat"],
  announcement: {
    isActive: true,
    text: "🎉 Free Dental Checkup & X-Ray this Sunday! Book now.",
    href: "tel:08877900824",
    backgroundColor: "#1E293B",
    textColor: "white"
  },
  sectionOrder: ["hero", "services", "testimonials", "contact"]
};
