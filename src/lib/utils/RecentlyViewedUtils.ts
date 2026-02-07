import {
  RECENTLY_VIEWED_MOVIES_LIMIT,
  RECENTLY_VIEWED_STORAGE_KEY,
} from "@/lib/constants/ApplicationConstants";
import type { Movie } from "@/types/Interfaces";
import { isEmptyArray } from "./ObjectUtils";

interface RecentlyViewedMovie {
  movie: Movie;
  timestamp: number;
}

export function getRecentlyViewedMovies(): RecentlyViewedMovie[] {
  const stored = localStorage.getItem(RECENTLY_VIEWED_STORAGE_KEY);
  if (!stored) return [];

  const parsed = JSON.parse(stored);
  return !isEmptyArray(parsed) ? parsed : [];
}

export function addToRecentlyViewed(movie: Movie): void {
  const existingMovies = getRecentlyViewedMovies();
  const filteredMovies = existingMovies.filter(
    (item) => item.movie.id !== movie.id,
  );

  const updatedMovies: RecentlyViewedMovie[] = [
    { movie, timestamp: Date.now() },
    ...filteredMovies,
  ];

  const slicedMovies = updatedMovies.slice(0, RECENTLY_VIEWED_MOVIES_LIMIT);

  localStorage.setItem(
    RECENTLY_VIEWED_STORAGE_KEY,
    JSON.stringify(slicedMovies),
  );
}
