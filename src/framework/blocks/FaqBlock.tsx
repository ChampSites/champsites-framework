"use client";
// framework/blocks/FaqBlock.tsx
// FAQ section with accessible accordion.

import { motion } from "framer-motion";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { FaqAccordion } from "@fw/components/ui/FaqAccordion";
import { fadeUp, viewportOnce } from "@fw/constants/animations";
import type { FaqBlockProps } from "@fw/types";

export function FaqBlock({
  faqs,
  ctx,
  headline = "Frequently Asked Questions",
  subheadline = "FAQs",
  description,
}: FaqBlockProps) {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            headline={headline}
            subheadline={subheadline}
            description={description}
            className="mb-12"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <FaqAccordion items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
