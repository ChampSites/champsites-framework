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

      {/* Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => {
            // Bento grid logic: create varied block sizes
            const bentoClasses = [
              "md:col-span-2 md:row-span-2", // Large square/tall block
              "md:col-span-1 md:row-span-1", // Standard
              "md:col-span-1 md:row-span-1", // Standard
              "md:col-span-2 md:row-span-1", // Wide block
              "md:col-span-1 md:row-span-1", // Standard
              "md:col-span-1 md:row-span-1", // Standard
            ];
            const spanClass = bentoClasses[i % bentoClasses.length];

            return (
              <motion.div
                key={`${item.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "group relative rounded-[var(--fw-radius)] overflow-hidden bg-[var(--fw-surface)]",
                  "min-h-[250px]", // fallback for mobile
                  spanClass
                )}
              >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                loading="lazy"
              />

              {/* Permanent Caption overlay (Rudra style) */}
              {(item.caption || item.alt) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
                  {item.category && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white/80 mb-1">
                      {item.category}
                    </span>
                  )}
                  <p className="text-white text-lg font-bold font-heading drop-shadow-md">
                    {item.caption || item.alt}
                  </p>
                </div>
              )}

              {/* Top-left category badge (Optional, removed to favor the bottom text) */}

            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
