interface Page {
  name: string;
  url: string;
}

export const pages: Page[] = [
  { name: "Homepage", url: "/" },
  { name: "MoviesPage", url: "/moviespage" },
  { name: "TVShows", url: "/tvshows" },
  { name: "People", url: "/people"},
  { name: "More", url: "/more"},
  { name: "NotFoundPage", url: "/notfound"},
];