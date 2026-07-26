// framework/templates/index.ts
// Template registry — maps industry string keys to preset partials.

export { academyPreset } from "./academy.preset";
export { gymPreset } from "./gym.preset";
export { restaurantPreset } from "./restaurant.preset";
export { cafePreset } from "./cafe.preset";
export { salonPreset } from "./salon.preset";
export { clinicPreset } from "./clinic.preset";
export { hospitalPreset } from "./hospital.preset";
export { lawFirmPreset } from "./law-firm.preset";
export { agencyPreset } from "./agency.preset";
export { constructionPreset } from "./construction.preset";
export { portfolioPreset } from "./portfolio.preset";
export { realEstatePreset } from "./real-estate.preset";
export { ngoPreset } from "./ngo.preset";
export { coachingPreset } from "./coaching.preset";

import type { SiteConfig } from "@fw/types";
import { academyPreset } from "./academy.preset";
import { gymPreset } from "./gym.preset";
import { restaurantPreset } from "./restaurant.preset";
import { cafePreset } from "./cafe.preset";
import { salonPreset } from "./salon.preset";
import { clinicPreset } from "./clinic.preset";
import { hospitalPreset } from "./hospital.preset";
import { lawFirmPreset } from "./law-firm.preset";
import { agencyPreset } from "./agency.preset";
import { constructionPreset } from "./construction.preset";
import { portfolioPreset } from "./portfolio.preset";
import { realEstatePreset } from "./real-estate.preset";
import { ngoPreset } from "./ngo.preset";
import { coachingPreset } from "./coaching.preset";

export type IndustryKey =
  | "academy" | "gym" | "restaurant" | "cafe" | "salon"
  | "clinic" | "hospital" | "law-firm" | "agency" | "construction"
  | "portfolio" | "real-estate" | "ngo" | "coaching";

export const TEMPLATE_REGISTRY: Record<IndustryKey, Partial<SiteConfig>> = {
  academy: academyPreset,
  gym: gymPreset,
  restaurant: restaurantPreset,
  cafe: cafePreset,
  salon: salonPreset,
  clinic: clinicPreset,
  hospital: hospitalPreset,
  "law-firm": lawFirmPreset,
  agency: agencyPreset,
  construction: constructionPreset,
  portfolio: portfolioPreset,
  "real-estate": realEstatePreset,
  ngo: ngoPreset,
  coaching: coachingPreset,
};
