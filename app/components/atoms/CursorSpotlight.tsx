'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorSpotlight = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth spring physics for mouse following
  const mouseX = useSpring(0, { stiffness: 450, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 40 });

  useEffect(() => {
    // Only enable on devices with hover capability (desktop)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    // Detect if hovering over clickable / interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Specular Ambient Glow Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 -z-10 rounded-full blur-[90px] opacity-40 dark:opacity-30 transition-transform duration-75"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 420 : 320,
          height: isHovered ? 420 : 320,
          background: isHovered
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(236, 72, 153, 0.25) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.35) 0%, rgba(99, 102, 241, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* Delicate floating cursor ring on desktop */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-purple-500/50 dark:border-purple-400/60 hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 26,
          height: isHovered ? 48 : 26,
          backgroundColor: isHovered
            ? 'rgba(147, 51, 234, 0.12)'
            : 'transparent',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  );
};
