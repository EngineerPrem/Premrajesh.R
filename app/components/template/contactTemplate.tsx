"use client";

import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FooterSection } from "../organisms/footerSection";

const items = [
  {
    label: "LinkedIn",
    value: "@premrajeshr",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/premrajeshr/",
    color: "text-blue-500",
  },
  {
    label: "Email",
    value: "premrajesh2005@gmail.com",
    icon: Mail,
    href: "mailto:premrajesh2005@gmail.com",
    color: "text-purple-500",
  },
  {
    label: "Phone",
    value: "+91 9786064324",
    icon: Phone,
    href: "tel:+919786064324",
    color: "text-emerald-500",
  },
  {
    label: "Location",
    value: "Tamil Nadu, India",
    icon: MapPin,
    href: "https://maps.google.com/?q=Tamil+Nadu,+India",
    color: "text-amber-500",
  },
  {
    label: "Instagram",
    value: "@premrajesh_ravichandran",
    icon: Instagram,
    href: "https://www.instagram.com/premrajesh_ravichandran/",
    color: "text-pink-500",
  },
];

export const ContactTemplate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Unable to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
          <span>Let's Connect</span>
          <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Get In <span className="text-gradient-purple">Touch</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Have an exciting project, internship opportunity, or question? Feel free to drop a message or reach out across any platform.
        </p>
      </motion.div>

      {/* CONTACT CONTAINER */}
      <div className="max-w-5xl mx-auto glass-card transform-gpu rounded-3xl p-6 sm:p-10 border border-white/60 dark:border-white/10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              I usually respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="glass-input w-full h-11 px-4 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                  className="glass-input w-full h-11 px-4 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or questions..."
                  required
                  rows={4}
                  className="glass-input w-full p-4 rounded-xl text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 ${
                    status.type === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                      : "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={16} className="shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFORMATION & SOCIAL PLATFORMS (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 lg:border-l border-zinc-200/60 dark:border-zinc-800/60">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                You can also reach me via email, phone, or LinkedIn.
              </p>
            </div>

            <div className="space-y-3">
              {items.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between p-3.5 rounded-2xl glass-card border border-white/50 dark:border-white/5 hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Icon size={18} className={item.color} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
                          {item.label}
                        </span>
                        <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-8 sm:mt-10">
        <FooterSection />
      </div>
    </section>
  );
};
