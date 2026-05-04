import Image from "next/image";
import * as motion from "framer-motion/client";

const RACE_KITS = [
    {
        name: "Sprint Distance",
        image: "/images/race-kit/race-kit-white.jpeg",
    },
    {
        name: "Middle Distance",
        image: "/images/race-kit/race-kit-red.jpeg",
    },
    {
        name: "Long Distance",
        image: "/images/race-kit/race-kit-black.jpeg",
    }
];

const FINISHER_KITS = [
    {
        name: "Sprint Finisher",
        image: "/images/race-kit/race-kit-finisher-white.jpeg",
    },
    {
        name: "Middle Finisher",
        image: "/images/race-kit/race-kit-finisher-red.jpeg",
    },
    {
        name: "Long Finisher",
        image: "/images/race-kit/race-kit-finisher-black.jpeg",
    }
];

export default async function RaceKit() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white py-40 flex flex-col gap-32" id="race-kit">
            {/* Race Kits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black uppercase mb-6 leading-none"
                        >
                            Race<span className="text-triton-red ">KITS</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg max-w-2xl"
                        >
                            Check the exclusive race kits for the TRITON event. Each kit is designed for maximum performance and style.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {RACE_KITS.map((kit, index) => (
                        <motion.div
                            key={kit.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-triton-red/30 transition-colors duration-500"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src={kit.image}
                                    alt={kit.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-triton-red text-white text-xs font-black uppercase px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:-translate-y-1/2">
                                    Official
                                </div>
                                <h3 className="text-xl uppercase font-bold mb-2 group-hover:text-triton-red transition-colors duration-300">
                                    {kit.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Finisher Kits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none"
                        >
                            Finisher<span className="text-triton-red ">KITS</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg max-w-2xl"
                        >
                            The reward for your effort. Check out the exclusive items you'll receive upon crossing the finish line.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FINISHER_KITS.map((kit, index) => (
                        <motion.div
                            key={kit.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-triton-red/30 transition-colors duration-500"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src={kit.image}
                                    alt={kit.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-triton-red text-white text-xs font-black uppercase px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:-translate-y-1/2">
                                    Finisher
                                </div>
                                <h3 className="text-xl uppercase font-bold mb-2 group-hover:text-triton-red transition-colors duration-300">
                                    {kit.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}



