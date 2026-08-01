"use client";
// framework/components/ui/GalleryGrid.tsx
// Responsive image gallery grid with optional category filter. Features Bento grid on desktop and carousel on mobile.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@fw/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@fw/types";

interface GalleryGridProps {
  items: GalleryItem[];
  categories?: string[];
}

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [active, setActive] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const allCategories = categories ?? ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[]))];

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % filtered.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  // Reset carousel when filter changes
  const handleFilterChange = (cat: string) => {
    setActive(cat);
    setActiveIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Filter tabs */}
      {allCategories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {(["All", ...allCategories.filter((c) => c !== "All")]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
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

      {/* Desktop Bento Grid */}
      <motion.div
        layout
        className="hidden md:grid md:grid-cols-4 auto-rows-[250px] gap-4"
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
                  "min-h-[250px]", // fallback
                  spanClass
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1200px) 33vw, 25vw"
                  loading="lazy"
                />

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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex flex-col items-center">
        {filtered.length > 0 && (
          <div className="w-full relative h-[350px] rounded-[var(--fw-radius)] overflow-hidden bg-[var(--fw-surface)]">
            <Image
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            {(filtered[activeIndex].caption || filtered[activeIndex].alt) && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
                {filtered[activeIndex].category && (
                  <span className="text-[10px] uppercase tracking-wider font-bold text-white/80 mb-1">
                    {filtered[activeIndex].category}
                  </span>
                )}
                <p className="text-white text-lg font-bold font-heading drop-shadow-md">
                  {filtered[activeIndex].caption || filtered[activeIndex].alt}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Chevron Controls */}
        {filtered.length > 1 && (
          <div className="flex gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--fw-surface)] text-[var(--fw-primary)] border border-[var(--fw-border)] shadow-md hover:bg-[var(--fw-accent)] hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--fw-surface)] text-[var(--fw-primary)] border border-[var(--fw-border)] shadow-md hover:bg-[var(--fw-accent)] hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
