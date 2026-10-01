import { HeroSection } from "./components/organisms/heroSection";
import { AboutTemplate } from "./components/template/aboutTemplate";
import { BlogTemplate } from "./components/template/blogTemplate";
import { CertificatePage } from "./components/template/certificateTemplate";
import { ContactTemplate } from "./components/template/contactTemplate";
import { ProjectsPage } from "./components/template/projectTemplate";
import { ResumeTemplate } from "./components/template/resumeTemplate";
import { BackgroundMesh } from "./components/atoms/BackgroundMesh";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50/50 dark:bg-[#080c14] text-zinc-900 dark:text-zinc-100 transition-colors duration-500 overflow-hidden">

      {/* Dynamic Ambient Background Mesh & Glow Orbs */}
      <BackgroundMesh />

      {/* Main Sections with Staggered Scroll Transitions */}
      <main className="relative z-10">
        <HeroSection />
        <AboutTemplate />
        <ResumeTemplate />
        <ProjectsPage />
        <CertificatePage />
        <BlogTemplate />
        <ContactTemplate />
      </main>
    </div>
  );
}