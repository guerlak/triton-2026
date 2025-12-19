import React from 'react';
import { MARKET_STATS, DEMOGRAPHICS_STATS } from '../../constants';

const StatsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-triton-dark relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2 text-lg">21. 22. 23. Agosto</h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            um evento que vai <br />
            superar suas expectativas
          </h3>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {MARKET_STATS.map((stat, index) => (
            <div key={index} className="text-center p-8 border border-white/10 bg-white/5 rounded-lg hover:border-triton-red/50 transition-colors duration-300">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-triton-red uppercase mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm font-medium max-w-xs mx-auto uppercase">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 border-l-4 border-triton-red shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-black uppercase text-white mb-4">Um Sistema de <br></br>pontuação inovador</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ao contrário dos triathlons tradicionais, onde vence quem faz o menor tempo, <strong>no TRITON 3 o jogo é outro! </strong>
                Aqui, o campeão é <strong>quem soma menos pontos</strong> ao longo dos três dias.
                A pontuação é definida pela colocação diária. Isso coloca <strong>todas as modalidades com o mesmo peso</strong> e transforma a disputa
                em uma verdadeira prova de <strong>consistência, estratégia e resiliência.</strong>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DEMOGRAPHICS_STATS.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4">
                  <stat.icon className="text-triton-red mb-3 w-8 h-8" />
                  <span className="text-3xl font-black text-white">{stat.value}</span>
                  <span className="text-xs font-bold text-gray-400 uppercase text-center mt-1">{stat.label}</span>
                </div>
              ))}
              {/* <a href="" className='bg-triton-red hover:bg-red-700 text-white text-lg font-bold rounded-none uppercase tracking-widest transition-all transform hover:scale-105"'>Ranking</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;