import { Distance, CalendarEvent, Stat } from './types';
import { Trophy, CircleStar, DollarSign } from 'lucide-react';

export const NAVIGATION_LINKS = [
  { name: 'O Movimento', href: '#about' },
  { name: 'Formatos', href: '#formats' },
  { name: 'Calendário', href: '#calendar' },
  { name: 'Destinos', href: '#locations' },
  { name: 'Comunidade', href: '#community' },
];

export const MARKET_STATS: Stat[] = [
  { value: '3', label: 'dias', description: 'Em que a única escolha é a superação' },
  { value: '3', label: 'modalidades', description: 'Natação - Ciclismo - Corrida' },
  { value: '3', label: 'distâncias', description: 'Sprint - Middle - Long' },
];

export const DEMOGRAPHICS_STATS = [
  { value: 'Pontue', label: 'para o ranking global', icon: Trophy },
  { value: 'Conquiste', label: 'sua vaga pra final mundial', icon: CircleStar },

];

export const TRITON_1_DISTANCES: Distance[] = [
  { name: 'SPRINT', swim: '1000m', bike: '30km', run: '10km' },
  { name: 'MIDDLE', swim: '2000m', bike: '60km', run: '20km' },
  { name: 'LONG', swim: '3000m', bike: '90km', run: '30km' },
];

export const TRITON_3_DISTANCES: Distance[] = [
  { name: 'SPRINT', swim: '1000m', bike: '30km', run: '10km' },
  { name: 'MIDDLE', swim: '2000m', bike: '60km', run: '20km' },
  { name: 'LONG', swim: '3000m', bike: '90km', run: '30km' },
];

export const TRITON_FORMATO: Distance[] = [
  { name: 'TRIATHLON', swim: '1000m', bike: '30 km', run: '10 km' },
  { name: 'REVEZAMENTO', swim: '2000m', bike: '60 km', run: '20 km' },
  { name: 'INDIVIUAL', swim: '3000m', bike: '90 km', run: '30 km' },
];

export const EVENTS: CalendarEvent[] = [
  { date: '12 ABR', location: 'Salvador, BA', country: 'Brasil', flag: '🇧🇷', status: 'Confirmed', year: 2026, format: 'Triton 1' },
  { date: 'JUN', location: 'Jiangsu-qidong', country: 'China', flag: '🇨🇳', status: 'Confirmed', year: 2026, format: 'Triton 1' },
  { date: '21-23 AGO', location: 'Rio de Janeiro, RJ', country: 'Brasil', flag: '🇧🇷', status: 'Confirmed', year: 2026, format: 'Triton 3' },
  { date: '06 SET', location: 'Lisboa', country: 'Portugal', flag: '🇵🇹', status: 'Confirmed', year: 2026, format: 'Triton 1' },
  { date: 'MAIO', location: 'EAU', country: 'Emirados Árabes', flag: '🇦🇪', status: 'Planned', year: 2027, format: 'Triton 1' },
  { date: 'AGO', location: 'Irlanda', country: 'Irlanda', flag: '🇮🇪', status: 'Planned', year: 2027, format: 'Triton 1' },
  { date: 'OUT', location: 'Estados Unidos', country: 'EUA', flag: '🇺🇸', status: 'Planned', year: 2027, format: 'Triton 1' },
];