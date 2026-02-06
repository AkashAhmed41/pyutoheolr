import HeroSkeleton from "./HeroSkeleton";

export default function HomepageSkeleton() {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <HeroSkeleton />
      <div className="max-w-[1200px] w-full mx-auto px-4 py-8 space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-8 w-48 bg-gray-800 rounded" />
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((j) => (
                <div
                  key={j}
                  className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[2/3] bg-gray-800 rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
