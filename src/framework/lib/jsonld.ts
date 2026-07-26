// framework/lib/jsonld.ts
// Generates structured JSON-LD schema from a ResolvedConfig.
// Supports LocalBusiness, DanceSchool, Restaurant, MedicalBusiness, etc.

import type { ResolvedConfig } from "./config-resolver";

interface JsonLdObject {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

/** Generates the appropriate JSON-LD schema object for the business. */
export function generateJsonLd(config: ResolvedConfig): JsonLdObject {
  const base: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": config.schemaType,
    name: config.name,
    description: config.seo.description,
    url: config.seo.siteUrl || undefined,
    telephone: config.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address,
      addressLocality: config.city,
      postalCode: config.pincode || undefined,
      addressCountry: config.seo.locale?.includes("IN") ? "IN" : "US",
    },
    ...(config.hours ? { openingHours: config.hours } : {}),
    ...(config.email ? { email: config.email } : {}),
    ...(config.social.instagram ? { sameAs: buildSameAs(config) } : {}),
    ...(config.logo ? { image: config.logo.src } : {}),
  };

  // Merge any extra schema properties defined in the config
  return { ...base, ...config.schemaExtras };
}

function buildSameAs(config: ResolvedConfig): string[] {
  const { social } = config;
  return [
    social.instagram,
    social.facebook,
    social.youtube,
    social.twitter,
    social.linkedin,
  ].filter(Boolean);
}

/** Serializes a JSON-LD object to a string safe for dangerouslySetInnerHTML */
export function serializeJsonLd(schema: JsonLdObject): string {
  return JSON.stringify(schema);
}
