"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Zap,
  Trophy,
  Waves,
  Bike,
  PersonStanding,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import StatsClientComponent from "./StatsClientComponent";

const TritonExperienceCards: React.FC = () => {
  return (
    <section className="py-24 bg-triton-dark overflow-hidden">
      <StatsClientComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-triton-red font-black tracking-[0.1em] uppercase text-lg mb-4 hidden"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Triton 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 rounded-[2.5rem] p-10 lg:p-16 border border-white/5 hover:border-triton-red/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-triton-red" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-triton-red/10 border border-triton-red/20 text-triton-red text-xs font-black uppercase tracking-widest mb-8">
                <Clock size={14} />1 Day of Competition
              </div>

              <h4 className="text-5xl lg:text-6xl font-black text-white uppercase mb-6 tracking-tighter">
                Triton <span className="text-triton-red">1</span>
              </h4>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                Maximum triathlon intensity packed into a single day. The
                classic format redefined by TRITON innovation.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Zap className="text-triton-red w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">
                      Mix & Match
                    </p>
                    <p className="text-gray-500 text-sm">
                      Mix swim, bike, and run distances freely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Trophy className="text-triton-red w-5 h-5" />
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
                  Traditional Sequence
                </span>
              </div>
            </div>
          </motion.div>

          {/* Triton 3 Card */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 rounded-[2.5rem] p-10 lg:p-16 border border-white/5 hover:border-triton-red/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar size={120} className="text-triton-red" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-triton-red/10 border border-triton-red/20 text-triton-red text-xs font-black uppercase tracking-widest mb-8">
                <Calendar size={14} />3 Days of Competition
              </div>

              <h4 className="text-5xl lg:text-6xl font-black text-white uppercase mb-6 tracking-tighter">
                Triton <span className="text-triton-red">3</span>
              </h4>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                An epic endurance journey. One discipline per day, allowing full
                focus and strategic recovery.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-triton-red/20 flex items-center justify-center shrink-0">
                    <span className="text-triton-red font-black">01</span>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-xs tracking-widest">
                      Friday
                    </p>
                    <p className="text-gray-300 font-black uppercase italic">
                      Swimming
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-triton-red/20 flex items-center justify-center shrink-0">
                    <span className="text-triton-red font-black">02</span>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-xs tracking-widest">
                      Saturday
                    </p>
                    <p className="text-gray-300 font-black uppercase italic">
                      Cycling
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-triton-red/20 flex items-center justify-center shrink-0">
                    <span className="text-triton-red font-black">03</span>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase text-xs tracking-widest">
                      Sunday
                    </p>
                    <p className="text-gray-300 font-black uppercase italic">
                      Running
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Focus: Endurance & Recovery
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        <Link
          href="/about"
          className="m-auto mt-10 pointer w-sm bg-triton-red hover:text-black text-white  hover:bg-white font-black py-4 px-10 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300"
        >
          <span>More Information</span>
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default TritonExperienceCards;
