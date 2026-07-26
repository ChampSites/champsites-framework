// framework/lib/config-resolver.ts
// Merges: defaultConfig ← industryPreset ← SiteConfig → ResolvedConfig
// ResolvedConfig is what the app layer consumes — fully typed, no nulls in critical fields.

import type { SiteConfig, SectionKey } from "@fw/types";
import type { ThemeTokens } from "@fw/types";
import { resolveTheme } from "@fw/themes";

export interface ResolvedConfig {
  // All fields are non-optional after resolution
  name: string;
  tagline: string;
  subTagline: string;
  logo: { src: string; alt: string } | null;
  favicon: string;

  phone: string;
  phoneAlt: string;
  email: string;
  whatsapp: string;
  address: string;
  city: string;
  pincode: string;
  landmark: string;
  mapsEmbed: string;
  hours: string;

  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
    linkedin: string;
    whatsapp: string;
  };

  theme: ThemeTokens;

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    siteUrl: string;
    locale: string;
    twitterHandle: string;
  };

  nav: { label: string; href: string; external?: boolean }[];
  ctaPrimary: { label: string; href: string; external?: boolean; icon?: string };
  ctaSecondary: { label: string; href: string; external?: boolean; icon?: string } | null;
  footerLinks: { title: string; links: { label: string; href: string }[] }[];
  footerTagline: string;

  sections: SiteConfig["sections"];
  sectionOrder: SectionKey[];

  schemaType: string;
  schemaExtras: Record<string, unknown>;
  googleAnalyticsId: string;
}

/** Default section order if not specified in config */
const DEFAULT_SECTION_ORDER: SectionKey[] = [
  "hero", "stats", "services", "about", "features",
  "gallery", "testimonials", "pricing", "faq", "team",
  "cta", "map", "blog", "contact",
];

/**
 * Resolves a SiteConfig into a fully-hydrated ResolvedConfig.
 * Merges with an optional industryPreset partial config.
 */
export function resolveConfig(
  config: SiteConfig,
  preset?: Partial<SiteConfig>
): ResolvedConfig {
  const merged: SiteConfig = {
    ...preset,
    ...config,
    social: { ...preset?.social, ...config.social },
    sections: { ...preset?.sections, ...config.sections },
    seo: { ...preset?.seo, ...config.seo },
  };

  const theme = resolveTheme(merged.theme);

  // Apply optional brand color overrides onto the resolved theme
  if (merged.brandColors?.primary) {
    theme.colors.primary = merged.brandColors.primary;
  }
  if (merged.brandColors?.accent) {
    theme.colors.accent = merged.brandColors.accent;
    theme.colors.accentDark = merged.brandColors.accent;
  }

  // Only include sections that have data AND are in the order list
  const configuredSections = new Set<string>(Object.keys(merged.sections || {}));
  const resolvedOrder = (merged.sectionOrder ?? DEFAULT_SECTION_ORDER).filter(
    (key) => configuredSections.has(key)
  );

  return {
    name: merged.name,
    tagline: merged.tagline,
    subTagline: merged.subTagline ?? "",
    logo: merged.logo ? { src: merged.logo.src, alt: merged.logo.alt } : null,
    favicon: merged.favicon ?? "/favicon.ico",

    phone: merged.phone,
    phoneAlt: merged.phoneAlt ?? "",
    email: merged.email ?? "",
    whatsapp: merged.whatsapp ?? merged.phone.replace(/\D/g, ""),
    address: merged.address,
    city: merged.city,
    pincode: merged.pincode ?? "",
    landmark: merged.landmark ?? "",
    mapsEmbed: merged.mapsEmbed ?? "",
    hours: merged.hours ?? "",

    social: {
      instagram: merged.social?.instagram ?? "",
      facebook: merged.social?.facebook ?? "",
      youtube: merged.social?.youtube ?? "",
      twitter: merged.social?.twitter ?? "",
      linkedin: merged.social?.linkedin ?? "",
      whatsapp: merged.social?.whatsapp ?? merged.whatsapp ?? "",
    },

    theme,

    seo: {
      title: merged.seo.title,
      description: merged.seo.description,
      keywords: merged.seo.keywords ?? [],
      ogImage: merged.seo.ogImage ?? "",
      siteUrl: merged.seo.siteUrl ?? "",
      locale: merged.seo.locale ?? "en_US",
      twitterHandle: merged.seo.twitterHandle ?? "",
    },

    nav: merged.nav,
    ctaPrimary: merged.ctaPrimary,
    ctaSecondary: merged.ctaSecondary ?? null,
    footerLinks: merged.footerLinks ?? [],
    footerTagline: merged.footerTagline ?? merged.tagline,

    sections: merged.sections,
    sectionOrder: resolvedOrder,

    schemaType: merged.schemaType ?? "LocalBusiness",
    schemaExtras: merged.schemaExtras ?? {},
    googleAnalyticsId: merged.googleAnalyticsId ?? "",
  };
}
