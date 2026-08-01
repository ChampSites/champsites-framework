"use client";
// framework/components/ui/TestimonialCard.tsx
// Review / testimonial card with star rating, avatar, and source badge.

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@fw/utils/cn";
import { scaleIn, viewportOnce } from "@fw/constants/animations";
import type { TestimonialItem } from "@fw/types";

interface TestimonialCardProps {
  item: TestimonialItem;
  index?: number;
}

export function TestimonialCard({ item, index = 0 }: TestimonialCardProps) {
  const rating = item.rating ?? 5;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      transition={{ delay: (index % 3) * 0.1 }}
      className="bg-[var(--fw-bg)] rounded-[var(--fw-radius)] border border-[var(--fw-border)] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header: Avatar, Name, Stars */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          {item.avatar ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[var(--fw-surface)]">
              <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="48px" />
            </div>
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ background: "var(--fw-accent-gradient, var(--fw-accent))" }}
            >
              {item.initials ?? item.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div>
            <h4 className="font-semibold text-[var(--fw-primary)] leading-tight">{item.name}</h4>
            {(item.role || item.source) && (
              <p className="text-xs text-[var(--fw-muted)] mt-0.5 capitalize">
                {item.role || (item.source === "google" ? "Google Review" : item.source)}
              </p>
            )}
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex gap-0.5 pt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("w-3.5 h-3.5", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200")}
            />
          ))}
        </div>
      </div>

      {/* Review text */}
      <p className="text-[var(--fw-muted)] text-sm leading-relaxed flex-1 relative z-10 font-medium">
        &ldquo;{item.review}&rdquo;
      </p>

      {/* Footer: Pill tag & Icon */}
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-[var(--fw-border)]/50">
        {item.tag || item.source ? (
          <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-red-50 text-red-600">
            {item.tag || item.source}
          </span>
        ) : <div />}
        <Quote className="w-8 h-8 text-[var(--fw-border)] opacity-60" />
      </div>
    </motion.div>
  );
}
