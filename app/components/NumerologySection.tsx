import React from "react";
import { Sigma, Binary, Zap } from "lucide-react";

const NumerologySection: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-triton-red/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mathematical-formulae.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side: The 3-6-9 Trifecta */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central Geometric Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-2 border-triton-red/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-3/4 h-3/4 border border-triton-red/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-1/2 h-1/2 border border-white/10 rounded-full"></div>
              </div>

              {/* Tesla's Numbers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Positioned Numbers */}
                  <span className="absolute top-0 left-5 text-7xl md:text-9xl font-black text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    3
                  </span>
                  <span className="absolute top-0 right-0 text-7xl md:text-9xl font-black text-triton-red drop-shadow-[0_0_15px_rgba(230,0,35,0.3)]">
                    6
                  </span>
                  <span className="absolute bottom-3 left-46 text-7xl md:text-9xl font-black text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    9
                  </span>
                </div>
              </div>

              {/* Connectivity Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 100 100"
              >
                <line
                  x1="10"
                  y1="10"
                  x2="50"
                  y2="75"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-triton-red"
                />
                <line
                  x1="50"
                  y1="75"
                  x2="90"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-triton-red"
                />
                <line
                  x1="10"
                  y1="10"
                  x2="90"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-white"
                />
              </svg>
            </div>

            {/* Quote attribution */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-triton-red font-bold uppercase tracking-[0.3em] text-xs">
                <Zap size={14} /> Nikola Tesla Theory
              </div>
              <p className="text-gray-500 italic text-sm mt-2">
                "If you knew the magnificence of the numbers 3, 6, and 9, you
                would have the key to the universe."
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Pilar TRITON #01
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-8">
              NUMERO<span className="text-triton-red">LOGY</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Mathematics is everywhere around us and manifests in all the
                wonders of nature, providing a logical framework for the
                physical world.
              </p>

              <div className="flex gap-4 p-6 bg-neutral-900/50 border-l-4 border-triton-red">
                <Sigma className="text-triton-red flex-shrink-0" size={32} />
                <p className="text-sm md:text-base italic">
                  Everything in TRITON falls under the mathematical trifecta
                  that manifests in the magnificence of Nikola Tesla's 3, 6, 9
                  theory.
                </p>
              </div>

              <p>
                The whole TRITON framework adheres to this rule: from race
                distances and color palettes to the number of competitions and
                global events..
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl">
                    DISTANCES
                  </span>
                  <span className="text-triton-red text-xs font-bold uppercase tracking-widest">
                    Base 3-6-9
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl">COLORS</span>
                  <span className="text-triton-red text-xs font-bold uppercase tracking-widest">
                    Golden Section
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl">STAGES</span>
                  <span className="text-triton-red text-xs font-bold uppercase tracking-widest">
                    Global Alignment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumerologySection;
