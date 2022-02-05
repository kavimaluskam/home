import { Box, Link, Text } from "@chakra-ui/react";
import Avatar from "./avatar";
import { useSpotifyTopArtists } from "../../hooks/useSpotifyTopArtists";
import siteMetadata from "../../configs/siteMetadata";

const AVATAR_POSITION_ARRAY = [
  { left: "33%", top: "26%", width: "35%" },
  { left: "0%", top: "0%", width: "28%" },
  { left: "71%", top: "12%", width: "26%" },
  { right: "2%", top: "60%", width: "24%" },
  { left: "3%", top: "55%", width: "20%" },
  { left: "40%", bottom: "0%", width: "18%" },
  { left: "40%", top: "0%", width: "16%" },
];

const SpotifyTopArtists = () => {
  const topArtists = useSpotifyTopArtists();

  return (
    <Box padding={5} bg="gray.200" borderRadius="lg" pos="relative">
      <Link href={siteMetadata.spotifyTopArtists.profile} isExternal={true}>
        <Text fontSize="md" color="gray.900" pb="5" textAlign="center">
          {siteMetadata.spotifyTopArtists.headline}
        </Text>
      </Link>

      <Box padding={5} pos="relative" height="0" pb="80%">
        {topArtists &&
          topArtists.length > 0 &&
          topArtists.map((artist, index) => {
            const { left, right, top, bottom, width } =
              AVATAR_POSITION_ARRAY[index];

            return (
              <Avatar
                key={artist.name}
                artist={artist}
                left={left}
                right={right}
                top={top}
                bottom={bottom}
                width={width}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default SpotifyTopArtists;
