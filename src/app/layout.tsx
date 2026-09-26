import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // <-- 1. CRITICAL: Added missing css styles file
import { ExerciseProvider } from "@/context/ExerciseContext";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated project metadata to match your actual brand layout profile
export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train hard, log honest. A dark, no-nonsense gym companion.",
};

// 2. FIXED: Standardized clean Next.js Root Layout type declarations
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${oswald.variable} ${geistMono.variable} scroll-smooth bg-black h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white"> {/* Added text-white for baseline layout contrast */}
        <ExerciseProvider>
          <NavBar />
          
          {/* Main wrapper pushes footer down to the very bottom on short pages */}
          <main className="flex-grow">
            {children}
          </main>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" 
          />
          <Footer />
        </ExerciseProvider>
      </body>
    </html>
  );
}
