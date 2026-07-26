// framework/utils/format.ts
// Formatting utilities used across blocks and config resolution.

/** Formats a phone number for display: "+91-8010891010" → "+91 8010 891010" */
export function formatPhone(phone: string): string {
  return phone.trim();
}

/** Builds a WhatsApp deep link URL */
export function buildWhatsAppUrl(whatsapp: string, message?: string): string {
  const base = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Builds a tel: href */
export function buildTelHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/** Builds a mailto: href */
export function buildMailHref(email: string, subject?: string): string {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}

/** Formats currency — e.g. 1300 → "₹1,300" */
export function formatCurrency(amount: number, symbol = "₹"): string {
  return `${symbol}${amount.toLocaleString("en-IN")}`;
}

/** Formats a number with a suffix: 1000 → "1,000+" */
export function formatStat(value: number, suffix = "", prefix = ""): string {
  return `${prefix}${value.toLocaleString("en-IN")}${suffix}`;
}

/** Truncates text to N characters with ellipsis */
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;
}

/** Converts a string to a URL-safe slug */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Returns initials from a full name: "Priya Sharma" → "PS" */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
