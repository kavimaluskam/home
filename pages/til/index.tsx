// til.tsx

import { Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

import { TilListing } from "../../components/Til/Listing";
import { Til } from "../../types/mdx";
import { fetchTilSlugs, fetchTilBySlug } from "../../lib/mdx";

const TilPage = ({ tilList }: { tilList: Array<Til> }) => {
  return (
    <>
      <Box>
        <NextLink href="/">
          <Button leftIcon={<ArrowBackIcon />} variant="ghost" color="gray.500">
            Home
          </Button>
        </NextLink>
      </Box>
      {tilList.map(({ frontMatter }) => (
        <Box p="2" key={frontMatter.slug}>
          <TilListing frontMatter={frontMatter} />
        </Box>
      ))}
    </>
  );
};

export default TilPage;

export const getStaticProps = () => {
  const tilList = fetchTilSlugs().map(fetchTilBySlug);

  return { props: { tilList } };
};
