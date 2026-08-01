// framework/types/block.types.ts
// Typed props for every block component. Blocks only accept these — never raw SiteConfig.

import type { ThemeTokens, ThemeName } from "./theme.types";
import type {
  HeroConfig,
  AboutConfig,
  ServicesConfig,
  FeaturesConfig,
  GalleryConfig,
  StatItem,
  TestimonialItem,
  FaqItem,
  PricingConfig,
  TeamMember,
  CtaConfig,
  ContactConfig,
  MapConfig,
  BlogConfig,
  CtaButton,
  SocialLinks,
  NavLink,
  FooterLinkGroup,
} from "./site.types";

/** Shared context every block receives */
export interface BlockContext {
  theme: ThemeTokens;
  businessName: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  ctaPrimary: CtaButton;
  ctaSecondary?: CtaButton;
}

// ─── Block Props ──────────────────────────────────────────────────────────────

export interface HeroBlockProps {
  config: HeroConfig;
  ctx: BlockContext;
}

export interface AboutBlockProps {
  config: AboutConfig;
  ctx: BlockContext;
}

export interface ServicesBlockProps {
  config: ServicesConfig;
  ctx: BlockContext;
}

export interface FeaturesBlockProps {
  config: FeaturesConfig;
  ctx: BlockContext;
}

export interface GalleryBlockProps {
  config: GalleryConfig;
  ctx: BlockContext;
}

export interface StatsBlockProps {
  stats: StatItem[];
  ctx: BlockContext;
}

export interface TestimonialsBlockProps {
  testimonials: TestimonialItem[];
  ctx: BlockContext;
  headline?: string;
  subheadline?: string;
  description?: string;
}

export interface FaqBlockProps {
  faqs: FaqItem[];
  ctx: BlockContext;
  headline?: string;
  subheadline?: string;
  description?: string;
}

export interface PricingBlockProps {
  config: PricingConfig;
  ctx: BlockContext;
}

export interface CtaBlockProps {
  config: CtaConfig;
  ctx: BlockContext;
}

export interface ContactBlockProps {
  config: ContactConfig;
  ctx: BlockContext;
  address: string;
  phone: string;
  phoneAlt?: string;
  email?: string;
  hours?: string;
  social?: SocialLinks;
  mapsEmbed?: string;
}

export interface MapBlockProps {
  config: MapConfig;
  ctx: BlockContext;
}

export interface TeamBlockProps {
  members: TeamMember[];
  ctx: BlockContext;
  headline?: string;
  subheadline?: string;
}

export interface BlogBlockProps {
  config: BlogConfig;
  ctx: BlockContext;
}

// ─── Layout Props ─────────────────────────────────────────────────────────────

export interface NavbarProps {
  businessName: string;
  logo?: { src: string; alt: string };
  nav: NavLink[];
  ctaPrimary: CtaButton;
  phone?: string;
  theme: ThemeTokens;
  showTranslate?: boolean;
}

export interface FooterProps {
  businessName: string;
  tagline?: string;
  footerTagline?: string;
  address: string;
  phone: string;
  phoneAlt?: string;
  email?: string;
  hours?: string;
  mapsEmbed?: string;
  social?: SocialLinks;
  footerLinks?: FooterLinkGroup[];
  ctaPrimary: CtaButton;
  theme: ThemeTokens;
  schemaType?: string;
  showWatermark?: boolean;
}
