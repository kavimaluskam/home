import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Blog, FrontMatter } from "../types/mdx";

const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), "blogs");

// fetchBlogFilePaths gets the list of all mdx files
// inside the BLOGS_PATH directory
export const fetchBlogFilePaths = (desc: boolean = true): Array<string> => {
  const paths = fs
    .readdirSync(BLOGS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  desc && paths.sort((a, b) => (b > a ? 1 : -1));

  return paths;
};

// fetchBlogByPath gets the front matter and body of a blog
export const fetchBlogByPath = (filePath: string): Blog => {
  const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
  const { content, data } = matter(source);

  const frontMatter = {
    title: data.title,
    date: data.date,
    hero: data.hero,
    heroName: data.heroName,
    heroUrl: data.heroUrl,
    excerpt: data.excerpt,
    tags: data.tags,
    slug: filePath.replace(/\.mdx?$/, ""),
    readingTime: estimateReadingTime(content),
  };

  return {
    content,
    frontMatter,
    filePath,
  };
};
