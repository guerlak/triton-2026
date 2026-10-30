import RedLine from "../ui/RedLine";

export default function AfterMovie({ youtubeSrc, language }: { youtubeSrc: string, language: string }) {

	const src = youtubeSrc ? youtubeSrc : "HRkcLP078Hs";

	return (
		<section className="relative">
			<RedLine isAbsolute={false} />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
				<h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 text-center text-triton-red">
					{language === "pt-BR" ? "Transformando o paraíso no seu campo de prova" : "Turning paradise into your racing ground"}
				</h2>
				<h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-4 sm:mb-6 text-center">
					{language === "pt-BR" ? "Uma jornada inesquecível" : "An unforgettable journey"}
				</h3>
				<div className="relative rounded-2xl sm:rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(223,31,38,0.2)] border border-white/10 group mt-6 sm:mt-10 md:mt-12">
					<div className="aspect-video w-full">
						<iframe
							className="w-full h-full"
							src={`https://www.youtube.com/embed/${youtubeSrc}`}
							title="Triton Mangaratiba"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
					<div className="absolute inset-0 pointer-events-none border-12 border-black/20 rounded-4xl"></div>
				</div>
			</div>

			<RedLine isAbsolute={false} />

		</section>
	)
}