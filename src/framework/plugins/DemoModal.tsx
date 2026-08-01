"use client";
import { useState } from "react";
import { Info, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

export function DemoModal({ businessName }: { businessName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn('fixed', 'bottom-6', 'left-6', 'z-[100]', 'flex', 'items-center', 'gap-2', 'bg-[#111]', 'hover:bg-[#222]', 'text-white', 'px-4', 'py-2', 'rounded-full', 'border', 'border-white/10', 'shadow-xl', 'transition-all', 'hover:scale-105')}
      >
        <Info className={cn('w-4', 'h-4', 'text-red-500')} />
        <span className={cn('text-xs', 'font-semibold', 'tracking-widest', 'uppercase')}>Demo Concept</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className={cn('fixed', 'inset-0', 'z-[200]', 'flex', 'items-center', 'justify-center', 'p-4')}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={cn('absolute', 'inset-0', 'bg-black/60', 'backdrop-blur-sm')}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn('relative', 'w-full', 'max-w-md', 'bg-white', 'rounded-2xl', 'shadow-2xl', 'p-6', 'md:p-8')}
            >
              <button
                onClick={() => setIsOpen(false)}
                className={cn('absolute', 'top-4', 'right-4', 'w-8', 'h-8', 'flex', 'items-center', 'justify-center', 'bg-gray-100', 'hover:bg-gray-200', 'rounded-full', 'transition-colors')}
              >
                <X className={cn('w-4', 'h-4', 'text-gray-600')} />
              </button>

              <h2 className={cn('text-2xl', 'font-bold', 'font-heading', 'text-gray-900', 'mb-6')}>Demo Website</h2>
              
              <div className={cn('space-y-4', 'text-sm', 'text-gray-600', 'leading-relaxed')}>
                <p>
                  This project was independently created as a UI/UX and development concept for {businessName}.
                </p>
                <p>
                  It is intended solely to showcase design and development capabilities.
                </p>
                <p className={cn('font-bold', 'text-gray-900')}>
                  This website is not affiliated with or officially endorsed by {businessName}.
                </p>
                <p>
                  Publicly available information and images have been used only for demonstration purposes.
                </p>
                <p>
                  The content can be updated with official branding and media upon client approval.
                </p>
              </div>

              <div className={cn('mt-8', 'pt-6', 'border-t', 'border-gray-100', 'flex', 'gap-3')}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={cn('flex-1', 'cursor-pointer', 'bg-gray-600', 'hover:bg-gray-700', 'text-white', 'font-medium', 'py-2.5', 'rounded-lg', 'transition-colors')}
                >
                  Close
                </button>
                <a
                  href="mailto:champcodes404@gmail.com"
                  className={cn('flex-1', 'flex', 'items-center', 'justify-center', 'gap-2', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-medium', 'py-2.5', 'rounded-lg', 'transition-colors')}
                >
                  Contact Developer <ExternalLink className={cn('w-4', 'h-4')} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
