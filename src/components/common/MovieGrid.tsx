import React from "react";
import MovieCard from "@/components/common/MovieCard";
import type { Movie } from "@/types/Interfaces";

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(16px,4vw,24px)] px-4 md:px-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} className="w-full" />
      ))}
    </div>
  );
}
