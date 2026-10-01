"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Eye, Award } from "lucide-react";
import { TiltCard } from "../atoms/TiltCard";

type Props = {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  viewUrl: string;
  onPreview: () => void;
};

export const CertificateSection = ({
  year,
  title,
  description,
  imageUrl,
  viewUrl,
  onPreview,
}: Props) => {
  return (
    <TiltCard maxTilt={6} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between h-full border border-white/60 dark:border-white/10 hover:border-purple-500/40 dark:hover:border-purple-500/40 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
      >
        <div>
          {/* Certificate Image Banner */}
          <div
            onClick={onPreview}
            className="relative w-full h-48 cursor-pointer overflow-hidden bg-zinc-950/10 dark:bg-zinc-900/50"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
              <span className="glass-panel px-4 py-2 rounded-full text-xs font-semibold text-white flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                <Eye size={15} /> Quick Zoom
              </span>
            </div>

            {/* Year Badge */}
            <div className="absolute top-3 left-3">
              <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-purple-700 dark:text-purple-300 backdrop-blur-md shadow-sm">
                {year}
              </span>
            </div>
          </div>

          {/* Certificate Text Details */}
          <div className="p-5">
            <div className="flex items-start gap-2 mb-1.5">
              <Award size={18} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2 pl-6">
              {description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors hover:scale-105 active:scale-95"
          >
            <Eye size={14} />
            <span>Zoom Image</span>
          </button>

          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-md shadow-purple-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <FileText size={13} />
            <span>Open PDF</span>
          </a>
        </div>
      </motion.div>
    </TiltCard>
  );
};
