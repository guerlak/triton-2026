"use client";

import { TestimonialProps } from "@/types";
import TritonBox from "./TritonBox";
import { Instagram } from "lucide-react";
import Image from "next/image";
import dict from "../../dictionaries/en.json";
import RedLine from "../ui/RedLine";
import { div } from "framer-motion/client";

const Testimonial = ({
  quote,
  author,
  avatarUrl,
  linkSocial,
}: Partial<TestimonialProps>) => {
  return (
    <div className="h-full flex flex-col">
      <TritonBox>
        <div className="flex flex-col sm:justify-between items-center justify-center text-center min-h-[280px] sm:min-h-[180px] ">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={avatarUrl || ""}
              alt={author || "Testimonial author"}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              unoptimized
            />
            <div>
              <h4 className="font-bold text-gray-200">{author}</h4>
            </div>
          </div>
          <p className="text-base lg:text-lg italic mx-auto mb-4">"{quote}"</p>

          <div className="mt-auto flex justify-center w-full">
            <a
              href={linkSocial || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-triton-red hover:text-red-400"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </TritonBox>
    </div>
  );
};

export default function TestimonialList() {
  return (
    <section
      id="moviment"
      className="py-20 bg-triton-dark relative overflow-hidden text-center"
    >
      <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
        {dict.testimonials_section.title}
      </h2>
      <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6 ">
        {dict.testimonials_section.subtitle}
      </h2>

      <div className="p-2 flex flex-col-reverse gap-10 justify-between items-center max-w-[1200] mx-auto md:flex-row mt-8">
        <div className="flex overflow-x-auto sm:flex-col snap-x snap-mandatory sm:snap-none w-full md:max-w-[700px] gap-4 pb-6 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {dict?.testimonials?.map((item: any) => (
            <div key={item.author} className="shrink-0 w-[90%] sm:w-full snap-center">
              <Testimonial
                quote={item.quote}
                author={item.author}
                company={item.company}
                avatarUrl={item.avatar_url || ""}
                linkSocial={item.link_social || ""}
              />
            </div>
          ))}
        </div>
        <iframe
          width="425"
          height="750"
          src="https://www.youtube.com/embed/u8iIBGmxq9Q"
          title="TRITON 3 RIO DE JANEIRO | DAY 3 - RACE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="max-w-full rounded-2xl"
        ></iframe>
      </div>
      <RedLine />
    </section>
  );
}
