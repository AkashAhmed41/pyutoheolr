import React, { Suspense } from "react";
import { fetchSearchMovies } from "@/lib/services/SearchService";
import SearchResult from "@/components/search-result/SearchResult";
import SearchResultSkeleton from "@/skeleton/search-result/SearchResultSkeleton";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

async function SearchContent({ searchParams }: SearchPageProps) {
  const { q: query = "" } = await searchParams;
  const { results: movies } = await fetchSearchMovies(query);

  return <SearchResult query={query} movies={movies} />;
}

export default function SearchPage(props: SearchPageProps) {
  return (
    <main className="max-w-[1200px] mx-auto py-8 transition-all duration-300">
      <Suspense fallback={<SearchResultSkeleton />}>
        <SearchContent {...props} />
      </Suspense>
    </main>
  );
}
