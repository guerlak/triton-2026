"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Compass, AlertCircle } from "lucide-react";
import tritonLogo from "@/public/images/triton-ws-logo-01.png";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden font-sans">
      {/* Decorative Radial Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-triton-red/10 blur-[80px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-triton-red/5 blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Decorative Running/Athletic Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="transition-transform duration-300 hover:scale-105 active:scale-95">
          <Image
            src={tritonLogo}
            width={75}
            height={38}
            alt="Triton logo"
            className="w-auto h-10 md:h-12"
            priority
          />
        </Link>
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold hidden sm:inline-block">
          Triton World Series
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full">
        {/* Animated Error Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-triton-red/20 bg-triton-red/5 text-triton-red text-xs uppercase tracking-widest font-semibold"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Course Boundary Exceeded</span>
        </motion.div>

        {/* Large 404 Display */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/10"
          >
            404
          </motion.h1>
          {/* Neon shadow overlay for 404 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter select-none text-triton-red/20 blur-md pointer-events-none"
            style={{ zIndex: -1 }}
          >
            404
          </motion.div>
        </div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4">
            You've gone off track
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Looks like you took a wrong turn at the transition zone. The page you are looking for does not exist or has been relocated to another course.
          </p>
        </motion.div>

        {/* Navigation Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-triton-red hover:bg-triton-red/90 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(223,31,38,0.3)] hover:shadow-[0_6px_24px_rgba(223,31,38,0.5)] active:scale-95"
          >
            <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Return to Arena</span>
          </Link>

          <Link
            href="/triton-events"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Find Next Race</span>
          </Link>
        </motion.div>
      </main>

      {/* Footer / Copyright */}
      <footer className="relative z-10 w-full px-6 py-6 text-center text-xs text-gray-600 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Triton World Series. All rights reserved.</p>
      </footer>
    </div>
  );
}
