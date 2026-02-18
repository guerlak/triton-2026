"use client";

import React from "react";
import { Trophy, CircleStar } from "lucide-react";
import { useDictionary } from "./DictionaryProvider";

const StatsClientComponent: React.FC = () => {
  const { dict } = useDictionary();

  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="text-triton-red mb-3 w-8 h-8" />,
    CircleStar: <CircleStar className="text-triton-red mb-3 w-8 h-8" />,
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 text-lg">
          Train . Race . Repeat
        </h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
          More than a racing series
        </h3>
        <p className="text-gray-400 max-w-5xl mx-auto text-lg mt-4">
          <strong>TRITON</strong> is a global triathlon platform built to unlock
          the best version of every athlete. We believe everyone is an athlete
          and that the mind is stronger than the body. With two official race
          formats, <strong>TRITON 1</strong> and <strong>TRITON 3</strong>, our
          events score points for the global ranking and qualify athletes for
          the World Finals. From first-time competitors to elite performers,
          TRITON takes athletes through the full journey of the sport.
        </p>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {dict?.market_stats?.map((stat: any, index: number) => (
          <div
            key={index}
            className="text-center p-8 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 transition-colors duration-300"
          >
            <div className="text-5xl md:text-6xl font-black text-white mb-2">
              {stat.value}
            </div>
            <div className="text-xl font-bold text-triton-red uppercase mb-2">
              {stat.label}
            </div>
            <p className="text-gray-400 text-sm font-medium max-w-xs mx-auto uppercase">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-linear-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 border-l-4 border-triton-red shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div>
            <h3 className="text-3xl font-black uppercase text-white mb-4">
              {dict.stats_client_component.title2}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {dict.stats_client_component.description2}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dict?.demographics_stats?.map((stat: any, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4"
              >
                {iconMap[stat.icon]}
                <span className="text-3xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsClientComponent;
