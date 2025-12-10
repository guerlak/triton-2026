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
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}