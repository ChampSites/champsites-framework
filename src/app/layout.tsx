// app/layout.tsx
// Framework-powered root layout.

import type { Metadata } from "next";
import "./globals.css";

// ─── Dynamic Config Import (Environment Variable Approach) ─────────────────
import { siteConfig } from "@fw/lib/active-client";
import { resolveConfig } from "@fw/lib/config-resolver";
import { generateSiteMetadata } from "@fw/lib/metadata";
import { generateJsonLd, serializeJsonLd } from "@fw/lib/jsonld";
import { themeToCSS } from "@fw/themes";
import { cn } from "../framework/utils/cn";
import { PluginRenderer } from "@fw/plugins/PluginRenderer";
import { AnnouncementBanner } from "@fw/plugins/AnnouncementBanner";

const config = resolveConfig(siteConfig);

export const metadata: Metadata = generateSiteMetadata(config);

function getGoogleFontsUrl(fonts: { heading: string; body: string }): string {
  const unique = new Set([fonts.heading, fonts.body]);
  const families = Array.from(unique)
    .map((f) => {
      const encoded = f.replace(/ /g, "+");
      return `family=${encoded}:wght@400;500;600;700;800`;
    })
    .join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateJsonLd(config);
  const cssVars = themeToCSS(config.theme);
  const fontsUrl = getGoogleFontsUrl(config.theme.fonts);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontsUrl} rel="stylesheet" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              ${cssVars}
              :root {
                --font-heading: "${config.theme.fonts.heading}", Georgia, serif;
                --font-body:    "${config.theme.fonts.body}", system-ui, -apple-system, sans-serif;
              }
              h1,h2,h3,h4,h5,h6 {
                font-family: "${config.theme.fonts.heading}", Georgia, serif;
              }
              body {
                font-family: "${config.theme.fonts.body}", system-ui, -apple-system, sans-serif;
                background-color: ${config.theme.colors.bg};
                color: ${config.theme.colors.primary};
              }
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />

        {config.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${config.googleAnalyticsId}');`,
              }}
            />
          </>
        )}
      </head>
      <body className={cn('min-h-screen', 'antialiased')} suppressHydrationWarning>
        {config.announcement?.isActive && (
          <AnnouncementBanner {...config.announcement} />
        )}
        {children}
        <PluginRenderer plugins={config.plugins} configContext={{ whatsapp: config.social.whatsapp, businessName: config.name }} />
      </body>
    </html>
  );
}
