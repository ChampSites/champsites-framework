"use client";
// framework/plugins/WhatsAppWidget.tsx
// A floating WhatsApp chat button plugin.

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@fw/utils/format";
import { motion } from "framer-motion";

export function WhatsAppWidget({ phone }: { phone?: string }) {
  if (!phone) return null;

  return (
    <motion.a
      href={buildWhatsAppUrl(phone, "Hi, I would like to book an appointment.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
