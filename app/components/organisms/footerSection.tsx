'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400"
    >
      © {new Date().getFullYear()} Premrajesh Ravichandran · Built with Next.js & Tailwind CSS
    </footer>
  );
};
