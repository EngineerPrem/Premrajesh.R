"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "../../../data/certificateData";
import { CertificateSection } from "../organisms/certificateSection";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, FileText, Award } from "lucide-react";

export const CertificatePage = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [previewCert, setPreviewCert] = useState<(typeof certificates)[0] | null>(null);

  const years = ["All", "2026", "2025", "2024", "2023", "2017"];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    if (previewCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewCert]);

  const filteredCerts = certificates.filter((cert) => {
    if (selectedYear === "All") return true;
    return cert.year === selectedYear;
  });

  return (
    <section id="certificate" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2 relative overflow-hidden">
          <Sparkles size={14} className="text-purple-500" />
          <span>Recognitions & Milestones</span>
          <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Honors & <span className="text-gradient-purple">Certificates</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Each certificate below reflects a milestone in my steady learning journey — from
          school-level science exhibitions to college workshops, internships, and academic excellence.
          Every step represents effort, patience, and growth.
        </p>

        {/* Year Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-5">
          <div className="glass-card p-1.5 rounded-2xl inline-flex flex-wrap justify-center border border-purple-300/30 dark:border-white/10">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300"
                }`}
              >
                {year === "All" ? `All (${certificates.length})` : year}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CERTIFICATES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCerts.map((cert, idx) => (
          <CertificateSection
            key={idx}
            year={cert.year}
            title={cert.title}
            description={cert.description}
            imageUrl={cert.imageUrl}
            viewUrl={cert.viewUrl}
            onPreview={() => setPreviewCert(cert)}
          />
        ))}
      </div>

      {/* Lightbox / Zoom Modal - High Z-Index & In-Header Close Button */}
      <AnimatePresence>
        {previewCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/40 dark:border-white/10 z-10"
            >
              {/* Top Modal Header with Clear Close Button */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-purple-600 dark:text-purple-400">
                    {previewCert.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white truncate max-w-[240px] sm:max-w-md">
                    {previewCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-2 rounded-full glass-card hover:bg-purple-600 hover:text-white text-zinc-700 dark:text-zinc-200 transition-colors shadow-md flex items-center justify-center shrink-0"
                  aria-label="Close Preview"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="relative w-full h-[320px] sm:h-[430px] rounded-2xl overflow-hidden bg-black/40 mb-5">
                <Image
                  src={previewCert.imageUrl}
                  alt={previewCert.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Bottom Details & Direct PDF Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-md">
                  {previewCert.description}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={previewCert.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-purple-600/25 transition-all hover:scale-105 active:scale-95"
                  >
                    <FileText size={15} />
                    <span>Open Official PDF</span>
                  </a>

                  <button
                    onClick={() => setPreviewCert(null)}
                    className="px-4 py-2.5 rounded-xl glass-card text-zinc-700 dark:text-zinc-300 hover:text-purple-600 text-xs sm:text-sm font-semibold border border-white/50 dark:border-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
