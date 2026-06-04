
export default function AfterMovie({ youtubeSrc, language }: { youtubeSrc: string, language: string }) {

	const src = youtubeSrc ? youtubeSrc : "HRkcLP078Hs";

	return (
		<>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
				<h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 text-center">
					{language === "pt-BR" ? "Transformando o paraíso no seu campo de prova" : "Transforming paradise into your race course"}
				</h2>
				<h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6 text-center">
					{language === "pt-BR" ? "Uma jornada inesquecível" : "An unforgettable journey"}
				</h2>
				<div className="relative rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(223,31,38,0.2)] border border-white/10 group mt-15">
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

		</>
	)
}