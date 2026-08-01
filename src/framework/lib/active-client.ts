// framework/lib/active-client.ts
// Determines which client config to load based on the environment variable NEXT_PUBLIC_CLIENT
import { siteConfig as shriRamConfig } from "@clients/shri-ram/site.config";
import { siteConfig as dentalWellnessConfig } from "@clients/dental-wellness/site.config";
import { siteConfig as demoConfig } from "@clients/demo/site.config";
import { siteConfig as machliwalaConfig } from "@clients/machliwala/site.config";

const clientId = process.env.NEXT_PUBLIC_CLIENT;

function getActiveConfig(id: string | undefined) {
  switch (id) {
    case 'dental-wellness':
      return dentalWellnessConfig;
    case 'shri-ram':
      return shriRamConfig;
    case 'machliwala':
      return machliwalaConfig;
    default:
      return demoConfig;
  }
}

export const siteConfig = getActiveConfig(clientId);
