import React from "react";
import MovieGridSkeleton from "@/skeleton/common/MovieGridSkeleton";

export default function MovieDetailSkeleton() {
  return (
    <div className="min-h-screen bg-black animate-pulse overflow-hidden">
      <div className="relative h-[50vh] md:h-[70vh] w-full bg-gray-900" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-32 md:-mt-64 relative z-10 pb-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-0">
          <div className="w-36 md:w-48 lg:w-60 flex-shrink-0 ml-4 md:ml-8 lg:ml-12">
            <div className="aspect-[2/3] bg-gray-800 rounded-2xl shadow-2xl" />
          </div>
          <div className="flex-1 space-y-4 pt-0 md:pt-12 lg:pt-24">
            <div className="space-y-2">
              <div className="h-10 w-3/4 bg-gray-800 rounded-lg" />
              <div className="h-4 w-1/3 bg-gray-800 rounded opacity-60" />
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="h-8 w-20 bg-gray-800 rounded-full" />
              <div className="h-8 w-24 bg-gray-800 rounded-full" />
              <div className="h-8 w-28 bg-gray-800 rounded-full" />
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-16 bg-gray-800 rounded" />
              <div className="h-6 w-14 bg-gray-800 rounded" />
              <div className="h-6 w-20 bg-gray-800 rounded" />
            </div>
            <div className="space-y-2.5 pt-4 max-w-2xl">
              <div className="h-4 w-24 bg-gray-800 rounded opacity-40 mb-2" />
              <div className="h-4 w-full bg-gray-800 rounded" />
              <div className="h-4 w-full bg-gray-800 rounded" />
              <div className="h-4 w-2/3 bg-gray-800 rounded" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="h-8 w-48 bg-gray-800 rounded-lg mb-8 border-l-4 border-gray-700/50 pl-4" />
          <div className="flex gap-4 md:gap-6 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-28 md:w-36 space-y-3">
                <div className="aspect-square bg-gray-800 rounded-full" />
                <div className="space-y-2 flex flex-col items-center">
                  <div className="h-4 w-3/4 bg-gray-800 rounded" />
                  <div className="h-3 w-1/2 bg-gray-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="h-8 w-48 bg-gray-800 rounded-lg mb-8 border-l-4 border-gray-700/50 pl-4 mx-4 md:mx-8" />
          <MovieGridSkeleton />
        </div>
      </div>
    </div>
  );
}
