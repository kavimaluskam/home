// blogs.tsx

import { Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import Masonry from "react-masonry-component";

import NextLink from "next/link";

import { BlogListing } from "../../components/Blogs/Listing";
import Layout from "../../components/Layout";
import { Blog } from "../../types/mdx";
import { fetchBlogSlugs, fetchBlogBySlug } from "../../lib/mdx";

const Blogs = ({ blogs }: { blogs: Array<Blog> }) => {
  return (
    <Layout>
      <>
        <Box>
          <NextLink href="/">
            <Button
              leftIcon={<ArrowBackIcon />}
              variant="ghost"
              color="gray.500"
            >
              Home
            </Button>
          </NextLink>
        </Box>
        <Masonry>
          {blogs.map(({ frontMatter }) => (
            <Box w={{ sm: "100%", md: "50%" }} p="2" key={frontMatter.slug}>
              <BlogListing frontMatter={frontMatter} />
            </Box>
          ))}
        </Masonry>
      </>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = () => {
  const blogs = fetchBlogSlugs().map(fetchBlogBySlug);

  return { props: { blogs } };
};
