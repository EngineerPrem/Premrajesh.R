'use client';

interface ProjectSectionProps {
  title: string;
  description: string;
  image: string;
  live: string;
  code: string;
  onLearnMore: () => void;
  onLiveClick: (live: string) => void;
}

export const ProjectSection=({
  title,
  description,
  image,
  live,
  code,
  onLearnMore,
  onLiveClick,
}: ProjectSectionProps)=> {
  return (
    <div className="border-2 border-purple-600 dark:border-purple-500 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
        {title}
      </h2>

      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>

      <div className="flex flex-wrap gap-4 mt-4 items-center">
        <button
          onClick={() => onLiveClick(live)}
          className="text-blue-600 dark:text-blue-400 underline font-medium"
        >
          Live
        </button>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 underline font-medium"
        >
          GitHub
        </a>

        <button
          onClick={onLearnMore}
          className="ml-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
