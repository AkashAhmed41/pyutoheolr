"use client";

import React, { useState, useEffect } from "react";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { RECENTLY_VIEWED_MOVIES_HOMEPAGE_LIMIT } from "@/lib/constants/ApplicationConstants";
import { appRouteList } from "@/lib/utils/PageRouteUtils";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import MovieList from "@/components/common/MovieList";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import GenreSectionSkeleton from "@/skeleton/homepage/GenreSectionSkeleton";

export default function RecentlyViewedSection() {
  const { movies } = useRecentlyViewed();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <GenreSectionSkeleton />;
  }

  if (isEmptyArray(movies)) {
    return null;
  }

  const slicedMovies = movies.slice(0, RECENTLY_VIEWED_MOVIES_HOMEPAGE_LIMIT);
  return (
    <MovieList
      title={getLocalizedText("RECENTLY_VIEWED", "TITLE")}
      subtitle={getLocalizedText("RECENTLY_VIEWED", "DESCRIPTION")}
      href={appRouteList.recentlyViewed}
      movies={slicedMovies}
    />
  );
}
