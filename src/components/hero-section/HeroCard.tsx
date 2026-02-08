"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Movie } from "@/types/Interfaces";
import { getBackdropUrl } from "@/lib/utils/ImageUtils";
import { getReleaseYear, getFormattedRating } from "@/lib/utils/CommonUtils";
import { StarIcon, InfoIcon } from "@/lib/svg/icons";
import Button from "@/components/common/Button";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { appRouteList } from "@/lib/utils/PageRouteUtils";

interface HeroCardProps {
  movie: Movie;
  isActive: boolean;
  priority?: boolean;
}

export default function HeroCard({
  movie,
  isActive,
  priority = false,
}: HeroCardProps) {
  const router = useRouter();
  const { id, title, backdropPath, voteAverage, releaseDate, overview } = movie;
  const detailsUrl = appRouteList.movieDetails(id);

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
      <Image
        src={getBackdropUrl(backdropPath)}
        alt={title}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 700px"
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-5 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 p-3 md:p-5 lg:p-6 cursor-pointer md:cursor-default"
          onClick={() => router.push(detailsUrl)}
        >
          <h1 className="text-base md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg line-clamp-1 transition-all duration-500">
            {title}
          </h1>
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
            <div className="flex items-center gap-1">
              <StarIcon className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
              <span className="text-xs md:text-base font-semibold text-white">
                {getFormattedRating(voteAverage)}
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-300 border-l border-gray-600 pl-2 md:pl-3 ml-1">
              {getReleaseYear(releaseDate)}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-yellow-400 text-black uppercase tracking-wide shadow-sm">
              {getLocalizedText("HOMEPAGE", "TOP_RATED")}
            </span>
          </div>
          <p className="text-[10px] md:text-xs text-gray-200 mb-2 md:mb-6 line-clamp-2 drop-shadow-md max-w-lg leading-relaxed">
            {overview}
          </p>
          <div className="hidden md:flex gap-3">
            <Button variant="secondary" icon={<InfoIcon />} href={detailsUrl}>
              {getLocalizedText("HOMEPAGE", "MORE_INFO")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
