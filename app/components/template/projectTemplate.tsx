"use client";

import { useState } from "react";
import { ProjectData, ProjectType } from "@/data/projectData";
import { ProjectSection } from "../organisms/projectSection";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ExternalLink, Github, Layers } from "lucide-react";

export const ProjectsPage = () => {
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectType | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const filteredProjects = ProjectData.filter((proj) => {
    if (filter === "web") {
      return (
        proj.title.includes("Web") ||
        proj.title.includes("Website") ||
        proj.title.includes("Portfolio")
      );
    }
    if (filter === "app") {
      return (
        proj.title.includes("App") ||
        proj.title.includes("Chatbot")
      );
    }
    return true;
  });

  return (
    <section id="project" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
          <Sparkles size={14} className="text-purple-500" />
          <span>Selected Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Featured <span className="text-gradient-purple">Projects</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Production applications, client platforms, and software solutions built with cutting-edge web technologies.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-5">
          <div className="glass-card p-1.5 rounded-2xl inline-flex border border-purple-300/30 dark:border-white/10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === "all"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
              }`}
            >
              All Projects ({ProjectData.length})
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === "web"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
              }`}
            >
              Web Platforms
            </button>
            <button
              onClick={() => setFilter("app")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === "app"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
              }`}
            >
              AI & Mobile Apps
            </button>
          </div>
        </div>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj, idx) => (
          <ProjectSection
            key={idx}
            {...proj}
            onLearnMore={() => setActiveModalProject(proj)}
            onLiveClick={(live) => {
              if (!live) setShowComingSoon(true);
              else window.open(live, "_blank");
            }}
          />
        ))}
      </div>

      {/* Glassmorphic Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 dark:border-white/10 text-zinc-900 dark:text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-card text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  <Layers size={13} />
                  <span>Project Overview</span>
                </div>

                <div className="space-y-4">
                  {activeModalProject.learnMore.content}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {activeModalProject.live && (
                      <a
                        href={activeModalProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-purple-600/20 transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {activeModalProject.code && (
                      <a
                        href={activeModalProject.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass-card text-zinc-700 dark:text-zinc-200 hover:text-purple-600 text-xs sm:text-sm font-semibold border border-white/50 dark:border-white/10 transition-all"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xs sm:text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm glass-panel p-6 rounded-3xl shadow-2xl border border-white/50 dark:border-white/10 text-center"
            >
              <h3 className="text-xl font-bold text-amber-500 mb-2">Live Preview Soon</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
                This project’s live preview or cloud deployment is currently being updated.
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
