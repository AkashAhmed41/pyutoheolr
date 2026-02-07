import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchMovieDetailsPageData } from "@/lib/services/MovieDetailsService";
import MovieDetailSkeleton from "@/skeleton/movie-details/MovieDetailSkeleton";
import MovieBackdrop from "@/components/common/MovieBackdrop";
import MoviePoster from "@/components/movie-details/MoviePoster";
import CastList from "@/components/movie-details/CastList";
import SimilarMovies from "@/components/movie-details/SimilarMovies";
import { isEmptyObj } from "@/lib/utils/ObjectUtils";

interface MovieDetailsPageProps {
  params: Promise<{ id: string }>;
}

async function MovieDetailsContent({ id }: { id: number }) {
  const data = await fetchMovieDetailsPageData(id);

  if (!data || isEmptyObj(data?.movie)) {
    notFound();
  }

  const { movie, similarMovies } = data;
  const { backdropPath, title, cast } = movie;

  return (
    <div className="min-h-screen bg-black text-white">
      <MovieBackdrop backdropPath={backdropPath} title={title} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-32 md:-mt-64 relative z-10 pb-20">
        <MoviePoster movie={movie} />
        <CastList cast={cast} />
        <SimilarMovies movies={similarMovies} />
      </div>
    </div>
  );
}

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { id } = await params;
  const movieId = parseInt(id);

  if (isNaN(movieId)) {
    notFound();
  }

  return (
    <Suspense fallback={<MovieDetailSkeleton />}>
      <MovieDetailsContent id={movieId} />
    </Suspense>
  );
}
