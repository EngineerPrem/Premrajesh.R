'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import ThemeToggle from '../../../data/ThemeToggle';
import { Menu, X, FileDown } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#project' },
  { label: 'Certificates', href: '#certificate' },
  { label: 'Blogs', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Stable bottom detection to prevent contact indicator flickering
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (window.scrollY + windowHeight >= documentHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const sections = ['about', 'resume', 'project', 'certificate', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="relative z-30 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-4 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900">
                <Image
                  src="/logo.png"
                  alt="Premrajesh Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Premrajesh Ravichandran
              </span>
              <span className="text-[11px] font-medium text-purple-600 dark:text-purple-400 -mt-1 hidden sm:inline-block">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 glass-card px-3 py-1.5 rounded-full border border-white/50 dark:border-white/10 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md shadow-purple-500/25 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <a
              href="/Premrajesh_Resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800/80 hover:bg-purple-200/80 dark:hover:bg-purple-900/60 transition-all shadow-sm"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-purple-100/50 dark:hover:bg-zinc-800/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-50 lg:hidden glass-panel rounded-2xl p-5 shadow-2xl border border-white/40 dark:border-white/10"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-500/20'
                          : 'text-zinc-800 dark:text-zinc-200 hover:bg-purple-50 dark:hover:bg-zinc-800/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-xs">●</span>}
                    </Link>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                  <a
                    href="/Premrajesh_Resume.pdf"
                    download
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 py-1"
                  >
                    <FileDown size={16} />
                    <span>Download Resume PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
