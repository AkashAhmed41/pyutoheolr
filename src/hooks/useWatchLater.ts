"use client";

import { useEffect, useState, useCallback } from "react";
import {
  getWatchLaterMovies,
  toggleWatchLater as toggleWatchLaterUtil,
  isInWatchLater as checkInWatchLater,
} from "@/lib/utils/WatchLaterUtils";
import type { Movie } from "@/types/Interfaces";

export function useWatchLater() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  const fetchMovies = useCallback(() => {
    const items = getWatchLaterMovies();
    setMovies(items);
  }, []);

  useEffect(() => {
    fetchMovies();
    setHasMounted(true);
  }, [fetchMovies]);

  const toggleWatchLater = useCallback(
    (movie: Movie) => {
      toggleWatchLaterUtil(movie);
      fetchMovies();
      window.dispatchEvent(new Event("storage"));
    },
    [fetchMovies],
  );

  const isInWatchLater = useCallback((movieId: number) => {
    return checkInWatchLater(movieId);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => fetchMovies();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [fetchMovies]);

  return {
    movies,
    toggleWatchLater,
    isInWatchLater,
    hasMounted,
  };
}
