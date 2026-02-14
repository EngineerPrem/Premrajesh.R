"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Download, Mail, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ResumeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Page title
      gsap.from(".resume-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      // Each resume block
      gsap.utils.toArray<HTMLElement>(".resume-block").forEach((block) => {
        gsap.from(block.querySelectorAll(".resume-item"), {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          },
        });
      });

      // CTA buttons
      gsap.from(".resume-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".resume-cta",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resume"
      ref={containerRef}
      className="min-h-screen px-6 py-10 text-zinc-900 dark:text-zinc-100"
    >
      {/* PAGE TITLE */}
      <h1 className="resume-title text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12">
        Professional Overview
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* WORKING STYLE + TECH STACK */}
        <section className="resume-block grid md:grid-cols-2 gap-10">
          {/* WORKING STYLE */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="resume-item text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Working Style
            </h2>
            <ul className="resume-item list-disc list-inside space-y-2">
              <li>Strong problem-solving mindset with practical approach</li>
              <li>
                Consistent and disciplined learner, adaptable to new tools
              </li>
              <li>Focused on clean, usable, and accessible UI</li>
              <li>Comfortable working independently and within a team</li>
            </ul>
          </div>

          {/* TECH STACK */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="resume-item text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Tech Stack
            </h2>
            <ul className="resume-item space-y-2">
              <li>
                <b>Frontend:</b> HTML, CSS, React.js, Next.js
              </li>
              <li>
                <b>Backend:</b> Node.js, Go (Basics), OOP Concepts
              </li>
              <li>
                <b>Libraries & UI:</b> Tailwind CSS, Material UI, Joi Validation
              </li>
              <li>
                <b>Database:</b> SQL
              </li>
              <li>
                <b>Tools:</b> Git, VS Code
              </li>
            </ul>
          </div>
        </section>

        {/* WORK EXPERIENCE + EDUCATION */}
        <section className="resume-block grid md:grid-cols-2 gap-10">
          {/* WORK EXPERIENCE */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="resume-item text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Work Experience
            </h2>

            <div className="resume-item">
              <h3 className="font-semibold">
                Junior Software Developer — MySoaring
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">1 Year</p>

              <ul className="list-disc list-inside space-y-2">
                <li>Contributed to frontend development and UI improvements</li>
                <li>Worked on feature implementation and bug fixing</li>
                <li>
                  Collaborated with team members on production-ready components
                </li>
                <li>Hands-on experience with real-world workflows</li>
              </ul>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="resume-item text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Education
            </h2>

            <ul className="resume-item space-y-4">
              <li>
                <p className="font-semibold">B.E Computer Science</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Park College of Technology — Anna University
                </p>
                <p className="text-xs text-zinc-500">2022 – 2026</p>
              </li>

              <li>
                <p className="font-semibold">Higher Secondary (HSC)</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Government Model Higher Secondary School
                </p>
                <p className="text-xs text-zinc-500">2020 – 2022</p>
              </li>

              <li>
                <p className="font-semibold">Secondary School (SSLC)</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Government Higher Secondary School
                </p>
                <p className="text-xs text-zinc-500">2019 – 2020</p>
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECT EXPERIENCE */}
        <section className="resume-block bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
          <h2 className="resume-item text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
            Project Experience
          </h2>

          <div className="resume-item space-y-6">
            <div>
              <h3 className="font-semibold">Cloud-Based AI Chatbot</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Developed a web-based chatbot with predefined intelligent
                responses and a responsive chat interface.
              </p>
              <p className="text-xs mt-1">
                Tech: HTML, CSS, JavaScript, Python (Flask)
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Snack Ordering App</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Built an authentication-based application allowing users to
                place orders.
              </p>
              <p className="text-xs mt-1">Tech: Java, Kotlin, Android Studio</p>
            </div>

            <div>
              <h3 className="font-semibold">Portfolio Website</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Designed and developed a modern portfolio with animations and
                validation.
              </p>
              <p className="text-xs mt-1">
                Tech: Next.js, Tailwind CSS, GSAP, Zod
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="resume-cta flex flex-wrap justify-center gap-5 pt-10">
          <a
            href="/Premrajesh Ravichandran.pdf"
            download
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          <Link
            href="#contact"
            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 px-6 py-3 rounded-xl shadow transition"
          >
            <Mail size={18} />
            Get in Touch
          </Link>

          <Link
            href="#project"
            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 px-6 py-3 rounded-xl shadow transition"
          >
            <Briefcase size={18} />
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// 'use client';

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Download, Mail, Briefcase } from "lucide-react";

// // Motion Link
// const MotionLink = motion(Link);

// export const ResumeSection = () => {
//   return (
//     <section
//       id="resume"
//       className="min-h-screen px-6 py-6  text-zinc-900 dark:text-zinc-100"
//     >
//       {/* PAGE TITLE */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-10"
//       >
//         Professional Overview
//       </motion.h1>

//       <div className="max-w-5xl mx-auto space-y-3">

//         {/* WORKING STYLE + TECH STACK */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="grid md:grid-cols-2 gap-10"
//         >
//           {/* WORKING STYLE */}
//           <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
//             <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
//               Working Style
//             </h2>
//             <ul className="list-disc list-inside space-y-2 ">
//               <li>Strong problem-solving mindset with practical approach</li>
//               <li>Consistent and disciplined learner, adaptable to new tools</li>
//               <li>Focused on clean, usable, and accessible UI</li>
//               <li>Comfortable working independently and within a team</li>
//             </ul>
//           </div>

//           {/* TECH STACK */}
//           <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow">
//             <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
//               Tech Stack
//             </h2>
//             <ul className=" space-y-2 ">
//               <li><b>Frontend:</b> HTML, CSS, React.js, Next.js</li>
//               <li><b>Backend:</b> Node.js, Go (Basics), OOP Concepts</li>
//               <li><b>Libraries & UI:</b> Tailwind CSS, Material UI, Joi Validation</li>
//               <li><b>Database:</b> SQL</li>
//               <li><b>Tools:</b> Git, VS Code</li>
//             </ul>
//           </div>
//         </motion.section>

//         {/* WORK EXPERIENCE */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow"
//         >
//           <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
//             Work Experience
//           </h2>

//           <div >
//             <h3 className="font-semibold">
//               Junior Software Developer — MySoaring
//             </h3>
//             <p className="text-zinc-600 dark:text-zinc-400 mb-3">1 Year</p>

//             <ul className="list-disc list-inside space-y-2">
//               <li>Contributed to frontend development and UI improvements</li>
//               <li>Worked on feature implementation and bug fixing</li>
//               <li>Collaborated with team members on production-ready components</li>
//               <li>Gained experience with real-world development workflows</li>
//             </ul>
//           </div>
//         </motion.section>

//         {/* PROJECT EXPERIENCE */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow"
//         >
//           <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
//             Project Experience
//           </h2>

//           <div className="space-y-6 ">
//             <div>
//               <h3 className="font-semibold">Cloud-Based AI Chatbot</h3>
//               <p className="text-zinc-600 dark:text-zinc-400">
//                 Developed a web-based chatbot with predefined intelligent responses
//                 and a responsive chat interface. Focused on logical flow and UI clarity.
//               </p>
//               <p className="text-xs mt-1">Tech: HTML, CSS, JavaScript, Python (Flask)</p>
//             </div>

//             <div>
//               <h3 className="font-semibold">Snack Ordering App</h3>
//               <p className="text-zinc-600 dark:text-zinc-400">
//                 Built an authentication-based application allowing users to log in
//                 and place snack orders with real-time feedback.
//               </p>
//               <p className="text-xs mt-1">Tech: Java, Kotlin, Android Studio</p>
//             </div>

//             <div>
//               <h3 className="font-semibold">Portfolio Website</h3>
//               <p className="text-zinc-600 dark:text-zinc-400">
//                 Designed and developed a personal portfolio showcasing projects,
//                 blogs, resume, and contact information with modern UI and animations.
//               </p>
//               <p className="text-xs mt-1">
//                 Tech: Next.js, Tailwind CSS, Framer Motion, Zod
//               </p>
//             </div>
//           </div>
//         </motion.section>

//         {/* CALL TO ACTION */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-5 pt-10"
//         >
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="/Premrajesh Ravichandran.pdf"
//             download
//             className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow"
//           >
//             <Download size={18} />
//             Download Resume
//           </motion.a>

//           <MotionLink
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#contact"
//             className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 px-6 py-3 rounded-xl shadow"
//           >
//             <Mail size={18} />
//             Get in Touch
//           </MotionLink>

//           <MotionLink
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#project"
//             className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 px-6 py-3 rounded-xl shadow"
//           >
//             <Briefcase size={18} />
//             View Projects
//           </MotionLink>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
