"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function FAQ() {
    const categories = [
        { id: "general", title: "General Info" },
        { id: "participating", title: "Participating" },
        { id: "race-day", title: "Race Day" },
        { id: "after-race", title: "After the Race" },
        { id: "community", title: "Community" },
        { id: "journey", title: "The Journey" },
        { id: "athletes", title: "Athletes" },
        { id: "races-events", title: "Races & Events" },
        { id: "organisers", title: "Organisers" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                    TRITON FAQ
                </h1>
                <div className="h-1 w-24 bg-triton-red mx-auto mb-8"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Everything you need to know about the TRITON World Series ecosystem.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <nav className="sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 space-y-1 scrollbar-hide">
                        <p className="text-triton-red font-black uppercase text-[10px] tracking-widest mb-4 opacity-70">Categories</p>
                        {categories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="block p-2 text-sm font-medium text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border-l border-white/5 hover:border-triton-red"
                            >
                                {cat.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <div className="flex-1 space-y-12">
                    {/* General Info */}
                    <section id="general" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            General Info
                        </h2>
                        <div className="space-y-6">
                            <FAQItem
                                question="What is TRITON?"
                                answer="TRITON is a global triathlon race series designed to expand participation in the sport while connecting athletes, races, and destinations through a single ecosystem under and brand. Unlike traditional race brands, TRITON combines innovative race formats, flexible distances, a global ranking competition, allowing athletes to progress through the series and compete internationally with a chance to qualify for the championship race."
                            />
                        </div>
                    </section>

                    {/* Participating */}
                    <section id="participating" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Participating in a TRITON Race
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="Do I need to be an experienced triathlete to participate in TRITON?"
                                answer="No. TRITON races are designed to welcome athletes of all levels, from beginners to experienced competitors. With Sprint, Middle, and Long distance options, participants can choose the level that best matches their experience and training. TRITON aims to make triathlon more accessible while still providing a challenging environment for competitive athletes. We believe that everyone is an athlete and that our minds are stronger than our bodies and that TRITON is the right platform to assist you in make this a reality."
                            />
                            <FAQItem
                                question="Can beginners participate in TRITON races?"
                                answer="Yes. Many athletes use TRITON as their entry point into triathlon. The TRITON 3 format in particular is designed to make the sport approachable while still delivering a real race experience. TRITON events also bring together athletes of different levels within the same event, creating a supportive and motivating atmosphere."
                            />
                            <FAQItem
                                question="Do I need special qualification to race?"
                                answer="No qualification is required for most TRITON races. Athletes simply register through the official race registration platform for the event they wish to participate in. Participation automatically connects athletes to the global TRITON ecosystem."
                            />
                            <FAQItem
                                question="How do I register for a TRITON race?"
                                answer="Registration is completed through the official registration page of each event. Once registered, athletes receive detailed information from the race organiser regarding the event schedule, race briefing, and logistics."
                            />
                        </div>
                    </section>

                    {/* Race Day */}
                    <section id="race-day" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Race Day Experience
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="What can athletes expect on race day?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON races are designed to provide a professional yet welcoming race environment. Athletes can expect:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Well-marked courses</li>
                                            <li>Professional timing and results systems</li>
                                            <li>Safety support along the course</li>
                                            <li>Event communication through the TRITON platform</li>
                                            <li>A strong community atmosphere</li>
                                        </ul>
                                        <p className="mt-4">Each race is delivered locally while maintaining the global TRITON standards.</p>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="How are races timed?"
                                answer="All TRITON races use professional timing systems to record athlete performance. Results are integrated into the TRITON digital platform and contribute to the TRITON Global Ranking competition."
                            />
                            <FAQItem
                                question="Will my results count toward the global ranking competition?"
                                answer="Yes. The best 3 results from all TRITON races plus the points scored at the championship contribute to the TRITON Global Ranking competition, allowing athletes to track their performance and progression across the series."
                            />
                            <FAQItem
                                question="Can friends and family follow the race?"
                                answer="Yes. Spectators can follow race updates through official event communication channels and the TRITON digital ecosystem and app. Most races offer live tracking or timing updates, depending on the event."
                            />
                        </div>
                    </section>

                    {/* After the Race */}
                    <section id="after-race" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            After the Race
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="Where can I find my results?"
                                answer="Race results are published on the official event website and app. Athletes can search results and track their ranking position within the series."
                            />
                            <FAQItem
                                question="Are race photos available?"
                                answer="Yes. Official race photographers capture the event experience. Photos are typically available through the event platform after the race and may also be accessible through the TRITON app."
                            />
                            <FAQItem
                                question="Will I receive a finisher medal?"
                                answer="Yes. All athletes who complete the race receive a TRITON finisher medal, celebrating their achievement."
                            />
                        </div>
                    </section>

                    {/* Community */}
                    <section id="community" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            TRITON Community
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="Can I participate in multiple TRITON races?"
                                answer="Yes. Athletes are encouraged to participate in multiple races across the series. Competing in different events allows athletes to improve their ranking and experience different destinations within the TRITON, increasing their chances to qualify for the championship race."
                            />
                            <FAQItem
                                question="Is TRITON a global community?"
                                answer="Yes. TRITON connects athletes from around the world through its races, digital platforms, and ranking system. TRITON is its own governing body. Each event becomes part of a larger global series where athletes can measure their progress and share the experience with a broader community."
                            />
                            <FAQItem
                                question="Why does TRITON focus on progression?"
                                answer="TRITON was designed to offer more than a single race experience. The platform encourages athletes to progress over time, improving performance and participating in multiple races across the series. This journey leads from initial participation to higher levels of competition within the TRITON ecosystem."
                            />
                            <FAQItem
                                question="Can I follow other athletes in the TRITON ecosystem?"
                                answer="Yes. Through the TRITON digital platform and app, athletes can follow results, rankings, and performances across the global series. This helps create a stronger connection between athletes and the international community."
                            />
                        </div>
                    </section>

                    {/* Journey */}
                    <section id="journey" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            The TRITON Journey
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="What happens after my first TRITON race?"
                                answer={
                                    <div>
                                        <p className="mb-4">Your race becomes part of your personal journey within the TRITON ecosystem. Athletes can:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Track their progression</li>
                                            <li>Improve their ranking</li>
                                            <li>Participate in additional races</li>
                                            <li>Qualify for the TRITON World Finals</li>
                                        </ul>
                                        <p className="mt-4">The system encourages long-term engagement with the sport.</p>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="What makes the TRITON experience different?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON combines competition with community and global connection. Athletes are not only participating in a race but becoming part of a global endurance sports ecosystem. This allows TRITON to focus on:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Tracking progression, not just results</li>
                                            <li>Building community, not just events</li>
                                            <li>Creating lifetime athlete engagement</li>
                                        </ul>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="How is TRITON different from other triathlon series?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON combines several elements rarely integrated into a single platform:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Flexible race formats</li>
                                            <li>Adaptable distances</li>
                                            <li>A global ranking competition</li>
                                            <li>A progression pathway toward a world championship</li>
                                            <li>A digital ecosystem connecting athletes and races</li>
                                        </ul>
                                        <p className="mt-4">The result is a structure where athletes do not simply participate in individual races but become part of a global series.</p>
                                    </div>
                                }
                            />
                        </div>
                    </section>

                    {/* Athletes */}
                    <section id="athletes" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Athletes
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="What distances are offered in TRITON races?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON races offer three main distance categories:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Sprint</li>
                                            <li>Middle</li>
                                            <li>Long</li>
                                        </ul>
                                        <p className="mt-4">Unlike most triathlon series, TRITON distances can adapt to the geography and infrastructure of each destination, making more venues capable of hosting races.</p>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="What is the difference between TRITON 1 and TRITON 3?"
                                answer="TRITON 1 is a single-day triathlon event, in the traditional format where athletes compete in swim, bike, and run on the same day. TRITON 3 is a three-day stage like competition where each discipline is raced separately: Swim, Bike, Run. Both formats offer Sprint, Middle, and Long distance options. TRITON 3 not only takes the 'pressure' from a traditional triathlon format but it also allows athletes to focus on each discipline at a time. It allows athletes to participate just in one or two disciplines, serving as both a training platform, an introduction to triathlon but all in a real competition format with the same value in the global ranking competition and qualification for the finals."
                            />
                            <FAQItem
                                question="How does the TRITON Global Ranking competition work?"
                                answer="Every TRITON race contributes points to the TRITON Global Ranking. The ranking tracks athlete performance across the series, allowing participants to measure their progression and compare themselves with athletes from around the world. The system encourages participation across multiple races and creates a pathway toward the TRITON World Finals. To make it fair to everyone, and at the same time not a one off result, but rather a rewarding consistence competition, the top 3 results of the year, plus the finals points, count to the anual ranking competition."
                            />
                            <FAQItem
                                question="How do athletes qualify for the TRITON World Finals?"
                                answer="Athletes qualify by racing at any of the TRITON oficial competitions, in both TRITON 1 and TRITON 3 formats. Top-ranked competitors from races around the world earn the opportunity to compete at the World Finals, the championship event of the series. The slots allocation are announce before each final, with changes possible to take place depending on the host destination snd the number of qualifying races."
                            />
                            <FAQItem
                                question="Do athletes need to join TRITON to participate in a race?"
                                answer="Athletes register for individual races through the local events. Participation in the TRITON ecosystem, including the global ranking and app, is free to join and automatic once you registered for a race."
                            />
                            <FAQItem
                                question="What is the TRITON App?"
                                answer="The TRITON App connects athletes with the global series. Through the app, users can follow rankings, track results, access race information, and engage with the TRITON community, download that virtual medal. The app also enhances the race experience with race maps, for spectators and supporters, and many other features that will be progressively added."
                            />
                        </div>
                    </section>

                    {/* Races & Events */}
                    <section id="races-events" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Races & Events
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="Where are TRITON races organised?"
                                answer="TRITON races are organised in destinations around the world through partnerships with local organisers and host cities. The series is expanding globally, with races taking place across multiple continents."
                            />
                            <FAQItem
                                question="Can TRITON races adapt to different locations?"
                                answer="Yes. One of TRITON’s key innovations is its flexible race structure, which allows distances and course layouts to adapt to the geography and infrastructure of each destination. This flexibility allows many more cities and regions to host triathlon events."
                            />
                            <FAQItem
                                question="What makes TRITON races unique?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON races combine competition, community, and destination experience. Key features include:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Flexible race formats</li>
                                            <li>Multi-distance participation in the same event</li>
                                            <li>Integration into the global ranking competition</li>
                                            <li>Strong digital engagement</li>
                                        </ul>
                                        <p className="mt-4">This structure creates a race experience that goes beyond a single competition.</p>
                                    </div>
                                }
                            />
                        </div>
                    </section>

                    {/* Organisers */}
                    <section id="organisers" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Organisers & Host Cities
                        </h2>
                        <div className="grid gap-6">
                            <FAQItem
                                question="Who can organise a TRITON race?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON partners with experienced organisations such as but not limited to:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>Event organisers</li>
                                            <li>Sports marketing agencies</li>
                                            <li>Tourism boards</li>
                                            <li>Local governments</li>
                                            <li>Triathlon clubs</li>
                                        </ul>
                                        <p className="mt-4">These partners deliver the event locally while integrating into the global TRITON ecosystem.</p>
                                    </div>
                                }
                            />
                            <FAQItem
                                question="What is the TRITON licensing model?"
                                answer={
                                    <div>
                                        <p className="mb-4">TRITON operates through a licensing partnership structure. Local Rights Holders organize the race while benefiting from access to:</p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                            <li>The TRITON brand and race formats</li>
                                            <li>The global ranking competition</li>
                                            <li>The international website marketplace</li>
                                            <li>Operational guidelines</li>
                                            <li>Digital marketing support</li>
                                        </ul>
                                        <p className="mt-4">This model allows partners to deliver credible international events with lower development costs.</p>
                                    </div>
                                }
                            />
                        </div>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="scroll-mt-32 space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-triton-red pl-4">
                            Contact
                        </h2>
                        <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] shadow-2xl">
                            <p className="text-gray-300 mb-6">For general inquiries, partnerships, or licensing opportunities, please contact the TRITON team.</p>
                            <div className="flex items-center gap-4">
                                <div className="bg-triton-red/10 p-4 rounded-2xl border border-triton-red/20 flex">
                                    <p className="text-triton-red font-bold mr-2">Email:</p>
                                    <a href="mailto:info@tritonworldseries.com" className="text-white hover:text-triton-red transition-colors font-medium">
                                        info@tritonworldseries.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-neutral-900/60 transition-all duration-300 group-hover:border-white/10">
                <h3 className="text-lg font-black text-white mb-4 flex items-start gap-3">
                    <span className="text-triton-red mt-1">Q:</span>
                    {question}
                </h3>
                <div className="text-gray-400 leading-relaxed text-sm pl-7 border-l border-white/5">
                    {answer}
                </div>
            </div>
        </motion.div>
    );
}