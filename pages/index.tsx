// index.tsx

import { Grid, GridItem } from "@chakra-ui/react";

import Bio from "../components/Bio";

import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";

import { useLetterboxdRecentMovies } from "../hooks/useLetterboxdRecentMovies";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";

import siteMetadata from "../siteMetadata.json";

const Index = () => {
  const recentMovies = useLetterboxdRecentMovies();
  const topArtists = useSpotifyTopArtists();

  return (
    <Grid
      maxW={{ sm: "90%", md: "80%", lg: "60%" }}
      mx="auto"
      mt={8}
      px={3}
      as="main"
      templateColumns="repeat(2, 2fr)"
      gap={6}
    >
      <GridItem colSpan={2}>
        <Bio {...siteMetadata.bio} />
      </GridItem>
      <GridItem colSpan={{ md: 1, sm: 2 }}>
        <LetterboxdRecentMovies
          recentMovies={recentMovies}
          headline={siteMetadata.letterboxdRecentMovies.headline}
        />
      </GridItem>
      <GridItem colSpan={{ md: 1, sm: 2 }}>
        <SpotifyTopArtists
          topArtists={topArtists}
          headline={siteMetadata.spotifyTopArtists.headline}
        />
      </GridItem>
    </Grid>
  );
};

export default Index;
