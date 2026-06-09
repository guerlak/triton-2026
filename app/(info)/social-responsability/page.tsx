import React from "react";
import Footer from "../../components/Footer";
import { Leaf, Users, ShieldCheck, Heart, ChevronRight, CheckCircle2, Globe } from "lucide-react";

export default function SocialResponsabilityPage() {
    const navItems = [
        { id: "intro", label: "Overview" },
        { id: "environmental", label: "1. Environmental" },
        { id: "social", label: "2. Social Impact" },
        { id: "implementation", label: "3. Implementation" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">
            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5 font-sans">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Globe className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">CSR Program</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Performance with <span className="text-triton-red italic">Purpose</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-sans tracking-wide uppercase italic">
                        TRITON Corporate Social Responsibility Program
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5 font-sans">CSR Pillars</h3>
                                <nav className="space-y-1 font-sans">
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
                        <article className="grow space-y-24 order-1 lg:order-2 max-w-4xl font-sans">

                            {/* Introduction */}
                            <div id="intro" className="bg-white/5 p-10 border border-white/10 rounded-2xl scroll-mt-32">
                                <p className="text-xl text-gray-300 leading-relaxed italic">
                                    "At TRITON, sport is more than competition. It is a platform to improve lives, strengthen communities, and protect the environments in which we operate."
                                </p>
                                <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                                    Our Corporate Social Responsibility (CSR) framework is built on two primary pillars: Environmental Responsibility and Social Impact.
                                </p>
                            </div>

                            {/* Section 1 - Environmental Responsibility */}
                            <section id="environmental" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                                    <div className="p-3 bg-green-500/10 rounded-xl text-green-500 border border-green-500/20">
                                        <Leaf className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                                            1. Environmental Responsibility
                                        </h2>
                                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-1">
                                            Reducing Impact. Setting Standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                                    <p>Operating in natural and urban environments requires accountability. TRITON embeds sustainability directly into event delivery through key actions:</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                            <h3 className="text-white font-bold text-lg mb-2">Elimination of Single-Use Plastics</h3>
                                            <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
                                                <li>No plastic cups at aid stations or recovery zones</li>
                                                <li>No single-use plastic in merchandise or packaging</li>
                                                <li className="text-triton-red font-bold">Mandatory across all events</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                            <h3 className="text-white font-bold text-lg mb-2">Reusable Cup System</h3>
                                            <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
                                                <li>Reusable cups at all hydration points</li>
                                                <li>Athlete-managed or deposit-return systems</li>
                                                <li>Designed to eliminate waste at source</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                            <h3 className="text-white font-bold text-lg mb-2">Smart Water Use</h3>
                                            <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
                                                <li>Drinkable water stations replacing bottled supply where possible</li>
                                                <li>Partnerships with municipal water companies, local authorities, and fire departments</li>
                                                <li>Reduced logistics footprint and water waste</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                            <h3 className="text-white font-bold text-lg mb-2">Local Integration</h3>
                                            <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
                                                <li>Alignment with city infrastructure and environmental strategies</li>
                                                <li>Reduced transport and material impact through local solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2 - Social Impact */}
                            <section id="social" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                                            2. Social Impact
                                        </h2>
                                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-1">
                                            Expanding Access. Strengthening Communities.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                                    <p>TRITON is built on the belief that sport must be inclusive, accessible, and transformative for everyone.</p>

                                    <div className="space-y-4">
                                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-triton-red font-black text-xl">01.</div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">TRITON Kids & Families</h4>
                                                <p className="text-sm">Free races for children and families. Early engagement in sport to promote healthy habits, confidence, and discipline.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-triton-red font-black text-xl">02.</div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">TRITON Corporate Series</h4>
                                                <p className="text-sm">Integration of sport into corporate environments to improve health, teamwork, and performance while building a stronger company culture.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-triton-red font-black text-xl">03.</div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">TRITON Angels</h4>
                                                <p className="text-sm">Athletes supporting participants with limited or no mobility during races. Featuring free entry and full integration—a direct expression of inclusion, equality, and human connection. <span className="italic text-triton-red font-bold">Everyone is an athlete.</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3 - Implementation */}
                            <section id="implementation" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                                    <div className="p-3 bg-red-500/10 rounded-xl text-triton-red border border-triton-red/20">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                                            3. Implementation & Governance
                                        </h2>
                                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mt-1">
                                            Action-Driven Accountability.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                                    <p>CSR is fully embedded into TRITON's operating model across all global locations:</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Mandatory within all licensee and partner agreements.",
                                            "Strictly enforced through global operational guidelines.",
                                            "Monitored through thorough post-event evaluation.",
                                            "All partners are required to implement and report on these standards annually."
                                        ].map((text, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0 mt-1" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Final Statement / Callout */}
                            <section className="bg-linear-to-br from-triton-red to-red-950 p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-white">
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-black uppercase leading-none mb-6">
                                        Final <span className="italic">Statement</span>
                                    </h2>
                                    <p className="text-xl font-bold mb-8">
                                        TRITON is not only building races. It is building a global platform where performance drives personal growth, sport strengthens communities, and responsibility defines how we scale.
                                    </p>
                                    <div className="text-xs font-black uppercase tracking-widest opacity-80 border-t border-white/20 pt-6">
                                        Because true performance is measured by impact.
                                    </div>
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