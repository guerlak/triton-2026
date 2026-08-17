import { cache } from 'react';
import { EVENT_DATA_MAP, EventData } from '@/eventdata';

export const getEventData = cache(async (slug: string): Promise<EventData | null> => {
  const data = EVENT_DATA_MAP[slug];
  return data ?? null;
});
