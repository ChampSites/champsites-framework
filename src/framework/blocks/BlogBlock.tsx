"use client";
// framework/blocks/BlogBlock.tsx
// Blog / news / articles section.

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { Badge } from "@fw/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@fw/constants/animations";
import type { BlogBlockProps } from "@fw/types";

export function BlogBlock({ config, ctx }: BlogBlockProps) {
  const { theme } = ctx;

  return (
    <section
      id="blog"
      aria-label="Blog posts"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-14">
          <SectionHeader
            headline={config.headline}
            subheadline={config.subheadline}
            align="left"
          />
          {config.cta && (
            <a
              href={config.cta.href}
              className="hidden md:flex items-center gap-2 text-sm font-semibold shrink-0"
              style={{ color: theme.colors.accent }}
            >
              {config.cta.label}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {config.posts.map((post) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              className="group bg-white rounded-[var(--fw-radius)] border border-[var(--fw-border)] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {post.image && (
                <Link href={post.href} className="block relative h-48 overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </Link>
              )}

              <div className="p-5 space-y-3">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
                    ))}
                  </div>
                )}

                <Link href={post.href}>
                  <h3
                    className="font-heading font-bold text-lg leading-snug hover:underline"
                    style={{ color: theme.colors.primary }}
                  >
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm leading-relaxed" style={{ color: theme.colors.muted }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[var(--fw-border)]">
                  <div className="text-xs" style={{ color: theme.colors.muted }}>
                    {post.date}
                    {post.readingTime && ` · ${post.readingTime}`}
                  </div>
                  <Link
                    href={post.href}
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color: theme.colors.accent }}
                  >
                    Read more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
