"use client";

import { useEffect, useState, useCallback } from "react";
import {
  getRecentlyViewedMovies,
  addToRecentlyViewed,
} from "@/lib/utils/RecentlyViewedUtils";
import type { Movie } from "@/types/Interfaces";

export function useRecentlyViewed() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = useCallback(() => {
    const items = getRecentlyViewedMovies();
    setMovies(items.map((item) => item.movie));
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const addMovieToHistory = useCallback(
    (movie: Movie) => {
      addToRecentlyViewed(movie);
      fetchMovies();
    },
    [fetchMovies],
  );

  return {
    movies,
    addMovieToHistory,
  };
}
