"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Zap,
  Waves,
  Bike,
  PersonStanding,
  CheckCircle,
  Blend,
} from "lucide-react";

import MainButton from "../ui/MainButton";

const TritonExperienceCards: React.FC = () => {
  return (
    <section className="py-12 bg-triton-dark overflow-hidden relative" id="formats">
      <div className="text-center mb-16">
        <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 text-lg">
          the future of triathlon racing
        </h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight ">
          NOT YOUR ORDINARY TRIATHLON SERIES
        </h3>
        <p className="text-gray-400 max-w-5xl mx-auto text-lg mt-4 px-8">
          <strong>TRITON</strong> is built on 2 race formats, <strong>TRITON 1</strong> and <strong>TRITON 3</strong>.
          Both offer 3 distances to choose from. Both score points for the Global Ranking Points Competition.
          Both qualify for the Championship event, in all 3 distances.  <strong>TRITON</strong> is the future of triathlon racing, and training - all under one brand and one platform.

        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-triton-red font-black tracking-widest uppercase text-lg mb-4 hidden"
          >
            Choose your challenge
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none"
          ></motion.h3>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 md:gap-8 
        lg:gap-12 md:pb-0 md:overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] 
        [&::-webkit-scrollbar]:hidden">

          {/* Triton 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="shrink-0 w-[90%] md:w-full snap-center group relative bg-neutral-900 rounded-[2.5rem] 
            p-8 sm:p-10 lg:p-16 border-3 border-white/5 hover:border-triton-red transition-all
            duration-500 overflow-hidden"
          >
            <div className="absolute top-[-140px] right-[-20px] p-8 opacity-7 group-hover:opacity-40 duration-300 transition-opacity">
              {/* <Zap size={120} className="text-triton-red" />  */}
              <span className="text-triton-red text-[20em] italic font-black">1</span>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-triton-red/10 border border-triton-red/20
               text-triton-red text-xs font-black uppercase tracking-widest mb-8">
                <Clock size={14} />STANDARD TRIATHLON
              </div>

              <h4 className="text-5xl lg:text-6xl font-black text-white uppercase mb-6 tracking-tighter">
                Triton <span className="text-triton-red">1</span>
              </h4>

              <p className="text-md md:text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                Maximum triathlon intensity packed into a <strong>single day</strong>. The
                classic format redefined by TRITON innovation.
              </p>

              <div className="space-y-6 mb-12">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Zap className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      Pure Performance{" "}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Ideal for those seeking to push their limits in an
                      explosive event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      Competition Options
                    </p>
                    <p className="text-gray-500 text-sm">
                      Individual / Corporate Relay / Mix & Match
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Blend className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      MIX & MATCH
                    </p>
                    <p className="text-gray-400 text-sm">
                      Mix swim, bike, and run distances freely within the pre-set options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <Waves size={14} className="text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <Bike size={14} className="text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <PersonStanding size={14} className="text-gray-400" />
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  LAP COURSE
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                All three distances: SPRINT, MIDDLE, LONG take place simultaneously on the same course
              </p>
            </div>
          </motion.div>

          {/* Triton 3 Card */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0 w-[90%] md:w-full snap-center group relative bg-neutral-900 rounded-[2.5rem]
            p-8 sm:p-10 lg:p-16 border-3 border-white/5 hover:border-triton-red transition-all
            duration-500 overflow-hidden"
          >
            <div className="absolute top-[-140px] right-[-20px] p-8 opacity-7 group-hover:opacity-40 duration-300 transition-opacity">
              <span className="text-triton-red text-[20em] italic font-black">3</span>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-triton-red/10 border border-triton-red/20 text-triton-red text-xs font-black uppercase tracking-widest mb-8">
                <Calendar size={14} />3 Days of Competition
              </div>

              <h4 className="text-5xl lg:text-6xl font-black text-white uppercase mb-6 tracking-tighter">
                Triton <span className="text-triton-red">3</span>
              </h4>

              <p className="text-md md:text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                An epic journey separating the three disciplines into individual events,
                allowing for refocused recovery and strategy after each event.
              </p>


              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Calendar className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      3 CONSECUTIVES RACE DAYS
                    </p>
                    <p className="text-gray-500 text-sm">
                      Swim - Friday / Bike - Saturday / Run - Sunday
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Zap className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      INNOVATIVE SCORING SYSTEM
                    </p>
                    <p className="text-gray-500 text-sm">
                      Each discipline carries equal weight, rewarding the athlete who performs consistently across all three.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      COMPETITION OPTIONS
                    </p>
                    <p className="text-gray-500 text-sm">
                      Individual Triathlon / Corporate Relay / Individual Disciplines - Compete in Swim, Bike or Run.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-white/5 bottom-0">
                <div className="flex -space-x-2 ">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <Waves size={14} className="text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <Bike size={14} className="text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                    <PersonStanding size={14} className="text-gray-400" />
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  LAP COURSE
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                All three distances: SPRINT, MIDDLE, LONG take place simultaneously on the same course
              </p>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 text-center">
          <MainButton href="/about">More Information</MainButton>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-triton-red to-transparent"></div>
    </section >

  );
};

export default TritonExperienceCards;
