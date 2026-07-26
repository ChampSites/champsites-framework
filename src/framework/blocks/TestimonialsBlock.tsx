"use client";
// framework/blocks/TestimonialsBlock.tsx
// Testimonials / reviews grid section.

import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { TestimonialCard } from "@fw/components/ui/TestimonialCard";
import type { TestimonialsBlockProps } from "@fw/types";

export function TestimonialsBlock({
  testimonials,
  ctx,
  headline = "What Our Clients Say",
  subheadline = "Testimonials",
  description,
}: TestimonialsBlockProps) {
  const { theme } = ctx;

  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="py-20 md:py-28"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={headline}
          subheadline={subheadline}
          description={description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name + i} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
