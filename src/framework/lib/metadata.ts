// framework/lib/metadata.ts
// Generates Next.js Metadata objects from a ResolvedConfig.
// Import and call in app/layout.tsx and any page that needs overrides.

import type { Metadata } from "next";
import type { ResolvedConfig } from "./config-resolver";

/** Generate root-level Metadata from a ResolvedConfig */
export function generateSiteMetadata(config: ResolvedConfig): Metadata {
  const { seo, name } = config;

  const metadataBase = seo.siteUrl ? new URL(seo.siteUrl) : undefined;

  return {
    metadataBase,
    title: {
      default: seo.title,
      template: `%s | ${name}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name }],
    creator: name,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: seo.locale,
      siteName: name,
      ...(seo.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      ...(seo.twitterHandle ? { creator: seo.twitterHandle } : {}),
      ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: config.favicon,
    },
  };
}
