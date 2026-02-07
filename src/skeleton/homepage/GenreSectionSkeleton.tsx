import React from "react";

export default function GenreSectionSkeleton() {
  return (
    <section className="mb-8">
      <div className="h-8 w-48 bg-gray-800 rounded mb-4 mx-4 md:mx-8" />
      <div className="relative px-4 md:px-8">
        <div className="flex gap-4 overflow-hidden pb-4 pt-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-[185px]">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg" />
              <div className="mt-2 space-y-2">
                <div className="h-4 w-3/4 bg-gray-800 rounded" />
                <div className="h-3 w-1/4 bg-gray-800 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
