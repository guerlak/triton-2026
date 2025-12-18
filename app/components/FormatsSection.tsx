'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { TRITON_1_DISTANCES, TRITON_3_DISTANCES, TRITON_FORMATO } from '../../constants';
import { Waves, Bike, PersonStanding, Users, Layers, User } from 'lucide-react';
import bikePic from "../../public/images/triton-fotos-prova-bike.jpeg";
import swimPic from "../../public/images/triton-fotos-prova-swim.jpeg";
import runPic from "../../public/images/triton-fotos-prova-run.jpeg";
import runMap from "../../public/images/maps/corrida-triton3-rj-2026.jpg";
import swimMap from "../../public/images/maps/natacao-triton3-rj-2026.png";
import bikeMap from "../../public/images/maps/ciclismo-triton3-rj-2026.jpg";

const FormatTable: React.FC<{ distances: typeof TRITON_1_DISTANCES }> = ({ distances }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/20">
          <th className="py-4 px-4 text-sm font-bold uppercase text-gray-400">Distâncias</th>
          <th className="py-4 px-4 text-center"><Waves className="mx-auto w-6 h-6 text-triton-red" /></th>
          <th className="py-4 px-4 text-center"><Bike className="mx-auto w-6 h-6 text-triton-red" /></th>
          <th className="py-4 px-4 text-center"><PersonStanding className="mx-auto w-6 h-6 text-triton-red" /></th>
        </tr>
      </thead>
      <tbody>
        {distances.map((row, idx) => (
          <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
            <td className="py-4 px-4 font-black text-xl italic uppercase text-white">{row.name}</td>
            <td className="py-4 px-4 text-center font-bold text-gray-300">{row.swim}</td>
            <td className="py-4 px-4 text-center font-bold text-gray-300">{row.bike}</td>
            <td className="py-4 px-4 text-center font-bold text-gray-300">{row.run}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const FormatsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'1' | '2' | '3'>('1');

  const teste = () => {
    console.log("teste");
  }

  return (
    <section id="formats" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">Inovação</h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6">
            Formatos que Redefinem<br />a Experiência
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            O <strong>TRITON 3</strong> é uma prova realizada em 3 dias consecutivos.
            Uma experiência  única que eleva o triathlon a outro nível. O formato permite que, além dos triatletas, nadadores, ciclistas e corredores participem da prova
            de forma individual.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-900 p-1 rounded-full inline-flex border border-white/10">
            <button
              onClick={() => setActiveTab('1')}
              className={`cursor-pointer px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === '1' ? 'bg-triton-red text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Natação
            </button>
            <button
              onClick={() => setActiveTab('2')}
              className={`cursor-pointer px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === '2' ? 'bg-triton-red text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              ciclismo
            </button>
            <button
              onClick={() => setActiveTab('3')}
              className={`cursor-pointer px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === '3' ? 'bg-triton-red text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Corrida
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="gap-16">

          {/* Left: Description & Image */}
          <div className={`transition-opacity duration-500 ${activeTab === '1' ? 'opacity-100' : 'lg:block lg:opacity-100'}`}>

            {(() => {
              switch (activeTab) {
                case '1':
                  return (
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
                          <Image src={swimPic} alt="Cycling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
                            <h4 className="text-4xl font-black italic text-white">DIA 1 <span className="text-triton-red text-xl not-italic align-middle ml-2 font-bold border border-triton-red px-2 py-1 rounded">COMPETIÇÃO</span></h4>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">NATAÇÃO</h4>
                        <p className="text-gray-400 mb-4">
                          Realizada na praia particular do Portobello Resort
                        </p>
                        <ul className="space-y-2 text-gray-300 mb-8">
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Data: 21 de agosto (sexta-feira)</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Largada: 15h30</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Premiação: 17h45</li>
                        </ul>
                        {/* <button onClick={teste} href="" rel="noopener noreferrer" className="m bg-triton-red hover:bg-red-700 text-white text-sm font-bold rounded-full uppercase tracking-widest px-4 py-2 transition-all transform hover:scale-105">Percurso em vídeo</button> */}
                      </div>

                      <Image src={swimMap} alt='swim picture' className="rounded-2xl" />

                    </div>

                  );
                case '2':
                  return (
                    <div className="grid sm:grid-cols-2 gap-6 ">
                      <div>
                        <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
                          <Image src={bikePic} alt="Cycling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <h4 className="text-4xl font-black italic text-white">DIA 2 <span className="text-triton-red text-xl not-italic align-middle ml-2 font-bold border border-triton-red px-2 py-1 rounded">COMPETIÇÃO</span></h4>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">CICLISMO</h4>
                        <p className="text-gray-400 mb-4">
                          Realizada na emblemática e desafiadora Serra do Piloto. A concentração da prova acontece no Parque de Exposições de Mangaratiba (EXPO)
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Data: 22 de agosto (sábado)</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Largada: 08h00</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Premiação: 16h00</li>
                        </ul>
                      </div >
                      <Image src={bikeMap} alt='Bike Picture' className="rounded-2xl" />
                    </div>
                  );
                case '3':
                  return (
                    <div className="grid  sm:grid-cols-2 gap-6">
                      <div>
                        <div className="relative h-80 rounded-2xl overflow-hidden mb-8 group">
                          <Image src={runPic} alt="Running" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <h4 className="text-4xl font-black italic text-white">DIA 3 <span className="text-triton-red text-xl not-italic align-middle ml-2 font-bold border border-triton-red px-2 py-1 rounded">COMPETIÇÃO</span></h4>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">CORRIDA</h4>
                        <p className="text-gray-400 mb-4">
                          Realizada no interior do condomínio Portobello, essa prova parte de detro do resort em direção ao safári. Um percurso cinematográfico.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Data: 23 de agosto (domingo)</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Largada: 08h00</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-triton-red rounded-full mr-3"></span>Premiação: 11h00</li>
                        </ul>
                      </div>

                      <Image src={runMap} alt='runner picture' className="rounded-2xl" />
                    </div>
                  );
                default:
                  return null;
              }
            })()}

          </div>

        </div>

        <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4 mt-20">
          Possibilidades de Distancias
        </h4>

        <FormatTable distances={activeTab === '1' ? TRITON_1_DISTANCES : TRITON_3_DISTANCES} />

        {/* Formas competicao */}
        <div className="mt-8 border-t border-white/10 pt-12">
          <h4 className="text-2xl font-bold text-white mb-8 uppercase border-l-4 border-triton-red pl-4">
            Possibilidades de Competição
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Individual */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <User className="text-triton-red group-hover:text-white" size={24} />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">Triathlon</h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase 0.5">Sprint</span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">Middle</span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">Long</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 mt-2">
                Sua posição no ranking final (após os três dias) será o somatório da sua classificação em cada modalidade:
                <span className="text-white font-bold"> Natação + Ciclismo + Corrida.</span>
              </p>

            </div>

            {/* Corporate */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <Users className="text-triton-red group-hover:text-white" size={24} />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">Revezamento (Corporate)</h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-3">Sprint</span>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Monte sua equipe (dupla ou trio). Cada um faz uma modalidade. Em caso de dupla, um atleta terá de que fazer mais de uma modalidade.
              </p>
            </div>

            {/* Modalidades Individuais */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-triton-red/50 transition-all group">
              <div className="bg-triton-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-triton-red transition-colors">
                <Layers className="text-triton-red group-hover:text-white" size={24} />
              </div>
              <h5 className="text-white font-black uppercase mb-2 text-lg">Modalidades Individuais</h5>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">Sprint</span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">Middle</span>
              <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase m-0.5">Long</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 mt-2">
                Escolha entre natação, ciclismo e/ou corrida, defina a distância e se inscreva!
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Não pontua para o ranking final (3 dias), mas concorre a <strong>premiação diária</strong> por modalidade.
              </p>
            </div>

          </div>
        </div>

        {/* Mapas */}
      </div>
    </section >
  );
};

export default FormatsSection;