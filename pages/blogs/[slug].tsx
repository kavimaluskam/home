import { Box, Img, Link } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import {
  h2,
  h3,
  p,
  a,
  ol,
  ul,
  li,
  blockquote,
  pre,
  img,
  figcaption,
} from "../../components/Blogs/Mdx";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  fetchBlogByPath,
  fetchBlogFilePaths,
  serializeContent,
} from "../../lib/mdx";
import { FrontMatter } from "../../types/mdx";

const Blog = ({
  source,
  frontMatter,
}: {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}) => {
  return (
    <Layout>
      <>
        <Box maxW="600px" mx="auto" mb="4">
          <Box fontSize="3xl" fontWeight="semibold" mb="2">
            {frontMatter.title}
          </Box>
          <Box as="span" opacity="0.75" fontSize="0.8rem">
            {frontMatter.date} · {frontMatter.readingTime} min read
          </Box>
        </Box>
        {frontMatter.hero && (
          <Box mb="4">
            <Img
              src={frontMatter.hero}
              alt={`by ${frontMatter.heroName}`}
              mb="4"
            />
            <Box as="p" opacity="0.75" fontSize="0.8rem" textAlign="center">
              Photos by{" "}
              <Link href={frontMatter.heroUrl} isExternal color="orange">
                {frontMatter.heroName}
              </Link>
            </Box>
          </Box>
        )}
        <Box fontSize="1rem" lineHeight="1.5rem" pt="4">
          <MDXRemote
            {...source}
            components={{
              h2: h2,
              h3: h3,
              p: p,
              a: a,
              ol: ol,
              ul: ul,
              li: li,
              blockquote: blockquote,
              pre: pre,
              img: img,
              figcaption: figcaption,
            }}
          />
        </Box>
      </>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const blog = fetchBlogByPath(`${slug}.mdx`);
  const mdxSource = await serializeContent(blog.content);

  return {
    props: {
      source: mdxSource,
      frontMatter: blog.frontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fetchBlogFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
