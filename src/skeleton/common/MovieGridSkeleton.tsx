import React from "react";

export default function MovieGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(16px,4vw,24px)] px-4 md:px-8 animate-pulse">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="aspect-[2/3] bg-gray-800 rounded-lg" />
          <div className="h-4 w-3/4 bg-gray-800 rounded" />
          <div className="h-3 w-1/4 bg-gray-800 rounded" />
        </div>
      ))}
    </div>
  );
}
