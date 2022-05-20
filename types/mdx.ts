export interface FrontMatter {
  title: string;
  date: string;
  hero: string;
  heroName: string;
  heroUrl: string;
  excerpt: string;
  tags: string[];
  slug: string;
  readingTime: number;
}

export interface Blog {
  content: string;
  frontMatter: FrontMatter;
}
export interface TilFrontMatter {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}

export interface Til {
  content: string;
  frontMatter: TilFrontMatter;
}
