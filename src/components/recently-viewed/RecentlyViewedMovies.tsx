"use client";

import React, { useState, useEffect } from "react";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import MovieGrid from "@/components/common/MovieGrid";
import EmptyList from "@/components/common/EmptyList";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { ClapperboardIcon } from "@/lib/svg/icons";
import RecentlyViewedSkeleton from "@/skeleton/recently-viewed/RecentlyViewedSkeleton";

export default function RecentlyViewedMovies() {
  const { movies } = useRecentlyViewed();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <RecentlyViewedSkeleton />;
  }

  return (
    <main className="max-w-[1200px] mx-auto py-8">
      <div className="mb-8 px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          {getLocalizedText("RECENTLY_VIEWED", "TITLE")}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mt-1">
          {getLocalizedText("RECENTLY_VIEWED", "DESCRIPTION")}
        </p>
      </div>
      {isEmptyArray(movies) ? (
        <EmptyList
          icon={<ClapperboardIcon className="w-16 h-16 md:w-20 md:h-20" />}
          title={getLocalizedText("RECENTLY_VIEWED", "NO_MOVIES_TITLE")}
          description={getLocalizedText(
            "RECENTLY_VIEWED",
            "NO_MOVIES_DESCRIPTION",
          )}
        />
      ) : (
        <MovieGrid movies={movies} />
      )}
    </main>
  );
}
