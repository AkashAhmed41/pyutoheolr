"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { getPosterUrl } from "@/lib/utils/ImageUtils";
import {
  getFormattedRating,
  getFormattedRuntime,
  getFormattedDate,
  getLocalizedText,
} from "@/lib/utils/CommonUtils";
import { StarIcon, ClockIcon, CalendarIcon } from "@/lib/svg/icons";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import type { MovieDetails } from "@/types/Interfaces";

interface MoviePosterProps {
  movie: MovieDetails;
}

export default function MoviePoster({ movie }: MoviePosterProps) {
  const { addMovieToHistory } = useRecentlyViewed();

  useEffect(() => {
    addMovieToHistory(movie);
  }, [movie, addMovieToHistory]);

  const {
    posterPath,
    title,
    tagline,
    voteAverage,
    runtime,
    releaseDate,
    genres,
    overview,
  } = movie;

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-0">
      <div className="w-36 md:w-48 lg:w-60 flex-shrink-0 shadow-2xl relative ml-4 md:ml-8 lg:ml-12">
        <div className="aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-white/10 group">
          <Image
            src={getPosterUrl(posterPath)}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex-1 space-y-4 pt-0 md:pt-12 lg:pt-24">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1.5 tracking-tight drop-shadow-lg">
            {title}
          </h1>
          {tagline && (
            <p className="text-sm md:text-base text-blue-400/90 font-medium italic">
              {tagline}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-bold">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/20 text-yellow-500 ring-1 ring-yellow-400/30">
            <StarIcon className="w-3.5 h-3.5 fill-current" />
            <span>{getFormattedRating(voteAverage)}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30">
            <ClockIcon className="w-3.5 h-3.5" />
            <span>{getFormattedRuntime(runtime)}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 ring-1 ring-green-500/30">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>{getFormattedDate(releaseDate)}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 text-[10px] font-bold uppercase tracking-widest border border-gray-700/50"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <div className="space-y-2.5 max-w-2xl">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">
            {getLocalizedText("MOVIE_DETAILS", "OVERVIEW")}
          </h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
}
