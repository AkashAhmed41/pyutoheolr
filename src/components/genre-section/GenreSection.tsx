import MovieCard from "@/components/common/MovieCard";
import ViewAllCard from "@/components/common/ViewAllCard";
import type { GenreWithMovies } from "@/types/Interfaces";

interface GenreSectionProps {
  genreWithMovies: GenreWithMovies;
}

export default function GenreSection({ genreWithMovies }: GenreSectionProps) {
  const { genre, movies } = genreWithMovies;
  const { name } = genre;

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 px-4 md:px-8">
        {name}
      </h2>
      <div className="relative px-4 md:px-8">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pt-2 scroll-smooth [&>*:first-child]:origin-left [&>*:last-child]:origin-right">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <ViewAllCard genreName={name} />
        </div>
      </div>
    </section>
  );
}
