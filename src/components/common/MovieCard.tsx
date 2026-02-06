import Image from "next/image";
import type { Movie } from "@/types/Interfaces";
import { getReleaseYear, getFormattedRating } from "@/lib/utils/CommonUtils";
import { getPosterUrl } from "@/lib/utils/ImageUtils";
import { StarIcon } from "@/lib/svg/icons";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { title, posterPath, voteAverage, releaseDate } = movie;

  return (
    <div className="group relative flex-shrink-0 w-[185px] cursor-pointer transition-transform duration-300 hover:scale-105">
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
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm flex items-center gap-1">
          <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs font-semibold text-white">
            {getFormattedRating(voteAverage)}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          {getReleaseYear(releaseDate)}
        </p>
      </div>
    </div>
  );
}
