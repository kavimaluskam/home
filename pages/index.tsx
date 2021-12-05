// index.tsx

import { Box } from "@chakra-ui/react";

import Bio from "../components/Bio";
import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";
import OkuclubBooks from "../components/OkuclubBooks";

const Index = () => {
  return (
    <Box maxW={{ sm: "90%", md: "80%", lg: "60%" }} mx="auto" mt={8} px={3}>
      <Box
        background="linear-gradient(319deg, rgb(255 51 98 / 8%) 10%, rgb(255 235 0 / 0%) 50%), linear-gradient(20deg, rgb(255 200 0 / 13%) 5%, rgb(255 212 0 / 0%) 40%)"
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        zIndex={0}
      ></Box>
      <Box w="100%" d="inline-block" mb={4}>
        <Bio />
      </Box>
      <Box sx={{ columnCount: [1, 1, 2], gap: "16px" }}>
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
    </Box>
  );
};

export default Index;
