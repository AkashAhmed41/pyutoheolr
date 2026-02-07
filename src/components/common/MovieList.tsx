import MovieCard from "./MovieCard";
import ViewAllButton from "./ViewAllButton";
import type { Movie } from "@/types/Interfaces";

interface MovieListProps {
  title: string;
  subtitle?: string;
  href?: string;
  movies: Movie[];
}

const MovieList = ({ title, subtitle, href, movies }: MovieListProps) => {
  return (
    <section className="py-2 md:py-4">
      <div className="flex items-center justify-between mb-2 md:mb-4 px-4 md:px-8">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {href && <ViewAllButton href={href} />}
      </div>
      <div className="relative px-4 md:px-8">
        <div className="flex gap-[clamp(16px,4vw,24px)] overflow-x-auto scrollbar-hide py-1 md:py-2 scroll-smooth [&>*:first-child]:origin-left [&>*:last-child]:origin-right">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              className="w-[calc((100%-16px)/2)] sm:w-[calc((100%-32px)/3)] md:w-[calc((100%-48px)/4)] lg:w-[calc((100%-96px)/5)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
