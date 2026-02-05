import { TMDB_CONFIG, CACHE_CONFIG } from "@/config/tmdb.config";
import { isNullOrUndefined } from "@/lib/utils/objectUtils";

export async function tmdbFetch<T>(
  endpoint: string,
  params?: Record<string, string | number>,
  revalidate: number = CACHE_CONFIG.DEFAULT_REVALIDATE,
): Promise<T> {
  if (typeof window !== "undefined") {
    throw new Error("The fetch function must be called on the server side");
  }

  const url = new URL(`${TMDB_CONFIG.BASE_URL}${endpoint}`);
  url.searchParams.append("api_key", TMDB_CONFIG.API_KEY!);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (isNullOrUndefined(value)) return;
      url.searchParams.append(key, String(value));
    });
  }

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate },
    });

    if (!res.ok) {
      throw new Error(
        `TMDB API Error: ${res.status} ${res.statusText} - ${endpoint}`,
      );
    }

    return res.json();
  } catch (error) {
    console.error("TMDB Fetch Error:", error);
    throw error;
  }
}
