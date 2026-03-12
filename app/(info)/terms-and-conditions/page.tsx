
"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
    const sections = [
        { id: "entry", title: "Entry & Transfers" },
        { id: "imagery", title: "Imagery Consent" },
        { id: "medical", title: "Medical & Competition" },
        { id: "ranking-system", title: "Global Ranking System" },
        { id: "introduction", title: "Introduction" },
        { id: "force-majeure", title: "Force Majeure & Covid" },
        { id: "comp-rules", title: "Competition Rules" },
        { id: "finish-line", title: "Finish Line" },
        { id: "qualification", title: "Qualification" },
        { id: "liability", title: "Liability Waiver" },
        { id: "participation", title: "Finals Participation" },
        { id: "payments", title: "Payments & Bookings" },
        { id: "withdrawal", title: "Withdrawal Policy" },
        { id: "participant", title: "Participant Duties" },
        { id: "promotions", title: "Discounts & Ranking" },
    ];

    return (
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
                    TRITON RACES GLOBAL TERMS & CONDITIONS, <br className="hidden md:block" />
                    <span className="text-triton-red italic text-xl md:text-2xl text-pretty tracking-wide">WAIVER AND RELEASE OF LIABILITY, ASSUMPTION OF RISK AND INDEMNITY</span>
                </h1>
                <div className="h-1 w-24 bg-triton-red mx-auto mb-8"></div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <nav className="sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 space-y-1 scrollbar-hide">
                        <p className="text-triton-red font-black uppercase text-[10px] tracking-widest mb-4 opacity-70">Table of Contents</p>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="block p-2 text-sm font-medium text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border-l border-white/5 hover:border-triton-red"
                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <div className="flex-1 space-y-10">
                    {/* Section 1 */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="entry" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            ENTRY TRANSFERS
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                Unless specifically stated in official race written communications TRITON WS race entries are non-transferable.
                                Selling of race entry slot is strictly prohibited. If you do sell your race slot, you will be disqualified from the race and you, as well as the entrant who purchased your slot will be disqualified from the TRITON WS for a minimum of 2 years.
                            </p>
                        </div>

                        <h2 id="imagery" className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            CONSENT FOR IMAGERY USE
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                I hereby consent to the placement of my race images online at the official photographer’s website for the purposes of viewing and purchasing. I also give the organization permission to use my image for promotional and other purposes related to the Event.
                            </p>
                            <p>
                                I authorize the use of my name, voice and picture and any information provided by me on this entry form to be used without payment in any broadcast, telecast, communication, promotion, or advertising, and I also agree that the information I have provided may be used by the Event Organizers for the purpose of promoting future or other events or for the promotion of the Event charity(i.e.), race sponsors products and services.
                            </p>
                        </div>

                        <h2 id="medical" className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            MEDICAL & COMPETITION
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
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

                    {/* Ranking Section */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="ranking-system" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            GLOBAL RANKING SYSTEM
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                • TRITON global individual ranking competition is one that consolidates both the results of TRITON 1 and TRITON 3, in a points system, giving both races equal relevance and equal reward. In the future a ranking by race format (TRITON 1 and TRITON 3) may be introduced.
                            </p>
                            <p>
                                The ranking competition is annual, by distance, by gender and by age group. Insuring a fair dispute amongst their peers, and true global ranking competition to all athletes. It is a separate competition in its own right.
                            </p>
                            <p>
                                The ranking features:
                                Name, country, distance, gender and age-group, global ranking, with the total accumulated points of, up to the top 3 race results of the year, plus the championship points in years the championship is hosted.
                            </p>
                            <p>
                                The championship is the race that attributes the largest numbers of points. It awards points by a 3 X factor. This ensures the most valuable race, is the finals, without being a decisive factor on its own in the years the final is hosted.
                            </p>
                            <p>
                                The system rewards athletes that do more than one race, but keeping always, just the top 3 results / points. This measure guarantees a fair and accessible ranking system, in equal terms, to everyone.
                            </p>
                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">Assumptions:</h3>
                            <p>
                                • The ranking is an annual competition and only points from the calendar year will contribute points to determine the winners.
                            </p>
                            <p>
                                • Only the top 3 results of the year, plus the championship when it takes place, count for the ranking points.
                            </p>
                            <p>
                                • The championship awards regular race points multiplied by a factor of 3.
                            </p>
                            <p>
                                • In case of a tie in points, the athletes that got the most points at the finals, wins.
                            </p>
                            <p>
                                • Ranking is individual only, not a team competition.
                            </p>
                            <p>
                                • The season ranking champions are crowned every year.
                            </p>
                            <p>
                                • At the end of the season, the ranking points go back to zero for everyone, remaining a “past ranking winners board” on the website and their name engraved on the global ranking series itinerant trophy.
                            </p>
                            <p>
                                • Ranking winners receive a copy of the trophy at the championships.
                            </p>
                            <p>
                                • In the case of TRITON 3, only athletes doing the 3 days score points for the ranking.
                            </p>
                            <p>
                                Points are as per chart on the LINK
                            </p>
                        </div>
                    </section>

                    {/* Introduction & Force Majeure */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="introduction" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            INTRODUCTION
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                To participate in any and all official TRITON series qualifying races, all participants must accept, before registering, the following, without exception.
                                Note: additional local terms & conditions may apply.
                            </p>
                        </div>

                        <h2 id="force-majeure" className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            FORCE MAJEURE
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                A Force Majeure event includes any act, event, non-happening, omission, or accident beyond our reasonable control and includes in particular (without limitation) the following:
                            </p>
                            <p>• Strikes, lockouts, or other industrial action.</p>
                            <p>• Civil commotion, riot, invasion, terrorist attack, threat of terrorist attack, war (whether declared or not) or threat or preparation for war.</p>
                            <p>• Fire, explosion, storm, flood, earthquake, subsidence, epidemic, pandemic (see below COVID-19 information) or another natural disaster.</p>
                            <p>• Impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport, race venues.</p>
                            <p>• Impossibility of the use of public or private telecommunications networks. The acts, decrees, legislation, regulations, or restriction of any government.</p>
                            <p>• Our performance under Contract is deemed to be suspended for the period that the Force Majeure event continues, and we will have an extension of time for performance for the duration of that period.</p>
                            <p>TRITON will use our reasonable endeavors to bring the Force Majeure event to an end or find a solution by which our obligations under the contract may be performed despite the Force Majeure event.</p>
                            <p>An alternative to delaying the event to a future date due to one of the circumstances mentioned above, if possible, and to minimize the impact on the athletes the organization may change the format, distances, order of competitions and disciplines of the event in that year.</p>
                            <p>Furthermore, the organization reserves itself the right to change the format of the event under a Force Majeure event in order to attempt to create the necessary conditions for the event to take place. Such changes in format may include but are not limited to changing the event to a duathlon, an aquathlon, a road cycling race, a road run race or a swimming competition in distances to be announced at the most convenient time.</p>
                        </div>

                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4">
                            COVID-19
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>
                                With the current world pandemic situation, we understand your concern regarding the possibility of an event alteration or cancellation due to circumstances out of the organization’s control. At TRITON we guarantee, in case of Force Majeure & COVID-19 limitations, a full Registration refund. *
                            </p>
                            <p>
                                The ongoing COVID-19 pandemic has proven to be extremely unpredictable and consequently has rules and regulations changing constantly. We have all operational plans consistent with local community objectives and in compliment with the safety guidelines and recommendations set by the Portuguese Public Health Entity as it relates to COVID-19.
                            </p>
                            <p>
                                It is your responsibility to keep updated as to all travel restrictions and regulations, and all updates we will provide on our webpage. Please note, however, that updates can occur at any time.
                            </p>
                            <p>
                                *12% service fees apply SPECIAL CIRCUMSTANCES:
                                Any official TRITON race reserves itself the right to change any event date, up to 120 days, prior to race day, without further previous notice and compensation.
                            </p>
                            <p>
                                These circumstances may vary from case to case and are at the sole discretion of the event organizer. However, a comprehensive and reasonable explanation to the affected athletes will be given, in writing, to the email provided when registered.
                            </p>
                            <p>
                                Additionally, if such case arises, the announcement will be made public in all TRITON event platforms, namely, social media platforms, up to 120 days prior to event race day.
                            </p>
                            <p>
                                Under this term, only, the organization is obligated to provide a new date when the changed is made, within the same calendar year, or, if not possible to take place in the same calendar year, and only in this situation, the event organizer must offer an alternative to either race another series event or get a refund, at the sole discretion of the athletes already registered.
                            </p>
                        </div>
                    </section>

                    {/* Global Competition Rules */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="comp-rules" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            GLOBAL COMPETITION RULES
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">INTRODUCTION</h3>
                            <p>
                                TRITON is a global triathlon series offering two race formats, TRITON 1, a regular one day triathlon and TRITON 3, a triathlon in a stage like format, separating the swim, the bike and the run, in consecutive days.
                            </p>
                            <p>
                                Both formats always offer at every event a single, by gender overall by distance, and age-group, in the SPRINT, MIDDLE and LONG distance competition. TRITON additionally offers a corporate team’s competition in the SPRINT division and promotional events for kids.
                            </p>
                            <p>
                                TRITON offers a global championship event, that may take place annually or not, in the TRITON 1, or TRITON 3 race format, or, host two separate global championship events, one for each race format.
                            </p>
                            <p>
                                Parallel to the Global Championship event, TRITON also runs an annual Global Ranking Individual Competition, by a points system, for both, women and men, overall by competition distance (SPRINT, MIDDLE, LONG), and by age-group.
                            </p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">TRITON GLOBAL GENERAL COMPETITION RULES</h3>
                            <p>
                                TRITON continuously works towards global rule harmonization. The Competition Rules govern all TRITON race competitions and are based primarily on TRITON’s series particular set of rules and the World Triathlon Competition Rules; therefore, differences in the rules do exist in some aspects.
                            </p>
                            <p>
                                Within certain sections of the Competition Rules (e.g., the rules regarding TRITON 3 points system) TRITON may adhere, or not, to and/or reference the applicable World Triathlon Competition Rules. Notwithstanding, in the event of any conflict or inconsistency between TRITON’s Competition Rules and the World Triathlon Competition Rules, such conflict or inconsistency shall be resolved by giving precedence to the TRITON Competition Rules.
                            </p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">PURPOSE:</h3>
                            <p>
                                To provide a consistent set of competition rules (“Competition Rules”) for all TRITON branded race competitions.
                            </p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">INTENTION:</h3>
                            <p>Competition Rules are intended to: (a) Facilitate fair play, equality, and sportsmanship; (b) Support ingenuity and skill without unduly limiting athletes; and (c) Penalize athletes who gain, or seek to gain, an unfair advantage.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">RACE PERSONNEL DEFINITIONS</h3>
                            <p>(a) “Event Director” or “Race Director” is the person appointed to be in charge of the Event; (b) “Global Director of Competition” is the person appointed to supervise rules and officiating for all Races;</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">EXCEPTIONS:</h3>
                            <p>(a) Competition Rules may vary from venue to venue due to certain sanctioning requirements, laws, local ordinances, and/or Racecourse surroundings; (b) Event-specific Athlete Information Guides will provide further guidance to athletes and will specifically address any Competition Rule exceptions (if any) for each Event venue.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">COMPETITION AND RACE FORMATS:</h3>
                            <p>TRITON currently hosts two distinctive live race formats, TRITON 1 and TRITON 3. Both formats are part of the same World Series, and both qualify for the TRITON World Finals and both score points to the global ranking competition.</p>
                            <p>The world finals, is hosted for both women and men in the 3 distances, SPRINT, MIDDLE and LONG, and, in corporate competition. The championship may take place in either the TRITON 3, or, the regular TRITON 1 format.</p>
                            <p>TRITON may also host separate world finals for both TRITON 1 and TRITON 3 if the demand exists.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">TRITON 1:</h3>
                            <p>Is a one-day competition in a regular triathlon format, swim, bike and run, always in this sequence and without stoppage of the clock. The winner is the first to cross the finish line at the end of the run segment (or the athlete with the shortest time – when start is done in waves).</p>
                            <p>All TRITON 1 races have 3 distances, called, SPRINT, MIDDLE, LONG. Each distance is a separate competition with its own separate results.</p>
                            <p>All TRITON 1 races are non-drafting races. All bikes without any propulsion system that not of the athlete himself / herself are allowed, as long as, these are accepted within the traffic codes and legislation.</p>
                            <p>All TRITON 1 races have the following competing divisions:</p>
                            <p>• Individual: Male and female overall for each of the three distances</p>
                            <p>• Individual: Male and female by age-group as follows: 18 – 24, 25 – 29, 30 – 34, 35 – 39, 40 – 44, 45 – 49, 50 – 54, 55 – 59, 60 – 64, LEGENDS (65 +)</p>
                            <p>• The SPRINT distance (only) may also features a “teenager” division, ages 14 – 17.</p>
                            <p>• To take part in this division teenagers must be affiliated with the local triathlon federation and have: consent in writing by both the parents / legal guardian, the federation (or legal regulatory sports organ), liability release form signed by both parents and carry own sports accident insurance under which they can race, accepting the terms of the race.</p>
                            <p>• Teams competition: In the corporate division only, in the short division only, and without distinction of gender.</p>
                            <p>• TRITON 1 Mix&match division: This division has a non-competing format and has the purpose of allowing athletes to select from the 3 distances available, the one they prefer to do for each segment, the swim, the bike and the run.</p>
                            <p>• After the race starts, no changes in divisions or distances are permitted. You must finish the race in the same division and competition that you started. Failure to finish will result on a DNF (did not finish) status on the results page. Failure to start (no-show) will result on a DNS (did not start) status on the results page.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">TRITON 3:</h3>
                            <p>TRITON 3 is a stage like format, swim, bike and run, always in this sequence, and taking place over consecutive days, separating the swim, bike and run over one weekend. The winner is decided by a point scoring system.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">TRITON 3 SCORING & POINTS SYSTEM:</h3>
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mt-4">Introduction:</h4>
                            <p>Due to its stage like competition format, it allows athletes to enter and race only one or two disciplines.</p>
                            <p>TRITON 3 results are based on a points system rather than the traditional time system, and only the athletes that compete in the 3 disciplines, individually or as a team, will score points and be able to qualify for the finals.</p>
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mt-4">Points system:</h4>
                            <p>Points are awarded by gender, competition (SPRINT, MIDDLE, or LONG) and or team competition. All athletes are timed by an electronic system and their time is displayed, by gender, competition distance and age-group and, or by team. The finishing time, at the end of each day, is then transformed into points.</p>
                            <p>For first place, 1 point is awarded, for second place, 2 points, for third place, 3 points, and so on until the last finisher.</p>
                            <p>Only athletes that compete the 3 days convert their time into the points system. As such, if an athlete finishes in 3rd place but the first two athletes are not doing the full 3 days, his or her points will be 1.</p>
                            <p>At the end of day three, the points are added together to determine the winner, the athletes with the lowest score.</p>
                            <p>In case of a tie in points, the deciding factor is the finishing position between the two. The athlete that finishes ahead of the other, in two of the three days, wins the position.</p>
                            <p>Separately from the TRITON 3 competition, awards by day may, or not, be attributed to participating athletes.</p>
                            <p>Athletes that do not finish any of the days, or all, will DNF. The DNF points are the total number of participants + 1. DNF athlete will be allowed to finish.</p>
                            <p>All TRITON 3 races have 3 distances, called SPRINT, MIDDLE, LONG. Each distance is a separate competition with all specific results.</p>
                            <p>All TRITON 3 races are draft legal races. Therefore, time-trial bikes, or road bikes with extensions (also called, clip-ons) are NOT allowed. All bikes, as long as within the traffic codes and legislation are accepted.</p>
                            <p>All TRITON 3 races have the following competing divisions:</p>
                            <p>• Individual: Male and female overall for each of the three distances</p>
                            <p>• Individual: Male and female by age-group as follows: 18 – 24, 25 – 29, 30 – 34, 35 – 39, 40 – 44, 45 – 49, 50 – 54, 55 – 59, 60 – 64, LEGENDS (65 +)</p>
                            <p>• The SHORT distance (only) also features a “teenager” division, ages 14 – 17.</p>
                            <p>• To take part in this division teenagers must be affiliated with the local triathlon federation and have: consent in writing by both the parents / legal guardian, the federation (or legal regulatory sports organ), liability release form signed by both parents and carry own sports accident insurance under which they can race, accepting the terms of the race.</p>
                            <p>• Teams competition: In the corporate division only, in the short division only, and without distinction of gender.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">TRITON 3 BY SPORT COMPETITION:</h3>
                            <p>TRITON 3 allows for athletes to register individual for each race, the swim, the bike and the run-in whatever distance they choose.</p>
                            <p>After the race starts, no changes in divisions or distances are permitted. You must finish the race in the same division and competition that you started. Failure to finish will result on a DNF status on the results page. Failure to start (no-show) will result on a DNS status on the results page.</p>
                        </div>
                    </section>

                    {/* Finish Line & Results */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="finish-line" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            THE FINISH-LINE
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>The finish-line is the final reward, a unique moment where a long journey comes to an end, only to start a new one.</p>
                            <p>This journey however, more often than not, has more than one protagonist, as often families are involved and sacrifice their share to allow the finisher athlete to train and to make this moment possible, as such, TRITON believes that crossing the finish-line is a moment that should be shared in such cases, or if you are racing in a team.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">CROSSING THE FINISH-LINE RULES:</h3>
                            <p>TRITON allows for a max of three teammates (teams competition) or two family members to cross the finish-line together with the athlete, however, athletes crossing the finish-line with family members must make sure no other athlete is coming to the finish-line at the same time, and that their moment does not interfere with any other athlete’s special moment.</p>
                            <p>If there are other athletes coming, the athlete crossing with family members must let them go first and wait for a time when there are no other athletes coming, and it is safe to cross without interfering with others.</p>
                            <p>Immediately after crossing the finish-line the family members must exit the finish-line zone, not being allowed to stay, or share the recover zone with the rest of the athletes.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">HOW TO ACCESS THE FINISH-LINE:</h3>
                            <p>At the finish-line straightway there is a TENT set up with staff that will give you access when your teammates are coming, or when a family member racing is coming. You should only enter this area / tent, approximately 1 minute before the athlete comes. It is the responsibility of the teammates or family members to be there at the right time in order to be granted access to cross the finish-line with the athlete.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">THE FINISHER MEDAL ACCESS:</h3>
                            <p>The organization may grant access for a family member to access the area to give the athlete crossing the finish-line, his or her finisher medal, however, it must be for a compelling reason at the discretion of the organization only and the request must be submitted in writing ahead of time (not less than one week before race day). Compelling reasons would be, but not limited to, an athlete asking their partner in marriage, a grand-daughter giving a medal to the grand-mother, a recovering cancer athlete being given a medal by a family member, etc.</p>
                        </div>
                    </section>

                    {/* Qualification Process */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="qualification" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            WORLD FINALS QUALIFICATION PROCESS
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>Finals slots allocation is under the base guideline of hosting a maximum number, for safety reasons, and event experience, of 2.500 participants in the finals. Direct slot allocation criteria by age-group depends on the total number of series qualifying events and from event to event according to men and women total numbers and percentages.</p>
                            <p>To ensure fairness and transparency in the process, TRITON uses, as a guideline, the D’Hondt method for the mathematically order.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">OPEN RACE:</h3>
                            <p>If the number of qualified athletes permits, TRITON may offer, together with the finals an open race.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">QUALIFYING RACES:</h3>
                            <p>All races featured on the global website will be qualifying events.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">AWARDS / CEREMONY:</h3>
                            <p>All finisher athletes will receive a finisher medal and t-shirt. Mix&match is the exception, receiving in this case a participation t-shirt rather than a finisher.</p>
                            <p>Both TRITON 1 and TRITON 3 award diplomas to all male and female of every division in all distances of the individual competitions with their final result.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">PODIUM CEREMONY:</h3>
                            <p>– Overall, by competition (SPRINT, MIDDLE and LONG) and by gender Podium Ceremony is for TOP 5 overall male and female. – Age-group by gender to TOP 3. – Corporate teams to TOP 3.</p>
                            <p>Additional to TRITON Global rules also apply all local governing body rules and laws, and TRITON’s code of conduct.</p>
                            <p>All disputes and arising situations not on the race specific competitions regulations will be decided by a collegiate of the local governing body and the race director.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">ACCEPTANCE OF CONDITIONS</h3>
                            <p>The Conditions apply in place of and prevail over any terms or conditions (whether or not in conflict or inconsistent with these Conditions) contained or referred to in any documentation submitted by the Participant or in correspondence or elsewhere or implied by trade custom, practice or course of dealing. A variation of these Conditions is only valid if the Event Organizer gives notice to the Participant in writing in any official Event material or correspondence prior to the Event (including via email), The Participant shall be deemed to have accepted these Conditions upon completion of the Entry Form.</p>
                        </div>
                    </section>

                    {/* Liability Section */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="liability" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            EXEMPTION OF LIABILITY, WAIVER OF CLAIMS, AND ASSUMPTION OF RISKS
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>Please read this document carefully and thoroughly before acknowledging acceptance.</p>
                            <p>In consideration for being allowed to participate in any TRITON series event, including but not limited to championship event, qualification events, associated activities, training, promotional activities, or related functions (hereafter collectively referred to as “the Event”), the participant (“Participant”) expressly acknowledges, agrees to, and accepts the following by registering for any event:</p>
                            <p>• ASSUMPTION OF RISKS: The Participant fully acknowledges and understands that participation in the Event involves inherent risks and dangers, including but not limited to serious bodily injury, permanent disability, paralysis, death, property damage, and losses arising from unpredictable and uncontrollable circumstances. These risks may arise from, but are not limited to, physically unprepared athlete to perform and race the Event, the negligence or wrongful actions of event organizers, host venues, sponsors, volunteers, employees, contractors, agents, officials, other participants, equipment malfunction, course conditions, weather, traffic, or other factors. It is the sole responsibility of the participant to make sure he or she is in physical condition, has consulted with his or her physician and is declared able to take part.</p>
                            <p>• RELEASE AND WAIVER OF LIABILITY: Participant hereby expressly and irrevocably waives, releases, and discharges TRITON, its parent companies, subsidiaries, affiliates, and the respective directors, officers, employees, volunteers, representatives, contractors, agents, sponsors, suppliers, partners, sanctioning bodies, municipalities, and any other associated parties (“Released Parties”) from any and all liability, claims, demands, actions, or causes of action whatsoever, arising directly or indirectly from or relating to participation in the Event, including but not limited to personal injury, death, disability, property damage, financial loss, or any other type of loss, irrespective of whether such liability arises from the negligence, gross negligence, agents, or omissions of any of the Released Parties or any third party involved in the organization, management, or execution of the Event.</p>
                            <p>• INDEMNIFICATION: Participant agrees to indemnify, defend, and hold harmless the Released Parties from and against all liabilities, claims, damages, actions, costs, and expenses, including but not limited to reasonable legal fees arising from Participant’s involvement or participation in the Event.</p>
                            <p>• NO ORGANIZATIONAL RESPONSIBILITY: Participant acknowledges that, except for the specific TRITON Championship Event, TRITON does not directly organize or manage the Events. TRITON provides sanctioning, branding, and promotional support only, and Participant agrees that TRITON shall bear no responsibility or liability for acts, omissions, wrongdoing, insolvency, bankruptcy, misconduct, mismanagement, or negligence by any local event organizer or other third-party entities responsible for event operations.</p>
                            <p>• FORCE MAJEURE: Participant acknowledges and agrees that TRITON and Released Parties shall bear no liability or responsibility whatsoever for any cancellation, postponement, alteration, or modification of the Event due to circumstances beyond their reasonable control, including but not limited to acts of God, war, terrorism, riots, natural disasters, severe weather conditions, pandemics, governmental or administrative decisions, labor disputes, or any other unforeseen force majeure events.</p>
                            <p>• LEGAL CAPACITY: Participant confirms that they have attained the age of legal majority in their jurisdiction or, if not, that they have obtained the appropriate consent of a legal guardian who agrees to all terms herein.</p>
                            <p>APPLICABLE LAW AND JURISDICTION: This waiver shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which the Event takes place, without reference to conflict of law provisions. Any disputes arising from or relating to this waiver shall be exclusively resolved in the competent courts of such jurisdiction.</p>
                            <p>BY REGISTERING TO TAKE PART IN ANY TRITON EVENT, THE PARTICIPANT IS ACCEPTING THIS DOCUMENT, AND FURTHER CERTIFIES THAT THEY HAVE READ, UNDERSTOOD, AND VOLUNTARILY AGREED TO ALL TERMS CONTAINED HEREIN, INCLUDING SPECIFICALLY THE RELEASE OF LIABILITY, INDEMNIFICATION, AND ASSUMPTION OF RISK. PARTICIPANT ACKNOWLEDGES THIS AGREEMENT IS BINDING UPON THEIR HEIRS, EXECUTORS, ADMINISTRATORS, AND LEGAL REPRESENTATIVES.</p>
                        </div>
                    </section>

                    {/* Finals & Payments */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="participation" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            PARTICIPATION & FINALS
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">MINORS PARTICIPATION</h3>
                            <p>The Conditions apply in place of and prevail over any terms or conditions (whether or not in conflict or inconsistent with these Conditions) contained or referred to in any documentation submitted by the Participant or in correspondence or elsewhere or implied by trade custom, practice or course of dealing. A variation of these Conditions is only valid if the Event Organizer gives notice to the Participant in writing in any official Event material or correspondence prior to the Event (including via email). The Participant shall be deemed to have accepted these Conditions upon completion of the Entry Form.</p>
                            <p>Under age participation is possible, in certain cases, with the minor waiver of responsibility. To apply, download and send the form signed to: info@tritonworldseries.com, indicating the race you wish your minor to participate in. LINK for Minor Waiver / Release</p>

                            <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4">
                                CHAMPIONSHIP EVENT PARTICIPATION
                            </h2>
                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">1.0 INTRODUCTION</h3>
                            <p>TRITON is the only triathlon race to host, simultaneously, 3 finals, SPRINT, MIDDLE and LONG, a Corporate Series Cup finals, and a kids promotional event.</p>
                            <p>The race is in the TRITON 3 format, taking place across 3 consecutive days, swim on day one, bike on day two and run on day three.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">2.0 POINTS SYSTEM:</h3>
                            <p>The athlete who finishes first has 1 point, second place 2 points, third 3 points and so on until the last finisher. At the end of day 3, the athlete with the least points wins the race.</p>
                            <p>If there is a tie, the athlete who finishes two of the three races ahead of the other athlete wins.</p>
                            <p>This unparalleled points system in triathlon evens the weight each of the 3 sports carries in determining the winner.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">3.0 QUALIFICATION PERIOD</h3>
                            <p>Qualification for the finals is possible at races that take place up to one month before the finals. Races with less than one month to go to the finals qualify for the following year.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">4.0 RACES:</h3>
                            <p>All TRITON series races are qualifier events. For the first world finals, all official TRITON races that took place up to a month before the finals are qualifying races.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">5.0 FINALS REGISTRATION</h3>
                            <p>All qualified athletes will receive, via email, information and a dedicated unique link to register for the finals after the date and finals location is announced.</p>
                            <p>The privileged registration link will be valid for 7 consecutive days. After that, available slots will roll down.</p>
                            <p>If slots are still available for the first finals, these may become available to athletes that have taken part in a previous TRITON race.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">6.0 ENTRY TO FINALS WITHOUT QUALIFICATION</h3>
                            <p>Special direct access slots may be granted through wild cards, social and environmental responsibility programs, at the sole discretion of TRITON World Series. Check the qualified athletes list: QUALIFIED ATHLETES LIST</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">7.0 OMISSION CASES</h3>
                            <p>In any unforeseen situations and scenarios, the resolution regarding slot allocation is at the entire sole discretion of TRITON HQ. See more about qualification terms HERE.</p>

                            <h2 id="payments" className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                                BOOKINGS & PAYMENTS
                            </h2>
                            <p>3.1 In consideration for being granted the right to participate, the Participant must pay the Fee by no later than the closing date set out on the Entry Form.</p>
                            <p>3.2 The Participant shall not be eligible or entitled to participate in the Event until full payment of the Fee has been received by the Event Organizer no less than 1 month prior to the start of the event. No payment shall be deemed to have been received until the Event Organizer has received cleared funds.</p>

                            <h2 id="withdrawal" className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                                WITHDRAWAL, CANCELLATIONS OR ALTERATIONS POLICY
                            </h2>
                            <p>4.1 Without cancellation fee: Refunds: Until 183 days (6 months) before race day weekend – 50% of your registration price. From 182 days onwards – No Refund.</p>
                            <p>4.2 TRANSFERS WITH CANCELLATION FEE: Until 45 days before the event – You can transfer your registration to someone else, subject to the payment of a 50€ event administration fee. From 45 days onwards – You will not be able to transfer your registration to someone else, under any circumstance.</p>
                            <p>4.3 TRANSFER TO THE FOLLOWING YEAR WITH CANCELLATION FEE: Until 45 days before race day – You can transfer your registration to the following year, subject to the payment of a 50€ administration fee. You will have until race day to pay the transfer fee. After that, all transfer requests will be void. From 30 days before race day onwards – You cannot transfer your registration, under any circumstance. Exception: if the event does not take place for any reason in the following year, there is NO REFUND.</p>
                            <p>4.4 Refunds with cancellation fee: Refund Until 45 days from race day – 100% refund (insurance, cancellations and service fees will be deducted). From 45 days until race day onwards – No Refund.</p>
                            <p>All refunds and transfers refer to your registration price only. Refunds do not include the transaction fee, one-day license, and pasta party tickets.</p>
                        </div>
                    </section>

                    {/* Participant Responsibilities */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="participant" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            THE PARTICIPANT
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>I understand that participating in this event is potentially hazardous, and that I should not enter and participate unless I am medically able and properly trained.</p>
                            <p>In consideration of the acceptance of this entry, I assume full and complete responsibility for any injury or accident which may occur while I am traveling to or from the event, during the event, or while I am on the premises of the event.</p>
                            <p>I also understand that all supporters are my responsibility and take full responsibility for all their actions. Any abuse of race officials, marshals or event staff will result in my instant disqualification.</p>
                            <p>I also am aware of and assume all risks associated with participating in this event, including but not limited to falls, contact with other participants, effects of weather, traffic, and conditions of the road. I, for myself and my heirs and executors, hereby waive, release and forever discharge the event Organizers, sponsors, promoters, the Organizer and each of their agents, representatives, successors and assigns, and all other persons associated with the event, for all my liabilities, claims, actions, or damages that I may have against them arising out of or in any way connected with my participation in this event.</p>
                            <p>I understand that this waiver includes any claims, whether caused by negligence, the action or inaction of any of the above parties, or otherwise. I hereby grant full permission to any and all of the above parties to use any photographs, videotapes, motion pictures, website images, recordings or any other record of this event.</p>
                        </div>
                    </section>

                    {/* Promotions & Ranking */}
                    <section className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                        <h2 id="promotions" className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-triton-red pl-4 scroll-mt-32">
                            DISCOUNTS AND PARTNERS PROMOTIONS
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>TRITON WS may have, from time to time, special group discounts for teams of 10 or more athletes. Please contact us by e-mail to learn more and to see if your team is eligible.</p>
                            <p>Disclaimer: Any and all promotion may end at any time without previous notice. A registration process initiated at any time and not completed before the end of such promotion, even when without previous notice, does not constitute a right to any promotional price advertised when the registration process started. The only binding price is the one granted when full payment was submitted and accepted. Additionally, some of our event partners may, at any given time, hold promotions that could allow you to register at a discounted price. These promotions are the sole responsibility of our event partners. To check if a given promotion you come across is a valid one, please send us an e-mail.</p>
                        </div>

                        <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-12 mb-8 border-l-4 border-triton-red pl-4">
                            GLOBAL RANKING COMPETITION
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                            <p>• TRITON global individual ranking competition is one that consolidates both the results of TRITON 1 and TRITON 3, in a points system, giving both races equal relevance and equal reward. In the future a ranking by race format (TRITON 1 and TRITON 3) may be introduced.</p>
                            <p>The ranking competition is annual, by distance, by gender and by age group. Insuring a fair dispute amongst their peers, and true global ranking competition to all athletes. It is a separate competition in its own right.</p>
                            <p>The ranking features: Name, country, distance, gender and age-group, global ranking, with the total accumulated points of, up to the top 3 race results of the year, plus the championship points in years the championship is hosted.</p>
                            <p>The championship is the race that attributes the largest numbers of points. It awards points by a 3 X factor. This ensures the most valuable race is the finals, without being a decisive factor on its own in the years the final is hosted. The system rewards athletes that do more than one race, but keeping always just the top 3 results / points. This measure guarantees a fair and accessible ranking system, in equal terms, to everyone.</p>

                            <h3 className="text-white font-black uppercase text-sm tracking-widest mt-8 mb-4">Assumptions:</h3>
                            <p>• The ranking is an annual competition and only points from the calendar year will contribute points to determine the winners.</p>
                            <p>• Only the top 3 results of the year, plus the championship when it takes place, count for the ranking points.</p>
                            <p>• The championship awards regular race points multiplied by a factor of 3.</p>
                            <p>• In case of a tie in points, the athletes that got the most points at the finals wins.</p>
                            <p>• Ranking is individual only, not a team competition.</p>
                            <p>• The season ranking champions are crowned every year.</p>
                            <p>• At the end of the season, the ranking points go back to zero for everyone, remaining a “past ranking winners board” on the website and their name engraved on the global ranking series itinerant trophy.</p>
                            <p>• Ranking winners receive a copy of the trophy at the championships.</p>
                            <p>• In the case of TRITON 3, only athletes doing the 3 days score points for the ranking.</p>
                            <p>Points are as per chart on the LINK</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}