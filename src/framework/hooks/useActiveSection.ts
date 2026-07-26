"use client";
// framework/hooks/useActiveSection.ts
// Tracks which section ID is currently in the viewport — used for active nav links.

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], threshold = 0.4): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || !sectionIds.length) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, threshold]);

  return active;
}
