"use client";

import React from "react";
import { Trophy, CircleStar } from "lucide-react";

const StatsClientComponent: React.FC = () => {
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
          NOT YOUR ORDINARY TRIATHLON SERIES
        </h3>
        <p className="text-gray-400 max-w-5xl mx-auto text-lg mt-4">
          Built to unlock your best version, under the conviction that everyone is an athlete and that your mind is stronger
          than your body. With two race formats, <strong>TRITON 1</strong> and <strong>TRITON 3</strong>, each offering three distances to choose from at every race,
          a global ranking competition, and a championship event hosting three distances, <strong>TRITON</strong> is the future of triathlon racing
          and training — all under one brand and platform.
        </p>
      </div>
    </>
  );
};

export default StatsClientComponent;
