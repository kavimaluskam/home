import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Til } from "../../types/mdx";

import siteMetadata from "../../configs/siteMetadata";

const TilPreviewWidget = ({ til }: { til: Array<Til> }) => {
  return (
    <Box padding={5} bg="gray.200" borderRadius="lg" pos="relative">
      <Link href={`/til`}>
        <Text fontSize="md" color="gray.900" pb="5" textAlign="center">
          {siteMetadata.til.headline}
        </Text>
      </Link>
      <Box p="2" mx="2">
        {til.map(({ frontMatter }) => (
          <NextLink href={`/til/${frontMatter.slug}`} passHref>
            <Link color="gray.900" _hover={{ color: "orange" }}>
              <Box mt="1" fontSize="md" as="h3">
                {frontMatter.title}
                <Box
                  mt="1"
                  as="p"
                  fontSize="sm"
                  color="gray.500"
                  display="inline"
                >
                  {` - ${frontMatter.date}`}
                </Box>
              </Box>
            </Link>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
};

export default TilPreviewWidget;
