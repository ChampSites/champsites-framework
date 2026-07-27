"use client";
// framework/plugins/AnnouncementBanner.tsx
// A thin global banner at the very top of the page.

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AnnouncementProps {
  text: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function AnnouncementBanner({ text, href, backgroundColor, textColor }: AnnouncementProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const content = (
    <div className="flex items-center justify-center gap-2">
      <span className="text-sm font-medium">{text}</span>
      {href && <ChevronRight className="w-4 h-4 opacity-70" />}
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative flex items-center justify-center px-4 py-2 w-full z-[60]"
        style={{
          backgroundColor: backgroundColor || "var(--fw-accent)",
          color: textColor || "white",
        }}
        role="alert"
      >
        {href ? (
          <a href={href} className="hover:opacity-90 transition-opacity">
            {content}
          </a>
        ) : (
          content
        )}

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
