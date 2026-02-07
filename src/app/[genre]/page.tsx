import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchGenrePageData } from "@/lib/services/GenreService";
import GenrePageHeader from "@/components/genre-section/genre-page/GenrePageHeader";
import MovieGrid from "@/components/common/MovieGrid";
import { isEmptyObj } from "@/lib/utils/ObjectUtils";
import GenrePageSkeleton from "@/skeleton/genre-page/GenrePageSkeleton";

interface GenrePageProps {
  params: Promise<{ genre: string }>;
  searchParams: Promise<{ sort?: string }>;
}

async function GenrePageContent({ params, searchParams }: GenrePageProps) {
  const { genre: genreSlug } = await params;
  const { sort: sortBy } = await searchParams;

  const data = await fetchGenrePageData(genreSlug, sortBy);

  if (!data || isEmptyObj(data)) {
    notFound();
  }
  const { genre, movies } = data;

  return (
    <main className="max-w-[1200px] mx-auto py-8">
      <GenrePageHeader genreName={genre.name} />
      <MovieGrid movies={movies} />
    </main>
  );
}

export default function GenrePage(props: GenrePageProps) {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<GenrePageSkeleton />}>
        <GenrePageContent {...props} />
      </Suspense>
    </div>
  );
}
