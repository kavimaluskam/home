import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

import { Blog } from "../types/mdx";

const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), "public/blogs");

// fetchBlogSlugs gets the list of all mdx files
// inside the BLOGS_PATH directory
export const fetchBlogSlugs = (desc: boolean = true): Array<string> => {
  const paths = fs.readdirSync(BLOGS_PATH);

  desc && paths.sort((a, b) => (b > a ? 1 : -1));

  return paths;
};

// fetchBlogBySlug gets the front matter and body of a blog
export const fetchBlogBySlug = (dirPath: string): Blog => {
  const source = fs.readFileSync(
    path.join(BLOGS_PATH, dirPath, "index.mdx"),
    "utf8"
  );
  const { content, data } = matter(source);

  const frontMatter = {
    title: data.title,
    date: data.date,
    hero: data.hero.replace("../", "/blogs/"),
    heroName: data.heroName,
    heroUrl: data.heroUrl,
    excerpt: data.excerpt,
    tags: data.tags,
    slug: dirPath,
    readingTime: estimateReadingTime(content),
  };

  return {
    content,
    frontMatter,
  };
};

export const serializeContent = async (content: string) => {
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return mdxSource;
};
