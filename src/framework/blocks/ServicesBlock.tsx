"use client";
// framework/blocks/ServicesBlock.tsx
// Displays services/courses as a responsive card grid.

import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { ServiceCard } from "@fw/components/ui/ServiceCard";
import { buildWhatsAppUrl } from "@fw/utils/format";
import type { ServicesBlockProps } from "@fw/types";

export function ServicesBlock({ config, ctx }: ServicesBlockProps) {
  const handleCta = () => {
    if (ctx.whatsapp) {
      window.open(buildWhatsAppUrl(ctx.whatsapp, `Hi! I'm interested in enrolling at ${ctx.businessName}.`), "_blank");
    }
  };

  return (
    <section
      id="services"
      aria-label="Services and courses"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          description={config.description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {config.items.map((item, i) => (
            <ServiceCard
              key={item.id}
              item={item}
              index={i}
              ctaLabel="Enquire Now"
              onCtaClick={handleCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
