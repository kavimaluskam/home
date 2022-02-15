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
