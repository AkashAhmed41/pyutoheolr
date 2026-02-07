import MovieList from "@/components/common/MovieList";
import type { GenreWithMovies } from "@/types/Interfaces";
import { appRouteList, getGenreSlug } from "@/lib/utils/PageRouteUtils";

interface GenreSectionProps {
  genreWithMovies: GenreWithMovies;
}

export default function GenreSection({ genreWithMovies }: GenreSectionProps) {
  const { genre, movies } = genreWithMovies;
  const { name } = genre;
  const href = appRouteList.genre(getGenreSlug(name));

  return <MovieList title={name} movies={movies} href={href} />;
}
