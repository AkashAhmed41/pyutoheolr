import { TMDB_CONFIG, CACHE_CONFIG } from "@/config/tmdb.config";
import { generateQueryString } from "@/lib/utils/CommonUtils";

interface TMDBFetchOptions {
  endpoint: string;
  params?: Record<string, string | number>;
  revalidate?: number;
}

export async function tmdbFetch<T>({
  endpoint,
  params,
  revalidate = CACHE_CONFIG.DEFAULT_REVALIDATE,
}: TMDBFetchOptions): Promise<T> {
  if (typeof window !== "undefined") {
    throw new Error("The fetch function must be called on the server side");
  }

  if (!TMDB_CONFIG.API_KEY) {
    throw new Error(
      "TMDB_API_KEY is not defined. Please add it to your .env.local file.",
    );
  }

  const queryOptions = {
    api_key: TMDB_CONFIG.API_KEY,
    ...params,
  };

  const queryString = generateQueryString("", queryOptions);
  const url = `${TMDB_CONFIG.BASE_URL}${endpoint}${queryString}`;

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
