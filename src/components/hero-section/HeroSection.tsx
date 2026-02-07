"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Movie } from "@/types/Interfaces";
import { HERO_SECTION_ROTATION_INTERVAL } from "@/lib/constants/ApplicationConstants";
import HeroCard from "./HeroCard";
import MovieBackdrop from "@/components/common/MovieBackdrop";

interface HeroSectionProps {
  movies: Movie[];
}

export default function HeroSection({ movies }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = movies.length;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, HERO_SECTION_ROTATION_INTERVAL);
  }, [total]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const getSlideStyles = (index: number) => {
    const offset = getOffset(index);
    const baseStyles =
      "absolute top-1/2 -translate-y-1/2 transition-all duration-[1500ms] ease-in-out px-4 box-border";

    switch (offset) {
      case 0:
        return `${baseStyles} left-1/2 -translate-x-1/2 z-30 opacity-100 scale-100 w-[90vw] md:w-[650px]`;
      case -1:
        return `${baseStyles} left-[15%] md:left-[10%] xl:left-[calc(50%-480px)] -translate-x-1/2 z-20 opacity-60 scale-75 cursor-pointer hover:opacity-80 w-[200px] md:w-[300px]`;
      case 1:
        return `${baseStyles} left-[85%] md:left-[90%] xl:left-[calc(50%+480px)] -translate-x-1/2 z-20 opacity-60 scale-75 cursor-pointer hover:opacity-80 w-[200px] md:w-[300px]`;
      default:
        if (offset < -1) {
          return `${baseStyles} left-[-25%] -translate-x-1/2 z-0 opacity-0 scale-50 pointer-events-none w-[200px] md:w-[300px]`;
        } else {
          return `${baseStyles} left-[125%] -translate-x-1/2 z-0 opacity-0 scale-50 pointer-events-none w-[200px] md:w-[300px]`;
        }
    }
  };

  const handleSlideClick = (index: number) => {
    if (index === activeIndex) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {movies.map((movie, index) => (
          <MovieBackdrop
            key={`bg-${movie.id}`}
            backdropPath={movie.backdropPath}
            title="Background"
            priority={index === 0}
            className="absolute inset-0"
            imageClassName={`object-cover blur-sm transition-opacity duration-[1500ms] ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            }`}
            showGradient={index === activeIndex}
          />
        ))}
      </div>
      <div className="relative h-full w-full z-10 perspective-1000">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={getSlideStyles(index)}
            onClick={() => handleSlideClick(index)}
          >
            <HeroCard
              movie={movie}
              isActive={index === activeIndex}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
