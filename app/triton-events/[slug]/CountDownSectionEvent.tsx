"use client";
import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TimeUnit } from "../../components/TimeUnit";


//data fetch
const EVENT = [
  {
    id: 1,
    title: "TRITON 1",
    subtitle: "SÃO PAULO",
    location: "Portobello, São Paulo",
    date: "12 Agosto, 2026",
    targetDate: "2026-10-12T08:00:00",
    image: "/images/bg-salvador.jpg",
    href: "/triton-events/salvador",
  }
];

const CountdownSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentEvent = EVENT[currentIndex];

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
    <section className="relative py-10 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black"></div>
      {/* Background with Fade Transition */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://qolo99gl9iwxsw5k.public.blob.vercel-storage.com/video-web-triton.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>
        <span className="absolute -top-70 -right-10 text-triton-red italic text-[900px] font-black opacity-25">3</span>
      </div>


      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="relative">
          {/* Navigation Arrows */}
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
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-black-900/70 backdrop-blur-xl 
              p-6 md:p-10 lg:p-12 rounded-4xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Text Content */}
              <div className="">
                <div className="inline-flex justify-center lg:justify-start items-center gap-2 px-4 py-1.5 rounded-full 
                bg-triton-red/20 border border-triton-red/30 text-triton-red text-xs font-black uppercase 
                tracking-widest mb-6">
                  <Timer size={14} className="animate-pulse" />
                  Coming Next
                </div>

                <div className="mb-4 text-center sm:text-left">
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
                    {currentEvent.title}
                  </h3>
                  <h2 className="text-3xl md:text-5xl text-triton-red font-bold">{currentEvent.subtitle}</h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4
                min-w-sm text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-triton-red" />
                    {currentEvent.location}
                  </div>
                  <span className="hidden sm:block opacity-30">|</span>
                  <div className="text-white">{currentEvent.date}</div>
                </div>

                <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                  <button className="bg-triton-red hover:bg-white text-white hover:text-black font-black py-2 px-4 md:px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300">
                    <span>Register</span>
                    <ArrowRight size={18} />
                  </button>
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-triton-red to-transparent"></div>
    </section>
  );
};

export default CountdownSection;

