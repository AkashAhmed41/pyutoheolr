import { fetchHomepageData } from "@/lib/services/HomeService";
import HeroSection from "@/components/hero-section/HeroSection";
import GenreNav from "@/components/genre-section/GenreNav";
import GenreSection from "@/components/GenreSection";

export default async function Home() {
  const homepageData = await fetchHomepageData();
  const { topRatedMovies, genresWithPopularMovies, allGenres } = homepageData;

  return (
    <div className="min-h-screen bg-black">
      <HeroSection movies={topRatedMovies} />
      <div className="max-w-[1200px] w-full mx-auto">
        <GenreNav genres={allGenres} />
        <main className="py-8">
          {genresWithPopularMovies.map((genreWithMovies) => (
            <GenreSection
              key={genreWithMovies.genre.id}
              genreWithMovies={genreWithMovies}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
