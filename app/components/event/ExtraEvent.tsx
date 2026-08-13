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
        <section className=" py-16 md:py-24 bg-triton-light text-white relative overflow-hidden border-t border-white/5">
            {/* Background glow effect */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-triton-red/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Text Description: Left Side */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Badge */}
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                <Sparkles className="h-4 w-4 text-triton-red" />
                                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white">
                                    {badge}
                                </span>
                            </div>
                        )}

                        {/* Heading & Subtitle */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="text-lg md:text-xl text-triton-red font-medium mt-3 border-l-2 border-triton-red pl-4">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* Red accent line */}
                        <div className="w-16 h-1 bg-triton-red rounded-full" />

                        {/* Description Text (HTML supported) */}
                        <div
                            className="text-gray-300 text-base md:text-lg leading-relaxed font-light space-y-4"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />

                        {/* CTA Link */}
                        {ctaText && ctaLink && (
                            <div className="pt-2">
                                <Link
                                    href={ctaLink}
                                    target={ctaLink.startsWith("http") ? "_blank" : undefined}
                                    rel={ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-triton-red hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm rounded-lg transition-all duration-300 shadow-lg shadow-triton-red/20 hover:shadow-triton-red/40 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <span>{ctaText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        )}
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

