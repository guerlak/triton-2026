"use client";
import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TimeUnit } from "./TimeUnit";

const COUNTDOWN_EVENTS = [
  {
    id: 1,
    title: "TRITON 1",
    subtitle: "SALVADOR",
    location: "Piatã, Bahia",
    date: "12 April, 2026",
    targetDate: "2026-10-12T08:00:00",
    image: "/images/bg-salvador.jpg",
    href: "/triton-events/salvador",
  },
  {
    id: 2,
    title: "TRITON 3",
    subtitle: "RIO DE JANEIRO",
    location: "Aterro do Flamengo, RJ",
    date: "21 April, 2026",
    targetDate: "2026-04-21T08:00:00",
    image: "/images/triton-fotos-prova-run.jpeg",
    href: "/triton-events/rio",
  },
  {
    id: 3,
    title: "TRITON 1",
    subtitle: "LISBOA",
    location: "Lisboa, Portugal",
    date: "06 September, 2026",
    targetDate: "2026-09-06T08:00:00",
    image: "/images/triton-fotos-prova-bike.jpeg",
    href: "/triton-events/lisboa",
  }
];

const CountdownSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentEvent = COUNTDOWN_EVENTS[currentIndex];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(currentEvent.targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + COUNTDOWN_EVENTS.length) % COUNTDOWN_EVENTS.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative py-10 overflow-hidden bg-black min-h-[800px] flex items-center">
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black"></div>
      {/* Background with Fade Transition */}


      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/dinqspvtp/video/upload/v1773243140/tritin-video-after_oq1nzs.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>
      </div>


      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-triton-red transition-all hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-triton-red transition-all hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentEvent.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col lg:flex-row items-center  gap-8 lg:gap-16 bg-neutral-900/60 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Text Content */}
              <div className="">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-triton-red/20 border border-triton-red/30 text-triton-red text-xs font-black uppercase tracking-widest mb-6">
                  <Timer size={14} className="animate-pulse" />
                  Coming Next
                </div>

                <div className="mb-4 text-center sm:text-left">
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
                    {currentEvent.title}
                  </h3>
                  <h2 className="text-3xl md:text-5xl text-triton-red ">{currentEvent.subtitle}</h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-triton-red" />
                    {currentEvent.location}
                  </div>
                  <span className="hidden sm:block opacity-30">|</span>
                  <div className="text-white">{currentEvent.date}</div>
                </div>

                <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                  <button className="bg-triton-red hover:bg-white text-white hover:text-black font-black py-4 px-6 md:px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300">
                    <span>Register</span>
                    <ArrowRight size={18} />
                  </button>

                  <Link
                    href={currentEvent.href}
                    className="bg-white hover:bg-triton-red text-black hover:text-white font-black py-4 px-6 md:px-10 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300"
                  >
                    <span>Website</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Countdown Grid */}
              <div className="w-full flex justify-center">
                <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <TimeUnit value={timeLeft.hours} label="Hours" />
                  <TimeUnit value={timeLeft.minutes} label="Minutes" />
                  <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-full bg-neutral-900 border border-white/10 text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-full bg-neutral-900 border border-white/10 text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-triton-red to-transparent"></div>
    </section>
  );
};

export default CountdownSection;

