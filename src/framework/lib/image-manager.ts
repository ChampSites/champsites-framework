// framework/lib/image-manager.ts
// Resolves image sources uniformly across local, CDN, and placeholder scenarios.
// Future CMS integration: swap `resolveImage` to fetch from your CMS client.

export interface ResolvedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isExternal: boolean;
}

const PLACEHOLDER_BASE = "https://images.unsplash.com/photo-1497366216548-37526070297c";
const PLACEHOLDER_PARAMS = "?w=800&q=80&fit=crop&auto=format";

/** Resolves an image source to a fully typed ResolvedImage */
export function resolveImage(
  src: string | null | undefined,
  alt: string,
  width = 800,
  height = 600
): ResolvedImage {
  if (!src) {
    return {
      src: `${PLACEHOLDER_BASE}${PLACEHOLDER_PARAMS}`,
      alt: alt || "Image",
      width,
      height,
      isExternal: true,
    };
  }

  const isExternal = src.startsWith("http://") || src.startsWith("https://");

  return { src, alt, width, height, isExternal };
}

/** Checks if a URL is a remote CDN or Unsplash URL (for next/image remotePatterns) */
export function isRemoteImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

/** Returns a category-specific placeholder when no image is provided */
export function getCategoryPlaceholder(
  category: "business" | "people" | "services" | "gallery" | "hero" | "team",
  width = 800
): string {
  const placeholders: Record<string, string> = {
    business: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=${width}&q=80&fit=crop`,
    people: `https://images.unsplash.com/photo-1573496799515-dc9d53fd6ac0?w=${width}&q=80&fit=crop`,
    services: `https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=${width}&q=80&fit=crop`,
    gallery: `https://images.unsplash.com/photo-1492681290082-e79d65f65d26?w=${width}&q=80&fit=crop`,
    hero: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&fit=crop`,
    team: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=${width}&q=80&fit=crop`,
  };
  return placeholders[category] ?? placeholders.business;
}
