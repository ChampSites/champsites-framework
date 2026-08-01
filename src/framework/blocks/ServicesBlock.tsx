"use client";
// framework/blocks/ServicesBlock.tsx
// Displays services/courses as a responsive bento grid on desktop, carousel on mobile.

import { useState } from "react";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { ServiceCard } from "@fw/components/ui/ServiceCard";
import { buildWhatsAppUrl } from "@fw/utils/format";
import type { ServicesBlockProps } from "@fw/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServicesBlock({ config, ctx }: ServicesBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCta = () => {
    if (ctx.whatsapp) {
      window.open(buildWhatsAppUrl(ctx.whatsapp, `Hi! I'm interested in enrolling at ${ctx.businessName}.`), "_blank");
    }
  };

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % config.items.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + config.items.length) % config.items.length);

  // Bento grid spans (some wide, some standard)
  const bentoClasses = [
    "md:col-span-2", 
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-1",
  ];

  return (
    <section
      id="services"
      aria-label="Services and courses"
      className="py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          description={config.description}
          className="mb-14"
        />

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {config.items.map((item, i) => {
            const spanClass = bentoClasses[i % bentoClasses.length];
            return (
              <div key={item.id} className={spanClass}>
                <ServiceCard
                  item={item}
                  index={i}
                  ctaLabel="Enquire Now"
                  onCtaClick={handleCta}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full relative">
             <div className="w-full">
                <ServiceCard
                  item={config.items[activeIndex]}
                  index={activeIndex}
                  ctaLabel="Enquire Now"
                  onCtaClick={handleCta}
                />
             </div>
          </div>
          {/* Chevron Controls */}
          {config.items.length > 1 && (
            <div className="flex gap-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--fw-surface)] text-[var(--fw-primary)] border border-[var(--fw-border)] shadow-md hover:bg-[var(--fw-accent)] hover:text-white transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--fw-surface)] text-[var(--fw-primary)] border border-[var(--fw-border)] shadow-md hover:bg-[var(--fw-accent)] hover:text-white transition-colors"
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
