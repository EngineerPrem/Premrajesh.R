import React from "react";

export interface ProjectType {
  title: string;
  description: string;
  live: string;
  code: string;
  image: string;
  learnMore: {
    content: React.ReactNode;
  };
}

export const ProjectData: ProjectType[] = [
  {
    title: "Cloud-based AI Chatbot",
    description:
      "An intelligent chatbot powered by AI, deployed on the cloud with real-time responses.",
    live: "https://dainty-cocada-e4d956.netlify.app/",
    code: "https://github.com/EngineerPrem/Cloud-base-AI-Chatbot",
    image: "/Cloud Chatbot.gif",
    learnMore: {
      content: (
        <>
          <h2 className="text-purple-600 font-bold text-xl mb-2">
            Cloud-Based AI Chatbot
          </h2>
          <span className="text-purple-400 font-semibold">Description:</span>
          <p>
            I started this project with only basic knowledge of HTML and CSS...
          </p>
        </>
      ),
    },
  },

  {
    title: "Snack Ordering App",
    description:
      "A simple authentication-based app to login and order your favorite snacks.",
    live: "",
    code: "https://github.com/EngineerPrem/SnackSquadApp",
    image: "/SnackOrdering.gif",
    learnMore: {
      content: (
        <>
          <h2 className="text-purple-600 font-bold text-xl mb-2">
            Snack Ordering App
          </h2>
          <span className="text-purple-400 font-semibold">Description:</span>
          <p>
            Built with no prior Android experience using guided learning.
          </p>
        </>
      ),
    },
  },

  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using Next.js, Tailwind CSS, Framer Motion, and dark mode.",
    live: "https://premrajeshr.vercel.app/",
    code: "https://github.com/EngineerPrem/Next.js-Portfolio",
    image: "/portfolio.gif",
    learnMore: {
      content: (
        <>
          <h2 className="text-purple-600 font-bold text-xl mb-2">
            My Portfolio Project
          </h2>
          <span className="text-purple-400 font-semibold">Description:</span>
          <p>
            A complete modern portfolio showcasing my work and identity.
          </p>
        </>
      ),
    },
  },
];
