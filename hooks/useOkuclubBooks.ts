import { useMemo, useState } from "react";
import { Book } from "../types/Okuclub";

export const useOkuclubBooks = (): Book[] => {
  const [books, setBooks] = useState<Book[]>([]);

  useMemo(() => {
    const fetchBooks = async () => {
      // TODO: Fix absolute URL
      const response = await fetch("/api/okuclub-books/", {
        method: "GET",
      });

      if (response.status != 200) {
        throw new Error("Failed to fetch reading books");
      }

      const { books } = await response.json();
      setBooks(books);
    };

    fetchBooks();
  }, []);

  return books;
};
