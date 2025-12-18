import React from 'react';
import Image from 'next/image';
import fotoResort from '../../public/images/foto-portobelo-ampla.jpeg';
import { MessageCircle, House, BedDouble } from 'lucide-react'

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
                    Relembre os melhores momentos do <strong>TRITON 3</strong> 2025 e prepare-se para vivenciar essa experiência única,
                    que desafia o seu corpo e renova a sua mente.
                </p>
            </div>
            <div className="text-center py-16">
                <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">Garanta sua inscrição</h2>
                <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
                    AGO 21. 22. 23.
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Toda a estrutura do evento está localizada dentro do <strong>Portobello Resort & Safári</strong>.
                    Tanto o hotel quanto o evento estão sujeitos à capacidade máxima. <br></br><strong>Garanta sua vaga
                        o quanto antes e viva essa experiência imersíva!</strong>
                </p>†

                <div className='grid md:grid-cols-2 grid-cols-1 md:w-[1200px] justify-center mt-20 gap-10 mx-auto'>
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
                        <Image src={fotoResort} alt="Cycling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
                            <h4 className="text-lg font-black italic text-white opacity-80">Mangaratiba-RJ</h4>
                        </div>
                    </div>
                    <div className='text-left'>
                        <h1 className='text-2xl uppercase font-black mb-2'>Resort Portobello</h1>
                        <h2>
                            É o hotel oficial do evento e possui condições exclusivas para os atletas do TRITON
                            e seus familiares:
                        </h2>
                        <ul className="space-y-2 text-gray-300 mb-8 mt-4">
                            <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Tarifa Especial com todas as refeições incluídas</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Gratuidade para 2 crianças de até 7 anos</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Possibilidade de parcelamento</li>
                        </ul>
                        <p className='italic'>* Desconto aplicado somente pela central de reservas</p>
                        <a href="https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello."
                            target='_blank'
                            className="m-4 text-xs md:text-xl md:w-130 md:ml-0 bg-triton-red cursor-pointer hover:bg-red-700 text-white font-bold uppercase tracking-widest px-6 py-3 transition-all transform hover:scale-101 flex items-center">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Fale com a Central de Reservas
                        </a>
                    </div>
                </div>


                <div className="md:w-[1200px] bg-linear-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-8 border-l-4 border-triton-red shadow-2xl m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div>
                            <h3 className="text-2xl font-black uppercase text-white mb-4">Outras opções</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Não é obrigatório se hospedar no hotel oficial do evento. Existem outras opções de hospedagem na região de Mangaratiba.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
                            <div className="flex flex-col items-center justify-center">

                                <span className="text-3xl font-black text-triton-red"><House size={40} /></span>
                                <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">Alugue uma casa</span>

                            </div>
                            <div className="flex flex-col items-center justify-center">

                                <span className="text-3xl font-black text-triton-red"><BedDouble size={40} /></span>
                                <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">Pousadas locais</span>
                            </div>
                        </div>


                    </div>
                </div>





            </div>


        </section >
    );
};
export default LocationsSection;