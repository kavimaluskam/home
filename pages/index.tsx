// index.tsx

import { Grid, GridItem } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Bio from "../components/Bio";

import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";

import { getRecentMovies } from "../lib/Letterboxd";
import { getTopArtists } from "../lib/Spotify";

import { RecentMovie } from "../types/Letterboxd";
import { TopArtist } from "../types/Spotify";

interface IndexPageProps {
  topArtists: TopArtist[];
  recentMovies: RecentMovie[];
}

const Index = ({ topArtists, recentMovies }: IndexPageProps) => {
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
        <LetterboxdRecentMovies recentMovies={recentMovies} />
      </GridItem>
      <GridItem colSpan={{ md: 1, sm: 2 }}>
        <SpotifyTopArtists topArtists={topArtists} />
      </GridItem>
    </Grid>
  );
};

// This gets called on every request
export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return Promise.all([
    getRecentMovies(),
    getTopArtists(),
    serverSideTranslations(locale, ["common"]),
  ]).then(([recentMovies, topArtists, ssrTranslation]) => {
    return { props: { topArtists, recentMovies, ...ssrTranslation } };
  });
};

export default Index;
