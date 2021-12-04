import { NextApiRequest, NextApiResponse } from "next";
import { getReadingBooks } from "../../lib/Okuclub";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const books = await getReadingBooks();
  return res.status(200).json({ books });
};

export default handler;
