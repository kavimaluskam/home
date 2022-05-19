import { Box, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Blog } from "../../types/mdx";

import siteMetadata from "../../configs/siteMetadata";

const PreviewWidget = ({ blogs }: { blogs: Array<Blog> }) => {
  const latestBlog = blogs[0];
  const { frontMatter } = latestBlog;
  return (
    <Box padding={5} bg="gray.200" borderRadius="lg" pos="relative">
      <Link href={`/blogs`}>
        <Text fontSize="md" color="gray.900" pb="5" textAlign="center">
          {siteMetadata.blogs.headline}
        </Text>
      </Link>
      <Box p="2" mx="2">
        <NextLink href={`/blogs/${frontMatter.slug}`} passHref>
          <Link color="gray.900" _hover={{ color: "orange" }}>
            <Box mb="5" borderRadius="lg">
              <Image
                src={frontMatter.hero}
                alt={`by ${frontMatter.heroName}`}
              />
            </Box>
            <Box mt="1" fontSize="lg" as="h3">
              {frontMatter.title}
            </Box>

            <Box mt="1" as="p" fontSize="sm" color="gray.500">
              {frontMatter.excerpt}
            </Box>
          </Link>
        </NextLink>
        <Box color="gray.900" mt="2" opacity="0.75" fontSize="0.8rem">
          {frontMatter.date} · {frontMatter.readingTime} min read
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewWidget;
