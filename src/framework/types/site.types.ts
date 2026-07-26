// framework/types/site.types.ts
// Master configuration interface — the single source of truth that drives every component.

import type { ThemeName } from "./theme.types";

// ─── Primitives ──────────────────────────────────────────────────────────────

export interface ImageSource {
  /** Public path, CDN URL, or undefined (falls back to placeholder) */
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CtaButton {
  label: string;
  /** Full href, tel:, mailto:, wa.me/, or anchor #id */
  href: string;
  /** Opens in new tab */
  external?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: string; // Lucide icon name
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
  linkedin?: string;
  whatsapp?: string;
}

// ─── Section Config Shapes ────────────────────────────────────────────────────

export interface HeroConfig {
  headline: string;
  subheadline?: string;
  description: string;
  badge?: string;
  offer?: string;
  ctaPrimary?: CtaButton;
  ctaSecondary?: CtaButton;
  /** Image shown on the right / as background for image-style heroes */
  image?: ImageSource;
  /** Quick stat pills shown below the CTAs */
  quickStats?: { label: string; value: string }[];
  /** Enable video background (URL to mp4) */
  videoUrl?: string;
}

export interface AboutConfig {
  headline: string;
  subheadline?: string;
  body: string;
  image?: ImageSource;
  highlights?: { icon: string; title: string; desc: string }[];
  cta?: CtaButton;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  duration?: string;
  level?: string;
  frequency?: string;
  price?: string;
  image?: ImageSource;
  icon?: string;
  color?: string;
  emoji?: string;
  tags?: string[];
  cta?: CtaButton;
}

export interface ServicesConfig {
  headline: string;
  subheadline?: string;
  description?: string;
  items: ServiceItem[];
  layout?: "grid" | "list" | "cards";
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  color?: string;
}

export interface FeaturesConfig {
  headline: string;
  subheadline?: string;
  description?: string;
  items: FeatureItem[];
  layout?: "grid" | "alternating";
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
  width?: number;
  height?: number;
}

export interface GalleryConfig {
  headline: string;
  subheadline?: string;
  items: GalleryItem[];
  layout?: "masonry" | "grid" | "slider";
  categories?: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: string;
  description?: string;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  avatar?: string;
  /** Two-letter fallback initials when no avatar image */
  initials?: string;
  rating?: number;
  review: string;
  date?: string;
  source?: "google" | "facebook" | "instagram" | string;
  tag?: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: CtaButton;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingConfig {
  headline: string;
  subheadline?: string;
  description?: string;
  tiers: PricingTier[];
  disclaimer?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: ImageSource;
  initials?: string;
  social?: SocialLinks;
  specialties?: string[];
}

export interface CtaConfig {
  headline: string;
  subheadline?: string;
  description?: string;
  primary: CtaButton;
  secondary?: CtaButton;
  backgroundImage?: ImageSource;
  style?: "dark" | "accent" | "gradient";
}

export interface ContactField {
  type: "text" | "email" | "phone" | "textarea" | "select";
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // for select
}

export interface ContactConfig {
  headline: string;
  subheadline?: string;
  description?: string;
  formFields?: ContactField[];
  /** Action endpoint for form submission (or just show contact info) */
  formAction?: string;
  showForm?: boolean;
  showContactInfo?: boolean;
}

export interface MapConfig {
  headline?: string;
  embedUrl: string;
  branches?: BranchInfo[];
}

export interface BranchInfo {
  id: number;
  label: string;
  badge?: string;
  address: string;
  landmark?: string;
  city: string;
  phone?: string;
  hours?: string;
  mapsUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  image?: ImageSource;
  href: string;
  tags?: string[];
  readingTime?: string;
}

export interface BlogConfig {
  headline: string;
  subheadline?: string;
  posts: BlogPost[];
  cta?: CtaButton;
}

// ─── Section Keys ─────────────────────────────────────────────────────────────

export type SectionKey =
  | "hero"
  | "about"
  | "services"
  | "features"
  | "gallery"
  | "stats"
  | "testimonials"
  | "faq"
  | "pricing"
  | "cta"
  | "contact"
  | "map"
  | "team"
  | "blog";

// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  /** Absolute URL of the OG image */
  ogImage?: string;
  /** Canonical site URL, e.g. https://example.com */
  siteUrl?: string;
  locale?: string;
  twitterHandle?: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

// ─── Master Config ────────────────────────────────────────────────────────────

export interface SiteConfig {
  // ── Identity ────────────────────────────────────────────────────
  name: string;
  tagline: string;
  subTagline?: string;
  logo?: ImageSource;
  favicon?: string;

  // ── Contact ─────────────────────────────────────────────────────
  phone: string;
  phoneAlt?: string;
  email?: string;
  whatsapp?: string;
  address: string;
  city: string;
  pincode?: string;
  landmark?: string;
  mapsEmbed?: string;
  hours?: string;

  // ── Social ──────────────────────────────────────────────────────
  social: SocialLinks;

  // ── Theme & Branding ────────────────────────────────────────────
  theme: ThemeName;
  /** Optional overrides on top of the selected theme */
  brandColors?: {
    primary?: string;
    accent?: string;
  };
  typography?: {
    heading?: string;
    body?: string;
  };

  // ── SEO ─────────────────────────────────────────────────────────
  seo: SeoConfig;

  // ── Navigation ──────────────────────────────────────────────────
  nav: NavLink[];
  ctaPrimary: CtaButton;
  ctaSecondary?: CtaButton;
  footerLinks?: FooterLinkGroup[];
  footerTagline?: string;

  // ── Content Sections (all optional) ─────────────────────────────
  sections: {
    hero?: HeroConfig;
    about?: AboutConfig;
    services?: ServicesConfig;
    features?: FeaturesConfig;
    gallery?: GalleryConfig;
    stats?: StatItem[];
    testimonials?: TestimonialItem[];
    faq?: FaqItem[];
    pricing?: PricingConfig;
    team?: TeamMember[];
    cta?: CtaConfig;
    contact?: ContactConfig;
    map?: MapConfig;
    blog?: BlogConfig;
  };

  // ── Page Assembly ────────────────────────────────────────────────
  /** Defines the order sections appear on the homepage */
  sectionOrder?: SectionKey[];

  // ── JSON-LD Schema ───────────────────────────────────────────────
  schemaType?:
    | "LocalBusiness"
    | "DanceSchool"
    | "Restaurant"
    | "CafeOrCoffeeShop"
    | "MedicalBusiness"
    | "LegalService"
    | "GymOrHealthClub"
    | "BeautySalon"
    | "RealEstateAgent"
    | "LodgingBusiness"
    | "Organization"
    | string;

  /** Business-specific attributes for JSON-LD (e.g. aggregateRating) */
  schemaExtras?: Record<string, unknown>;

  // ── Google Analytics / Tracking (optional) ───────────────────────
  googleAnalyticsId?: string;
}
