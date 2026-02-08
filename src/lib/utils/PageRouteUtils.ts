export const appRouteList = {
  home: "/",
  genre: (genreSlug: string) => `/${genreSlug}`,
  movieDetails: (id: number) => `/movie/${id}`,
  recentlyViewed: "/recently-viewed",
  watchLater: "/watch-later",
};

export const getGenreSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};
