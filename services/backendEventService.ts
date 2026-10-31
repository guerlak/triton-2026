import { EventData } from "@/eventdata";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export interface UploadResponse {
  url: string;
  key: string;
  size: number;
  originalName: string;
  mimeType: string;
}

export async function getEventsFromApi(params?: Record<string, string>): Promise<EventData[]> {
  try {
    const query = params ? "?" + new URLSearchParams(params).toString() : "";
    const res = await fetch(`${API_BASE_URL}/events${query}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Falha ao buscar eventos: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("[getEventsFromApi] Erro:", error);
    return [];
  }
}

export async function getEventBySlugFromApi(slug: string): Promise<EventData | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/events/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Falha ao buscar evento '${slug}': ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`[getEventBySlugFromApi] Erro ao buscar '${slug}':`, error);
    return null;
  }
}

export async function createEventApi(eventData: Partial<EventData>): Promise<{ success: boolean; data?: EventData; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, message: json.message || "Erro ao criar evento." };
    }

    return { success: true, data: json.data };
  } catch (error: any) {
    return { success: false, message: error.message || "Erro de conexão com o servidor." };
  }
}

export async function updateEventApi(idOrSlug: string, eventData: Partial<EventData>): Promise<{ success: boolean; data?: EventData; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/events/${idOrSlug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, message: json.message || "Erro ao atualizar evento." };
    }

    return { success: true, data: json.data };
  } catch (error: any) {
    return { success: false, message: error.message || "Erro de conexão ao atualizar evento." };
  }
}

export async function uploadMediaApi(file: File, folder: string = "events"): Promise<{ success: boolean; data?: UploadResponse; message?: string }> {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    const res = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, message: json.message || "Erro no upload do arquivo." };
    }

    return { success: true, data: json.data };
  } catch (error: any) {
    return { success: false, message: error.message || "Erro de conexão ao enviar arquivo." };
  }
}

export async function deleteEventApi(idOrSlug: string): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/events/${idOrSlug}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, message: json.message || "Erro ao excluir evento." };
    }

    return { success: true, message: json.message };
  } catch (error: any) {
    return { success: false, message: error.message || "Erro ao conectar com o servidor." };
  }
}
