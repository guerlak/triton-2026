import { getAuthToken } from "./backendEventService";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export type BlogPostStatus = "Draft" | "Published";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  status: BlogPostStatus;
  authorName: string;
  authorId?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export async function getPublishedPostsFromApi(params?: {
  category?: string;
  search?: string;
}): Promise<BlogPost[]> {
  try {
    const cleanParams: Record<string, string> = {};
    if (params?.category) cleanParams.category = params.category;
    if (params?.search) cleanParams.search = params.search;

    const query =
      Object.keys(cleanParams).length > 0
        ? "?" + new URLSearchParams(cleanParams).toString()
        : "";

    const res = await fetch(`${API_BASE_URL}/blog${query}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("[getPublishedPostsFromApi] Error:", error);
    return [];
  }
}

export async function getPublishedPostBySlugFromApi(
  slug: string
): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch post '${slug}': ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`[getPublishedPostBySlugFromApi] Error fetching '${slug}':`, error);
    return null;
  }
}

export async function getAllAdminPostsFromApi(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/admin/all`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch admin blog posts: ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("[getAllAdminPostsFromApi] Error:", error);
    return [];
  }
}

export async function getAdminPostBySlugFromApi(
  slug: string
): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/admin/${slug}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch admin post '${slug}': ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`[getAdminPostBySlugFromApi] Error fetching '${slug}':`, error);
    return null;
  }
}

export async function createBlogPostApi(
  postData: Partial<BlogPost>
): Promise<{ success: boolean; data?: BlogPost; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(postData),
    });

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Error creating blog post." };
  }
}

export async function updateBlogPostApi(
  idOrSlug: string,
  postData: Partial<BlogPost>
): Promise<{ success: boolean; data?: BlogPost; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${idOrSlug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(postData),
    });

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Error updating blog post." };
  }
}

export async function deleteBlogPostApi(
  idOrSlug: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${idOrSlug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Error deleting blog post." };
  }
}
