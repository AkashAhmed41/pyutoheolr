import { getMovieDetails, getSimilarMovies } from "@/lib/tmdb/TMDBServer";
import type { MovieDetails, Movie } from "@/types/Interfaces";

export interface MovieDetailsPageData {
  movie: MovieDetails;
  similarMovies: Movie[];
}

export async function fetchMovieDetailsPageData(
  movieId: number,
): Promise<MovieDetailsPageData> {
  const [movie, similarResponse] = await Promise.all([
    getMovieDetails(movieId),
    getSimilarMovies(movieId),
  ]);

  return {
    movie,
    similarMovies: similarResponse.results,
  };
}
