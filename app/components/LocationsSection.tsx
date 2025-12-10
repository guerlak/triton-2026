import React from 'react';

const LocationsSection: React.FC = () => {
    return (
        <section id="locations" className="py-0 bg-black">
            <div className="h-auto md:h-[650px] flex items-center justify-around px-4 md:px-8 lg:px-16 overflow-x-auto bg-triton-dark">
                <iframe
                    width="1200"
                    height="600"
                    src="https://www.youtube.com/embed/HRkcLP078Hs?si=mmRw6_3vgriOajq3"
                    title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>

                {/* <iframe
                    src="https://youtube.com/embed/u8iIBGmxq9Q?si=X7B8PK2XtYs6VKWw"
                    frameborder="0"
                    width="300"
                    height="600"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                    allowfullscreen>
                </iframe>
                <iframe
                    src="https://youtube.com/embed/u8iIBGmxq9Q?si=X7B8PK2XtYs6VKWw"
                    frameborder="0"
                    width="300"
                    height="600"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                    allowfullscreen>
                </iframe>
                <iframe
                    src="https://youtube.com/embed/u8iIBGmxq9Q?si=X7B8PK2XtYs6VKWw"
                    frameborder="0"
                    width="300"
                    height="600"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                    allowfullscreen>
                </iframe> */}

                {/* Rio */}
                {/* <div className="relative group overflow-hidden h-[400px] md:h-full">
                    <img
                        src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1740&auto=format&fit=crop"
                        alt="Rio de Janeiro"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
                            <p className="text-triton-red font-bold tracking-widest mb-2">21-23 AGO • 2026</p>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">Rio de Janeiro</h3>
                            <p className="text-gray-300 max-w-md text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Mangaratiba - RJ. Um final de semana de imersão no esporte e bem-estar no resort cinco estrelas Portobello Resort & Safári.
                            </p>
                        </div>
                    </div>
                </div> */}

            </div>

            <div className="bg-triton-red py-10 px-4 text-center">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">Transformando o paraíso no seu Campo de Provas</h3>
                <p className="text-white/80 max-w-3xl mx-auto">
                    Relembre os melhores momentos do TRITON 3 2025 e prepare-se para vivenciar essa experiência única,
                    que desafia o seu corpo e renova a sua mente.
                </p>
            </div>

            <div className="flex justify-center py-8 ">

                <div className="text-center mt-16">
                    <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">Garanta sua inscrição</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
                        AGO 21. 22. 23.
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        O TRITON 3 é uma prova realizada em 3 dias consecutivos.
                        Uma experiência  única que eleva o triathlon a outro nível. O formato permite que, além dos triatletas, nadadores, ciclistas e corredores participem da prova
                        de forma individual.
                    </p>
                </div>
            </div>


        </section >
    );
};

export default LocationsSection;