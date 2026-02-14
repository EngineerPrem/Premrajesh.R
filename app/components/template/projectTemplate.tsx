"use client";

import { useState } from "react";

import { ProjectData } from "@/data/projectData";
import { ProjectSection } from "../organisms/projectSection";

export const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-[90vh] px-6 py-8 mb-10 text-black dark:text-white" id="project">
      <h2 className="text-4xl font-bold mb-10 text-center text-purple-600">
        My Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map((proj, idx) => (
          <ProjectSection
            key={idx}
            {...proj}
            onLearnMore={() => {
              setModalContent(proj.learnMore.content);
              setShowModal(true);
            }}
            onLiveClick={(live) => {
              if (!live) setShowComingSoon(true);
              else window.open(live, "_blank");
            }}
          />
        ))}
      </div>

      {/* Learn More Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg w-[90%] max-w-xl shadow-lg">
            <div className="mb-4">{modalContent}</div>

            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-red-500">Coming Soon</h2>

            <p className="mb-4">
              This project’s live preview will be available soon.
            </p>

            <button
              onClick={() => setShowComingSoon(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
};


