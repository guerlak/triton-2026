"use client";
import React from "react";
import Image from "next/image";


const BrandEssenceSection: React.FC = () => {
  return (
    <section className="pb-10 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Visual Side: Left (Matching PDF Page 5) */}
          <div className="relative order-1 hidden md:block">
            <div className="h-180 overflow-hidden rounded-sm shadow-2xl"
            >
              <Image
                src="/images/triton-about-atleta-001.png"
                alt="Athlete"
                fill
                className="object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-15"></div>
              {/* Decorative technical line typical of the brand bible */}
              {/* <div className="absolute top-10 left-10 w-20 h-px bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-20 h-px bg-white/20"></div> */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-15"></div>
              <div className="bg-triton-red w-2/3 h-4/5"></div>
            </div>

            {/* Target Audience Floating Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded-sm z-20">
              <div className="text-[9px] font-black text-triton-red uppercase tracking-widest mb-2">
                Who We Are
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {["TRIATHLETES", "SWIMMERS", "CYCLISTS", "RUNNERS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-white text-[10px] uppercase font-bold"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Text Side: Right (Matching PDF Page 5) */}
          <div className="order-2 pl-0 lg:pl-10 ">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">
                ABOUT
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  TRITON is a triathlon series featuring two live race formats: <strong>TRITON 1</strong>, a traditional
                  one-day triathlon format, and <strong>TRITON 3</strong>, a stage-like format taking place across 3 consecutive
                  days, always in the same sequence — swim, bike and run.
                </p>
                <p>
                  Both formats always offer{" "}
                  <strong>
                    three race distances to choose from: SPRINT, MIDDLE and
                    LONG.
                  </strong>
                </p>
                <p>
                  The series focus on delivering a progression system, a training and a racing platform, with a global ranking system and competition, and, a championship event for everyone, facilitating entry to crossing over athletes from swimmers, to cycling enthusiasts,
                  to runners and endurance athletes, as well as for people looking for new formats to challenge themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandEssenceSection;
