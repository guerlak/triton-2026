import React from "react";

const BrandEssenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Visual Side: Left (Matching PDF Page 5) */}
          <div className="relative order-1">
            <div className="h-130 bg-triton-red relative overflow-hidden rounded-sm shadow-2xl">
              {/* Image background placeholder with red vibrant color */}
              <div className="absolute inset-0 bg-triton-red"></div>

              {/* athlete image would go here - overlapping the red */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative technical line typical of the brand bible */}
              <div className="absolute top-10 left-10 w-20 h-px bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-20 h-px bg-white/20"></div>
            </div>

            {/* Target Audience Floating Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs bg-black/80 backdrop-blur-md p-4 border border-white/10 rounded-sm z-20">
              <div className="text-[9px] font-black text-triton-red uppercase tracking-widest mb-2">
                Target Audience
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {["Swimmers", "Cyclists", "Runners", "Triathletes"].map(
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
          <div className="order-2 pl-0 lg:pl-10">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">
                ABOUT
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  TRITON is a new global triathlon series featuring two live
                  race formats: TRITON 3, a stage-like format taking place
                  across 3 consecutive days, always in the same sequence — swim,
                  bike and run — and TRITON 1, a traditional one-day triathlon
                  format.
                </p>
                <p>
                  Both formats always offer{" "}
                  <strong>
                    three race distances to choose from: SPRINT, MIDDLE and
                    LONG.
                  </strong>
                </p>
                <p>
                  We focus on delivering races not only for triathletes, but
                  also for swimmers, cycling enthusiasts, runners and endurance
                  athletes, as well as for people looking for new formats to
                  challenge themselves.
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
