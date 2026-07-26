"use client";
// framework/components/ui/FaqAccordion.tsx
// Accessible accordion for FAQ items. Keyboard navigable, ARIA compliant.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@fw/utils/cn";
import type { FaqItem } from "@fw/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;

        return (
          <div
            key={id}
            className={cn(
              "rounded-[var(--fw-radius)] border transition-all duration-200",
              isOpen
                ? "border-[var(--fw-accent)] bg-white shadow-sm"
                : "border-[var(--fw-border)] bg-white hover:border-[var(--fw-accent)]/50"
            )}
            role="listitem"
          >
            <button
              id={`${id}-trigger`}
              aria-controls={`${id}-panel`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold text-[var(--fw-primary)] text-sm md:text-base leading-snug">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 transition-transform duration-300",
                  isOpen ? "rotate-180 text-[var(--fw-accent)]" : "text-[var(--fw-muted)]"
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-trigger`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm text-[var(--fw-muted)] leading-relaxed border-t border-[var(--fw-border)] pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
