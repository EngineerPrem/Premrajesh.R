'use client';

import { motion } from 'framer-motion';
import { User, Sparkles, Compass, Target, Building2, Heart, Music, TrendingUp, Users, Moon, Globe, CheckCircle2, Calendar } from 'lucide-react';
import { TiltCard } from '../atoms/TiltCard';

const traits = [
  { icon: Music, label: 'Enjoys music while learning', color: 'text-pink-500' },
  { icon: TrendingUp, label: 'Consistent and disciplined learner', color: 'text-purple-500' },
  { icon: Users, label: 'Comfortable working independently or in teams', color: 'text-indigo-500' },
  { icon: Moon, label: 'Enjoys focused late-night learning sessions', color: 'text-amber-500' },
  { icon: Globe, label: 'Believes in kindness, consistency, and lifelong learning', color: 'text-emerald-500' },
];

export const AboutTemplate = () => {
  return (
    <section id="about" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2 relative overflow-hidden">
          <Sparkles size={14} className="text-purple-500" />
          <span>Get To Know Me</span>
          <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          About <span className="text-gradient-purple">Me</span>
        </h2>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-3 sm:mt-4 max-w-3xl mx-auto glass-card p-3 sm:p-3.5 rounded-2xl border border-purple-300/40 dark:border-purple-500/20 shadow-sm"
        >
          <p className="italic text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-medium">
            💡 Building clean, usable, and scalable web applications with consistency and clarity.
          </p>
        </motion.div>
      </motion.div>

      {/* 2-COLUMN BALANCED GRID FOR 4 STORY CARDS (ZERO DEAD WHITESPACE) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* CARD 1: WHO I AM */}
        <TiltCard maxTilt={5} className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-white/60 dark:border-white/10 flex flex-col justify-between h-full space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Who I Am
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Software Developer & Lifelong Learner</span>
                </div>
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                I am a focused and consistent software developer who values clarity,
                structure, and long-term improvement. I enjoy building clean user
                interfaces and understanding systems from the ground up.
              </p>
            </div>

            {/* Core Philosophy Chips */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-medium text-purple-700 dark:text-purple-300">
                ⚡ Clean UI Architecture
              </span>
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-medium text-indigo-700 dark:text-indigo-300">
                🔍 Systematic Engineering
              </span>
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-medium text-pink-700 dark:text-pink-300">
                🌱 Continuous Evolution
              </span>
            </div>
          </motion.div>
        </TiltCard>

        {/* CARD 2: AT PRESENT */}
        <TiltCard maxTilt={5} className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-white/60 dark:border-white/10 flex flex-col justify-between h-full space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      At Present
                    </h3>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Active Experience</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  <Calendar size={12} />
                  Present
                </span>
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                I am currently working at <strong className="text-zinc-900 dark:text-white">S10 Health Care Solutions</strong> as a <strong className="text-purple-600 dark:text-purple-400">Full Stack Developer Intern</strong> (24-Aug-2026 to Present), contributing to application development, UI improvements, bug fixing, and team collaboration in a professional healthcare environment.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              <span className="px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40">
                Healthcare Tech
              </span>
              <span className="px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/40">
                REST APIs & Dashboard UI
              </span>
              <span className="px-3 py-1 rounded-xl bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-pink-800/40">
                Team Collaboration
              </span>
            </div>
          </motion.div>
        </TiltCard>

        {/* CARD 3: LEARNING JOURNEY */}
        <TiltCard maxTilt={5} className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-white/60 dark:border-white/10 flex flex-col justify-between h-full space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-sm">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Learning Journey
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Foundations & Growth</span>
                </div>
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                I started with minimal exposure to programming and built my skills
                through consistent practice and strong fundamentals. This journey
                shaped my problem-solving mindset, technical curiosity, and discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                <span>Started from zero background</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                <span>Relentless daily discipline</span>
              </div>
            </div>
          </motion.div>
        </TiltCard>

        {/* CARD 4: FUTURE GOALS */}
        <TiltCard maxTilt={5} className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-white/60 dark:border-white/10 flex flex-col justify-between h-full space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Future Goals
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Vision & Ambition</span>
                </div>
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                My goal is to grow into a reliable developer with strong technical
                depth, capable of building meaningful applications and contributing
                effectively to collaborative engineering teams.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="glass-pill px-3 py-1 rounded-xl text-amber-700 dark:text-amber-300">
                🎯 Scalable Web Systems
              </span>
              <span className="glass-pill px-3 py-1 rounded-xl text-purple-700 dark:text-purple-300">
                🚀 High Technical Depth
              </span>
              <span className="glass-pill px-3 py-1 rounded-xl text-emerald-700 dark:text-emerald-300">
                💡 Meaningful Products
              </span>
            </div>
          </motion.div>
        </TiltCard>

      </div>

      {/* CENTERED ON DESKTOP: PERSONAL TRAITS & VALUES */}
      <div className="mt-8 max-w-4xl mx-auto w-full">
        <TiltCard maxTilt={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-white/10 space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-200/50 dark:border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Personal Traits & Values
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Core Habits, Work Ethic & Principles</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40 w-fit">
                <span>✨ Mindset & Culture</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                const isLast = index === traits.length - 1;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.015, x: 2 }}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl bg-white/40 dark:bg-zinc-800/40 border border-white/50 dark:border-white/5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 transition-all hover:border-emerald-400/40 ${
                      isLast ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-white/80 dark:bg-zinc-700/50 shadow-xs shrink-0">
                      <Icon size={16} className={trait.color} />
                    </div>
                    <span className="font-medium">{trait.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
};
