import { NextApiRequest, NextApiResponse } from "next";

import { Artist } from "../../types/Spotify";
import { getTopArtists } from "../../lib/Spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 7).map((artist: Artist) => ({
    name: artist.name,
    href: artist.external_urls.spotify,
    avatar: artist.images[0].url,
    popularity: artist.popularity,
  }));

  return res.status(200).json({ artists });
};

export default handler;
