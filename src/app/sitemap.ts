// framework/app/sitemap.ts
// Generates a dynamic XML sitemap from the business config.

import type { MetadataRoute } from "next";
import { SiteConfig } from "@fw/config/business.config";
import { resolveConfig } from "@fw/lib/config-resolver";

export default function sitemap(): MetadataRoute.Sitemap {
  const config = resolveConfig(SiteConfig);
  const baseUrl = config.seo.siteUrl || "https://example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
