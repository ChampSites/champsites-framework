// framework/config/business.config.ts
// ═══════════════════════════════════════════════════════════════════════
// THE ONLY FILE YOU EDIT TO GENERATE A NEW BUSINESS WEBSITE
// ═══════════════════════════════════════════════════════════════════════
// Demo: Rudra Dance Academy, Laxmi Nagar, New Delhi
// Replace all values below with your client's information.
// ═══════════════════════════════════════════════════════════════════════

import type { SiteConfig } from "@fw/types";

export const siteConfig: SiteConfig = {
  // ── Identity ────────────────────────────────────────────────────────
  name: "Rudra Dance Academy",
  tagline: "Biggest Dance Academy in East Delhi",
  subTagline: "Learn. Perform. Shine.",
  favicon: "/logo2.png",

  // ── Contact ─────────────────────────────────────────────────────────
  phone: "+91-8010891010",
  phoneAlt: "+91-9716912060",
  whatsapp: "918010891010",
  email: "ankit.gupta1546@gmail.com",
  address: "D-31, Basement, Street No. 2, Near Beni Sweets, Laxmi Nagar",
  city: "New Delhi",
  pincode: "110092",
  landmark: "Near Metro Pillar No. 35",
  hours: "Mon – Sun : 7:00 AM – 9:00 PM",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2345678901234!2d77.2757!3d28.6303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb41d0e6745d%3A0x123456789abcdef!2sRudra%20Dance%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // ── Social ──────────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/rudradanceacademy.official/",
    whatsapp: "918010891010",
  },

  // ── Theme & Branding ────────────────────────────────────────────────
  theme: "premium",

  // ── SEO ─────────────────────────────────────────────────────────────
  seo: {
    title: "Rudra Dance Academy — Biggest Dance Academy in East Delhi",
    description:
      "Top-rated dance academy in Laxmi Nagar, Delhi. Bollywood, Hip Hop, Semi-Classical, Zumba, Kids Dance & Wedding Choreography. 3 AC branches. 4.9★ rating.",
    keywords: [
      "dance academy laxmi nagar",
      "rudra dance academy",
      "dance classes delhi",
      "bollywood dance",
      "hip hop dance",
      "kids dance classes",
      "wedding choreography",
      "dance school near me",
      "best dance academy east delhi",
    ],
    locale: "en_IN",
    siteUrl: "https://rudradanceacademy.in",
  },

  // ── Navigation ──────────────────────────────────────────────────────
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Courses", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  ctaPrimary: {
    label: "Book Free Trial",
    href: "https://wa.me/918010891010?text=Hi! I'd like to book a FREE trial class at Rudra Dance Academy.",
    external: true,
    icon: "MessageCircle",
    variant: "primary",
  },

  ctaSecondary: {
    label: "Explore Courses",
    href: "#services",
    variant: "outline",
  },

  footerTagline: "Delhi's most loved dance school, building artists since 2017.",

  footerLinks: [
    {
      title: "Courses",
      links: [
        { label: "Bollywood Dance", href: "#services" },
        { label: "Hip Hop", href: "#services" },
        { label: "Semi-Classical", href: "#services" },
        { label: "Kids Dance", href: "#services" },
        { label: "Wedding Choreography", href: "#services" },
      ],
    },
    {
      title: "Academy",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Trainers", href: "#team" },
        { label: "Gallery", href: "#gallery" },
        { label: "Reviews", href: "#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Book Free Trial", href: "https://wa.me/918010891010" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ],

  // ── Page Assembly ────────────────────────────────────────────────────
  sectionOrder: [
    "hero",
    "stats",
    "services",
    "features",
    "gallery",
    "testimonials",
    "faq",
    "contact",
    "map",
  ],

  // ── JSON-LD Schema ───────────────────────────────────────────────────
  schemaType: "DanceSchool",
  schemaExtras: {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
  },

  // ── Content Sections ─────────────────────────────────────────────────
  sections: {
    hero: {
      headline: "Learn.\nPerform.\nShine.",
      description:
        "Biggest Dance Academy in East Delhi — Bollywood, Hip Hop, Bhangra, Zumba, Semi-Classical, Kids & Wedding Choreography. AC studios · 3 Branches · Special Ladies Batches.",
      badge: "4.9 Rating · 1,000+ Happy Students · 3 Branches in Delhi",
      offer: "🎉 15% Off on New Admissions",
      ctaPrimary: {
        label: "Book Free Trial Class",
        href: "https://wa.me/918010891010?text=Hi! I'd like to book a FREE trial class at Rudra Dance Academy.",
        external: true,
        icon: "MessageCircle",
      },
      ctaSecondary: {
        label: "Explore Courses",
        href: "#services",
      },
      quickStats: [
        { label: "Mon–Sun", value: "7AM–9PM" },
        { label: "For Beginners", value: "Yes" },
        { label: "Branches", value: "3 in Delhi" },
        { label: "Experience", value: "15+ Years" },
      ],
    },

    stats: {
      items: [
        { label: "Students Trained", value: 1000, suffix: "+", icon: "Users" },
        { label: "Years of Excellence", value: 15, suffix: "+", icon: "Award" },
        { label: "Branches in Delhi", value: 3, suffix: "", icon: "Star" },
        { label: "Google Rating", value: 4.9, suffix: "★", icon: "ThumbsUp" },
      ]
    },

    services: {
      headline: "Our Courses",
      subheadline: "Something for Everyone",
      description:
        "From complete beginners to advanced performers — find your perfect dance style.",
      layout: "grid",
      items: [
        {
          id: "bollywood",
          title: "Bollywood Dance",
          description:
            "Master the magic of Bollywood — from classic moves to the latest chartbusters. High energy, expressive, and pure joy.",
          duration: "3 Months",
          level: "All Levels",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=85&fit=crop&auto=format",
            alt: "Bollywood Dance",
          },
          emoji: "🎬",
          tags: ["All Levels", "Beginner Friendly", "Weekend Available"],
        },
        {
          id: "hiphop",
          title: "Hip Hop",
          description:
            "Street style, b-boy moves, freestyle battles. Learn authentic hip-hop culture from the ground up.",
          duration: "3 Months",
          level: "All Levels",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=85&fit=crop&auto=format",
            alt: "Hip Hop Dance",
          },
          emoji: "🎤",
          tags: ["All Levels", "Flexible Batches", "Advanced Available"],
        },
        {
          id: "semiclassical",
          title: "Semi-Classical",
          description:
            "The perfect blend of classical discipline and contemporary expression. Bharatnatyam-infused choreography with a modern twist.",
          duration: "4 Months",
          level: "Beginner+",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=85&fit=crop&auto=format",
            alt: "Semi-Classical Dance",
          },
          emoji: "🪷",
          tags: ["Beginner+", "Flexible Batches", "Weekend Available"],
        },
        {
          id: "zumba",
          title: "Western Dance / Zumba",
          description:
            "High energy, Latin-inspired fitness dance. Burn calories, improve coordination and have the time of your life. Special ladies batch available.",
          duration: "Ongoing",
          level: "All Levels",
          frequency: "5x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85&fit=crop&auto=format",
            alt: "Zumba Dance",
          },
          emoji: "🔥",
          tags: ["All Levels", "Ladies Batch", "Beginner Friendly"],
        },
        {
          id: "bhangra",
          title: "Bhangra",
          description:
            "Punjab's most energetic folk dance, reimagined for the modern stage. Perfect for events, festivals, and cultural shows.",
          duration: "3 Months",
          level: "All Levels",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1589754299029-d15ead059551?w=800&q=85&fit=crop&auto=format",
            alt: "Bhangra Dance",
          },
          emoji: "🥁",
          tags: ["All Levels", "Weekend Available", "Flexible Batches"],
        },
        {
          id: "kids",
          title: "Kids Dance",
          description:
            "Designed for ages 4–12. Fun, structured, and child-friendly classes that build confidence and creativity.",
          duration: "Ongoing",
          level: "Ages 4+",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=85&fit=crop&auto=format",
            alt: "Kids Dance",
          },
          emoji: "⭐",
          tags: ["Ages 4+", "Beginner Friendly", "Weekend Available"],
        },
        {
          id: "wedding",
          title: "Wedding Choreography & Events",
          description:
            "Make your sangeet unforgettable. Bride, groom & family choreography tailored to your song choices. Events handled end-to-end.",
          duration: "Custom",
          level: "All Ages",
          frequency: "Flexible",
          image: {
            src: "https://images.unsplash.com/photo-1714972383570-44ddc9738355?w=800&q=85&fit=crop&auto=format",
            alt: "Wedding Choreography",
          },
          emoji: "💍",
          tags: ["All Ages", "Custom Package", "Flexible Batches"],
        },
        {
          id: "footwork",
          title: "Foot Work",
          description:
            "Build lightning-fast footwork, rhythm and co-ordination. The foundation of every great dancer.",
          duration: "2 Months",
          level: "All Levels",
          frequency: "3x / Week",
          image: {
            src: "https://images.unsplash.com/photo-1522642888367-8d98750c243c?w=800&q=85&fit=crop&auto=format",
            alt: "Footwork Training",
          },
          emoji: "👟",
          tags: ["All Levels", "Beginner Friendly", "Advanced Available"],
        },
      ],
    },

    features: {
      headline: "Why Choose Rudra?",
      subheadline: "What Makes Us Different",
      items: [
        {
          icon: "GraduationCap",
          title: "Professional Trainers",
          desc: "Ankit Sir, Suru Mam, Kartik Sir — trained professionals with years of stage & teaching experience.",
        },
        {
          icon: "Trophy",
          title: "Biggest in East Delhi",
          desc: "Rudra is the biggest dance academy in East Delhi — 3 branches, 500+ students, 15+ years of excellence.",
        },
        {
          icon: "Heart",
          title: "AC Class Rooms",
          desc: "Learn in comfort! All our branches have fully air-conditioned, spacious, and professional-grade studios.",
        },
        {
          icon: "Users",
          title: "Special Batches for Ladies",
          desc: "Exclusive ladies-only batches available across all branches. Dance in a safe and comfortable environment.",
        },
        {
          icon: "MapPin",
          title: "3 Branches Near You",
          desc: "Laxmi Nagar (Metro Pillar 35), Shakarpur (Near Krishna Mandir), and West Guru Angad Nagar.",
        },
        {
          icon: "Clock",
          title: "Flexible Timings",
          desc: "Early morning 7AM to late evening 9PM, Monday to Sunday. Pick what fits your schedule.",
        },
      ],
    },

    gallery: {
      headline: "Life at Rudra",
      subheadline: "Our Students in Action",
      layout: "grid",
      items: [
        {
          src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=85&fit=crop",
          alt: "Hip Hop performance",
          category: "Hip Hop",
        },
        {
          src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=85&fit=crop",
          alt: "Bollywood class in session",
          category: "Bollywood",
        },
        {
          src: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=600&q=85&fit=crop",
          alt: "Semi-classical performance",
          category: "Classical",
        },
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85&fit=crop",
          alt: "Zumba batch",
          category: "Fitness",
        },
        {
          src: "https://images.unsplash.com/photo-1589754299029-d15ead059551?w=600&q=85&fit=crop",
          alt: "Bhangra group",
          category: "Bhangra",
        },
        {
          src: "https://images.unsplash.com/photo-1522642888367-8d98750c243c?w=600&q=85&fit=crop",
          alt: "Footwork training",
          category: "Training",
        },
        {
          src: "https://images.unsplash.com/photo-1592389949234-e4b1aff3b8f7?w=600&q=85&fit=crop",
          alt: "Annual showcase event",
          category: "Events",
        },
        {
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&fit=crop",
          alt: "Stage performance",
          category: "Events",
        },
      ],
    },

    testimonials: {
      items: [
        {
          name: "Priya Sharma",
          date: "January 2025",
          rating: 5,
          initials: "PS",
          review:
            "Suru mam is an incredible teacher! She's patient, energetic, and genuinely cares about every student's progress. My Bollywood has improved so much in just 2 months. The environment here is super welcoming!",
          tag: "Bollywood",
        },
        {
          name: "Rahul Mehta",
          date: "March 2025",
          rating: 5,
          initials: "RM",
          review:
            "Ankit Sir is a beast at Hip Hop! He breaks down complex moves so simply. The vibe at Rudra is unlike any other academy — it feels like a family. Best decision I made.",
          tag: "Hip Hop",
        },
        {
          name: "Meena Agarwal",
          date: "December 2024",
          rating: 5,
          initials: "MA",
          review:
            "Got my entire sangeet choreography done with Kartik Sir. So professional and creative — everyone at the wedding was asking who choreographed it! Highly highly recommend.",
          tag: "Wedding Choreography",
        },
        {
          name: "Arjun Kapoor",
          date: "February 2025",
          rating: 5,
          initials: "AK",
          review:
            "Joined for my son who is 7 years old. The kids batch is amazing — the instructors are so gentle and fun. My son actually WANTS to go every day. That says everything!",
          tag: "Kids Dance",
        },
        {
          name: "Sneha Gupta",
          date: "April 2025",
          rating: 5,
          initials: "SG",
          review:
            "Started Fitness Dance 3 months ago. Lost 6 kgs and gained so much confidence. It doesn't feel like exercise at all — it's pure fun!",
          tag: "Fitness Dance",
        },
        {
          name: "Vikram Singh",
          date: "November 2024",
          rating: 5,
          initials: "VS",
          review:
            "Rudra Dance Academy is the best in East Delhi, period. The quality of teaching, the performance opportunities, the discipline — all world class.",
          tag: "Contemporary",
        },
      ]
    },

    faq: {
      items: [
        {
          q: "Do I need prior dance experience to join?",
          a: "Absolutely not! Most of our students start as complete beginners. Our trainers are skilled at teaching from the very basics, and our friendly environment makes learning easy for everyone.",
        },
        {
          q: "What are the batch timings?",
          a: "We offer multiple batches from 7:00 AM to 9:00 PM, Monday through Sunday. Morning, afternoon, evening, and dedicated weekend batches are all available.",
        },
        {
          q: "How much do classes cost?",
          a: "Regular batch (3 days/week) is ₹1,300/month. Alternate batch (2 days/week) is ₹1,000/month. Wedding choreography packages are customized. Contact us for current offers.",
        },
        {
          q: "Is there a free trial class?",
          a: "Yes! We offer one FREE trial class before you commit. Come experience the energy, meet the trainers, and see if it's the right fit for you.",
        },
        {
          q: "What age group is suitable for kids dance?",
          a: "Our kids batch is open for children 4 years and above. We have age-appropriate curriculum that makes learning dance fun, safe, and enriching.",
        },
        {
          q: "Do you provide performance opportunities?",
          a: "Yes! We hold annual showcases, inter-academy competitions, and participate in cultural events. Every student gets the chance to perform on stage.",
        },
        {
          q: "Where exactly are your branches located?",
          a: "We have 3 branches in East Delhi: (1) Laxmi Nagar — D-31, Basement, Near Beni Sweets, Metro Pillar 35. (2) Shakarpur — Near Krishna Mandir. (3) West Guru Angad Nagar — 712 F/1, Mangal Bazar Road.",
        },
        {
          q: "Are there any current offers or discounts?",
          a: "Yes! We currently offer 15% off on new admissions. Contact us on WhatsApp or call to avail this limited-time offer.",
        },
      ]
    },

    contact: {
      headline: "Get in Touch",
      subheadline: "We'd love to hear from you",
      description: "Book a free trial, ask about our courses, or just say hi. We reply fast!",
      showContactInfo: true,
      showForm: false,
    },

    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2345678901234!2d77.2757!3d28.6303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb41d0e6745d%3A0x123456789abcdef!2sRudra%20Dance%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      branches: [
        {
          id: 1,
          label: "Branch 1 — Laxmi Nagar",
          badge: "Main Branch",
          address: "D-31, Basement, Street No. 2, Near Beni Sweets",
          landmark: "Near Metro Pillar No. 35",
          city: "Laxmi Nagar, New Delhi – 110092",
        },
        {
          id: 2,
          label: "Branch 2 — Shakarpur",
          badge: "Shakarpur",
          address: "Near Krishna Mandir",
          landmark: "",
          city: "Shakarpur, New Delhi",
        },
        {
          id: 3,
          label: "Branch 3 — West Guru Angad Nagar",
          badge: "Newly Opened!",
          address: "712 F/1, Mangal Bazar Road, West Guru Angad Nagar",
          landmark: "Near Gurudwara Road",
          city: "Laxmi Nagar, New Delhi – 110092",
        },
      ],
    },
  },
};
