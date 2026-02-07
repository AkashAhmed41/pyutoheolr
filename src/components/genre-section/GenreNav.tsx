"use client";

import React from "react";
import type { Genre } from "@/types/Interfaces";
import Button from "@/components/common/Button";
import { ChevronRightIcon, ChevronLeftIcon } from "@/lib/svg/icons";
import { appRouteList, getGenreSlug } from "@/lib/utils/PageRouteUtils";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface GenreNavProps {
  genres: Genre[];
}

export default function GenreNav({ genres }: GenreNavProps) {
  const {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
    checkScroll,
  } = useHorizontalScroll([genres]);

  const scrollButtonClass =
    "!p-2 !rounded-full !bg-gray-800 !text-white hover:!bg-gray-700 !border !border-gray-700 !shadow-lg !transform-none hover:!scale-100 active:!scale-100";

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 py-4 relative group">
      <div className="px-4 md:px-8 relative max-w-[1200px] mx-auto">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className={`flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth transition-[padding] duration-300 ${
            showRightArrow ? "pr-12" : ""
          } ${showLeftArrow ? "pl-12" : ""}`}
        >
          {genres.map((genre) => (
            <Button
              key={genre.id}
              variant="secondary"
              href={appRouteList.genre(getGenreSlug(genre.name))}
              className="!rounded-full whitespace-nowrap !px-4 py-1 md:!px-6 md:py-2 text-xs md:text-sm hover:!bg-yellow-400 hover:!text-black !transform-none hover:!scale-100 active:!scale-100 !transition-all !duration-300"
            >
              {genre.name}
            </Button>
          ))}
        </div>
        {showLeftArrow && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center bg-gradient-to-r from-black via-black/60 to-transparent pl-4 pr-8">
            <Button
              onClick={scrollLeft}
              className={scrollButtonClass}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}
        {showRightArrow && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center bg-gradient-to-l from-black via-black/60 to-transparent pl-8 pr-4">
            <Button
              onClick={scrollRight}
              className={scrollButtonClass}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
