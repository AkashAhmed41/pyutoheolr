import React from "react";
import SortDropdown from "@/components/common/SortDropdown";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

interface GenrePageHeaderProps {
  genreName: string;
}

export default function GenrePageHeader({ genreName }: GenrePageHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 px-4 md:px-8 mb-8">
      <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
        {getLocalizedText("GENRE_PAGE", "MOVIE_GENRE")}:{" "}
        <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
          {genreName}
        </span>
      </h1>
      <SortDropdown />
    </header>
  );
}
