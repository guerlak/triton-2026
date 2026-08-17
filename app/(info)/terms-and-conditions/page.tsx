import React from "react";
import Footer from "../../components/Footer";
import { Gavel, ChevronRight, Scale, Info, ShieldAlert, FileText, ShieldCheck, Award } from "lucide-react";

export default function TermsAndConditions() {
    const navItems = [
        { id: "intro", label: "Introduction" },
        { id: "entry", label: "1. Entry & Transfers" },
        { id: "imagery", label: "2. Imagery Consent" },
        { id: "medical", label: "3. Medical & Competition" },
        { id: "force-majeure", label: "4. Force Majeure & Special Terms" },
        { id: "comp-rules", label: "5. Competition Rules & Formats" },
        { id: "finish-line", label: "6. Finish Line Rules" },
        { id: "ranking", label: "7. Global Ranking System" },
        { id: "liability", label: "8. Liability Waiver & Minors" },
        { id: "payments", label: "9. Payments & Cancellations" },
        { id: "awards", label: "10. Awards & Podium" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">

            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24 border-b border-white/5 font-sans">
                    <div className="flex items-center gap-3 text-triton-red mb-4 sm:mb-6">
                        <Gavel className="w-5 h-5 sm:w-6 sm:h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-white leading-tight tracking-tight break-words mb-4 sm:mb-6">
                        GLOBAL <span className="text-triton-red italic"> TERMS & CONDITIONS</span>
                    </h1>
                    <p className="text-xs sm:text-base md:text-lg text-gray-400 font-sans tracking-wide uppercase italic">
                        Waiver and Release of Liability, Assumption of Risk and Indemnity
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">

                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-xl">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-4 sm:mb-6 pb-3 border-b border-white/5">
                                    Navigation Articles
                                </h3>
                                <nav className="space-y-1">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all group"
                                        >
                                            <ChevronRight className="w-3.5 h-3.5 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                            <span className="truncate">{item.label}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <article className="grow space-y-16 sm:space-y-24 order-1 lg:order-2 max-w-4xl">

                            {/* Introduction */}
                            <div id="intro" className="bg-white/5 p-6 sm:p-8 md:p-10 border border-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-sm scroll-mt-32">
                                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans italic">
                                    To participate in any and all official TRITON series qualifying races, all participants must accept, before registering, the following, without exception.
                                    <span className="block mt-4 text-xs sm:text-sm font-bold text-triton-red uppercase tracking-widest">
                                        Note: Additional local terms & conditions may apply.
                                    </span>
                                </p>
                            </div>

                            {/* Section 1 - ENTRY TRANSFERS */}
                            <section id="entry" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    1. Entry & Transfers
                                </h2>
                                <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                                    <p>Unless specifically stated in official race written communications TRITON WS race entries are non-transferable.</p>
                                    <div className="bg-neutral-900/90 p-4 sm:p-6 rounded-xl border border-triton-red/30 text-white italic shadow-lg">
                                        "Selling of your race entry slot is strictly prohibited. If you do sell your race slot, you will be disqualified from the race and you, as well as the entrant who purchased your slot will be disqualified from the TRITON WS for a minimum of 2 years."
                                    </div>
                                </div>
                            </section>

                            {/* Section 2 - CONSENT FOR IMAGERY USE */}
                            <section id="imagery" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    2. Consent for Imagery Use
                                </h2>
                                <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                                    <p>
                                        I hereby consent to the placement of my race images online at the official photographer’s website for the purposes of viewing and purchasing. I also give the organization permission to use my image for promotional and other purposes related to the Event.
                                    </p>
                                    <p>
                                        I authorize the use of my name, voice and picture and any information provided by me on this entry form to be used without payment in any broadcast, telecast, communication, promotion, or advertising, and I also agree that the information I have provided may be used by the Event Organizers for the purpose of promoting future or other events or for the promotion of the Event charity (i.e.), race sponsors products and services.
                                    </p>
                                </div>
                            </section>

                            {/* Section 3 - MEDICAL & COMPETITION */}
                            <section id="medical" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    3. Medical & Competition
                                </h2>
                                <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                                    <p>
                                        I will wear the Event number and transponder as directed by the Event officials. I agree to return the transponder after the event or be charged 50€ for its non-return. Should the Event be cancelled or stopped for any reason, or personal circumstances arise that prevent me from participating in (or completing the Event), I accept that my entry fee is non-refundable.
                                    </p>
                                    <p>
                                        I acknowledge that the Event Organizers reserve the right in their absolute discretion to alter the advertised course or start time.
                                    </p>
                                    <p>
                                        I consent to receive any medical treatment that may be deemed necessary in the event of injury, accident or illness during the Event, and I allow that information to be passed on to the Event Organizers or third parties (as deemed necessary by the Event Organizers).
                                    </p>
                                    <p>
                                        I acknowledge that the Event Organizers have the absolute discretion in the award of any prizes, prize money or third-party prize or award and I will abide fully and without dispute with all such decisions of the Event Organizers.
                                    </p>
                                </div>
                            </section>

                            {/* Section 4 - FORCE MAJEURE & SPECIAL CIRCUMSTANCES */}
                            <section id="force-majeure" className="space-y-6 sm:space-y-8 scroll-mt-32 bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10">
                                <div className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white flex items-center gap-3">
                                        <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-triton-red shrink-0" />
                                        4. Force Majeure & Special Circumstances
                                    </h2>
                                    <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                                        <p>
                                            A Force Majeure event includes any act, event, non-happening, omission, or accident beyond our reasonable control and includes in particular (without limitation) the following:
                                        </p>
                                        <ul className="grid grid-cols-1 gap-2.5 pl-4 sm:pl-6 list-disc text-gray-400">
                                            <li>Strikes, lockouts, or other industrial action.</li>
                                            <li>Civil commotion, riot, invasion, terrorist attack, threat of terrorist attack, war (whether declared or not) or threat or preparation for war.</li>
                                            <li>Fire, explosion, storm, flood, earthquake, subsidence, epidemic, pandemic or another natural disaster.</li>
                                            <li>Impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport, race venues.</li>
                                            <li>Impossibility of the use of public or private telecommunications networks. The acts, decrees, legislation, regulations, or restriction of any government.</li>
                                        </ul>
                                        <p>
                                            Our performance under Contract is deemed to be suspended for the period that the Force Majeure event continues, and we will have an extension of time for performance for the duration of that period. TRITON will use our reasonable endeavors to bring the Force Majeure event to an end or find a solution by which our obligations under the contract may be performed despite the Force Majeure event.
                                        </p>
                                        <p>
                                            In alternative to delaying the event to a future date due to one of the circumstances mentioned above, if possible, and to minimize the impact on the athletes the organization may change the format, distances, order of competitions and disciplines of the event in that year (e.g. duathlon, aquathlon, road cycling race, road run race, or swimming competition).
                                        </p>
                                        <div className="p-4 sm:p-6 bg-triton-red/10 border-l-4 border-triton-red rounded-r-xl space-y-2 mt-4">
                                            <h4 className="text-white font-black uppercase text-sm tracking-wider">Special Circumstances:</h4>
                                            <p className="text-xs sm:text-sm text-gray-300">
                                                Any official TRITON race reserves itself the right to change any event date, up to 120 days prior to race day, without further previous notice and compensation. If such a case arises, an announcement will be made public in all TRITON event platforms and via email.
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-300">
                                                Under this term only, the organization is obligated to provide a new date within the same calendar year, or if not possible in the same calendar year, offer an alternative to either race another series event or get a refund.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5 - COMPETITION RULES & FORMATS */}
                            <section id="comp-rules" className="space-y-8 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    5. Global Competition Rules & Formats
                                </h2>

                                <div className="space-y-6 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                                    <p>
                                        TRITON continuously works towards global rule harmonization. Competition Rules govern all TRITON race competitions and are based primarily on TRITON’s series particular set of rules and the World Triathlon Competition Rules. In the event of any conflict, precedence is given to the TRITON Competition Rules.
                                    </p>

                                    {/* TRITON 1 */}
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                                        <h3 className="text-lg sm:text-xl font-black uppercase text-triton-red">TRITON 1 (One-Day Format)</h3>
                                        <p>
                                            Is a one-day competition in a regular triathlon format (swim, bike, run) in sequence without stoppage of the clock. Features 3 distances: <strong>SPRINT, MIDDLE, LONG</strong>.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs sm:text-sm">
                                            <li><strong>Non-Drafting:</strong> All bikes without propulsion systems accepted within traffic codes are allowed.</li>
                                            <li><strong>Individual Divisions:</strong> Male & Female Overall and Age-Groups (18–24, 25–29, 30–34, 35–39, 40–44, 45–49, 50–54, 55–59, 60–64, LEGENDS 65+).</li>
                                            <li><strong>Teenager Division (SPRINT only, 14–17):</strong> Requires federation affiliation, written parent consent, liability release, and accident insurance.</li>
                                            <li><strong>Teams & Mix&Match:</strong> Corporate teams in SPRINT division. Mix&Match non-competing format allows selecting different distances per segment.</li>
                                        </ul>
                                    </div>

                                    {/* TRITON 3 */}
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                                        <h3 className="text-lg sm:text-xl font-black uppercase text-triton-red">TRITON 3 (Stage Format & Points System)</h3>
                                        <p>
                                            Takes place in a stage-like format (swim, bike, run over consecutive days across one weekend). Decided by a point scoring system rather than total time.
                                        </p>
                                        <div className="bg-neutral-900 p-4 rounded-xl border border-white/5 text-xs sm:text-sm space-y-2">
                                            <p className="font-bold text-white uppercase">Points Scoring System:</p>
                                            <p className="text-gray-400">
                                                At the end of each day, finishing time is converted to points: 1st place = 1 pt, 2nd = 2 pts, 3rd = 3 pts. Only athletes completing all 3 days convert times to points. The athlete with the lowest accumulated points score wins.
                                            </p>
                                            <p className="text-gray-400">
                                                In case of a tie in points, the athlete finishing ahead in 2 of the 3 days wins. DNF score = total participants + 1.
                                            </p>
                                        </div>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs sm:text-sm">
                                            <li><strong>Draft Legal:</strong> Time-trial bikes or road bikes with clip-on extensions are NOT allowed.</li>
                                            <li><strong>By Sport Option:</strong> Athletes can also register individually for single disciplines (swim, bike, or run).</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Section 6 - FINISH LINE */}
                            <section id="finish-line" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    6. Finish Line Rules & Access
                                </h2>
                                <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                                    <p>
                                        Crossing the finish line is a unique moment. TRITON allows a maximum of <strong>three teammates</strong> (team competition) or <strong>two family members</strong> to cross the finish line together with the athlete, provided no other athlete is coming at the same time.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-white uppercase text-xs sm:text-sm mb-2">Access Tent:</h4>
                                            <p className="text-xs text-gray-400">
                                                At the start of the finish-line straightway, access is granted approximately 1 minute before the athlete arrives. Family/teammates must exit the finish zone immediately after crossing.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-white uppercase text-xs sm:text-sm mb-2">Special Medal Access:</h4>
                                            <p className="text-xs text-gray-400">
                                                Special requests for family members to award the finisher medal must be submitted in writing at least 1 week prior to race day for compelling reasons.
                                            </p>
                                        </div>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 7 - GLOBAL RANKING */}
                            <section id="ranking" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    7. Global Ranking System
                                </h2>
                                <div className="space-y-6 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                                    <p>
                                        TRITON global individual ranking consolidates both TRITON 1 and TRITON 3 results in a points system, giving both races equal relevance.
                                    </p>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {[
                                            "Only the top 3 race results of the year + Championship count for the ranking.",
                                            "Championship awards regular points multiplied by a factor of 3 (3X).",
                                            "In case of a tie in points, the athlete with the most points at the finals (or fastest accumulated time if no finals) wins.",
                                            "Ranking is individual only (in TRITON 3, only 3-day athletes score ranking points).",
                                            "Ranking points reset to zero every year, with champions engraved on the global series trophy."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 items-start">
                                                <div className="text-triton-red font-black shrink-0">0{idx + 1}.</div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-4 bg-neutral-900 rounded-xl border border-white/10 text-xs sm:text-sm">
                                        <span>View official points chart: </span>
                                        <a
                                            href="https://ranking.tritonworldseries.com/TRITON-GLOBAL-RANKING_points-with-no-bonus-points.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-triton-red underline font-bold hover:text-white transition-colors"
                                        >
                                            TRITON Global Ranking Points Table (PDF)
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Section 8 - LIABILITY WAIVER & MINORS */}
                            <section id="liability" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    8. Exemption of Liability, Waiver & Minors
                                </h2>
                                <div className="space-y-6 font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                                    <div className="bg-red-950/20 p-6 sm:p-8 rounded-2xl border border-red-900/30 space-y-3">
                                        <h3 className="text-white font-black uppercase tracking-widest text-xs sm:text-sm">Assumption of Risks & Waiver</h3>
                                        <p className="text-xs sm:text-sm text-gray-300">
                                            The Participant fully acknowledges that participation involves inherent risks (serious bodily injury, disability, death, property damage). Participant irrevocably waives and releases TRITON and Released Parties from any liability or claims.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                                        <h4 className="font-bold text-white uppercase text-sm">Minor Participation Waiver:</h4>
                                        <p className="text-xs sm:text-sm text-gray-400">
                                            Underage participation requires signed minor waiver responsibility. Download the form and send signed to <strong className="text-white">info@tritonworldseries.com</strong>.
                                        </p>
                                        <a
                                            href="https://tritonworldseries.com/wp-content/uploads/2024/05/TRITON-minor-waver-of-responsibility-1.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs text-triton-red font-bold underline hover:text-white transition-colors mt-2"
                                        >
                                            <FileText className="w-4 h-4" />
                                            Download Minor Waiver Form (PDF)
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Section 9 - PAYMENTS & CANCELLATIONS */}
                            <section id="payments" className="space-y-8 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    9. Bookings, Payments & Cancellations
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                                        <h4 className="text-triton-red font-black uppercase tracking-wider text-sm">Refund Policy</h4>
                                        <ul className="space-y-3">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>183+ days (6+ months) before:</span>
                                                <span className="text-white font-bold">50% Refund</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Under 182 days:</span>
                                                <span className="text-white font-bold opacity-60">No Refund</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                                        <h4 className="text-triton-red font-black uppercase tracking-wider text-sm">Transfers & Next Year</h4>
                                        <ul className="space-y-3">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Transfer to person (Until 45 days):</span>
                                                <span className="text-white font-bold">50€ Fee</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Transfer to next year (Until 45 days):</span>
                                                <span className="text-white font-bold">50€ Fee</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Under 30-45 days:</span>
                                                <span className="text-white font-bold opacity-60">No Transfer</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 italic">
                                    Full registration fee payment guarantees a valid slot. Registrations must be paid in full no less than 1 month prior to event start.
                                </p>
                            </section>

                            {/* Section 10 - AWARDS & PODIUM */}
                            <section id="awards" className="space-y-6 scroll-mt-32">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                                    10. Awards & Podium Ceremony
                                </h2>
                                <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                                    <p>
                                        All finisher athletes receive a finisher medal and finisher t-shirt (Mix&Match receives participation t-shirt). Diplomas are awarded to all divisions.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-triton-red uppercase mb-1">Overall Podium</h4>
                                            <p className="text-gray-400">TOP 5 Male & Female (SPRINT, MIDDLE, LONG)</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-triton-red uppercase mb-1">Age-Groups</h4>
                                            <p className="text-gray-400">TOP 3 Male & Female per Age-Group</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <h4 className="font-bold text-triton-red uppercase mb-1">Corporate Teams</h4>
                                            <p className="text-gray-400">TOP 3 Corporate Teams</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Acceptance Banner */}
                            <section className="bg-triton-red p-8 sm:p-12 rounded-3xl sm:rounded-4xl text-black">
                                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-none mb-6">
                                    Acceptance <br /> of Conditions
                                </h2>
                                <p className="text-base sm:text-lg font-bold mb-8">
                                    By completing the Entry Form, you acknowledge that you have read, understood, and voluntarily agreed to all terms contained herein.
                                </p>
                                <div className="text-xs font-black uppercase tracking-widest opacity-80 border-t border-black/10 pt-6">
                                    TRITON World Series Legal Department
                                </div>
                            </section>

                        </article>
                    </div>
                </div>
            </main>

        </div>
    );
}