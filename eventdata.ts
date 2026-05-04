import { Stat } from "@/types";

// Types for Event Data
export interface EventHero {
  backgroundImage: any;
  logoImage: any;
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
  image: any;
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

export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  venue: string;
  dateText: string;
  fullDateText: string;
  targetDate: string;
  hero: EventHero;
  stats: Stat[];
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
    coastExperience: {
      image: any;
      pois: POI[];
    };
    logistics: LogisticItem[];
    resort: ResortInfo;
  };
  schedule: {
    title: string;
    subtitle: string;
    days: ScheduleDay[];
    importantNote: string;
  };
}

// Data Imports
import heroImg from "@/public/images/triton-fotos-prova-bike.jpeg";
import logoHero from "@/public/images/logo_triton3_branco_h.png";
import fotoResort from "@/public/images/foto-portobelo-ampla.jpeg";
import touristCoast from "@/public/images/mangaratiba-coast.png";

const COMMON_STATS: Stat[] = [
  { value: "3", label: "consectutive days", description: "Swim - Fri / Bike - Sat / Run - Sun" },
  { value: "3", label: "distances options", description: "Sprint - Middle - Long" },
  { value: "3", label: "competition options", description: "Individual Triathlon / Corporate Relay / Individual Disciplines" },
];

export const EVENT_DATA_MAP: Record<string, EventData> = {
  "rio-2026": {
    id: "rio-2026",
    slug: "rio-2026",
    title: "Rio de Janeiro",
    subtitle: "TRITON 1",
    location: "Portobello",
    venue: "Portobello, Rio de Janeiro",
    dateText: "AGO 21 . 22 . 23",
    fullDateText: "21, 22 e 23 de Agosto, 2026",
    targetDate: "2026-08-21T08:00:00",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "An innovative format",
      subtitle: "Beyond expectations starts here",
      description: "TRITON 3 redefines the traditional triathlon. Instead of compressing all three disciplines into a single day, each becomes its own race—across three consecutive days. Swim on Friday. Bike on Saturday. Run on Sunday. This format demands more than endurance. It challenges athletes to perform at their peak, day after day—where consistency, resilience, and strategy are pushed to the limit."
    },
    scoring: {
      title: "INNOVATIVE SCORING SYSTEM",
      description: "Each discipline carries equal weight, rewarding athletes who perform consistently across all three. This race also contributes points to the TRITON World global ranking and serves as a qualifying event for the World Championship."
    },
    locations: {
      coastExperience: {
        image: touristCoast,
        pois: [
          { icon: "Compass", title: "Explore Ilha Grande", desc: "Voted one of the most beautiful islands in the world. Daily boat shuttles take you to crystal clear beaches like Lopes Mendes." },
          { icon: "Utensils", title: "Gastronomic Journey", desc: "Experience fresh seafood delicacies and traditional 'Caiçara' recipes at waterfront restaurants along the coast." },
          { icon: "Anchor", title: "Marine Life & Trails", desc: "Dive into calm waters and explore ancient forest trails leading to hidden waterfalls and the Pico da Marambaia." },
          { icon: "Palmtree", title: "Portobello Safari", desc: "A unique experience for families: visit Brazil's largest resort safari with over 500 animals in natural habitats." },
        ]
      },
      logistics: [
        { icon: "Plane", title: "GIG Airport", detail: "115 km", sub: "~1h 45min", color: "from-blue-500/20" },
        { icon: "Navigation", title: "SDU Airport", detail: "110 km", sub: "~1h 50min", color: "from-green-500/20" },
        { icon: "Car", title: "Access", detail: "BR-101", sub: "Easy Connection", color: "from-purple-500/20" },
        { icon: "MapPin", title: "Location", detail: "Costa Verde", sub: "Rio de Janeiro", color: "from-red-500/20" },
      ],
      resort: {
        image: fotoResort,
        title: "Portobello Resort & Safari",
        description: "It is the official event hotel and offers exclusive conditions for TRITON athletes and their families. Wake up just steps away from the start line and enjoy world-class amenities during your stay.",
        benefits: ["Luxury Accommodation", "Full Board Service", "Exclusive Athlete Area", "Private Beach Arena"],
        buttonText: "Contact Reservations",
        whatsappLink: "https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello."
      }
    },
    schedule: {
      title: "AGENDA",
      subtitle: "Planning your journey",
      days: [
        {
          id: "thursday",
          date: "Aug 20th",
          title: "Thursday",
          subtitle: "Registration",
          events: [
            { time: "8:00 am – 7:00 pm", title: "RACE KIT PICK-UP", description: "Race Office", location: "TBC" }
          ]
        },
        {
          id: "friday",
          date: "Aug 21st",
          title: "Friday",
          subtitle: "RACE DAY 1 - THE SWIM",
          events: [
            { time: "12:00 pm – 6:00 pm", title: "Race Office (Araras Room)", location: "Portobello Resort" },
            { time: "3:00 pm", title: "Official Opening of the “TRITON Arena”", location: "Portobello Resort" },
            { time: "3:15 pm – 3:30 pm", title: "Swim Start Line Staging", location: "Beach at Portobello Resort" },
            { time: "3:33 pm", title: "SPRINT Swim Start" },
            { time: "3:36 pm", title: "MIDDLE Swim Start" },
            { time: "3:39 pm", title: "LONG Swim Start" },
            { isCutoff: true, title: "CUT-OFF TIMES", details: [{ label: "SPRINT", value: "40 min" }, { label: "MIDDLE", value: "80 min" }, { label: "LONG", value: "120 min" }] },
            { time: "5:00 pm – 6:00 pm", title: "Swim Awards Ceremony", location: "TRITON Arena – Portobello Resort" }
          ]
        },
        {
          id: "saturday",
          date: "Aug 22nd",
          title: "Saturday",
          subtitle: "RACE DAY 2 – THE BIKE",
          events: [
            { time: "6:00 am – 7:30 am", title: "Bike Race Kit Pick-up + Bag Drop", description: "For those who didn't pick up on Friday", location: "Mangaratiba Exhibition Park (EXPO)" },
            { time: "6:30 am – 7:45 am", title: "Bike Start Line Staging", location: "Serra do Piloto in front of the Mangaratiba Exhibition Park (EXPO)" },
            { time: "8:00 am", title: "Bike Race Start", location: "Serra do Piloto in front of the Mangaratiba Exhibition Park (EXPO)" },
            { isCutoff: true, title: "CUT-OFF TIMES", details: [{ label: "SPRINT", value: "2h" }, { label: "MIDDLE", value: "4h" }, { label: "LONG", value: "6h" }] },
            { time: "8:30 am", title: "TRITON Arena Opens", location: "Portobello Resort" },
            { time: "3:00 pm – 4:00 pm", title: "Kids Race", location: "Portobello Resort" },
            { time: "4:00 pm – 5:00 pm", title: "Bike Awards Ceremony", location: "TRITON Arena – Portobello Resort" },
            { time: "5:00 pm – 6:30 pm", title: "TRITON Talks", location: "TRITON Arena – Portobello Resort" }
          ]
        },
        {
          id: "sunday",
          date: "Aug 23rd",
          title: "Sunday",
          subtitle: "RACE DAY 3 - THE RUN",
          events: [
            { time: "6:00 am – 6:45 am", title: "Run Race Kit Pick-up + Bag Drop", description: "For those who didn't pick up previously", location: "Portobello Resort" },
            { time: "7:00 am", title: "Run Race Start", location: "Portobello Resort" },
            { isCutoff: true, title: "CUT-OFF TIMES", details: [{ label: "SPRINT", value: "1h15" }, { label: "MIDDLE", value: "2h30" }, { label: "LONG", value: "3h45" }] },
            { time: "09:00 am – 10:30 am", title: "Live Show (Arena TRITON)" },
            { time: "10:50 am – 11:50 am", title: "Run Awards Ceremony" },
            { time: "12:00 pm – 1:00 pm", title: "Overall TRITON Award" },
            { time: "1:00 pm – 2:00 pm", title: "TRITON Age Group Awards", location: "TRITON Arena – Portobello Resort" },
            { time: "3:00 pm", title: "Final Closing" }
          ]
        }
      ],
      importantNote: "Important Note: All schedules are subject to change without prior notice due to unforeseen circumstances. Race start times and start order may also be adjusted. Please check the race program regularly to stay informed of any last-minute updates."
    }
  },
  "salvador-2027": {
    id: "salvador-2027",
    slug: "salvador-2027",
    title: "Salvador",
    subtitle: "TRITON 1",
    location: "Salvador",
    venue: "Salvador, Bahia",
    dateText: "ABR 11",
    fullDateText: "11 de Abril, 2027",
    targetDate: "2027-04-11T08:00:00",
    hero: {
      backgroundImage: heroImg, // Placeholder
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "The Ultimate Challenge in Bahia",
      subtitle: "Race through History",
      description: "Experience the magic of Salvador, where history meets endurance. Our TRITON 1 format brings all the excitement into one epic day of racing along the beautiful Brazilian coast."
    },
    scoring: {
      title: "SCORING IN THE HEART OF BRAZIL",
      description: "Compete for points in the global ranking while enjoying the unique energy of Salvador."
    },
    locations: {
      coastExperience: {
        image: touristCoast, // Placeholder
        pois: [
          { icon: "Compass", title: "Pelourinho", desc: "The historic heart of Salvador, famous for its colorful colonial architecture and vibrant culture." },
          { icon: "Utensils", title: "Bahian Cuisine", desc: "Try the famous Acarajé and Moqueca in the local markets." },
          { icon: "Anchor", title: "Farol da Barra", desc: "One of Brazil's most iconic lighthouses, perfect for sunset views." },
          { icon: "Palmtree", title: "Beach Culture", desc: "Enjoy the warm waters of Porto da Barra and Flamengo beaches." },
        ]
      },
      logistics: [
        { icon: "Plane", title: "SSA Airport", detail: "25 km", sub: "~30min", color: "from-blue-500/20" },
        { icon: "Navigation", title: "City Center", detail: "5 km", sub: "~10min", color: "from-green-500/20" },
        { icon: "Car", title: "Access", detail: "Litoral Norte", sub: "Scenic Drive", color: "from-purple-500/20" },
        { icon: "MapPin", title: "Location", detail: "Bahia Coast", sub: "Salvador", color: "from-red-500/20" },
      ],
      resort: {
        image: fotoResort, // Placeholder
        title: "Salvador Official Hotel",
        description: "Stay in the heart of the action with our partner hotels in Salvador, offering special rates for TRITON athletes.",
        benefits: ["Proximity to start", "Athlete Breakfast", "Late Checkout", "Bike Storage"],
        buttonText: "Contact Reservations",
        whatsappLink: "https://api.whatsapp.com/send?phone=55..."
      }
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "Race Day Timeline",
      days: [], // To be populated
      importantNote: "Note: Salvador event is a TRITON 1 format (one-day event)."
    }
  },
  "qindong-2026": {
    id: "qindong-2026",
    slug: "qindong-2026",
    title: "Jiangsu-qidong",
    subtitle: "TRITON 1",
    location: "Qidong",
    venue: "Qidong, China",
    dateText: "OCT 07",
    fullDateText: "October 7, 2026",
    targetDate: "2026-10-07T08:00:00",
    hero: {
      backgroundImage: heroImg, // Placeholder
      logoImage: logoHero,
    },
    stats: COMMON_STATS,
    info: {
      title: "Experience the Orient Coast",
      subtitle: "Where Rivers meet the Sea",
      description: "Qidong offers a unique racing environment at the convergence of major waterways. Fast, flat, and visually stunning."
    },
    scoring: {
      title: "GLOBAL POINTS IN THE EAST",
      description: "Earn your spot in the World Championship at our premier Asian series stop."
    },
    locations: {
      coastExperience: {
        image: touristCoast, // Placeholder
        pois: [
          { icon: "Compass", title: "Yuantuojiao Resort", desc: "The easternmost point of Jiangsu Province, where the Yangtze River, Yellow Sea, and East China Sea meet." },
          { icon: "Utensils", title: "Seafood Festival", desc: "Qidong is famous for its fresh seafood and coastal delicacies." },
          { icon: "Anchor", title: "Golden Beach", desc: "A beautiful coastal area perfect for sports and recreation." },
          { icon: "Palmtree", title: "Coastal Parks", desc: "Modern parks and green areas along the new coastline." },
        ]
      },
      logistics: [
        { icon: "Plane", title: "PVG Airport", detail: "100 km", sub: "~1h 30min", color: "from-blue-500/20" },
        { icon: "Navigation", title: "Shanghai", detail: "90 km", sub: "~1h 15min", color: "from-green-500/20" },
        { icon: "Car", title: "Bridge Access", detail: "G40 Highway", sub: "Direct Connection", color: "from-purple-500/20" },
        { icon: "MapPin", title: "Location", detail: "Jiangsu", sub: "China", color: "from-red-500/20" },
      ],
      resort: {
        image: fotoResort, // Placeholder
        title: "Qidong Partner Hotel",
        description: "Official accommodation partner in Qidong, providing luxury stay for international athletes.",
        benefits: ["English Speaking Staff", "Sports Nutrition", "Event Transfer", "Recovery Zone"],
        buttonText: "Book Now",
        whatsappLink: "#"
      }
    },
    schedule: {
      title: "SCHEDULE",
      subtitle: "Race Day Timeline",
      days: [], // To be populated
      importantNote: "Note: Qidong event is a TRITON 1 format."
    }
  }
};
