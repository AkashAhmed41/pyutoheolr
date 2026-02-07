import {
  DEFAULT_RUNTIME,
  MAX_CAST_MEMBERS,
} from "@/lib/constants/ApplicationConstants";
import type {
  TMDBMovie,
  Movie,
  TMDBGenre,
  Genre,
  TMDBMovieListResponse,
  TMDBGenreListResponse,
  TMDBMovieDetails,
  MovieDetails,
  CastMember,
} from "@/types/Interfaces";

export const mapTMDBMovieToMovie = (tmdbMovie: TMDBMovie): Movie => {
  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    originalTitle: tmdbMovie.original_title,
    overview: tmdbMovie.overview,
    backdropPath: tmdbMovie.backdrop_path,
    posterPath: tmdbMovie.poster_path,
    genreIds: tmdbMovie.genre_ids,
    popularity: tmdbMovie.popularity,
    releaseDate: tmdbMovie.release_date,
    voteAverage: tmdbMovie.vote_average,
    voteCount: tmdbMovie.vote_count,
    adult: tmdbMovie.adult,
    video: tmdbMovie.video,
    originalLanguage: tmdbMovie.original_language,
  };
};

export const mapTMDBGenreToGenre = (tmdbGenre: TMDBGenre): Genre => {
  return {
    id: tmdbGenre.id,
    name: tmdbGenre.name,
  };
};

const mapTMDBStoreCastToCastMember = (cast: any): CastMember => {
  return {
    id: cast.id,
    name: cast.name,
    character: cast.character,
    profilePath: cast.profile_path,
  };
};

export const mapTMDBMovieDetailsToMovieDetails = (
  tmdbDetails: TMDBMovieDetails,
): MovieDetails => {
  return {
    ...mapTMDBMovieToMovie(tmdbDetails),
    tagline: tmdbDetails.tagline,
    runtime: tmdbDetails.runtime || DEFAULT_RUNTIME,
    genres: tmdbDetails.genres.map(mapTMDBGenreToGenre),
    status: tmdbDetails.status,
    cast: tmdbDetails.credits
      ? tmdbDetails.credits.cast
          .sort((a, b) => a.order - b.order)
          .slice(0, MAX_CAST_MEMBERS)
          .map(mapTMDBStoreCastToCastMember)
      : [],
  };
};

export const mapMovieListResponse = (
  response: TMDBMovieListResponse,
): {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
} => {
  return {
    page: response.page,
    results: response.results.map(mapTMDBMovieToMovie),
    totalPages: response.total_pages,
    totalResults: response.total_results,
  };
};

export const mapGenreListResponse = (
  response: TMDBGenreListResponse,
): { genres: Genre[] } => {
  return {
    genres: response.genres.map(mapTMDBGenreToGenre),
  };
};
