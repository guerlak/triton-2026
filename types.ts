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
  status: 'Confirmed' | 'Planned';
  year: number;
  format: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  linkSocial?: string;
}