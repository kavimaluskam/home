// blogs.tsx

import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

import { BlogListing } from "../../components/Blogs/Listing";
import Layout from "../../components/Layout";
import { Blog } from "../../types/mdx";
import { fetchBlogFilePaths, fetchBlogByPath } from "../../lib/mdx";

const Blogs = ({ blogs }: { blogs: Array<Blog> }) => {
  return (
    <Layout>
      <>
        <NextLink href="/">
          <Button leftIcon={<ArrowBackIcon />} variant="ghost" color="gray.500">
            Home
          </Button>
        </NextLink>

        {blogs.map(({ frontMatter }) => (
          <BlogListing key={frontMatter.slug} frontMatter={frontMatter} />
        ))}
      </>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = () => {
  const blogs = fetchBlogFilePaths().map(fetchBlogByPath);

  return { props: { blogs } };
};
