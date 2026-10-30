import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import RedLine from "@/app/ui/RedLine";

interface ExtraEventProps {
    imageSrc: StaticImageData | string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    badge?: string;
}

const ExtraEvent: React.FC<ExtraEventProps> = ({
    imageSrc,
    imageAlt,
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    badge,
}) => {
    return (
        <section className="py-8 sm:py-12 md:py-20 bg-triton-lightß text-white relative overflow-hidden border-t border-white/5">
            {/* Background glow effect */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-triton-red/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Text Description: Left Side */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                        {/* Badge */}
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-triton-red" />
                                <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase text-white">
                                    {badge}
                                </span>
                            </div>
                        )}

                        {/* Heading & Subtitle */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="text-sm sm:text-base md:text-xl text-triton-red font-medium mt-2 sm:mt-3 border-l-2 border-triton-red pl-4">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* Red accent line */}
                        <div className="w-16 h-1 bg-triton-red rounded-full" />

                        {/* Description Text (HTML supported) */}
                        <div
                            className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed font-light space-y-3 sm:space-y-4"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />


                    </div>

                    {/* 3x4 Aspect Ratio Image: Right Side */}
                    <div className="lg:col-span-5 w-full">
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-neutral-900">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>
                    </div>

                </div>
            </div>

            {/* RedLine Divisor at bottom of section */}

        </section>
    );
};

export default ExtraEvent;

