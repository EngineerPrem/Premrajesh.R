"use client";

import { useState, useEffect, useRef } from "react";
import { BlogDataProp } from "../../../data/blogData";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, X, Sparkles } from "lucide-react";

interface Props {
  blogs: BlogDataProp[];
}

export default function InfiniteBlogSlider({ blogs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<BlogDataProp | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slider every 4.5 seconds ONLY when in view and not paused
  useEffect(() => {
    if (!isInView || isPaused || selectedBlog) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogs.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isInView, isPaused, selectedBlog, blogs.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Active Featured Card with Stable Height to Prevent Layout Shift */}
      <div className="relative h-[340px] sm:h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-full glass-card p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-purple-700 dark:text-purple-300">
                  Article {currentIndex + 1} of {blogs.length}
                </span>
                <span className="text-xs text-zinc-500">Reflection & Insights</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3 leading-snug">
                {blogs[currentIndex].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3 mb-6">
                {blogs[currentIndex].description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <button
                onClick={() => setSelectedBlog(blogs[currentIndex])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <BookOpen size={15} />
                <span>Read Full Story</span>
              </button>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl glass-card text-zinc-700 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/50 dark:border-white/10 transition-colors"
                  aria-label="Previous Article"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl glass-card text-zinc-700 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/50 dark:border-white/10 transition-colors"
                  aria-label="Next Article"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {blogs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-7 bg-purple-600 shadow-sm shadow-purple-500/50"
                : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-purple-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* All Articles Grid (All 8 Stories) */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            All Articles & Reflections ({blogs.length})
          </span>
          <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
            Click any story to preview
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {blogs.map((blog, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -1 }}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3 rounded-2xl cursor-pointer text-left transition-all border ${
                  isSelected
                    ? "bg-purple-100/80 dark:bg-purple-950/70 border-purple-500/60 shadow-md shadow-purple-500/10"
                    : "glass-card border-white/50 dark:border-white/5 hover:border-purple-300/40 hover:bg-white/40 dark:hover:bg-zinc-800/40"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate">
                    {blog.title}
                  </h4>
                  {isSelected && (
                    <span className="shrink-0 w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  )}
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {blog.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Writing Themes & Philosophy Card (Fills Column Height) */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl glass-card border border-purple-200/50 dark:border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <Sparkles size={14} />
          <span>Core Themes in My Writing</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="glass-pill px-3 py-1 rounded-xl text-purple-700 dark:text-purple-300 font-medium">
            🌱 Village Roots & Gratitude
          </span>
          <span className="glass-pill px-3 py-1 rounded-xl text-indigo-700 dark:text-indigo-300 font-medium">
            🔧 Engineering Mindset
          </span>
          <span className="glass-pill px-3 py-1 rounded-xl text-pink-700 dark:text-pink-300 font-medium">
            💼 Production Learnings
          </span>
          <span className="glass-pill px-3 py-1 rounded-xl text-emerald-700 dark:text-emerald-300 font-medium">
            💪 Consistency & Self-Belief
          </span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 italic pt-1 border-t border-zinc-200/50 dark:border-white/5">
          “Writing is how I reflect on challenges, solidify new insights, and stay grounded in where I began.”
        </p>
      </div>

      {/* FULL STORY MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 text-zinc-900 dark:text-white"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-card text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Close Story"
              >
                <X size={18} />
              </button>

              <div className="pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  <Sparkles size={13} />
                  <span>Personal Blog & Reflection</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 leading-tight">
                  {selectedBlog.title}
                </h2>

                <p className="text-sm sm:text-base text-purple-600 dark:text-purple-300 font-medium italic mb-6 p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/30">
                  {selectedBlog.description}
                </p>

                <div className="prose prose-zinc dark:prose-invert max-w-none text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                  {selectedBlog.full}
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex justify-end">
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
