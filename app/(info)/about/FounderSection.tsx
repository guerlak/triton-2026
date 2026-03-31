import React from "react";
import Image from "next/image";

const FounderSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Visual Side: Left */}
          <div className="relative order-1">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase mt-4 mb-6 leading-tight tracking-tighter md:hidden">
              THE <span className="text-triton-white">FOUNDER</span>
            </h2>

            {/* Image container — name tag sits INSIDE so overflow-hidden doesn't clip it */}
            <div className="w-full max-w-[320px] sm:max-w-sm md:h-170 md:w-130 md:max-w-none mx-auto aspect-3/4 overflow-hidden rounded-sm shadow-[0_0_50px_rgba(255,0,0,0.15)] relative md:mt-15 border border-white/10 group">

              <Image
                src="/images/paulo.png"
                alt="Paulo Passos Leite"
                fill
                className="rounded-sm object-cover object-top z-10 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-15"></div>

              {/* Decorative red glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-triton-red w-3/4 h-3/4 z-0 opacity-30 blur-[100px]"></div>

              {/* Name tag — inside the image, pinned to the bottom so it isn't clipped */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md px-5 py-4 border-t border-white/10 z-20">
                <div className="text-xs font-black text-triton-red uppercase tracking-widest mb-1">
                  Paulo Passos Leite
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {["FOUNDER", "·", "CHAIRMAN OF THE BOARD"].map((tag) => (
                    <span
                      key={tag}
                      className="text-white/80 text-[10px] uppercase font-bold tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Side: Right */}
          <div className="order-2 pl-0 lg:pl-10 mt-6 md:mt-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 md:mb-12 leading-tight tracking-tighter hidden md:block">
                THE <span className="text-triton-white">FOUNDER</span>
              </h2>

              <div className="space-y-5 md:space-y-8 text-gray-400 text-base md:text-lg leading-relaxed font-light">
                <p className="text-white font-medium border-l-2 border-triton-red pl-5 italic text-sm md:text-base">
                  &ldquo;My passion for sport began in childhood, competing in different disciplines while living in several countries, and later as a dedicated age-group triathlete.&rdquo;
                </p>

                <p>
                  Over the past two decades, I have dedicated my career to the development of{" "}
                  <span className="text-white font-semibold">mass participation sports</span>{" "}
                  and international endurance events, particularly in triathlon. These experiences — both as an athlete and as an event organizer — shaped the vision behind{" "}
                  <span className="text-white font-bold spacing-wider">TRITON</span>.
                </p>

                <p>
                  The concept was first developed in{" "}
                  <span className="text-white">2017</span>, driven by the belief that triathlon needed innovation in both competition formats and its business model. After the challenges of the COVID period, the vision began to take shape with the first test events in{" "}
                  <span className="text-white">2022 and 2023</span>.
                </p>

                <p>
                  Today, <span className="text-triton-red font-bold">TRITON</span> is evolving into a global triathlon ecosystem connecting athletes, organizers, and partners around the world, bringing a new era for the sport.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
