import { tmdbFetch } from "@/lib/tmdb/TMDBFetch";
import type { TMDBMovieListResponse, Movie } from "@/types/Interfaces";
import { DEFAULT_PAGE } from "../constants/ApplicationConstants";
import { mapMovieListResponse } from "@/lib/mappers/TMDBMapper";

export interface SearchResults {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
}

export async function fetchSearchMovies(
  query: string,
  page: number = DEFAULT_PAGE,
): Promise<SearchResults> {
  if (!query) {
    return {
      results: [],
      page: DEFAULT_PAGE,
      totalPages: 0,
      totalResults: 0,
    };
  }

  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: "/search/movie",
    params: {
      query,
      page,
      include_adult: "false",
    },
  });

  return mapMovieListResponse(data);
}
