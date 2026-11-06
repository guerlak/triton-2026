import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowUpRight, TabletSmartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import atletaMobile from "@/public/images/atleta-mobile.png";
import atletaShop from "@/public/images/atleta-shop.png";
import tritonPassImage from "@/public/images/triton-pass/triton-pass-image.jpg";

const ShopSection: React.FC<{ language: string }> = ({ language }) => {
  return (
    <section
      id="shop"
      className="overflow-hidden bg-black py-8 sm:py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Official Collection */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden group min-h-[480px] sm:min-h-[520px] md:min-h-[560px] flex flex-col justify-between p-6 sm:p-8 md:p-10 border border-white/5">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={atletaShop}
                alt="Atleta Triton com Equipamento de Elite"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
            </div>

            {/* Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-red-950/50">
                <ShoppingBag size={12} /> OFFICIAL COLLECTION
              </div>
            </div>

            {/* Content & CTA */}
            <div className="relative z-10 mt-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-2">
                WEAR THE <br />
                <span className="text-triton-red">TRITON MINDSET</span>
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                {language === "pt"
                  ? "Roupa oficial inspirada na resistência."
                  : "Official apparel inspired by endurance."}
              </p>

              <a
                href="https://scimitarevents.com/product-category/triton-world-series"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-triton-red text-black hover:text-white font-black py-2.5 px-5 rounded-none inline-flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                <span className="text-xs sm:text-sm">Visit the Store</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
          </div>

          {/* Card 2: Web App */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden group min-h-[480px] sm:min-h-[520px] md:min-h-[560px] flex flex-col justify-between p-6 sm:p-8 md:p-10 border border-white/5">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={atletaMobile}
                alt="TRITON Web App"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
            </div>

            {/* Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-red-950/50">
                <TabletSmartphone size={12} /> WEB APP
              </div>
            </div>

            {/* Content & CTA */}
            <div className="relative z-10 mt-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-2">
                TAKE US <br />
                <span className="text-triton-red">EVERYWHERE</span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                {language === "pt"
                  ? "Guarde no seu ecrã e utilize como uma aplicação nativa."
                  : "Save it to your home screen and use it like a native app."}
              </p>

              <a
                href="https://pwa.prouder.se/event/b46853a2-68cc-4f04-a201-72a1b3af027c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-triton-red text-black hover:text-white font-black py-2.5 px-5 rounded-none inline-flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                <span className="text-xs sm:text-sm">Use the App</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
          </div>

          {/* Card 3: TRITON Pass */}
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden group min-h-[480px] sm:min-h-[520px] md:min-h-[560px] flex flex-col justify-between p-6 sm:p-8 md:p-10 border border-white/5 md:col-span-2 lg:col-span-1">
            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="absolute inset-x-0 -top-20 -bottom-1">
                <Image
                  src={tritonPassImage}
                  alt="TRITON Pass & Club Pass"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25"></div>
            </div>

            {/* Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-triton-red px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-red-950/50">
                <Sparkles size={12} /> TRITON PASS
              </div>
            </div>

            {/* Content & CTA */}
            <div className="relative z-10 mt-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-2">
                RACE WITH <br />
                <span className="text-triton-red">TOTAL FREEDOM</span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                {language === "pt"
                  ? "Passe digital no Apple/Google Wallet e cancelamento com 80% de reembolso."
                  : "Digital Apple & Google Wallet pass with 80% race entry protection."}
              </p>

              <Link
                href="/triton-pass"
                className="bg-white hover:bg-triton-red text-black hover:text-white font-black py-2.5 px-5 rounded-none inline-flex items-center justify-center gap-3 uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                <span className="text-xs sm:text-sm">
                  {language === "pt" ? "Conhecer Triton Pass" : "Explore Triton Pass"}
                </span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-triton-red translate-x-16 translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
