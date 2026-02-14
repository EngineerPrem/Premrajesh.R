'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/data/ThemeToggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: '👨‍💻 About', href: '#about' },
  { label: '📄 Resume', href: '#resume' },
  { label: '📁 Projects', href: '#project' },
  { label: '🧠 Certificates', href: '#certificate' },
  { label: '📝 Blogs', href: '#blog' },
  { label: '✉️ Contact', href: '#contact' },
];

export const NavbarSection = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -100 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4
        backdrop-blur-md shadow-md border-b
        bg-blue-400 dark:bg-zinc-900/90
        border-zinc-200 dark:border-zinc-700"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-zinc-900 dark:text-white">
            Premrajesh Ravichandran
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex gap-6 hide-on-small">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`relative font-medium px-2 py-1 transition-all ${
                  pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-500 dark:bg-indigo-400 rounded"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-md text-zinc-700 dark:text-white show-on-small hide-on-large"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="show-on-small fixed top-16 left-0 w-full z-40
            bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md
            border-b dark:border-zinc-700
            flex flex-col gap-6 p-6 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${
                  pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-800 dark:text-zinc-100 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom breakpoint CSS */}
      <style jsx>{`
        @media (max-width: 1126px) {
          .hide-on-small {
            display: none !important;
          }
          .show-on-small {
            display: flex !important;
          }
        }

        @media (min-width: 1126px) {
          .hide-on-large {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};








// 'use client';

// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from '@/data/ThemeToggle';
// import { Menu, X } from 'lucide-react';
// import Image from 'next/image';

// const navItems = [
//     { label: '👨‍💻 About', href: '#about' },
//     { label: '📁 Projects', href: '#project' },
//     { label: '📄 Resume', href: '#resume' },
//     { label: '✉️ Contact', href: '#contact' },
//     { label: '📝 Blogs', href: '#blog' },
//     { label: '🧠 Certificates', href: '#certificate' },
// ];

// export const NavbarSection = () => {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <motion.nav
//                 initial={{ y: -80, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ type: 'spring', stiffness: 80, damping: 12 }}
//                 className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4
//         backdrop-blur-md shadow-md border-b
//         bg-blue-400 dark:bg-zinc-900/90
//         border-zinc-200 dark:border-zinc-700
//         transition-all duration-300"
//             >
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 shadow-sm">
//                         <Image
//                             src="/logo.png"
//                             alt="Logo"
//                             width={40}
//                             height={40}
//                             className="object-cover"
//                         />
//                     </div>
//                     <span className="text-xl font-bold text-zinc-900 dark:text-white">
//                         Premrajesh Ravichandran
//                     </span>
//                 </Link>

//                 {/* Desktop Nav Links */}
//                 <div className="flex gap-6 hide-on-small">
//                     {navItems.map((item) => (
//                         <motion.div key={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//                             <Link
//                                 href={item.href}
//                                 className={`relative font-medium transition-all px-2 py-1 ${pathname === item.href
//                                     ? 'text-indigo-600 dark:text-indigo-400'
//                                     : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400'
//                                     }`}
//                             >
//                                 {item.label}
//                                 {pathname === item.href && (
//                                     <motion.span
//                                         layoutId="underline"
//                                         className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-500 dark:bg-indigo-400 rounded"
//                                     />
//                                 )}
//                             </Link>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Right Controls */}
//                 <div className="flex items-center gap-4">
//                     <ThemeToggle />

//                     {/* Hamburger Menu Button */}
//                     <button
//                         className="p-2 rounded-md text-zinc-700 dark:text-white show-on-small hide-on-large"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>
//             </motion.nav>

//             {/* Mobile Slide Down Menu */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         key="mobileMenu"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.25 }}
//                         className="show-on-small fixed top-16 left-0 w-full bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md border-b dark:border-zinc-700 flex flex-col gap-6 p-6 z-40 shadow-lg"
//                     >
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 onClick={() => setIsOpen(false)}
//                                 className={`text-lg font-semibold ${pathname === item.href
//                                     ? 'text-indigo-600 dark:text-indigo-400'
//                                     : 'text-zinc-800 dark:text-zinc-100 hover:text-indigo-500 dark:hover:text-indigo-400'
//                                     }`}
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Custom CSS for 1126px breakpoint */}
//             <style jsx>{`
//         @media (max-width: 1126px) {
//           .hide-on-small {
//             display: none !important;
//           }
//           .show-on-small {
//             display: flex !important;
//           }
//         }

//         @media (min-width: 1126px) {
//           .hide-on-large {
//             display: none !important;
//           }
//         }
//       `}</style>
//         </>
//     );
// };

