"use client";

import {
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import Link from "next/link";

const items = [
    {
        label: "LinkedIn",
        value: "@premrajeshr",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/premrajeshr/",
    },
    {
        label: "Email",
        value: "premrajesh2005@gmail.com",
        icon: Mail,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=premrajesh2005@gmail.com"

    },
    {
        label: "Phone",
        value: "+91 9786064324",
        icon: Phone,
        href: "tel:+919876543210",
    },
    {
        label: "Location",
        value: "Tamil Nadu, India",
        icon: MapPin,
        href: "#",
    },
    {
        label: "Instagram",
        value: "@premrajesh_ravichandran",
        icon: Instagram,
        href: "https://www.instagram.com/premrajesh_ravichandran/",
    },
];

export const ContactTemplate = () => {
    return (
        <section
            id="contact"
            className="
        mt-5
        text-zinc-900 dark:text-zinc-100
      "
        >
            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold tracking-widest uppercase">
                    Get in Touch
                </h2>
            </div>

            {/* Aligned Grid */}
            <div
                className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-5
          gap-10
          text-center
        "
            >
                {items.map(({ label, value, icon: Icon, href }) => {
                    const isExternal = href.startsWith("http");

                    const commonClass =
                        "group flex flex-col items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition";

                    return isExternal ? (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={commonClass}
                        >
                            <Icon size={28} />
                            <span className="text-xs uppercase tracking-wider text-zinc-500">
                                {label}
                            </span>
                            <span className="text-sm">{value}</span>
                        </Link>
                    ) : (
                        <a key={label} href={href} className={commonClass}>
                            <Icon size={28} />
                            <span className="text-xs uppercase tracking-wider text-zinc-500">
                                {label}
                            </span>
                            <span className="text-sm">{value}</span>
                        </a>
                    );
                })}


            </div>

            {/* Divider */}
            <div className="max-w-5xl mx-auto mt-20 border-t border-zinc-300 dark:border-zinc-700" />
            <footer
                className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400"
            >
                © {new Date().getFullYear()} Premrajesh Ravichandran · Built with Next.js & Tailwind CSS
            </footer>
        </section>

    );
};

