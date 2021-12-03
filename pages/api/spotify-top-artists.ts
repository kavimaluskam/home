import { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "../../lib/Spotify";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const artists = await getTopArtists();
  return res.status(200).json({ artists });
};

export default handler;
