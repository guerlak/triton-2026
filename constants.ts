import { Distance, CalendarEvent, Stat, TestimonialProps } from "./types";
import { Trophy, CircleStar } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "O Movimento", href: "#about" },
  { name: "Formatos", href: "#formats" },
  { name: "Calendário", href: "#calendar" },
  { name: "Destinos", href: "#locations" },
  { name: "Comunidade", href: "#community" },
];

export const MARKET_STATS: Stat[] = [
  { value: "3", label: "dias", description: "de estratégia e superação" },
  {
    value: "3",
    label: "modalidades",
    description: "Natação - Ciclismo - Corrida",
  },
  { value: "3", label: "distâncias", description: "Sprint - Middle - Long" },
];

export const DEMOGRAPHICS_STATS = [
  { value: "Pontue", label: "para o ranking global", icon: Trophy },
  { value: "Conquiste", label: "sua vaga pra final mundial", icon: CircleStar },
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
  { name: "REVEZAMENTO", swim: "2000m", bike: "60 km", run: "20 km" },
  { name: "INDIVIUAL", swim: "3000m", bike: "90 km", run: "30 km" },
];

export const EVENTS: CalendarEvent[] = [
  {
    date: "12 APR",
    location: "Salvador, BA",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Confirmed",
    year: 2026,
    format: "Triton 1",
  },
  {
    date: "JUN",
    location: "Jiangsu-qidong",
    country: "China",
    flag: "🇨🇳",
    status: "Confirmed",
    year: 2026,
    format: "Triton 1",
  },
  {
    date: "21-23 AUG",
    location: "Rio de Janeiro, RJ",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Confirmed",
    year: 2026,
    format: "Triton 3",
  },
  {
    date: "06 SEP",
    location: "Lisboa",
    country: "Portugal",
    flag: "🇵🇹",
    status: "Confirmed",
    year: 2026,
    format: "Triton 1",
  },
  {
    date: "MAY",
    location: "UAE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    status: "Planned",
    year: 2027,
    format: "Triton 1",
  },
  {
    date: "AUG",
    location: "Ireland",
    country: "Ireland",
    flag: "🇮🇪",
    status: "Planned",
    year: 2027,
    format: "Triton 1",
  },
  {
    date: "OCT",
    location: "United States",
    country: "EUA",
    flag: "🇺🇸",
    status: "Planned",
    year: 2027,
    format: "Triton 1",
  },
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
