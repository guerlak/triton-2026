"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, Sparkles, Flame, Award } from "lucide-react";

export default function WorldFinalsBanner() {
  return (
    <section className="relative py-8 sm:py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 p-4 sm:p-6 md:p-12 shadow-2xl group"
        >
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/triton-trophy-athletes.jpg"
              alt="TRITON World Championship Finals"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
            />
            {/* Multi-layered Gradients for Deep Contrast & Red Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30 z-1" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-triton-red/20 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-triton-red/15 blur-[90px] pointer-events-none" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-1" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-triton-red/30 bg-triton-red/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-triton-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-triton-red shadow-[0_0_8px_#eb0028]"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
                  Season Finale • End of the Year
                </span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-white tracking-tight">
                  TRITON World <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-triton-red via-red-500 to-white">
                    Championship Finals
                  </span>
                </h2>
                <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
                  The crowning moment of the season. The world&apos;s top triathletes converge to contest world titles,
                  earn <strong className="text-white">3× ranking points</strong>, and battle for the ultimate glory.
                </p>
              </div>

              {/* Highlight Badges / Features */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-triton-red shrink-0" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Points</div>
                    <div className="text-xs sm:text-sm font-black text-white uppercase">3× Multiplier</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Crown</div>
                    <div className="text-xs sm:text-sm font-black text-white uppercase">World Champions</div>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-triton-red shrink-0" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">Divisions</div>
                    <div className="text-xs sm:text-sm font-black text-white uppercase">Solo, Relays & Corporate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-center gap-4 shrink-0 mt-2 sm:mt-0">
              <Link
                href="/world-finals/2027"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-triton-red hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(223,31,38,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 group/btn"
              >
                <span>Discover The Finals</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </Link>

              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-triton-red" />
                Special End of Year Event
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
