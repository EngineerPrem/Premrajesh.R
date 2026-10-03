"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Mail, Code2, Database, Layers, Sparkles } from "lucide-react";
import { TypewriterRole } from "../atoms/TypewriterRole";
import { AnimatedCounter } from "../atoms/AnimatedCounter";
import { TiltCard } from "../atoms/TiltCard";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-0 flex items-center justify-center pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-left space-y-6"
        >
          {/* Status Badge with Shimmer Effect */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 shadow-sm relative overflow-hidden group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Full Stack Developer Intern @ S10 Health Care Solutions</span>
            <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400"
            >
              Hello, Welcome to my Portfolio
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-gradient-primary">
                Premrajesh Ravichandran
              </span>
            </motion.h1>
          </div>

          {/* Dynamic Role Typewriter */}
          <TypewriterRole />

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Full Stack Developer specializing in crafting clean, scalable, and high-performance web applications. Experienced in developing production platforms with modern React, Next.js, TypeScript, and robust backend integrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
            <Link href="#project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowUpRight size={17} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>

            <Link href="#resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/60 dark:border-white/10 shadow-sm"
              >
                <Briefcase size={17} className="text-purple-600 dark:text-purple-400" />
                <span>Experience & Skills</span>
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/60 dark:border-white/10 shadow-sm"
              >
                <Mail size={17} className="text-emerald-500" />
                <span>Contact Me</span>
              </motion.button>
            </Link>
          </div>

        </motion.div>

        {/* 3D TILT PROFILE IMAGE WITH ORBITING TECH BADGES & METRICS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center items-center relative lg:mt-12 xl:mt-11"
        >
          <TiltCard maxTilt={10} className="w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[290px] xl:h-[290px] rounded-full">
            {/* Ambient Multi-color Glowing Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 opacity-60 blur-3xl animate-float-ambient" />

            {/* Slow Orbiting Ring Line */}
            <div className="absolute -inset-3.5 sm:-inset-5 rounded-full border border-purple-500/30 dark:border-purple-400/20 border-dashed animate-spin-slow pointer-events-none" />

            {/* Profile Picture Frame */}
            <div className="relative w-full h-full p-2 rounded-full glass-panel border border-white/60 dark:border-white/10 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400/50 shadow-inner">
                <Image
                  src="/Prem_Profile.png"
                  alt="Premrajesh Ravichandran"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 240px, 300px"
                />
              </div>
            </div>

            {/* Orbiting Glass Badge 1: Next.js & React */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 sm:-left-5 glass-card px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-white/80 dark:border-white/15 shadow-xl hover:scale-110 transition-transform"
            >
              <Code2 size={15} className="text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Next.js & React</span>
            </motion.div>

            {/* Orbiting Glass Badge 2: TypeScript & Node */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-2 -right-2 sm:-right-4 glass-card px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-white/80 dark:border-white/15 shadow-xl hover:scale-110 transition-transform"
            >
              <Layers size={15} className="text-pink-500" />
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">TypeScript & Node</span>
            </motion.div>

            {/* Orbiting Glass Badge 3: SQL & Database */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-4 sm:-left-6 hidden sm:flex glass-card px-2.5 py-1.5 rounded-2xl items-center gap-1.5 border border-white/80 dark:border-white/15 shadow-xl hover:scale-110 transition-transform"
            >
              <Database size={14} className="text-emerald-500" />
              <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-100">SQL & DB</span>
            </motion.div>
          </TiltCard>

          {/* Animated Metrics Bar - Increased bottom margin below circle image */}
          <div className="mt-7 sm:mt-8 md:mt-9 grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-md mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-2.5 sm:p-3 rounded-2xl text-center border border-white/60 dark:border-white/10 shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                <AnimatedCounter target={1} suffix="+ Year" duration={1.2} />
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Production Dev</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-2.5 sm:p-3 rounded-2xl text-center border border-white/60 dark:border-white/10 shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-bold text-pink-600 dark:text-pink-400">
                <AnimatedCounter target={6} suffix="+" duration={1.5} />
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Web & App Projects</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-2.5 sm:p-3 rounded-2xl text-center border border-white/60 dark:border-white/10 shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-bold text-amber-500">
                <AnimatedCounter target={13} suffix="+" duration={1.8} />
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Honors & Certs</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
