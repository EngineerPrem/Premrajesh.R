"use client";

import { LifeJourneySection } from "../organisms/LifeJourneySection";
import { MiniBlogSection } from "../organisms/miniBlogSection";
import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";

export const BlogTemplate = () => {
  return (
    <section id="blog" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
          <BookOpen size={14} className="text-purple-500" />
          <span>Stories & Perspectives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Journey & <span className="text-gradient-purple">Articles</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Reflections on discipline, mindset shifts, and continuous learning from village roots to engineering production.
        </p>
      </motion.div>

      {/* TWO COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Personal Story (6 cols) */}
        <div className="lg:col-span-6 w-full">
          <LifeJourneySection />
        </div>

        {/* Right Column: Blogs Slider & Collection (6 cols) */}
        <div className="lg:col-span-6 w-full space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                📚 Featured Thoughts
              </h3>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Swipe or click to explore</span>
            </div>
          </div>

          <MiniBlogSection />
        </div>
      </div>
    </section>
  );
};
