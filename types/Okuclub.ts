/**
 * Interfaces for individual Oku.Club API Response items
 */

export interface Author {
  id: number;
  name: string;
  image_url: string;
}

export interface OkuclubBook {
  id: string;
  title: string;
  subTitle: string;
  publishedDate: string;
  isbn10: string;
  isbn13: string;
  description: string;
  pageCount: number;
  language: string;
  authors: Author[];
  thumbnail: string;
  slug: string;
  workId: string;
  addedAt: string;
}

/**
 * Interfaces for internal Oku.Club items
 */
export interface Book {
  name: string;
  href: string;
  avatar: string;
  authors: string;
}
