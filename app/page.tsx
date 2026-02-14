
import { HeroSection } from "./components/organisms/heroSection";
import { AboutTemplate } from "./components/template/aboutTemplate";
import { BlogTemplate } from "./components/template/blogTemplate";
import { CertificatePage } from "./components/template/certificateTemplate";
import { ContactTemplate } from "./components/template/contactTemplate";
import { ProjectsPage } from "./components/template/projectTemplate";
import { ResumeTemplate } from "./components/template/resumeTemplate";





export default function HomePage() {
  return (
    <section className="bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-black dark:via-zinc-900 dark:to-black">
      <HeroSection />
      <AboutTemplate />
      <ResumeTemplate />
      <ProjectsPage />
      <CertificatePage />
      <BlogTemplate />
      <ContactTemplate />


    </section>
  )
}