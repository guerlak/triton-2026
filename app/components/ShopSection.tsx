import React from "react";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

const ShopSection: React.FC = () => {
  return (
    <section id="shop" className="relative py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden group">
          {/* Background Image - Updated to high-performance athlete in gear */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2070&auto=format&fit=crop"
              alt="Atleta Triton com Equipamento de Elite"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:p-20 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <ShoppingBag size={12} /> Coleção Oficial
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-6">
              Equipamento de <span className="text-triton-red">Elite</span> para
              Atletas de Elite
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Leve a excelência do TRITON para os seus treinos. Conheça nossa
              linha completa de vestuário técnico e acessórios desenvolvidos
              para performance máxima.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-white hover:bg-triton-red text-black hover:text-white font-black py-4 px-10 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300">
                <span>Visite a Loja</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>

              <div className="flex items-center gap-4 px-6 py-2 border border-white/10 bg-black/40 backdrop-blur-sm rounded-none text-white text-xs font-bold uppercase tracking-widest">
                Envio para todo o Brasil
              </div>
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
