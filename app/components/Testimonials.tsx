"use client";

import { TestimonialProps } from "@/types";
import TritonBox from "./TritonBox";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { useDictionary } from "./DictionaryProvider";



const Testimonial = ({
  quote,
  author,
  avatarUrl,
  linkSocial,
}: Partial<TestimonialProps>) => {
  return (
    <TritonBox>
      <div className="flex flex-col justify-center items-center">
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
        <p className="text-lg italic mx-auto">"{quote}"</p>
      </div>

      <div className="w-10 mt-4">
        <a
          href={linkSocial || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-triton-red hover:text-red-400"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </TritonBox>
  );
};

export default function TestimonialList() {
  const { dict } = useDictionary();

  return (
    <section
      id="testimonials"
      className="py-20 bg-triton-dark relative overflow-hidden text-center"
    >
      <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
        {dict.testimonials_section.title}
      </h2>
      <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6 ">
        {dict.testimonials_section.subtitle}
      </h2>

      <div className="p-2 flex flex-col-reverse gap-10 justify-between items-center max-w-[1200] mx-auto md:flex-row">
        <div className="flex flex-col max-w-[700] gap-4">
          {dict?.testimonials?.map((item: any) => (
            <Testimonial
              key={item.author}
              quote={item.quote}
              author={item.author}
              company={item.company}
              avatarUrl={item.avatar_url || ""}
              linkSocial={item.link_social || ""}
            />
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
        ></iframe>
      </div>
    </section>
  );
}
