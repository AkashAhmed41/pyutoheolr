import HeroSkeleton from "./homepage/HeroSkeleton";
import GenreNavSkeleton from "./homepage/GenreNavSkeleton";
import GenreSectionSkeleton from "./homepage/GenreSectionSkeleton";

export default function HomepageSkeleton() {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <HeroSkeleton />
      <div className="max-w-[1200px] w-full mx-auto">
        <GenreNavSkeleton />
        <GenreSectionSkeleton />
        <main className="py-2 md:py-4">
          <div className="h-8 w-64 bg-gray-800 rounded mb-4 px-4 md:px-8 mx-4 md:mx-8" />
          {[1, 2, 3].map((i) => (
            <GenreSectionSkeleton key={i} />
          ))}
        </main>
      </div>
    </div>
  );
}
