'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Full Stack Developer Intern @ S10 Health Care',
  'Next.js & React Frontend Architect',
  'Node.js & NestJS Backend Developer',
  'LMS & Web Platform Builder',
  'Lifelong Learner & Problem Solver',
];

export const TypewriterRole = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 flex items-center justify-center lg:justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoleIndex}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2"
        >
          <span className="text-sm sm:text-base md:text-lg font-semibold text-purple-600 dark:text-purple-400">
            {roles[currentRoleIndex]}
          </span>
          <span className="w-1.5 h-4 bg-purple-500 rounded-full animate-pulse" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
