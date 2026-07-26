"use client";
// framework/hooks/useAnimatedCounter.ts
// Animates a number from 0 to a target when the element enters the viewport.

import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;
  easing?: (t: number) => number;
}

/** Easing: ease-out-cubic */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useAnimatedCounter({
  target,
  duration = 2000,
  easing = easeOutCubic,
}: UseAnimatedCounterOptions): { count: number; ref: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, target, duration, easing]);

  return { count, ref };
}
