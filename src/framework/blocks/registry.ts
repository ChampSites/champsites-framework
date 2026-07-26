// framework/blocks/registry.ts
// The central registry for all available blocks in the framework.
// Allows dynamic resolution of components by string key.

import type { ReactNode } from "react";
import type { SectionKey } from "@fw/types";

// Import all blocks
import { HeroBlock } from "./HeroBlock";
import { AboutBlock } from "./AboutBlock";
import { ServicesBlock } from "./ServicesBlock";
import { FeaturesBlock } from "./FeaturesBlock";
import { GalleryBlock } from "./GalleryBlock";
import { StatsBlock } from "./StatsBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { FaqBlock } from "./FaqBlock";
import { PricingBlock } from "./PricingBlock";
import { CtaBlock } from "./CtaBlock";
import { ContactBlock } from "./ContactBlock";
import { MapBlock } from "./MapBlock";
import { TeamBlock } from "./TeamBlock";
import { BlogBlock } from "./BlogBlock";

export interface BlockMetadata {
  id: SectionKey;
  component: React.ComponentType<any>;
  category: "hero" | "content" | "conversion" | "trust";
  required: boolean;
  supportedBusinessTypes: string[] | "all";
}

export const BLOCK_REGISTRY: Record<SectionKey, BlockMetadata> = {
  hero: { id: "hero", component: HeroBlock, category: "hero", required: true, supportedBusinessTypes: "all" },
  about: { id: "about", component: AboutBlock, category: "content", required: false, supportedBusinessTypes: "all" },
  services: { id: "services", component: ServicesBlock, category: "content", required: false, supportedBusinessTypes: "all" },
  features: { id: "features", component: FeaturesBlock, category: "content", required: false, supportedBusinessTypes: "all" },
  gallery: { id: "gallery", component: GalleryBlock, category: "content", required: false, supportedBusinessTypes: "all" },
  stats: { id: "stats", component: StatsBlock, category: "trust", required: false, supportedBusinessTypes: "all" },
  testimonials: { id: "testimonials", component: TestimonialsBlock, category: "trust", required: false, supportedBusinessTypes: "all" },
  faq: { id: "faq", component: FaqBlock, category: "conversion", required: false, supportedBusinessTypes: "all" },
  pricing: { id: "pricing", component: PricingBlock, category: "conversion", required: false, supportedBusinessTypes: "all" },
  cta: { id: "cta", component: CtaBlock, category: "conversion", required: false, supportedBusinessTypes: "all" },
  contact: { id: "contact", component: ContactBlock, category: "conversion", required: true, supportedBusinessTypes: "all" },
  map: { id: "map", component: MapBlock, category: "trust", required: false, supportedBusinessTypes: "all" },
  team: { id: "team", component: TeamBlock, category: "trust", required: false, supportedBusinessTypes: "all" },
  blog: { id: "blog", component: BlogBlock, category: "content", required: false, supportedBusinessTypes: "all" },
};
