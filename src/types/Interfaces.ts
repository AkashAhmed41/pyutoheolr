export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBMovieListResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenreListResponse {
  genres: TMDBGenre[];
}

export interface TMDBProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TMDBStarCast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface TMDBMovieCredits {
  cast: TMDBStarCast[];
}

export interface TMDBMovieDetails extends TMDBMovie {
  tagline: string | null;
  runtime: number | null;
  genres: TMDBGenre[];
  production_companies: TMDBProductionCompany[];
  status: string;
  revenue: number;
  budget: number;
  credits?: TMDBMovieCredits;
}

export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  backdropPath: string | null;
  posterPath: string | null;
  genreIds: number[];
  popularity: number;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  adult: boolean;
  video: boolean;
  originalLanguage: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profilePath: string | null;
}

export interface MovieDetails extends Movie {
  tagline: string | null;
  runtime: number;
  genres: Genre[];
  status: string;
  cast: CastMember[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreWithMovies {
  genre: Genre;
  movies: Movie[];
}

export interface HomepageData {
  topRatedMovies: Movie[];
  genresWithPopularMovies: GenreWithMovies[];
  allGenres: Genre[];
}
