import {
  getTopRatedMovies,
  getMoviesByGenre,
  getGenres,
} from "@/lib/tmdb/tmdb.server";
import type { HomepageData, GenreWithMovies, Genre } from "@/types/tmdb";
import {
  DEFAULT_PAGE,
  MOVIES_FOR_HOMEPAGE_PER_GENRE,
} from "@/lib/constants/ApplicationConstants";
import { isEmptyArray } from "@/lib/utils/objectUtils";

export async function fetchHomepageData(): Promise<HomepageData> {
  try {
    const [genresResponse, topRatedResponse] = await Promise.all([
      getGenres(),
      getTopRatedMovies(DEFAULT_PAGE),
    ]);

    const allGenres = genresResponse.genres;
    const topRatedMovies = topRatedResponse.results;

    const genresWithMoviesPromises = allGenres.map(async (genre: Genre) => {
      const moviesResponse = await getMoviesByGenre(
        genre.id,
        DEFAULT_PAGE,
        "popularity.desc",
      );

      const movies = moviesResponse.results.slice(
        0,
        MOVIES_FOR_HOMEPAGE_PER_GENRE,
      );

      return {
        genre,
        movies,
      } as GenreWithMovies;
    });

    const genresWithMovies = await Promise.all(genresWithMoviesPromises);
    const genresWithMoviesFiltered = genresWithMovies.filter(
      (item: GenreWithMovies) => !isEmptyArray(item.movies),
    );

    return {
      topRatedMovies,
      genresWithPopularMovies: genresWithMoviesFiltered,
      allGenres,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}
