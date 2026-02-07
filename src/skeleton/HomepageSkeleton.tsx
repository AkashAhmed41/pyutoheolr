import HeroSkeleton from "./homepage/HeroSkeleton";
import GenreNavSkeleton from "./homepage/GenreNavSkeleton";
import GenreSectionSkeleton from "./homepage/GenreSectionSkeleton";

export default function HomepageSkeleton() {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <HeroSkeleton />
      <div className="max-w-[1200px] w-full mx-auto">
        <GenreNavSkeleton />
        <main className="py-8">
          {[1, 2, 3].map((i) => (
            <GenreSectionSkeleton key={i} />
          ))}
        </main>
      </div>
    </div>
  );
}
