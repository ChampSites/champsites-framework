"use client";
// framework/components/ui/TeamCard.tsx
// Team member card with image, name, role, bio, and social links.

import { motion } from "framer-motion";
import Image from "next/image";
import { getIcon } from "@fw/constants/icons";
import { cn } from "@fw/utils/cn";
import { scaleIn, viewportOnce } from "@fw/constants/animations";
import type { TeamMember } from "@fw/types";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  const socials = [
    { key: "instagram", icon: "Instagram", href: member.social?.instagram },
    { key: "linkedin", icon: "Linkedin", href: member.social?.linkedin },
    { key: "twitter", icon: "Twitter", href: member.social?.twitter },
  ].filter((s) => !!s.href);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      transition={{ delay: (index % 4) * 0.1 }}
      className="group bg-[var(--fw-bg)] rounded-[var(--fw-radius)] border border-[var(--fw-border)] overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Avatar / Image */}
      <div className="relative h-56 bg-[var(--fw-surface)] overflow-hidden">
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.image.alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-heading font-bold"
            style={{ background: "var(--fw-primary-gradient)" }}
          >
            {member.initials ?? member.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="font-heading font-bold text-[var(--fw-primary)] text-lg">{member.name}</h3>
        <p className="text-[var(--fw-accent)] text-sm font-semibold">{member.role}</p>

        {member.bio && (
          <p className="text-[var(--fw-muted)] text-sm leading-relaxed">{member.bio}</p>
        )}

        {member.specialties && member.specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {member.specialties.map((s) => (
              <span
                key={s}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--fw-surface)] text-[var(--fw-muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {socials.length > 0 && (
          <div className="flex gap-2 pt-2">
            {socials.map(({ key, icon, href }) => {
              const Icon = getIcon(icon);
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${key}`}
                  className="w-8 h-8 rounded-lg bg-[var(--fw-surface)] flex items-center justify-center text-[var(--fw-muted)] hover:text-[var(--fw-accent)] hover:bg-[var(--fw-surface)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
