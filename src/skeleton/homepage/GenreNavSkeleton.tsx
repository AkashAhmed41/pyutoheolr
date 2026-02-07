import React from "react";

export default function GenreNavSkeleton() {
  return (
    <div className="bg-black/95 border-b border-gray-800 py-4">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex gap-3 overflow-hidden animate-pulse">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-8 bg-gray-800 rounded-full"
              style={{
                width: `${Math.floor(Math.random() * (100 - 60 + 1)) + 60}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
