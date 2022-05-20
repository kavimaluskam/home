import { Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

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
import { fetchTilBySlug, fetchTilSlugs, serializeContent } from "../../lib/mdx";
import { TilFrontMatter } from "../../types/mdx";

const Til = ({
  source,
  frontMatter,
}: {
  source: MDXRemoteSerializeResult;
  frontMatter: TilFrontMatter;
}) => {
  return (
    <>
      <Box mb="4">
        <NextLink href="/til">
          <Button leftIcon={<ArrowBackIcon />} variant="ghost" color="gray.500">
            Til
          </Button>
        </NextLink>
      </Box>
      <Box mb="4">
        <Box fontSize="3xl" fontWeight="semibold" mb="2">
          {frontMatter.title}
        </Box>
        <Box as="span" opacity="0.75" fontSize="0.8rem">
          {frontMatter.date}
        </Box>
      </Box>
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
  );
};

export default Til;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const til = fetchTilBySlug(slug);
  const mdxSource = await serializeContent(til.content);

  return {
    props: {
      source: mdxSource,
      frontMatter: til.frontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = fetchTilSlugs()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
