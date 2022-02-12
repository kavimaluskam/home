import { Box, Link } from "@chakra-ui/react";

import Highlight, { defaultProps } from "prism-react-renderer";
import Layout from "../../components/Layout";

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
      <Box fontSize="18px" lineHeight="1.756">
        <MDXRemote
          {...source}
          components={{
            h2: (props: any) => (
              <Box
                m="4px 0 16px 0"
                fontSize="3xl"
                fontWeight="semibold"
                as="h2"
                {...props}
              />
            ),
            p: (props: any) => <Box m="4px 0 16px 0" as="p" {...props} />,
            a: (props: any) => <Link m="0 0 16px 0" {...props} color="pink" />,
            ol: (props: any) => (
              <Box m="0 0 16px 0" pl="4" as="ol" {...props} />
            ),
            ul: (props: any) => (
              <Box m="0 0 16px 0" pl="4" as="ul" {...props} />
            ),
            li: (props: any) => <Box m="0 0 16px 0" as="li" {...props} />,
            blockquote: (props: any) => (
              <Box
                m="0 0 16px 0"
                pl="2"
                borderLeft="4px solid pink"
                as="blockquote"
                {...props}
              />
            ),
            // pre: (props: any) => <Highlight {...defaultProps} {...props} />,
          }}
        />
      </Box>
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
