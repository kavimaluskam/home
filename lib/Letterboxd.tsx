import xml2js from "xml2js";
import { Movie, RecentMovie } from "../types/Letterboxd";

export const getRecentMovies = async (): Promise<RecentMovie[]> => {
  const url = "https://letterboxd.com/kavimaluskam/rss/";

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Failed to fetch recent movies");
  }

  const xml = await response.text();

  const recentMovies = parseRssToRecentMovies(xml);

  return recentMovies;
};

const parseRssToRecentMovies = async (xml: string): Promise<RecentMovie[]> => {
  const parser = new xml2js.Parser();
  const data = await parser.parseStringPromise(xml);
  const movieList = data.rss.channel[0].item;

  movieList.sort((a: Movie, b: Movie) =>
    a["letterboxd:watchedDate"][0] >= b["letterboxd:watchedDate"][0] ? -1 : 1
  );

  const recentMovieList = movieList.slice(0, 3).map((movie: Movie) => {
    const descriptionSrc = movie.description[0].split("src=");
    return {
      name: movie.title[0],
      href: movie.link[0],
      avatar: descriptionSrc.length > 1 && descriptionSrc[1].split('"')[1],
    };
  });

  return recentMovieList;
};
