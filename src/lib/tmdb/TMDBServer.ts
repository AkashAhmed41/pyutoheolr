import { DEFAULT_PAGE } from "@/lib/constants/ApplicationConstants";
import { tmdbFetch } from "@/lib/tmdb/TMDBFetch";
import { CACHE_CONFIG } from "@/config/tmdb.config";
import type {
  TMDBGenreListResponse,
  TMDBMovieListResponse,
  Genre,
  Movie,
} from "@/types/Interfaces";
import {
  mapGenreListResponse,
  mapMovieListResponse,
} from "@/lib/mappers/TMDBMapper";

export async function getGenres(): Promise<{ genres: Genre[] }> {
  const data = await tmdbFetch<TMDBGenreListResponse>({
    endpoint: "/genre/movie/list",
    revalidate: CACHE_CONFIG.GENRES_REVALIDATE,
  });
  return mapGenreListResponse(data);
}

export async function getTopRatedMovies(
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: "/movie/top_rated",
    params: { page },
  });
  return mapMovieListResponse(data);
}

export async function getPopularMovies(
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: "/movie/popular",
    params: { page },
  });
  return mapMovieListResponse(data);
}

export async function getMoviesByGenre(
  genreId: number,
  page: number = DEFAULT_PAGE,
  sortBy: string = "popularity.desc",
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: "/discover/movie",
    params: {
      with_genres: genreId,
      page,
      sort_by: sortBy,
    },
  });
  return mapMovieListResponse(data);
}

export async function getMovieDetails(movieId: number): Promise<any> {
  // Return raw for now until we have a details mapper
  return tmdbFetch<any>({
    endpoint: `/movie/${movieId}`,
    params: { append_to_response: "credits" },
  });
}

export async function getSimilarMovies(
  movieId: number,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: `/movie/${movieId}/similar`,
  });
  return mapMovieListResponse(data);
}

// ============================================
// SEARCH
// ============================================

export async function searchMovies(
  query: string,
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>({
    endpoint: "/search/movie",
    params: { query, page },
    revalidate: CACHE_CONFIG.SEARCH_REVALIDATE,
  });
  return mapMovieListResponse(data);
}
