"use client";
// framework/blocks/ContactBlock.tsx
// Contact section with info panel and optional form.

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { buildTelHref, buildMailHref, buildWhatsAppUrl } from "@fw/utils/format";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@fw/constants/animations";
import type { ContactBlockProps } from "@fw/types";

export function ContactBlock({
  config,
  ctx,
  address,
  phone,
  phoneAlt,
  email,
  hours,
  social,
}: ContactBlockProps) {
  const { theme, businessName, whatsapp } = ctx;

  return (
    <section
      id="contact"
      aria-label="Contact information"
      className="py-20 md:py-28"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={config.headline}
          subheadline={config.subheadline}
          description={config.description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            className="bg-[var(--fw-primary)] rounded-2xl p-8 text-white space-y-6"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl mb-1">{businessName}</h3>
            </div>

            <div className="space-y-5">
              {address && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: theme.colors.accent }} aria-hidden="true" />
                  <p className="text-white/80 text-sm leading-relaxed">{address}</p>
                </div>
              )}

              {phone && (
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 shrink-0" style={{ color: theme.colors.accent }} aria-hidden="true" />
                  <div className="flex flex-col gap-0.5">
                    <a href={buildTelHref(phone)} className="text-white/90 text-sm hover:text-white transition-colors">{phone}</a>
                    {phoneAlt && <a href={buildTelHref(phoneAlt)} className="text-white/60 text-xs hover:text-white transition-colors">{phoneAlt}</a>}
                  </div>
                </div>
              )}

              {email && (
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 shrink-0" style={{ color: theme.colors.accent }} aria-hidden="true" />
                  <a href={buildMailHref(email)} className="text-white/90 text-sm hover:text-white transition-colors">{email}</a>
                </div>
              )}

              {hours && (
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 shrink-0" style={{ color: theme.colors.accent }} aria-hidden="true" />
                  <p className="text-white/90 text-sm">{hours}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            className="flex flex-col gap-5 justify-center"
          >
            <div className="bg-white rounded-2xl border border-[var(--fw-border)] p-8 space-y-4">
              <h3 className="font-heading font-bold text-2xl" style={{ color: theme.colors.primary }}>
                Ready to get started?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: theme.colors.muted }}>
                Get in touch with us today. We're here to help and answer any questions you might have.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                {whatsapp && (
                  <a
                    href={buildWhatsAppUrl(whatsapp, `Hi! I'm interested in ${businessName}. Can you share more details?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                )}

                {phone && (
                  <a
                    href={buildTelHref(phone)}
                    className="flex items-center justify-center gap-3 font-semibold py-4 rounded-xl border-2 transition-all duration-200"
                    style={{
                      borderColor: theme.colors.accent,
                      color: theme.colors.accent,
                    }}
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Call {phone}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
