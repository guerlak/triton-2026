import React from "react";
import { Target, Globe, Lightbulb } from "lucide-react";

const MissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">
              MISSION <br /> & <span className="text-triton-red">VISION</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To redefine the sport of triathlon through constant innovation and the introduction of groundbreaking race formats.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-triton-red/10 flex items-center justify-center">
                  <Target className="text-triton-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Our Goal</h3>
                  <p className="text-gray-400">Build a global platform that inspires athletes of all levels to soar to new heights.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-triton-red/10 flex items-center justify-center">
                  <Globe className="text-triton-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Global Presence</h3>
                  <p className="text-gray-400">Bringing the global triathlon community together in diverse and inspiring destinations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-triton-red/10 flex items-center justify-center">
                  <Lightbulb className="text-triton-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Innovation</h3>
                  <p className="text-gray-400">Constant evolution of race formats to keep the sport exciting and accessible.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-triton-red to-black rounded-3xl overflow-hidden shadow-2xl shadow-triton-red/20 flex items-center justify-center p-12">
              <div className="text-center">
                <blockquote className="text-3xl md:text-4xl font-black text-white italic leading-tight mb-6">
                  "Making Your Mind Stronger Than Your Body."
                </blockquote>
                <div className="text-triton-red font-bold uppercase tracking-widest text-sm">
                  — The TRITON Motto
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-triton-red rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-white/20 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
