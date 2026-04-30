import { Distance, CalendarEvent, Stat, TestimonialProps } from "./types";
import { Trophy, CircleStar } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "The Movement", href: "#about" },
  { name: "Formats", href: "#formats" },
  { name: "Calendar", href: "#calendar" },
  { name: "Locations", href: "#locations" },
  { name: "Community", href: "#community" },
];


export const DEMOGRAPHICS_STATS = [
  { value: "Score", label: "for the global ranking", icon: Trophy },
  { value: "Win", label: "your spot for the world final", icon: CircleStar },
];

export const TRITON_1_DISTANCES: Distance[] = [
  { name: "SPRINT", swim: "1000m", bike: "30km", run: "10km" },
  { name: "MIDDLE", swim: "2000m", bike: "60km", run: "20km" },
  { name: "LONG", swim: "3000m", bike: "90km", run: "30km" },
];

export const TRITON_3_DISTANCES: Distance[] = [
  { name: "SPRINT", swim: "1000m", bike: "30km", run: "10km" },
  { name: "MIDDLE", swim: "2000m", bike: "60km", run: "20km" },
  { name: "LONG", swim: "3000m", bike: "90km", run: "30km" },
];

export const TRITON_FORMATO: Distance[] = [
  { name: "TRIATHLON", swim: "1000m", bike: "30 km", run: "10 km" },
  { name: "RELAY", swim: "2000m", bike: "60 km", run: "20 km" },
  { name: "INDIVIDUAL", swim: "3000m", bike: "90 km", run: "30 km" },
];


export const TESTIMONIALS: TestimonialProps[] = [
  {
    quote:
      "Quantas lições em um único final de semana. Foram 3 dias, 3 esportes, 3 humores e unimeras variações de sentimentos. No Triton 3 pude me testar, exercitar a paciência e também o carinho comigo mesma. ",
    author: "Viviane",
    role: "",
    company: "TechFlow",
    avatarUrl: "./images/atletas/viviane.jpeg",
    linkSocial: "https://www.instagram.com/viviwigand/",
  },
  {
    quote:
      "Que dia incrível e que dia forte! Obrigado TRITON pela prova top, segura e com visual fantástico",
    author: "Bizarelo",
    role: "",
    company: "TechFlow",
    avatarUrl: "./images/atletas/bizarelo.jpeg",
    linkSocial: "https://www.instagram.com/bizarelocycling/",
  },
  {
    quote:
      "Que fim de semana incrível! Obrigada Triton pela experiência única. Levo para casa uma recordação cheias de boas energias e momentos especiais.",
    author: "Elida",
    role: "",
    company: "TechFlow",
    avatarUrl: "./images/atletas/elida.jpeg",
    linkSocial: "https://www.instagram.com/elidacordeiroo",
  },
];
