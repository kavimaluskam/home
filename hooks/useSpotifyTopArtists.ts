import { useEffect, useState } from "react";
import { TopArtist } from "../types/Spotify";

export const useSpotifyTopArtists = (): TopArtist[] => {
  const [topArtists, setTopArtists] = useState<TopArtist[]>([]);

  useEffect(() => {
    const fetchTopArtists = async () => {
      const response = await fetch("/api/spotify-top-artists/", {
        method: "GET",
      });

      if (response.status != 200) {
        throw new Error("Failed to fetch top artists");
      }

      const { artists } = await response.json();
      setTopArtists(artists);
    };

    fetchTopArtists();
  }, []);

  return topArtists;
};
