import { NextApiRequest, NextApiResponse } from "next";

import { getRecentMovies } from "../../lib/Letterboxd";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const movies = await getRecentMovies();
  return res.status(200).json({ movies });
};

export default handler;
