import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agustín Molé — Full Stack Product Engineer",
  description:
    "Full Stack Product Engineer specializing in SaaS, AI-powered systems, and modern web applications. Building end-to-end products with React, Next.js, Node.js, and more.",
  keywords: [
    "Full Stack Developer",
    "Product Engineer",
    "React",
    "Next.js",
    "Node.js",
    "SaaS",
    "TypeScript",
    "AI",
  ],
  authors: [{ name: "Agustín Molé" }],
  creator: "Agustín Molé",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Agustín Molé — Full Stack Product Engineer",
    description:
      "Building complete SaaS products and AI-powered systems end-to-end.",
    siteName: "Agustín Molé Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Molé — Full Stack Product Engineer",
    description:
      "Building complete SaaS products and AI-powered systems end-to-end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
