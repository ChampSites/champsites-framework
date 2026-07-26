"use client";
// framework/blocks/TeamBlock.tsx
// Team members grid section.

import { SectionHeader } from "@fw/components/ui/SectionHeader";
import { TeamCard } from "@fw/components/ui/TeamCard";
import type { TeamBlockProps } from "@fw/types";

export function TeamBlock({
  members,
  ctx,
  headline = "Meet Our Team",
  subheadline = "Our Experts",
}: TeamBlockProps) {
  return (
    <section
      id="team"
      aria-label="Our team"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--fw-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          headline={headline}
          subheadline={subheadline}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
