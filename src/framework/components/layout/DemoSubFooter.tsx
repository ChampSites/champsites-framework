"use client";
import React from "react";
import { cn } from "@fw/utils/cn";
import Link from "next/link";

export interface DemoSubFooterProps {
  businessName: string;
  backgroundColor?: string;
}

export function DemoSubFooter({
  businessName,
  backgroundColor,
}: DemoSubFooterProps) {
  return (
    <div className="border-t border-[var(--fw-border)] bg-[var(--fw-surface)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-2xl">
          <h4 className="text-[var(--fw-primary)] font-heading font-bold text-xl mb-4">Demo Website Concept</h4>
          <div className="space-y-4 text-[var(--fw-muted)] text-xs leading-relaxed">
            <p>
              This website is an independent design concept created to demonstrate how a modern website for {businessName} could look.
            </p>
            <p className="font-bold text-[var(--fw-primary)]">
              This is NOT the official website of {businessName}.
            </p>
            <p>
              All academy names, publicly available information and publicly accessible images are used only for demonstration purposes. If requested by the business owner, all content and media will be replaced with official assets.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end justify-center">
          <p className="text-[var(--fw-muted)] text-xs mb-1">Designed & Developed by</p>
          <p className="text-[var(--fw-primary)] font-bold text-lg font-heading mb-4">Ayush Kumar</p>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/in/ayush-kumar-6137651b4/" className="w-8 h-8 rounded-full bg-[var(--fw-bg)] border border-[var(--fw-border)] hover:border-[var(--fw-accent)] hover:text-[var(--fw-accent)] flex items-center justify-center transition-colors text-[var(--fw-muted)]" target="_blank">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="https://portfolio-ayush3012.vercel.app/" className="w-8 h-8 rounded-full bg-[var(--fw-bg)] border border-[var(--fw-border)] hover:border-[var(--fw-accent)] hover:text-[var(--fw-accent)] flex items-center justify-center transition-colors text-[var(--fw-muted)]" target="_blank">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </Link>
            <Link href="mailto:champcodes404@gmail.com" className="w-8 h-8 rounded-full bg-[var(--fw-bg)] border border-[var(--fw-border)] hover:border-[var(--fw-accent)] hover:text-[var(--fw-accent)] flex items-center justify-center transition-colors text-[var(--fw-muted)]" target="_blank">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
