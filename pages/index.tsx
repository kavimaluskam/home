// index.tsx

import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Job from "../components/Job";
import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";
import OkuclubBooks from "../components/OkuclubBooks";

const Index = () => {
  return (
    <Layout>
      <>
        <Box w="100%" d="inline-block" mb={4}>
          <Bio />
        </Box>

        <Box direction="row" sx={{ columnCount: [1, 1, 2], gap: "16px" }}>
          <Box w="100%" d="inline-block" mb={4}>
            <Job />
          </Box>
          <Box w="100%" d="inline-block" mb={4}>
            <LetterboxdRecentMovies />
          </Box>
          <Box w="100%" d="inline-block" mb={4}>
            <SpotifyTopArtists />
          </Box>
          <Box w="100%" d="inline-block" mb={4}>
            <OkuclubBooks />
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default Index;
