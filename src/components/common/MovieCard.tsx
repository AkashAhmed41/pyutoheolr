"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/Interfaces";
import {
  getReleaseYear,
  getFormattedRating,
  getLocalizedText,
} from "@/lib/utils/CommonUtils";
import { getPosterUrl } from "@/lib/utils/ImageUtils";
import { StarIcon, BookmarkIcon, BookmarkFillIcon } from "@/lib/svg/icons";
import { appRouteList } from "@/lib/utils/PageRouteUtils";
import { useWatchLater } from "@/hooks/useWatchLater";
import Button from "@/components/common/Button";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export default function MovieCard({
  movie,
  className = "w-[185px]",
}: MovieCardProps) {
  const { id, title, posterPath, voteAverage, releaseDate } = movie;
  const { toggleWatchLater, isInWatchLater, hasMounted } = useWatchLater();

  const isBookmarked = hasMounted ? isInWatchLater(id) : false;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWatchLater(movie);
  };

  return (
    <Link
      href={appRouteList.movieDetails(id)}
      className={`group relative flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
        <Image
          src={getPosterUrl(posterPath)}
          alt={title}
          fill
          sizes="185px"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          variant="ghost"
          onClick={handleBookmarkClick}
          className={`absolute top-2 left-2 z-10 !p-1.5 rounded-md bg-black/60 backdrop-blur-sm text-white transition-all duration-300 hover:bg-black/80 focus:opacity-100 border border-white/60 shadow-2xl ${
            isBookmarked
              ? "opacity-100"
              : "md:opacity-0 group-hover:opacity-100"
          }`}
          title={
            isBookmarked
              ? getLocalizedText("WATCH_LATER", "REMOVE_TOOLTIP")
              : getLocalizedText("WATCH_LATER", "ADD_TOOLTIP")
          }
          icon={
            isBookmarked ? (
              <BookmarkFillIcon className="w-3 h-3 text-[#ffcc00] drop-shadow-[0_0_10px_rgba(255,204,0,0.6)]" />
            ) : (
              <BookmarkIcon className="w-3 h-3 text-white/90 drop-shadow-md" />
            )
          }
        />
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm flex items-center gap-1">
          <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs font-semibold text-white">
            {getFormattedRating(voteAverage)}
          </span>
        </div>
      </div>
      <div className="mt-2 text-left">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          {getReleaseYear(releaseDate)}
        </p>
      </div>
    </Link>
  );
}
