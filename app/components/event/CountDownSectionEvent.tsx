"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { TimeUnit } from "../../components/TimeUnit";
import { EventData } from "@/eventdata";

interface CountdownSectionProps {
  data: EventData;
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const target = new Date(data.targetDate).getTime();
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEventStarted(true);
        return;
      }

      setIsEventStarted(false);
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
  }, [data.targetDate]);

  const liveResultsUrl = data.liveResultsUrl || data.athleteArea?.liveResultsUrl;

  return (
    <section className="relative py-10 overflow-hidden min-h-100 flex items-center">
      {/* Background with Fade Transition */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://qolo99gl9iwxsw5k.public.blob.vercel-storage.com/video-web-triton.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black"></div>
        <span className="absolute -top-50 right-10 text-triton-red italic text-[600px] font-black opacity-10 select-none">
          {data.eventFormat.slice(-1)}
        </span>
      </div>


      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-black-900/70 backdrop-blur-xl 
              p-6 md:p-10 lg:p-12 rounded-4xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Text Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left">
              <div className="mb-4 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-triton-red font-bold">{data.title}</h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4
                text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-triton-red" />
                  {data.location}
                </div>
                <span className="hidden sm:block opacity-30">|</span>
                <div className="text-white">{data.dateText}</div>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                {isEventStarted && liveResultsUrl ? (
                  <a
                    href={liveResultsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-triton-red hover:bg-white text-white hover:text-black font-black py-2 px-4 md:px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300"
                  >
                    <span>{data.language === "pt-BR" ? "Resultados" : "Live Results"}</span>
                    <ArrowRight size={18} />
                  </a>
                ) : data.isRegistrationClosed ? (
                  <span className="bg-neutral-800 text-gray-500 font-black py-2 px-4 md:px-10 rounded-none flex items-center gap-3 uppercase tracking-widest cursor-not-allowed opacity-60 border border-white/10 select-none">
                    <span>{data.language === "pt-BR" ? "Inscrições Encerradas" : "Registration Closed"}</span>
                  </span>
                ) : (
                  <a
                    href={data.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-triton-red hover:bg-white text-white hover:text-black font-black py-2 px-4 md:px-10 rounded-none flex items-center gap-3 uppercase tracking-widest transition-all duration-300"
                  >
                    <span>{data.language === "pt-BR" ? "Inscreva-se" : "Register"}</span>
                    <ArrowRight size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Countdown Grid / Event Started Message */}
            <div className="w-full max-w-xl lg:max-w-none lg:w-auto lg:shrink-0 flex justify-center">
              {isEventStarted ? (
                <div className="w-full max-w-xl md:max-w-2xl lg:w-[540px] xl:w-[580px] flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl bg-linear-to-b from-triton-red/10 via-black/40 to-transparent border border-triton-red/30 shadow-[0_0_30px_rgba(235,0,40,0.15)] relative overflow-hidden">
                  {/* Live Badge Indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-triton-red/20 border border-triton-red/40 text-triton-red text-xs font-black uppercase tracking-widest mb-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-triton-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-triton-red"></span>
                    </span>
                    <span>{data.language === "pt-BR" ? "PROVA ENCERRADA" : "RACE IN PROGRESS"}</span>
                  </div>

                  {/* Main Headline */}
                  {data.language === "pt-BR" ? (
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-white mb-2">
                      PARABÉNS <span className="text-triton-red italic">ATLETAS</span>
                    </h3>
                  ) : (
                    <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase leading-relaxed tracking-normal text-white mb-2 max-w-md sm:max-w-lg">
                      Give it your all, stay strong, and see you at the finish line.{" "}
                      <span className="text-triton-red italic font-black block mt-2 text-base sm:text-xl">Good luck to all athletes! </span>
                    </h3>
                  )}

                  {/* Subtitle / Wish */}

                </div>
              ) : (
                <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <TimeUnit value={timeLeft.hours} label="Hours" />
                  <TimeUnit value={timeLeft.minutes} label="Minutes" />
                  <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-triton-red to-transparent"></div>
    </section>
  );
};

export default CountdownSection;

