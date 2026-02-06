"use client";

import React, { useRef, useState, useEffect } from "react";
import type { Genre } from "@/types/Interfaces";
import Button from "@/components/common/Button";
import { ChevronRightIcon, ChevronLeftIcon } from "@/lib/svg/icons";
import {
  GENRE_NAV_SCROLL_AMOUNT,
  GENRE_NAV_SCROLL_THRESHOLD,
} from "@/lib/constants/ApplicationConstants";

interface GenreNavProps {
  genres: Genre[];
}

export default function GenreNav({ genres }: GenreNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollButtonClass =
    "!p-2 !rounded-full !bg-gray-800 !text-white hover:!bg-gray-700 !border !border-gray-700 !shadow-lg !transform-none hover:!scale-100 active:!scale-100";

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowRightArrow(
        scrollLeft + clientWidth < scrollWidth - GENRE_NAV_SCROLL_THRESHOLD,
      );
      setShowLeftArrow(scrollLeft > GENRE_NAV_SCROLL_THRESHOLD);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [genres]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: GENRE_NAV_SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -GENRE_NAV_SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 py-4 relative group">
      <div className="px-4 md:px-8 relative max-w-[1200px] mx-auto">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className={`flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth ${
            showRightArrow ? "pr-12" : ""
          } ${showLeftArrow ? "pl-12" : ""}`}
        >
          {genres.map((genre) => (
            <Button
              key={genre.id}
              variant="secondary"
              className="!rounded-full whitespace-nowrap !px-4 py-1 md:!px-6 md:py-2 text-xs md:text-sm hover:!bg-yellow-400 hover:!text-black !transform-none hover:!scale-100 active:!scale-100 !transition-all !duration-300"
            >
              {genre.name}
            </Button>
          ))}
        </div>
        {showLeftArrow && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center bg-gradient-to-r from-black via-black to-transparent pl-4 pr-8">
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center bg-gradient-to-l from-black via-black to-transparent pl-8 pr-4">
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
