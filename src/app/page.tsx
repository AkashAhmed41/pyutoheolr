import { Suspense } from "react";
import { fetchHomepageData } from "@/lib/services/HomeService";
import HeroSection from "@/components/hero-section/HeroSection";
import GenreNav from "@/components/genre-section/GenreNav";
import GenreSection from "@/components/genre-section/GenreSection";
import RecentlyViewedSection from "@/components/recently-viewed/RecentlyViewedSection";
import WatchLaterSection from "@/components/watch-later/WatchLaterSection";
import HomepageSkeleton from "@/skeleton/HomepageSkeleton";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

async function HomeContent() {
  const homepageData = await fetchHomepageData();
  const { topRatedMovies, genresWithPopularMovies, allGenres } = homepageData;

  return (
    <>
      <HeroSection movies={topRatedMovies} />
      <div className="max-w-[1200px] w-full mx-auto">
        <GenreNav genres={allGenres} />
        <RecentlyViewedSection />
        <WatchLaterSection />
        <main className="py-2 md:py-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 px-4 md:px-8">
            {getLocalizedText("HOMEPAGE", "POPULAR_MOVIES_HEADING")}
          </h2>
          {genresWithPopularMovies.map((genreWithMovies) => (
            <GenreSection
              key={genreWithMovies.genre.id}
              genreWithMovies={genreWithMovies}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<HomepageSkeleton />}>
        <HomeContent />
      </Suspense>
    </div>
  );
}
