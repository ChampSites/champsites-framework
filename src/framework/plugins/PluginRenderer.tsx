"use client";
// framework/plugins/PluginRenderer.tsx
// Central registry and renderer for all opt-in plugins.

import { WhatsAppWidget } from "./WhatsAppWidget";
import { DemoModal } from "./DemoModal";

interface PluginRendererProps {
  plugins?: string[];
  configContext?: {
    whatsapp?: string;
    businessName?: string;
  };
}

export function PluginRenderer({ plugins = [], configContext }: PluginRendererProps) {
  if (plugins.length === 0) return null;

  return (
    <>
      {plugins.includes("whatsapp-chat") && (
        <WhatsAppWidget phone={configContext.whatsapp} />
      )}
      {/* Demo Modal is always active for demo purposes */}
      <DemoModal businessName={configContext?.businessName || "the client"} />
    </>
  );
}
