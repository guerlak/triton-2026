import React from "react";
import { ShoppingBag, ArrowUpRight, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import shopImage from "@/public/images/shop-image.png";
import atletaMobile from "@/public/images/atleta-mobile.png";

const ShopSection: React.FC = () => {
  return (
    <section
      id="shop"
      className="py-20 overflow-hidden bg-black flex max-w-[1200] mx-auto "
    >
      <div className="max-w-1/2 px-4 sm:px-6 lg:px-8 ">
        <div className="relative rounded-4xl overflow-hidden group">
          {/* Background Image - Updated to high-performance athlete in gear */}
          <div className="absolute inset-0">
            <Image
              src={shopImage}
              alt="Atleta Triton com Equipamento de Elite"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative py-10 md:p-10 max-w-2xl sm:min-h-[600px]">
            <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <ShoppingBag size={12} /> Official Collection
            </div>

            <div>
              <h2 className="text-4xl md:text-4xl font-black text-white uppercase leading-tight mb-2 mt-50 max-w-2/3">
                Pro-level gear for{" "}
                <span className="text-triton-red">Elite</span> athlete
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Bring TRITON excellence to your workouts.
              </p>
            </div>

            <button className="absolute bottom-10 bg-white hover:bg-triton-red text-black hover:text-white font-black py-2 px-5 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300">
              <span>Visit the Store</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </div>

      <div className="max-w-1/2 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden group">
          {/* Background Image - Updated to high-performance athlete in gear */}
          <div className="absolute inset-0">
            <Image
              src={atletaMobile}
              alt="Atleta Triton com Equipamento de Elite"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative py-10 md:p-10 max-w-2xl sm:min-h-[600px]">
            <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <TabletSmartphone size={12} />
              Application
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-2 mt-50 max-w-2/3">
              Take Us With You.
              <span className="text-triton-red"> Exclusive</span>{" "}
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Elevate Your Experience. Get the App.
            </p>

            <button className="absolute bottom-10  bg-white hover:bg-triton-red text-black hover:text-white font-black py-2 px-5 rounded-none flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300">
              <span>Download the App</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
