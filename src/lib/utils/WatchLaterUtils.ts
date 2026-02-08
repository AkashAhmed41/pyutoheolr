"use client";

import {
  WATCH_LATER_MOVIES_LIMIT,
  WATCH_LATER_STORAGE_KEY,
  NOT_FOUND_INDEX,
} from "@/lib/constants/ApplicationConstants";
import type { Movie } from "@/types/Interfaces";
import { isEmptyArray } from "./ObjectUtils";
import { showToast } from "./ToastUtils";
import { getLocalizedText } from "./CommonUtils";

export function getWatchLaterMovies(): Movie[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(WATCH_LATER_STORAGE_KEY);
  if (!stored) return [];

  const parsed = JSON.parse(stored);
  return !isEmptyArray(parsed) ? parsed : [];
}

export function toggleWatchLater(movie: Movie): void {
  const existingMovies = getWatchLaterMovies();
  const index = existingMovies.findIndex((m) => m.id === movie.id);

  if (index > NOT_FOUND_INDEX) {
    const updatedMovies = existingMovies.filter((m) => m.id !== movie.id);
    localStorage.setItem(
      WATCH_LATER_STORAGE_KEY,
      JSON.stringify(updatedMovies),
    );
  } else {
    if (existingMovies.length >= WATCH_LATER_MOVIES_LIMIT) {
      showToast(getLocalizedText("WATCH_LATER", "LIMIT_REACHED"), "error");
      return;
    }

    const updatedMovies = [movie, ...existingMovies];
    localStorage.setItem(
      WATCH_LATER_STORAGE_KEY,
      JSON.stringify(updatedMovies),
    );
  }
}

export function isInWatchLater(movieId: number): boolean {
  const existingMovies = getWatchLaterMovies();
  return existingMovies.some((m) => m.id === movieId);
}
