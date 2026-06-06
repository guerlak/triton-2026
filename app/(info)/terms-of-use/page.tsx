import React from "react";
import Footer from "../../components/Footer";
import { FileText, ShieldCheck, Mail, Lock, Info, ChevronRight, Scale, Shield, Users } from "lucide-react";

export default function TermsUsePage() {
    const navItems = [
        { id: "ownership", label: "1. Ownership & Acceptance" },
        { id: "nature", label: "2. Nature of TRITON" },
        { id: "eligibility", label: "3. Eligibility" },
        { id: "accounts", label: "4. Accounts & Security" },
        { id: "additional", label: "5. Additional Agreements" },
        { id: "user-content", label: "6. User Content" },
        { id: "intellectual", label: "7. Intellectual Property" },
        { id: "trademarks", label: "8. Trademarks" },
        { id: "privacy", label: "9. Privacy" },
        { id: "third-party", label: "10. Third-Party Links" },
        { id: "digital-platform", label: "11. Digital Platform" },
        { id: "acceptable", label: "12. Acceptable Use" },
        { id: "disclaimer", label: "13. Disclaimer" },
        { id: "liability", label: "14. Liability Limitation" },
        { id: "indemnification", label: "15. Indemnification" },
        { id: "dispute", label: "16. Dispute Resolution" },
        { id: "governing-law", label: "17. Governing Law" },
        { id: "general", label: "18. General Provisions" },
        { id: "contact", label: "19. Contact" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">
            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Scale className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Terms <span className="text-triton-red italic">of Use</span>
                    </h1>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                        Last Updated: January 2019
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
                            {/* Section 1: Ownership */}
                            <section id="ownership" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    1. Ownership of the Site; Acceptance of Terms
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        These Terms of Use (“Terms”) govern your access to and use of the TRITON websites, applications, all digital platforms and social media, event pages, and any related services, including TRITON 2.0 (collectively, the “Site”).
                                    </p>
                                    <p>
                                        The Site is owned and operated by <strong className="text-white">TRITON World Series Global Ltd. and its affiliated entities</strong> (“TRITON”, “we”, “our”, or “us”), together with its licensors.
                                    </p>
                                    <p>
                                        By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must not use the Site.
                                    </p>
                                    <p>
                                        TRITON reserves the right to update or modify these Terms at any time. Continued use of the Site following any changes constitutes acceptance of those changes.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: Nature of Platform */}
                            <section id="nature" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    2. Nature of TRITON Platform
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON is a <strong className="text-white">global sports intellectual property platform and governing body</strong> operating through a licensing model.
                                    </p>
                                    <p>
                                        TRITON-branded events are <strong className="text-white">independently organised and delivered by Local Rights Holders (“LRH”)</strong> under license.
                                    </p>
                                    <p>
                                        TRITON does not organise, operate, or control events delivered by LRHs. All aspects of event delivery, including registration, safety, logistics, and participant management, are the sole responsibility of the relevant LRH.
                                    </p>
                                    <p>
                                        Participation in any TRITON-branded event is subject to separate agreements, waivers, and terms issued by the applicable LRH.
                                    </p>
                                </div>
                            </section>

                            {/* Section 3: Eligibility */}
                            <section id="eligibility" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    3. Eligibility
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>By using the Site, you represent and warrant that:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>all information you provide is accurate and complete</li>
                                        <li>you will maintain the accuracy of such information</li>
                                        <li>you are at least 13 years old, or have parental/legal guardian consent where required</li>
                                        <li>your use of the Site complies with all applicable laws and regulations</li>
                                    </ul>
                                    <p>
                                        TRITON reserves the right to suspend or terminate access to the Site at its discretion.
                                    </p>
                                </div>
                            </section>

                            {/* Section 4: Accounts and Security */}
                            <section id="accounts" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    4. Accounts and Security
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>Certain features may require account registration.</p>
                                    <p>You are responsible for:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>maintaining the confidentiality of your account credentials</li>
                                        <li>all activities conducted under your account</li>
                                    </ul>
                                    <p>
                                        TRITON reserves the right to suspend or terminate accounts at any time, including in cases of suspected misuse or breach of these Terms.
                                    </p>
                                </div>
                            </section>

                            {/* Section 5: Additional Agreements */}
                            <section id="additional" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    5. Additional Agreements
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>These Terms apply solely to the use of the Site.</p>
                                    <p>Additional agreements may apply, including:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>event registration agreements with LRHs</li>
                                        <li>liability waivers</li>
                                        <li>sponsorship or partnership agreements</li>
                                    </ul>
                                    <p>In the event of any conflict, those agreements shall prevail.</p>
                                </div>
                            </section>

                            {/* Section 6: User Content */}
                            <section id="user-content" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    6. User Content
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        The Site may allow users to submit content, including text, images, and other materials (“User Content”).
                                    </p>
                                    <p>
                                        By submitting User Content, you grant TRITON a worldwide, royalty-free, perpetual, irrevocable, and non-exclusive license to use, reproduce, distribute, display, and create derivative works from such content across all media.
                                    </p>
                                    <p>You are solely responsible for your User Content and agree not to submit:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>unlawful, harmful, or abusive content</li>
                                        <li>content infringing intellectual property or privacy rights</li>
                                        <li>misleading or fraudulent material</li>
                                        <li>malicious software or spam</li>
                                    </ul>
                                    <p>TRITON reserves the right to remove any User Content at its discretion.</p>
                                </div>
                            </section>

                            {/* Section 7: Intellectual Property */}
                            <section id="intellectual" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    7. Intellectual Property
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>All content available on the Site, including but not limited to:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>trademarks, logos, and brand elements</li>
                                        <li>race formats (including TRITON 1 and TRITON 3)</li>
                                        <li>rankings, data systems, and digital products</li>
                                        <li>text, graphics, video, and software</li>
                                    </ul>
                                    <p>
                                        are the exclusive property of TRITON or its licensors and are protected by applicable intellectual property laws. No use, reproduction, or distribution is permitted without prior written consent from TRITON.
                                    </p>
                                </div>
                            </section>

                            {/* Section 8: Trademarks */}
                            <section id="trademarks" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    8. Trademarks
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        TRITON®, TRITON WORLD SERIES®, TRITON 1®, TRITON 3®, and all related names, logos, and identifiers are proprietary trademarks. Unauthorized use is strictly prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* Section 9: Privacy */}
                            <section id="privacy" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    9. Privacy
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        Your use of the Site is subject to TRITON’s Privacy Policy. By using the Site, you consent to the collection, use, and processing of your information as described therein.
                                    </p>
                                </div>
                            </section>

                            {/* Section 10: Third-Party Links */}
                            <section id="third-party" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    10. Third-Party Links and Services
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>The Site may contain links to third-party websites or services, including those operated by LRHs or partners.</p>
                                    <p>TRITON does not control and is not responsible for:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>third-party content</li>
                                        <li>transactions</li>
                                        <li>policies or practices</li>
                                    </ul>
                                    <p>Use of third-party services is at your own risk.</p>
                                </div>
                            </section>

                            {/* Section 11: Digital Platform */}
                            <section id="digital-platform" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    11. TRITON Digital Platform (TRITON 2.0)
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>TRITON may provide digital services including:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>athlete rankings and performance data</li>
                                        <li>subscription-based features</li>
                                        <li>community engagement tools</li>
                                    </ul>
                                    <p>
                                        These services are provided on an “as is” basis and may be modified, updated, or discontinued at any time. TRITON does not guarantee uninterrupted or error-free operation.
                                    </p>
                                </div>
                            </section>

                            {/* Section 12: Acceptable Use */}
                            <section id="acceptable" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    12. Acceptable Use
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>You agree not to:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>use the Site for unauthorized commercial purposes</li>
                                        <li>copy, scrape, or extract data without permission</li>
                                        <li>attempt to gain unauthorized access to systems</li>
                                        <li>interfere with Site functionality</li>
                                    </ul>
                                    <p>TRITON reserves the right to restrict or terminate access for violations.</p>
                                </div>
                            </section>

                            {/* Section 13: Disclaimer */}
                            <section id="disclaimer" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    13. Disclaimer
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        The Site and all content, services, and materials are provided “as is” and without warranties of any kind, whether express or implied.
                                    </p>
                                    <p>TRITON does not warrant that:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>the Site will be uninterrupted or error-free</li>
                                        <li>content is accurate, complete, or current</li>
                                        <li>the Site is free of harmful components</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 14: Liability Limitation */}
                            <section id="liability" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    14. Limitation of Liability
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>To the maximum extent permitted by law, TRITON shall not be liable for:</p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>indirect, incidental, or consequential damages</li>
                                        <li>loss of data, revenue, or opportunity</li>
                                        <li>damages arising from third-party services or LRH-operated events</li>
                                    </ul>
                                    <p>
                                        Participation in TRITON-branded events is at your own risk and governed by LRH agreements.
                                    </p>
                                </div>
                            </section>

                            {/* Section 15: Indemnification */}
                            <section id="indemnification" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    15. Indemnification
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        You agree to indemnify and hold harmless TRITON and its affiliates from any claims, damages, or expenses arising from:
                                    </p>
                                    <ul className="space-y-3 pl-6 list-disc">
                                        <li>your use of the Site</li>
                                        <li>your violation of these Terms</li>
                                        <li>your infringement of any third-party rights</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 16: Dispute Resolution */}
                            <section id="dispute" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    16. Dispute Resolution
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        Before initiating legal proceedings, you agree to notify TRITON in writing and allow a reasonable period to resolve any dispute.
                                    </p>
                                </div>
                            </section>

                            {/* Section 17: Governing Law */}
                            <section id="governing-law" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    17. Governing Law and Jurisdiction
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        These Terms are governed by the laws of <strong className="text-white">England and Wales</strong>.
                                    </p>
                                    <p>
                                        Any disputes shall be finally resolved by arbitration under the rules of the <strong className="text-white">London Court of International Arbitration (LCIA)</strong>, with the seat of arbitration in London, United Kingdom, unless otherwise required by applicable law.
                                    </p>
                                </div>
                            </section>

                            {/* Section 18: General Provisions */}
                            <section id="general" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    18. General Provisions
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>These Terms constitute the entire agreement regarding use of the Site.</p>
                                    <p>
                                        If any provision is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                                    </p>
                                    <p>
                                        Failure by TRITON to enforce any provision shall not constitute a waiver of its rights.
                                    </p>
                                </div>
                            </section>

                            {/* Section 19: Contact */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
                                <section id="contact" className="space-y-6 scroll-mt-32">
                                    <h2 className="text-xl font-black uppercase text-white flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-triton-red" />
                                        19. Contact
                                    </h2>
                                    <p className="text-gray-400">
                                        For questions regarding these Terms, please send an email to:
                                        <br />
                                        <a href="mailto:info@tritonworldseries.com" className="text-white font-bold hover:text-triton-red transition-colors">info@tritonworldseries.com</a>
                                    </p>
                                </section>
                            </div>

                            <div className="bg-triton-red/10 p-10 rounded-2xl border border-triton-red/20 scroll-mt-32 text-center md:text-left">
                                <p className="text-sm font-bold uppercase tracking-widest text-triton-red mb-2">© TRITON World Series Global Ltd.</p>
                                <p className="text-white text-sm">All rights reserved.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}