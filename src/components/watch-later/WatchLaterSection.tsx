"use client";

import React from "react";
import { useWatchLater } from "@/hooks/useWatchLater";
import { WATCH_LATER_MOVIES_HOMEPAGE_LIMIT } from "@/lib/constants/ApplicationConstants";
import { appRouteList } from "@/lib/utils/PageRouteUtils";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import MovieList from "@/components/common/MovieList";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import GenreSectionSkeleton from "@/skeleton/homepage/GenreSectionSkeleton";

export default function WatchLaterSection() {
  const { movies, hasMounted } = useWatchLater();

  if (!hasMounted) {
    return <GenreSectionSkeleton />;
  }

  if (isEmptyArray(movies)) {
    return null;
  }

  const slicedMovies = movies.slice(0, WATCH_LATER_MOVIES_HOMEPAGE_LIMIT);
  return (
    <MovieList
      title={getLocalizedText("WATCH_LATER", "TITLE")}
      subtitle={getLocalizedText("WATCH_LATER", "DESCRIPTION")}
      href={appRouteList.watchLater}
      movies={slicedMovies}
    />
  );
}
