import React from "react";

export default function GenrePageHeaderSkeleton() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 px-4 md:px-8 mb-8">
      <div className="h-8 w-64 bg-gray-800 rounded animate-pulse" />
      <div className="h-10 w-48 bg-gray-800 rounded animate-pulse" />
    </div>
  );
}
