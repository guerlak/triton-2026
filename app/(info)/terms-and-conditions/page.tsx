import React from "react";
import Footer from "../../components/Footer";
import { Gavel, ChevronRight, Scale, Info, ShieldAlert } from "lucide-react";

export default function TermsAndConditions() {
    const navItems = [
        { id: "intro", label: "Introduction" },
        { id: "entry", label: "1. Entry & Transfers" },
        { id: "imagery", label: "2. Imagery Consent" },
        { id: "medical", label: "3. Medical & Competition" },
        { id: "ranking-system", label: "4. Global Ranking" },
        { id: "force-majeure", label: "5. Force Majeure & Covid" },
        { id: "comp-rules", label: "6. Competition Rules" },
        { id: "finish-line", label: "7. Finish Line" },
        { id: "qualification", label: "8. Qualification" },
        { id: "liability", label: "9. Liability Waiver" },
        { id: "payments", label: "10. Payments & Bookings" },
        { id: "withdrawal", label: "11. Withdrawal Policy" },
        { id: "participant", label: "12. Participant Duties" },
        { id: "promotions", label: "13. Promotions" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">


            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 font-sans">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Gavel className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Terms & <span className="text-triton-red italic">Conditions</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-sans tracking-wide uppercase italic">Waiver and Release of Liability, Assumption of Risk and Indemnity</p>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5">Articles</h3>
                                <nav className="space-y-1">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="flex items-center gap-3 text-sm text-gray-500 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <article className="grow space-y-24 order-1 lg:order-2 max-w-4xl">

                            {/* Introduction */}
                            <div id="intro" className="bg-white/5 p-10 border border-white/10 rounded-2xl scroll-mt-32">
                                <p className="text-lg text-gray-300 leading-relaxed font-sans italic">
                                    To participate in any and all official TRITON series qualifying races, all participants must accept, before registering, the following, without exception.
                                    <span className="block mt-4 text-sm font-bold text-triton-red uppercase tracking-widest">Note: Additional local terms & conditions may apply.</span>
                                </p>
                            </div>

                            {/* Section 1 */}
                            <section id="entry" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-10">
                                    1. Entry & Transfers
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans text-lg">
                                    <p>Unless specifically stated in official race written communications TRITON WS race entries are non-transferable.</p>
                                    <div className="bg-neutral-900 p-6 rounded-xl border border-triton-red/20 text-white italic">
                                        "Selling of race entry slot is strictly prohibited. If you do sell your race slot, you will be disqualified from the race and you, as well as the entrant who purchased your slot will be disqualified from the TRITON WS for a minimum of 2 years."
                                    </div>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section id="imagery" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-10">
                                    2. Consent for Imagery Use
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans text-lg">
                                    <p>I hereby consent to the placement of my race images online at the official photographer’s website for the purposes of viewing and purchasing. I also give the organization permission to use my image for promotional and other purposes related to the Event.</p>
                                    <p>I authorize the use of my name, voice and picture and any information provided by me on this entry form to be used without payment in any broadcast, telecast, communication, promotion, or advertising.</p>
                                </div>
                            </section>

                            {/* Section 4 - GLOBAL RANKING */}
                            <section id="ranking-system" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-10">
                                    4. Global Ranking System
                                </h2>
                                <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed">
                                    <p>The ranking competition is annual, by distance, by gender and by age group. Insuring a fair dispute amongst their peers, and true global ranking competition to all athletes. It is a separate competition in its own right.</p>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {[
                                            "Points from calendar year only determine winners.",
                                            "Top 3 results of the year count for ranking points.",
                                            "Championship awards points multiplied by a factor of 3.",
                                            "Tie-breaker: Most points at the finals wins.",
                                            "Ranking is individual only, not team-based."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                                <div className="text-triton-red font-black">0{idx + 1}.</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                            {/* Section 5 - FORCE MAJEURE */}
                            <section id="force-majeure" className="space-y-12 scroll-mt-32 bg-white/5 p-10 rounded-2xl border border-white/10">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-black uppercase text-white mb-6 flex items-center gap-2">
                                        <ShieldAlert className="w-6 h-6 text-triton-red" />
                                        5. Force Majeure & Covid-19
                                    </h2>
                                    <div className="space-y-6 text-gray-400 font-sans text-lg">
                                        <p>Performance under Contract is suspended for the period that the Force Majeure event continues. We will use reasonable endeavors to bring the Force Majeure event to an end or find a solution.</p>
                                        <div className="p-6 bg-triton-red/10 border-l-4 border-triton-red rounded-r-xl">
                                            <p className="text-white font-bold mb-2">Refund Policy under COVID-19:</p>
                                            <p>At TRITON we guarantee, in case of Force Majeure & COVID-19 limitations, a full Registration refund (minus 12% service fees).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 9 - LIABILITY WAIVER */}
                            <section id="liability" className="space-y-10 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-10">
                                    9. Exemption of Liability
                                </h2>
                                <div className="space-y-6 font-sans text-gray-400 text-lg leading-relaxed">
                                    <div className="bg-red-950/20 p-8 rounded-2xl border border-red-900/30">
                                        <h3 className="text-white font-black uppercase mb-4 tracking-widest text-sm">Assumption of Risks</h3>
                                        <p>The Participant fully acknowledges that participation involves inherent risks and dangers, including serious bodily injury, permanent disability, paralysis, death, and property damage.</p>
                                    </div>
                                    <p>Participant hereby expressly waives, releases, and discharges TRITON, its directors, officers, employees, and sponsors from any and all liability, claims, or actions whatsoever.</p>
                                </div>
                            </section>

                            {/* Section 11 - WITHDRAWAL POLICY */}
                            <section id="withdrawal" className="space-y-10 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-10">
                                    11. Withdrawal & Cancellations
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <h4 className="text-triton-red font-black uppercase mb-4 tracking-tighter">Refund Schedule</h4>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>6+ months before:</span>
                                                <span className="text-white font-bold">50% Refund</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Under 6 months:</span>
                                                <span className="text-white font-bold opacity-50">No Refund</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <h4 className="text-triton-red font-black uppercase mb-4 tracking-tighter">Transfers</h4>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Until 45 days:</span>
                                                <span className="text-white font-bold">50€ Fee</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Under 45 days:</span>
                                                <span className="text-white font-bold opacity-50">Forbidden</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 italic px-6">Refunds do not include transaction fees, one-day licenses, or party tickets.</p>
                            </section>

                            <section className="bg-triton-red p-12 rounded-4xl text-black">
                                <h2 className="text-4xl font-black uppercase leading-none mb-6">Acceptance <br /> of Conditions</h2>
                                <p className="text-lg font-bold mb-8">By completing the Entry Form, you acknowledge that you have read, understood, and voluntarily agreed to all terms contained herein.</p>
                                <div className="text-xs font-black uppercase tracking-widest opacity-80 border-t border-black/10 pt-6">
                                    TRITON World Series Legal Department
                                </div>
                            </section>

                        </article>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}