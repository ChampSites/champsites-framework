// framework/lib/active-client.ts
// Determines which client config to load based on the environment variable NEXT_PUBLIC_CLIENT
import { siteConfig as shriRamConfig } from "@clients/shri-ram/site.config";
import { siteConfig as dentalWellnessConfig } from "@clients/dental-wellness/site.config";
import { siteConfig as demoConfig } from "@clients/demo/site.config";

const clientId = process.env.NEXT_PUBLIC_CLIENT || "shri-ram";

export const siteConfig = 
  clientId === "dental-wellness" ? dentalWellnessConfig :
  clientId === "demo" ? demoConfig :
  shriRamConfig;
