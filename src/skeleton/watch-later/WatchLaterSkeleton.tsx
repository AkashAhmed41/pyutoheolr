import React from "react";
import MovieGridSkeleton from "../common/MovieGridSkeleton";

export default function WatchLaterSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1200px] mx-auto py-8">
        <div className="mb-8 px-4 md:px-8">
          <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse" />
          <div className="h-4 w-72 bg-gray-800 rounded-lg animate-pulse mt-2" />
        </div>
        <MovieGridSkeleton />
      </div>
    </div>
  );
}
