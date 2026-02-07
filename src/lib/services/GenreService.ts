import { getGenres, getMoviesByGenre } from "@/lib/tmdb/TMDBServer";
import type { Genre, Movie } from "@/types/Interfaces";
import { getGenreSlug } from "@/lib/utils/PageRouteUtils";
import { DEFAULT_PAGE } from "../constants/ApplicationConstants";

export interface GenrePageData {
  genre: Genre;
  movies: Movie[];
}

export async function fetchGenrePageData(
  genreSlug: string,
  sortBy: string = "popularity.desc",
): Promise<GenrePageData | null> {
  try {
    const genresResponse = await getGenres();
    const { genres } = genresResponse;

    const genre = genres.find(
      (g) => getGenreSlug(g.name) === genreSlug.toLowerCase(),
    );

    if (!genre) {
      return null;
    }

    const moviesResponse = await getMoviesByGenre(
      genre.id,
      DEFAULT_PAGE,
      sortBy,
    );

    return {
      genre,
      movies: moviesResponse.results,
    };
  } catch (error) {
    console.error(`Error fetching genre page data for ${genreSlug}:`, error);
    throw error;
  }
}
