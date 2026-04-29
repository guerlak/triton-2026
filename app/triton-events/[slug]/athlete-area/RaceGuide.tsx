import Image from "next/image";
import * as motion from "framer-motion/client";
import MainButton from "@/app/ui/MainButton";

export default async function RaceGuide() {
    return (
        <section id="race-guide" className="relative py-48 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/triton-about-002.png"
                    alt="Race Start"
                    fill
                    className="object-cover opacity-90 scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-triton-red mb-8 rounded-full"
                    />

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-triton-red font-bold uppercase tracking-[0.3em] mb-4 text-sm"
                    >
                        Official Technical Content
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mb-8 leading-[1.1] max-w-5xl"
                    >
                        All the information you need in the <span className="text-triton-red">Race Guide</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
                    >
                        Every detail counts. From technical rules to hydration points, get the official information  to optimize your performance at TRITON RACE.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <MainButton href="./race-guide">
                            Download the Race Guide
                        </MainButton>
                    </motion.div>


                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
