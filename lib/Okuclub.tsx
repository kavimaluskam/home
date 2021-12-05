import { Author, Book, OkuclubBook } from "../types/Okuclub";

export const getReadingBooks = async (): Promise<Book[]> => {
  const url = "https://oku.club/api/users/profile/kavimaluskam";

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Failed to fetch reading books");
  }

  const { collections } = await response.json();
  const { books } = collections[1];

  return books.map((book: OkuclubBook) => ({
    name: book.title,
    href: `https://oku.club/book/${book.slug}`,
    avatar: book.thumbnail,
    authors: book.authors.map((author: Author) => author.name).join(", "),
  }));
};
