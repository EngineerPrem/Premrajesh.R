'use client';

export const FooterSection = () => {
  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-5 pb-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <p>© {new Date().getFullYear()} <span className="font-semibold text-zinc-800 dark:text-zinc-200">Premrajesh Ravichandran</span>. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
};
