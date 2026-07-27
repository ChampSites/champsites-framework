// app/page.tsx
// Dynamic Page Assembler using BlockRegistry.
// Zero hardcoded components or business logic.

import { siteConfig } from "@clients/dental-wellness/site.config";
import { resolveConfig } from "@fw/lib/config-resolver";
import { BLOCK_REGISTRY } from "@fw/blocks/registry";

import { Navbar } from "@fw/components/layout/Navbar";
import { Footer } from "@fw/components/layout/Footer";
import type { BlockContext } from "@fw/types";

export default function HomePage() {
  const config = resolveConfig(siteConfig);
  const { sections, sectionOrder, theme } = config;

  const ctx: BlockContext = {
    theme,
    businessName: config.name,
    phone: config.phone,
    whatsapp: config.whatsapp,
    email: config.email,
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary ?? undefined,
  };

  return (
    <>
      <Navbar
        businessName={config.name}
        logo={config.logo ?? undefined}
        nav={config.nav}
        ctaPrimary={config.ctaPrimary}
        phone={config.phone}
        theme={theme}
      />

      <main id="main-content" tabIndex={-1}>
        {sectionOrder?.map((sectionKey) => {
          const blockMeta = BLOCK_REGISTRY[sectionKey];
          if (!blockMeta) return null;

          const BlockComponent = blockMeta.component;
          
          // Determine the config for this specific block
          const blockConfig = sectionKey === "stats" || sectionKey === "testimonials" || sectionKey === "faq" || sectionKey === "team"
            ? sections[sectionKey] // Array props
            : sections[sectionKey]; // Object props

          if (!blockConfig) return null;

          // For array-based blocks, we need to pass them down as the specific prop names
          // e.g., <StatsBlock stats={config} />, <TestimonialsBlock testimonials={config} />
          const propMap: Record<string, any> = {
            ctx,
            key: sectionKey,
          };

          if (sectionKey === "stats") propMap.stats = blockConfig;
          else if (sectionKey === "testimonials") propMap.testimonials = blockConfig;
          else if (sectionKey === "faq") propMap.faqs = blockConfig;
          else if (sectionKey === "team") propMap.members = blockConfig;
          else propMap.config = blockConfig;

          // Add defaults for some blocks that rely on headlines from the page level
          if (sectionKey === "contact") {
            propMap.address = config.address;
            propMap.phone = config.phone;
            propMap.phoneAlt = config.phoneAlt;
            propMap.email = config.email;
            propMap.hours = config.hours;
            propMap.social = config.social;
          }

          return <BlockComponent {...propMap} />;
        })}
      </main>

      <Footer
        businessName={config.name}
        tagline={config.tagline}
        footerTagline={config.footerTagline}
        address={config.address}
        phone={config.phone}
        phoneAlt={config.phoneAlt}
        email={config.email}
        hours={config.hours}
        mapsEmbed={config.mapsEmbed}
        social={config.social}
        footerLinks={config.footerLinks}
        ctaPrimary={config.ctaPrimary}
        theme={theme}
        showWatermark={config.showWatermark}
        schemaType={config.schemaType}
      />
    </>
  );
}
