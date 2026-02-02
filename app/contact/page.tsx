"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Zod Schema with Email Format Validation
const schema = z.object({
  name: z.string().min(2, "Too short..."),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Say more 👀"),
});


type FormData = z.infer<typeof schema>;


export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // ✅ Keep this function inside the component!
  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Something went wrong!");
      } else {
        alert("Message sent successfully 🚀");
        reset();
      }
    } catch (err) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 px-6 py-16">
      {/* 🔝 Contact Form Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-4">Contact Me</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
          Let's connect! Send me a message and I'll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl border border-purple-600 shadow-md"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 rounded-md bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-600"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 rounded-md bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-600"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              {...register("message")}
              className="w-full p-2 rounded-md bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-600"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* 🌐 Find Me Online */}
      <div className="max-w-xl mx-auto mb-12 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl border border-purple-500 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-500">Find Me Online</h2>
        <div className="flex justify-center gap-6">
          <Link href="https://www.linkedin.com/in/premrajeshr/" target="_blank" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
            <Linkedin size={24} />
          </Link>
          <Link href="https://github.com/EngineerPrem" target="_blank" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
            <Github size={24} />
          </Link>
          <Link href="https://www.instagram.com/premrajesh_ravichandran/" target="_blank" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
            <Instagram size={24} />
          </Link>
        </div>
      </div>

      {/* 📬 Contact Info */}
      <div className="max-w-xl mx-auto bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl border border-purple-500 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-400">Contact Info</h2>
        <p className="flex items-center gap-2 justify-center mb-2">
          <Mail size={18} /> premrajesh2005@gmail.com
        </p>
        <p className="flex items-center gap-2 justify-center mb-2">
          <MapPin size={18} /> Puliyur, Karur, Tamilnadu - 639 114
        </p>
      </div>
    </div>
  );
}
