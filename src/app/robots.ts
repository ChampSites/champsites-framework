// framework/app/robots.ts
// Generates robots.txt from the business config.

import type { MetadataRoute } from "next";
import { siteConfig } from "@clients/dental-wellness/site.config";
import { resolveConfig } from "@fw/lib/config-resolver";

export default function robots(): MetadataRoute.Robots {
  const config = resolveConfig(siteConfig);
  const baseUrl = config.seo.siteUrl || "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
