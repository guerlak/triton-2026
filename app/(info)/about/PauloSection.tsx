import React from "react";
import Image from "next/image";

const PauloSection: React.FC = () => {
  return (
    <section className="md:py-20 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Visual Side: Left (Matching PDF Page 5) */}
          <div className="relative order-1 ">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-10 leading-tight tracking-tighter md:hidden">
              THE <span className="text-triton-white ">FOUNDER</span>
            </h2>

            <div className="h-170 w-130 mx-auto overflow-hidden rounded-sm shadow-[0_0_50px_rgba(255,0,0,0.15)] relative md:mt-15 border border-white/10 group">

              <Image
                src="/images/paulo.png"
                alt="Paulo Passos Leite"
                fill
                className="rounded-sm object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-15"></div>

              {/* Decorative Red Box behind the athlete */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-triton-red w-3/4 h-3/4 
              z-0 opacity-30 blur-[100px]"></div>
            </div>

            {/* Target Audience Floating Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs bg-black/80 backdrop-blur-md p-6 
            border border-white/10 rounded-sm z-20 shadow-2xl">
              <div className="text-xs font-black text-triton-red uppercase tracking-widest mb-2">
                Paulo Passos Leite
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {["FOUNDER", "-", "CHAIRMAN OF THE BOARD"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-white/80 text-[10px] uppercase font-bold tracking-tighter"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Text Side: Right (Matching PDF Page 5) */}
          <div className="order-2 pl-0 lg:pl-10 mt-10 ">
            <div className="">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-12 
              leading-tight tracking-tighter md:block hidden">
                THE <span className="text-triton-white">FOUNDER</span>
              </h2>

              <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                <p className="text-white font-medium border-l-2 border-triton-red pl-6 italic">
                  "My passion for sport began in childhood, competing in different disciplines while living in several countries, and later as a dedicated age-group triathlete."
                </p>

                <p>
                  Over the past two decades, I have dedicated my career to the development of <span className="text-white font-semibold">mass participation sports</span> and international endurance events, particularly in triathlon. These experiences — both as an athlete and as an event organizer — shaped the vision behind <span className="text-white font-bold spacing-wider">TRITON</span>.
                </p>

                <p>
                  The concept was first developed in <span className="text-white">2017</span>, driven by the belief that triathlon needed innovation in both competition formats and its business model. After the challenges of the COVID period, the vision began to take shape with the first test events in <span className="text-white">2022 and 2023</span>.
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

export default PauloSection;
