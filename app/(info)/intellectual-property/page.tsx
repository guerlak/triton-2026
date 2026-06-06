import React from "react";
import Footer from "../../components/Footer";
import { Shield, ShieldCheck, Mail, ChevronRight, Scale } from "lucide-react";

export default function IntelectualPropertyPage() {
    const navItems = [
        { id: "intro", label: "Introduction" },
        { id: "ip", label: "Intellectual Property" },
        { id: "trademarks", label: "Trademarks" },
        { id: "formats", label: "Race Formats & Systems" },
        { id: "digital", label: "Digital Ecosystem" },
        { id: "licensing", label: "Licensing Framework" },
        { id: "responsibility", label: "LRH Responsibility" },
        { id: "recognition", label: "Official Recognition" },
        { id: "unauthorized", label: "Unauthorized Use" },
        { id: "conduct", label: "Code of Conduct" },
        { id: "anti-doping", label: "Anti-Doping Policy" },
        { id: "standards", label: "Event Standards" },
        { id: "media", label: "Media & Content" },
        { id: "reporting", label: "Reporting Violations" },
        { id: "partnership", label: "Licensing Inquiries" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">
            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Shield className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Governance</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Intellectual <span className="text-triton-red italic">Property</span>
                    </h1>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                        Protecting the Integrity of the TRITON Global Series
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 relative">
                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5">Contents</h3>
                                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
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
                            <section id="intro" className="space-y-6 scroll-mt-32">
                                <div className="bg-white/5 p-8 border border-white/10 rounded-2xl font-sans italic">
                                    <p className="text-lg text-gray-300 leading-relaxed font-sans italic">
                                        TRITON is a global triathlon series and intellectual property platform designed to connect athletes, race organizers, partners, and destinations through a unified international ecosystem.
                                    </p>
                                </div>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans text-lg">
                                    <p>
                                        The TRITON platform combines innovative race formats, a global ranking system, and a digital infrastructure that links races worldwide into a shared competitive environment.
                                    </p>
                                    <p>
                                        To ensure consistency, credibility, and long-term development of the series, TRITON establishes a framework governing:
                                    </p>
                                    <ul className="space-y-2 pl-6 list-disc text-white font-bold">
                                        <li>intellectual property protection</li>
                                        <li>brand usage</li>
                                        <li>race recognition</li>
                                        <li>athlete conduct</li>
                                        <li>event standards and operational quality</li>
                                    </ul>
                                    <p>
                                        This framework protects the integrity of the TRITON ecosystem and helps ensure a trusted experience for athletes, organizers, partners, and host destinations.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: TRITON IP */}
                            <section id="ip" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    TRITON Intellectual Property
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        The TRITON brand and ecosystem represent proprietary intellectual property developed to support a global triathlon platform.
                                    </p>
                                    <p>This intellectual property includes:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>trademarks and brand identity</li>
                                        <li>race formats and competition systems</li>
                                        <li>all digital assets, including website, social media, and ranking infrastructure</li>
                                        <li>website content and media materials</li>
                                        <li>operational frameworks for licensed events</li>
                                    </ul>
                                    <p>
                                        All TRITON intellectual property is owned or controlled by TRITON and its affiliated entities. Unauthorized use, reproduction, or commercial exploitation of TRITON intellectual property is strictly prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* Section 3: Trademarks */}
                            <section id="trademarks" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    TRITON Trademarks
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        The TRITON name and related marks are protected trademarks and may not be used without written authorization. Protected marks include, but are not limited to:
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 font-mono text-sm text-gray-300">
                                        <div>TRITON</div>
                                        <div>TRITON WORLD SERIES</div>
                                        <div>TRITON 1</div>
                                        <div>TRITON 3</div>
                                        <div>TRITON WORLD FINALS</div>
                                        <div>TRITON CHAMPIONSHIP</div>
                                        <div>TRITON CORPORATE SERIES</div>
                                        <div>TRITON CORPORATE CUP</div>
                                        <div>TRITON LEGENDS</div>
                                        <div>TRITON GLOBAL RANKING</div>
                                        <div>TRITON APP</div>
                                    </div>
                                    <p>
                                        The TRITON logo and associated visual identity elements are also protected under trademark and copyright laws in multiple jurisdictions. These trademarks may not be reproduced, modified, imitated, or used commercially without authorization.
                                    </p>
                                </div>
                            </section>

                            {/* Section 4: Race Formats */}
                            <section id="formats" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    TRITON Race Formats and Competition System
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON has developed proprietary race formats and competition structures designed to expand participation in triathlon while connecting races worldwide. Key elements include:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">TRITON 1</strong>
                                            A one-day triathlon event combining swim, bike, and run.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">TRITON 3</strong>
                                            A three-day stage race where each discipline is raced on a separate day.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Flexible Distance Structure</strong>
                                            Sprint, Middle, and Long distances that can adapt to the geography and infrastructure of each host destination.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">TRITON Global Ranking</strong>
                                            A system that connects athletes across races and tracks performance progression.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">TRITON World Finals</strong>
                                            The championship event concluding the global TRITON season.
                                        </div>
                                    </div>
                                    <p>
                                        These elements form part of the TRITON intellectual property framework and may only be used by authorized partners.
                                    </p>
                                </div>
                            </section>

                            {/* Section 5: Digital Ecosystem */}
                            <section id="digital" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    TRITON Digital Ecosystem
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON operates a digital infrastructure designed to connect races and athletes worldwide. The TRITON ecosystem includes:
                                    </p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>the global TRITON website platform</li>
                                        <li>the athlete ranking and results system</li>
                                        <li>race integration and registration connectivity</li>
                                        <li>athlete engagement tools</li>
                                        <li>event communication systems</li>
                                        <li>the TRITON mobile application</li>
                                    </ul>
                                    <p>
                                        This ecosystem allows races around the world to operate locally while remaining connected to a global competition structure. All digital components are protected intellectual property.
                                    </p>
                                </div>
                            </section>

                            {/* Section 6: Licensing Framework */}
                            <section id="licensing" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Licensing Framework
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON races are organized through a global licensing partnership model. Local Rights Holders (LRH) and event organizers operate races under formal agreements with TRITON.
                                    </p>
                                    <p>Authorized partners gain access to:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>the TRITON brand and race formats</li>
                                        <li>integration with the TRITON Global Ranking</li>
                                        <li>access to the TRITON digital ecosystem</li>
                                        <li>operational guidelines and brand standards</li>
                                        <li>international visibility through the TRITON platform</li>
                                    </ul>
                                    <p>
                                        This model allows local organizers to deliver events while benefiting from participation in a globally connected series.
                                    </p>
                                </div>
                            </section>

                            {/* Section 7: Responsibility of LRHs */}
                            <section id="responsibility" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Responsibility of Local Rights Holders
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON races are organized and delivered by independent <strong className="text-white">Local Rights Holders (LRH)</strong> operating under licensing agreements with TRITON.
                                    </p>
                                    <p>
                                        While TRITON provides the global brand, competition formats, digital ecosystem, and operational guidelines that define the series, the organization and delivery of each individual event remain the sole responsibility of the respective Local Rights Holder.
                                    </p>
                                    <p>
                                        Each Local Rights Holder is independently responsible for all aspects of race organization, including but not limited to:
                                    </p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>event planning and logistics</li>
                                        <li>athlete registration and race operations</li>
                                        <li>course design and safety management</li>
                                        <li>permits and regulatory compliance</li>
                                        <li>insurance coverage and risk management</li>
                                        <li>staffing, volunteers, and event personnel</li>
                                        <li>local sponsorship and commercial activities</li>
                                    </ul>
                                    <p>
                                        TRITON does not directly organize, manage, or control the operational delivery of licensed races. Participation in any TRITON-branded event is therefore subject to the terms, conditions, and operational framework established by the Local Rights Holder responsible for that specific event.
                                    </p>
                                    <p>
                                        TRITON shall not be liable for any claims, damages, losses, or liabilities arising from the organization or execution of races conducted by Local Rights Holders. Athletes and participants should consult the official event information and policies provided by the Local Rights Holder organizing the race.
                                    </p>
                                </div>
                            </section>

                            {/* Section 8: Recognition Policy */}
                            <section id="recognition" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Official TRITON Race Recognition Policy
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        To maintain the credibility of the series, only events officially authorized by TRITON may be promoted as TRITON races. An Official TRITON Race is an event that:
                                    </p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>operates under a TRITON licensing agreement</li>
                                        <li>follows TRITON race format guidelines</li>
                                        <li>integrates with the TRITON Global Ranking competition</li>
                                        <li>appears on the official TRITON website and race calendar</li>
                                        <li>uses TRITON branding under authorization</li>
                                    </ul>
                                    <p>
                                        Athletes, partners, and media can verify official races through the TRITON website. Events not listed on the official website and calendar should not be considered part of the TRITON series.
                                    </p>
                                </div>
                            </section>

                            {/* Section 9: Unauthorized Use */}
                            <section id="unauthorized" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Unauthorized Use of the TRITON Brand
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>Unauthorized use of the TRITON brand may include:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>promoting events as TRITON races without licensing</li>
                                        <li>using TRITON logos or trademarks without authorization</li>
                                        <li>claiming integration with the TRITON Global Ranking</li>
                                        <li>imitating TRITON race formats or branding</li>
                                    </ul>
                                    <p>
                                        TRITON actively monitors such activities and reserves the right to take legal action where necessary.
                                    </p>
                                </div>
                            </section>

                            {/* Section 10: Code of Conduct */}
                            <section id="conduct" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Athlete Code of Conduct
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON promotes a culture of respect, fairness, and sportsmanship across the global series. Athletes participating in TRITON events are expected to:
                                    </p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>compete honestly and fairly</li>
                                        <li>respect fellow competitors and race officials</li>
                                        <li>follow race rules and safety instructions</li>
                                        <li>respect volunteers and spectators</li>
                                        <li>respect host communities and the environment</li>
                                    </ul>
                                    <p>
                                        These principles support a positive and inclusive endurance sports environment.
                                    </p>
                                </div>
                            </section>

                            {/* Section 11: Anti-Doping */}
                            <section id="anti-doping" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Anti-Doping and Fair Competition
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON supports clean sport and fair competition. Athletes participating in TRITON races must comply with applicable anti-doping regulations and ethical standards governing endurance sports.
                                    </p>
                                    <p>
                                        Violations of these standards may result in disqualification or additional disciplinary measures. TRITON reserves the right to conduct full, partial, or random anti-doping testing at all official TRITON events.
                                    </p>
                                </div>
                            </section>

                            {/* Section 12: Event Standards */}
                            <section id="standards" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    TRITON Event Standards & Quality Framework
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON establishes operational standards designed to ensure that every race within the series provides a credible and safe athlete experience. Licensed events must follow guidelines relating to:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Race Safety</strong>
                                            Appropriate safety planning, course management, and athlete protection.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Competition Integrity</strong>
                                            Professional timing systems and accurate results integration with the TRITON Global Ranking.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Event Organization</strong>
                                            Professional race management and clear athlete communication.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Brand Consistency</strong>
                                            Proper use of TRITON visual identity and event presentation.
                                        </div>
                                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-1 uppercase tracking-wide text-sm">Athlete Experience</strong>
                                            A welcoming, professional, and inclusive race environment.
                                        </div>
                                    </div>
                                    <p>
                                        These standards help maintain trust between athletes, organizers, and the global TRITON community.
                                    </p>
                                </div>
                            </section>

                            {/* Section 13: Media */}
                            <section id="media" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    Media and Content Usage
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        All content published on TRITON platforms, including photographs, videos, graphics, and written materials, is protected by copyright.
                                    </p>
                                    <p>
                                        These materials may not be reproduced, distributed, modified, or used commercially without written authorization from TRITON. Media organizations wishing to use TRITON content should contact the TRITON media team.
                                    </p>
                                    <p>
                                        No media material, video, or photography may be collected and commercialized without permission at any official TRITON race.
                                    </p>
                                </div>
                            </section>

                            {/* Final Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
                                <section id="reporting" className="space-y-6 scroll-mt-32">
                                    <h2 className="text-xl font-black uppercase text-white flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-triton-red" />
                                        Reporting Violations
                                    </h2>
                                    <p className="text-gray-400">
                                        TRITON actively monitors the use of its intellectual property worldwide. If you believe TRITON trademarks, race formats, or digital systems are being used without authorization, please contact:
                                        <br />
                                        <a href="mailto:info@tritonworldseries.com" className="text-white font-bold hover:text-triton-red transition-colors">info@tritonworldseries.com</a>
                                    </p>
                                </section>

                                <section id="partnership" className="space-y-6 scroll-mt-32">
                                    <h2 className="text-xl font-black uppercase text-white flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-triton-red" />
                                        Licensing Inquiries
                                    </h2>
                                    <p className="text-gray-400">
                                        Organizations interested in organizing TRITON races or partnering with the series are invited to contact:
                                        <br />
                                        <a href="mailto:info@tritonworldseries.com" className="text-white font-bold hover:text-triton-red transition-colors">info@tritonworldseries.com</a>
                                    </p>
                                </section>
                            </div>

                            <div className="bg-triton-red/10 p-10 rounded-2xl border border-triton-red/20 scroll-mt-32 text-center md:text-left">
                                <p className="text-sm font-bold uppercase tracking-widest text-triton-red mb-2">© TRITON World Series</p>
                                <p className="text-white text-sm">All rights reserved. All trademarks, service marks, logos, race formats, digital systems, and associated content are protected intellectual property.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
