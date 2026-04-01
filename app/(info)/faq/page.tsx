import React from "react";
import Footer from "../../components/Footer";
import { HelpCircle, ChevronRight, Mail } from "lucide-react";

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
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20 font-sans">


            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <HelpCircle className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Support</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Everything You <span className="text-triton-red italic">Need to Know</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Frequently asked questions about the TRITON World Series ecosystem, race formats, and participation.
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5">Categories</h3>
                                <nav className="space-y-1">
                                    {categories.map((cat) => (
                                        <a
                                            key={cat.id}
                                            href={`#${cat.id}`}
                                            className="flex items-center gap-3 text-sm text-gray-500 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {cat.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <article className="grow space-y-24 order-1 lg:order-2 max-w-4xl">

                            {/* General Info */}
                            <section id="general" className="space-y-12 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
                                    General Info
                                </h2>
                                <div className="space-y-10">
                                    <FAQItem
                                        question="What is TRITON?"
                                        answer="TRITON is a global triathlon race series designed to expand participation in the sport while connecting athletes, races, and destinations through a single ecosystem under one brand. Unlike traditional race brands, TRITON combines innovative race formats, flexible distances, and a global ranking competition, allowing athletes to progress through the series and compete internationally with a chance to qualify for the championship race."
                                    />
                                </div>
                            </section>

                            {/* Participating */}
                            <section id="participating" className="space-y-12 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
                                    Participating in a TRITON Race
                                </h2>
                                <div className="space-y-10">
                                    <FAQItem
                                        question="Do I need to be an experienced triathlete to participate in TRITON?"
                                        answer="No. TRITON races are designed to welcome athletes of all levels, from beginners to experienced competitors. With Sprint, Middle, and Long distance options, participants can choose the level that best matches their experience and training."
                                    />
                                    <FAQItem
                                        question="Can beginners participate in TRITON races?"
                                        answer="Yes. Many athletes use TRITON as their entry point into triathlon. The TRITON 3 format in particular is designed to make the sport approachable while still delivering a real race experience."
                                    />
                                    <FAQItem
                                        question="Do I need special qualification to race?"
                                        answer="No qualification is required for most TRITON races. Athletes simply register through the official race registration platform for the event they wish to participate in."
                                    />
                                </div>
                            </section>

                            {/* Race Day */}
                            <section id="race-day" className="space-y-12 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
                                    Race Day Experience
                                </h2>
                                <div className="space-y-10">
                                    <FAQItem
                                        question="What can athletes expect on race day?"
                                        answer={
                                            <div className="space-y-4">
                                                <p>TRITON races are designed to provide a professional yet welcoming race environment. Athletes can expect:</p>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {["Well-marked courses", "Professional timing systems", "Safety support", "Clear communication", "Community atmosphere"].map((item) => (
                                                        <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-triton-red" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }
                                    />
                                    <FAQItem
                                        question="How are races timed?"
                                        answer="All TRITON races use professional timing systems to record athlete performance. Results are integrated into the TRITON digital platform and contribute to the TRITON Global Ranking competition."
                                    />
                                </div>
                            </section>

                            {/* Journey */}
                            <section id="journey" className="space-y-12 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
                                    The TRITON Journey
                                </h2>
                                <div className="space-y-10">
                                    <FAQItem
                                        question="What makes the TRITON experience different?"
                                        answer="TRITON combines competition with community and global connection. Athletes are not only participating in a race but becoming part of a global endurance sports ecosystem that tracks progression over results."
                                    />
                                </div>
                            </section>

                            {/* Contact */}
                            <section id="contact" className="bg-triton-red/10 p-10 rounded-2xl border border-triton-red/20 scroll-mt-32">
                                <h2 className="text-xl font-black uppercase text-white mb-6 flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-triton-red" />
                                    Still Have Questions?
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    For general inquiries, partnerships, or licensing opportunities, please contact the TRITON team directly.
                                </p>
                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-triton-red mb-2">Support Email</p>
                                    <a href="mailto:info@tritonworldseries.com" className="text-2xl font-black text-white hover:text-triton-red transition-colors">
                                        info@tritonworldseries.com
                                    </a>
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

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
    return (
        <div className="group border-b border-white/5 pb-10">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 flex gap-4 transition-colors group-hover:text-triton-red">
                <span className="text-triton-red opacity-50">Q.</span>
                {question}
            </h3>
            <div className="pl-9 text-gray-400 leading-relaxed font-sans text-lg">
                {answer}
            </div>
        </div>
    );
}