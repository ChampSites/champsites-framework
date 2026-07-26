"use client";
// framework/components/ui/ServiceCard.tsx
// Card for a single service/course offering.

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./Badge";
import { cn } from "@fw/utils/cn";
import { scaleIn, viewportOnce } from "@fw/constants/animations";
import type { ServiceItem, CtaButton } from "@fw/types";

interface ServiceCardProps {
  item: ServiceItem;
  index?: number;
  ctaLabel?: string;
  onCtaClick?: (item: ServiceItem) => void;
}

export function ServiceCard({ item, index = 0, ctaLabel, onCtaClick }: ServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      transition={{ delay: (index % 4) * 0.08 }}
      className="group bg-white rounded-[var(--fw-radius)] border border-[var(--fw-border)] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {item.emoji && (
            <div className="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl">
              {item.emoji}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-lg text-[var(--fw-primary)] leading-snug">
            {item.title}
          </h3>
          {item.price && (
            <span className="text-sm font-bold text-[var(--fw-accent)] shrink-0">{item.price}</span>
          )}
        </div>

        <p className="text-sm text-[var(--fw-muted)] leading-relaxed flex-1">{item.description}</p>

        {/* Meta info */}
        {(item.duration || item.level || item.frequency) && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.duration && (
              <span className="text-xs bg-[var(--fw-surface)] text-[var(--fw-muted)] px-2.5 py-1 rounded-full">
                ⏱ {item.duration}
              </span>
            )}
            {item.level && (
              <span className="text-xs bg-[var(--fw-surface)] text-[var(--fw-muted)] px-2.5 py-1 rounded-full">
                📊 {item.level}
              </span>
            )}
            {item.frequency && (
              <span className="text-xs bg-[var(--fw-surface)] text-[var(--fw-muted)] px-2.5 py-1 rounded-full">
                📅 {item.frequency}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="muted" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* CTA */}
        {(ctaLabel || item.cta) && (
          <button
            onClick={() => onCtaClick?.(item)}
            className="mt-auto w-full text-center text-sm font-semibold py-2.5 rounded-lg border-2 border-[var(--fw-accent)] text-[var(--fw-accent)] hover:bg-[var(--fw-accent)] hover:text-white transition-all duration-200"
          >
            {ctaLabel ?? item.cta?.label ?? "Learn More"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
