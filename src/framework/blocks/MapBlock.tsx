"use client";
// framework/blocks/MapBlock.tsx
// Google Maps embed + optional multi-branch info cards.

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { Badge } from "@fw/components/ui/Badge";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@fw/constants/animations";
import type { MapBlockProps } from "@fw/types";

export function MapBlock({ config, ctx }: MapBlockProps) {
  const { businessName } = ctx;

  return (
    <section
      id="map"
      aria-label="Location map"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {config.headline && (
          <SectionHeader headline={config.headline} className="mb-12" />
        )}

        {/* Map embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden h-80 md:h-96 border border-[var(--fw-border)] mb-10"
        >
          <iframe
            src={config.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${businessName} on Google Maps`}
          />
        </motion.div>

        {/* Branch cards */}
        {config.branches && config.branches.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {config.branches.map((branch) => (
              <motion.div
                key={branch.id}
                variants={staggerItem}
                className="bg-white border border-[var(--fw-border)] rounded-[var(--fw-radius)] p-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--fw-accent)", opacity: 0.1 }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "var(--fw-accent)" }} aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm" style={{ color: "var(--fw-primary)" }}>
                      {branch.label}
                    </h3>
                    {branch.badge && <Badge variant="accent" size="sm">{branch.badge}</Badge>}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fw-muted)" }}>
                  {branch.address}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--fw-muted)" }}>
                  {branch.city}
                </p>
                {branch.landmark && (
                  <p className="text-xs mt-1 italic" style={{ color: "var(--fw-muted)", opacity: 0.7 }}>
                    {branch.landmark}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
