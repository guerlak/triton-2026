import { Stat, TestimonialProps } from "@/types";

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
  image?: StaticImageData | StaticImport | string | null | undefined;
  video?: string | null | undefined;
  title: string;
  description: string;
  distances: { label: string; val: string; p: number }[];
  stravaIds?: { sprint:string, middle:string, long:string };
  stravaId?: string;
  details?: string[];
  extraDescription?: string;
}

export interface EventData {
  id: string;
  slug: string;
  language: "pt-BR" | "en";
  eventFormat: "triton1" | "triton3";
  title: string;
  subtitle: string;
  location: string;
  venue: string;
  dateText: string;
  fullDateText: string;
  targetDate: string;
  hero: EventHero;
  startListApiUrl?: string;
  liveResultsUrl?: string;
  registrationLink: string;
  isRegistrationClosed?: boolean;
  raceGuideLink?: string;
  country: string;
  flag: string;
  status: "Confirmed" | "Planned" | "Completed";
  year: number;
  extraEvent?: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    badge: string;
  };
  info: {
    title: string;
    subtitle: string;
    description: string;
  };
  scoring: {
    title: string;
    description: string;
  };
  schedule: {
    title: string;
    subtitle: string;
    days: ScheduleDay[];
    importantNote: string;
  };
  formats: {
    swim: EventFormatDetail;
    bike: EventFormatDetail;
    run: EventFormatDetail;
    distanceTable: Array<{ name: string; swim: string; bike: string; run: string }>;
    disableMixMatch?: boolean;
  };
  locations: {
    description: string;
    experience: {
      image: StaticImageData | string;
      pois: POI[];
    };
    logistics: LogisticItem[];
    resort: ResortInfo;
  };
  testimonial?: {
    testimonials: TestimonialProps[];
    youtubeSrc: string;
  };
  partners: Array<{
    name: string;
    logo: StaticImageData | string;
    url: string;
  }>;
  afterMovie?: {
    youtubeSrc: string;
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

//imports SALVADOR
import heroImgSalvador from "@/public/images/eventos/salvador-2027/hero-salvador.jpeg";
import logoSalvador from "@/public/images/eventos/salvador-2027/logo-salvador.png"
import bikePicSalvador from "@/public/images/eventos/salvador-2027/bike-salvador.jpeg"
import runPicSalvador from "@/public/images/eventos/salvador-2027/run-salvador.jpeg"
import salvadorExperienceImage from "@/public/images/eventos/salvador-2027/salvador-experience.jpeg"
import fotoResortSalvador from "@/public/images/eventos/salvador-2027/salvador-hotel.jpeg"


//imports LISBOA
import heroImgLisboa from "@/public/images/eventos/lisboa-2026/hero-lisboa.jpeg";
import logoLisboa from "@/public/images/eventos/lisboa-2026/triton-lisboa-logo.png"
import bikePicLisboa from "@/public/images/eventos/lisboa-2026/bike-lisboa.jpeg"
import runPicLisboa from "@/public/images/eventos/lisboa-2026/run-lisboa.jpeg"
import swimPicLisboa from "@/public/images/eventos/lisboa-2026/swim-lisboa.jpeg"
import lisboaExperienceImage from "@/public/images/eventos/lisboa-2026/lisboa-experience.jpeg"
import fotoResortLisboa from "@/public/images/eventos/lisboa-2026/hotel-lisboa.jpeg"

//imports qdong
import heroImgQidong from "@/public/images/eventos/qidong/triton1-qidong-hero.jpeg"
import logoQidong from "@/public/images/eventos/qidong/logo-qidong.png"
import qidongHotel from "@/public/images/eventos/qidong/evergrande-hotel.jpeg"
import landScapeQidong from "@/public/images/eventos/qidong/landscape-qidong.jpeg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { TruckElectric } from "lucide-react";
import { tr } from "framer-motion/client";

export const EVENT_DATA_MAP: Record<string, EventData> = {
  "salvador-2026": {
    id: "salvador-2026",
    slug: "salvador-2026",
    eventFormat: "triton1",
    title: "Salvador",
    subtitle: "TRITON 1",
    location: "Piatã, Bahia",
    venue: "Piatã, Salvador, Bahia",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Completed",
    year: 2026,
    dateText: "ABR 12",
    fullDateText: "12 de Abril, 2026",
    targetDate: "2026-06-22T08:00:00",
    language: "pt-BR",
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-1-salvador-86852",
    startListApiUrl: "https://api.raceresult.com/371805/RQDKNSO0GU02BW4IF4X1G7AF12S073FW",
    liveResultsUrl: "https://resultscui.active.com/events/TRITONSALVADOR2026",
    hero: {
      backgroundImage: heroImgSalvador, // Placeholder
      logoImage: logoSalvador,
    },
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
      description: "Planeje sua viagem e aproveite ao máximo sua jornada no TRITON. Localizada em um dos destinos mais vibrantes e históricos do Brasil, Salvador combina praias, cultura, gastronomia e energia única, tornando a experiência do TRITON ainda mais inesquecível.",
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
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPic,
        title: "Natação",
        description:
          "A natação acontece na praia de Placaford, a poucos metros da arena montada na praça de Piatã. A largada será em ondas, iniciando pelo SPRINT, seguido do MIDDLE e do LONG, com saída diretamente da areia. O percurso será delimitado por bóias e realizado em voltas: SPRINT — 1 volta MIDDLE — 2 voltas LONG — 3 voltas As distâncias MIDDLE e LONG contam com saídas australianas, adicionando ainda mais dinâmica à prova: MIDDLE — 1 saída LONG — 2 saídas Informações adicionais: Touca oficial obrigatória. Proibido usar equipamentos de auxílio (exceto óculos; wetsuit apenas se liberado). Wetsuit permitido se a água estiver  < 22ºC (quando liberado). Bóia de segurança permitida somente no ⚪ SPRINT (corda até 40 cm).",
        distances: [
          { label: "Sprint", val: "500m", p: 33 },
          { label: "Middle", val: "1000m", p: 66 },
          { label: "Long", val: "1500m", p: 100 },
        ],

        stravaIds: { sprint:"442206601619587448", middle:"3442186454436027514", long:"3442206601619587448" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePic,
        title: "Ciclismo",
        description:
          "Saindo da área de transição, localizada a poucos metros da arena de prova, o triatleta seguirá em direção à Av. Orlando Gomes, passando pela Av. 29 de Março e realizando o retorno na Via Regional. O percurso será realizado em voltas: SPRINT — 1 volta MIDDLE — 2 voltas LONG — 3 voltas. Haverá um ponto de abastecimento na entrada da Av. Orlando Gomes. Nesse mesmo local, também estará disponível um ponto de apoio mecânico. Informações adicionais: Bikes permitidas: TT, speed ou MTB. Capacete duro e afivelado obrigatório sempre com a bike. Regra de vácuo: 12 m; 25s para ultrapassagem (infração = cartão azul). Proibido descartar lixo fora das áreas indicadas (cartão azul).",
        distances: [
          { label: "Sprint", val: "20km", p: 33 },
          { label: "Middle", val: "40km", p: 66 },
          { label: "Long", val: "60km", p: 100 },
        ],
        stravaIds: { sprint:"3442190057377176544 ", middle:"3514206730520669716", long:"3514202065593315860" },
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
        description: "Caracterizado por um percurso totalmente plano e 100% à beira-mar, pela orla da Praia de Piatã, o trajeto de corrida proporciona uma experiência dinâmica e com grande presença de público ao longo do caminho, permitindo que os atletas recebam apoio e torcida de perto durante toda a prova. Ao sair da área de transição, o triatleta seguirá em direção ao ponto de retorno, localizado na Av. Oceânica, após a 3ª ponte. Serão dois pontos de abastecimento, sendo um logo na saída da transição e outro a 500m antes do retorno.O percurso será realizado em voltas: SPRINT — 1 volta, MIDDLE — 2 voltas, LONG — 3 voltas. Com altimetria plana, esse é um percurso ideal para manter um ritmo forte e buscar velocidade nos quilômetros finais da prova. Informações adicionais: Número de peito obrigatório e visível na frente. Atletas masculinos: camiseta obrigatória (sem camiseta = desclassificação). Proibido fones/equipamentos de som (cartão amarelo e pode evoluir para desclassificação).",
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "15km", p: 100 },
        ],
        stravaIds: { sprint:"3442184922483070074", middle:"3514202065593315860", long:"3514203195016413614" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "500m",
        "bike": "20km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1000m",
        "bike": "40km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1500m",
        "bike": "60km",
        "run": "15km"
      }
    ],
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
    partners: [
      {
        name: "Prouder",
        logo: "/images/partners/prouder.png",
        url: "#"
      },
    ]
  },
  "rio-2026": {
    slug: "rio-2026",
    language: "pt-BR",
    id: "rio-2026",
    eventFormat: "triton3",
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
    liveResultsUrl: "https://www.eicrono.com.br/triton/index_triton3.html",
    raceGuideLink: "/docs/race-guide/guia_do_atleta_rio26.pdf",
    hero: {
      backgroundImage: heroImg,
      logoImage: logoHero,
    },
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-3-rio-de-janeiro-2026-74526",
    info: {
      title: "Um formato inovador",
      subtitle: "Permita-se viver esse desafio",
      description:
        "O TRITON 3 redefine o triathlon tradicional, oferecendo uma experiência surpreendente para quem topa o desafio. Em vez de concentrar as três modalidades em um único dia, cada uma se torna uma prova independente — ao longo de três dias consecutivos. Esse formato exige mais do que resistência. Ele desafia os atletas a performar no mais alto nível, dia após dia — onde consistência, resiliência e estratégia são levadas ao limite.",
    },
    scoring: {
      title: "Um sistema de pontuação inovador",
      description:
        "O TRITON adota um sistema de pontuação inovador, com peso igual para as três modalidades. No formato TRITON 3, vence o atleta que somar a menor pontuação ao longo dos três dias de competição. A lógica é simples: a colocação em cada prova corresponde diretamente aos pontos (quanto melhor a colocação, menor a pontuação). Esse modelo valoriza consistência e performance contínua nas três disciplinas. Além disso, a prova soma pontos para o ranking global do TRITON World Series e funciona como etapa classificatória para o Campeonato Mundial.",
    },
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 Ago (sexta)",
        startTime: "15:30",
        image: swimPic,
        title: "Natação",
        description: `
            <p>A natação acontece na praia do <span class="highlight">Portobello Resort</span>, a poucos metros da arena montada no gramado. O mar abrigado costuma oferecer condições ideais, com boa visibilidade e pouca correnteza.</p><br>
            
            <p>A largada será em ondas, iniciando pelo <span class="highlight">SPRINT</span>, seguido do <span class="highlight">MIDDLE</span> e do <span class="highlight">LONG</span>, com saída diretamente da areia. O percurso será delimitado por boias e realizado em voltas.</p>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><span class="highlight">SPRINT</span> — 1 volta</li>
                <li><span class="highlight">MIDDLE</span> — 2 voltas</li>
                <li><span class="highlight">LONG</span> — 3 voltas</li>
            </ul>
            <br>
          
            <p>As distâncias MIDDLE e LONG contam com saídas australianas, adicionando ainda mais dinâmica à prova:</p>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><span class="highlight">MIDDLE</span> — 1 saída</li>
                <li><span class="highlight">LONG</span> — 2 saídas</li>
            </ul>
            <br>
            <div>
                Todos os atletas que concluírem a prova de natação receberão medalha de finisher, e os cinco primeiros colocados, masculino e feminino, de cada distância serão premiados.
            </div>
            `,
        distances: [
          { label: "Sprint", val: "1000m", p: 33 },
          { label: "Middle", val: "2000m", p: 66 },
          { label: "Long", val: "3000m", p: 100 },
        ],

        stravaIds: { sprint:"3522256534637037376", middle:"3522246706375714318", long:"3522246706371795470" },
      },
      bike: {
        day: "Dia 2",
        date: "22 Ago (sábado)",
        startTime: "08:00",
        image: bikePic,
        title: "Ciclismo",
        description:
          `
          <p>O percurso de ciclismo acontece na <span class="destaque">Serra do Piloto</span>.
          Localizada a aproximadamente 12 km do Resort Portobello, a prova tem início em frente ao <span class="destaque">Parque de Exposições de Mangaratiba (EXPO)</span>, onde os atletas contam com estacionamento seguro e estrutura de apoio antes da largada.</p>
          <br>
          <p><strong>Destaques do Percurso:</strong></p>
          <br>
          <ul style="list-style-type: disc; padding-left: 20px;">
          <li><strong>Primeiro Trecho:</strong> ~ 11 km de subida contínua, em um ritmo constante.</li>
          <li><strong>Da Base até Macundu:</strong> Após a escalada, o percurso segue por ~ 18 km até a região de Macundu, onde estará localizada uma base de suporte para os atletas.</li>
          <li><strong>Retorno SPRINT:</strong> ~ 4,5 km após Macundu.</li>
          <li><strong>AID STATION (MIDDLE e LONG):</strong> ~ 10 km após Macundu.</li>
          <li><strong>Retorno Rio Claro (MIDDLE e LONG):</strong> ~ 7,5 km após o AID STATION.</li>
          <li><strong>Chegada:</strong> ~ 3 km após Macundu, no sentido Mangaratiba.</li>
      </ul>
      <br>
        <strong>Notas Importantes:</strong>
        <br><br>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li><strong>Descida neutralizada:</strong> ~ 14 km.</li>
            <li><strong>Vácuo permitido</strong> (Draft Legal).</li>
            <li>Bicicletas de contrarrelógio (TT Bikes) e extensores de guidão (clip-on aerobars) <strong style="color: #c53030;">não são permitidos</strong>.</li>
        </ul>
        `,
        distances: [
          { label: "Sprint", val: "30km", p: 33 },
          { label: "Middle", val: "60km", p: 66 },
          { label: "Long", val: "90km", p: 100 },
        ],
        stravaIds: { sprint: "3519490203086994802", middle: "3519487411795828350", long: "3519490203086088562" },
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
        date: "23 Ago (domingo)",
        startTime: "08:00",
        image: runPic,
        title: "Corrida",
        description: `<p>O percurso de corrida tem largada e chegada na arena do evento, localizada no Portobello Resort. Todo o trajeto ocorre dentro do complexo do resort, oferecendo um cenário privilegiado e visualmente marcante.</p><br>
          <p class="highlight">O percurso é realizado em voltas: </p><br>
          <ul style="list-style-type: disc; padding-left: 20px;">
            <li><span class="highlight">SPRINT</span> — 1 volta</li>
            <li><span class="highlight">MIDDLE</span> — 2 voltas</li>
            <li><span class="highlight">LONG</span> — 3 voltas</li>
          </ul>
          <br>
            <p>Postos de hidratação estão disponíveis a cada 2,5km, atendendo os atletas nos dois sentidos.</p>
            <br>
            <div>
                Todos os atletas que concluírem a prova de corrida receberão medalha de finisher, e os cinco primeiros colocados, masculino e feminino, de cada distância serão premiados.
            </div>`,
        distances: [
          { label: "Sprint", val: "10km", p: 33 },
          { label: "Middle", val: "20km", p: 66 },
          { label: "Long", val: "30km", p: 100 },
        ],
        stravaIds: { sprint: "3519487411797267070", middle: "3519482091384751256", long: "3519482242820725230" },
      },
      distanceTable: [
        {
          "name": "SPRINT",
          "swim": "750m",
          "bike": "30km",
          "run": "10km"
        },
        {
          "name": "MIDDLE",
          "swim": "1500m",
          "bike": "60km",
          "run": "20km"
        },
        {
          "name": "LONG",
          "swim": "2250m",
          "bike": "90km",
          "run": "30km"
        }
      ],
    },
    afterMovie: {
      youtubeSrc: "z7xHxVVnkjU?si=6GShK1msGCTy7LDH",
    },
    testimonial: {
      youtubeSrc: "https://www.youtube.com/embed/x0J6xM96QhQ",
      testimonials: [{
      "avatar_url": "/images/atletas/viviane.jpeg",
      "quote": "Quantas lições em um único final de semana. Foram 3 dias, 3 esportes, 3 humores e unimeras variações de sentimentos. No Triton 3 pude me testar, exercitar a paciência e também o carinho comigo mesma. ",
      "author": "Viviane",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/viviwigand"
    },
    {
      "avatar_url": "/images/atletas/elida.jpeg",
      "quote": "Que fim de semana incrível! Obrigada Triton pela experiência única. Levo para casa uma recordação cheias de boas energias e momentos especiais...",
      "author": "Elida",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/elidacordeiroo"
    },
    {
      "avatar_url": "/images/atletas/bizarelo.jpeg",
      "quote": "Que dia incrível e que dia forte! Obrigado TRITON pela prova top, segura e com visual fantástico",
      "author": "Bizarelo",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/bizarelocycling"
    }]
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
              time: "12:00 – 18:00",
              title: "Entrega de Kits",
              location: "Sala Araras, Portobello Resort",
            },
            {
              time: "12:00",
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
              time: "06:00 – 07:45",
              title: "Ajustes Bike - Barcellos Sports",
              location: "Parque de Exposições de Mangaratiba (EXPO)",
            },
            {
              time: "06:30 – 07:30",
              title: "Entrega de kit do ciclismo",
              location: "Parque de Exposições de Mangaratiba (EXPO)",
            },
            {
              time: "07:45",
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
              time: "10:00",
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
              time: "06:00 – 06:30",
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
    locations: {
      description: "O TRITON Rio 26 acontece em Mangaratiba, um destino que combina o melhor da Serra do Mar com a Costa Verde. Planeje sua viagem, escolha seu hotel parceiro e prepare-se para uma experiência que vai além da competição.",
      experience: {
        image: touristCoast,
        pois: [
          {
            icon: "Compass",
            title: "Explore a Ilha Grande",
            desc: "Eleita uma das ilhas mais bonitas do mundo. Barcos com saídas diárias do centro de Mangaratiba levam você a praias paradisíacas como Lopes Mendes.",
          },
          {
            icon: "Anchor",
            title: "VIDA MARINHA E TRILHAS",
            desc: "Agende localmente passeios para mergulhar em águas calmas e explore trilhas em meio à mata preservada, que levam a cachoeiras escondidas na Serra do Piloto.",
          },
          {
            icon: "Utensils",
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
          "Gratuidade p/ 2 crianças de até 7 anos",
          "Opções de pagamento parcelado",
        ],
        buttonText: "Reservas",
        whatsappLink:
          "https://api.whatsapp.com/send?phone=552127898000&text=Ol%C3%A1!%20Me%20inscrevi%20no%20TRITON%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20reserva%20em%20Portobello.",
      },
    },
    partners: [
      {
        name: "Lei de Insentivo ao Esporte",
        logo: "/images/partners/events/rio2026/lei-incentivo-logo.png",
        url: "#"
      },
      {
        name: "Instituto Bons Ventos",
        logo: "/images/partners/events/rio2026/instituto-bons-ventos-logo.png",
        url: "#"
      },
      {
        name: "Dobro",
        logo: "/images/partners/events/rio2026/dobro-logo.png",
        url: "#"
      },
      {
        name: "My Safe",
        logo: "/images/partners/events/rio2026/my-safe-logo.png",
        url: ""
      },
       {
        name: "Prefeitura de Mangaratiba",
        logo: "/images/partners/events/rio2026/mangaratiba-logo.png",
        url: "#"
      },
      {
        name: "Equilibrium Saude Integrada",
        logo: "/images/partners/events/rio2026/eq-logo.png",
        url: "#"
      },
      {
        name: "B Drops",
        logo: "/images/partners/events/rio2026/drops.png",
        url: "#"
      },
      
      {
        name: "Ministerio Esporte",
        logo: "/images/partners/events/rio2026/ministerio-esporte.png",
        url: "#"
      },
     
    ]
  },
  "qindong-2026": {
    id: "qindong-2026",
    slug: "qindong-2026",
    eventFormat: "triton1",
    title: "Qidong",
    subtitle: "TRITON 1",
    location: "Qidong",
    venue: "Jiangsu, China",
    country: "China",
    flag: "🇨🇳",
    status: "Confirmed",
    year: 2026,
    dateText: "31 OCT - 01 NOV",
    fullDateText: "31 de Oct - 01 de Nov, 2026",
    targetDate: "2026-11-01T08:00:00",
    language: "en",
    registrationLink:"https://endurancecui.active.com/new/events/97349504/select-race?e4p=187915b9-9a93-4ced-99f0-839e3e981906&e4ts=1783257039&e4q=02163a21-29c0-4de1-b66e-72afad13e817&e4c=active&e4e=snawe00000000&e4h=59a235dbd7daa5c78eae6eae03177f16&e4rt=Safetynet&_p=9911300500391054",
    hero: {
      backgroundImage: heroImgQidong, // Placeholder
      logoImage: logoQidong,
    },
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
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: "",
        video: "https://www.youtube.com/embed/iM_ot3vSexQ?si=ETtFTJHWSe3DN1qJ",
        title: "Natação",
        description:`
          <p>The swim race will take place at Bihai Yintan Scenic Area Beach, renowned for its calm waters, natural shelter from ocean swells, and excellent visibility.</p>
          <br>
          <p>Athletes will start in waves directly from the beach, beginning with LONG, followed by MIDDLE and SPRINT. The swim course follows a loop format:</p>
          <ul class="list-disc pl-5 pt-4">
              <li>SPRINT — 1 lap</li>
              <li>MIDDLE — 2 laps</li>
              <li>LONG — 3 laps</li>
          </ul>
          <br>
          <p>MIDDLE and LONG distances feature Australian exits, adding an extra dynamic element to the race: MIDDLE - 1 exit and LONG - 2 exits</p>
          <br>
          <p>The Open Water Swim division will also offer four distances:</p>
          <ul class="list-disc pl-5 pt-4">
              <li>10 km — 6 laps</li>
              <li>5 km — 3 laps</li>
              <li>3.3 km — 2 laps</li>
              <li>1.66 km — 1 lap</li>
          </ul>
            `,
        distances: [
          { label: "Sprint", val: "700m", p: 33 },
          { label: "Middle", val: "1400m", p: 66 },
          { label: "Long", val: "2100m", p: 100 },
        ],

        stravaIds: { sprint: "3490382720997212106", middle: "3490382720997212106", long: "3490382720997212106" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
       image: "",
        video: "https://www.youtube.com/embed/ChnAi8MZARI?si=F0K-K9Gd-MK5UgAO",
        title: "Ciclismo",
        description:`
          <p>The bike course follows scenic coastal roads renowned for their stunning views and recognized by National Geographic as one of the region's most remarkable routes.</p>
          <br>
          <p>The course is almost entirely flat, providing ideal conditions for athletes aiming to achieve their personal best performances.</p>
          <ul class="list-disc pl-5 pt-4">
              <li>SPRINT — 20 km</li>
              <li>MIDDLE — 36 km</li>
              <li>LONG — 88 km</li>
          </ul>
          <br>
          <p>Hydration stations and restroom facilities will be available along the course.</p>
            `,
        distances: [  
          { label: "Sprint", val: "20km", p: 33 },
          { label: "Middle", val: "36km", p: 66 },
          { label: "Long", val: "88km", p: 100 },
        ],
        stravaIds: { sprint: "3489887744610501362", middle: "3489887744610501362", long: "3489887744610501362" },
        details: [
          
        ],
      },
      run: {
        day: "Dia 3",
        date: "23 de Agosto (domingo)",
        startTime: "08:00",
        image: "",
        video: "https://www.youtube.com/embed/VbdfsFcu6bY?si=d76Tgzl6lQHNn_uO",
        title: "Running",
        description: `
          <p>
          The run course passes through the Golden Beach Scenic Area and Cultural Tourism Avenue, offering athletes stunning coastal scenery and views of the impressive wind turbines that line the route.
          </p>
          <ul class="list-disc pl-5 pt-4">
              <li>SPRINT — 4.5 km</li>
              <li>MIDDLE — 12 km</li>
              <li>LONG — 20 km</li>
          </ul>
          <br>
          <p>Hydration and nutrition stations, including electrolyte drinks and water, will be available at multiple points along the course.</p>
        `,
        distances: [
          { label: "Sprint", val: "4.5km", p: 33 },
          { label: "Middle", val: "12km", p: 66 },
          { label: "Long", val: "20km", p: 100 },
        ],
        stravaIds: { sprint:"3490379193741390584", middle:"3490379193741390584", long:"3490379193741390584" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "700m",
        "bike": "20km",
        "run": "4,5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1400m",
        "bike": "36km",
        "run": "12km"
      },
      {
        "name": "LONG",
        "swim": "2100m",
        "bike": "88km",
        "run": "20km"
      }
    ],
    disableMixMatch: true,
    },
    schedule: {
      title: "AGENDA",
      subtitle: "Planning your journey",
      days: [
        {
          id: "friday",
          date: "30 Oct",
          title: "Friday",
          subtitle: "RACE DAY 1 - THE SWIM",
          events: [
            {
              time: "10:00 – 18:00",
              title: "Check-in & Race Pick-up",
              location: "Evergrande Venice Resort",
            },
          ],
        },
        {
          id: "saturday",
          date: "31 Oct",
          title: "Saturday",
          subtitle: "Race Prep & Kids Event",
          events: [
            {
              time: "08:00 – 18:00",
              title: "Check-in & Race Pick-up",
              location: "Evergrande Venice Resort",
            },
            {
              time: "15:00 – 16:00",
              title: "Adult Swimming Test (swim crossing and triathlon)",
              location: "Evergrande Venice Resort",
            },
            {
              time: "14:00 – 18:00",
              title: "Repair & Transition Area Open",
              location: "Evergrande Venice Resort",
            },
            {
              time: "10:00 – 15:30",
              title: "Kids Triathlon Transition Area Open",
              location: "Evergrande Venice Resort",
            },
            {
              time: "10:00 – 11:00",
              title: "Kids Swimming Test",
              location: "Beach",
            },
            {
              time: "11:30 – 11:45",
              title: "Kids Briefing & Warm-up",
              location: "Beach",
            },
            {
              time: "11:45",
              title: "Kids Triathlon Wave Start",
              location: "Beach",
            },
            {
              time: "13:30",
              title: "Kids Triathlon Cut-off",
              location: "Evergrande Venice Resort",
            },
            {
              time: "13:30 – 14:00",
              title: "Kids Triathlon Award Ceremony",
              location: "Evergrande Venice Resort",
            },
          ],
        },
        {
          id: "sunday",
          date: "1 Nov",
          title: "Sunday",
          subtitle: "Race Day",
          events: [
            {
              time: "05:00 – 06:30",
              title: "Transition Area Open",
              location: "Evergrande Venice Resort",
            },
            {
              time: "06:15 – 06:45",
              title: "Check-in & wait at start",
              location: "Beach",
            },
            {
              time: "07:00",
              title: "TRITON 1 Start: LONG > MIDDLE > SPRINT",
              location: "Beach",
            },
            {
              isCutoff: true,
              title: "TRITON 1 Swim Cut-off",
              details: [
                { label: "SPRINT", value: "30m" },
                { label: "MIDDLE", value: "1h" },
                { label: "LONG", value: "1h30" },
              ],
            },
            {
              isCutoff: true,
              title: "TRITON 1 Bike Cut-off",
              details: [
                { label: "SPRINT", value: "1h" },
                { label: "MIDDLE", value: "2h" },
                { label: "LONG", value: "5h" },
              ],
            },
            {
              isCutoff: true,
              title: "TRITON 1 Run Cut-off",
              details: [
                { label: "SPRINT", value: "30m" },
                { label: "MIDDLE", value: "1h" },
                { label: "LONG", value: "2h" },
              ],
            },
            {
              time: "08:00 – 11:00",
              title: "Swim Crossing Staggered Check-in",
              location: "Beach",
            },
            {
              time: "09:00",
              title: "Swim Crossing Wave Start",
              location: "Beach",
            },
            {
              time: "14:30",
              title: "Swim Crossing Cut-off",
              location: "Beach",
            },
            {
              time: "09:00 – 12:30",
              title: "Award Ceremonies",
              location: "Beach",
            },
          ],
        },
      ],
      importantNote: "",
    },
    locations: {
      description: "Plan your trip and make the most of your TRITON experience in Qidong. Enjoy a fast-growing coastal destination with unique local culture, fresh seafood, and scenic courses where the rivers meet the sea.",
      experience: {
        image: landScapeQidong, // Placeholder
        pois: [
          {
            icon: "Compass",
            title: "EXPLORE YUANTUOJIAO",
            desc: "Discover one of China's most unique coastal destinations, where the Yangtze River meets the East China Sea. Enjoy serene beaches and the charm of Yuantuojiao Tourist Resort.",
          },
          {
            icon: "Anchor",
            title: "COASTLINE & BEACHES",
            desc: "Explore Qidong’s scenic coastline, featuring beachfront promenades, oceanfront parks, and expansive open spaces perfect for walking, relaxing, and enjoying the seaside environment.",
          },
          {
            icon: "Utensils",
            title: "SEAFOOD & LOCAL FLAVORS",
            desc: "Savor Qidong’s renowned fresh seafood and the authentic flavors of Jiangsu cuisine, celebrated for its refined taste, premium ingredients, and regional specialties.",
          },
          {
            icon: "Palmtree",
            title: "CULTURE & HERITAGE",
            desc: "Experience the rich cultural heritage of Jiangsu Province, where centuries of history, traditional Chinese architecture, and warm local hospitality come together.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "PVG Airport",
          detail: "110 km",
          sub: "~90min",
          color: "from-blue-500/20",
        },
        {
          icon: "Navigation",
          title: "Shanghai Station",
          detail: "RAILWAY",
          sub: "~1h58min",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "ACCESS",
          detail: "EXPY G40",
          sub: "Shangai Connection",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "Location",
          detail: "QIDONG",
          sub: "Yuantuojiao Tourist Resort",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: qidongHotel, // Placeholder
        title: "Yuantuojiao Resort",
        description:
          "One of China's largest seaside resorts, offering direct beach access, premium facilities, and the ideal race-week atmosphere. ",
        benefits: [
          "Exclusive rates for TRITON athletes",
          "Early race-day breakfast",
          "Late check-out available",
        ],
        buttonText: "Book Now",
        whatsappLink: "https://endurancecui.active.com/new/events/97349504/select-race?e4p=187915b9-9a93-4ced-99f0-839e3e981906&e4ts=1783257039&e4q=02163a21-29c0-4de1-b66e-72afad13e817&e4c=active&e4e=snawe00000000&e4h=59a235dbd7daa5c78eae6eae03177f16&e4rt=Safetynet&_p=9911300500391054",
      },
    },
    partners: [
      {
        name: "Marathon Photos",
        logo: "/images/partners/marathon-photos-logo.png",
        url: ""
      },
    ]
  },
 "lisboa-2026": {
    id: "lisboa-2026",
    slug: "lisboa-2026",
    eventFormat: "triton1",
    title: "Lisboa",
    subtitle: "TRITON 1",
    location: "Parque das Nações",
    venue: "Lisbon, Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    status: "Confirmed",
    year: 2026,
    dateText: "SEP 06",
    fullDateText: "September 6, 2026",
    targetDate: "2026-09-06T08:00:00",
    language: "en",
    registrationLink: "https://register.hakuapp.com/?event=9ce0f9c87c1b43a8b97a",
    isRegistrationClosed: true
    
    ,
    hero: {
      backgroundImage: heroImgLisboa,
      logoImage: logoLisboa,
    },
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
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPicLisboa,
        title: "Natação",
        description:`
            <p>The swim takes place in Doca dos Olivais, a man-made lake located next to Lisbon’s iconic waterfront. Athletes enter the water from the Oceanário de Lisboa side, with the course positioned just a short distance from the transition area for a smooth race experience.</p>
            <br>
            <p>With calm, still waters and an average temperature of 18°C to 19°C (64°F–66°F), the venue offers excellent conditions for athletes. </p>
            <br>
            <p>The swim course is designed as a loop format</p>
            <ul class="list-disc pl-5 pt-4">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 3 laps</li>
            </ul>
            <br>
            <p>Waves are, SPRINT  first, MIDDLE second and LONG, third. The number of waves for each distance may vary according to the number of participants.</p>

          
            `,
        distances: [
          { label: "Sprint", val: "600m", p: 33 },
          { label: "Middle", val: "1200m", p: 66 },
          { label: "Long", val: "1800m", p: 100 },
        ],

        stravaIds: { sprint:"3442206601619587448", middle:"3442186454436027514", long:"3514199409116588682" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePicLisboa,
        title: "Ciclismo",
        description:`
             <strong>100% CLOSED TO TRAFFIC</strong>
             <br><br>
            <p>One of the few urban triathlon bike courses in Lisbon that is fully closed to traffic, providing a safe and fast racing experience.</p>
            <p>The course is a 21.5 km multi-lap circuit:</p><br>
            <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
<p>Starting from Transition, athletes head north along Avenida D. João II before joining the IC2 highway. The course is predominantly flat and fast, featuring gentle rolling terrain and a gradual 1 km climb near the turnaround point.</p><br>
<p>A Bike Aid Station is located at the turnaround area and is accessible at the start of each new lap. Please note that littering is only permitted within the designated aid station zone and may result in disqualification if done elsewhere.</p>`,
        distances: [  
          { label: "Sprint", val: "21.5km", p: 33 },
          { label: "Middle", val: "43km", p: 66 },
          { label: "Long", val: "86km", p: 100 },
        ],
        stravaIds: { 
          sprint: "3442190057377176544", 
          middle: "3514206730520669716",
          long: "3514208343517162558"
        },
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
        image: runPicLisboa,
        title: "Corrida",
        description: `
        <p>The run course starts from the Transition Zone and follows a flat, multi-lap route, creating an exciting and spectator-friendly atmosphere throughout the race.</p><br>

        <strong>The course is a 5 km multi-lap circuit:</strong><br><br>

        <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
        <p>Athletes will find one aid station approximately every 2.5 km, located near the midpoint of the course. One turnaround point is positioned near the iconic Vasco da Gama Bridge, one of the longest bridges in Europe, while the other is located closer to the Transition Zone.</p><br>
        <p>The Finish Line is located on Rossio dos Olivais, directly in front of Doca dos Olivais and the Vasco da Gama Mall, where the Recovery Zone awaits finishers.</p><br>
        
            `,
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "20km", p: 100 },
        ],
        stravaIds: { sprint: "3442184922483070074", middle: "3514202065593315860", long: "3514203195016413614" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "600m",
        "bike": "21.5km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1200m",
        "bike": "43km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1800m",
        "bike": "86km",
        "run": "20km"
      }
    ],
    },
    extraEvent: {
      imageSrc: "/images/eventos/lisboa-2026/event-extra.jpg",
      imageAlt: "Extra Event",
      ctaText:"Register now",
      ctaLink:"https://register.hakuapp.com/?event=9ce0f9c87c1b43a8b97a",
      badge:"EXTRA EXPERIENCE",
      title: "TRITON KIDS & FAMILY",
      subtitle: "",
      description: `<div class="space-y-4">
        <p>Create unforgettable memories and experience the spirit of TRITON together. Whether you choose the Family Swim & Run or the TRITON Family Triathlon, every team starts, races, and finishes side by side.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div class="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-triton-red text-base mb-2">Family Swim & Run</h4>
            <ul class="text-sm space-y-1 text-gray-300">
              <li><strong class="text-white">Ages:</strong> 8–11 (accompanied by family members of any age)</li>
              <li><strong class="text-white">Start:</strong> 4:00 PM</li>
              <li><strong class="text-white">Distance:</strong> 50 m swim + 1 km run</li>
            </ul>
          </div>
          <div class="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-triton-red text-base mb-2">TRITON Family Triathlon</h4>
            <ul class="text-sm space-y-1 text-gray-300">
              <li><strong class="text-white">Ages:</strong> 12–15 (accompanied by family members of any age)</li>
              <li><strong class="text-white">Start:</strong> 4:30 PM</li>
              <li><strong class="text-white">Distance:</strong> 200 m swim + 5 km bike + 2 km run</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-300"><strong class="text-white">Team Rules:</strong> Each team must consist of 2 or 3 family members. The entire course must be completed together—this is not a relay race.</p>
        <p class="text-sm font-medium text-white flex items-center gap-2"><span>🏆</span> <span><strong>Awards Ceremony:</strong> Following the completion of both events.</span></p>
      </div>`,
    },
    schedule: {
      title: "AGENDA",
      subtitle: "Planning your journey",
      days: [
        {
          id: "friday",
          date: "4 Sept",
          title: "Friday",
          subtitle: "RACE DAY 1 - THE SWIM",
          events: [
            {
              time: "09:00 – 18:00",
              title: "No Activities Scheduled",
              location: "",
            },
          ],
        },
        {
          id: "saturday",
          date: "5 Sept",
          title: "Saturday",
          subtitle: "RACE DAY 2 – THE BIKE",
          events: [
            {
              time: "10:00 – 19:00",
              title: "Race Office",
              description: "Next to finish-line - by the Iberia Lince Statue",
              location: "Rossio dos Olivais, Parque das Nações",
            },
            {
              time: "10:00 – 19:00",
              title: "Expo Village",
              location: "At the finish-line",
            },
            {
              time: "16:00",
              title: "Kids & Parents, Swim & Run",
              location: "Meeting point (15:00) at Race Office (at the finish-line)",
            },
            {
              time: "16:30",
              title: "Family Triathlon",
              location: "Meeting point (15:00) at Race Office (at the finish-line)",
            },
            {
              time: "16:30 - 17:30",
              title: "Swim course practice",
              location: "At swim start",
            },
            {
              time: "19:00",
              title: "Athletes Dinner Time",
              description: "(Optional: buy tickets at race office)",
              location: `Restaurant next to finish-line - <a href="https://www.casadofrango.pt/en" target="_blank" rel="noopener noreferrer" class="underline text-triton-red hover:text-white transition-colors">Casa do Frango</a>`,
            },
          ],
        },
        {
          id: "sunday",
          date: "6 Sept",
          title: "Sunday",
          subtitle: "RACE DAY 3 - THE RUN",
          events: [
            {
              time: "05:30 - 07:00",
              title: "Bike Check-In",
              location: "Transition Zone: at swim exit",
            },
            {
              time: "06:00 – 07:00",
              title: "Last Minute Race Office",
              location: "At the finish-line",
            },
            {
              time: "07:00",
              title: "Swim Warm Up",
              location: "At swim start venue",
            },
            {
              time: "07:15",
              title: "Triton Angels Start",
              location: "At swim start venue",
            },
            {
              time: "07:30",
              title: "Sprint and Corporate Relay Start",
              location: "At swim start venue",
            },
            {
              time: "07:33",
              title: "Middle Start",
              location: "At swim start venue",
            },
            {
              time: "07:36",
              title: "Long Start",
              location: "At swim start venue",
            },
            {
              time: "08:45",
              title: "Race Awards (Estimated) - Sprint Age-Groups",
              location: "At the finish-line",
            },
            {
              time: "09:15",
              title: "Race Awards (Estimated) - Corporate",
              location: "At the finish-line",
            },
            {
              time: "09:30",
              title: "Race Awards (Estimated) - Sprint Overall Ladies and Men",
              location: "At the finish-line",
            },
            {
              time: "09:40",
              title: "Race Awards (Estimated) - Middle Age-Groups",
              location: "At the finish-line",
            },
            {
              time: "10:30",
              title: "Race Awards (Estimated) - Middle Overall Ladies and Men",
              location: "At the finish-line",
            },
            {
              time: "11:30",
              title: "Race Awards (Estimated) - Long Age-Groups",
              location: "At the finish-line",
            },
            {
              time: "13:00",
              title: "Race Awards (Estimated) - Long Overall Ladies and Men",
              location: "At the finish-line",
            },
            {
              time: "14:30",
              title: "Last Finisher (Estimated)",
              location: "At the finish-line",
            },
          ],
        },
      ],
      importantNote: "",
    },
    locations: {
      description: "",
      experience: {
        image: lisboaExperienceImage,
        pois: [
          {
            icon: "Compass",
            title: "Explore a Lisbon",
            desc: "Discover Lisbon’s historic heart, from the charming streets of Alfama and Baixa to the iconic Belém district. Experience centuries of history, traditional architecture, and the vibrant atmosphere of Portugal’s capital.",
          },
          {
            icon: "Anchor",
            title: "COASTLINE & BEACHES",
            desc: "Enjoy Lisbon’s Atlantic coastline, with easy access to famous beaches such as Cascais, Carcavelos, and Costa da Caparica. Perfect for relaxation, outdoor activities, and family moments.",
          },
          {
            icon: "Utensils",
            title: "PORTUGUESE GASTRONOMY",
            desc: "Savor Portugal’s renowned cuisine, from fresh seafood and traditional dishes to the iconic Pastéis de Belém. Lisbon offers authentic flavors at every turn.",
          },
          {
            icon: "Palmtree",
            title: "CULTURE & LOCAL EXPERIENCES",
            desc: "Experience Lisbon through Fado, lively squares, riverside sunsets, local markets, and cultural attractions. A city full of unique experiences beyond race weekend.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "LIS Aeroporto",
          detail: "4 km",
          sub: "~10min",
          color: "from-blue-500/20",
        },
        {
          icon: "Track",
          title: "Metro & Train",
          detail: "ORIENTE STATION",
          sub: "2 min walk",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "ROAD ACCESS",
          detail: "A1 & A2",
          sub: "National & International Links ",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "LOCATION",
          detail: "PQ. DAS NAÇÕES",
          sub: "Lisbon",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: fotoResortLisboa,
        title: "Tivoli",
        description:
          "The Tivoli Oriente Lisboa Hotel is the official hotel of TRITON Lisboa, offering the best location for athletes and their families.",
        benefits: [
          "Close to airport",
          "Our staff hotel",
          "700 meters from race venue",
        ],
        buttonText: "Contact Us",
        whatsappLink:
          "https://www.nh-hotels.com/pt/hoteis/lisboa",
      },
    },
    afterMovie:{
      youtubeSrc:"uF-G6jTNDLQ?si=qfYeZlMsdkWxfshZ"
    },
    testimonial: {
      youtubeSrc:"",
      testimonials: [{
      "avatar_url": "/images/atletas/viviane.jpeg",
      "quote": "Quantas lições em um único final de semana. Foram 3 dias, 3 esportes, 3 humores e unimeras variações de sentimentos. No Triton 3 pude me testar, exercitar a paciência e também o carinho comigo mesma. ",
      "author": "Viviane",
      "company": "TechFlow",
      "link_social": ""
    },
    {
      "avatar_url": "/images/atletas/elida.jpeg",
      "quote": "Que fim de semana incrível! Obrigada Triton pela experiência única. Levo para casa uma recordação cheias de boas energias e momentos especiais...",
      "author": "Elida",
      "company": "TechFlow",
      "link_social": ""
    },
    {
      "avatar_url": "/images/atletas/bizarelo.jpeg",
      "quote": "Que dia incrível e que dia forte! Obrigado TRITON pela prova top, segura e com visual fantástico",
      "author": "Bizarelo",
      "company": "TechFlow",
      "link_social": ""
    }]
  },
    partners: [
      
      {
        name: "Câmara Municipal de Lisboa",
        logo: "/images/eventos/lisboa-2026/partners/logo-camara-lisboa.png",
        url: "#"
      },
      {
        name: "Instituto Português do Desporto e Juventude",
        logo: "/images/eventos/lisboa-2026/partners/logo-instituto-portugues.png",
        url: "#"
      },
      {
        name: "Loff",
        logo: "/images/eventos/lisboa-2026/partners/logo-loff.png",
        url: "#"
      },
      {
        name: "Parque das Nações",
        logo: "/images/eventos/lisboa-2026/partners/logo-parque-nacoes.png",
        url: "#"
      },
      {
        name: "Snupe",
        logo: "/images/eventos/lisboa-2026/partners/logo-snupe.png",
        url: "#"
      },
      {
        name: "Tivoli",
        logo: "/images/eventos/lisboa-2026/partners/logo-tivoli.png",
        url: "#"
      }
    ]
  },
  "salvador-2027": {
    id: "salvador-2027",
    slug: "salvador-2027",
    eventFormat: "triton1",
    title: "Salvador",
    subtitle: "TRITON 1",
    location: "Piatã, Bahia",
    venue: "Piatã, Salvador, Bahia",
    country: "Brazil",
    flag: "🇧🇷",
    status: "Confirmed",
    year: 2027,
    dateText: "ABR 11",
    fullDateText: "11 de Abril, 2027",
    targetDate: "2027-04-11T08:00:00",
    language: "pt-BR",
    registrationLink:
      "https://www.ticketsports.com.br/e/triton-1-salvador-86852",
    startListApiUrl: "https://api.raceresult.com/371805/RQDKNSO0GU02BW4IF4X1G7AF12S073FW",
    hero: {
      backgroundImage: heroImgSalvador, // Placeholder
      logoImage: logoSalvador,
    },
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
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPic,
        title: "Natação",
        description:`
            <p>A natação acontece na praia de Placaford, a poucos metros da arena montada na praça de Piatã. A largada será em ondas, iniciando pelo SPRINT, seguido do MIDDLE e do LONG, com saída diretamente da areia. O percurso será delimitado por boias e realizado em voltas.</p>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><span class="highlight">SPRINT</span> — 1 volta</li>
                <li><span class="highlight">MIDDLE</span> — 2 voltas</li>
                <li><span class="highlight">LONG</span> — 3 voltas</li>
            </ul>
            <br>
          
            <p>As distâncias MIDDLE e LONG contam com saídas australianas, adicionando ainda mais dinâmica à prova, sendo 1 saída para o MIDDLE e 2 saídas para o LONG.</p>
            
            <br>
            <strong>Informações Adicionais:</strong><br>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">

                <li>Wetsuit permitido se a água estiver < 22ºC (quando liberado).</li>
                <li>Bóia de segurança permitida somente no SPRINT (corda até 40 cm).</li>
            </ul>
          
            `,
        distances: [
          { label: "Sprint", val: "500m", p: 33 },
          { label: "Middle", val: "1000m", p: 66 },
          { label: "Long", val: "1500m", p: 100 },
        ],

        stravaIds: { sprint:"", middle:"", long:"" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePicSalvador,
        title: "Ciclismo",
        description:`
            <p>Saindo da área de transição, localizada a poucos metros da arena de prova, o triatleta seguirá em direção à Av. Orlando Gomes, passando pela Av. 29 de Março e realizando o retorno na Via Regional.</p>
            <br>
            <strong>O percurso será realizado em voltas:</strong>
            <br><br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><span class="highlight">SPRINT</span> — 1 volta</li>
                <li><span class="highlight">MIDDLE</span> — 2 voltas</li>
                <li><span class="highlight">LONG</span> — 3 voltas</li>
            </ul>
            <br>
          
            <p>Haverá um ponto de abastecimento na entrada da Av. Orlando Gomes. Nesse mesmo local, também estará disponível um ponto de apoio mecânico.</p>
            
            <br>
            <strong>Informações Adicionais:</strong><br>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">

                <li>Bikes permitidas: TT, speed ou MTB.</li>
                <li>Capacete duro e afivelado obrigatório sempre com a bike.</li>
                <li>Vácuo: 12 m; 25s para ultrapassagem (infração = cartão azul).</li>
                <li>Proibido descartar lixo fora das áreas indicadas (cartão azul).</li>
            </ul>
          
            `,
        distances: [
          { label: "Sprint", val: "20km", p: 33 },
          { label: "Middle", val: "40km", p: 66 },
          { label: "Long", val: "60km", p: 100 },
        ],
        stravaIds: { sprint: "", middle: "", long: "" },
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
        image: runPicSalvador,
        title: "Corrida",
        description: `
            <p>Caracterizado por um percurso totalmente plano e 100% à beira-mar. Ao sair da área de transição, o triatleta seguirá em direção ao ponto de retorno, localizado na Av. Oceânica, após a 3ª ponte. Serão dois pontos de abastecimento, sendo um logo na saída da transição e outro a 500m antes do retorno.</p>
            <br>
            <strong>O percurso será realizado em voltas:</strong>
<br>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><span class="highlight">SPRINT</span> — 1 volta</li>
                <li><span class="highlight">MIDDLE</span> — 2 voltas</li>
                <li><span class="highlight">LONG</span> — 3 voltas</li>
            </ul>
            <br>
            <strong>Informações Adicionais:</strong><br>
            <br>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Número de peito obrigatório e visível na frente.</li>
                <li>Atletas masculinos: camiseta obrigatória (sem camiseta = desclassificação).</li>
                <li>Proibido fones/equipamentos de som (cartão amarelo e pode evoluir para desclassificação).</li>
            </ul>
          
            `,
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "15km", p: 100 },
        ],
        stravaIds: { sprint: "", middle: "", long: "" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "500m",
        "bike": "20km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1000m",
        "bike": "40km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1500m",
        "bike": "60km",
        "run": "15km"
      }
    ],
    },
    schedule: {
      title: "AGENDA",
      subtitle: "Planning your journey",
      days: [
        {
          id: "friday",
          date: "9 Abr",
          title: "Sexta-feira",
          subtitle: "RACE DAY 1 - THE SWIM",
          events: [
            {
              time: "09:00 – 18:00",
              title: "Entrega de Kits",
              location: "A confirmar",
            },
          ],
        },
        {
          id: "saturday",
          date: "10 Abr",
          title: "Sábado",
          subtitle: "RACE DAY 2 – THE BIKE",
          events: [
            {
              time: "09:00 – 12:00",
              title: "Entrega de kit",
              location: "A confirmar",
            },
            {
              time: "14:00 – 18:00",
              title: "Bike Check In",
              location:
                "Arena TRITON - Praça Piatã - Av. Octávio Mangabeira 1988",
            },
          ],
        },
        {
          id: "sunday",
          date: "11 Abr",
          title: "Domingo",
          subtitle: "RACE DAY 3 - THE RUN",
          events: [
            {
              time: "04:10 – 05:40",
              title: "Minutos Finais Bike Check In ",
              location:  "Arena TRITON - Praça Piatã - Av. Octávio Mangabeira 1988",
            },
            {
              time: "05:45",
              title: "Largada Atletas PCDs",
              location: "Praia de Placaford",
            },
            {
              time: "06:00",
              title: "Largada SPRINT",
              location: "Praia de Placaford",
            },
             {
              time: "06:03",
              title: "Largada MIDDLE",
              location: "Praia de Placaford",
            },
            {
              time: "06:06",
              title: "Largada LONG",
              location: "Praia de Placaford",
            },
            {
              isCutoff: true,
              title: "Tempos de Corte da Natação",
              details: [
                { label: "SPRINT", value: "20min" },
                { label: "MIDDLE", value: "40min" },
                { label: "LONG", value: "1h00" },
              ],
            },
            {
              isCutoff: true,
              title: "Tempos de Corte da Ciclismo",
              details: [
                { label: "SPRINT", value: "1h00" },
                { label: "MIDDLE", value: "2h00" },
                { label: "LONG", value: "3h00" },
              ],
            },
            {
              isCutoff: true,
              title: "Tempos de Corte da Corrida",
              details: [
                { label: "SPRINT", value: "40min" },
                { label: "MIDDLE", value: "1h00" },
                { label: "LONG", value: "2h00" },
              ],
            },
            
            {
              time: "08:30",
              title: "Premiação SPRINT",
              location: "Arena TRITON - Praça Piatã - Av. Octávio Mangabeira 1988",
            },
            {
              time: "10:30",
              title: "Premiação MIDDLE",
              location: "Arena TRITON - Praça Piatã - Av. Octávio Mangabeira 1988",
            },
            {
              time: "12:30",
              title: "Premiação LONG",
              location: "Arena TRITON - Praça Piatã - Av. Octávio Mangabeira 1988",
            },
          ],
        },
      ],
      importantNote:
        "Todos os horários estão sujeitos a alteração sem aviso prévio devido a circunstâncias imprevistas. Os horários e a ordem de largada também poderão ser ajustados. Recomendamos acompanhar a programação regularmente para se manter atualizado sobre possíveis mudanças de última hora.",
    },
    locations: {
      description: "Planeje sua viagem e aproveite ao máximo sua jornada no TRITON. Localizada em um dos destinos mais vibrantes e históricos do Brasil, Salvador combina praias, cultura, gastronomia e energia única, tornando a experiência do TRITON ainda mais inesquecível.",
      experience: {
        image: salvadorExperienceImage, // Placeholder
        pois: [
          {
            icon: "Compass",
            title: "Explore Salvador",
            desc: "Explore o Centro Histórico, o Pelourinho e os principais cartões-postais da primeira capital do Brasil, mergulhando na energia e na cultura baiana.",
          },
          {
            icon: "Utensils",
            title: "PRAIAS & ORLA",
            desc: "Aproveite a extensa orla de Salvador, com praias urbanas, calçadões e cenários perfeitos para relaxar, treinar ou curtir com a família.",
          },
          {
            icon: "Anchor",
            title: "JORNADA GASTRONÔMICA",
            desc: "Descubra os sabores únicos da culinária baiana, com restaurantes à beira-mar, frutos do mar frescos e pratos típicos como acarajé, moqueca e abará. ",
          },
          {
            icon: "Palmtree",
            title: "MÚSICA & EXPERIÊNCIAS LOCAIS",
            desc: "Viva a atmosfera vibrante da cidade com música ao vivo, pôr do sol à beira-mar e experiências que fazem de Salvador um destino inesquecível dentro e fora da prova.",
          },
        ],
      },
      logistics: [
        {
          icon: "Plane",
          title: "SSA Aeroporto",
          detail: "13 km",
          sub: "~25min",
          color: "from-blue-500/20",
        },
        {
          icon: "Navigation",
          title: "Acesso",
          detail: "Via Orla",
          sub: "Fácil Conexão",
          color: "from-green-500/20",
        },
        {
          icon: "Car",
          title: "Uber",
          detail: "Custo",
          sub: "R$25 - R$50",
          color: "from-purple-500/20",
        },
        {
          icon: "MapPin",
          title: "Localização",
          detail: "Praia de Piatã",
          sub: "Salvador",
          color: "from-red-500/20",
        },
      ],
      resort: {
        image: fotoResortSalvador,
        title: "Vila Bahia",
        description:
          "Agência oficial de turismo do TRITON Salvador. ",
        benefits: [
          "Passagem Aérea",
          "Transfer",
          "Hospedagem",
          "Suporte Local",
        ],
        buttonText: "Entre em contato",
        whatsappLink: "https://api.whatsapp.com/send/?phone=5571991468904&text&type=phone_number&app_absent=0",
      },
    },
    afterMovie: {
      youtubeSrc: "l1qDnK5J-QM?si=B1vCXdQWVo_rL-hc",
    },
    testimonial: {
      youtubeSrc: "https://www.youtube.com/embed/rTUEVYYoyjE",
      testimonials: [{
      "avatar_url": "/images/atletas/debora-mares.jpeg",
      "quote": "Que experiência absurda foi o Triton. @triton1salvador Obrigada, foi simplesmente incrível fazer parte disso! 💙🏊‍♀️🚴‍♀️🏃‍♀️",
      "author": "Débora Mares",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/deboramares_/"
    },
    {
      "avatar_url": "/images/atletas/bruno-doria.jpeg",
      "quote": "Mais uma vez impecável @triton1salvador , que prova incrível! É um enorme prazer em ser embaixador @tritonws_br Brasil!",
      "author": "Bruno Doria",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/brunodoria_/"
    },
    {
      "avatar_url": "/images/atletas/diego-fonseca.jpeg",
      "quote": "Foi sensacional competir em salvador ao lado de muita gente bruta. Prova que testou minha mente a cada minuto!",
      "author": "Diego Fonseca",
      "company": "TechFlow",
      "link_social": "https://www.instagram.com/bucodiegofonseca/"
    }]
    },
    partners: [
      {
        name: "Esportiva Bet",
        logo: "/images/eventos/salvador-2027/esportiva-bet-logo.png",
        url: "#"
      },
    ]
  },
  "uae-2027": {
    id: "uae-2027",
    slug: "uae-2027",
    eventFormat: "triton1",
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
    info: {
      title: "UAE Triton",
      subtitle: "The Desert Challenge",
      description: "Coming soon to the United Arab Emirates.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPicLisboa,
        title: "Natação",
        description:`
            <p>The swim takes place in Doca dos Olivais, a man-made lake located next to Lisbon’s iconic waterfront. Athletes enter the water from the Oceanário de Lisboa side, with the course positioned just a short distance from the transition area for a smooth race experience.</p>
            <br>
            <p>With calm, still waters and an average temperature of 18°C to 19°C (64°F–66°F), the venue offers excellent conditions for athletes. </p>
            <br>
            <p>The swim course is designed as a loop format</p>
            <ul class="list-disc pl-5 pt-4">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 3 laps</li>
            </ul>
            <br>
            <p>Waves are, SPRINT  first, MIDDLE second and LONG, third. The number of waves for each distance may vary according to the number of participants.</p>

          
            `,
        distances: [
          { label: "Sprint", val: "600m", p: 33 },
          { label: "Middle", val: "1200m", p: 66 },
          { label: "Long", val: "1800m", p: 100 },
        ],

        stravaIds: { sprint:"3442186454436027514", middle:"3442186454436027514", long:"3442186454436027514" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePicLisboa,
        title: "Ciclismo",
        description:`
             <strong>100% CLOSED TO TRAFFIC</strong>
             <br><br>
            <p>One of the few urban triathlon bike courses in Lisbon that is fully closed to traffic, providing a safe and fast racing experience.</p>
            <p>The course is a 21.5 km multi-lap circuit:</p><br>
            <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
<p>Starting from Transition, athletes head north along Avenida D. João II before joining the IC2 highway. The course is predominantly flat and fast, featuring gentle rolling terrain and a gradual 1 km climb near the turnaround point.</p><br>
<p>A Bike Aid Station is located at the turnaround area and is accessible at the start of each new lap. Please note that littering is only permitted within the designated aid station zone and may result in disqualification if done elsewhere.</p>


            `,
        distances: [  
          { label: "Sprint", val: "21.5km", p: 33 },
          { label: "Middle", val: "43km", p: 66 },
          { label: "Long", val: "86km", p: 100 },
        ],
        stravaIds: { sprint: "3442190057377176544", middle: "3442190057377176544", long: "3442190057377176544" },
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
        image: runPicLisboa,
        title: "Corrida",
        description: `
        <p>The run course starts from the Transition Zone and follows a flat, multi-lap route, creating an exciting and spectator-friendly atmosphere throughout the race.</p><br>

        <strong>The course is a 5 km multi-lap circuit:</strong><br><br>

        <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
        <p>Athletes will find one aid station approximately every 2.5 km, located near the midpoint of the course. One turnaround point is positioned near the iconic Vasco da Gama Bridge, one of the longest bridges in Europe, while the other is located closer to the Transition Zone.</p><br>
        <p>The Finish Line is located on Rossio dos Olivais, directly in front of Doca dos Olivais and the Vasco da Gama Mall, where the Recovery Zone awaits finishers.</p><br>
        
            `,
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "20km", p: 100 },
        ],
        stravaIds: { sprint: "3442184922483070074", middle: "3442184922483070074", long: "3442184922483070074" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "600m",
        "bike": "21.5km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1200m",
        "bike": "43km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1800m",
        "bike": "86km",
        "run": "20km"
      }
    ],
    },

    locations: {
      description: "Plan your trip to the United Arab Emirates. Discover local attractions, official accommodations, and transport options to make your TRITON UAE experience seamless and memorable.",
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
    partners: [
      {
        name: "Prouder",
        logo: "/images/partners/prouder.png",
        url: "#"
      },
    ]
  },
  "ireland-2027": {
    id: "ireland-2027",
    slug: "ireland-2027",
    eventFormat: "triton1",
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
    info: {
      title: "Ireland Triton",
      subtitle: "The Emerald Isle Challenge",
      description: "Experience the rugged beauty of Ireland.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPicLisboa,
        title: "Natação",
        description:`
            <p>The swim takes place in Doca dos Olivais, a man-made lake located next to Lisbon’s iconic waterfront. Athletes enter the water from the Oceanário de Lisboa side, with the course positioned just a short distance from the transition area for a smooth race experience.</p>
            <br>
            <p>With calm, still waters and an average temperature of 18°C to 19°C (64°F–66°F), the venue offers excellent conditions for athletes. </p>
            <br>
            <p>The swim course is designed as a loop format</p>
            <ul class="list-disc pl-5 pt-4">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 3 laps</li>
            </ul>
            <br>
            <p>Waves are, SPRINT  first, MIDDLE second and LONG, third. The number of waves for each distance may vary according to the number of participants.</p>

          
            `,
        distances: [
          { label: "Sprint", val: "600m", p: 33 },
          { label: "Middle", val: "1200m", p: 66 },
          { label: "Long", val: "1800m", p: 100 },
        ],

        stravaIds: { sprint:"3442186454436027514", middle:"3442186454436027514", long:"3442186454436027514" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePicLisboa,
        title: "Ciclismo",
        description:`
             <strong>100% CLOSED TO TRAFFIC</strong>
             <br><br>
            <p>One of the few urban triathlon bike courses in Lisbon that is fully closed to traffic, providing a safe and fast racing experience.</p>
            <p>The course is a 21.5 km multi-lap circuit:</p><br>
            <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
<p>Starting from Transition, athletes head north along Avenida D. João II before joining the IC2 highway. The course is predominantly flat and fast, featuring gentle rolling terrain and a gradual 1 km climb near the turnaround point.</p><br>
<p>A Bike Aid Station is located at the turnaround area and is accessible at the start of each new lap. Please note that littering is only permitted within the designated aid station zone and may result in disqualification if done elsewhere.</p>


            `,
        distances: [  
          { label: "Sprint", val: "21.5km", p: 33 },
          { label: "Middle", val: "43km", p: 66 },
          { label: "Long", val: "86km", p: 100 },
        ],
        stravaIds: { sprint: "3442190057377176544", middle: "3442190057377176544", long: "3442190057377176544" },
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
        image: runPicLisboa,
        title: "Corrida",
        description: `
        <p>The run course starts from the Transition Zone and follows a flat, multi-lap route, creating an exciting and spectator-friendly atmosphere throughout the race.</p><br>

        <strong>The course is a 5 km multi-lap circuit:</strong><br><br>

        <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
        <p>Athletes will find one aid station approximately every 2.5 km, located near the midpoint of the course. One turnaround point is positioned near the iconic Vasco da Gama Bridge, one of the longest bridges in Europe, while the other is located closer to the Transition Zone.</p><br>
        <p>The Finish Line is located on Rossio dos Olivais, directly in front of Doca dos Olivais and the Vasco da Gama Mall, where the Recovery Zone awaits finishers.</p><br>
        
            `,
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "20km", p: 100 },
        ],
        stravaIds: { sprint: "3442184922483070074", middle: "3442184922483070074", long: "3442184922483070074" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "600m",
        "bike": "21.5km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1200m",
        "bike": "43km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1800m",
        "bike": "86km",
        "run": "20km"
      }
    ],
    },

    locations: {
      description: "Plan your trip to Ireland. Discover the rugged beauty of the Emerald Isle, official accommodations, and transport options to make your TRITON Ireland experience seamless and memorable.",
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
    partners: [
      {
        name: "Prouder",
        logo: "/images/partners/prouder.png",
        url: "#"
      },
    ]
  },
  "usa-2027": {
    id: "usa-2027",
    slug: "usa-2027",
    eventFormat: "triton1",
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
    info: {
      title: "USA Triton",
      subtitle: "The American Dream",
      description: "TRITON comes to the United States.",
    },
    scoring: {
      title: "GLOBAL POINTS",
      description: "Earn points for the global ranking.",
    },
    formats: {
      swim: {
        day: "Dia 1",
        date: "21 de Agosto (sexta)",
        startTime: "15:30",
        image: swimPicLisboa,
        title: "Natação",
        description:`
            <p>The swim takes place in Doca dos Olivais, a man-made lake located next to Lisbon’s iconic waterfront. Athletes enter the water from the Oceanário de Lisboa side, with the course positioned just a short distance from the transition area for a smooth race experience.</p>
            <br>
            <p>With calm, still waters and an average temperature of 18°C to 19°C (64°F–66°F), the venue offers excellent conditions for athletes. </p>
            <br>
            <p>The swim course is designed as a loop format</p>
            <ul class="list-disc pl-5 pt-4">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 3 laps</li>
            </ul>
            <br>
            <p>Waves are, SPRINT  first, MIDDLE second and LONG, third. The number of waves for each distance may vary according to the number of participants.</p>

          
            `,
        distances: [
          { label: "Sprint", val: "600m", p: 33 },
          { label: "Middle", val: "1200m", p: 66 },
          { label: "Long", val: "1800m", p: 100 },
        ],

        stravaIds: { sprint:"3442186454436027514", middle:"3442186454436027514", long:"3442186454436027514" },
      },
      bike: {
        day: "Dia 2",
        date: "22 de Agosto (sábado)",
        startTime: "08:00",
        image: bikePicLisboa,
        title: "Ciclismo",
        description:`
             <strong>100% CLOSED TO TRAFFIC</strong>
             <br><br>
            <p>One of the few urban triathlon bike courses in Lisbon that is fully closed to traffic, providing a safe and fast racing experience.</p>
            <p>The course is a 21.5 km multi-lap circuit:</p><br>
            <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
<p>Starting from Transition, athletes head north along Avenida D. João II before joining the IC2 highway. The course is predominantly flat and fast, featuring gentle rolling terrain and a gradual 1 km climb near the turnaround point.</p><br>
<p>A Bike Aid Station is located at the turnaround area and is accessible at the start of each new lap. Please note that littering is only permitted within the designated aid station zone and may result in disqualification if done elsewhere.</p>


            `,
        distances: [  
          { label: "Sprint", val: "21.5km", p: 33 },
          { label: "Middle", val: "43km", p: 66 },
          { label: "Long", val: "86km", p: 100 },
        ],
        stravaIds: { sprint: "3442190057377176544", middle: "3442190057377176544", long: "3442190057377176544" },
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
        image: runPicLisboa,
        title: "Corrida",
        description: `
        <p>The run course starts from the Transition Zone and follows a flat, multi-lap route, creating an exciting and spectator-friendly atmosphere throughout the race.</p><br>

        <strong>The course is a 5 km multi-lap circuit:</strong><br><br>

        <ul class="list-disc pl-5">
                <li>SPRINT — 1 lap</li>
                <li>MIDDLE — 2 laps</li>
                <li>LONG — 4 laps</li>
            </ul>
            <br>
        <p>Athletes will find one aid station approximately every 2.5 km, located near the midpoint of the course. One turnaround point is positioned near the iconic Vasco da Gama Bridge, one of the longest bridges in Europe, while the other is located closer to the Transition Zone.</p><br>
        <p>The Finish Line is located on Rossio dos Olivais, directly in front of Doca dos Olivais and the Vasco da Gama Mall, where the Recovery Zone awaits finishers.</p><br>
        
            `,
        distances: [
          { label: "Sprint", val: "5km", p: 33 },
          { label: "Middle", val: "10km", p: 66 },
          { label: "Long", val: "20km", p: 100 },
        ],
        stravaIds: { sprint: "3442184922483070074", middle: "3442184922483070074", long: "3442184922483070074" },
      },
      distanceTable: [
      {
        "name": "SPRINT",
        "swim": "600m",
        "bike": "21.5km",
        "run": "5km"
      },
      {
        "name": "MIDDLE",
        "swim": "1200m",
        "bike": "43km",
        "run": "10km"
      },
      {
        "name": "LONG",
        "swim": "1800m",
        "bike": "86km",
        "run": "20km"
      }
    ],
    },

    locations: {
      description: "Plan your trip to the USA. Discover local attractions, official accommodations, and transport options to make your TRITON USA experience seamless and memorable.",
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
    partners: [
      {
        name: "Prouder",
        logo: "/images/partners/prouder.png",
        url: "#"
      },
    ]
  },
};
