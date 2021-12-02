import {
  AspectRatio,
  Text,
  Image,
  Box,
  LinkOverlay,
  Tooltip,
} from "@chakra-ui/react";

import { useSpotifyTopArtists } from "../hooks/useTopArtists";

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
      <Text fontSize="md" color="gray.900" pb="5" textAlign="center">
        These days I'm listening to 🎧
      </Text>
      <Box padding={5} pos="relative" height="0" pb="80%">
        {topArtists.map((artist, index) => {
          const { left, right, top, bottom, width } =
            AVATAR_POSITION_ARRAY[index];

          return (
            <AspectRatio
              ratio={1}
              key={artist.name}
              display="inline-block"
              pos="absolute"
              left={left}
              right={right}
              top={top}
              bottom={bottom}
              width={width}
            >
              <Tooltip label={artist.name} bg="gray.900" color="gray.50">
                <LinkOverlay href={artist.href} isExternal={true}>
                  <Image
                    alt={artist.name}
                    src={artist.avatar}
                    borderRadius="full"
                    boxSize="100%"
                  />
                </LinkOverlay>
              </Tooltip>
            </AspectRatio>
          );
        })}
      </Box>
    </Box>
  );
};

export default SpotifyTopArtists;
