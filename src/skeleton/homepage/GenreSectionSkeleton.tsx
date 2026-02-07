import React from "react";

export default function GenreSectionSkeleton() {
  return (
    <section className="py-2 md:py-4">
      <div className="flex items-center justify-between mb-2 md:mb-4 px-4 md:px-8">
        <div>
          <div className="h-6 w-32 md:w-48 bg-gray-800 rounded mb-2" />
          <div className="h-3 w-48 md:w-64 bg-gray-800/60 rounded" />
        </div>
        <div className="h-4 w-16 md:w-20 bg-gray-800 rounded opacity-50" />
      </div>
      <div className="relative px-4 md:px-8">
        <div className="flex gap-[clamp(16px,4vw,24px)] overflow-hidden py-1 md:py-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[calc((100%-16px)/2)] sm:w-[calc((100%-32px)/3)] md:w-[calc((100%-48px)/4)] lg:w-[calc((100%-96px)/5)]"
            >
              <div className="aspect-[2/3] bg-gray-800 rounded-2xl" />
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
