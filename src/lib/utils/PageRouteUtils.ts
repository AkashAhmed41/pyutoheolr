export const appRouteList = {
  home: "/",
  genre: (genreSlug: string) => `/${genreSlug}`,
};

export const getGenreSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};
