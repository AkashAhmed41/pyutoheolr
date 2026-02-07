"use client";

import React from "react";
import Image from "next/image";
import type { CastMember } from "@/types/Interfaces";
import { getProfileUrl } from "@/lib/utils/ImageUtils";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { ChevronRightIcon, ChevronLeftIcon } from "@/lib/svg/icons";
import Button from "@/components/common/Button";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface CastListProps {
  cast: CastMember[];
}

export default function CastList({ cast }: CastListProps) {
  const {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
    checkScroll,
  } = useHorizontalScroll([cast]);

  const scrollButtonClass =
    "!p-2 !rounded-full !bg-gray-800 !text-white hover:!bg-gray-700 !border !border-gray-700 !shadow-lg !transform-none hover:!scale-100 active:!scale-100";

  if (isEmptyArray(cast)) return null;

  return (
    <div className="mt-16 relative group overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
        {getLocalizedText("MOVIE_DETAILS", "TOP_CAST")}
      </h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className={`flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth p-1 -m-1 transition-[padding] duration-300 ${
            showRightArrow ? "pr-12" : ""
          } ${showLeftArrow ? "pl-12" : ""}`}
        >
          {cast.map(({ id, profilePath, name, character }) => (
            <div
              key={id}
              className="flex-shrink-0 w-28 md:w-36 group/item cursor-pointer"
            >
              <div className="relative aspect-square rounded-full overflow-hidden bg-gray-800 mb-3 ring-2 ring-transparent group-hover/item:ring-blue-500 transition-all duration-300">
                <Image
                  src={getProfileUrl(profilePath)}
                  alt={name}
                  fill
                  className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white line-clamp-1 group-hover/item:text-blue-400 transition-colors">
                  {name}
                </p>
                <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                  {character}
                </p>
              </div>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <div className="absolute left-0 top-0 z-10 h-28 md:h-36 flex items-center bg-gradient-to-r from-black via-black/60 to-transparent pl-4 pr-8 pointer-events-none">
            <Button
              onClick={scrollLeft}
              className={`${scrollButtonClass} pointer-events-auto`}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}
        {showRightArrow && (
          <div className="absolute right-0 top-0 z-10 h-28 md:h-36 flex items-center bg-gradient-to-l from-black via-black/60 to-transparent pl-8 pr-4 pointer-events-none">
            <Button
              onClick={scrollRight}
              className={`${scrollButtonClass} pointer-events-auto`}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
