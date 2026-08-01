import type { SiteConfig } from "@fw/types/site.types";

export const siteConfig: SiteConfig = {
  name: "Shri Ram Diagnostic and Dental Hospital",
  tagline: "RGHS, CS & EX Approved Dental Hospital",
  logo: { src: "/clients/shri-ram/brand/logo.png", alt: "Shri Ram Diagnostic and Dental Hospital Logo" },
  favicon: "/clients/shri-ram/brand/favicon.ico",
  phone: "09785354522",
  phoneAlt: "0141-2654522",
  // email: "contact@shreeramdentaljaipur.com", // Placeholder as small clinics rarely use public emails
  address: "Shop No. 7-8, Krishna Market A, New Loha Mandi, Road No. 14",
  city: "Jaipur, Rajasthan",
  hours: "Daily 9:00 AM – 8:00 PM",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0416954274!2d75.70428585642457!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4d8x!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",
  social: {
    whatsapp: "09785354522"
  },
  theme: "medical",
  seo: {
    title: "Shri Ram Diagnostic and Dental Hospital | Top Rated in Jaipur",
    description: "4.9⭐ Rated Diagnostic & Dental Hospital in Jaipur. RGHS and CS & EX Approved. Trusted by 649+ patients for comprehensive healthcare."
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Doctors", href: "/#team" },
    { label: "Contact", href: "/#contact" }
  ],
  ctaPrimary: {
    label: "Book Appointment",
    href: "tel:09785354522"
  },
  sections: {
    hero: {
      headline: "Advanced Diagnostics & Dental Care in Jaipur",
      description: "Trusted by 649+ patients with a 4.9⭐ Rating. We bring together expert dental care and comprehensive diagnostic services under one roof.",
      ctaPrimary: { label: "Book Appointment", href: "tel:09785354522" },
      backgroundImage: { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1074&auto=format", alt: "Hero Background" },
      quickStats: [
        { label: "Google Rating", value: "4.9 ⭐" },
        { label: "Happy Patients", value: "649+" },
        { label: "Govt. Approved", value: "RGHS / CS & EX" }
      ]
    },
    about: {
      headline: "Why Choose Us?",
      subheadline: "Your Health & Smile, Our Priority",
      content: "Shri Ram Diagnostic and Dental Hospital is a premier RGHS and CS & EX approved facility in Jaipur. We are dedicated to providing state-of-the-art diagnostic services and top-tier dental treatments in a comfortable and safe environment.",
      image: { src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1074&auto=format", alt: "Hospital Setup" },
      highlights: [
        { icon: "shield", title: "Govt. Approved", desc: "RGHS & CS/EX panel approved" },
        { icon: "star", title: "Top Rated", desc: "4.9 stars from 649+ reviews" },
        { icon: "activity", title: "Dual Speciality", desc: "Diagnostics and Dental together" }
      ]
    },
    services: {
      headline: "Our Services",
      subheadline: "Comprehensive Dental & Diagnostic Care",
      layout: "cards",
      items: [
        { id: "rct", title: "Root Canal (RCT)", description: "Save your natural tooth with painless root canal treatment.", icon: "activity", image: {src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format", alt: "RCT"} },
        { id: "ortho", title: "Orthodontic Wiring", description: "Straighten misaligned teeth using braces and wire.", icon: "sparkles", image: {src: "https://images.unsplash.com/photo-1720685193964-4529228a33c1?q=80&w=1074&auto=format&fit=crop", alt: "Braces"} },
        { id: "implants", title: "Dental Implants", description: "Fixed tooth replacement with screws in the jawbone.", icon: "shield-check", image: {src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&auto=format", alt: "Implant"} },
        { id: "capping", title: "Capping & Dentures", description: "Acrylic, metallic, porcelain caps and fixed dentures.", icon: "sparkles", image: {src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format", alt: "Capping"} },
        { id: "xray", title: "RVG Digital X-Ray", description: "Highly accurate digital X-Ray facility via RVG.", icon: "activity", image: {src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format", alt: "X-Ray"} },
        { id: "cleaning", title: "Ultrasonic Cleaning", description: "Painless teeth cleaning via ultrasonic machine and cavity filling.", icon: "sparkles", image: {src: "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?w=600&auto=format", alt: "Cleaning"} }
      ]
    },
    team: {
      headline: "Meet Our Team",
      subheadline: "Our Experts",
      items: [
      {
        id: "doc1",
        name: "Dr. K.K. Saini",
        role: "BDS, MDS (RUHS), MIDA - Senior Obstructive Dental Surgeon",
        image: { src: "https://images.jdmagicbox.com/comp/jaipur/p6/0141px141.x141.170505120517.y9p6/catalogue/shree-ram-diagnostic-and-dental-hospital-macheda-jaipur-dental-hospitals-43a5fxk6uk.jpg", alt: "Dr. K.K Saini"  }
      },
      {
        id: "doc2",
        name: "Dr. Sharda Saini",
        role: "BDS (RUHS), MIDA - Senior Dental Surgeon",
        image: { src: "/clients/shri-ram/team/dr-sharda.png", alt: "Dr. Sharda Saini" }
      },
       {
        id: "doc3",
        name: "Expert Doctors Panel",
        role: "Dental Surgeons",
        image: { src: "https://images.jdmagicbox.com/v2/comp/jaipur/p6/0141px141.x141.170505120517.y9p6/catalogue/shree-ram-diagnostic-and-dental-hospital-macheda-jaipur-dental-hospitals-ihj5wxavvi.jpg", alt: "Doctors Team" }
      }
    ]
  },
    gallery: {
      headline: "Take a Tour of Our Clinic",
      subheadline: "State of the art diagnostic and dental equipment",
      items: [
        { src: "/clients/shri-ram/gallery/img1.jpg", alt: "Clinic Room" },
        { src: "/clients/shri-ram/gallery/img2.jpg", alt: "Equipment" },
        { src: "/clients/shri-ram/gallery/img3.jpg", alt: "Dental Chair" },
        { src: "/clients/shri-ram/gallery/img4.jpg", alt: "Laboratory" },
        { src: "/clients/shri-ram/gallery/img5.jpg", alt: "Clinic" }
      ]
    },
    testimonials: {
      items: [
        {
          id: "t1",
          name: "himanshu choudhary",
          source: "google",
          review: "loved it, everything was nice. staff behavior was good... first thing is RGHS is available even though most hospital are refusing for it and my mother got the treatment without a penny. i was in doubt at some point that they will charge something, some hidden charges but they didn't take even 1 rupee...",
          rating: 5,
        },
        {
          id: "t2",
          name: "Mahender Besh",
          source: "google",
          review: "Shree Ram dental Hospital is one of the best healthcare centers near 14 Nos. area. The hospital is well-equipped with modern facilities and maintains high standards... Dr. K. K. Saini is an excellent doctor – highly skilled, professional, and very caring towards patients.",
          rating: 5,
        },
        {
          id: "t3",
          name: "Priyanka",
          source: "google",
          review: "The dentist is highly skilled and caring. Treatment is done with great precision and comfort. The hospital maintains excellent hygiene, uses modern equipment, and ensures a painless experience. I truly appreciate the patience, professionalism, and friendly approach.",
          rating: 5,
        },
        {
          id: "t4",
          name: "Anoop Sonkriya",
          source: "google",
          review: "I had an excellent experience with the Orthodontics Department. From my very first consultation, the doctors explained every step of the treatment clearly and answered all my questions patiently. The staff was professional, supportive, and always made me feel comfortable.",
          rating: 5,
        },
        {
          id: "t5",
          name: "Aryan singh Rao",
          source: "google",
          review: "Hospital amenities is decent but staff and doctor nature is very polite. If you facing dental issue i recommend this hospital 🏥",
          rating: 5,
        }
      ]
    },
    faq: {
      items: [
        { q: "Is Shri Ram Hospital RGHS approved?", a: "Yes, we are a fully RGHS and CS & EX approved hospital." },
        { q: "Do you offer both diagnostic and dental services?", a: "Yes, we provide comprehensive dental treatments and advanced diagnostic facilities under one roof." },
        { q: "Do I need to book an appointment beforehand?", a: "While walk-ins are welcome, we recommend booking an appointment to avoid waiting times." },
        { q: "What are your operational hours?", a: "We are open daily from 9:00 AM to 8:00 PM." }
      ]
    },
    contact: {
      headline: "Get in Touch",
      subheadline: "Book your appointment or inquire about our services",
      showForm: true,
      showContactInfo: true
    }
  },
  plugins: ["whatsapp-chat", "google-translate"],
  announcement: {
    isActive: true,
    text: "🎉 RGHS Card Holders: Get all types of Dental Facilities absolutely FREE! (Cashless treatment available)",
    backgroundColor: "#ef4444", // Red color to match their poster vibe
    textColor: "white"
  },
  sectionOrder: ["hero", "about", "services", "team", "gallery", "testimonials", "faq", "contact"]
};
