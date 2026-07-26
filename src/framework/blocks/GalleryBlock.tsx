"use client";
// framework/blocks/GalleryBlock.tsx
// Filterable image gallery section.

import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { GalleryGrid } from "@fw/components/ui/GalleryGrid";
import type { GalleryBlockProps } from "@fw/types";

export function GalleryBlock({ config, ctx }: GalleryBlockProps) {
  const { theme } = ctx;

  return (
    <section
      id="gallery"
      aria-label="Photo gallery"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          className="mb-12"
        />

        <GalleryGrid items={config.items} categories={config.categories} />
      </div>
    </section>
  );
}
