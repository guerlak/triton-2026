import React from "react";
import Footer from "../../components/Footer";
import { Gavel, ChevronRight, Scale, Info, ShieldAlert, Trophy, Award, Target, Sparkles, CheckCircle2 } from "lucide-react";

export default function TermsAndConditions() {
    const navItems = [
        { id: "intro", label: "Introduction" },
        { id: "entry", label: "1. Entry & Transfers" },
        { id: "imagery", label: "2. Imagery Consent" },
        { id: "medical", label: "3. Medical & Competition" },
        { id: "ranking-system", label: "4. Global Ranking" },
        { id: "competition-framework", label: "Competition Framework" },
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

    const rankingCategories = [
        { level: "LEVEL", desc: "Global ranking and Nation ranking" },
        { level: "DISTANCE", desc: "Sprint, Middle and Long" },
        { level: "GENDER", desc: "As defined in the official competition regulations" },
        { level: "DIVISION", desc: "Overall and age group" },
    ];

    const workedExampleData = [
        { result: "Best regular result", stdPts: "3,000", val: "3,000" },
        { result: "Second-best regular result", stdPts: "2,760", val: "2,760" },
        { result: "Third-best regular result", stdPts: "2,440", val: "2,440" },
        { result: "World Championship result", stdPts: "2,840", val: "8,520" },
    ];

    const pointsDistribution = [
        { pos1: "1st", pts1: "3,000", pos2: "26th", pts2: "1,560" },
        { pos1: "2nd", pts1: "2,920", pos2: "27th", pts2: "1,520" },
        { pos1: "3rd", pts1: "2,840", pos2: "28th", pts2: "1,480" },
        { pos1: "4th", pts1: "2,760", pos2: "29th", pts2: "1,440" },
        { pos1: "5th", pts1: "2,680", pos2: "30th", pts2: "1,400" },
        { pos1: "6th", pts1: "2,600", pos2: "31st", pts2: "1,360" },
        { pos1: "7th", pts1: "2,520", pos2: "32nd", pts2: "1,320" },
        { pos1: "8th", pts1: "2,440", pos2: "33rd", pts2: "1,280" },
        { pos1: "9th", pts1: "2,360", pos2: "34th", pts2: "1,240" },
        { pos1: "10th", pts1: "2,280", pos2: "35th", pts2: "1,200" },
        { pos1: "11th", pts1: "2,200", pos2: "36th", pts2: "1,160" },
        { pos1: "12th", pts1: "2,120", pos2: "37th", pts2: "1,120" },
        { pos1: "13th", pts1: "2,080", pos2: "38th", pts2: "1,080" },
        { pos1: "14th", pts1: "2,040", pos2: "39th", pts2: "1,040" },
        { pos1: "15th", pts1: "2,000", pos2: "40th", pts2: "1,000" },
        { pos1: "16th", pts1: "1,960", pos2: "41st", pts2: "960" },
        { pos1: "17th", pts1: "1,920", pos2: "42nd", pts2: "920" },
        { pos1: "18th", pts1: "1,880", pos2: "43rd", pts2: "880" },
        { pos1: "19th", pts1: "1,840", pos2: "44th", pts2: "840" },
        { pos1: "20th", pts1: "1,800", pos2: "45th", pts2: "800" },
        { pos1: "21st", pts1: "1,760", pos2: "46th", pts2: "760" },
        { pos1: "22nd", pts1: "1,720", pos2: "47th", pts2: "720" },
        { pos1: "23rd", pts1: "1,680", pos2: "48th", pts2: "680" },
        { pos1: "24th", pts1: "1,640", pos2: "49th", pts2: "640" },
        { pos1: "25th", pts1: "1,600", pos2: "50th", pts2: "600" },
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

                            {/* Section: TRITON WORLD SERIES | COMPETITION FRAMEWORK */}
                            <section id="competition-framework" className="space-y-10 sm:space-y-12 scroll-mt-32 border-t border-white/10 pt-12">
                                {/* Framework Header Card */}
                                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                                        <div>
                                            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-1">
                                                TRITON WORLD SERIES | COMPETITION FRAMEWORK
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white leading-tight">
                                                TRITON Global Ranking
                                            </h2>
                                            <h3 className="text-sm sm:text-lg font-bold uppercase text-triton-red tracking-wider mt-1">
                                                POINTS SYSTEM & DISTRIBUTION
                                            </h3>
                                        </div>
                                        <div className="self-start sm:self-center px-4 py-2 bg-triton-red/10 border border-triton-red/30 rounded-xl text-triton-red font-mono text-xs font-bold tracking-wider">
                                            TRITON GLOBAL RANKING POINTS SYSTEM • 2026
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/5 space-y-3">
                                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase text-white tracking-wide text-triton-red">
                                            ONE SEASON. ONE FAIR SYSTEM. ONE GLOBAL CHAMPION.
                                        </h4>
                                        <p className="text-xs sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
                                            TRITON combines results from TRITON 1 and TRITON 3 in one annual ranking. Both formats carry
                                            equal sporting value, athletes are ranked within comparable categories, and every new season begins
                                            from zero.
                                        </p>
                                    </div>
                                </div>

                                {/* Items 1, 2, 3 */}
                                <div className="space-y-6 sm:space-y-8">
                                    {/* 1. Purpose and scope */}
                                    <div className="space-y-4 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base sm:text-lg">1.</span> Purpose and scope
                                        </h3>
                                        <p className="text-xs sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
                                            The TRITON Global Ranking recognises performance across all official TRITON races and creates one
                                            consistent competitive pathway from local events to the World Championship.
                                        </p>
                                        <ul className="space-y-3 pt-2">
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Equal format value.</strong> TRITON 1 and TRITON 3 award the same points for the same finishing position.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Comparable competition.</strong> Rankings are calculated by distance, gender and age group, at both Global and Nation level.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Annual opportunity.</strong> Points do not carry forward indefinitely; every athlete starts each new season on equal terms.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 2. Season cycle */}
                                    <div className="space-y-4 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base sm:text-lg">2.</span> Season cycle
                                        </h3>
                                        <div className="space-y-4 text-xs sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
                                            <p>
                                                Each ranking season runs until the annual TRITON World Championship. If no Championship is held in a
                                                particular year, the season ends at the final official TRITON race of that year.
                                            </p>
                                            <p>
                                                The following season begins immediately after the Championship or, where applicable, after the last
                                                official race of the year. All annual ranking points reset to zero at that moment.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3. How the final ranking is calculated */}
                                    <div className="space-y-6 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base sm:text-lg">3.</span> How the final ranking is calculated
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Regular-season score.</strong> Only an athlete’s three highest-scoring regular TRITON race results count toward the final ranking.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Championship score.</strong> The World Championship result is added separately and is worth three times the standard points shown in the distribution table.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">More racing, no unfair advantage.</strong> Athletes may enter as many official races as they wish, but additional starts only help when they improve one of the athlete’s three counting regular-season results.</span>
                                            </li>
                                        </ul>

                                        <div className="p-4 sm:p-6 bg-triton-red/10 border-l-4 border-triton-red rounded-r-xl">
                                            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-1">Formula</span>
                                            <p className="text-xs sm:text-base md:text-lg font-mono font-black text-white tracking-wide break-words">
                                                FINAL SCORE = TOP 3 REGULAR RESULTS + WORLD CHAMPIONSHIP RESULT × 3
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: THE COMPETITION LOGIC */}
                                <div className="bg-neutral-900/60 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
                                    <div className="space-y-2">
                                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block">
                                            TRITON WORLD SERIES | COMPETITION FRAMEWORK
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white leading-tight">
                                            THE COMPETITION LOGIC
                                        </h3>
                                        <h4 className="text-base sm:text-lg font-bold text-gray-300 italic">
                                            A fair and motivating ranking
                                        </h4>
                                    </div>
                                    <p className="text-xs sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
                                        The system balances sporting merit, accessibility and season-long engagement. It rewards the strongest
                                        performances without allowing travel frequency or financial capacity to determine the champion.
                                    </p>

                                    {/* 4. Standard points allocation */}
                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        <h4 className="text-lg sm:text-xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base">4.</span> Standard points allocation
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Maximum score.</strong> The winner of each ranking category receives 3,000 points.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Progressive scale.</strong> Points decrease by finishing position, creating meaningful separation between competitors while recognising every finisher.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Fixed allocation.</strong> The same points table applies to every official race, regardless of field size or event format.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Finisher recognition.</strong> Athletes finishing 51st or lower receive 400 points, providing recognition and a clear opportunity to improve at the next race.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 5. Ranking categories */}
                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        <h4 className="text-lg sm:text-xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base">5.</span> Ranking categories
                                        </h4>
                                        <p className="text-xs sm:text-base text-gray-400 font-sans">
                                            Every result is assessed within the athlete’s applicable competitive category:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                            {rankingCategories.map((cat, idx) => (
                                                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                                                    <span className="text-xs font-mono font-bold text-triton-red tracking-wider uppercase mb-1">{cat.level}</span>
                                                    <span className="text-xs sm:text-sm font-bold text-white font-sans">{cat.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 6. World Championship priority */}
                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        <h4 className="text-lg sm:text-xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base">6.</span> World Championship priority
                                        </h4>
                                        <p className="text-xs sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
                                            The World Championship is the decisive race of the season. Its 3× multiplier gives the event greater
                                            competitive weight, while the annual reset ensures that the next title race begins with a completely open
                                            field.
                                        </p>
                                    </div>
                                </div>

                                {/* Section: CHAMPIONS, RECOGNITION & SCORING */}
                                <div className="space-y-8 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5">
                                    <div>
                                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red block mb-1">
                                            TRITON WORLD SERIES | COMPETITION FRAMEWORK
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white">
                                            CHAMPIONS, RECOGNITION & SCORING
                                        </h3>
                                    </div>

                                    {/* 7. Champions, Hall of Fame and awards */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg sm:text-xl font-black uppercase text-white flex items-center gap-3">
                                            <span className="text-triton-red font-mono text-base">7.</span> Champions, Hall of Fame and awards
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Overall Global Ranking Champions.</strong> At the conclusion of each season, one female and one male Overall Global Ranking Champion are crowned in each of the three distances: Sprint, Middle and Long.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">TRITON Hall of Fame.</strong> All six Overall Global Ranking Champions are automatically inducted into the TRITON Hall of Fame, permanently recognising their achievement in TRITON history.</span>
                                            </li>
                                            <li className="flex gap-3 text-xs sm:text-base text-gray-300 font-sans">
                                                <span className="text-triton-red font-bold">•</span>
                                                <span><strong className="text-white">Trophy recipients.</strong> At the annual awards ceremony, trophies are presented to the female and male Overall Global Ranking Champions in each distance, and to every female and male winner of each age group in Sprint, Middle and Long.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="text-xs font-mono font-bold text-gray-500 border-t border-white/5 pt-4">
                                        TRITON GLOBAL RANKING POINTS SYSTEM • 2026
                                    </div>
                                </div>

                                {/* Worked Example Table */}
                                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden space-y-0">
                                    <div className="p-4 sm:p-6 border-b border-white/10 bg-white/5">
                                        <h4 className="text-base sm:text-lg font-black uppercase tracking-wider text-white">Worked example</h4>
                                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans italic">
                                            Example for illustration only. The official ranking platform calculates and displays each athlete’s counting results automatically.
                                        </p>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[500px]">
                                            <thead>
                                                <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-white/10 bg-black/40">
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black">COUNTING RESULT</th>
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black text-center">STANDARD POINTS</th>
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black text-right text-triton-red">RANKING VALUE</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-xs sm:text-sm font-sans">
                                                {workedExampleData.map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors whitespace-nowrap">
                                                        <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-medium text-white">{row.result}</td>
                                                        <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 text-center text-gray-300 font-mono text-xs sm:text-sm">{row.stdPts}</td>
                                                        <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 text-right font-black text-white font-mono text-xs sm:text-sm">{row.val}</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-triton-red/10 font-bold border-t-2 border-triton-red whitespace-nowrap">
                                                    <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black uppercase text-white">FINAL SEASON SCORE</td>
                                                    <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 text-center text-gray-400 font-mono text-xs sm:text-sm">-</td>
                                                    <td className="px-2.5 sm:px-4 py-2.5 sm:py-3 text-right font-black text-triton-red font-mono text-xs sm:text-sm">16,720</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* OFFICIAL REFERENCE TABLE - Points Distribution */}
                                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                    <div className="p-4 sm:p-6 border-b border-white/10 bg-white/5">
                                        <span className="text-xs font-mono font-bold text-triton-red tracking-widest uppercase block mb-1">
                                            OFFICIAL REFERENCE TABLE
                                        </span>
                                        <h4 className="text-lg sm:text-xl font-black uppercase text-white">
                                            Ranking points distribution
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans">
                                            Standard points awarded by finishing position. At the World Championship, multiply the listed value by three.
                                        </p>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[450px]">
                                            <thead>
                                                <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-white/10 bg-black/40">
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black">POSITION</th>
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black text-triton-red">POINTS</th>
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black border-l border-white/10">POSITION</th>
                                                    <th className="px-2.5 sm:px-4 py-2.5 sm:py-3 font-black text-triton-red">POINTS</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-xs sm:text-sm font-sans">
                                                {pointsDistribution.map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors whitespace-nowrap">
                                                        <td className="px-2.5 sm:px-4 py-2 sm:py-2.5 font-bold text-white font-mono text-xs sm:text-sm">{row.pos1}</td>
                                                        <td className="px-2.5 sm:px-4 py-2 sm:py-2.5 text-gray-300 font-mono text-xs sm:text-sm">{row.pts1}</td>
                                                        <td className="px-2.5 sm:px-4 py-2 sm:py-2.5 font-bold text-white font-mono text-xs sm:text-sm border-l border-white/10">{row.pos2}</td>
                                                        <td className="px-2.5 sm:px-4 py-2 sm:py-2.5 text-gray-300 font-mono text-xs sm:text-sm">{row.pts2}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="p-4 sm:p-6 bg-triton-red/10 border-t border-triton-red/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="text-center sm:text-left">
                                            <span className="text-xs sm:text-base font-black uppercase text-white tracking-wide block">
                                                51ST PLACE AND BEYOND <span className="text-triton-red font-mono ml-2">400 POINTS</span>
                                            </span>
                                        </div>
                                        <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-triton-red italic">
                                            BE EAGER. BE BRAVE. BE STRONG!
                                        </div>
                                    </div>

                                    <div className="p-3 bg-black/40 text-center border-t border-white/5">
                                        <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            TRITON GLOBAL RANKING POINTS SYSTEM • 2026
                                        </span>
                                    </div>
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