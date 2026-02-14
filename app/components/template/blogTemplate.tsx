import { LifeJourneySection } from "../organisms/LifeJourneySection";
import { MiniBlogSection } from "../organisms/miniBlogSection";

export const BlogTemplate = () => {
  return (
    <div
      className="min-h-screen px-4 py-12 text-zinc-900 dark:text-zinc-100   mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      id="blog"
    >


      <div>
        <LifeJourneySection />
      </div>


      <div>
        <MiniBlogSection />
      </div>

    </div>
  );
};
