"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Compass, Wrench } from "lucide-react";
import tritonLogo from "@/public/images/triton-ws-logo-01.png";

export default function UnderDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden font-sans">
      {/* Decorative Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-triton-red/10 blur-[80px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-triton-red/5 blur-[80px] md:blur-[100px] pointer-events-none" />

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
        {/* Animated Work Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-triton-red/20 bg-triton-red/5 text-triton-red text-xs uppercase tracking-widest font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-triton-red animate-ping" />
          <span>Work in Progress</span>
        </motion.div>

        {/* Dynamic Construction Icon Visualization */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-triton-red/20 animate-ping opacity-75" />
          <div className="absolute -inset-4 rounded-full border border-white/5 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-triton-red/30 animate-[spin_20s_linear_infinite]" />

          <div className="w-20 h-20 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(223,31,38,0.2)]">
            <Wrench className="text-triton-red animate-[bounce_2s_infinite]" size={32} />
          </div>
        </div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
            Page Under <br />
            <span className="text-triton-red italic">Development</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            We are currently setting up the track and transitions for this section. The premium experience for this Triton feature is coming soon.
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
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/events"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Check Calendar</span>
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
