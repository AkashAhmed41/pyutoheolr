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
