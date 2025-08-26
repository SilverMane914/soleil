import qs from "qs";
import type { APIResponse, APIResponseCollection } from "@/types/strapi";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchAPI<T extends string>(
  endpoint: string,
  params?: Record<string, any>
): Promise<APIResponse<T> | APIResponseCollection<T>> {
  const queryString = params ? `?${qs.stringify(params)}` : "";
  const url = `${STRAPI_URL}/api/${endpoint}${queryString}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
}

// Helper function for fetching single items
export async function fetchSingle<T extends string>(
  endpoint: string,
  params?: Record<string, any>
): Promise<APIResponse<T>> {
  return fetchAPI<T>(endpoint, params) as Promise<APIResponse<T>>;
}

// Helper function for fetching collections
export async function fetchCollection<T extends string>(
  endpoint: string,
  params?: Record<string, any>
): Promise<APIResponseCollection<T>> {
  return fetchAPI<T>(endpoint, params) as Promise<APIResponseCollection<T>>;
}

// Common query parameters
export const defaultParams = {
  populate: "*",
  "pagination[pageSize]": 100,
};
