import React from "react";
import MovieGridSkeleton from "../common/MovieGridSkeleton";

export default function SearchResultSkeleton() {
  return (
    <section>
      <div className="mb-8 px-4 md:px-8 animate-pulse">
        <div className="h-8 md:h-9 w-64 bg-gray-800 rounded-lg mb-2" />
        <div className="h-4 w-full max-w-2xl bg-gray-800 rounded mt-1" />
      </div>
      <MovieGridSkeleton />
    </section>
  );
}
