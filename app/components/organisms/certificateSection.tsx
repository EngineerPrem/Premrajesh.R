"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

type Props = {
    year: string;
    title: string;
    description: string;
    imageUrl: string;
    viewUrl: string;
};

export const CertificateSection = ({
    year,
    title,
    description,
    imageUrl,
    viewUrl,
}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-4 border border-purple-200 dark:border-purple-700"
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-purple-400"
            />
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                📍 [{year}] – {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{description}</p>
            <div className="mt-3">
                <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-md text-sm transition-all"
                >
                    <FileText size={18} className="mr-2" />
                    View Certificate
                </a>
            </div>
        </motion.div>
    );
}
