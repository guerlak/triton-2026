"use client";

import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { 
    Clock, 
    MapPin, 
    ShieldCheck, 
    Truck, 
    Droplets, 
    ChevronLeft, 
    Download,
    FileText,
    Calendar,
    HelpCircle
} from "lucide-react";

export default function RaceGuidePage() {
    const sections = [
        {
            title: "Event Schedule",
            icon: Clock,
            description: "Complete timeline of competition days, check-in, and award ceremonies.",
            color: "text-blue-400"
        },
        {
            title: "Course Maps",
            icon: MapPin,
            description: "Detailed GPS coordinates and maps for Swim, Bike, and Run segments.",
            color: "text-green-400"
        },
        {
            title: "Technical Rules",
            icon: ShieldCheck,
            description: "Essential regulations regarding equipment, penalties, and safety.",
            color: "text-triton-red"
        },
        {
            title: "Logistics",
            icon: Truck,
            description: "Information on parking, transport, and athlete check-in area.",
            color: "text-purple-400"
        },
        {
            title: "Hydration",
            icon: Droplets,
            description: "Locations of water and nutrition stations throughout the courses.",
            color: "text-cyan-400"
        },
        {
            title: "Bib Collection",
            icon: FileText,
            description: "Documents required and hours for bib and timing chip collection.",
            color: "text-orange-400"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-triton-red selection:text-white">
            {/* Header Navigation */}
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="../athlete-area" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase text-xs tracking-widest hidden sm:block">Back to Athlete Area</span>
                        <span className="font-bold uppercase text-xs tracking-widest sm:hidden">Back</span>
                    </Link>
                    <div className="flex items-center gap-4">
                         <span className="text-triton-red font-black uppercase tracking-widest text-sm">TRITON GUIDE 2026</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/triton-about-002.png" 
                        alt="Race Guide Background" 
                        fill 
                        className="object-cover opacity-60 scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-triton-red/20 backdrop-blur-md border border-triton-red/30 px-6 py-2 rounded-full mb-8"
                    >
                        <span className="text-triton-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Official Technical Guide</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black uppercase leading-none mb-6 tracking-tighter"
                    >
                        Race<span className="text-triton-red">Guide</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        All the essential information for your journey at TRITON Salvador. Navigate through the sections below to prepare for the race.
                    </motion.p>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-triton-red to-transparent" />
                </motion.div>
            </section>

            {/* Main Content Grid */}
            <main className="max-w-7xl mx-auto px-4 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-neutral-900/40 border border-white/5 rounded-[2rem] p-10 hover:bg-neutral-900 hover:border-triton-red/40 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-triton-red/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-triton-red/10 transition-colors" />
                            
                            <div className={`w-16 h-16 rounded-2xl bg-neutral-800/80 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:bg-triton-red/10 transition-all duration-500`}>
                                <section.icon className={`w-8 h-8 ${section.color}`} />
                            </div>
                            
                            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-triton-red transition-colors">
                                {section.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                {section.description}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-triton-red opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                <span>Learn More</span>
                                <div className="w-8 h-[2px] bg-triton-red" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* PDF Download Spotlight */}
                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 relative rounded-[4rem] overflow-hidden p-16 md:p-24 text-center border border-white/5"
                >
                    <div className="absolute inset-0 bg-neutral-900 z-0" />
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay z-1 bg-gradient-to-br from-triton-red to-black" />
                    <div className="absolute inset-0 bg-[url('/images/triton-ws-branco.png')] opacity-5 bg-center bg-no-repeat bg-contain z-2" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 bg-triton-red rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(223,31,38,0.4)]">
                            <Download className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase mb-8 tracking-tighter">Full Offline <span className="text-triton-red">Access</span></h2>
                        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-14 font-medium leading-relaxed">
                            Planning to be offline? Download the complete high-resolution technical guide (40+ pages) with all courses, schedules, and official regulations.
                        </p>
                        <button className="group relative bg-triton-red hover:bg-white text-white hover:text-black font-black uppercase px-20 py-6 rounded-2xl text-xl transition-all duration-500 shadow-[0_0_30px_rgba(223,31,38,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transform hover:scale-105 active:scale-95">
                            Download PDF Guide
                        </button>
                    </div>
                </motion.div>
                
                {/* Secondary Links / Support */}
                <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                    <div className="bg-neutral-900/30 border border-white/5 rounded-[3rem] p-12 transition-colors hover:border-white/10">
                        <HelpCircle className="w-10 h-10 text-triton-red mb-6" />
                        <h4 className="text-2xl font-bold uppercase mb-4">Technical FAQ</h4>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Specific questions about bike draft rules, wetsuit temperatures, or specific penalty structures? Visit our dedicated technical help center.
                        </p>
                        <Link href="/faq" className="text-xs font-black uppercase tracking-widest text-white hover:text-triton-red transition-colors flex items-center gap-2">
                            Go to Help Center <div className="w-4 h-[1px] bg-white transition-all group-hover:w-8" />
                        </Link>
                    </div>
                    
                    <div className="bg-neutral-900/30 border border-white/5 rounded-[3rem] p-12 transition-colors hover:border-white/10">
                        <Calendar className="w-10 h-10 text-triton-red mb-6" />
                        <h4 className="text-2xl font-bold uppercase mb-4">Event Schedule</h4>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Don't miss the mandatory briefing or the start of your distance. Keep the full event calendar synced to your device.
                        </p>
                        <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-white hover:text-triton-red transition-colors flex items-center gap-2">
                            View Full Schedule <div className="w-4 h-[1px] bg-white transition-all group-hover:w-8" />
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer Decorative Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-triton-red/50 to-transparent" />
        </div>
    );
}
