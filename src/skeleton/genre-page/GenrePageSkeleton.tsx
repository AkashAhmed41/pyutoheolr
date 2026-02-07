import React from "react";
import GenrePageHeaderSkeleton from "./GenrePageHeaderSkeleton";
import MovieGridSkeleton from "./MovieGridSkeleton";

export default function GenrePageSkeleton() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-[1200px] mx-auto">
        <GenrePageHeaderSkeleton />
        <MovieGridSkeleton />
      </div>
    </div>
  );
}
