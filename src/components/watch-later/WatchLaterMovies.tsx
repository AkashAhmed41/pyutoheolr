"use client";

import React from "react";
import { useWatchLater } from "@/hooks/useWatchLater";
import MovieGrid from "@/components/common/MovieGrid";
import EmptyList from "@/components/common/EmptyList";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import WatchLaterSkeleton from "@/skeleton/watch-later/WatchLaterSkeleton";

export default function WatchLaterMovies() {
  const { movies, hasMounted } = useWatchLater();

  if (!hasMounted) {
    return <WatchLaterSkeleton />;
  }

  return (
    <main className="max-w-[1200px] mx-auto py-8">
      <div className="mb-8 px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          {getLocalizedText("WATCH_LATER", "TITLE")}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mt-1">
          {getLocalizedText("WATCH_LATER", "DESCRIPTION")}
        </p>
      </div>
      {isEmptyArray(movies) ? (
        <EmptyList
          title={getLocalizedText("WATCH_LATER", "NO_MOVIES_TITLE")}
          description={getLocalizedText("WATCH_LATER", "NO_MOVIES_DESCRIPTION")}
        />
      ) : (
        <MovieGrid movies={movies} />
      )}
    </main>
  );
}
