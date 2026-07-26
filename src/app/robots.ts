// framework/app/robots.ts
// Generates robots.txt from the business config.

import type { MetadataRoute } from "next";
import { SiteConfig } from "@fw/config/business.config";
import { resolveConfig } from "@fw/lib/config-resolver";

export default function robots(): MetadataRoute.Robots {
  const config = resolveConfig(SiteConfig);
  const baseUrl = config.seo.siteUrl || "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
