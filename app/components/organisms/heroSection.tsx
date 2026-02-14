"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT ENTRY
      gsap.from(textRef.current, {
        x: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      });

      // IMAGE ENTRY
      gsap.from(imageRef.current, {
        x: -80,
        autoAlpha: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // FLOATING LOOP
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[90vh]
        flex
        flex-col-reverse
        lg:flex-row-reverse
        items-center
        sm:gap-10
        md:gap-15
        lg:gap-30
        sm:px-10 
        md:px-14
        lg:px-20
        py-12
        max-w-5xl
        mx-auto
      "
    >
      {/* TEXT SECTION */}
      <div
        ref={textRef}
        className="
          w-full
          lg:w-1/2
          text-center
          lg:text-left
          space-y-6
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            bg-gradient-to-r
            from-orange-500
            via-red-500
            to-purple-600
            bg-clip-text
            text-transparent
          "
        >
          Hi, I'm Premrajesh Ravichandran
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0">
          Currently working as a Software Developer at MySoaring, focused on
          building clean, scalable, and user-focused applications.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
          <Link href="#project">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-semibold shadow-md hover:shadow-orange-500/50 transition">
              🚀 View Projects
            </button>
          </Link>

          <Link href="#resume">
            <button className="px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition font-semibold">
              💼 See My Skills
            </button>
          </Link>

          <Link href="#contact">
            <button className="px-6 py-3 rounded-xl border-2 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 transition font-semibold">
              ✉️ Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div
        ref={imageRef}
        className="
          w-full
          lg:w-1/2
          flex
          justify-center
          mb-10
          lg:mb-0
        "
      >
        <div
          className="
            relative
            w-[240px]
            h-[240px]
            sm:w-[280px]
            sm:h-[280px]
            md:w-[320px]
            md:h-[320px]
            lg:w-[400px]
            lg:h-[400px]
          "
        >
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="rounded-full object-cover border-4 border-red-400 dark:border-purple-500 shadow-[0_0_45px_rgba(255,80,100,0.55)]"
            priority
          />
        </div>
      </div>
    </section>
  );
};




// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import Link from "next/link";

// export const HeroSection = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);


//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // TEXT ANIMATION
//       gsap.from(textRef.current, {
//         x: 80,
//         autoAlpha: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       // IMAGE ENTRY
//       gsap.from(imageRef.current, {
//         x: -80,
//         autoAlpha: 0,
//         scale: 0.9,
//         duration: 1,
//         ease: "power3.out",
//         delay: 0.2,
//       });

//       // IMAGE FLOAT LOOP
//       gsap.to(imageRef.current, {
//         y: -15,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: 1.2,
//       });

     
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[90vh] flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-20 py-10"
//     >
//       {/* RIGHT TEXT */}
//       <div
//         ref={textRef}
//         className="md:w-1/2 text-center md:text-left space-y-6"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
//           Hi, I'm Premrajesh Ravichandran
//         </h1>

//         <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-lg mx-auto md:mx-0">
//           Currently working as a Software Developer at MySoaring, focused on
//           building clean, scalable, and user-focused applications.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <Link href="#project">
//             <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-semibold shadow-md hover:shadow-orange-500/50 transition">
//               🚀 View Projects
//             </button>
//           </Link>

//           <Link href="#resume">
//            <button className="px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition font-semibold">
//               💼 See My Skills
//             </button>
//           </Link>

//           <Link href="#contact">
//             <button className="px-6 py-3 rounded-xl border-2 border-green-500 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900 transition font-semibold">
//               ✉️ Contact Me
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* LEFT IMAGE */}
//       <div
//         ref={imageRef}
//         className="md:w-1/2 flex justify-center mb-10 md:mb-0"
//       >
//         <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
//           <Image
//             src="/profile.png"
//             alt="Profile"
//             fill
//             className="rounded-full object-cover border-4 border-red-400 dark:border-purple-500 shadow-[0_0_45px_rgba(255,80,100,0.55)]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
