"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Calendar, Medal, Trophy, Globe2 } from "lucide-react";
import RedLine from "../ui/RedLine";

const stats = [
  { label: "CONTINENTS", value: 3, icon: Globe2 },
  { label: "EVENTS", value: 8, icon: Calendar },
  { label: "RACES", value: 24, icon: Medal },
  { label: "CHAMPIONSHIP", value: 1, icon: Trophy },
];

function Counter({
  value,
  duration = 2.5,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom ease out quint
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return <span ref={ref}>0</span>;
}

function StatCard({
  stat,
  index,
}: {
  stat: { label: string; value: number; icon: any; highlight?: boolean };
  index: number;
}) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(223,31,38,0.15), transparent)`,
  );

  const isHighlighted = stat.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={`group relative p-5 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2.5rem] border transition-all duration-700 overflow-hidden flex flex-col items-center justify-center min-h-[200px] sm:min-h-[280px] ${isHighlighted
        ? "bg-gradient-to-br from-white/10 to-white/5 border-triton-red/50 shadow-[0_0_40px_rgba(223,31,38,0.15)]"
        : "bg-white/[0.03] border-white/10 hover:border-white/20"
        }`}
    >
      {/* Dynamic Background Spotlight */}
      <motion.div
        className="absolute -inset-px rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Decorative corner element */}
      <div
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 rounded-tr-xl transition-all duration-700 group-hover:scale-110 ${isHighlighted
          ? "border-triton-red/40"
          : "border-white/5 group-hover:border-triton-red/20"
          }`}
      />

      {/* Icon with animated container */}
      <div className="relative mb-4 sm:mb-8">
        <div
          className={`absolute inset-0 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isHighlighted ? "bg-triton-red/40" : "bg-white/20"
            }`}
        />
        <div
          className={`relative p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 ${isHighlighted
            ? "bg-triton-red border-triton-red shadow-[0_0_20px_rgba(223,31,38,0.4)]"
            : "bg-white/5 border-white/10 group-hover:border-white/30 group-hover:bg-white/10"
            }`}
        >
          <stat.icon
            className={`w-5 h-5 sm:w-6 sm:h-6 ${isHighlighted ? "text-white" : "text-triton-red"}`}
          />
        </div>
      </div>

      {/* Stats Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-1 sm:mb-2 tracking-tighter tabular-nums transition-transform duration-500 group-hover:scale-110 ${isHighlighted
            ? "text-white"
            : "text-white/90 group-hover:text-white"
            }`}
        >
          <Counter value={stat.value} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`h-[1px] w-3 sm:w-4 transition-all duration-500 group-hover:w-8 ${isHighlighted
              ? "bg-triton-red"
              : "bg-white/10 group-hover:bg-triton-red"
              }`}
          />
          <span className="text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.4em] text-white/40 uppercase group-hover:text-white transition-colors duration-300 text-center">
            {stat.label}
          </span>
          <div
            className={`h-[1px] w-3 sm:w-4 transition-all duration-500 group-hover:w-8 ${isHighlighted
              ? "bg-triton-red"
              : "bg-white/10 group-hover:bg-triton-red"
              }`}
          />
        </div>
      </div>

      {/* Bottom glowing line */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-700 blur-[1px] ${isHighlighted
          ? "w-1/2 bg-triton-red shadow-[0_0_15px_rgba(223,31,38,0.8)]"
          : "w-0 bg-triton-red group-hover:w-1/3 opacity-50"
          }`}
      />
    </motion.div>
  );
}

export default function WorldStatsSection() {
  return (
    <section className="relative py-12 sm:py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-triton-dark border-y border-white/5">
      <RedLine />
      {/* Background Large Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.04] whitespace-nowrap hidden lg:block">
        <span className="text-[25vw] font-black italic leading-none tracking-tighter text-white">
          TRITON WORLD
        </span>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-triton-red/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-triton-red/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-14 md:mb-20 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-3 sm:mb-4 italic leading-none">
              WE <span className="text-triton-red">ARE IN</span>
            </h2>
            <div className="h-1 sm:h-1.5 w-20 sm:w-32 bg-triton-red rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-sm text-left md:text-right text-xs sm:text-sm md:text-base font-medium tracking-tight leading-relaxed"
          >
            A global community connected by the passion for excellence and the
            thrill of competition across 3 continents.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-shadow-red {
          text-shadow: 0 0 20px rgba(223, 31, 38, 0.3);
        }
      `}</style>
    </section>
  );
}
