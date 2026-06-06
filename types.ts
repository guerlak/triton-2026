export enum EventFormat {
  TRITON_1 = 'TRITON 1',
  TRITON_3 = 'TRITON 3'
}

export interface Distance {
  name: string;
  swim: string;
  bike: string;
  run: string;
}

export interface CalendarEvent {
  date: string;
  location: string;
  country: string;
  flag: string; // Emoji or code
  status: 'Confirmed' | 'Planned' | 'Completed';
  year: number;
  format: string;
  eventFormat?: string;
  image?: any;
  slug: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: any;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company: string;
  avatarUrl?: string;
  avatar_url?: string;
  linkSocial?: string;
  link_social?: string;
}