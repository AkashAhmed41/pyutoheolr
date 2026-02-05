import { DEFAULT_PAGE } from "@/lib/constants/ApplicationConstants";
import { tmdbFetch } from "@/lib/tmdb/tmdb.fetch";
import { CACHE_CONFIG } from "@/config/tmdb.config";
import type {
  TMDBGenreListResponse,
  TMDBMovieListResponse,
  Genre,
  Movie,
} from "@/types/tmdb";
import {
  mapGenreListResponse,
  mapMovieListResponse,
} from "@/lib/mappers/tmdb.mapper";

export async function getGenres(): Promise<{ genres: Genre[] }> {
  const data = await tmdbFetch<TMDBGenreListResponse>(
    "/genre/movie/list",
    undefined,
    CACHE_CONFIG.GENRES_REVALIDATE,
  );
  return mapGenreListResponse(data);
}

export async function getTopRatedMovies(
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>("/movie/top_rated", {
    page,
  });
  return mapMovieListResponse(data);
}

export async function getPopularMovies(
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>("/movie/popular", {
    page,
  });
  return mapMovieListResponse(data);
}

export async function getMoviesByGenre(
  genreId: number,
  page: number = DEFAULT_PAGE,
  sortBy: string = "popularity.desc",
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>("/discover/movie", {
    with_genres: genreId,
    page,
    sort_by: sortBy,
  });
  return mapMovieListResponse(data);
}

export async function getMovieDetails(movieId: number): Promise<any> {
  // Return raw for now until we have a details mapper
  return tmdbFetch<any>(`/movie/${movieId}`, {
    append_to_response: "credits",
  });
}

export async function getSimilarMovies(
  movieId: number,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>(
    `/movie/${movieId}/similar`,
  );
  return mapMovieListResponse(data);
}

// ============================================
// SEARCH
// ============================================

export async function searchMovies(
  query: string,
  page: number = DEFAULT_PAGE,
): Promise<{ results: Movie[] }> {
  const data = await tmdbFetch<TMDBMovieListResponse>(
    "/search/movie",
    { query, page },
    CACHE_CONFIG.SEARCH_REVALIDATE,
  );
  return mapMovieListResponse(data);
}
