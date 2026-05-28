import React from "react";
import { ShoppingBag, ArrowUpRight, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import atletaMobile from "@/public/images/atleta-mobile.png";
import atletaShop from "@/public/images/atleta-shop.png";




const ShopSection: React.FC<{ language: string }> = ({ language }) => {
  return (
    <section
      id="shop"
      className="overflow-hidden bg-black flex flex-col md:flex-row justify-center items-center py-10 md:py-20 gap-5"
    >
      <div className="md:max-w-1/2 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden group">
          {/* Background Image - Updated to high-performance athlete in gear */}
          <div className="absolute inset-0">
            <Image
              src={atletaShop}
              alt="Atleta Triton com Equipamento de Elite"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative p-5 md:p-10 max-w-2xl sm:min-h-[600px] sm:min-w-[650px]">

            <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full
             text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <ShoppingBag size={12} /> {language == 'pt-BR' ? 'Coleção Oficial' : 'Official Collection'}
            </div>

            <div className="mt-50">
              <h2 className="text-3xl md:text-3xl font-black text-white uppercase leading-tight 
              mb-0 sm:mb-2 max-w-2/3">
                {language == 'pt-BR' ? 'VISTA A ' : 'WEAR THE'}  <br></br><span className="text-triton-red">
                  {language == 'pt-BR' ? 'MENTALIDADE TRITON' : 'TRITON MINDSET'}</span>{" "}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {language == 'pt' ? 'Roupa oficial inspirada na resistência.' : 'Official apparel inspired by endurance.'}
              </p>
            </div>

            <a href="https://scimitarevents.com/product-category/triton-world-series"
              target="_blank"
              className="bg-white hover:bg-triton-red text-black hover:text-white font-black
               py-2 px-5 rounded-none inline-flex items-center justify-center gap-3 uppercase tracking-widest
                transition-all duration-300">
              <span className="text-xs sm:text-sm">{language == 'pt-BR' ? 'Visite a Loja' : 'Visit the Store'}</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </div>

      <div className="md:max-w-1/2 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden group">
          {/* Background Image - Updated to high-performance athlete in gear */}
          <div className="absolute inset-0">
            <Image
              src={atletaMobile}
              alt="Atleta Triton com Equipamento de Elite"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative p-5 md:py-10 md:p-10 max-w-2xl sm:min-h-[600px] min-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full
             text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <TabletSmartphone size={12} />
              WEB App
            </div>

            <div className="mt-50">
              <h2 className="text-3xl font-black text-white uppercase leading-tight mb-2 max-w-2/3">
                {language == "pt-BR" ? "Leve o Triton" : "Take us"}<br></br>
                <span className="text-triton-red">{language == "pt-BR" ? "com Você" : "With You"}</span>{" "}
              </h2>

              <p className="text-gray-300 text-lg md:text-md leading-relaxed mb-10 max-w-lg">
                {language == "pt-BR" ? "Salve na tela do seu celular e use como um app." : "Save it in your screen<br></br> and use it like an app."}
              </p>

              <a className="inline-flex bg-white hover:bg-triton-red text-black hover:text-white font-black py-2 px-5 rounded-none items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300">
                <span className="text-xs sm:text-sm">{language == "pt-BR" ? "Use o App" : "Use the App"}</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
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
