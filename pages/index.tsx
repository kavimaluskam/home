// index.tsx
import { NextPage } from "next";
import Link from "next/link";

import { Grid, GridItem } from "@chakra-ui/react";

import Bio from "../components/Bio";

import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";

const Index: NextPage = () => {
  return (
    <Grid
      maxW={{ sm: "90%", md: "80%", lg: "70%" }}
      mx="auto"
      mt={8}
      px={3}
      as="main"
      templateColumns="repeat(2, 2fr)"
      gap={4}
    >
      <GridItem colSpan={2}>
        <Bio />
      </GridItem>
      <GridItem colSpan={{ md: 1, sm: 2 }}>
        <LetterboxdRecentMovies />
      </GridItem>
      <GridItem colSpan={{ md: 1, sm: 2 }}>
        <SpotifyTopArtists />
      </GridItem>
    </Grid>
  );
};

export default Index;
