'use client';

export const BackgroundMesh = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Floating Ambient Mesh Orbs */}
      <div className="absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/20 to-transparent blur-[130px] animate-float-ambient" />
      <div className="absolute top-[30%] -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-500/20 to-transparent blur-[140px] animate-float-reverse" />
      <div className="absolute top-[65%] -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-600/20 via-purple-600/20 to-transparent blur-[130px] animate-float-ambient" />
      <div className="absolute -bottom-36 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-purple-700/25 via-indigo-500/20 to-transparent blur-[150px] animate-float-reverse" />
    </div>
  );
};
