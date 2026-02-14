'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each block separately
      gsap.utils.toArray<HTMLElement>('.animate-block').forEach((block) => {
        gsap.from(block.querySelectorAll('.animate-item'), {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      id="about"
      ref={containerRef}
      className="min-h-screen px-4 md:px-10 py-14 text-zinc-900 dark:text-zinc-100"
    >
      {/* PAGE TITLE */}
      <section className="animate-block mb-12 text-center">
        <h1 className="animate-item text-4xl p-4 font-bold text-purple-600 dark:text-purple-400">
          About Me
        </h1>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-4 text-center shadow-sm">
         <p className="italic text-purple-600 dark:text-purple-400 ">
            💡 Building clean, usable, and scalable web applications with consistency and clarity.
          </p>
        </div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <section className="space-y-12">
          {/* ABOUT ME */}
          <div className="animate-block">
            <h2 className="animate-item text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              👨‍💻 About Me
            </h2>
            <p className="animate-item text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I am a focused and consistent software developer who values clarity,
              structure, and long-term improvement. I enjoy building clean user
              interfaces and understanding systems from the ground up.
            </p>
          </div>

          {/* LEARNING JOURNEY */}
          <div className="animate-block">
            <h2 className="animate-item text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              📘 Learning Journey
            </h2>
            <p className="animate-item text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I started with minimal exposure to programming and built my skills
              through consistent practice and strong fundamentals. This journey
              shaped my problem-solving mindset and discipline.
            </p>
          </div>

          {/* FUTURE GOALS */}
          <div className="animate-block">
            <h2 className="animate-item text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              🎯 Future Goals
            </h2>
            <p className="animate-item text-zinc-700 dark:text-zinc-300 leading-relaxed">
              My goal is to grow into a reliable developer with strong technical
              depth, capable of building meaningful applications and contributing
              effectively to team success.
            </p>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="space-y-12">
          {/* AT PRESENT */}
          <div className="animate-block">
            <h2 className="animate-item text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              🏢 At Present
            </h2>
            <p className="animate-item text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I am currently working at <strong>MySoaring</strong> as a
              <strong> Software Developer</strong>, contributing to application
              development, UI improvements, bug fixing, and team collaboration
              in a professional environment.
            </p>
          </div>

          {/* PERSONAL TRAITS */}
          <div className="animate-block">
            <h2 className="animate-item text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
              🧠 Personal Traits
            </h2>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              {[
                '🎵 Enjoys music while learning',
                '📈 Consistent and disciplined learner',
                '🤝 Comfortable working independently or in teams',
                '🌙 Enjoys focused late-night learning sessions',
                '🌍 Believes in kindness, consistency, and lifelong learning',
              ].map((trait, i) => (
                <li key={i} className="animate-item">
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};





// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// export const AboutTemplate = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.from('.animate', {
//         opacity: 0,
//         y: 30,
//         duration: 0.7,
//         ease: 'power2.out',
//         stagger: 0.12,
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main
//       id="about"
//       ref={containerRef}
//       className="min-h-screen px-4 md:px-10 py-10 text-zinc-900 dark:text-zinc-100"
//     >
//       {/* PAGE TITLE */}
//       <h1 className="animate text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-8">
//         About Me
//       </h1>

//       {/* TAGLINE – FULL WIDTH */}
//       <div className="animate max-w-6xl mx-auto mb-12">
//         <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 text-center shadow-sm">
//           <p className="italic text-purple-600 dark:text-purple-400 ">
//             💡 Building clean, usable, and scalable web applications with consistency and clarity.
//           </p>
//         </div>
//       </div>

//       {/* TWO COLUMN LAYOUT */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT COLUMN */}
//         <section className="space-y-10">
//           {/* ABOUT ME */}
//           <div className="animate">
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
//               👨‍💻 About Me
//             </h2>
//             <p className="text-sm  text-zinc-700 dark:text-zinc-300">
//               I am a focused and consistent software developer who values clarity,
//               structure, and long-term improvement. I enjoy building clean user
//               interfaces and understanding systems from the ground up.
//             </p>
//           </div>

//           {/* LEARNING JOURNEY */}
//           <div className="animate">
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
//               📘 Learning Journey
//             </h2>
//             <p className=" text-zinc-700 dark:text-zinc-300">
//               I began with minimal exposure to programming and gradually built my
//               skills by focusing on fundamentals, consistent practice, and
//               step-by-step learning. This journey shaped my problem-solving mindset.
//             </p>
//           </div>

//           {/* FUTURE GOALS */}
//           <div className="animate">
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
//               🎯 Future Goals
//             </h2>
//             <p className=" text-zinc-700 dark:text-zinc-300">
//               My goal is to grow into a reliable developer who builds meaningful
//               applications, strengthens technical depth, and contributes
//               effectively to collaborative teams.
//             </p>
//           </div>
//         </section>

//         {/* RIGHT COLUMN */}
//         <section className="space-y-10">
//           {/* AT PRESENT */}
//           <div className="animate">
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
//               🏢 At Present
//             </h2>
//             <p className=" text-zinc-700 dark:text-zinc-300">
//               I am currently working at <strong>MySoaring</strong> as a
//               <strong> Software Developer</strong>, contributing to application
//               development, UI enhancements, bug fixing, and team collaboration
//               in a professional environment.
//             </p>
//           </div>

//           {/* PERSONAL TRAITS */}
//           <div className="animate">
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
//               🧠 Personal Traits
//             </h2>
//             <ul className=" list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
//               <li>🎵 I enjoy listening to music while learning</li>
//               <li>📈 Consistent and disciplined learner</li>
//               <li>💫 I’ve been deeply inspired by someone specialy</li>
//               <li>🤝 Comfortable working independently or in teams</li>
//               <li>🌙 I enjoy late-night learning sessions</li>
//               <li>🌍 I believe in kindness, consistency, and lifelong learning.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };
