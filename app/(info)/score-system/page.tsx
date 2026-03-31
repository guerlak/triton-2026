import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Trophy, Activity, Award, CheckCircle2 } from "lucide-react";

export default function ScoreSystemPage() {
    const assumptions = [
        "The ranking is an annual competition, and only points from races held within the calendar year will count toward determining the winners.",
        "Only the top three results of the year, plus the championship result (when applicable), count toward the ranking points.",
        "The championship race awards regular race points multiplied by a factor of 3.",
        "In case of a tie in points, the athlete who scored more points at the championship race will be ranked higher.",
        "The ranking is individual only and not a team competition.",
        "Season ranking champions are crowned every year.",
        "At the end of the season, all ranking points reset to zero for the following year. However, a record of past ranking winners will remain on the website, and their names will be engraved on the global ranking series itinerant trophy.",
        "Ranking winners will receive a replica of the trophy at the championship event.",
        "In the case of TRITON 3, only athletes who compete on all three days will score points for the ranking.",
        "Points are awarded according to the official points chart."
    ];

    const triton3Example = [
        { prev: "3º", next: "1º", name: "ATHLETE 3", swim: "00:49:58", swimPts: 1, bike: "04:38:22", bikePts: 1, run: "03:01:35", runPts: 6, total: 8 },
        { prev: "2º", next: "2º", name: "ATHLETE 2", swim: "00:54:58", swimPts: 3, bike: "04:42:08", bikePts: 4, run: "02:51:45", runPts: 2, total: 9 },
        { prev: "5º", next: "3º", name: "ATHLETE 5", swim: "00:57:58", swimPts: 5, bike: "04:41:49", bikePts: 3, run: "02:57:57", runPts: 4, total: 12 },
        { prev: "6º", next: "4º", name: "ATHLETE 6", swim: "00:56:32", swimPts: 4, bike: "04:48:47", bikePts: 6, run: "02:57:35", runPts: 3, total: 13 },
        { prev: "7º", next: "5º", name: "ATHLETE 7", swim: "01:02:39", swimPts: 6, bike: "04:41:39", bikePts: 2, run: "02:58:20", runPts: 5, total: 13 },
        { prev: "4º", next: "6º", name: "ATHLETE 4", swim: "00:50:57", swimPts: 2, bike: "04:43:12", bikePts: 5, run: "03:02:49", runPts: 7, total: 14 },
        { prev: "1º", next: "7º", name: "ATHLETE 1", swim: "01:03:01", swimPts: 7, bike: "05:01:23", bikePts: 7, run: "02:05:58", runPts: 1, total: 15 },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">


            <main className="grow">
                {/* Header Section */}
                <section className="max-w-4xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Activity className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Regulations</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-none mb-8">
                        Scoring <span className="text-triton-red italic">System</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                        A comprehensive guide to how TRITON evaluates and ranks athlete performance across our different competition formats.
                    </p>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 py-20 divide-y divide-white/5">

                    {/* TRITON 1 */}
                    <section className="py-16 first:pt-0">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-triton-red italic text-xl">1</div>
                            <h2 className="text-3xl font-black uppercase text-white tracking-tight">TRITON 1</h2>
                        </div>
                        <div className="space-y-6 text-gray-400 leading-loose text-lg font-sans">
                            <p>
                                TRITON 1 is a one-day competition in the traditional triathlon format, consisting of swim, bike and run, always in this sequence and with the clock running continuously. The winner is the first athlete to cross the finish line at the end of the run segment, or the athlete with the fastest overall time when the race starts in waves.
                            </p>
                            <p>
                                The scoring system used in TRITON 1 follows the conventional format of triathlon races, where results are determined by the total time taken to complete the three disciplines.
                            </p>
                        </div>
                    </section>

                    {/* TRITON 3 */}
                    <section className="py-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-triton-red italic text-xl">3</div>
                            <h2 className="text-3xl font-black uppercase text-white tracking-tight">TRITON 3</h2>
                        </div>
                        <div className="space-y-6 text-gray-400 leading-loose text-lg font-sans">
                            <p>
                                TRITON 3 is a stage-style triathlon in which the three disciplines — swim, bike, and run — take place separately over three consecutive days. Because of this stage-based format, athletes have the flexibility to enter and compete in just one or two disciplines if they choose.
                            </p>
                            <p>
                                However, the official TRITON 3 competition is determined through a points-based scoring system, rather than the traditional cumulative time format used in most triathlons. Only athletes who compete on all three days, either individually or as part of a team, accumulate points toward the overall ranking.
                            </p>
                            <p>
                                All athletes are timed using an electronic timing system, and their finishing times are displayed by gender, distance (SPRINT, MIDDLE, or LONG), age group, and/or team. At the end of each day, finishing positions are converted into points: 1 point is awarded to the first-place finisher, 2 points to the second place, 3 points to the third place, and so on until the last finisher.
                            </p>

                            <div className="my-12 overflow-x-auto bg-white/5 rounded-2xl border border-white/10">
                                <div className="p-6 border-b border-white/10 bg-white/5">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-triton-red">TRITON 3 Scoring Example</h3>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">Demonstrating how consistency across disciplines defines the most balanced athlete.</p>
                                </div>
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/5">
                                            <th className="px-6 py-4 font-black">Prev</th>
                                            <th className="px-6 py-4 font-black text-triton-red">New</th>
                                            <th className="px-6 py-4 font-black">Athlete</th>
                                            <th className="px-6 py-4 font-black text-center">Swim (#)</th>
                                            <th className="px-6 py-4 font-black text-center">Bike (#)</th>
                                            <th className="px-6 py-4 font-black text-center">Run (#)</th>
                                            <th className="px-6 py-4 font-black text-right text-white">Total Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-sans">
                                        {triton3Example.map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 text-gray-500">{row.prev}</td>
                                                <td className="px-6 py-4 font-black text-triton-red">{row.next}</td>
                                                <td className="px-6 py-4 font-bold text-white italic">{row.name}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-gray-400">{row.swim}</span>
                                                    <span className="ml-2 font-black text-white/40">({row.swimPts})</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-gray-400">{row.bike}</span>
                                                    <span className="ml-2 font-black text-white/40">({row.bikePts})</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-gray-400">{row.run}</span>
                                                    <span className="ml-2 font-black text-white/40">({row.runPts})</span>
                                                </td>
                                                <td className="px-6 py-4 text-right font-black text-white">{row.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-white/5 p-8 border-l-4 border-triton-red rounded-r-xl my-10">
                                <p className="italic text-white">
                                    Only athletes competing across all three days have their results converted into the points system. For example, if an athlete finishes third overall in a stage, but the two athletes ahead are not competing in the full three-day competition, that athlete will receive 1 point for the stage.
                                </p>
                            </div>
                            <p>
                                At the end of the third day, points from each stage are combined to determine the final ranking. The winner is the athlete who accumulates the lowest total number of points. In the event of a tie, the deciding factor will be the head-to-head finishing positions between the tied athletes: the competitor who finishes ahead of the other in two of the three stages will be ranked higher.
                            </p>
                            <p>
                                In addition to the overall TRITON 3 classification, event organizers may also present separate daily awards for individual stage performances.
                            </p>
                            <p>
                                Athletes who do not finish (DNF) one or more stages will receive a score equivalent to the total number of participants plus one point for that stage. Athletes with a DNF may still be allowed to continue competing in the remaining stages.
                            </p>
                            <p>
                                This innovative scoring system is designed to identify the most balanced athlete across all three disciplines. By giving equal weight to swimming, cycling, and running, TRITON 3 highlights consistency and versatility, ultimately determining the most complete triathlete over the course of three days.
                            </p>
                        </div>
                    </section>

                    {/* GLOBAL RANKING */}
                    <section className="py-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-triton-red">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-black uppercase text-white tracking-tight leading-tight">TRITON Global Ranking Competition</h2>
                        </div>
                        <div className="space-y-6 text-gray-400 leading-loose text-lg font-sans">
                            <p>
                                The TRITON Global Ranking Competition is a competition that consolidates the results of both TRITON 1 and TRITON 3 races through a points system, giving both race formats equal relevance and equal reward.
                            </p>
                            <p>
                                The ranking competition is annual and organized by distance, gender, and age group, ensuring a fair competition among athletes and providing a true global ranking system. The ranking operates as a separate competition in its own right.
                            </p>
                            <p>
                                The ranking includes the following information: Name, country, distance, gender, age group, global ranking position, and the total accumulated points from up to the top three race results of the year, plus the championship points in years when the championship is held.
                            </p>
                            <div className="bg-neutral-900/50 p-8 border border-white/5 rounded-xl my-10 border-dashed">
                                <p className="text-white font-medium mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-triton-red" />
                                    Championship Points
                                </p>
                                <p>
                                    The championship race awards the highest number of points. It applies a 3x multiplier to the regular points. This ensures that the championship is the most valuable race of the season, without making it the sole decisive factor in the years when the final is hosted.
                                </p>
                            </div>
                            <p>
                                The system rewards athletes who compete in more than one race, while still counting only the top three results in the ranking. This approach guarantees a fair and accessible ranking system for all athletes.
                            </p>
                        </div>

                        {/* Assumptions */}
                        <div className="mt-20">
                            <h3 className="text-xl font-black uppercase text-white mb-10 pb-4 border-b border-white/10 tracking-widest">
                                System Assumptions
                            </h3>
                            <div className="grid grid-cols-1 gap-6">
                                {assumptions.map((text, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-triton-red/40 group-hover:text-triton-red transition-colors" />
                                        </div>
                                        <p className="text-gray-400 leading-relaxed font-sans">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}