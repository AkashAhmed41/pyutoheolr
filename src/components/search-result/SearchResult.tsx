import React from "react";
import MovieGrid from "@/components/common/MovieGrid";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import EmptyList from "@/components/common/EmptyList";
import type { Movie } from "@/types/Interfaces";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";

interface SearchResultProps {
  query: string;
  movies: Movie[];
}

export default function SearchResult({ query, movies }: SearchResultProps) {
  if (isEmptyArray(movies)) {
    return (
      <EmptyList
        title={getLocalizedText("SEARCH", "EMPTY_TITLE")}
        description={getLocalizedText("SEARCH", "EMPTY_DESCRIPTION")}
      />
    );
  }

  return (
    <section>
      <div className="mb-8 px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          {getLocalizedText("SEARCH", "RESULTS_FOR").replace("{query}", query)}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-2xl">
          {getLocalizedText("SEARCH", "GUIDE")}
        </p>
      </div>
      <MovieGrid movies={movies} />
    </section>
  );
}
