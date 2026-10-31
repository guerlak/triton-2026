import { cache } from 'react';
import { EVENT_DATA_MAP, EventData } from '@/eventdata';
import { getEventBySlugFromApi } from './backendEventService';

export const getEventData = cache(async (slug: string): Promise<EventData | null> => {
  // 1. Tenta buscar do backend (PostgreSQL)
  try {
    const apiData = await getEventBySlugFromApi(slug);
    if (apiData) {
      return apiData;
    }
  } catch (error) {
    console.warn(`[getEventData] Falha ao buscar '${slug}' da API, usando fallback local.`);
  }

  // 2. Fallback para os dados estáticos locais do eventdata.ts
  const fallback = EVENT_DATA_MAP[slug];
  return fallback ?? null;
});
