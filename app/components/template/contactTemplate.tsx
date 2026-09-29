"use client";

import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

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
    href: "mailto:premrajesh2005@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9786064324",
    icon: Phone,
    href: "tel:+919786064324",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

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
          message: data.message,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Unable to send your message.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
                mt-20
                px-4
                sm:px-6
                lg:px-8

                text-zinc-900
                dark:text-zinc-100

                transition-colors
                duration-300
            "
    >
      {/* =========================================
                HEADER
            ========================================== */}
      <div className="text-center mb-10 sm:mb-12">
        <h2
          className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl

                        font-bold
                        tracking-widest
                        uppercase

                        text-zinc-900
                        dark:text-white
                    "
        >
          Get In{" "}
          <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>

        <p
          className="
                        mt-3
                        text-xs
                        sm:text-sm

                        text-zinc-500
                        dark:text-zinc-400
                    "
        >
          Have a project or opportunity in mind? Feel free to reach out.
        </p>
      </div>

      {/* =========================================
                CONTACT CARD
            ========================================== */}
      <div
        className="
                    max-w-4xl
                    mx-auto
                    p-2px

                    rounded-3xl

                    bg-purple-600
                    dark:bg-purple-500

                    shadow-lg
                    shadow-purple-500/10

                    dark:shadow-purple-500/10
                "
      >
        <div
          className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2

                        rounded-[22px]

                        overflow-hidden

                        bg-white
                        dark:bg-zinc-950

                        transition-colors
                        duration-300
                    "
        >
          {/* =====================================
                        LEFT — CONTACT FORM
                    ====================================== */}
          <div
            className="
                            p-4 sm:p-5 md:p-6

                            bg-white
                            dark:bg-zinc-950
                        "
          >
            <form
              onSubmit={handleSubmit}
              className="
                                w-full
                                max-w-xl
                                mx-auto
                                space-y-4
                            "
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="
                                        block
                                        mb-2

                                        text-xs
                                        sm:text-sm
                                        font-medium

                                        text-zinc-700
                                        dark:text-zinc-200
                                    "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                                        w-full
                                        h-10

                                        rounded-xl

                                        border
                                        border-zinc-300
                                        dark:border-zinc-700

                                        bg-zinc-50
                                        dark:bg-zinc-950

                                        px-4

                                        text-sm

                                        text-zinc-900
                                        dark:text-zinc-100

                                        placeholder:text-zinc-400
                                        dark:placeholder:text-zinc-500

                                        outline-none

                                        transition-all
                                        duration-200

                                        focus:border-purple-500
                                        dark:focus:border-purple-400

                                        focus:ring-2
                                        focus:ring-purple-500/20
                                    "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                                        block
                                        mb-2

                                        text-xs
                                        sm:text-sm
                                        font-medium

                                        text-zinc-700
                                        dark:text-zinc-200
                                    "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                                        w-full
                                        h-10

                                        rounded-xl

                                        border
                                        border-zinc-300
                                        dark:border-zinc-700

                                        bg-zinc-50
                                        dark:bg-zinc-950

                                        px-4

                                        text-sm

                                        text-zinc-900
                                        dark:text-zinc-100

                                        placeholder:text-zinc-400
                                        dark:placeholder:text-zinc-500

                                        outline-none

                                        transition-all
                                        duration-200

                                        focus:border-purple-500
                                        dark:focus:border-purple-400

                                        focus:ring-2
                                        focus:ring-purple-500/20
                                    "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                                        block
                                        mb-2

                                        text-xs
                                        sm:text-sm
                                        font-medium

                                        text-zinc-700
                                        dark:text-zinc-200
                                    "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows={5}
                  className="
                                        w-full
                                        min-h-100px

                                        rounded-xl

                                        border
                                        border-zinc-300
                                        dark:border-zinc-700

                                        bg-zinc-50
                                        dark:bg-zinc-950

                                        px-4
                                        py-3

                                        text-sm

                                        text-zinc-900
                                        dark:text-zinc-100

                                        placeholder:text-zinc-400
                                        dark:placeholder:text-zinc-500

                                        outline-none
                                        resize-none

                                        transition-all
                                        duration-200

                                        focus:border-purple-500
                                        dark:focus:border-purple-400

                                        focus:ring-2
                                        focus:ring-purple-500/20
                                    "
                />
              </div>

              {/* STATUS */}
              {status.message && (
                <div
                  className={`
                                        rounded-xl
                                        border
                                        px-4
                                        py-3
                                        text-xs
                                        sm:text-sm

                                        ${
                                          status.type === "success"
                                            ? `
                                                    border-green-300
                                                    bg-green-50
                                                    text-green-700

                                                    dark:border-green-900
                                                    dark:bg-green-950/60
                                                    dark:text-green-400
                                                `
                                            : `
                                                    border-red-300
                                                    bg-red-50
                                                    text-red-700

                                                    dark:border-red-900
                                                    dark:bg-red-950/60
                                                    dark:text-red-400
                                                `
                                        }
                                    `}
                >
                  {status.message}
                </div>
              )}

              {/* SEND BUTTON */}
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2

                                        min-w-190px
                                        h-12

                                        rounded-full

                                        bg-purple-600
                                        hover:bg-purple-700

                                        dark:bg-purple-600
                                        dark:hover:bg-purple-500

                                        px-7

                                        text-sm
                                        font-medium
                                        text-white

                                        transition-all
                                        duration-300

                                        hover:shadow-lg
                                        hover:shadow-purple-500/20

                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                    "
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* =====================================
    RIGHT — CONTACT INFORMATION
====================================== */}
          <div
            className="
        p-5
        sm:p-6
        md:p-8

        lg:border-l

        border-zinc-200
        dark:border-zinc-800

        bg-zinc-50/70
        dark:bg-zinc-950

        flex
        items-center

        transition-colors
        duration-300
    "
          >
            <div className="w-full">
              {/* SOCIAL MEDIA HEADER */}
              <div className="mb-5 mt-0 text-center">
                <h3
                  className="
            text-base
            sm:text-lg
            font-semibold
            text-purple-600
            dark:text-purple-400
        "
                >
                  My Social Media Platforms
                </h3>

                <p
                  className="
            mt-1.5
            text-xs
            sm:text-sm
            text-purple-500
            dark:text-purple-300
        "
                >
                  Connect with me through my social platforms.
                </p>
              </div>

              {/* SOCIAL MEDIA LINKS */}
              <div className="flex flex-col">
                {items.map(({ label, value, icon: Icon, href }) => {
                  const isExternal = href.startsWith("http");

                  const content = (
                    <>
                      {/* ICON */}
                      <div
                        className="
                                    shrink-0

                                    flex
                                    items-center
                                    justify-center

                                    w-10
                                    h-10

                                    rounded-full

                                    bg-zinc-100
                                    dark:bg-zinc-900

                                    border
                                    border-zinc-200
                                    dark:border-zinc-800

                                    text-zinc-600
                                    dark:text-zinc-300

                                    group-hover:text-purple-600
                                    dark:group-hover:text-purple-400

                                    group-hover:border-purple-400
                                    dark:group-hover:border-purple-500/50

                                    transition-all
                                "
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      {/* TEXT */}
                      <div
                        className="
                                    min-w-0
                                    flex
                                    flex-col
                                    gap-1
                                "
                      >
                        <span
                          className="
                                        text-[10px]
                                        sm:text-xs

                                        uppercase
                                        tracking-widest

                                        text-zinc-500
                                        dark:text-zinc-500
                                    "
                        >
                          {label}
                        </span>

                        <span
                          className="
                                        text-xs
                                        sm:text-sm

                                        text-zinc-800
                                        dark:text-zinc-200

                                        break-words
                                    "
                        >
                          {value}
                        </span>
                      </div>
                    </>
                  );

                  const className = `
                        group

                        flex
                        items-center
                        gap-4

                        py-4

                        border-b
                        border-zinc-200
                        dark:border-zinc-800

                        last:border-b-0

                        transition-colors
                    `;

                  return isExternal ? (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a key={label} href={href} className={className}>
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
                FOOTER
            ========================================== */}
      <footer
        className="
                    max-w-5xl
                    mx-auto

                    mt-10
                    pt-5
                    pb-5

                    border-t
                    border-zinc-200
                    dark:border-zinc-800

                    text-center
                "
      >
        <p
          className="
                        text-xs
                        sm:text-sm

                        text-zinc-500
                        dark:text-zinc-500
                    "
        >
          © {new Date().getFullYear()}{" "}
          <span
            className="
                            text-zinc-700
                            dark:text-zinc-300
                        "
          >
            Premrajesh Ravichandran
          </span>{" "}
          · Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </section>
  );
};
