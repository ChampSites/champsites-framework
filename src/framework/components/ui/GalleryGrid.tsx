"use client";
// framework/components/ui/GalleryGrid.tsx
// Responsive image gallery grid with optional category filter.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@fw/utils/cn";
import { fadeIn, viewportOnce } from "@fw/constants/animations";
import type { GalleryItem } from "@fw/types";

interface GalleryGridProps {
  items: GalleryItem[];
  categories?: string[];
}

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [active, setActive] = useState<string>("All");

  const allCategories = categories ?? ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[]))];

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="space-y-6">
      {/* Filter tabs */}
      {allCategories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {(["All", ...allCategories.filter((c) => c !== "All")]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-[var(--fw-accent)] text-white"
                  : "bg-[var(--fw-surface)] text-[var(--fw-muted)] hover:text-[var(--fw-accent)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.src}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="group relative aspect-square rounded-[var(--fw-radius)] overflow-hidden bg-[var(--fw-surface)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                loading="lazy"
              />

              {/* Caption overlay */}
              {item.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium">{item.caption}</p>
                </div>
              )}

              {/* Category badge */}
              {item.category && (
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--fw-accent)] text-white">
                    {item.category}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
