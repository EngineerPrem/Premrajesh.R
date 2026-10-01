"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Compass, Rocket, Quote } from "lucide-react";
import { TiltCard } from "../atoms/TiltCard";

export const LifeJourneySection = () => {
  return (
    <TiltCard maxTilt={4} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-white/60 dark:border-white/10 shadow-xl relative overflow-hidden h-full flex flex-col justify-between"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <Sparkles size={22} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Personal Story
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                🌱 My Life Journey
              </h3>
            </div>
          </div>

          {/* Story Sections */}
          <div className="space-y-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {/* Paragraph 1 */}
            <p>
              I’m a normal village child from a humble, hardworking family. My father took many risks and worked tirelessly to support my studies and give me a better future.
            </p>

            {/* Paragraph 2 */}
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-zinc-800/40 border border-purple-200/50 dark:border-purple-800/30">
              <p>
                At age 11, I shifted to a government school, and everything changed. I didn’t feel confident or connected. I was seen as just an{" "}
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  “average student”
                </span>
                , and the only support I found was from teachers who saw some potential in me.
              </p>
            </div>

            {/* Quotes block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-2xl glass-pill text-purple-800 dark:text-purple-300 text-xs sm:text-sm italic flex items-start gap-2 shadow-sm"
              >
                <Quote size={16} className="shrink-0 text-purple-500 mt-0.5" />
                <span>“Why am I here?”</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-2xl glass-pill text-purple-800 dark:text-purple-300 text-xs sm:text-sm italic flex items-start gap-2 shadow-sm"
              >
                <Quote size={16} className="shrink-0 text-purple-500 mt-0.5" />
                <span>“What am I supposed to become?”</span>
              </motion.div>
            </div>

            {/* Parents Love */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-zinc-800 dark:text-zinc-200 shadow-sm"
            >
              <Heart size={20} className="text-pink-500 shrink-0 mt-0.5 animate-pulse" />
              <p className="text-xs sm:text-sm">
                The only thing that held me together was the pure love of my parents. They gave me{" "}
                <strong className="text-pink-600 dark:text-pink-400">
                  love, hope, and strength
                </strong>
                .
              </p>
            </motion.div>

            {/* Turning Point */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-base font-bold text-purple-700 dark:text-purple-300">
                <Compass size={18} />
                <h4>✨ Turning Point</h4>
              </div>
              <p>
                I entered college filled with confusion. No tech background, no clarity. But I decided to learn steadily. Slowly, I explored Web Development, doing small projects and online courses.
              </p>
              <p className="italic text-purple-700 dark:text-purple-300 font-medium pt-1">
                The real turning point came when someone believed in me — more than I believed in myself.
              </p>
            </div>

            {/* Today */}
            <div className="space-y-3 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <div className="flex items-center gap-2 text-base font-bold text-purple-700 dark:text-purple-300">
                <Rocket size={18} />
                <h4>🚀 Today</h4>
              </div>
              <p>Today, I’m actively growing my technical capabilities:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <motion.div whileHover={{ scale: 1.03 }} className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/40 dark:border-white/5 cursor-default">
                  <strong className="text-purple-600 dark:text-purple-400">Frontend:</strong> React, Next.js, Tailwind CSS
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/40 dark:border-white/5 cursor-default">
                  <strong className="text-purple-600 dark:text-purple-400">Backend:</strong> JavaScript, Go
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/40 dark:border-white/5 cursor-default">
                  <strong className="text-purple-600 dark:text-purple-400">Validation:</strong> Zod, React Hook Form
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 border border-white/40 dark:border-white/5 cursor-default">
                  <strong className="text-purple-600 dark:text-purple-400">Projects:</strong> Chatbot, Food App, Portfolio
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Belief */}
        <div className="pt-6 text-center">
          <p className="text-sm sm:text-base font-medium text-purple-600 dark:text-purple-300 italic">
            “I am a steady learner — patient, focused, and moving forward every day. I believe something beautiful is waiting for those who don’t give up.”
          </p>
        </div>
      </motion.div>
    </TiltCard>
  );
};
