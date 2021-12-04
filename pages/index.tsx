// index.tsx

import { Box } from "@chakra-ui/react";

import Bio from "../components/Bio";

import LetterboxdRecentMovies from "../components/LetterboxdRecentMovies";
import SpotifyTopArtists from "../components/SpotifyTopArtists";
import OkuclubBooks from "../components/OkuclubBooks";

import { useLetterboxdRecentMovies } from "../hooks/useLetterboxdRecentMovies";
import { useSpotifyTopArtists } from "../hooks/useSpotifyTopArtists";
import { useOkuclubBooks } from "../hooks/useOkuclubBooks";

import siteMetadata from "../siteMetadata.json";

const Index = () => {
  const recentMovies = useLetterboxdRecentMovies();
  const topArtists = useSpotifyTopArtists();
  const readingBooks = useOkuclubBooks();

  console.log(readingBooks);

  return (
    <Box maxW={{ sm: "90%", md: "80%", lg: "60%" }} mx="auto" mt={8} px={3}>
      <Box w="100%" d="inline-block" mb={4}>
        <Bio {...siteMetadata.bio} />
      </Box>
      <Box sx={{ columnCount: [1, 1, 2], gap: "16px" }}>
        <Box w="100%" d="inline-block" mb={4}>
          <LetterboxdRecentMovies
            recentMovies={recentMovies}
            headline={siteMetadata.letterboxdRecentMovies.headline}
          />
        </Box>
        <Box w="100%" d="inline-block" mb={4}>
          <SpotifyTopArtists
            topArtists={topArtists}
            headline={siteMetadata.spotifyTopArtists.headline}
          />
        </Box>
        <Box w="100%" d="inline-block" mb={4}>
          <OkuclubBooks
            readingBooks={readingBooks}
            headline={siteMetadata.spotifyTopArtists.headline}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
