import {
  AspectRatio,
  Text,
  Image,
  Box,
  LinkOverlay,
  Tooltip,
} from "@chakra-ui/react";

import { useLetterboxdRecentMovies } from "../hooks/useLetterboxdRecentMovies";

const AVATAR_POSITION_ARRAY = [
  { left: "28%", top: "0%", width: "44%", zIndex: 2 },
  { left: "2%", bottom: "10%", width: "44%", transform: "rotate(-5deg)" },
  { right: "2%", bottom: "3%", width: "44%", transform: "rotate(4deg)" },
];

const LetterboxdRecentMovies = () => {
  const recentMovies = useLetterboxdRecentMovies();

  return (
    <Box padding={5} bg="black" borderRadius="lg" pos="relative">
      <Text fontSize="md" color="gray.100" pb="5" textAlign="center">
        Lately I've watched 🍿
      </Text>
      <Box padding={5} pos="relative" height="0" pb="75%">
        {recentMovies.map((movie, index) => {
          const { left, right, top, bottom, width, zIndex, transform } =
            AVATAR_POSITION_ARRAY[index];

          return (
            <AspectRatio
              ratio={2 / 3}
              key={movie.name}
              display="inline-block"
              pos="absolute"
              left={left}
              right={right}
              top={top}
              bottom={bottom}
              width={width}
              zIndex={zIndex}
              transform={transform}
            >
              <Tooltip label={movie.name} bg="gray.900" color="gray.50">
                <LinkOverlay href={movie.href} isExternal={true}>
                  <Image
                    alt={movie.name}
                    src={movie.avatar}
                    borderRadius={2}
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

export default LetterboxdRecentMovies;
