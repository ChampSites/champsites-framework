import type { SiteConfig } from "@fw/types/site.types";

export const siteConfig: SiteConfig = {
  name: "Dental Wellness Clinic",
  tagline: "Expert Dental Care in Purnia",
  logo: { src: "/clients/dental-wellness/brand/logo.png", alt: "Dental Wellness Logo" },
  favicon: "/clients/dental-wellness/brand/favicon.ico",
  phone: "08957493070",
  email: "dentalwellness1307@gmail.com",
  address: "1st FLOOR, KUBER PLAZA, Chitrawani Rd",
  city: "Purnia, Bihar 854301",
  hours: "Daily 11 AM – 8 PM",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114881.0416954274!2d87.40428585642457!3d25.772592556513567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9778732e499%3A0xc6c7d3d2a71d87f5!2sPurnia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",
  social: {
    whatsapp: "08957493070"
  },
  footerLinks: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Root Canal", href: "/#services" },
        { label: "Teeth Whitening", href: "/#services" },
        { label: "Dental Implants", href: "/#services" }
      ]
    }
  ],
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
    href: "tel:08957493070"
  },
  sections: {
    hero: {
      headline: "✨Real Smiles ,Real stories ✨",
      description: "Top-rated dental clinic in Purnia, Bihar.",
      ctaPrimary: { label: "Book Appointment", href: "tel:08957493070" },
      backgroundImage: { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format", alt: "Hero Background" }
    },
    about: {
      headline: "Your Smile is Our Priority",
      subheadline: "We are committed to providing world-class dental care in a comfortable environment.",
      content: "Our team of experts is dedicated to ensuring you have a pleasant experience.",
      image: { src: "/clients/dental-wellness/gallery/img4.jpg", alt: "Our Clinic" }
    },
    services: {
      headline: "Our Treatments & Services",
      subheadline: "Comprehensive care for your entire family",
      layout: "cards",
      items: [
        { id: "rct", title: "RCT (Root Canal)", description: "Painless single-sitting root canal treatment.", icon: "activity", image: {src: "https://media.istockphoto.com/id/474117482/photo/woman-to-the-dentist.webp?a=1&b=1&s=612x612&w=0&k=20&c=H3X59ShEEyvxQnZET0ovB3cOr_V5Xu1kjEnUhaDXHUo=", alt: "image"} },
        { id: "implants", title: "Dental Implant Fixing", description: "Permanent natural-looking teeth replacements.", icon: "shield-check", image: {src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=600&auto=format&fit=crop", alt: "image"} },
        { id: "straightening", title: "Straightening Teeth", description: "Clear aligners and braces for a perfect smile.", icon: "sparkles", image: {src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop", alt: "image"} },
        { id: "reshaping", title: "Tooth Reshaping", description: "Cosmetic contouring to improve tooth appearance.", icon: "activity", image: {src: "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?w=600&auto=format&fit=crop", alt: "image"} },
        { id: "extraction", title: "Wisdom Tooth Extraction", description: "Safe and painless removal of impacted teeth.", icon: "activity", image: {src: "https://images.unsplash.com/photo-1607278843240-419b8d83672d?w=600&auto=format&fit=crop", alt: "image"} },
        { id: "laser", title: "Laser Dentistry", description: "Advanced minimally invasive laser procedures.", icon: "sparkles", image: {src: "https://images.unsplash.com/photo-1684607633217-462056580c3c?q=80&w=1331&auto=format&fit=crop", alt: "image"} }
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
        name: "Mr. Amit Kumar",
        source: "google",
        review: "My RCT and capping experience was outstanding. The team was professional, cooperative, and handled everything with great care. The entire procedure was smooth stress-free. Highly recommend for quality dental care!",
        rating: 5,
      },
      {
        id: "t2",
        name: "Monu Kumar",
        source: "google",
        review: "My experience at Dental Wellness was amazing! The doctors correctly diagnosed my problem and completed the procedure pain-free. The clinic is exceptionally clean and equipped with modern technology. Highly recommended!",
        rating: 5,
      },
      {
        id: "t3",
        name: "Roshni Yadav",
        source: "google",
        review: "Dr. Simpi and Dr. Raj Rajeshwar are extremely professional. They provided a detailed explanation of my issues and fixed them with utmost care. I am incredibly happy with the checkup, cleaning, and RCT. Truly top-notch dentists!",
        rating: 5,
      }
    ],
    gallery: {
      headline: "Take a Tour of Our Clinic",
      subheadline: "State of the art facilities for your comfort",
      items: [
        { src: "/clients/dental-wellness/gallery/img3.jpg", alt: "Gallery Image 1" },
        { src: "/clients/dental-wellness/gallery/img5.jpg", alt: "Gallery Image 2" },
        { src: "/clients/dental-wellness/gallery/img6.jpg", alt: "Gallery Image 3" },
        { src: "/clients/dental-wellness/gallery/img.jpg", alt: "Gallery Image 4" },
        { src: "/clients/dental-wellness/gallery/img7.png", alt: "Gallery Image 5" },
      ]
    },
    team: [
      {
        id: "doc2",
        name: "Dr. Simpi Rai & Dr. Raj Rajeshwar",
        role: "Dental Surgeon",
        image: { src: "/clients/dental-wellness/team/img2.jpg", alt: "Dr. Neha" }
      },
      {
        id: "doc1",
        name: "Team",
        role: "Surgeons",
        image: { src: "/clients/dental-wellness/team/img.jpg", alt: "Dr. Anil" }
      },
    ]
  },
  plugins: ["whatsapp-chat"],
  announcement: {
    isActive: true,
    text: "🎉 Book an appointment today and get 20% off on your first RCT or cleaning! Call 08957493070 now.",
    backgroundColor: "#1D4ED8",
    textColor: "white"
  },
  sectionOrder: ["hero", "about", "services", "team", "gallery", "testimonials", "contact"]
};
