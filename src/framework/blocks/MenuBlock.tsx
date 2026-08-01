"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MenuConfig, BlockContext, MenuCategory, MenuItem } from "../types";
import { cn } from "../utils/cn";

export interface MenuBlockProps {
  config: MenuConfig;
  ctx: BlockContext;
}

export function MenuBlock({ config, ctx }: MenuBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : config.categories.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < config.categories.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 md:py-32 relative bg-[var(--fw-bg)]" id="menu">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          {config.subheadline && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--fw-accent)] font-semibold tracking-wider uppercase text-sm mb-4"
            >
              {config.subheadline}
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[var(--fw-primary)]"
          >
            {config.headline}
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuCategoryView category={config.categories[activeIndex]} index={activeIndex} />
            </motion.div>
          </AnimatePresence>

          {/* Chevron Navigation */}
          {config.categories.length > 1 && (
            <div className="flex justify-center items-center gap-6 mt-8">
              <button 
                onClick={handlePrev} 
                className="p-3 rounded-full bg-[var(--fw-surface)] border border-[var(--fw-border)] hover:border-[var(--fw-accent)] hover:text-[var(--fw-accent)] text-[var(--fw-primary)] transition-all"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-sm font-medium text-[var(--fw-secondary)]">
                {activeIndex + 1} / {config.categories.length}
              </div>
              <button 
                onClick={handleNext} 
                className="p-3 rounded-full bg-[var(--fw-surface)] border border-[var(--fw-border)] hover:border-[var(--fw-accent)] hover:text-[var(--fw-accent)] text-[var(--fw-primary)] transition-all"
                aria-label="Next Category"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {config.footerNote && (
          <div className="mt-16 text-center text-sm text-[var(--fw-secondary)] opacity-80">
            {config.footerNote}
          </div>
        )}
      </div>
    </section>
  );
}

function MenuCategoryView({ category, index }: { category: MenuCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="bg-[var(--fw-surface)]/50 p-6 md:p-12 rounded-3xl border border-[var(--fw-border)]"
    >
      <div className="mb-8 text-center border-b border-[var(--fw-border)] pb-6">
        <h3 className="text-3xl font-heading font-bold text-[var(--fw-primary)] text-center relative inline-block">
          <span className="bg-gradient-to-r from-[var(--fw-accent)] to-[var(--fw-accent-dark)] bg-clip-text text-transparent py-1 pr-1">
            {category.title}
          </span>
        </h3>
        {category.description && (
          <p className="mt-3 text-[var(--fw-secondary)] text-sm">{category.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {category.items.map((item, idx) => (
          <MenuItemView key={idx} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function MenuItemView({ item }: { item: MenuItem }) {
  // Extract all the prices to show
  const hasMultiplePrices = item.priceHalf || item.priceFull || item.priceRegular || item.priceMedium || item.priceLarge;
  
  return (
    <div className="flex flex-col border-b border-[var(--fw-border)]/50 pb-4 last:border-0">
      <div className="flex justify-between items-start gap-4">
        
        {/* Left side: Name, Badge, Veg icon, Description */}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {item.isVeg !== undefined && (
              <div 
                className={cn(
                  "w-4 h-4 border-2 flex items-center justify-center rounded-sm shrink-0",
                  item.isVeg ? "border-green-600" : "border-red-600"
                )}
              >
                <div className={cn("w-2 h-2 rounded-full", item.isVeg ? "bg-green-600" : "bg-red-600")} />
              </div>
            )}
            
            <h4 className="font-heading font-semibold text-lg text-[var(--fw-primary)] leading-tight">
              {item.name}
            </h4>

            {item.badge && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[var(--fw-accent)]/10 text-[var(--fw-accent)] rounded-full border border-[var(--fw-accent)]/20">
                {item.badge}
              </span>
            )}
          </div>
          
          {item.description && (
            <p className="text-sm text-[var(--fw-secondary)] mt-1 opacity-90 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* Right side: Prices */}
        <div className="text-right shrink-0 min-w-[70px]">
          {!hasMultiplePrices && item.price && (
            <div className="font-bold text-[var(--fw-accent)] whitespace-nowrap">
              {typeof item.price === "number" ? `₹${item.price}` : item.price}
            </div>
          )}
        </div>
      </div>

      {/* Multiple Prices Row */}
      {hasMultiplePrices && (
        <div className="mt-3 flex flex-wrap gap-4 justify-end text-sm">
          {item.priceHalf && <PriceTag label="Half" price={item.priceHalf} />}
          {item.priceFull && <PriceTag label="Full" price={item.priceFull} />}
          {item.priceRegular && <PriceTag label="Reg" price={item.priceRegular} />}
          {item.priceMedium && <PriceTag label="Med" price={item.priceMedium} />}
          {item.priceLarge && <PriceTag label="Lrg" price={item.priceLarge} />}
        </div>
      )}
    </div>
  );
}

function PriceTag({ label, price }: { label: string; price: string | number }) {
  return (
    <div className="flex flex-col items-center bg-[var(--fw-surface)] px-3 py-1 rounded-md border border-[var(--fw-border)]">
      <span className="text-[10px] text-[var(--fw-secondary)] uppercase tracking-wider font-semibold opacity-70 mb-0.5">
        {label}
      </span>
      <span className="font-bold text-[var(--fw-accent)] text-sm">
        {typeof price === "number" ? `₹${price}` : price}
      </span>
    </div>
  );
}
