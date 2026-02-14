"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BlogDataProp } from "@/data/blogData";
import gsap from "gsap";

interface Props {
  blogs: BlogDataProp[];
}

export default function InfiniteBlogSlider({ blogs }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<BlogDataProp | null>(null);
  const [paused, setPaused] = useState(false);

  const indexRef = useRef(0);

  // 🎯 Animate Cards
  const animateCards = useCallback(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".blog-card");

    cards.forEach((card, i) => {
      const position = (i - indexRef.current + blogs.length) % blogs.length;

      if (position === 0) {
        gsap.to(card, {
          x: 0,
          scale: 1,
          rotateY: 0,
          z: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          zIndex: 20,
        });
      } else if (position === 1) {
        gsap.to(card, {
          x: 350,
          scale: 0.9,
          rotateY: -20,
          z: -150,
          opacity: 0.6,
          filter: "blur(3px)",
          duration: 0.8,
          ease: "power3.out",
          zIndex: 10,
        });
      } else if (position === blogs.length - 1) {
        gsap.to(card, {
          x: -350,
          scale: 0.9,
          rotateY: 20,
          z: -150,
          opacity: 0.6,
          filter: "blur(3px)",
          duration: 0.8,
          ease: "power3.out",
          zIndex: 10,
        });
      } else {
        gsap.to(card, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          zIndex: 0,
        });
      }
    });

    setActiveIndex(indexRef.current);
  }, [blogs.length]);

  // ▶ Start Slider
  const startSlider = useCallback(() => {
    if (intervalRef.current) return; // prevent duplicate interval

    intervalRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % blogs.length;
      animateCards();
    }, 2500);
  }, [animateCards, blogs.length]);

  // ⏸ Stop Slider
  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // 🔄 Init
  useEffect(() => {
    gsap.set(wrapperRef.current, { perspective: 1200 });

    animateCards();
    startSlider();

    return () => {
      stopSlider(); // cleanup
    };
  }, [animateCards, startSlider, stopSlider]);

  // 🔥 Pause / Resume Control
  useEffect(() => {
    if (paused) {
      stopSlider();
    } else {
      startSlider();
    }
  }, [paused, startSlider, stopSlider]);

  return (
    <>
      <div
        ref={wrapperRef}
        className="relative w-full h-[380px] flex items-center justify-center overflow-hidden"
      >
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="blog-card absolute w-[350px] h-[260px] p-3 rounded-3xl shadow-2xl 
                       bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black
                       border border-purple-400/20 dark:border-purple-500/30
                       backdrop-blur-md
                       text-gray-800 dark:text-white transition-colors duration-500"
          >
            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {blog.description}
            </p>

            {i === activeIndex && (
              <button
                onClick={() => {
                  setSelectedBlog(blog);
                  setPaused(true); // ⏸ pause
                }}
                className="mt-auto px-5 py-2 bg-purple-600 hover:bg-purple-700 
                           text-white rounded-lg font-semibold transition-all duration-300"
              >
                Read More
              </button>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[90%] max-w-2xl relative shadow-2xl transition-colors duration-500">
            <button
              onClick={() => {
                setSelectedBlog(null);
                setPaused(false); // ▶ resume automatically
              }}
              className="absolute top-3 right-4 text-xl text-gray-600 dark:text-white"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">
              {selectedBlog.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {selectedBlog.full}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
