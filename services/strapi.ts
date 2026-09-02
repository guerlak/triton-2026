import { CalendarEvent, TestimonialProps } from "@/types";
import { EVENTS, TESTIMONIALS } from "@/constants";

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

interface StrapiEntity<T> {
  id: number;
  documentId?: string;
  attributes?: T;
  [key: string]: any;
}

interface StrapiResponse<T> {
  data: StrapiEntity<T>[] | StrapiEntity<T>;
  meta?: any;
}

export async function fetchStrapiEvents(): Promise<CalendarEvent[]> {
  try {
    const res = await fetch(`${STRAPI_BASE_URL}/api/events?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return EVENTS;
    }

    const json: StrapiResponse<any> = await res.json();
    const dataList = Array.isArray(json.data) ? json.data : json.data ? [json.data] : [];

    if (dataList.length === 0) {
      return EVENTS;
    }

    return dataList.map((item) => {
      const attrs = item.attributes || item;
      const imageUrl = attrs.coverImage?.url || attrs.image?.url || attrs.image;
      return {
        slug: attrs.slug || `event-${item.id}`,
        date: attrs.date || '',
        location: attrs.location || '',
        country: attrs.country || '',
        flag: attrs.flag || '',
        status: attrs.eventStatus || attrs.status || 'Planned',
        year: attrs.year || new Date().getFullYear(),
        format: attrs.format || 'Triton 1',
        eventFormat: attrs.eventFormat || '',
        image: imageUrl ? `${STRAPI_BASE_URL}${imageUrl}` : undefined,
      };
    });
  } catch (error) {
    console.warn("Strapi fetch error, falling back to static EVENTS:", error);
    return EVENTS;
  }
}

export async function fetchStrapiTestimonials(): Promise<TestimonialProps[]> {
  try {
    const res = await fetch(`${STRAPI_BASE_URL}/api/testimonials?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return TESTIMONIALS;
    }

    const json: StrapiResponse<any> = await res.json();
    const dataList = Array.isArray(json.data) ? json.data : json.data ? [json.data] : [];

    if (dataList.length === 0) {
      return TESTIMONIALS;
    }

    return dataList.map((item) => {
      const attrs = item.attributes || item;
      const avatarUrl = attrs.avatar?.url || attrs.avatarUrl || attrs.avatar_url;
      return {
        quote: attrs.quote || '',
        author: attrs.author || '',
        role: attrs.role || '',
        company: attrs.company || '',
        avatarUrl: avatarUrl ? `${STRAPI_BASE_URL}${avatarUrl}` : undefined,
        linkSocial: attrs.linkSocial || attrs.link_social || '',
      };
    });
  } catch (error) {
    console.warn("Strapi fetch error, falling back to static TESTIMONIALS:", error);
    return TESTIMONIALS;
  }
}
