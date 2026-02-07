import React from "react";
import MovieGrid from "@/components/common/MovieGrid";
import type { Movie } from "@/types/Interfaces";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

interface SimilarMoviesProps {
  movies: Movie[];
}

export default function SimilarMovies({ movies }: SimilarMoviesProps) {
  if (isEmptyArray(movies)) return null;

  return (
    <div className="mt-20">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
        {getLocalizedText("MOVIE_DETAILS", "SIMILAR_MOVIES")}
      </h2>
      <MovieGrid movies={movies} />
    </div>
  );
}
