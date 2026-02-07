import React from "react";
import Image from "next/image";
import { getBackdropUrl } from "@/lib/utils/ImageUtils";

interface MovieBackdropProps {
  backdropPath: string | null;
  title: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  showGradient?: boolean;
}

export default function MovieBackdrop({
  backdropPath,
  title,
  priority = false,
  className = "relative h-[50vh] md:h-[70vh] w-full bg-gray-900/20 overflow-hidden",
  imageClassName = "object-cover opacity-60 blur-sm",
  showGradient = true,
}: MovieBackdropProps) {
  return (
    <div className={className}>
      <Image
        src={getBackdropUrl(backdropPath)}
        alt={title}
        fill
        priority={priority}
        className={imageClassName}
      />
      {showGradient && (
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />
      )}
    </div>
  );
}
