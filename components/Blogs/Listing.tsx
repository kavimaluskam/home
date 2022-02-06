import { Badge, Box, Flex, Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

import { FrontMatter } from "../../types/mdx";

const BlogListing = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" my="4" p="5">
      <NextLink href={`/blogs/${frontMatter.slug}`} passHref>
        <Link>
          <Box mb="5" borderRadius="lg">
            <Image src={frontMatter.hero} alt={`by ${frontMatter.heroName}`} />
          </Box>
        </Link>
      </NextLink>

      <Flex alignItems="baseline">
        {frontMatter.tags.map((tag) => (
          <Badge
            py="1"
            px="1"
            mr="2"
            borderRadius="lg"
            variant="solid"
            colorScheme="pink"
            fontSize="0.6rem"
          >
            {tag}
          </Badge>
        ))}
      </Flex>

      <NextLink href={`/blogs/${frontMatter.slug}`} passHref>
        <Link _hover={{ color: "pink" }}>
          {/* <Box> */}
          <Box mt="1" fontSize="2xl" as="h2">
            {frontMatter.title}
          </Box>

          <Box mt="1" as="p" color="gray.500">
            {frontMatter.excerpt}
          </Box>

          <Box mt="4" color="gray.600" fontSize="0.8rem">
            {frontMatter.date} · {frontMatter.readingTime} min read
          </Box>
          {/* </Box> */}
        </Link>
      </NextLink>
    </Box>
  );
};

export { BlogListing };
