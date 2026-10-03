import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarSection } from "./components/organisms/navbarSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premrajesh Ravichandran | Full Stack Developer",
  description:
    "Official portfolio of Premrajesh Ravichandran — Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and modern responsive web architectures.",
  keywords: [
    "Premrajesh Ravichandran",
    "Premrajesh",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
  ],
  authors: [{ name: "Premrajesh Ravichandran" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NavbarSection />
        {children}
      </body>
    </html>
  );
}
