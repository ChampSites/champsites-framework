// framework/components/layout/Footer.tsx
// Config-driven footer: contact info, social links, Google Maps iframe,
// footer link groups. Never reads from config directly — props only.

import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { buildTelHref, buildMailHref, buildWhatsAppUrl } from "@fw/utils/format";
import { cn } from "@fw/utils/cn";
import type { FooterProps } from "@fw/types";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-white/10 hover:bg-[var(--fw-accent)] rounded-xl flex items-center justify-center transition-colors duration-200 text-white"
    >
      {children}
    </a>
  );
}

// Inline social SVGs to avoid heavy imports in a server component
function InstagramSvg() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppSvg() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer({
  businessName,
  tagline,
  footerTagline,
  address,
  phone,
  phoneAlt,
  email,
  hours,
  mapsEmbed,
  social,
  footerLinks,
  ctaPrimary,
  theme,
  showWatermark = true,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[var(--fw-primary)] text-white" role="contentinfo">

      {/* Map + Contact Row */}
      {(mapsEmbed || phone || email || hours) && (
        <div className="border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            {mapsEmbed && (
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-[var(--fw-primary-light)] relative">
                <iframe
                  src={mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  title={`${businessName} location map`}
                />
              </div>
            )}

            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs font-heading"
                    style={{ background: "var(--fw-accent-gradient)" }}
                    aria-hidden="true"
                  >
                    {businessName[0]}
                  </div>
                  <h3 className="font-heading text-xl font-bold">{businessName}</h3>
                </div>
                {footerTagline && (
                  <p className="text-white/50 text-sm">{footerTagline}</p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--fw-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-white/90 text-sm leading-relaxed">{address}</p>
                </div>

                {phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--fw-accent)] shrink-0" aria-hidden="true" />
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={buildTelHref(phone)}
                        className="text-white/90 text-sm hover:text-[var(--fw-accent)] transition-colors"
                      >
                        {phone}
                      </a>
                      {phoneAlt && (
                        <a
                          href={buildTelHref(phoneAlt)}
                          className="text-white/60 text-xs hover:text-[var(--fw-accent)] transition-colors"
                        >
                          {phoneAlt}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--fw-accent)] shrink-0" aria-hidden="true" />
                    <a
                      href={buildMailHref(email)}
                      className="text-white/90 text-sm hover:text-[var(--fw-accent)] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                )}

                {hours && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[var(--fw-accent)] shrink-0" aria-hidden="true" />
                    <p className="text-white/90 text-sm">{hours}</p>
                  </div>
                )}
              </div>

              {/* Social Icons */}
              {social && (
                <div className="flex items-center gap-3">
                  {social.instagram && (
                    <SocialIcon href={social.instagram} label="Instagram">
                      <InstagramSvg />
                    </SocialIcon>
                  )}
                  {social.whatsapp && (
                    <SocialIcon
                      href={buildWhatsAppUrl(social.whatsapp, `Hi! I'd like to know more about ${businessName}.`)}
                      label="WhatsApp"
                    >
                      <WhatsAppSvg />
                    </SocialIcon>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Links Grid */}
      {footerLinks && footerLinks.length > 0 && (
        <div className={cn("max-w-[1200px] mx-auto px-6 py-12 grid gap-8", footerLinks.length === 3 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3")}>
          {/* Brand tagline column */}
          <div className="col-span-2 md:col-span-1">
            {tagline && (
              <p className="text-white/40 text-sm leading-relaxed">{tagline}</p>
            )}
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-200"
                        aria-hidden="true"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center">
            © {year} {businessName}. All rights reserved.
          </p>
          {showWatermark && (
            <p className="text-white/20 text-xs">
              Powered by ChampSites Framework
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
