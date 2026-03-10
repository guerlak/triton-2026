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
          {/* TRITON 3 */}
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-triton-red/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-triton-red p-3 rounded-lg">
                <Layers className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic">TRITON 3</h3>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              A 3-day, stage-like triathlon competition taking place over three consecutive days. This format is designed to identify the most complete and balanced triathlete.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">The Schedule</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Swim on Day 1 (Friday end of day), Bike on Day 2 (Saturday morning), and Run on Day 3 (Sunday morning). Arrive Friday, leave Sunday — just like a one-day race.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <RefreshCcw className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Flexibility</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Compete in the full triathlon, or choose only specific disciplines. Participants can race one, two, or all three days with rankings per day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Trophy className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Points Scoring</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Unique points-based system (1 point for 1st, 2 for 2nd). Lowest total wins, ensuring equal relevance for all three disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TRITON 1 */}
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-triton-red/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-lg">
                <Zap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic">TRITON 1</h3>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              The traditional one-day triathlon experience. Fast, intense, and offering multiple competition divisions including age groups, teams, and kids.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">One-Day Challenge</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Complete all three distances — SPRINT, MIDDLE, or LONG — in a single day. The definitive test for the classic triathlete.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Info className="text-triton-red w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Mix & Match</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A unique format where you can select different distances for each discipline, tailoring the race to your specific strengths.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-black/40 rounded-xl border border-white/5">
                <p className="text-gray-500 text-xs italic leading-relaxed">
                  * Note: Mix & Match participants receive individual results for each discipline but are not eligible for combined overall results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {["SPRINT", "MIDDLE", "LONG"].map((dist) => (
            <div key={dist} className="py-10 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all group">
              <span className="text-white font-black tracking-[0.5em] text-xl group-hover:text-triton-red transition-colors italic">{dist}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RaceFormatsSection;
