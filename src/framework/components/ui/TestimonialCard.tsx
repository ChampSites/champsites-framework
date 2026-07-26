"use client";
// framework/components/ui/TestimonialCard.tsx
// Review / testimonial card with star rating, avatar, and source badge.

import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
      className="bg-white rounded-[var(--fw-radius)] border border-[var(--fw-border)] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn("w-4 h-4", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200")}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[var(--fw-muted)] text-sm leading-relaxed flex-1">&ldquo;{item.review}&rdquo;</p>

      {/* Footer: avatar + name + tag */}
      <div className="flex items-center gap-3 pt-2 border-t border-[var(--fw-border)]">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ background: "var(--fw-accent-gradient, var(--fw-accent))" }}
        >
          {item.initials ?? item.name.slice(0, 2).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--fw-primary)] truncate">{item.name}</p>
          <div className="flex items-center gap-2">
            {item.role && (
              <p className="text-xs text-[var(--fw-muted)] truncate">{item.role}</p>
            )}
            {item.date && (
              <p className="text-xs text-[var(--fw-muted)]/60 truncate">{item.date}</p>
            )}
          </div>
        </div>

        {item.tag && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--fw-surface)] text-[var(--fw-accent)] shrink-0">
            {item.tag}
          </span>
        )}
      </div>
    </motion.div>
  );
}
