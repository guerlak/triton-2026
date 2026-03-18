"use client";
import React from "react";
import { motion } from "framer-motion";
import { Waves, Bike, PersonStanding } from "lucide-react";

import Image from "next/image";

const VennDiagram = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
      {/* Top Left Circle - Swim */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute w-1/2 h-1/2 rounded-full border-2 border-triton-red/80 flex items-center justify-center
         -translate-x-1/3 -translate-y-1/4 bg-black/4"
      >
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Waves className="w-8 h-8 md:w-12 md:h-12 text-white" />
        </div>
      </motion.div>

      {/* Top Right Circle - Bike */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute w-1/2 h-1/2 rounded-full border-2 border-triton-red/80 flex items-center
         justify-center translate-x-1/3 -translate-y-1/4 bg-black/5"
      >
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Bike className="w-8 h-8 md:w-12 md:h-12 text-white" />
        </div>
      </motion.div>

      {/* Bottom Circle - Run */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute w-1/2 h-1/2 rounded-full border-2 border-triton-red/80 flex items-center
         justify-center translate-y-1/3 bg-black/5"
      >
        <div className="absolute top-3/4 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <PersonStanding className="w-8 h-8 md:w-12 md:h-12 text-white" />
        </div>
      </motion.div>

      {/* Center Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="z-10 w-20 h-20 md:w-40 md:h-40 flex items-center justify-center "
      >
        <div className="relative w-15 h-15 ">
          <Image
            src="/images/triton-ws-logo-01.png" // Using the triton icon from public/images
            alt="Triton"
            fill
            className="object-contain filter contrast-125 saturate-125"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VennDiagram;
