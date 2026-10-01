'use client';

import Image from 'next/image';
import { ExternalLink, Github, Info, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from '../atoms/TiltCard';

interface ProjectSectionProps {
  title: string;
  description: string;
  image: string;
  live: string;
  code: string;
  onLearnMore: () => void;
  onLiveClick: (live: string) => void;
}

export const ProjectSection = ({
  title,
  description,
  image,
  live,
  code,
  onLearnMore,
  onLiveClick,
}: ProjectSectionProps) => {
  return (
    <TiltCard maxTilt={7} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between h-full border border-white/60 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-300"
      >
        <div>
          {/* Project Media Container */}
          <div className="relative w-full h-52 overflow-hidden bg-zinc-950/20">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />

            {/* Floating Pill Badge with Live Pulse */}
            <div className="absolute top-3 left-3">
              <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold text-white backdrop-blur-md shadow-sm inline-flex items-center gap-1.5">
                {live ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Live Project</span>
                  </>
                ) : (
                  <span>Mobile / Native</span>
                )}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
              {title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
          <div className="flex items-center gap-3">
            {live ? (
              <button
                onClick={() => onLiveClick(live)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/btn"
              >
                <span>Live Preview</span>
                <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => onLiveClick(live)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                <span>Preview Soon</span>
              </button>
            )}

            {code ? (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            ) : null}
          </div>

          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-100/80 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-200/80 dark:hover:bg-purple-900/60 border border-purple-300/40 dark:border-purple-800/60 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <Info size={13} />
            <span>Details</span>
          </button>
        </div>
      </motion.div>
    </TiltCard>
  );
};
