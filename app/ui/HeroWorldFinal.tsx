"use client";

import Image from "next/image";
import { ChevronDown, Trophy, Flame, MapPin, Calendar, Sparkles, Crown } from "lucide-react";
import { EventData, EventHero } from "@/eventdata";
import RedLine from "./RedLine";

interface HeroWorldFinalProps {
	data?: EventHero | EventData;
	event?: EventData;
	title?: string;
	subtitle?: string;
}

export default function HeroWorldFinal({
	data,
	event,
	title,
	subtitle,
}: HeroWorldFinalProps) {
	// Determine if data is EventHero or EventData
	const heroData: EventHero | undefined =
		data && "backgroundImage" in data
			? (data as EventHero)
			: data && "hero" in data
				? (data as EventData).hero
				: undefined;

	const eventData: EventData | undefined = event || (data && "venue" in data ? (data as EventData) : undefined);

	const bgImage = heroData?.backgroundImage || "/images/evento_start.jpg";
	const logoImage = heroData?.logoImage;

	const displayYear = eventData?.year || 2027;
	const displayLocation =
		eventData?.venue || eventData?.location || "Henley on Thames, England";
	const displayDate = eventData?.fullDateText || eventData?.dateText || "SEP 2027";

	const isTriton3 = eventData?.eventFormat === "triton3";
	const formatTitle =
		eventData?.subtitle || (isTriton3 ? "TRITON 3" : "TRITON 1");
	const formatSubtext = isTriton3
		? "3 Days • 3 Independent Stages • Sprint, Middle & Long"
		: "1 Day • Full Triathlon • Sprint, Middle & Long";

	return (
		<section className="relative min-h-[85vh] sm:min-h-[90vh] w-full flex items-center justify-start overflow-hidden bg-black pt-24 pb-16">
			{/* Background Image with Dark Vignette and Gradient Overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src={bgImage}
					alt="TRITON World Finals"
					fill
					priority
					sizes="100vw"
					quality={85}
					className="object-cover object-center opacity-60"
				/>

				{/* Ambient Atmospheric Red Glow */}
				<div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-triton-red/20 blur-[120px] pointer-events-none" />
			</div>

			{/* Left-aligned Content Container */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="max-w-3xl text-left space-y-4 sm:space-y-6">
					{/* Top Pill / Badge */}
					<div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-triton-red/40 bg-triton-red/10 backdrop-blur-md">

						<span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red">
							BE eager . be brave . be strong
						</span>
					</div>

					{/* Heading */}
					<div className="space-y-2 sm:space-y-3">
						<h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight break-words text-white">
							{title ? (
								title
							) : (
								<>
									TRITON World <br />
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-triton-red via-red-500 to-white">
										Finals {displayYear}
									</span>
								</>
							)}
						</h1>

						<p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans max-w-2xl">
							{subtitle ? (
								subtitle
							) : (
								<>
									The ultimate battleground where champions are crowned. The top qualified triathletes
									across the globe contest the title with <strong className="text-white">3× points</strong> on the line in the definitive climax of the season.
								</>
							)}
						</p>
					</div>

					{/* Official Format Stamp */}
					<div className="pt-1 sm:pt-2">
						<div className="inline-flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 pr-4 sm:pr-6 rounded-xl border border-white/15 bg-neutral-950/80 backdrop-blur-md shadow-lg shadow-black/50 select-none group transition-all duration-300 hover:border-triton-red/40">
							{/* Stamp Seal Badge */}
							<div className="relative shrink-0 px-3.5 py-1.5 rounded-lg bg-triton-red text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-md shadow-triton-red/30 flex items-center gap-1.5 border border-red-500/40">
								<span>{formatTitle}</span>
							</div>

							{/* Stamp Details */}
							<div className="flex flex-col text-left">
								<span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-triton-red flex items-center gap-1.5">
									<span className="w-1.5 h-1.5 rounded-full bg-triton-red animate-pulse" />
									OFFICIAL RACE FORMAT
								</span>
								<span className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">
									{formatSubtext}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Scroll Indicator */}
			<div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 z-20">
				<ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
			</div>

			{/* Decorative Red Line at Section Bottom */}
			<RedLine />
		</section>
	);
}
