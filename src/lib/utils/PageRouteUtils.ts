export const appRouteList = {
  home: "/",
  genre: (genreSlug: string) => `/${genreSlug}`,
  movieDetails: (id: number) => `/movie/${id}`,
  recentlyViewed: "/recently-viewed",
};

export const getGenreSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};
