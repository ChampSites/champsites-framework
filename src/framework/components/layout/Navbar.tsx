"use client";
// framework/components/layout/Navbar.tsx
// Config-driven, fully responsive navbar with scroll state, mobile menu,
// and dynamic CTA — reads only from props, never from config directly.

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useScrolled } from "@fw/hooks/useScrolled";
import { cn } from "@fw/utils/cn";
import { buildTelHref } from "@fw/utils/format";
import { getIcon } from "@fw/constants/icons";
import type { NavbarProps } from "@fw/types";

export function Navbar({
  businessName,
  logo,
  nav,
  ctaPrimary,
  phone,
  theme,
}: NavbarProps) {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = theme.heroStyle === "dark" || theme.heroStyle === "gradient";
  const CtaIcon = ctaPrimary.icon ? getIcon(ctaPrimary.icon) : null;

  // Determine text colors based on scroll + hero style
  const navTextColor = scrolled
    ? "text-[var(--fw-primary)]"
    : isDark
    ? "text-white/90 hover:text-white"
    : "text-[var(--fw-primary)]";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--fw-border)]"
            : isDark ? "bg-[var(--fw-primary)]" : "bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[var(--fw-accent)] rounded-lg"
              aria-label={`${businessName} — Home`}
            >
              {logo ? (
                <div className={cn("w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-200 group-hover:scale-105", scrolled ? "bg-white shadow-sm" : "")}>
                  <Image src={logo.src} alt={logo.alt} width={44} height={44} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg group-hover:scale-105 transition-transform duration-200"
                  style={{ background: "var(--fw-accent-gradient)" }}
                  aria-hidden="true"
                >
                  {businessName[0]}
                </div>
              )}
              <div>
                <p className={cn("font-heading font-bold text-base leading-tight", scrolled ? "text-[var(--fw-primary)]" : isDark ? "text-white" : "text-[var(--fw-primary)]")}>
                  {businessName.split(" ")[0]}
                </p>
                {businessName.split(" ").length > 1 && (
                  <p className={cn("text-[10px] tracking-widest uppercase leading-none", scrolled ? "text-[var(--fw-muted)]" : isDark ? "text-white/60" : "text-[var(--fw-muted)]")}>
                    {businessName.split(" ").slice(1).join(" ")}
                  </p>
                )}
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {nav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    scrolled
                      ? "text-[var(--fw-muted)] hover:text-[var(--fw-primary)]"
                      : isDark
                      ? "text-white/70 hover:text-white"
                      : "text-[var(--fw-muted)] hover:text-[var(--fw-primary)]"
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--fw-accent)] group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              {phone && (
                <a
                  href={buildTelHref(phone)}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors",
                    scrolled
                      ? "text-[var(--fw-muted)] hover:text-[var(--fw-primary)]"
                      : isDark
                      ? "text-white/70 hover:text-white"
                      : "text-[var(--fw-muted)] hover:text-[var(--fw-primary)]"
                  )}
                  aria-label={`Call us at ${phone}`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:block">{phone}</span>
                </a>
              )}

              <a
                href={ctaPrimary.href}
                target={ctaPrimary.external ? "_blank" : undefined}
                rel={ctaPrimary.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 bg-[var(--fw-accent)] hover:opacity-90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                {CtaIcon && <CtaIcon className="w-4 h-4" />}
                {ctaPrimary.label}
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
                scrolled ? "hover:bg-[var(--fw-surface)]" : isDark ? "hover:bg-white/10" : "hover:bg-[var(--fw-surface)]"
              )}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className={cn("w-5 h-5", scrolled || !isDark ? "text-[var(--fw-primary)]" : "text-white")} />
              ) : (
                <Menu className={cn("w-5 h-5", scrolled || !isDark ? "text-[var(--fw-primary)]" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--fw-border)] shadow-xl md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
              {nav.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[var(--fw-primary)] font-medium text-base py-1.5 border-b border-[var(--fw-border)] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                {phone && (
                  <a
                    href={buildTelHref(phone)}
                    className="flex items-center justify-center gap-2 text-sm border border-[var(--fw-border)] rounded-full py-2.5 text-[var(--fw-primary)] font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                )}
                <a
                  href={ctaPrimary.href}
                  target={ctaPrimary.external ? "_blank" : undefined}
                  rel={ctaPrimary.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center gap-2 bg-[var(--fw-accent)] text-white text-sm font-semibold py-3 rounded-full"
                >
                  {CtaIcon && <CtaIcon className="w-4 h-4" />}
                  {ctaPrimary.label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
