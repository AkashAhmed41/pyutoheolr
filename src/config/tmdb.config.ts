export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p",
  API_KEY: process.env.TMDB_API_KEY,
} as const;

export const IMAGE_SIZES = {
  POSTER_SMALL: "w185",
  POSTER_MEDIUM: "w342",
  POSTER_LARGE: "w500",
  POSTER_XLARGE: "w780",
  BACKDROP_SMALL: "w300",
  BACKDROP_MEDIUM: "w780",
  BACKDROP_LARGE: "w1280",
  BACKDROP_ORIGINAL: "original",
  PROFILE: "w185",
} as const;

export const CACHE_CONFIG = {
  DEFAULT_REVALIDATE: 3600,
  GENRES_REVALIDATE: 86400,
  SEARCH_REVALIDATE: 300,
} as const;
