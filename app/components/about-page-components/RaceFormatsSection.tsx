import React from "react";
import { Info, Calendar, Trophy, Zap, Layers, RefreshCcw } from "lucide-react";

const RaceFormatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
            INNOVATIVE <span className="text-triton-red">FORMATS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            TRITON offers two primary live race formats, each available in Sprint, Middle, and Long distances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">


          {/* TRITON 1 */}
          <div className="bg-neutral-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 hover:border-triton-red/30 transition-all duration-500 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-triton-red/10 rounded-xl flex items-center justify-center border border-triton-red/20 shadow-[0_0_15px_rgba(235,0,0,0.1)]">
                <Zap className="text-triton-red w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tight">TRITON <span className="text-triton-red">1</span></h3>
            </div>

            <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium border-l-2 border-triton-red pl-6 py-1">
              A regular one-day triathlon race following the traditional format across multiple distances and divisions.
            </p>

            <div className="space-y-8 flex-grow">
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">The Challenge</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Choose one of the 3 distances — <span className="text-white font-semibold">SPRINT, MIDDLE, or LONG</span> — in a single day. The definitive test for the classic triathlete seeking speed and endurance in a traditional format.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <RefreshCcw className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Mix & Match Format</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A unique TRITON feature where you can select your preferred distance for EACH discipline (e.g., Long Swim + Sprint Bike + Middle Run). Adjust the race to your specific strengths or preferences.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Important Note</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Mix & Match is a <span className="text-white italic">participation-only</span> format. You will receive individual results for each discipline, but are not eligible for combined overall results or competitive awards.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Competition Divisions</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Choose from individual competition divisions by age group and gender, or join the team competition for a shared experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Race Regulations</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    All TRITON 1 races are <span className="text-white italic">non-drafting</span>. Most bikes without propulsion systems are allowed, provided they comply with local traffic codes and event legislation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-white font-black italic text-xl">
                  S / M / L</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Distances</p>
              </div>
              <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-white font-black italic text-xl">NON-DRAFT</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Regulation</p>
              </div>
            </div>
          </div>

          {/* TRITON 3 */}
          <div className="bg-neutral-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 hover:border-triton-red/30 transition-all duration-500 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-triton-red/10 rounded-xl flex items-center justify-center border border-triton-red/20 shadow-[0_0_15px_rgba(235,0,0,0.1)]">
                <Layers className="text-triton-red w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tight">TRITON <span className="text-triton-red">3</span></h3>
            </div>

            <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium border-l-2 border-triton-red pl-6 py-1">
              A unique 3-day, stage-like triathlon competition designed to identify the most complete and balanced triathlete.
            </p>

            <div className="space-y-8 flex-grow">
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">The Schedule</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Three consecutive days: <span className="text-white font-semibold italic">Swim (Day 1)</span>, <span className="text-white font-semibold italic">Bike (Day 2)</span>, and <span className="text-white font-semibold italic">Run (Day 3)</span>. Usually, the swim is Friday end of day,
                    while the bike and run are Saturday and Sunday mornings. Arrive Friday, leave Sunday.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <RefreshCcw className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Extreme Flexibility</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Compete in the full race (all 3 days in SPRINT, MIDDLE, or LONG), or choose only specific disciplines. Race one, two, or all three days. Single-discipline entries receive daily rankings, while full race athletes compete for the overall title.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Trophy className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Fair Points Scoring</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Unlike time-based results, TRITON 3 uses a unique points system (1pt for 1st, 2pts for 2nd). The athlete with the fewest total points wins, giving equal weight to all three disciplines and identifying the most balanced competitor.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Competition Divisions</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open to all with individual divisions by age group and gender. Team competitions and single-discipline racing (Swim, Bike, or Run) are also available.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-[0.2em] opacity-70">Race Regulations</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    All TRITON 3 races are <span className="text-white italic">draft legal</span>. Time-trial (TT) bikes and clip-on extensions are <span className="text-triton-red font-bold">NOT</span> allowed. All road-legal bikes within traffic regulations are accepted.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-white font-black italic text-xl">S / M / L</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Distances</p>
              </div>
              <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-white font-black italic text-xl">DRAFTING</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Allowed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="py-2 bg-white text-black border border-white/10 rounded-xl text-center hover:bg-white/10
             transition-all group">
            <span className="text-black font-black tracking-[0.5em] text-xl 
              group-hover:text-triton-red transition-colors italic">SPRINT</span>
          </div>
          <div className="py-2 bg-triton-red text-white border border-white/10 rounded-xl text-center hover:bg-white/10
             transition-all group">
            <span className="text-white font-black tracking-[0.5em] text-xl 
              group-hover:text-triton-red transition-colors italic">MIDDLE</span>
          </div>
          <div className="py-2 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10
             transition-all group">
            <span className="text-white font-black tracking-[0.5em] text-xl 
              group-hover:text-triton-red transition-colors italic">LONG</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RaceFormatsSection;
