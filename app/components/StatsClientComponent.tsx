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
    </>
  );
};

export default StatsClientComponent;
