import { useEffect, useState } from "react";
import { RecentMovie } from "../types/Letterboxd";

export const useLetterboxdRecentMovies = (): RecentMovie[] => {
  const [recentMovies, setRecentMovies] = useState<RecentMovie[]>([]);

  useEffect(() => {
    const fetchRecentMovies = async () => {
      const response = await fetch(`/api/letterboxd-recent-movies/`, {
        method: "GET",
      });

      if (response.status != 200) {
        throw new Error("Failed to fetch recent movies");
      }

      const { movies } = await response.json();
      setRecentMovies(movies);
    };

    fetchRecentMovies();
  }, []);

  return recentMovies;
};
