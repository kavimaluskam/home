import { Badge, Box, Flex, Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

import { TilFrontMatter } from "../../types/mdx";

const TilListing = ({ frontMatter }: { frontMatter: TilFrontMatter }) => {
  return (
    <Box borderRadius="lg">
      <NextLink href={`/til/${frontMatter.slug}`} passHref>
        <Link _hover={{ color: "orange" }}>
          <Box mt="1" mr="2" fontSize="xl" display="inline-block">
            {frontMatter.title}
          </Box>
        </Link>
      </NextLink>
      <Box fontSize="sm" display="inline-block" color="gray.500">
        {frontMatter.date}
      </Box>
      <Flex alignItems="baseline" mt="1">
        {frontMatter.tags.map((tag) => (
          <Badge
            key={tag}
            py="1"
            px="1"
            mr="2"
            borderRadius="lg"
            variant="solid"
            colorScheme="orange"
            fontSize="0.6rem"
          >
            {tag}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};

export { TilListing };
