"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Briefcase,
  GraduationCap,
  Sparkles,
  Code,
  Server,
  Layers,
  Database,
  Wrench,
  CheckCircle2,
  Calendar,
  Award,
} from "lucide-react";
import { TiltCard } from "../atoms/TiltCard";

const techCategories = [
  {
    title: "Frontend Development",
    subtitle: "Modern client-side frameworks & web standards",
    icon: Code,
    badge: "6 Technologies",
    accentColor: "purple",
    borderColor: "border-purple-400/60 dark:border-purple-500/50 hover:border-purple-500",
    badgeBorderColor: "border-purple-200 dark:border-purple-800/60",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Systems",
    subtitle: "Scalable server architectures & API ecosystems",
    icon: Server,
    badge: "5 Technologies",
    accentColor: "indigo",
    borderColor: "border-indigo-400/60 dark:border-indigo-500/50 hover:border-indigo-500",
    badgeBorderColor: "border-indigo-200 dark:border-indigo-800/60",
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
    skills: ["Node.js", "NestJS", "Go (Basics)", "RESTful APIs", "OOP Architecture"],
  },
  {
    title: "Databases & ORM",
    subtitle: "Relational data modeling & query optimization",
    icon: Database,
    badge: "4 Technologies",
    accentColor: "emerald",
    borderColor: "border-emerald-400/60 dark:border-emerald-500/50 hover:border-emerald-500",
    badgeBorderColor: "border-emerald-200 dark:border-emerald-800/60",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    skills: ["PostgreSQL", "MySQL", "SQL Queries", "TypeORM"],
  },
  {
    title: "UI Systems & Animation",
    subtitle: "Design engineering, micro-interactions & responsive UX",
    icon: Layers,
    badge: "6 Technologies",
    accentColor: "pink",
    borderColor: "border-pink-400/60 dark:border-pink-500/50 hover:border-pink-500",
    badgeBorderColor: "border-pink-200 dark:border-pink-800/60",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400",
    skills: ["Tailwind CSS", "Material UI", "Framer Motion", "GSAP", "Responsive UX", "Glassmorphism"],
  },
  {
    title: "Developer Tools & Workflow",
    subtitle: "Version control, tooling & dev environments",
    icon: Wrench,
    badge: "5 Tools",
    accentColor: "amber",
    borderColor: "border-amber-400/60 dark:border-amber-500/50 hover:border-amber-500",
    badgeBorderColor: "border-amber-200 dark:border-amber-800/60",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Postman API"],
  },
  {
    title: "Validation & Methodologies",
    subtitle: "Type safety, schema validation & clean code",
    icon: CheckCircle2,
    badge: "5 Practices",
    accentColor: "cyan",
    borderColor: "border-cyan-400/60 dark:border-cyan-500/50 hover:border-cyan-500",
    badgeBorderColor: "border-cyan-200 dark:border-cyan-800/60",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    skills: ["Zod Validation", "Joi Schema", "React Hook Form", "Agile / Scrum", "Clean Architecture"],
  },
];

export const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "projects">("overview");

  return (
    <section id="resume" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2 relative overflow-hidden">
          <Sparkles size={14} className="text-purple-500" />
          <span>Qualifications & Experience</span>
          <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Professional <span className="text-gradient-purple">Overview</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A summary of my hands-on industry experience, formal engineering education, and core technical skills.
        </p>

        {/* View Switcher Tabs */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-5">
          <div className="glass-card p-1.5 rounded-2xl inline-flex flex-wrap justify-center border-2 border-purple-300/40 dark:border-zinc-700/80 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeTab === "overview"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
                }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeTab === "skills"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
                }`}
            >
              💻 Tech Stack & Skills
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeTab === "projects"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
                }`}
            >
              Industry Project Highlights
            </button>
          </div>
        </div>
      </motion.div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="space-y-10">
          {/* WORK EXPERIENCE & EDUCATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* WORK EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border-2 border-purple-400/40 dark:border-zinc-800 shadow-md hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Work Experience
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Professional Background</span>
                </div>
              </div>

              {/* Experience List with Animated Laser Track */}
              <div className="relative pl-7 sm:pl-8 border-l-2 border-purple-500/30 dark:border-purple-500/40 space-y-7">
                {/* Laser beam pulse */}
                <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none">
                  <div className="laser-beam" />
                </div>

                {/* 1. S10 Health Care Solutions */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[45px] sm:-left-[49px] top-0.5 w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-purple-500/60 shadow-md shadow-purple-500/20 flex items-center justify-center p-1 z-10 transition-transform duration-300 hover:scale-115">
                    <Image
                      src="/s10.png"
                      alt="S10 Health Care Solutions"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                      Full Stack Developer Intern — <span className="text-purple-600 dark:text-purple-400">S10 Health Care Solutions</span>
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                      <Calendar size={12} />
                      24-Aug-2026 to Present
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>Contributing to core application development, UI enhancements, bug fixing, and team collaboration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>Implementing scalable features and REST API integrations in a production healthcare tech ecosystem.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. My Soaring */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[45px] sm:-left-[49px] top-0.5 w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-indigo-500/60 shadow-md shadow-indigo-500/20 flex items-center justify-center p-0.5 z-10 transition-transform duration-300 hover:scale-115">
                    <Image
                      src="/Soaring Logo.png"
                      alt="My Soaring"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain scale-140"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                      Full Stack Developer — <span className="text-indigo-600 dark:text-indigo-400">My Soaring</span>
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                      <Calendar size={12} />
                      Jun-2025 to July 2026
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>Contributed to frontend development and user interface improvements across production web applications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>Worked on feature implementation, component design, bug fixing, and client deliverables.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>Built and maintained scalable components with React.js, Tailwind CSS, and Node.js.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Round's Edge Technology */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[45px] sm:-left-[49px] top-0.5 w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-pink-500/60 shadow-md shadow-pink-500/20 flex items-center justify-center p-1 z-10 transition-transform duration-300 hover:scale-115">
                    <Image
                      src="/Rounds-edge-tech.png"
                      alt="Round's Edge Technology"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                      Frontend Developer Intern — <span className="text-pink-600 dark:text-pink-400">Round's Edge Technology</span>
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300">
                      <Calendar size={12} />
                      Mar 2025 to April 2025
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-pink-500 shrink-0 mt-0.5" />
                      <span>Focused on collaborative frontend development, responsive user interface design, and clean code principles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-pink-500 shrink-0 mt-0.5" />
                      <span>Gained hands-on experience building interactive web components and modern developer workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-2 border-indigo-400/40 dark:border-zinc-800 shadow-md hover:border-indigo-500/50 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      Education
                    </h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Academic Foundations & Honors</span>
                  </div>
                </div>

                <div className="space-y-5 relative pl-6 border-l-2 border-indigo-500/30 dark:border-indigo-500/40">
                  {/* Laser beam pulse */}
                  <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none">
                    <div className="laser-beam" style={{ animationDelay: '1.5s' }} />
                  </div>

                  {/* 1. M.E. Degree */}
                  <div className="relative space-y-1.5">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-zinc-900 shadow-md shadow-purple-500/50" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        M.E. Computer Science and Engineering
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                        <Calendar size={11} />
                        2026 – 2028
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      Park College of Engineering and Technology
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Pursuing advanced postgraduate studies focusing on scalable systems, distributed cloud computing, and advanced software engineering research.
                    </p>

                  </div>

                  {/* 2. B.E. Degree */}
                  <div className="relative space-y-1.5">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-900 shadow-md shadow-indigo-500/50" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        B.E Computer Science and Engineering
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                        <Calendar size={11} />
                        2022 – 2026
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      Park College of Technology — Anna University
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/40 dark:border-amber-800/40 text-xs font-semibold">
                      <span>🏅 High CGPA & Medalist • Best Outgoing Student Award Recipient</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Rigorous engineering foundations in Data Structures, Algorithms, Full-Stack Web Development, Database Management, and Operating Systems.
                    </p>

                  </div>

                  {/* 3. HSC */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-900 shadow-md shadow-indigo-500/50" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        Higher Secondary (HSC)
                      </h4>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2020 – 2022</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      Government Model Higher Secondary School
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Strong foundation in Mathematics, Physics, Chemistry, and Computer Science with distinguished academic marks.
                    </p>
                  </div>

                  {/* 4. SSLC */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-400 border-4 border-white dark:border-zinc-900 shadow-md shadow-indigo-500/50" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        Secondary School (SSLC)
                      </h4>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2019 – 2020</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      Government Higher Secondary School
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Foundational secondary schooling with honors and distinction in sciences and mathematics.
                    </p>
                  </div>
                </div>
              </div>

              {/* ACADEMIC HONORS RECOGNITIONS CARD AT BOTTOM */}
              <div className="pt-5 mt-6 border-t border-indigo-200/40 dark:border-indigo-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Academic Recognitions & Honors
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/40 dark:border-indigo-800/30 flex items-center gap-2.5">
                    <span className="text-lg">🏆</span>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-white">Best Outgoing Student</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Awarded for all-around excellence</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200/40 dark:border-purple-800/30 flex items-center gap-2.5">
                    <span className="text-lg">🥇</span>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-white">Academic Medalist</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Honored for high CGPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* DEDICATED FULL-WIDTH TECH STACK SHOWCASE WITH PROMINENT VISIBLE BORDERS */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm border-2 border-purple-500/30">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    Tech Stack & Core Technical Skills
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Comprehensive languages, frameworks, databases, and engineering tools
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-2 border-purple-300/60 dark:border-purple-800/60 w-fit shadow-xs">
                <Sparkles size={13} className="text-purple-500" />
                <span>30+ Technologies & Frameworks</span>
              </span>
            </div>

            {/* 6 BALANCED CATEGORY CARDS IN 3-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TiltCard key={category.title} maxTilt={5} className="h-full">
                    <div
                      className={`glass-card p-5 sm:p-6 rounded-3xl h-full flex flex-col justify-between border-2 ${category.borderColor} shadow-md hover:shadow-xl transition-all duration-300 space-y-4 bg-white/70 dark:bg-zinc-900/70`}
                    >
                      <div>
                        {/* Category Header */}
                        <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-9 h-9 rounded-xl ${category.iconBg} flex items-center justify-center shadow-xs shrink-0 border border-current/20`}
                            >
                              <Icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-zinc-900 dark:text-white leading-tight">
                                {category.title}
                              </h4>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                {category.subtitle}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${category.badgeBorderColor} bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 shrink-0 shadow-xs`}
                          >
                            {category.badge}
                          </span>
                        </div>

                        {/* Skill Badges with Distinct Visible Borders */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.skills.map((skill) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.06, y: -2 }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-400 text-zinc-800 dark:text-zinc-200 shadow-xs hover:shadow-sm transition-all cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span>{skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* CENTERED: WORKING STYLE & MINDSET */}
          <div className="mt-8 max-w-4xl mx-auto w-full">
            <TiltCard maxTilt={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-indigo-400/40 dark:border-indigo-500/40 shadow-md space-y-6 bg-white/70 dark:bg-zinc-900/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-500/30">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        Working Style & Engineering Mindset
                      </h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Core work ethics & development habits</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300/60 dark:border-indigo-800/60 w-fit shadow-xs">
                    <span>🚀 High Ownership</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-purple-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Practical Problem Solver</strong>
                      Strong analytical approach, breaking complex tasks into clear, testable steps.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-indigo-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Consistent & Adaptable</strong>
                      Disciplined daily learner quickly picking up new frameworks, tools, and paradigms.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-pink-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">User & Performance Driven</strong>
                      Focused on clean, accessible, fast, and responsive user interfaces.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Collaborative Teammate</strong>
                      Effective in cross-functional standups, reviews, and autonomous delivery.
                    </div>
                  </div>
                </div>

                {/* Core Competencies Badges */}
                <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
                    Key Engineering Practices
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Rapid Prototyping", "Modular Code", "Type Safety", "RESTful APIs", "Agile Workflows", "Clean UI Architecture"].map((badge) => (
                      <span key={badge} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 border-2 border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 shadow-xs">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      )}

      {/* TAB: DEDICATED TECH STACK VIEW */}
      {activeTab === "skills" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          {/* TECH STACK SHOWCASE */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm border-2 border-purple-500/30">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    Tech Stack & Core Technical Skills
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Comprehensive languages, frameworks, databases, and engineering tools
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-2 border-purple-300/60 dark:border-purple-800/60 w-fit shadow-xs">
                <Sparkles size={13} className="text-purple-500" />
                <span>30+ Technologies & Frameworks</span>
              </span>
            </div>

            {/* 6 BALANCED CATEGORY CARDS IN 3-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TiltCard key={category.title} maxTilt={5} className="h-full">
                    <div
                      className={`glass-card p-5 sm:p-6 rounded-3xl h-full flex flex-col justify-between border-2 ${category.borderColor} shadow-md hover:shadow-xl transition-all duration-300 space-y-4 bg-white/70 dark:bg-zinc-900/70`}
                    >
                      <div>
                        {/* Category Header */}
                        <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-9 h-9 rounded-xl ${category.iconBg} flex items-center justify-center shadow-xs shrink-0 border border-current/20`}
                            >
                              <Icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-zinc-900 dark:text-white leading-tight">
                                {category.title}
                              </h4>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                {category.subtitle}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${category.badgeBorderColor} bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 shrink-0 shadow-xs`}
                          >
                            {category.badge}
                          </span>
                        </div>

                        {/* Skill Badges with Distinct Visible Borders */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.skills.map((skill) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.06, y: -2 }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-400 text-zinc-800 dark:text-zinc-200 shadow-xs hover:shadow-sm transition-all cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span>{skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* CENTERED: WORKING STYLE & MINDSET */}
          <div className="mt-8 max-w-4xl mx-auto w-full">
            <TiltCard maxTilt={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-indigo-400/40 dark:border-indigo-500/40 shadow-md space-y-6 bg-white/70 dark:bg-zinc-900/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-500/30">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        Working Style & Engineering Mindset
                      </h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Core work ethics & development habits</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300/60 dark:border-indigo-800/60 w-fit shadow-xs">
                    <span>🚀 High Ownership</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-purple-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Practical Problem Solver</strong>
                      Strong analytical approach, breaking complex tasks into clear, testable steps.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-indigo-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Consistent & Adaptable</strong>
                      Disciplined daily learner quickly picking up new frameworks, tools, and paradigms.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-pink-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">User & Performance Driven</strong>
                      Focused on clean, accessible, fast, and responsive user interfaces.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700/80 shadow-xs">
                    <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <strong className="text-zinc-900 dark:text-white block mb-0.5">Collaborative Teammate</strong>
                      Effective in cross-functional standups, reviews, and autonomous delivery.
                    </div>
                  </div>
                </div>

                {/* Core Competencies Badges */}
                <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
                    Key Engineering Practices
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Rapid Prototyping", "Modular Code", "Type Safety", "RESTful APIs", "Agile Workflows", "Clean UI Architecture"].map((badge) => (
                      <span key={badge} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 border-2 border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 shadow-xs">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </motion.div>
      )}

      {/* TAB 2: PROJECT HIGHLIGHTS */}
      {activeTab === "projects" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Soaring Website */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Production Website</span>
                  <span className="text-[11px] text-zinc-500">Live</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Soaring Website</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Designed and developed a modern, responsive business website with an intuitive user interface, optimized performance, and seamless navigation across devices.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">React.js, TypeScript, Material UI, CSS</span>
              </div>
            </div>
          </TiltCard>

          {/* Edumee */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">LMS Platform</span>
                  <span className="text-[11px] text-zinc-500">Production</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Edumee Platform</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Built an educational management platform that enables students and educators to access learning resources, track progress, and manage academic activities efficiently.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">React.js, TypeScript, Node.js, NestJS, MySQL</span>
              </div>
            </div>
          </TiltCard>

          {/* Sumarg */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-pink-600 dark:text-pink-400">Enterprise Web App</span>
                  <span className="text-[11px] text-zinc-500">Live</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Sumarg Application</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Developed a comprehensive digital platform to streamline organizational operations, manage user activities, and provide an efficient dashboard experience with secure authentication.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">React.js, TypeScript, Node.js, NestJS, MySQL, Material UI</span>
              </div>
            </div>
          </TiltCard>

          {/* Portfolio Website */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Personal Project</span>
                  <span className="text-[11px] text-zinc-500">Live</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Portfolio Website</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Designed and developed a modern portfolio with animations, dark mode, responsive glassmorphic interfaces, and zod validation.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Next.js, Tailwind CSS, Framer Motion, GSAP, Zod</span>
              </div>
            </div>
          </TiltCard>

          {/* Cloud-Based AI Chatbot */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">AI / Cloud App</span>
                  <span className="text-[11px] text-zinc-500">Live</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Cloud AI Chatbot</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Developed a web-based chatbot with predefined intelligent responses and a responsive chat interface deployed on the cloud.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">HTML, CSS, JavaScript, Python (Flask)</span>
              </div>
            </div>
          </TiltCard>

          {/* Snack Ordering App */}
          <TiltCard maxTilt={6}>
            <div className="glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between h-full border-2 border-zinc-200/80 dark:border-zinc-800 hover:border-purple-500/50 shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Mobile Application</span>
                  <span className="text-[11px] text-zinc-500">Android</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Snack Ordering App</h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                  Built an authentication-based mobile application allowing users to sign in and place snack orders with intuitive UI.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tech:</span>{" "}
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Java, Kotlin, Android Studio</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      )}

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-4 pt-14"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Premrajesh_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300"
        >
          <Download size={17} />
          <span>Download Resume PDF</span>
        </motion.a>

        <Link href="#contact">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/60 dark:border-white/10 transition-all duration-300"
          >
            <Mail size={17} className="text-purple-500" />
            <span>Get in Touch</span>
          </motion.div>
        </Link>

        <Link href="#project">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 border border-white/60 dark:border-white/10 transition-all duration-300"
          >
            <Briefcase size={17} className="text-indigo-500" />
            <span>View Projects</span>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};
