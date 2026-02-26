"use client";
import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import img from "@/public/images/bg-salvador.jpg";
import Link from "next/link";
import { TimeUnit } from "./TimeUnit";

const CountdownSection: React.FC = () => {
  const targetDate = new Date("2026-04-12T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative py-24 overflow-hidden no=repeat bg-center bg-cover min-w-full shrink-0 snap-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Triathlon Swimming"
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-neutral-900/60 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-triton-red/20 border border-triton-red/30 text-triton-red text-xs font-black uppercase tracking-widest mb-6">
              <Timer size={14} className="animate-pulse" />
              Comming Next
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-4">
              TRITON 1 <span className="text-triton-red italic">SALVADOR</span>
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-triton-red" />
                Piatã, Bahia
              </div>
              <span className="hidden sm:block opacity-30">|</span>
              <div className="text-white">12 April, 2026</div>
            </div>

            <div className="mt-10 hidden lg:flex lg:gap-4">
              <button className="bg-triton-red hover:bg-white text-white hover:text-black font-black py-4 px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300">
                <span>Register</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <Link
                href="/triton-events/salvador"
                className="bg-white hover:bg-triton-red text-black hover:text-white font-black py-4 px-10 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300"
              >
                <span>Website</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Countdown Grid */}
          <div className="shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="mt-8 lg:hidden flex justify-center">
              <button className="group relative bg-triton-red hover:bg-white text-white hover:text-black font-black py-4 px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300 w-full justify-center">
                <span>Inscreva-se Agora</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Red Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-triton-red to-transparent"></div>
    </section>
  );
};

export default CountdownSection;
