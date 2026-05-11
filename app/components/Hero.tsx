"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/public/images/evento_start.jpg";
import logoHero from "@/public/images/triton-ws-branco.png";
import Image from "next/image";
import { motion, delay } from "framer-motion";
import RedLine from "../ui/RedLine";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image acting as video placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Triathlon Swimming"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/10 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-2 max-w-6xl mx-auto">
        {/* Logo Mark */}
        <Image
          src={logoHero}
          alt="Triathlon Swimming"
          className="w-70 md:w-120 mx-auto"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-xl font-bold tracking-widest uppercase">
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.1 // espera 2 segundos antes de iniciar
            }}>
            <span className="text-white">Be Eager</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.6 // espera 2 segundos antes de iniciar
            }}>
            <span className="hidden md:block text-triton-red">•</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3 // espera 2 segundos antes de iniciar
            }}>
            <motion.div initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }} >
              <span className="text-white">Be Brave</span>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 1 // espera 2 segundos antes de iniciar
            }}>
            <span className="hidden md:block text-triton-red">•</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.6 // espera 2 segundos antes de iniciar
            }}>

            <span className="text-white">Be Strong</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
      <RedLine />
    </section >
  );
};

export default Hero;
