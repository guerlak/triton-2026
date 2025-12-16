

export default function CommunitySection() {
    return (

        <section id="community" className="py-20 bg-neutral-900 text-center px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Englobando Toda a Comunidade</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Falamos com o triatleta, o nadador, o ciclista, o corredor e com os que buscam novos desafios. Somos um movimento que inova a experiência esportiva.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 uppercase">#TritonCreators</span>
                    <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 uppercase">#TritonFamily</span>
                    <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm font-bold text-gray-400 uppercase">#BeBrave</span>
                </div>
            </div>
        </section>
    )
}
