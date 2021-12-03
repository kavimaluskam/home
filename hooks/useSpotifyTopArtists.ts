import { useMemo, useState } from "react";
import { TopArtist } from "../types/Spotify";

export const useSpotifyTopArtists = (): TopArtist[] => {
  const [topArtists, setTopArtists] = useState<TopArtist[]>([]);

  useMemo(() => {
    const fetchTopArtists = async () => {
      // TODO: Fix absolute URL
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
