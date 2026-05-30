import { Stat } from "@/types";

// Types for Event Data
export interface EventHero {
  backgroundImage: StaticImageData | string;
  logoImage: StaticImageData | string;
}

export interface POI {
  icon: string;
  title: string;
  desc: string;
}

export interface LogisticItem {
  icon: string;
  title: string;
  detail: string;
  sub: string;
  color: string;
}

export interface ResortInfo {
  image: StaticImageData | string;
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  whatsappLink: string;
}

export interface ScheduleEvent {
  time?: string;
  title: string;
  description?: string;
  location?: string;
  isCutoff?: boolean;
  details?: { label: string; value: string }[];
}

export interface ScheduleDay {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  events: ScheduleEvent[];
}

export interface EventFormatDetail {
  day: string;
  date: string;
  startTime: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  distances: { label: string; val: string; p: number }[];
  stravaId: string;
  details?: string[];
  extraDescription?: string;
}

export interface EventData {
  id: string;
  slug: string;
  language: "pt-BR" | "en";
  title: string;
  subtitle: string;
  location: string;
  venue: string;
  dateText: string;
  fullDateText: string;
  targetDate: string;
  hero: EventHero;
  stats: Stat[];
  registrationLink: string;
  info: {
    title: string;
    subtitle: string;
    description: string;
  };
  scoring: {
    title: string;
    description: string;
  };
  locations: {
    experience: {
      image: StaticImageData | string;
      pois: POI[];
    };
    logistics: LogisticItem[];
    resort: ResortInfo;
  };
  country: string;
  flag: string;
  status: "Confirmed" | "Planned";
  year: number;
  schedule: {
    title: string;
    subtitle: string;
    days: ScheduleDay[];
    importantNote: string;
  };
  formats?: {
    swim: EventFormatDetail;
    bike: EventFormatDetail;
    run: EventFormatDetail;
  };
  stravaIds?: {
    swim: string;
    bike: string;
    run: string;
  };
  
}

// Data Imports
import heroImg from "@/public/images/triton-fotos-prova-bike.jpeg";
import logoHero from "@/public/images/logo_triton3_branco_h.png";
import fotoResort from "@/public/images/foto-portobelo-ampla.jpeg";
import touristCoast from "@/public/images/mangaratiba-coast.png";
import bikePic from "@/public/images/eventos/rio/foto-bike-rio26.jpg";
import swimPic from "@/public/images/triton-fotos-prova-swim.jpeg";
import runPic from "@/public/images/triton-fotos-prova-run.jpeg";
import { StaticImageData } from "next/image";

const COMMON_STATS: Stat[] = [
  {
    value: "3",
    label: "consectutive days",
    description: "Swim - Fri / Bike - Sat / Run - Sun",
  },
  {
    value: "3",
    label: "distances options",
    description: "Sprint - Middle - Long",
  },
  {
    value: "3",
    label: "competition options",
    description:
      "Individual Triathlon / Corporate Relay / Individual Disciplines",
  },
];

export const EVENT_DATA_MAP: Record<string, EventData> = {
  "rio-2026": {
    language: "pt-BR",
    id: "rio-2026",
    slug: "rio-2026",
    title: "Rio de Janeiro",
    subtitle: "TRITON 1",
    location: "Portobello",
    venue: "Portobello, Rio de Janeiro",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Confirmed",
    year: 2026,
    dateText: "AGO 21 . 22 . 23",
    fullDateText: "21, 22 e 23 de Agosto, 2026",
    targetDate: "2026-08-21T08:00:00",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-3-rio-de-janeiro-2026-74526",
    stats: [
      {
        value: "3",
        label: "dias consecutivos",
        description: "Swim - Sex / Bike - Sáb / Run - Dom",
      },
      {
        value: "3",
        label: "opções de distância",
        description: "SPRINT - MIDDLE - LONG",
      },
      {
        value: "3",
        label: "opções de competição",
        description:
          "Triathlon Individual / Revezamento / Modalidades Individuais",
      },
    ],
    info: {
      title: "Um formato inovador",
      subtitle: "Permita-se viver esse desafio",
      description:
        "O TRITON 3 redefine o triathlon tradicional, oferecendo uma experiência surpreendente para quem topa o desafio. Em vez de concentrar as três modalidades em um único dia, cada uma se torna uma prova independente — ao longo de três dias consecutivos: natação na sexta-feira, ciclismo no sábado e corrida no domingo. Esse formato exige mais do que resistência. Ele desafia os atletas a performar no mais alto nível, dia após dia — onde consistência, resiliência e estratégia são levadas ao limite.",
    },
    scoring: {
      title: "Um sistema de pontuação inovador",
      description:
        "O TRITON adota um sistema de pontuação inovador, com peso igual para as três modalidades. No formato TRITON 3, vence o atleta que somar a menor pontuação ao longo dos três dias de competição. A lógica é simples: a colocação em cada prova corresponde diretamente aos pontos (quanto melhor a colocação, menor a pontuação). Esse modelo valoriza consistência e performance contínua nas três disciplinas. Além disso, a prova soma pontos para o ranking global do TRITON World Series e funciona como etapa classificatória para o Campeonato Mundial.",
    },

    locations: {
      experience: {
        image: touristCoast,
        pois: [
          {
            icon: "Compass",
            title: "Explore a Ilha Grande",
            desc: "Eleita uma das ilhas mais bonitas do mundo. Barcos com saídas diárias do centro de Mangaratiba levam você a praias paradisíacas como Lopes Mendes.",
          },
          {
            icon: "Utensils",
            title: "VIDA MARINHA E TRILHAS",
            desc: "Agende localmente passeios para mergulhar em águas calmas e explore trilhas em meio à mata preservada, que levam a cachoeiras escondidas na Serra do Piloto.",
          },
          {
            icon: "Anchor",
            title: "JORNADA GASTRONÔMICA",
            desc: "Experimente frutos do mar frescos e receitas tradicionais nos restaurantes à beira-mar ao longo da costa. Uma ótima dica é o Toca da Garoupa. Ou desfrute das delícias culinárias servidas no próprio Portobello Resort.",
          },
          {
            icon: "Palmtree",
            title: "Portobello Safari",
            desc: "Uma experiência única para toda a família, dentro do próprio Resort Portobello. Visite o maior safári resort do Brasil, com mais de 500 animais em habitats naturais.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "GIG Aeroporto",
          detail: "115 km",
          sub: "~1h 45min",
          color: "from-blue-500/20",
        },
        {
          icon: "Navigation",
          title: "SDU Aeroporto",
          detail: "110 km",
          sub: "~1h 50min",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "Accesso",
          detail: "BR-101",
          sub: "Fácil Conexão",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "Localização",
          detail: "Mangaratiba",
          sub: "Rio de Janeiro",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: fotoResort,
        title: "Portobello Resort",
        description:
          "É o hotel oficial do evento e oferece condições exclusivas para atletas TRITON e suas famílias:",
        benefits: [
          "Todas as refeições incluídas",
          "Gratuidade para 2 crianças de até 7 anos",
          "Opções de pagamento parcelado",
        ],
        buttonText: "Central de Reservas",
        whatsappLink:
          "https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello.",
      },
    },
    schedule: {
      title: "AGENDA",
      subtitle: "Planning your journey",
      days: [
        {
          id: "friday",
          date: "21 Ago",
          title: "Sexta-feira",
          subtitle: "RACE DAY 1 - THE SWIM",
          events: [
            {
              time: "12:00 – 15:00",
              title: "Entrega de Kits",
              location: "Sala Araras, Portobello Resort",
            },
            {
              time: "15:00",
              title: "Abertura Arena TRITON",
              location: "Portobello Resort",
            },
            {
              time: "15:15 – 15:30",
              title: "Concentração largada Natação",
              location: "Praia do Portobello Resort",
            },
            { time: "15:33", title: "Largada SPRINT" },
            { time: "15:36", title: "Largada MIDDLE" },
            { time: "15:39", title: "Largada LONG" },
            {
              isCutoff: true,
              title: "Tempos de Corte da Prova",
              details: [
                { label: "SPRINT", value: "40 min" },
                { label: "MIDDLE", value: "80 min" },
                { label: "LONG", value: "120 min" },
              ],
            },
            {
              time: "17:15 – 18:00",
              title: "Premiação Natação",
              location: "Portobello Resort",
            },
          ],
        },
        {
          id: "saturday",
          date: "22 Ago",
          title: "Sábado",
          subtitle: "RACE DAY 2 – THE BIKE",
          events: [
            {
              time: "06:00 – 07:30",
              title: "Entrega de kit do ciclismo",
              location: "Parque de Exposições de Mangaratiba (EXPO)",
            },
            {
              time: "06:30 – 07:45",
              title: "Concentração largada Ciclismo",
              location:
                "Serra do Piloto em frente ao Parque de Exposições de Mangaratiba (EXPO)",
            },
            {
              time: "08:00",
              title: "Largada Prova Ciclismo",
              location:
                "Serra do Piloto em frente ao Parque de Exposições de Mangaratiba (EXPO)",
            },
            {
              isCutoff: true,
              title: "Tempos de Corte da Prova",
              details: [
                { label: "SPRINT", value: "2h" },
                { label: "MIDDLE", value: "4h" },
                { label: "LONG", value: "6h" },
              ],
            },
            {
              time: "08:30",
              title: "Abertura Arena TRITON",
              location: "Portobello Resort",
            },
            {
              time: "15:00 – 16:00",
              title: "Premiação Ciclismo",
              location: "Portobello Resort",
            },
          ],
        },
        {
          id: "sunday",
          date: "23 Ago",
          title: "Domingo",
          subtitle: "RACE DAY 3 - THE RUN",
          events: [
            {
              time: "06:00 – 06:45",
              title: "Entrega de kit corrida",
              location: "Sala Araras, Portobelo Resort",
            },
            {
              time: "07:00",
              title: "Largada Prova Corrida",
              location: "Portobello Resort",
            },
            {
              isCutoff: true,
              title: "Tempos de Corte da Prova",
              details: [
                { label: "SPRINT", value: "1h15" },
                { label: "MIDDLE", value: "2h30" },
                { label: "LONG", value: "3h45" },
              ],
            },
            {
              time: "10:50 – 11:50",
              title: "Premiação Corrida",
              location: "Portobello Resort",
            },
            {
              time: "12:00 – 13:00",
              title: "Premiação TRITON Geral",
              location: "Portobello Resort",
            },
            {
              time: "13:00 – 14:00",
              title: "Premiação TRITON Age Group",
              location: "Portobello Resort",
            },
          ],
        },
      ],
      importantNote:
        "Todos os horários estão sujeitos a alteração sem aviso prévio devido a circunstâncias imprevistas. Os horários e a ordem de largada também poderão ser ajustados. Recomendamos acompanhar a programação regularmente para se manter atualizado sobre possíveis mudanças de última hora.",
    },
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPic,
        title: "Natação",
        description:
          "A natação acontece na praia do Portobello Resort, a poucos metros da arena montada no gramado. O mar abrigado costuma oferecer condições ideais, com boa visibilidade e pouca correnteza.\n\nA largada será em ondas, iniciando pelo SPRINT, seguido do MIDDLE e do LONG, com saída diretamente da areia. O percurso será delimitado por boias e realizado em voltas:\n\nSPRINT — 1 volta\nMIDDLE — 2 voltas\nLONG — 3 voltas\n\nAs distâncias MIDDLE e LONG contam com saídas australianas, adicionando ainda mais dinâmica à prova:\n\nMIDDLE — 1 saída\nLONG — 2 saídas\n\nTodos os atletas que concluírem a prova de natação receberão medalha de finisher, e os cinco primeiros colocados, masculino e feminino, de cada distância serão premiados.",
        distances: [
          { label: "Sprint", val: "1000m", p: 33 },
          { label: "Middle", val: "2000m", p: 66 },
          { label: "Long", val: "3000m", p: 100 },
        ],

        stravaId: "3489878661225659880",
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePic,
        title: "Ciclismo",
        description:
          "O percurso de ciclismo acontece na Serra do Piloto, uma das rotas mais icônicas para ciclistas no Rio de Janeiro. A prova larga em frente ao Parque de Exposições de Mangaratiba (área da Expo), onde há estacionamento seguro disponível.\n\nUm ponto de apoio com hidratação e special needs está disponível em Macundu, a aproximadamente 18 km da largada.",
        distances: [
          { label: "Sprint", val: "30km", p: 33 },
          { label: "Middle", val: "60km", p: 66 },
          { label: "Long", val: "90km", p: 100 },
        ],
        stravaId: "3489885320405280498",
        details: [
          "Retorno Sprint: ~4,5 km após Macundu",
          "Hidratação Middle & Long: ~10 km após Macundu",
          "Retorno Middle & Long (Rio Claro): ~7,5 km após o ponto de hidratação",
          "Chegada: ~3 km após Macundu (sentido Mangaratiba)",
          "Descida neutralizada: ~14 km",
          "Vácuo liberado (Proibido bike de TT)",
        ],
      },
      run: {
        day: "Dia 3",
        date: "23 de Agosto (domingo)",
        startTime: "08:00",
        image: runPic,
        title: "Corrida",
        description:
          "O percurso de corrida tem largada e chegada na arena do evento, localizada no Portobello Resort. Todo o trajeto ocorre dentro do complexo do resort, oferecendo um cenário privilegiado e visualmente marcante.\n\nO percurso é realizado em voltas: SPRINT (1 volta), MIDDLE (2 voltas) e LONG (3 voltas). Postos de hidratação estão disponíveis a cada 2,5 km, atendendo os atletas nos dois sentidos.",
        distances: [
          { label: "Sprint", val: "10km", p: 33 },
          { label: "Middle", val: "20km", p: 66 },
          { label: "Long", val: "30km", p: 100 },
        ],
        stravaId: "3489885320403923698",
      },
    },
    
  },
  "salvador-2027": {
    id: "salvador-2027",
    slug: "salvador-2027",
    title: "Salvador",
    subtitle: "TRITON 1",
    location: "Salvador",
    venue: "Salvador, Bahia",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Confirmed",
    year: 2027,
    dateText: "ABR 11",
    fullDateText: "11 de Abril, 2027",
    targetDate: "2027-04-11T08:00:00",
    language: "pt-BR",
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-1-salvador-2027-75925",
    hero: {
      backgroundImage: heroImg, // Placeholder
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "The Ultimate Challenge in Bahia",
      subtitle: "Race through History",
      description:
        "Experience the magic of Salvador, where history meets endurance. Our TRITON 1 format brings all the excitement into one epic day of racing along the beautiful Brazilian coast.",
    },
    scoring: {
      title: "SCORING IN THE HEART OF BRAZIL",
      description:
        "Compete for points in the global ranking while enjoying the unique energy of Salvador.",
    },
    locations: {
      experience: {
        image: touristCoast, // Placeholder
        pois: [
          {
            icon: "Compass",
            title: "Pelourinho",
            desc: "The historic heart of Salvador, famous for its colorful colonial architecture and vibrant culture.",
          },
          {
            icon: "Utensils",
            title: "Bahian Cuisine",
            desc: "Try the famous Acarajé and Moqueca in the local markets.",
          },
          {
            icon: "Anchor",
            title: "Farol da Barra",
            desc: "One of Brazil's most iconic lighthouses, perfect for sunset views.",
          },
          {
            icon: "Palmtree",
            title: "Beach Culture",
            desc: "Enjoy the warm waters of Porto da Barra and Flamengo beaches.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "SSA Airport",
          detail: "25 km",
          sub: "~30min",
          color: "from-blue-500/20",
        },
        {
          icon: "Navigation",
          title: "City Center",
          detail: "5 km",
          sub: "~10min",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "Access",
          detail: "Litoral Norte",
          sub: "Scenic Drive",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "Location",
          detail: "Bahia Coast",
          sub: "Salvador",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: fotoResort, // Placeholder
        title: "Salvador Official Hotel",
        description:
          "Stay in the heart of the action with our partner hotels in Salvador, offering special rates for TRITON athletes.",
        benefits: [
          "Proximity to start",
          "Athlete Breakfast",
          "Late Checkout",
          "Bike Storage",
        ],
        buttonText: "Contact Reservations",
        whatsappLink: "https://api.whatsapp.com/send?phone=55...",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "Race Day Timeline",
      days: [], // To be populated
      importantNote:
        "Note: Salvador event is a TRITON 1 format (one-day event).",
    },
  },
  "qindong-2026": {
    id: "qindong-2026",
    slug: "qindong-2026",
    title: "Jiangsu-qidong",
    subtitle: "TRITON 1",
    location: "Qidong",
    venue: "Qidong, China",
    country: "China",
    flag: "🇨🇳",
    status: "Confirmed",
    year: 2026,
    dateText: "OCT 07",
    fullDateText: "October 7, 2026",
    targetDate: "2026-10-07T08:00:00",
    language: "en",
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-1-salvador-2027-75925",
    hero: {
      backgroundImage: heroImg, // Placeholder
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "Experience the Orient Coast",
      subtitle: "Where Rivers meet the Sea",
      description:
        "Qidong offers a unique racing environment at the convergence of major waterways. Fast, flat, and visually stunning.",
    },
    scoring: {
      title: "GLOBAL POINTS IN THE EAST",
      description:
        "Earn your spot in the World Championship at our premier Asian series stop.",
    },
    locations: {
      experience: {
        image: touristCoast, // Placeholder
        pois: [
          {
            icon: "Compass",
            title: "Yuantuojiao Resort",
            desc: "The easternmost point of Jiangsu Province, where the Yangtze River, Yellow Sea, and East China Sea meet.",
          },
          {
            icon: "Utensils",
            title: "Seafood Festival",
            desc: "Qidong is famous for its fresh seafood and coastal delicacies.",
          },
          {
            icon: "Anchor",
            title: "Golden Beach",
            desc: "A beautiful coastal area perfect for sports and recreation.",
          },
          {
            icon: "Palmtree",
            title: "Coastal Parks",
            desc: "Modern parks and green areas along the new coastline.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "PVG Airport",
          detail: "100 km",
          sub: "~1h 30min",
          color: "from-blue-500/20",
        },
        {
          icon: "Navigation",
          title: "Shanghai",
          detail: "90 km",
          sub: "~1h 15min",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "Bridge Access",
          detail: "G40 Highway",
          sub: "Direct Connection",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "Location",
          detail: "Jiangsu",
          sub: "China",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: fotoResort, // Placeholder
        title: "Qidong Partner Hotel",
        description:
          "Official accommodation partner in Qidong, providing luxury stay for international athletes.",
        benefits: [
          "English Speaking Staff",
          "Sports Nutrition",
          "Event Transfer",
          "Recovery Zone",
        ],
        buttonText: "Book Now",
        whatsappLink: "#",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "Race Day Timeline",
      days: [], // To be populated
      importantNote: "Note: Qidong event is a TRITON 1 format.",
    },
  },
  "lisboa-2026": {
    id: "lisboa-2026",
    slug: "lisboa-2026",
    title: "Lisboa",
    subtitle: "TRITON 1",
    location: "Lisboa",
    venue: "Lisbon, Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    status: "Confirmed",
    year: 2026,
    dateText: "SEP 06",
    fullDateText: "September 6, 2026",
    targetDate: "2026-09-06T08:00:00",
    language: "en",
    registrationLink: "#",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "Lisbon Triton",
      subtitle: "Race in the heart of Portugal",
      description:
        "Experience the beautiful coast of Lisbon in this epic TRITON 1 event.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    locations: {
      experience: {
        image: touristCoast,
        pois: [],
      },
      logistics: [],
      resort: {
        image: fotoResort,
        title: "Lisbon Partner Hotel",
        description: "Official accommodation in Lisbon.",
        benefits: [],
        buttonText: "Book Now",
        whatsappLink: "#",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "Race Day Timeline",
      days: [],
      importantNote: "",
    },
  },
  "uae-2027": {
    id: "uae-2027",
    slug: "uae-2027",
    title: "UAE",
    subtitle: "TRITON 1",
    location: "UAE",
    venue: "United Arab Emirates",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    status: "Planned",
    year: 2027,
    dateText: "MAY",
    fullDateText: "May, 2027",
    targetDate: "2027-05-01T08:00:00",
    language: "en",
    registrationLink: "#",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "UAE Triton",
      subtitle: "The Desert Challenge",
      description: "Coming soon to the United Arab Emirates.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    locations: {
      experience: {
        image: touristCoast,
        pois: [],
      },
      logistics: [],
      resort: {
        image: fotoResort,
        title: "UAE Partner Hotel",
        description: "Official accommodation.",
        benefits: [],
        buttonText: "Contact Us",
        whatsappLink: "#",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "TBA",
      days: [],
      importantNote: "",
    },
  },
  "ireland-2027": {
    id: "ireland-2027",
    slug: "ireland-2027",
    title: "Ireland",
    subtitle: "TRITON 1",
    location: "Ireland",
    venue: "Ireland",
    country: "Ireland",
    flag: "🇮🇪",
    status: "Planned",
    year: 2027,
    dateText: "AUG",
    fullDateText: "August, 2027",
    targetDate: "2027-08-01T08:00:00",
    language: "en",
    registrationLink: "#",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "Ireland Triton",
      subtitle: "The Emerald Isle Challenge",
      description: "Experience the rugged beauty of Ireland.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    locations: {
      experience: {
        image: touristCoast,
        pois: [],
      },
      logistics: [],
      resort: {
        image: fotoResort,
        title: "Ireland Partner Hotel",
        description: "Official accommodation.",
        benefits: [],
        buttonText: "Contact Us",
        whatsappLink: "#",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "TBA",
      days: [],
      importantNote: "",
    },
  },
  "usa-2027": {
    id: "usa-2027",
    slug: "usa-2027",
    title: "USA",
    subtitle: "TRITON 1",
    location: "USA",
    venue: "USA",
    country: "USA",
    flag: "🇺🇸",
    status: "Planned",
    year: 2027,
    dateText: "OCT",
    fullDateText: "October, 2027",
    targetDate: "2027-10-01T08:00:00",
    language: "en",
    registrationLink: "#",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "USA Triton",
      subtitle: "The American Dream",
      description: "TRITON comes to the United States.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    locations: {
      experience: {
        image: touristCoast,
        pois: [],
      },
      logistics: [],
      resort: {
        image: fotoResort,
        title: "USA Partner Hotel",
        description: "Official accommodation.",
        benefits: [],
        buttonText: "Contact Us",
        whatsappLink: "#",
      },
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "TBA",
      days: [],
      importantNote: "",
    },
  },
};
